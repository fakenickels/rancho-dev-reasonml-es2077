// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var React = require("react");

function $$Image(Props) {
  var src = Props.src;
  return React.createElement("img", {
              className: Css.style(/* :: */[
                    Css.maxWidth(Css.pct(100)),
                    /* [] */0
                  ]),
              src: src
            });
}

var make = $$Image;

var $$default = $$Image;

exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* Css Not a pure module */