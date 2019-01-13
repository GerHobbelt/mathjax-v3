import {MathJax} from '../mathjax3/mathjax.js';

import {TeX} from '../mathjax3/input/tex.js';
import {RegisterHTMLHandler} from '../mathjax3/handlers/html.js';
import {chooseAdaptor} from '../mathjax3/adaptors/chooseAdaptor.js';
import {AllPackages} from '../mathjax3/input/tex/AllPackages.js';

RegisterHTMLHandler(chooseAdaptor());

let html = MathJax.document('<html></html>', {
  InputJax: new TeX({packages: AllPackages})
});

console.log(html.inputJax[0].configuration);
import {JsonMmlVisitor} from '../mathjax3/core/MmlTree/JsonMmlVisitor.js';
let visitor = new JsonMmlVisitor();
let toJSON = (node => visitor.visitTree(node));

MathJax.handleRetriesFor(() => {

    html.TestMath(process.argv[3] || '').compile();
    let math = html.math.pop().root;
    math.setTeXclass();
    console.log(JSON.stringify(toJSON(math)));

}).catch(err => console.log(err.stack));
