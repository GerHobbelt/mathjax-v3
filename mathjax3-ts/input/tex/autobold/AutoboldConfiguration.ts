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
 * @fileoverview Configuration file for the autobold package.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 */

import {Configuration} from '../Configuration.js';
import {HTMLMathItem} from '../../../handlers/html/HTMLMathItem.js';
import ParseOptions from '../ParseOptions.js';
import {BoldsymbolConfiguration} from '../boldsymbol/BoldsymbolConfiguration.js';


let addBoldsymbol = function(data: {math: any, configuration: ParseOptions}) {
  let node = data.math.start.node;
  let parent = node.parentNode;
  let span = document.createElement('span') as any;
  parent.appendChild(span);
  span.style.visibility = 'hidden';
  span.style.fontFamily = 'Times, serif';
  span.appendChild(document.createTextNode('ABCXYZabcxyz'));
  let W = span.offsetWidth;
  span.style.fontWeight = 'bold';
  if (W && span.offsetWidth === W) {
    data.math.math = '\\boldsymbol{' + data.math.math + '}';
  }
  span.parentNode.removeChild(span);
  return data;
};


/**
 * Init method for Autobold package. Loads boldsymbol.
 * @param {Configuration} config The current configuration.
 */
let init = function(config: Configuration) {
  config.append(BoldsymbolConfiguration);
};


export const AutoboldConfiguration = Configuration.create(
  'autobold', {preprocessors: [addBoldsymbol],
               init: init}
);
