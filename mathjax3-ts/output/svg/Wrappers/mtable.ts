/*************************************************************
 *
 *  Copyright (c) 2018 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

/**
 * @fileoverview  Implements the SVGmtable wrapper for the MmlMtable object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */

import {SVGWrapper, SVGConstructor} from '../Wrapper.js';
import {SVGWrapperFactory} from '../WrapperFactory.js';
import {CommonMtable, CommonMtableMixin} from '../../common/Wrappers/mtable.js';
import {SVGmtr} from './mtr.js';
import {SVGmtd} from './mtd.js';
import {MmlMtable} from '../../../core/MmlTree/MmlNodes/mtable.js';
import {MmlNode} from '../../../core/MmlTree/MmlNode.js';
import {isPercent} from '../../../util/string.js';
import {OptionList} from '../../../util/Options.js';
import {StyleList} from '../../common/CssStyles.js';
import {BBox} from '../BBox.js';

const WFUZZ = .25;  // a little padding for min-width

/*****************************************************************/
/**
 * The SVGmtable wrapper for the MmlMtable object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export class SVGmtable<N, T, D> extends
CommonMtableMixin<SVGmtd<N, T, D>, SVGmtr<N, T, D>, SVGConstructor<N, T, D>>(SVGWrapper) {

    public static kind = MmlMtable.prototype.kind;

    public static styles: StyleList = {
        'g[data-mml-node="mtable"] > line[data-line]': {
            'stroke-width': '70px',
            fill: 'none'
        },
        'g[data-mml-node="mtable"] > rect[data-frame]': {
            'stroke-width': '70px',
            fill: 'none'
        },
        'g[data-mml-node="mtable"] > .mjx-dashed': {
            'stroke-dasharray': '140'
        },
        'g[data-mml-node="mtable"] > .mjx-dotted': {
            'stroke-linecap': 'round',
            'stroke-dasharray': '0,140'
        },
        'g[data-mml-node="mtable"] > svg': {
            overflow: 'visible'
        }
    }

    /**
     * The column for labels
     */
    public labels: N;

    /******************************************************************/

    /**
     * @override
     */
    constructor(factory: SVGWrapperFactory<N, T, D>, node: MmlNode, parent: SVGWrapper<N, T, D> = null) {
        super(factory, node, parent);
        const def: OptionList = {'data-labels': true};
        if (this.isTop) {
            def.transform = 'matrix(1 0 0 -1 0 0)';
        }
        this.labels = this.svg('g', def);
    }

    /**
     * @override
     */
    public toSVG(parent: N) {
        const svg = this.standardSVGnode(parent);
        this.placeRows(svg);
        this.handleColumnLines(svg);
        this.handleRowLines(svg);
        this.handleFrame(svg);
        const dx = this.handlePWidth(svg);
        this.handleLabels(svg, parent, dx);
    }

    /**
     * @param {N} svg  The container in which to place the rows
     */
    protected placeRows(svg: N) {
        const equal = this.node.attributes.get('equalrows') as boolean;
        const {H, D} = this.getTableData();
        const HD = this.getEqualRowHeight();
        const rSpace = this.getRowHalfSpacing();
        const rLines = [this.fLine, ...this.rLines, this.fLine];
        let y = this.getBBox().h - rLines[0];
        for (let i = 0; i < this.numRows; i++) {
            const row = this.childNodes[i];
            [row.H, row.D] = this.getRowHD(equal, HD, H[i], D[i]);
            [row.tSpace, row.bSpace] = [rSpace[i], rSpace[i+1]];
            [row.tLine, row.bLine] = [rLines[i], rLines[i+1]];
            row.toSVG(svg);
            row.place(0, y - rSpace[i] - row.H);
            y -= rSpace[i] + row.H + row.D + rSpace[i+1] + rLines[i+1];
        }
    }

    /**
     * @param {boolean} equal   True for equal-height rows
     * @param {number} HD       The height of equal-height rows
     * @param {number} H        The natural height of the row
     * @param {number} D        The natural depth of the row
     * @return {number[]}       The (possibly scaled) height and depth to use
     */
    protected getRowHD(equal: boolean, HD: number, H: number, D: number) {
        return (equal ? [(HD + H - D) / 2, (HD - H + D) / 2] : [H, D]);
    }

    /******************************************************************/

    /**
     * @override
     */
    public handleColor() {
        super.handleColor();
        const rect = this.adaptor.firstChild(this.element);
        if (rect) {
            this.adaptor.setAttribute(rect, 'width', this.fixed(this.getWidth()));
        }
    }

    /**
     * Add vertical lines between columns
     *
     * @param {N} svg   The container for the table
     */
    protected handleColumnLines(svg: N) {
        if (this.node.attributes.get('columnlines') === 'none') return;
        const lines = this.getColumnAttributes('columnlines');
        if (!lines) return;
        const cSpace = this.getColumnHalfSpacing();
        const cLines = this.cLines;
        const cWidth = this.getComputedWidths();
        let x = this.fLine;
        for (let i = 0; i < lines.length; i++) {
            x += cSpace[i] + cWidth[i] + cSpace[i+1];
            this.adaptor.append(svg, this.makeVLine(x, lines[i], cLines[i]));
            x += cLines[i];
        }
    }

    /**
     * Add horizontal lines between rows
     *
     * @param {N} svg   The container for the table
     */
    protected handleRowLines(svg: N) {
        if (this.node.attributes.get('rowlines') === 'none') return;
        const lines = this.getRowAttributes('rowlines');
        if (!lines) return;
        const equal = this.node.attributes.get('equalrows') as boolean;
        const {H, D} = this.getTableData();
        const HD = this.getEqualRowHeight();
        const rSpace = this.getRowHalfSpacing();
        const rLines = this.rLines;
        let y = this.getBBox().h - this.fLine;
        for (let i = 0; i < lines.length; i++) {
            const [rH, rD] = this.getRowHD(equal, HD, H[i], D[i]);
            y -= rSpace[i] + rH + rD + rSpace[i+1]
            this.adaptor.append(svg, this.makeHLine(y, lines[i], rLines[i]));
            y -= rLines[i];
        }

    }

    /**
     * Add a frame to the mtable, if needed
     *
     * @param {N} svg   The container for the table
     */
    protected handleFrame(svg: N) {
        if (this.frame) {
            const {h, d, w} = this.getBBox();
            const style = this.node.attributes.get('frame') as string;
            this.adaptor.append(svg, this.makeFrame(w, h, d, style));
        }
    }

    /**
     * @return {number}   The x-adjustement needed to handle the true size of percentage-width tables
     */
    protected handlePWidth(svg: N) {
        if (!this.pWidth) return 0;
        const {w, L, R} = this.getBBox();
        const W = L + this.pWidth + R;
        const [align, shift] = this.getAlignShift();
        const CW = Math.max(this.isTop ? W : 0, this.container.getWrapWidth(this.containerI)) - L - R;
        const dw = w - (this.pWidth > CW ? CW: this.pWidth);
        const dx = (align === 'left' ? 0 : align === 'right' ? dw : dw / 2);
        if (dx) {
            const table = this.svg('g', {}, this.adaptor.childNodes(svg));
            this.place(dx, 0, table);
            this.adaptor.append(svg, table);
        }
        return dx;
    }

    /******************************************************************/

    /**
     * @param {number} w       The width of the frame
     * @param {number} h       The height of the frame
     * @param {number} d       The depth of the frame
     * @param {string} style   The border style for the frame
     * @return {N}             The SVG element for the frame
     */
    protected makeFrame(w: number, h: number, d: number, style: string) {
        const t = this.fLine;
        return this.svg('rect', this.setLineThickness(t, style, {
            'data-frame': true, 'class': 'mjx-' + style,
            width: this.fixed(w - t), height: this.fixed(h + d - t),
            x: this.fixed(t / 2), y: this.fixed(t / 2 - d)
        }));
    }

    /**
     * @param {number} x       The x location of the line
     * @param {string} style   The border style for the line
     * @param {number} t       The line thickness
     * @return {N}             The SVG element for the line
     */
    protected makeVLine(x: number, style: string, t: number) {
        const {h, d} = this.getBBox();
        const dt = (style === 'dotted' ? t / 2 : 0);
        const X = this.fixed(x + t / 2);
        return this.svg('line', this.setLineThickness(t, style, {
            'data-line': 'v', 'class': 'mjx-' + style,
            x1: X, y1: this.fixed(dt - d), x2: X, y2: this.fixed(h - dt)
        }));
    }

    /**
     * @param {number} y       The y location of the line
     * @param {string} style   The border style for the line
     * @param {number} t       The line thickness
     * @return {N}             The SVG element for the line
     */
    protected makeHLine(y: number, style: string, t: number) {
        const w = this.getBBox().w;
        const dt = (style === 'dotted' ? t / 2 : 0);
        const Y = this.fixed(y - t / 2);
        return this.svg('line', this.setLineThickness(t, style, {
            'data-line': 'h', 'class': 'mjx-' + style,
            x1: this.fixed(dt), y1: Y, x2: this.fixed(w - dt), y2: Y
        }));
    }

    /**
     * @param {number} t                The thickness of the line
     * @param {string} style            The border style for the line
     * @param {OptionList} properties   The list of properties to modify
     * @param {OptionList}              The modified properties
     */
    protected setLineThickness(t: number, style: string, properties: OptionList) {
        if (t !== .07) {
            properties['stroke-thickness'] = this.fixed(t);
            if (style !== 'solid') {
                properties['stroke-dasharray'] = (style === 'dotted' ? '0,' : '') + this.fixed(2 * t);
            }
        }
        return properties
    }

    /******************************************************************/

    /**
     * Handle addition of labels to the table
     *
     * @param {N} svg       The container for the table contents
     * @param {N} parent    The parent containing the the table
     * @param {number} dx   The adjustement for percentage width tables
     */
    protected handleLabels(svg: N, parent: N, dx: number) {
        if (!this.hasLabels) return;
        const labels = this.labels;
        const attributes = this.node.attributes;
        const adaptor = this.adaptor;
        //
        //  Set the side for the labels
        //
        const side = attributes.get('side') as string;
        //
        // Add the labels to the table
        //
        this.spaceLabels();
        //
        // Handle top-level table to make it adapt to container size
        //   but place subtables explicitly
        //
        this.isTop ? this.topTable(svg, labels, side) : this.subTable(svg, labels, side, dx);
    }

    /**
     * Add spacing elements between the label rows to align them with the rest of the table
     */
    protected spaceLabels() {
        const adaptor = this.adaptor;
        const equal = this.node.attributes.get('equalrows') as boolean;
        const {h, d} = this.getBBox();
        const L = this.getTableData().L;
        const space = this.getRowHalfSpacing();
        //
        //  Start with frame size and add in spacing, height and depth,
        //    and line thickness for each non-labeled row.
        //
        let y = h - this.fLine;
        let current = adaptor.firstChild(this.labels) as N;
        for (let i = 0; i < this.numRows; i++) {
            const row = this.childNodes[i] as SVGmtr<N, T, D>;
            if (row.node.isKind('mlabeledtr')) {
                const cell = row.childNodes[0];
                y -= space[i] + row.H;
                row.placeCell(cell, {x: 0, y: y, w: L, lSpace: 0, rSpace: 0, lLine: 0, rLine: 0});
                y -= row.D + space[i + 1] + this.rLines[i];
                current = adaptor.next(current) as N;
            } else {
                y -= space[i] + row.H + row.D + space[i + 1] + this.rLines[i];
            }
        }
    }

    /**
     * @param {N} svg         The SVG container for the table
     * @param {N} labels      The group of labels
     * @param {string} side   The side alignment (left or right)
     */
    protected topTable(svg: N, labels: N, side: string) {
        const adaptor = this.adaptor;
        const {h, d, w, L, R} = this.getBBox();
        const W = L + (this.pWidth || w) + R;
        const LW = this.getTableData().L;
        const [pad, align, shift] = this.getPadAlignShift(side);
        const translate = (shift ? ` translate(${this.fixed(shift)} 0)` : '');
        const scale = `scale(${this.jax.fixed((this.font.params.x_height * 1000) / this.metrics.ex, 2)})`;
        const transform = `translate(0, ${this.fixed(h)}) matrix(1 0 0 -1 0 0) ${scale}`;
        let table = this.svg('svg', {
            'data-table': true, transform: transform,
            preserveAspectRatio: (align === 'left' ? 'xMinYMid' : align === 'right' ? 'xMaxYMid' : 'xMidYMid'),
            viewBox: [this.fixed(-L), this.fixed(-h), this.fixed(W), this.fixed(h + d)].join(' ')
        }, [
            this.svg('g', {transform: 'matrix(1 0 0 -1 0 0)' + translate}, adaptor.childNodes(svg))
        ]);
        labels = this.svg('svg', {
            'data-labels': true, transform: transform,
            preserveAspectRatio: (side === 'left' ? 'xMinYMid' : 'xMaxYMid'),
            viewBox: [0, this.fixed(-h), this.fixed(LW), this.fixed(h + d)].join(' ')
        }, [labels]);
        adaptor.append(svg, table)
        adaptor.append(svg, labels);
        this.place(-L, 0, svg);  // remove spacing for L, which is added by the parent during appending
    }

    /**
     * @param {N} svg         The SVG container for the table
     * @param {N} labels      The group of labels
     * @param {string} side   The side alignment (left or right)
     * @param {number} dx     The adjustement for percentage width tables
     */
    protected subTable(svg: N, labels: N, side: string, dx: number) {
        const adaptor = this.adaptor;
        const {w, L, R} = this.getBBox();
        const W = L + (this.pWidth || w) + R;
        const labelW = this.getTableData().L;
        const [align, shift] = this.getAlignShift();
        const CW = Math.max(W, this.container.getWrapWidth(this.containerI));
        this.place(side === 'left' ?
                   (align === 'left' ? 0 : align === 'right' ? W - CW + dx : (W - CW) / 2 + dx) - L :
                   (align === 'left' ? CW : align === 'right' ? W + dx : (CW + W) / 2 + dx) - L - labelW,
                   0, labels);
        adaptor.append(svg, labels);
    }

}
