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
 * @fileoverview Methods for the AMScd package.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 */


import TexParser from '../TexParser.js';
import TexError from '../TexError.js';
import {ParseMethod} from '../Types.js';
import BaseMethods from '../base/BaseMethods.js';
import {StackItem, EnvList} from '../StackItem.js';
import {ArrayItem} from '../base/BaseItems.js';
import {Other} from '../base/BaseConfiguration.js';
import {MmlMunderover} from '../../../core/MmlTree/MmlNodes/munderover.js';
import {TEXCLASS} from '../../../core/MmlTree/MmlNode.js';
import NodeUtil from '../NodeUtil.js';


// Namespace
let AmsCdMethods: Record<string, ParseMethod> = {};


/**
 * Handles CD environment for commutative diagrams.
 * @param {TexParser} parser The calling parser.
 * @param {StackItem} begin The opening stackitem.
 */
AmsCdMethods.CD = function(parser: TexParser, begin: StackItem) {
  parser.Push(begin);
  let item = parser.itemFactory.create('array') as ArrayItem;
  item.setProperties({
    minw: parser.stack.env.CD_minw || parser.configuration.options.harrowsize,
    minh: parser.stack.env.CD_minh || parser.configuration.options.varrowsize
  });
  item.arraydef = {
      columnalign: 'center',
      columnspacing: parser.configuration.options.colspace,
      rowspacing: parser.configuration.options.rowspace,
      displaystyle: true
  };
  return item;
};


/**
 * Converts arrows.
 * @param {TexParser} parser The calling parser.
 * @param {string} name The macro name.
 */
AmsCdMethods.arrow = function(parser: TexParser, name: string) {
  let c = parser.string.charAt(parser.i);
  if (!c.match(/[><VA.|=]/)) {
    return Other(parser, name);
  } else {
    parser.i++;
  }
  let first = parser.stack.Top();
  if (!first.isKind('array') || first.Size()) {
    AmsCdMethods.cell(parser, name);
    first = parser.stack.Top();
  }
  let top = first as ArrayItem;
  //
  //  Add enough cells to place the arrow correctly
  //
  let arrowRow = ((top.table.length % 2) === 1);
  let n = (top.row.length + (arrowRow ? 0 : 1)) % 2;
  while (n) {
    AmsCdMethods.cell(parser, name);
    n--;
  }

  let mml;
  let hdef = {minsize: top.getProperty('minw'), stretchy: true},
  vdef = {minsize: top.getProperty('minh'),
          stretchy: true, symmetric: true, lspace: 0, rspace: 0};

  if (c === '.') {
  } else if (c === '|') {
    mml = parser.create('token', 'mo',  vdef, '\u2225');
  } else if (c === '=') {
    mml = parser.create('token', 'mo', hdef, '=');
  } else {
    //
    //  for @>>> @<<< @VVV and @AAA, get the arrow and labels
    //
    // TODO: cleanup!
    let arrow: string = ({
      '>': '\u2192', '<': '\u2190', 'V': '\u2193', 'A': '\u2191'} as {[key: string]: string}) [c];
    let a = parser.GetUpTo(name + c, c);
    let b = parser.GetUpTo(name + c, c);
    if (c === '>' || c === '<') {
      //
      //  Lay out horizontal arrows with munderover if it has labels
      //
      mml = parser.create('token', 'mo', hdef, arrow);
      if (!a) {
        a = '\\kern ' + top.getProperty('minw');
      } // minsize needs work
      if (a || b) {
        let pad: EnvList = {width: '+11mu', lspace: '6mu'};
        mml = parser.create('node', 'munderover', [mml]) as MmlMunderover;
        if (a) {
          let nodeA = new TexParser(a, parser.stack.env, parser.configuration).mml();
          let mpadded = parser.create('node', 'mpadded', [nodeA], pad);
          NodeUtil.setAttribute(mpadded, 'voffset', '1em');
          NodeUtil.setChild(mml, mml.over, mpadded);
        }
        if (b) {
          let nodeB = new TexParser(b, parser.stack.env, parser.configuration).mml();
          NodeUtil.setChild(mml, mml.under, parser.create('node', 'mpadded', [nodeB], pad));
        }
          if (parser.configuration.options.hideHorizontalLabels) {
            mml = parser.create('node', 'mpadded', mml, {depth: 0, height: '.67em'});
          }
        }
      } else {
      //
      //  Lay out vertical arrows with mrow if there are labels
      //
        let arrowNode = parser.create('token', 'mo', vdef, arrow);
        mml = arrowNode;
        if (a || b) {
          mml = parser.create('node', 'mrow');
          if (a) {
            NodeUtil.appendChildren(
              mml, [new TexParser('\\scriptstyle\\llap{' + a + '}', parser.stack.env, parser.configuration).mml()]);
          }
          arrowNode.texClass = TEXCLASS.ORD;
          NodeUtil.appendChildren(mml, [arrowNode]);
          if (b) {
            NodeUtil.appendChildren(mml, [new TexParser('\\scriptstyle\\rlap{' + b + '}',
                                                       parser.stack.env, parser.configuration).mml()]);
          }
      }
    }
  }
  if (mml) {
    parser.Push(mml);
  }
  AmsCdMethods.cell(parser, name);
};


/**
 * Converts a cell in the diagram.
 * @param {TexParser} parser The calling parser.
 * @param {string} name The macro name.
 */
AmsCdMethods.cell = function(parser: TexParser, name: string) {
  let top = parser.stack.Top() as ArrayItem;
  if ((top.table || []).length % 2 === 0 && (top.row || []).length === 0) {
    //
    // Add a strut to the first cell in even rows to get
    // better spacing of arrow rows.
    // 
    parser.Push(parser.create('node', 'mpadded', [], {height: '8.5pt', depth: '2pt'}));
  }
  parser.Push(parser.itemFactory.create('cell').setProperties({isEntry: true, name: name}));
};


/**
 * Sets minimal width for arrows.
 * @param {TexParser} parser The calling parser.
 * @param {string} name The macro name.
 */
AmsCdMethods.minwidth = function(parser: TexParser, name: string) {
  parser.stack.env.CD_minw = parser.GetDimen(name);
};


/**
 * Sets minimal height for arrows.
 * @param {TexParser} parser The calling parser.
 * @param {string} name The macro name.
 */
AmsCdMethods.minheight = function(parser: TexParser, name: string) {
  parser.stack.env.CD_minh = parser.GetDimen(name);
};


export default AmsCdMethods;
