// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var React = require("react");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

function wrapper(src) {
  return Css.style(/* :: */[
              Css.width(Css.pct(100)),
              /* :: */[
                Css.height(Css.pct(100)),
                /* :: */[
                  Css.backgroundImage(/* `url */[
                        5843823,
                        src
                      ]),
                  /* :: */[
                    Css.backgroundRepeat(Css.noRepeat),
                    /* :: */[
                      Css.backgroundSize(Css.cover),
                      /* :: */[
                        Css.overflow(Css.hidden),
                        /* :: */[
                          Css.position(Css.relative),
                          /* [] */0
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

var glitchAnimation1Horizontal = Css.keyframes(/* :: */[
      /* tuple */[
        0,
        /* :: */[
          Css.unsafe("clip-path", "polygon(0 2%, 100% 2%, 100% 5%, 0 5%)"),
          /* [] */0
        ]
      ],
      /* :: */[
        /* tuple */[
          5,
          /* :: */[
            Css.unsafe("clip-path", "polygon(0 15%, 100% 15%, 100% 15%, 0 15%)"),
            /* [] */0
          ]
        ],
        /* :: */[
          /* tuple */[
            10,
            /* :: */[
              Css.unsafe("clip-path", "polygon(0 10%, 100% 10%, 100% 20%, 0 20%)"),
              /* [] */0
            ]
          ],
          /* :: */[
            /* tuple */[
              15,
              /* :: */[
                Css.unsafe("clip-path", "polygon(0 1%, 100% 1%, 100% 2%, 0 2%)"),
                /* [] */0
              ]
            ],
            /* :: */[
              /* tuple */[
                20,
                /* :: */[
                  Css.unsafe("clip-path", "polygon(0 33%, 100% 33%, 100% 33%, 0 33%)"),
                  /* [] */0
                ]
              ],
              /* :: */[
                /* tuple */[
                  25,
                  /* :: */[
                    Css.unsafe("clip-path", "polygon(0 44%, 100% 44%, 100% 44%, 0 44%)"),
                    /* [] */0
                  ]
                ],
                /* :: */[
                  /* tuple */[
                    30,
                    /* :: */[
                      Css.unsafe("clip-path", "polygon(0 50%, 100% 50%, 100% 20%, 0 20%)"),
                      /* [] */0
                    ]
                  ],
                  /* :: */[
                    /* tuple */[
                      35,
                      /* :: */[
                        Css.unsafe("clip-path", "polygon(0 70%, 100% 70%, 100% 70%, 0 70%)"),
                        /* [] */0
                      ]
                    ],
                    /* :: */[
                      /* tuple */[
                        40,
                        /* :: */[
                          Css.unsafe("clip-path", "polygon(0 80%, 100% 80%, 100% 80%, 0 80%)"),
                          /* [] */0
                        ]
                      ],
                      /* :: */[
                        /* tuple */[
                          45,
                          /* :: */[
                            Css.unsafe("clip-path", "polygon(0 50%, 100% 50%, 100% 55%, 0 55%)"),
                            /* [] */0
                          ]
                        ],
                        /* :: */[
                          /* tuple */[
                            50,
                            /* :: */[
                              Css.unsafe("clip-path", "polygon(0 70%, 100% 70%, 100% 80%, 0 80%)"),
                              /* [] */0
                            ]
                          ],
                          /* :: */[
                            /* tuple */[
                              51,
                              /* :: */[
                                Css.unsafe("clip-path", "polygon(0 0, 0 0)"),
                                /* [] */0
                              ]
                            ],
                            /* :: */[
                              /* tuple */[
                                100,
                                /* :: */[
                                  Css.unsafe("clip-path", "polygon(0 0, 0 0)"),
                                  /* [] */0
                                ]
                              ],
                              /* [] */0
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

function glitch(src, $staropt$star, bgColor, blendMode, $staropt$star$1, param) {
  var animDuration = $staropt$star !== undefined ? $staropt$star : 600;
  var animationName = $staropt$star$1 !== undefined ? Caml_option.valFromOption($staropt$star$1) : glitchAnimation1Horizontal;
  return Css.style(/* :: */[
              Css.position(Css.absolute),
              /* :: */[
                Css.top(Css.zero),
                /* :: */[
                  Css.left(Css.zero),
                  /* :: */[
                    Css.width(Css.pct(110)),
                    /* :: */[
                      Css.height(Css.pct(110)),
                      /* :: */[
                        Css.backgroundImage(Css.url(src)),
                        /* :: */[
                          Css.backgroundRepeat(Css.noRepeat),
                          /* :: */[
                            Css.backgroundColor(bgColor),
                            /* :: */[
                              Css.backgroundPosition(Css.pct(50), Css.zero),
                              /* :: */[
                                Css.backgroundSize(Css.cover),
                                /* :: */[
                                  Css.animation(animDuration, undefined, Css.alternateReverse, undefined, undefined, undefined, Css.infinite, animationName),
                                  /* :: */[
                                    Css.unsafe("backgroundBlendMode", blendMode),
                                    /* [] */0
                                  ]
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

var Styles = /* module */[
  /* wrapper */wrapper,
  /* glitchAnimation1Horizontal */glitchAnimation1Horizontal,
  /* glitch */glitch
];

function GlitchImage(Props) {
  var src = Props.src;
  var bgColor = /* `hex */[
    5194459,
    "fff"
  ];
  var blendMode = "hard-light";
  return React.createElement("div", {
              className: wrapper(src)
            }, React.createElement("div", {
                  className: glitch(src, 2300, bgColor, blendMode, undefined, /* () */0)
                }), React.createElement("div", {
                  className: glitch(src, 2400, /* `hex */[
                        5194459,
                        "000"
                      ], blendMode, undefined, /* () */0)
                }), React.createElement("div", {
                  className: glitch(src, 2500, bgColor, blendMode, undefined, /* () */0)
                }), React.createElement("div", {
                  className: glitch(src, 2000, /* `hex */[
                        5194459,
                        "000"
                      ], "overlay", undefined, /* () */0)
                }));
}

var make = GlitchImage;

var $$default = GlitchImage;

exports.Styles = Styles;
exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* glitchAnimation1Horizontal Not a pure module */
