MathJax = require("../legacy/MathJax.js").MathJax;

MathJax.Ajax.Preloading(
  "[MathJax]/jax/input/TeX/config.js",
  "[MathJax]/jax/input/TeX/jax.js",
  "[MathJax]/jax/element/mml/jax.js",
  "[MathJax]/extensions/TeX/AMSmath.js",
  "[MathJax]/extensions/TeX/AMSsymbols.js",
  "[MathJax]/extensions/TeX/AMScd.js",
  "[MathJax]/extensions/TeX/newcommand.js",
  "[MathJax]/extensions/TeX/unicode.js",
  "[MathJax]/extensions/TeX/mathchoice.js",
  "[MathJax]/extensions/TeX/bbox.js",
  "[MathJax]/extensions/TeX/HTML.js"
);

require("../legacy/jax/element/mml/jax.js");
require("../legacy/jax/input/TeX/config.js");
require("../legacy/jax/input/TeX/jax.js");
require("../legacy/extensions/TeX/AMSmath.js");
require("../legacy/extensions/TeX/AMSsymbols.js");
require("../legacy/extensions/TeX/AMScd.js");
require("../legacy/extensions/TeX/newcommand.js");
require("../legacy/extensions/TeX/unicode.js");
require("../legacy/extensions/TeX/mathchoice.js");
require("../legacy/extensions/TeX/bbox.js");
require("../legacy/extensions/TeX/HTML.js");

require("../legacy/jax/element/MmlNode.js");


var imp = require("../legacy/jax/input/TeX/imp.js").imp;

var MmlFactory = require("../../mathjax3/core/MmlTree/MmlFactory.js").MmlFactory;
var factory = new MmlFactory();


exports.LegacyTeX = {
  Compile: function (tex,display) {
    var script = {
      type:"math/tex"+(display?"; mode=display":""),
      innerText: tex,
      MathJax: {}
    };
    // VS: OLD
    if (imp.NEW) {
      var node = MathJax.InputJax.TeX.Translate(script);
    } else {
      var node = MathJax.InputJax.TeX.Translate(script).root.toMmlNode(factory); 
    }
    node.setInheritedAttributes();
    return node;
  },
  Translate: function (tex,display) {
    return this.Compile(tex,display);
  }
};
