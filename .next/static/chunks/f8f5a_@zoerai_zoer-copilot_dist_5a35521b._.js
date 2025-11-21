(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/f8f5a_@zoerai_zoer-copilot_dist_5a35521b._.js", {

"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/coffee-BVFTsnP5.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>a)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$javascript$2d$DYrC$2d$pEL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/javascript-DYrC-pEL.js [app-client] (ecmascript)");
;
const t = Object.freeze({
    displayName: "CoffeeScript",
    name: "coffee",
    patterns: [
        {
            include: "#jsx"
        },
        {
            captures: {
                1: {
                    name: "keyword.operator.new.coffee"
                },
                2: {
                    name: "storage.type.class.coffee"
                },
                3: {
                    name: "entity.name.type.instance.coffee"
                },
                4: {
                    name: "entity.name.type.instance.coffee"
                }
            },
            match: "(new)\\s+(?:(?:(class)\\s+(\\w+(?:\\.\\w*)*)?)|(\\w+(?:\\.\\w*)*))",
            name: "meta.class.instance.constructor.coffee"
        },
        {
            begin: "'''",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.string.begin.coffee"
                }
            },
            end: "'''",
            endCaptures: {
                0: {
                    name: "punctuation.definition.string.end.coffee"
                }
            },
            name: "string.quoted.single.heredoc.coffee",
            patterns: [
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.escape.backslash.coffee"
                        }
                    },
                    match: "(\\\\).",
                    name: "constant.character.escape.backslash.coffee"
                }
            ]
        },
        {
            begin: '"""',
            beginCaptures: {
                0: {
                    name: "punctuation.definition.string.begin.coffee"
                }
            },
            end: '"""',
            endCaptures: {
                0: {
                    name: "punctuation.definition.string.end.coffee"
                }
            },
            name: "string.quoted.double.heredoc.coffee",
            patterns: [
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.escape.backslash.coffee"
                        }
                    },
                    match: "(\\\\).",
                    name: "constant.character.escape.backslash.coffee"
                },
                {
                    include: "#interpolated_coffee"
                }
            ]
        },
        {
            captures: {
                1: {
                    name: "punctuation.definition.string.begin.coffee"
                },
                2: {
                    name: "source.js.embedded.coffee",
                    patterns: [
                        {
                            include: "source.js"
                        }
                    ]
                },
                3: {
                    name: "punctuation.definition.string.end.coffee"
                }
            },
            match: "(`)(.*)(`)",
            name: "string.quoted.script.coffee"
        },
        {
            begin: "(?<!#)###(?!#)",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.comment.coffee"
                }
            },
            end: "###",
            endCaptures: {
                0: {
                    name: "punctuation.definition.comment.coffee"
                }
            },
            name: "comment.block.coffee",
            patterns: [
                {
                    match: "(?<=^|\\s)@\\w*(?=\\s)",
                    name: "storage.type.annotation.coffee"
                }
            ]
        },
        {
            begin: "#",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.comment.coffee"
                }
            },
            end: "$",
            name: "comment.line.number-sign.coffee"
        },
        {
            begin: "///",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.string.begin.coffee"
                }
            },
            end: "(///)[gimuy]*",
            endCaptures: {
                1: {
                    name: "punctuation.definition.string.end.coffee"
                }
            },
            name: "string.regexp.multiline.coffee",
            patterns: [
                {
                    include: "#heregexp"
                }
            ]
        },
        {
            begin: "(?<![\\w$])(/)(?=(?![/*+?])(.+)(/)[gimuy]*(?!\\s*[\\w$/(]))",
            beginCaptures: {
                1: {
                    name: "punctuation.definition.string.begin.coffee"
                }
            },
            end: "(/)[gimuy]*(?!\\s*[\\w$/(])",
            endCaptures: {
                1: {
                    name: "punctuation.definition.string.end.coffee"
                }
            },
            name: "string.regexp.coffee",
            patterns: [
                {
                    include: "source.js.regexp"
                }
            ]
        },
        {
            match: "\\b(?<![\\.\\$])(break|by|catch|continue|else|finally|for|in|of|if|return|switch|then|throw|try|unless|when|while|until|loop|do|export|import|default|from|as|yield|async|await|(?<=for)\\s+own)(?!\\s*:)\\b",
            name: "keyword.control.coffee"
        },
        {
            match: "\\b(?<![\\.\\$])(delete|instanceof|new|typeof)(?!\\s*:)\\b",
            name: "keyword.operator.$1.coffee"
        },
        {
            match: "\\b(?<![\\.\\$])(case|function|var|void|with|const|let|enum|native|__hasProp|__extends|__slice|__bind|__indexOf|implements|interface|package|private|protected|public|static)(?!\\s*:)\\b",
            name: "keyword.reserved.coffee"
        },
        {
            begin: `(?x)
(?<=\\s|^)((@)?[a-zA-Z_$][\\w$]*)
\\s*([:=])\\s*
(?=(\\([^\\(\\)]*\\)\\s*)?[=-]>)`,
            beginCaptures: {
                1: {
                    name: "entity.name.function.coffee"
                },
                2: {
                    name: "variable.other.readwrite.instance.coffee"
                },
                3: {
                    name: "keyword.operator.assignment.coffee"
                }
            },
            end: "[=-]>",
            endCaptures: {
                0: {
                    name: "storage.type.function.coffee"
                }
            },
            name: "meta.function.coffee",
            patterns: [
                {
                    include: "#function_params"
                }
            ]
        },
        {
            begin: `(?x)
(?<=\\s|^)(?:((')([^']*?)('))|((")([^"]*?)(")))
\\s*([:=])\\s*
(?=(\\([^\\(\\)]*\\)\\s*)?[=-]>)`,
            beginCaptures: {
                1: {
                    name: "string.quoted.single.coffee"
                },
                2: {
                    name: "punctuation.definition.string.begin.coffee"
                },
                3: {
                    name: "entity.name.function.coffee"
                },
                4: {
                    name: "punctuation.definition.string.end.coffee"
                },
                5: {
                    name: "string.quoted.double.coffee"
                },
                6: {
                    name: "punctuation.definition.string.begin.coffee"
                },
                7: {
                    name: "entity.name.function.coffee"
                },
                8: {
                    name: "punctuation.definition.string.end.coffee"
                },
                9: {
                    name: "keyword.operator.assignment.coffee"
                }
            },
            end: "[=-]>",
            endCaptures: {
                0: {
                    name: "storage.type.function.coffee"
                }
            },
            name: "meta.function.coffee",
            patterns: [
                {
                    include: "#function_params"
                }
            ]
        },
        {
            begin: "(?=(\\([^\\(\\)]*\\)\\s*)?[=-]>)",
            end: "[=-]>",
            endCaptures: {
                0: {
                    name: "storage.type.function.coffee"
                }
            },
            name: "meta.function.inline.coffee",
            patterns: [
                {
                    include: "#function_params"
                }
            ]
        },
        {
            begin: `(?<=\\s|^)({)(?=[^'"#]+?}[\\s\\]}]*=)`,
            beginCaptures: {
                1: {
                    name: "punctuation.definition.destructuring.begin.bracket.curly.coffee"
                }
            },
            end: "}",
            endCaptures: {
                0: {
                    name: "punctuation.definition.destructuring.end.bracket.curly.coffee"
                }
            },
            name: "meta.variable.assignment.destructured.object.coffee",
            patterns: [
                {
                    include: "$self"
                },
                {
                    match: "[a-zA-Z$_]\\w*",
                    name: "variable.assignment.coffee"
                }
            ]
        },
        {
            begin: `(?<=\\s|^)(\\[)(?=[^'"#]+?\\][\\s\\]}]*=)`,
            beginCaptures: {
                1: {
                    name: "punctuation.definition.destructuring.begin.bracket.square.coffee"
                }
            },
            end: "\\]",
            endCaptures: {
                0: {
                    name: "punctuation.definition.destructuring.end.bracket.square.coffee"
                }
            },
            name: "meta.variable.assignment.destructured.array.coffee",
            patterns: [
                {
                    include: "$self"
                },
                {
                    match: "[a-zA-Z$_]\\w*",
                    name: "variable.assignment.coffee"
                }
            ]
        },
        {
            match: "\\b(?<!\\.|::)(true|on|yes)(?!\\s*[:=][^=])\\b",
            name: "constant.language.boolean.true.coffee"
        },
        {
            match: "\\b(?<!\\.|::)(false|off|no)(?!\\s*[:=][^=])\\b",
            name: "constant.language.boolean.false.coffee"
        },
        {
            match: "\\b(?<!\\.|::)null(?!\\s*[:=][^=])\\b",
            name: "constant.language.null.coffee"
        },
        {
            match: "\\b(?<!\\.|::)extends(?!\\s*[:=])\\b",
            name: "variable.language.coffee"
        },
        {
            match: "(?<!\\.)\\b(?<!\\$)(super|this|arguments)(?!\\s*[:=][^=]|\\$)\\b",
            name: "variable.language.$1.coffee"
        },
        {
            captures: {
                1: {
                    name: "storage.type.class.coffee"
                },
                2: {
                    name: "keyword.control.inheritance.coffee"
                },
                3: {
                    name: "entity.other.inherited-class.coffee"
                }
            },
            match: "(?<=\\s|^|\\[|\\()(class)\\s+(extends)\\s+(@?[a-zA-Z\\$\\._][\\w\\.]*)",
            name: "meta.class.coffee"
        },
        {
            captures: {
                1: {
                    name: "storage.type.class.coffee"
                },
                2: {
                    name: "entity.name.type.class.coffee"
                },
                3: {
                    name: "keyword.control.inheritance.coffee"
                },
                4: {
                    name: "entity.other.inherited-class.coffee"
                }
            },
            match: "(?<=\\s|^|\\[|\\()(class\\b)\\s+(@?[a-zA-Z\\$_][\\w\\.]*)?(?:\\s+(extends)\\s+(@?[a-zA-Z\\$\\._][\\w\\.]*))?",
            name: "meta.class.coffee"
        },
        {
            match: "\\b(debugger|\\\\)\\b",
            name: "keyword.other.coffee"
        },
        {
            match: "\\b(Array|ArrayBuffer|Blob|Boolean|Date|document|Function|Int(8|16|32|64)Array|Math|Map|Number|Object|Proxy|RegExp|Set|String|WeakMap|window|Uint(8|16|32|64)Array|XMLHttpRequest)\\b",
            name: "support.class.coffee"
        },
        {
            match: "\\b(console)\\b",
            name: "entity.name.type.object.coffee"
        },
        {
            match: "((?<=console\\.)(debug|warn|info|log|error|time|timeEnd|assert))\\b",
            name: "support.function.console.coffee"
        },
        {
            match: "((?<=\\.)(apply|call|concat|every|filter|forEach|from|hasOwnProperty|indexOf|isPrototypeOf|join|lastIndexOf|map|of|pop|propertyIsEnumerable|push|reduce(Right)?|reverse|shift|slice|some|sort|splice|to(Locale)?String|unshift|valueOf))\\b",
            name: "support.function.method.array.coffee"
        },
        {
            match: "((?<=Array\\.)(isArray))\\b",
            name: "support.function.static.array.coffee"
        },
        {
            match: "((?<=Object\\.)(create|definePropert(ies|y)|freeze|getOwnProperty(Descriptors?|Names)|getProperty(Descriptor|Names)|getPrototypeOf|is(Extensible|Frozen|Sealed)?|isnt|keys|preventExtensions|seal))\\b",
            name: "support.function.static.object.coffee"
        },
        {
            match: "((?<=Math\\.)(abs|acos|acosh|asin|asinh|atan|atan2|atanh|ceil|cos|cosh|exp|expm1|floor|hypot|log|log10|log1p|log2|max|min|pow|random|round|sign|sin|sinh|sqrt|tan|tanh|trunc))\\b",
            name: "support.function.static.math.coffee"
        },
        {
            match: "((?<=Number\\.)(is(Finite|Integer|NaN)|toInteger))\\b",
            name: "support.function.static.number.coffee"
        },
        {
            match: "(?<!\\.)\\b(module|exports|__filename|__dirname|global|process)(?!\\s*:)\\b",
            name: "support.variable.coffee"
        },
        {
            match: "\\b(Infinity|NaN|undefined)\\b",
            name: "constant.language.coffee"
        },
        {
            include: "#operators"
        },
        {
            include: "#method_calls"
        },
        {
            include: "#function_calls"
        },
        {
            include: "#numbers"
        },
        {
            include: "#objects"
        },
        {
            include: "#properties"
        },
        {
            match: "::",
            name: "keyword.operator.prototype.coffee"
        },
        {
            match: "(?<!\\$)\\b[0-9]+[\\w$]*",
            name: "invalid.illegal.identifier.coffee"
        },
        {
            match: ";",
            name: "punctuation.terminator.statement.coffee"
        },
        {
            match: ",",
            name: "punctuation.separator.delimiter.coffee"
        },
        {
            begin: "{",
            beginCaptures: {
                0: {
                    name: "meta.brace.curly.coffee"
                }
            },
            end: "}",
            endCaptures: {
                0: {
                    name: "meta.brace.curly.coffee"
                }
            },
            patterns: [
                {
                    include: "$self"
                }
            ]
        },
        {
            begin: "\\[",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.array.begin.bracket.square.coffee"
                }
            },
            end: "\\]",
            endCaptures: {
                0: {
                    name: "punctuation.definition.array.end.bracket.square.coffee"
                }
            },
            patterns: [
                {
                    match: "(?<!\\.)\\.{3}",
                    name: "keyword.operator.slice.exclusive.coffee"
                },
                {
                    match: "(?<!\\.)\\.{2}",
                    name: "keyword.operator.slice.inclusive.coffee"
                },
                {
                    include: "$self"
                }
            ]
        },
        {
            begin: "\\(",
            beginCaptures: {
                0: {
                    name: "meta.brace.round.coffee"
                }
            },
            end: "\\)",
            endCaptures: {
                0: {
                    name: "meta.brace.round.coffee"
                }
            },
            patterns: [
                {
                    include: "$self"
                }
            ]
        },
        {
            include: "#instance_variable"
        },
        {
            include: "#single_quoted_string"
        },
        {
            include: "#double_quoted_string"
        }
    ],
    repository: {
        arguments: {
            patterns: [
                {
                    begin: "\\(",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.arguments.begin.bracket.round.coffee"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.arguments.end.bracket.round.coffee"
                        }
                    },
                    name: "meta.arguments.coffee",
                    patterns: [
                        {
                            include: "$self"
                        }
                    ]
                },
                {
                    begin: `(?=(@|@?[\\w$]+|[=-]>|\\-\\d|\\[|{|"|'))`,
                    end: "(?=\\s*(?<![\\w$])(of|in|then|is|isnt|and|or|for|else|when|if|unless|by|instanceof)(?![\\w$]))|(?=\\s*(}|\\]|\\)|#|$))",
                    name: "meta.arguments.coffee",
                    patterns: [
                        {
                            include: "$self"
                        }
                    ]
                }
            ]
        },
        double_quoted_string: {
            patterns: [
                {
                    begin: '"',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.coffee"
                        }
                    },
                    end: '"',
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.coffee"
                        }
                    },
                    name: "string.quoted.double.coffee",
                    patterns: [
                        {
                            captures: {
                                1: {
                                    name: "punctuation.definition.escape.backslash.coffee"
                                }
                            },
                            match: "(\\\\)(x[0-9A-Fa-f]{2}|[0-2][0-7]{0,2}|3[0-6][0-7]|37[0-7]?|[4-7][0-7]?|.)",
                            name: "constant.character.escape.backslash.coffee"
                        },
                        {
                            include: "#interpolated_coffee"
                        }
                    ]
                }
            ]
        },
        embedded_comment: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.comment.coffee"
                        }
                    },
                    match: "(?<!\\\\)(#).*$\\n?",
                    name: "comment.line.number-sign.coffee"
                }
            ]
        },
        function_calls: {
            patterns: [
                {
                    begin: "(@)?([\\w$]+)(?=\\()",
                    beginCaptures: {
                        1: {
                            name: "variable.other.readwrite.instance.coffee"
                        },
                        2: {
                            patterns: [
                                {
                                    include: "#function_names"
                                }
                            ]
                        }
                    },
                    end: "(?<=\\))",
                    name: "meta.function-call.coffee",
                    patterns: [
                        {
                            include: "#arguments"
                        }
                    ]
                },
                {
                    begin: `(?x)
(@)?([\\w$]+)
\\s*
(?=\\s+(?!(?<![\\w$])(of|in|then|is|isnt|and|or|for|else|when|if|unless|by|instanceof)(?![\\w$]))(?=(@?[\\w$]+|[=-]>|\\-\\d|\\[|{|"|')))`,
                    beginCaptures: {
                        1: {
                            name: "variable.other.readwrite.instance.coffee"
                        },
                        2: {
                            patterns: [
                                {
                                    include: "#function_names"
                                }
                            ]
                        }
                    },
                    end: "(?=\\s*(?<![\\w$])(of|in|then|is|isnt|and|or|for|else|when|if|unless|by|instanceof)(?![\\w$]))|(?=\\s*(}|\\]|\\)|#|$))",
                    name: "meta.function-call.coffee",
                    patterns: [
                        {
                            include: "#arguments"
                        }
                    ]
                }
            ]
        },
        function_names: {
            patterns: [
                {
                    match: `(?x)
\\b(isNaN|isFinite|eval|uneval|parseInt|parseFloat|decodeURI|
decodeURIComponent|encodeURI|encodeURIComponent|escape|unescape|
require|set(Interval|Timeout)|clear(Interval|Timeout))\\b`,
                    name: "support.function.coffee"
                },
                {
                    match: "[a-zA-Z_$][\\w$]*",
                    name: "entity.name.function.coffee"
                },
                {
                    match: "\\d[\\w$]*",
                    name: "invalid.illegal.identifier.coffee"
                }
            ]
        },
        function_params: {
            patterns: [
                {
                    begin: "\\(",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.parameters.begin.bracket.round.coffee"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.parameters.end.bracket.round.coffee"
                        }
                    },
                    name: "meta.parameters.coffee",
                    patterns: [
                        {
                            captures: {
                                1: {
                                    name: "variable.parameter.function.coffee"
                                },
                                2: {
                                    name: "keyword.operator.splat.coffee"
                                }
                            },
                            match: "([a-zA-Z_$][\\w$]*)(\\.\\.\\.)?"
                        },
                        {
                            captures: {
                                1: {
                                    name: "variable.parameter.function.readwrite.instance.coffee"
                                },
                                2: {
                                    name: "keyword.operator.splat.coffee"
                                }
                            },
                            match: "(@(?:[a-zA-Z_$][\\w$]*)?)(\\.\\.\\.)?"
                        },
                        {
                            include: "$self"
                        }
                    ]
                }
            ]
        },
        heregexp: {
            patterns: [
                {
                    match: "\\\\[bB]|\\^|\\$",
                    name: "keyword.control.anchor.regexp"
                },
                {
                    match: "\\\\[1-9]\\d*",
                    name: "keyword.other.back-reference.regexp"
                },
                {
                    match: "[?+*]|\\{(\\d+,\\d+|\\d+,|,\\d+|\\d+)\\}\\??",
                    name: "keyword.operator.quantifier.regexp"
                },
                {
                    match: "\\|",
                    name: "keyword.operator.or.regexp"
                },
                {
                    begin: "(\\()((\\?=)|(\\?!))",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.group.regexp"
                        },
                        3: {
                            name: "meta.assertion.look-ahead.regexp"
                        },
                        4: {
                            name: "meta.assertion.negative-look-ahead.regexp"
                        }
                    },
                    end: "(\\))",
                    endCaptures: {
                        1: {
                            name: "punctuation.definition.group.regexp"
                        }
                    },
                    name: "meta.group.assertion.regexp",
                    patterns: [
                        {
                            include: "#heregexp"
                        }
                    ]
                },
                {
                    begin: "\\((\\?:)?",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.group.regexp"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.group.regexp"
                        }
                    },
                    name: "meta.group.regexp",
                    patterns: [
                        {
                            include: "#heregexp"
                        }
                    ]
                },
                {
                    begin: "(\\[)(\\^)?",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.character-class.regexp"
                        },
                        2: {
                            name: "keyword.operator.negation.regexp"
                        }
                    },
                    end: "(\\])",
                    endCaptures: {
                        1: {
                            name: "punctuation.definition.character-class.regexp"
                        }
                    },
                    name: "constant.other.character-class.set.regexp",
                    patterns: [
                        {
                            captures: {
                                1: {
                                    name: "constant.character.numeric.regexp"
                                },
                                2: {
                                    name: "constant.character.control.regexp"
                                },
                                3: {
                                    name: "constant.character.escape.backslash.regexp"
                                },
                                4: {
                                    name: "constant.character.numeric.regexp"
                                },
                                5: {
                                    name: "constant.character.control.regexp"
                                },
                                6: {
                                    name: "constant.character.escape.backslash.regexp"
                                }
                            },
                            match: "(?:.|(\\\\(?:[0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}))|(\\\\c[A-Z])|(\\\\.))\\-(?:[^\\]\\\\]|(\\\\(?:[0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}))|(\\\\c[A-Z])|(\\\\.))",
                            name: "constant.other.character-class.range.regexp"
                        },
                        {
                            include: "#regex-character-class"
                        }
                    ]
                },
                {
                    include: "#regex-character-class"
                },
                {
                    include: "#interpolated_coffee"
                },
                {
                    include: "#embedded_comment"
                }
            ]
        },
        instance_variable: {
            patterns: [
                {
                    match: "(@)([a-zA-Z_\\$]\\w*)?",
                    name: "variable.other.readwrite.instance.coffee"
                }
            ]
        },
        interpolated_coffee: {
            patterns: [
                {
                    begin: "\\#\\{",
                    captures: {
                        0: {
                            name: "punctuation.section.embedded.coffee"
                        }
                    },
                    end: "\\}",
                    name: "source.coffee.embedded.source",
                    patterns: [
                        {
                            include: "$self"
                        }
                    ]
                }
            ]
        },
        jsx: {
            patterns: [
                {
                    include: "#jsx-tag"
                },
                {
                    include: "#jsx-end-tag"
                }
            ]
        },
        "jsx-attribute": {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "entity.other.attribute-name.coffee"
                        },
                        2: {
                            name: "keyword.operator.assignment.coffee"
                        }
                    },
                    match: "(?:^|\\s+)([-\\w.]+)\\s*(=)"
                },
                {
                    include: "#double_quoted_string"
                },
                {
                    include: "#single_quoted_string"
                },
                {
                    include: "#jsx-expression"
                }
            ]
        },
        "jsx-end-tag": {
            patterns: [
                {
                    begin: "(</)([-\\w\\.]+)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.tag.coffee"
                        },
                        2: {
                            name: "entity.name.tag.coffee"
                        }
                    },
                    end: "(/?>)",
                    name: "meta.tag.coffee"
                }
            ]
        },
        "jsx-expression": {
            begin: "{",
            beginCaptures: {
                0: {
                    name: "meta.brace.curly.coffee"
                }
            },
            end: "}",
            endCaptures: {
                0: {
                    name: "meta.brace.curly.coffee"
                }
            },
            patterns: [
                {
                    include: "#double_quoted_string"
                },
                {
                    include: "$self"
                }
            ]
        },
        "jsx-tag": {
            patterns: [
                {
                    begin: "(<)([-\\w\\.]+)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.tag.coffee"
                        },
                        2: {
                            name: "entity.name.tag.coffee"
                        }
                    },
                    end: "(/?>)",
                    name: "meta.tag.coffee",
                    patterns: [
                        {
                            include: "#jsx-attribute"
                        }
                    ]
                }
            ]
        },
        method_calls: {
            patterns: [
                {
                    begin: "(?:(\\.)|(::))\\s*([\\w$]+)\\s*(?=\\()",
                    beginCaptures: {
                        1: {
                            name: "punctuation.separator.method.period.coffee"
                        },
                        2: {
                            name: "keyword.operator.prototype.coffee"
                        },
                        3: {
                            patterns: [
                                {
                                    include: "#method_names"
                                }
                            ]
                        }
                    },
                    end: "(?<=\\))",
                    name: "meta.method-call.coffee",
                    patterns: [
                        {
                            include: "#arguments"
                        }
                    ]
                },
                {
                    begin: `(?:(\\.)|(::))\\s*([\\w$]+)\\s*(?=\\s+(?!(?<![\\w$])(of|in|then|is|isnt|and|or|for|else|when|if|unless|by|instanceof)(?![\\w$]))(?=(@|@?[\\w$]+|[=-]>|\\-\\d|\\[|{|"|')))`,
                    beginCaptures: {
                        1: {
                            name: "punctuation.separator.method.period.coffee"
                        },
                        2: {
                            name: "keyword.operator.prototype.coffee"
                        },
                        3: {
                            patterns: [
                                {
                                    include: "#method_names"
                                }
                            ]
                        }
                    },
                    end: "(?=\\s*(?<![\\w$])(of|in|then|is|isnt|and|or|for|else|when|if|unless|by|instanceof)(?![\\w$]))|(?=\\s*(}|\\]|\\)|#|$))",
                    name: "meta.method-call.coffee",
                    patterns: [
                        {
                            include: "#arguments"
                        }
                    ]
                }
            ]
        },
        method_names: {
            patterns: [
                {
                    match: `(?x)
\\bon(Rowsinserted|Rowsdelete|Rowenter|Rowexit|Resize|Resizestart|Resizeend|Reset|
Readystatechange|Mouseout|Mouseover|Mousedown|Mouseup|Mousemove|
Before(cut|deactivate|unload|update|paste|print|editfocus|activate)|
Blur|Scrolltop|Submit|Select|Selectstart|Selectionchange|Hover|Help|
Change|Contextmenu|Controlselect|Cut|Cellchange|Clock|Close|Deactivate|
Datasetchanged|Datasetcomplete|Dataavailable|Drop|Drag|Dragstart|Dragover|
Dragdrop|Dragenter|Dragend|Dragleave|Dblclick|Unload|Paste|Propertychange|Error|
Errorupdate|Keydown|Keyup|Keypress|Focus|Load|Activate|Afterupdate|Afterprint|Abort)\\b`,
                    name: "support.function.event-handler.coffee"
                },
                {
                    match: `(?x)
\\b(shift|showModelessDialog|showModalDialog|showHelp|scroll|scrollX|scrollByPages|
scrollByLines|scrollY|scrollTo|stop|strike|sizeToContent|sidebar|signText|sort|
sup|sub|substr|substring|splice|split|send|set(Milliseconds|Seconds|Minutes|Hours|
Month|Year|FullYear|Date|UTC(Milliseconds|Seconds|Minutes|Hours|Month|FullYear|Date)|
Time|Hotkeys|Cursor|ZOptions|Active|Resizable|RequestHeader)|search|slice|
savePreferences|small|home|handleEvent|navigate|char|charCodeAt|charAt|concat|
contextual|confirm|compile|clear|captureEvents|call|createStyleSheet|createPopup|
createEventObject|to(GMTString|UTCString|String|Source|UpperCase|LowerCase|LocaleString)|
test|taint|taintEnabled|indexOf|italics|disableExternalCapture|dump|detachEvent|unshift|
untaint|unwatch|updateCommands|join|javaEnabled|pop|push|plugins.refresh|paddings|parse|
print|prompt|preference|enableExternalCapture|exec|execScript|valueOf|UTC|find|file|
fileModifiedDate|fileSize|fileCreatedDate|fileUpdatedDate|fixed|fontsize|fontcolor|
forward|fromCharCode|watch|link|load|lastIndexOf|anchor|attachEvent|atob|apply|alert|
abort|routeEvents|resize|resizeBy|resizeTo|recalc|returnValue|replace|reverse|reload|
releaseCapture|releaseEvents|go|get(Milliseconds|Seconds|Minutes|Hours|Month|Day|Year|FullYear|
Time|Date|TimezoneOffset|UTC(Milliseconds|Seconds|Minutes|Hours|Day|Month|FullYear|Date)|
Attention|Selection|ResponseHeader|AllResponseHeaders)|moveBy|moveBelow|moveTo|
moveToAbsolute|moveAbove|mergeAttributes|match|margins|btoa|big|bold|borderWidths|blink|back)\\b`,
                    name: "support.function.coffee"
                },
                {
                    match: `(?x)
\\b(acceptNode|add|addEventListener|addTextTrack|adoptNode|after|animate|append|
appendChild|appendData|before|blur|canPlayType|captureStream|
caretPositionFromPoint|caretRangeFromPoint|checkValidity|clear|click|
cloneContents|cloneNode|cloneRange|close|closest|collapse|
compareBoundaryPoints|compareDocumentPosition|comparePoint|contains|
convertPointFromNode|convertQuadFromNode|convertRectFromNode|createAttribute|
createAttributeNS|createCaption|createCDATASection|createComment|
createContextualFragment|createDocument|createDocumentFragment|
createDocumentType|createElement|createElementNS|createEntityReference|
createEvent|createExpression|createHTMLDocument|createNodeIterator|
createNSResolver|createProcessingInstruction|createRange|createShadowRoot|
createTBody|createTextNode|createTFoot|createTHead|createTreeWalker|delete|
deleteCaption|deleteCell|deleteContents|deleteData|deleteRow|deleteTFoot|
deleteTHead|detach|disconnect|dispatchEvent|elementFromPoint|elementsFromPoint|
enableStyleSheetsForSet|entries|evaluate|execCommand|exitFullscreen|
exitPointerLock|expand|extractContents|fastSeek|firstChild|focus|forEach|get|
getAll|getAnimations|getAttribute|getAttributeNames|getAttributeNode|
getAttributeNodeNS|getAttributeNS|getBoundingClientRect|getBoxQuads|
getClientRects|getContext|getDestinationInsertionPoints|getElementById|
getElementsByClassName|getElementsByName|getElementsByTagName|
getElementsByTagNameNS|getItem|getNamedItem|getSelection|getStartDate|
getVideoPlaybackQuality|has|hasAttribute|hasAttributeNS|hasAttributes|
hasChildNodes|hasFeature|hasFocus|importNode|initEvent|insertAdjacentElement|
insertAdjacentHTML|insertAdjacentText|insertBefore|insertCell|insertData|
insertNode|insertRow|intersectsNode|isDefaultNamespace|isEqualNode|
isPointInRange|isSameNode|item|key|keys|lastChild|load|lookupNamespaceURI|
lookupPrefix|matches|move|moveAttribute|moveAttributeNode|moveChild|
moveNamedItem|namedItem|nextNode|nextSibling|normalize|observe|open|
parentNode|pause|play|postMessage|prepend|preventDefault|previousNode|
previousSibling|probablySupportsContext|queryCommandEnabled|
queryCommandIndeterm|queryCommandState|queryCommandSupported|queryCommandValue|
querySelector|querySelectorAll|registerContentHandler|registerElement|
registerProtocolHandler|releaseCapture|releaseEvents|remove|removeAttribute|
removeAttributeNode|removeAttributeNS|removeChild|removeEventListener|
removeItem|replace|replaceChild|replaceData|replaceWith|reportValidity|
requestFullscreen|requestPointerLock|reset|scroll|scrollBy|scrollIntoView|
scrollTo|seekToNextFrame|select|selectNode|selectNodeContents|set|setAttribute|
setAttributeNode|setAttributeNodeNS|setAttributeNS|setCapture|
setCustomValidity|setEnd|setEndAfter|setEndBefore|setItem|setNamedItem|
setRangeText|setSelectionRange|setSinkId|setStart|setStartAfter|setStartBefore|
slice|splitText|stepDown|stepUp|stopImmediatePropagation|stopPropagation|
submit|substringData|supports|surroundContents|takeRecords|terminate|toBlob|
toDataURL|toggle|toString|values|write|writeln)\\b`,
                    name: "support.function.dom.coffee"
                },
                {
                    match: "[a-zA-Z_$][\\w$]*",
                    name: "entity.name.function.coffee"
                },
                {
                    match: "\\d[\\w$]*",
                    name: "invalid.illegal.identifier.coffee"
                }
            ]
        },
        numbers: {
            patterns: [
                {
                    match: "\\b(?<!\\$)0(x|X)[0-9a-fA-F]+\\b(?!\\$)",
                    name: "constant.numeric.hex.coffee"
                },
                {
                    match: "\\b(?<!\\$)0(b|B)[01]+\\b(?!\\$)",
                    name: "constant.numeric.binary.coffee"
                },
                {
                    match: "\\b(?<!\\$)0(o|O)?[0-7]+\\b(?!\\$)",
                    name: "constant.numeric.octal.coffee"
                },
                {
                    captures: {
                        0: {
                            name: "constant.numeric.decimal.coffee"
                        },
                        1: {
                            name: "punctuation.separator.decimal.period.coffee"
                        },
                        2: {
                            name: "punctuation.separator.decimal.period.coffee"
                        },
                        3: {
                            name: "punctuation.separator.decimal.period.coffee"
                        },
                        4: {
                            name: "punctuation.separator.decimal.period.coffee"
                        },
                        5: {
                            name: "punctuation.separator.decimal.period.coffee"
                        },
                        6: {
                            name: "punctuation.separator.decimal.period.coffee"
                        }
                    },
                    match: `(?x)
(?<!\\$)(?:
(?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)|
(?:\\b[0-9]+(\\.)[eE][+-]?[0-9]+\\b)|
(?:\\B(\\.)[0-9]+[eE][+-]?[0-9]+\\b)|
(?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|
(?:\\b[0-9]+(\\.)[0-9]+\\b)|
(?:\\b[0-9]+(?=\\.{2,3}))|
(?:\\b[0-9]+(\\.)\\B)|
(?:\\B(\\.)[0-9]+\\b)|
(?:\\b[0-9]+\\b(?!\\.))
)(?!\\$)`
                }
            ]
        },
        objects: {
            patterns: [
                {
                    match: "[A-Z][A-Z0-9_$]*(?=\\s*\\??(\\.\\s*[a-zA-Z_$]\\w*|::))",
                    name: "constant.other.object.coffee"
                },
                {
                    match: "[a-zA-Z_$][\\w$]*(?=\\s*\\??(\\.\\s*[a-zA-Z_$]\\w*|::))",
                    name: "variable.other.object.coffee"
                }
            ]
        },
        operators: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "variable.assignment.coffee"
                        },
                        2: {
                            name: "keyword.operator.assignment.compound.coffee"
                        }
                    },
                    match: "(?:([a-zA-Z$_][\\w$]*)?\\s+|(?<![\\w$]))(and=|or=)"
                },
                {
                    captures: {
                        1: {
                            name: "variable.assignment.coffee"
                        },
                        2: {
                            name: "keyword.operator.assignment.compound.coffee"
                        }
                    },
                    match: "([a-zA-Z$_][\\w$]*)?\\s*(%=|\\+=|-=|\\*=|&&=|\\|\\|=|\\?=|(?<!\\()/=)"
                },
                {
                    captures: {
                        1: {
                            name: "variable.assignment.coffee"
                        },
                        2: {
                            name: "keyword.operator.assignment.compound.bitwise.coffee"
                        }
                    },
                    match: "([a-zA-Z$_][\\w$]*)?\\s*(&=|\\^=|<<=|>>=|>>>=|\\|=)"
                },
                {
                    match: "<<|>>>|>>",
                    name: "keyword.operator.bitwise.shift.coffee"
                },
                {
                    match: "!=|<=|>=|==|<|>",
                    name: "keyword.operator.comparison.coffee"
                },
                {
                    match: "&&|!|\\|\\|",
                    name: "keyword.operator.logical.coffee"
                },
                {
                    match: "&|\\||\\^|~",
                    name: "keyword.operator.bitwise.coffee"
                },
                {
                    captures: {
                        1: {
                            name: "variable.assignment.coffee"
                        },
                        2: {
                            name: "keyword.operator.assignment.coffee"
                        }
                    },
                    match: "([a-zA-Z$_][\\w$]*)?\\s*(=|:(?!:))(?![>=])"
                },
                {
                    match: "--",
                    name: "keyword.operator.decrement.coffee"
                },
                {
                    match: "\\+\\+",
                    name: "keyword.operator.increment.coffee"
                },
                {
                    match: "\\.\\.\\.",
                    name: "keyword.operator.splat.coffee"
                },
                {
                    match: "\\?",
                    name: "keyword.operator.existential.coffee"
                },
                {
                    match: "%|\\*|/|-|\\+",
                    name: "keyword.operator.coffee"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.operator.logical.coffee"
                        },
                        2: {
                            name: "keyword.operator.comparison.coffee"
                        }
                    },
                    match: `(?x)
\\b(?<![\\.\\$])
(?:
(and|or|not)
|
(is|isnt)
)
(?!\\s*:)\\b`
                }
            ]
        },
        properties: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "punctuation.separator.property.period.coffee"
                        },
                        2: {
                            name: "keyword.operator.prototype.coffee"
                        },
                        3: {
                            name: "constant.other.object.property.coffee"
                        }
                    },
                    match: "(?:(\\.)|(::))\\s*([A-Z][A-Z0-9_$]*\\b\\$*)(?=\\s*\\??(\\.\\s*[a-zA-Z_$]\\w*|::))"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.separator.property.period.coffee"
                        },
                        2: {
                            name: "keyword.operator.prototype.coffee"
                        },
                        3: {
                            name: "variable.other.object.property.coffee"
                        }
                    },
                    match: "(?:(\\.)|(::))\\s*(\\$*[a-zA-Z_$][\\w$]*)(?=\\s*\\??(\\.\\s*[a-zA-Z_$]\\w*|::))"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.separator.property.period.coffee"
                        },
                        2: {
                            name: "keyword.operator.prototype.coffee"
                        },
                        3: {
                            name: "constant.other.property.coffee"
                        }
                    },
                    match: "(?:(\\.)|(::))\\s*([A-Z][A-Z0-9_$]*\\b\\$*)"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.separator.property.period.coffee"
                        },
                        2: {
                            name: "keyword.operator.prototype.coffee"
                        },
                        3: {
                            name: "variable.other.property.coffee"
                        }
                    },
                    match: "(?:(\\.)|(::))\\s*(\\$*[a-zA-Z_$][\\w$]*)"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.separator.property.period.coffee"
                        },
                        2: {
                            name: "keyword.operator.prototype.coffee"
                        },
                        3: {
                            name: "invalid.illegal.identifier.coffee"
                        }
                    },
                    match: "(?:(\\.)|(::))\\s*([0-9][\\w$]*)"
                }
            ]
        },
        "regex-character-class": {
            patterns: [
                {
                    match: "\\\\[wWsSdD]|\\.",
                    name: "constant.character.character-class.regexp"
                },
                {
                    match: "\\\\([0-7]{3}|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4})",
                    name: "constant.character.numeric.regexp"
                },
                {
                    match: "\\\\c[A-Z]",
                    name: "constant.character.control.regexp"
                },
                {
                    match: "\\\\.",
                    name: "constant.character.escape.backslash.regexp"
                }
            ]
        },
        single_quoted_string: {
            patterns: [
                {
                    begin: "'",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.coffee"
                        }
                    },
                    end: "'",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.coffee"
                        }
                    },
                    name: "string.quoted.single.coffee",
                    patterns: [
                        {
                            captures: {
                                1: {
                                    name: "punctuation.definition.escape.backslash.coffee"
                                }
                            },
                            match: "(\\\\)(x[0-9A-Fa-f]{2}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)",
                            name: "constant.character.escape.backslash.coffee"
                        }
                    ]
                }
            ]
        }
    },
    scopeName: "source.coffee",
    embeddedLangs: [
        "javascript"
    ],
    aliases: [
        "coffeescript"
    ]
});
var a = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$javascript$2d$DYrC$2d$pEL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    t
];
;
}}),
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/stylus-CAHdVuhm.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>t)
});
const e = Object.freeze({
    displayName: "Stylus",
    fileTypes: [
        "styl",
        "stylus",
        "css.styl",
        "css.stylus"
    ],
    name: "stylus",
    patterns: [
        {
            include: "#comment"
        },
        {
            include: "#at_rule"
        },
        {
            include: "#language_keywords"
        },
        {
            include: "#language_constants"
        },
        {
            include: "#variable_declaration"
        },
        {
            include: "#function"
        },
        {
            include: "#selector"
        },
        {
            include: "#declaration"
        },
        {
            captures: {
                1: {
                    name: "punctuation.section.property-list.begin.css"
                },
                2: {
                    name: "punctuation.section.property-list.end.css"
                }
            },
            match: "(\\{)(\\})",
            name: "meta.brace.curly.css"
        },
        {
            match: "\\{|\\}",
            name: "meta.brace.curly.css"
        },
        {
            include: "#numeric"
        },
        {
            include: "#string"
        },
        {
            include: "#operator"
        }
    ],
    repository: {
        at_rule: {
            patterns: [
                {
                    begin: "\\s*((@)(import|require))\\b\\s*",
                    beginCaptures: {
                        1: {
                            name: "keyword.control.at-rule.import.stylus"
                        },
                        2: {
                            name: "punctuation.definition.keyword.stylus"
                        }
                    },
                    end: "\\s*((?=;|$|\\n))",
                    endCaptures: {
                        1: {
                            name: "punctuation.terminator.rule.css"
                        }
                    },
                    name: "meta.at-rule.import.css",
                    patterns: [
                        {
                            include: "#string"
                        }
                    ]
                },
                {
                    begin: "\\s*((@)(extend[s]?)\\b)\\s*",
                    beginCaptures: {
                        1: {
                            name: "keyword.control.at-rule.extend.stylus"
                        },
                        2: {
                            name: "punctuation.definition.keyword.stylus"
                        }
                    },
                    end: "\\s*((?=;|$|\\n))",
                    endCaptures: {
                        1: {
                            name: "punctuation.terminator.rule.css"
                        }
                    },
                    name: "meta.at-rule.extend.css",
                    patterns: [
                        {
                            include: "#selector"
                        }
                    ]
                },
                {
                    captures: {
                        1: {
                            name: "keyword.control.at-rule.fontface.stylus"
                        },
                        2: {
                            name: "punctuation.definition.keyword.stylus"
                        }
                    },
                    match: "^\\s*((@)font-face)\\b",
                    name: "meta.at-rule.fontface.stylus"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.control.at-rule.css.stylus"
                        },
                        2: {
                            name: "punctuation.definition.keyword.stylus"
                        }
                    },
                    match: "^\\s*((@)css)\\b",
                    name: "meta.at-rule.css.stylus"
                },
                {
                    begin: "\\s*((@)charset)\\b\\s*",
                    beginCaptures: {
                        1: {
                            name: "keyword.control.at-rule.charset.stylus"
                        },
                        2: {
                            name: "punctuation.definition.keyword.stylus"
                        }
                    },
                    end: "\\s*((?=;|$|\\n))",
                    name: "meta.at-rule.charset.stylus",
                    patterns: [
                        {
                            include: "#string"
                        }
                    ]
                },
                {
                    begin: "\\s*((@)keyframes)\\b\\s+([a-zA-Z_-][a-zA-Z0-9_-]*)",
                    beginCaptures: {
                        1: {
                            name: "keyword.control.at-rule.keyframes.stylus"
                        },
                        2: {
                            name: "punctuation.definition.keyword.stylus"
                        },
                        3: {
                            name: "entity.name.function.keyframe.stylus"
                        }
                    },
                    end: "\\s*((?=\\{|$|\\n))",
                    name: "meta.at-rule.keyframes.stylus"
                },
                {
                    begin: "(?=(\\b(\\d+%|from\\b|to\\b)))",
                    end: "(?=(\\{|\\n))",
                    name: "meta.at-rule.keyframes.stylus",
                    patterns: [
                        {
                            match: "(\\b(\\d+%|from\\b|to\\b))",
                            name: "entity.other.attribute-name.stylus"
                        }
                    ]
                },
                {
                    captures: {
                        1: {
                            name: "keyword.control.at-rule.media.stylus"
                        },
                        2: {
                            name: "punctuation.definition.keyword.stylus"
                        }
                    },
                    match: "^\\s*((@)media)\\b",
                    name: "meta.at-rule.media.stylus"
                },
                {
                    match: "(?:(?=\\w)(?<![\\w-]))(width|scan|resolution|orientation|monochrome|min-width|min-resolution|min-monochrome|min-height|min-device-width|min-device-height|min-device-aspect-ratio|min-color-index|min-color|min-aspect-ratio|max-width|max-resolution|max-monochrome|max-height|max-device-width|max-device-height|max-device-aspect-ratio|max-color-index|max-color|max-aspect-ratio|height|grid|device-width|device-height|device-aspect-ratio|color-index|color|aspect-ratio)(?:(?<=\\w)(?![\\w-]))",
                    name: "support.type.property-name.media-feature.media.css"
                },
                {
                    match: "(?:(?=\\w)(?<![\\w-]))(tv|tty|screen|projection|print|handheld|embossed|braille|aural|all)(?:(?<=\\w)(?![\\w-]))",
                    name: "support.constant.media-type.media.css"
                },
                {
                    match: "(?:(?=\\w)(?<![\\w-]))(portrait|landscape)(?:(?<=\\w)(?![\\w-]))",
                    name: "support.constant.property-value.media-property.media.css"
                }
            ]
        },
        char_escape: {
            match: "\\\\(.)",
            name: "constant.character.escape.stylus"
        },
        color: {
            patterns: [
                {
                    begin: "\\b(rgb|rgba|hsl|hsla)(\\()",
                    beginCaptures: {
                        1: {
                            name: "support.function.color.css"
                        },
                        2: {
                            name: "punctuation.section.function.css"
                        }
                    },
                    end: "(\\))",
                    endCaptures: {
                        1: {
                            name: "punctuation.section.function.css"
                        }
                    },
                    name: "meta.function.color.css",
                    patterns: [
                        {
                            match: "\\s*(,)\\s*",
                            name: "punctuation.separator.parameter.css"
                        },
                        {
                            include: "#numeric"
                        },
                        {
                            include: "#property_variable"
                        }
                    ]
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.constant.css"
                        }
                    },
                    match: "(#)([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\\b",
                    name: "constant.other.color.rgb-value.css"
                },
                {
                    comment: "http://www.w3.org/TR/CSS21/syndata.html#value-def-color",
                    match: "\\b(aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow)\\b",
                    name: "support.constant.color.w3c-standard-color-name.css"
                },
                {
                    comment: "http://www.w3.org/TR/css3-color/#svg-color",
                    match: "\\b(aliceblue|antiquewhite|aquamarine|azure|beige|bisque|blanchedalmond|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|gainsboro|ghostwhite|gold|goldenrod|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|limegreen|linen|magenta|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olivedrab|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|thistle|tomato|turquoise|violet|wheat|whitesmoke|yellowgreen)\\b",
                    name: "support.constant.color.w3c-extended-color-name.css"
                }
            ]
        },
        comment: {
            patterns: [
                {
                    include: "#comment_block"
                },
                {
                    include: "#comment_line"
                }
            ]
        },
        comment_block: {
            begin: "/\\*",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.comment.begin.css"
                }
            },
            end: "\\*/",
            endCaptures: {
                0: {
                    name: "punctuation.definition.comment.end.css"
                }
            },
            name: "comment.block.css"
        },
        comment_line: {
            begin: "(^[ \\t]+)?(?=//)",
            beginCaptures: {
                1: {
                    name: "punctuation.whitespace.comment.leading.stylus"
                }
            },
            end: "(?!\\G)",
            patterns: [
                {
                    begin: "//",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.comment.stylus"
                        }
                    },
                    end: "(?=\\n)",
                    name: "comment.line.double-slash.stylus"
                }
            ]
        },
        declaration: {
            begin: "((?<=^)[^\\S\\n]+)|((?<=;)[^\\S\\n]*)|((?<=\\{)[^\\S\\n]*)",
            end: "(?=\\n)|(;)|(?=\\})|(\\n)",
            endCaptures: {
                2: {
                    name: "punctuation.terminator.rule.css"
                }
            },
            name: "meta.property-list.css",
            patterns: [
                {
                    match: `(?x) (?<![\\w-])
--
(?:[-a-zA-Z_]    | [^\\x00-\\x7F])
(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]
|\\\\(?:[0-9a-fA-F]{1,6}|.)
)*`,
                    name: "variable.css"
                },
                {
                    include: "#language_keywords"
                },
                {
                    include: "#language_constants"
                },
                {
                    match: "(?:(?<=^)[^\\S\\n]+(\\n))"
                },
                {
                    captures: {
                        1: {
                            name: "support.type.property-name.css"
                        },
                        2: {
                            name: "punctuation.separator.key-value.css"
                        },
                        3: {
                            name: "variable.section.css"
                        }
                    },
                    match: "\\G\\s*(counter-reset|counter-increment)(?:(:)|[^\\S\\n])[^\\S\\n]*([a-zA-Z_-][a-zA-Z0-9_-]*)",
                    name: "meta.property.counter.css"
                },
                {
                    begin: "\\G\\s*(filter)(?:(:)|[^\\S\\n])[^\\S\\n]*",
                    beginCaptures: {
                        1: {
                            name: "support.type.property-name.css"
                        },
                        2: {
                            name: "punctuation.separator.key-value.css"
                        }
                    },
                    end: "(?=\\n|;|\\}|$)",
                    name: "meta.property.filter.css",
                    patterns: [
                        {
                            include: "#function"
                        },
                        {
                            include: "#property_values"
                        }
                    ]
                },
                {
                    include: "#property"
                },
                {
                    include: "#interpolation"
                },
                {
                    include: "$self"
                }
            ]
        },
        font_name: {
            match: "(\\b(?i:arial|century|comic|courier|cursive|fantasy|futura|garamond|georgia|helvetica|impact|lucida|monospace|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif)\\b)",
            name: "support.constant.font-name.css"
        },
        function: {
            begin: "(?=[a-zA-Z_-][a-zA-Z0-9_-]*\\()",
            end: "(\\))",
            endCaptures: {
                1: {
                    name: "punctuation.section.function.css"
                }
            },
            patterns: [
                {
                    begin: "(format|url|local)(\\()",
                    beginCaptures: {
                        1: {
                            name: "support.function.misc.css"
                        },
                        2: {
                            name: "punctuation.section.function.css"
                        }
                    },
                    end: "(?=\\))",
                    name: "meta.function.misc.css",
                    patterns: [
                        {
                            match: "(?<=\\()[^\\)\\s]*(?=\\))",
                            name: "string.css"
                        },
                        {
                            include: "#string"
                        },
                        {
                            include: "#variable"
                        },
                        {
                            include: "#operator"
                        },
                        {
                            match: "\\s*"
                        }
                    ]
                },
                {
                    captures: {
                        1: {
                            name: "support.function.misc.counter.css"
                        },
                        2: {
                            name: "punctuation.section.function.css"
                        },
                        3: {
                            name: "variable.section.css"
                        }
                    },
                    match: "(counter)(\\()([a-zA-Z_-][a-zA-Z0-9_-]*)(?=\\))",
                    name: "meta.function.misc.counter.css"
                },
                {
                    begin: "(counters)(\\()",
                    beginCaptures: {
                        1: {
                            name: "support.function.misc.counters.css"
                        },
                        2: {
                            name: "punctuation.section.function.css"
                        }
                    },
                    end: "(?=\\))",
                    name: "meta.function.misc.counters.css",
                    patterns: [
                        {
                            match: "\\G[a-zA-Z_-][a-zA-Z0-9_-]*",
                            name: "variable.section.css"
                        },
                        {
                            match: "\\s*(,)\\s*",
                            name: "punctuation.separator.parameter.css"
                        },
                        {
                            include: "#string"
                        },
                        {
                            include: "#interpolation"
                        }
                    ]
                },
                {
                    begin: "(attr)(\\()",
                    beginCaptures: {
                        1: {
                            name: "support.function.misc.attr.css"
                        },
                        2: {
                            name: "punctuation.section.function.css"
                        }
                    },
                    end: "(?=\\))",
                    name: "meta.function.misc.attr.css",
                    patterns: [
                        {
                            match: "\\G[a-zA-Z_-][a-zA-Z0-9_-]*",
                            name: "entity.other.attribute-name.attribute.css"
                        },
                        {
                            match: "(?<=[a-zA-Z0-9_-])\\s*\\b(string|color|url|integer|number|length|em|ex|px|rem|vw|vh|vmin|vmax|mm|cm|in|pt|pc|angle|deg|grad|rad|time|s|ms|frequency|Hz|kHz|%)\\b",
                            name: "support.type.attr.css"
                        },
                        {
                            match: "\\s*(,)\\s*",
                            name: "punctuation.separator.parameter.css"
                        },
                        {
                            include: "#string"
                        },
                        {
                            include: "#interpolation"
                        }
                    ]
                },
                {
                    begin: "(calc)(\\()",
                    beginCaptures: {
                        1: {
                            name: "support.function.misc.calc.css"
                        },
                        2: {
                            name: "punctuation.section.function.css"
                        }
                    },
                    end: "(?=\\))",
                    name: "meta.function.misc.calc.css",
                    patterns: [
                        {
                            include: "#property_values"
                        }
                    ]
                },
                {
                    begin: "(cubic-bezier)(\\()",
                    beginCaptures: {
                        1: {
                            name: "support.function.timing.cubic-bezier.css"
                        },
                        2: {
                            name: "punctuation.section.function.css"
                        }
                    },
                    end: "(?=\\))",
                    name: "meta.function.timing.cubic-bezier.css",
                    patterns: [
                        {
                            match: "\\s*(,)\\s*",
                            name: "punctuation.separator.parameter.css"
                        },
                        {
                            include: "#numeric"
                        },
                        {
                            include: "#interpolation"
                        }
                    ]
                },
                {
                    begin: "(steps)(\\()",
                    beginCaptures: {
                        1: {
                            name: "support.function.timing.steps.css"
                        },
                        2: {
                            name: "punctuation.section.function.css"
                        }
                    },
                    end: "(?=\\))",
                    name: "meta.function.timing.steps.css",
                    patterns: [
                        {
                            match: "\\s*(,)\\s*",
                            name: "punctuation.separator.parameter.css"
                        },
                        {
                            include: "#numeric"
                        },
                        {
                            match: "\\b(start|end)\\b",
                            name: "support.constant.timing.steps.direction.css"
                        },
                        {
                            include: "#interpolation"
                        }
                    ]
                },
                {
                    begin: "(linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient)(\\()",
                    beginCaptures: {
                        1: {
                            name: "support.function.gradient.css"
                        },
                        2: {
                            name: "punctuation.section.function.css"
                        }
                    },
                    end: "(?=\\))",
                    name: "meta.function.gradient.css",
                    patterns: [
                        {
                            match: "\\s*(,)\\s*",
                            name: "punctuation.separator.parameter.css"
                        },
                        {
                            include: "#numeric"
                        },
                        {
                            include: "#color"
                        },
                        {
                            match: "\\b(to|bottom|right|left|top|circle|ellipse|center|closest-side|closest-corner|farthest-side|farthest-corner|at)\\b",
                            name: "support.constant.gradient.css"
                        },
                        {
                            include: "#interpolation"
                        }
                    ]
                },
                {
                    begin: "(blur|brightness|contrast|grayscale|hue-rotate|invert|opacity|saturate|sepia)(\\()",
                    beginCaptures: {
                        1: {
                            name: "support.function.filter.css"
                        },
                        2: {
                            name: "punctuation.section.function.css"
                        }
                    },
                    end: "(?=\\))",
                    name: "meta.function.filter.css",
                    patterns: [
                        {
                            include: "#numeric"
                        },
                        {
                            include: "#property_variable"
                        },
                        {
                            include: "#interpolation"
                        }
                    ]
                },
                {
                    begin: "(drop-shadow)(\\()",
                    beginCaptures: {
                        1: {
                            name: "support.function.filter.drop-shadow.css"
                        },
                        2: {
                            name: "punctuation.section.function.css"
                        }
                    },
                    end: "(?=\\))",
                    name: "meta.function.filter.drop-shadow.css",
                    patterns: [
                        {
                            include: "#numeric"
                        },
                        {
                            include: "#color"
                        },
                        {
                            include: "#property_variable"
                        },
                        {
                            include: "#interpolation"
                        }
                    ]
                },
                {
                    begin: "(matrix|matrix3d|perspective|rotate|rotate3d|rotate[Xx]|rotate[yY]|rotate[zZ]|scale|scale3d|scale[xX]|scale[yY]|scale[zZ]|skew|skew[xX]|skew[yY]|translate|translate3d|translate[xX]|translate[yY]|translate[zZ])(\\()",
                    beginCaptures: {
                        1: {
                            name: "support.function.transform.css"
                        },
                        2: {
                            name: "punctuation.section.function.css"
                        }
                    },
                    end: "(?=\\))",
                    name: "meta.function.transform.css",
                    patterns: [
                        {
                            include: "#numeric"
                        },
                        {
                            include: "#property_variable"
                        },
                        {
                            include: "#interpolation"
                        }
                    ]
                },
                {
                    match: "(url|local|format|counter|counters|attr|calc)(?=\\()",
                    name: "support.function.misc.css"
                },
                {
                    match: "(cubic-bezier|steps)(?=\\()",
                    name: "support.function.timing.css"
                },
                {
                    match: "(linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient)(?=\\()",
                    name: "support.function.gradient.css"
                },
                {
                    match: "(blur|brightness|contrast|drop-shadow|grayscale|hue-rotate|invert|opacity|saturate|sepia)(?=\\()",
                    name: "support.function.filter.css"
                },
                {
                    match: "(matrix|matrix3d|perspective|rotate|rotate3d|rotate[Xx]|rotate[yY]|rotate[zZ]|scale|scale3d|scale[xX]|scale[yY]|scale[zZ]|skew|skew[xX]|skew[yY]|translate|translate3d|translate[xX]|translate[yY]|translate[zZ])(?=\\()",
                    name: "support.function.transform.css"
                },
                {
                    begin: "([a-zA-Z_-][a-zA-Z0-9_-]*)(\\()",
                    beginCaptures: {
                        1: {
                            name: "entity.name.function.stylus"
                        },
                        2: {
                            name: "punctuation.section.function.css"
                        }
                    },
                    end: "(?=\\))",
                    name: "meta.function.stylus",
                    patterns: [
                        {
                            match: `(?x)
--
(?:[-a-zA-Z_]    | [^\\x00-\\x7F])
(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]
|\\\\(?:[0-9a-fA-F]{1,6}|.)
)*`,
                            name: "variable.argument.stylus"
                        },
                        {
                            match: "\\s*(,)\\s*",
                            name: "punctuation.separator.parameter.css"
                        },
                        {
                            include: "#interpolation"
                        },
                        {
                            include: "#property_values"
                        }
                    ]
                },
                {
                    match: "\\(",
                    name: "punctuation.section.function.css"
                }
            ]
        },
        interpolation: {
            begin: "(?:(\\{)[^\\S\\n]*)(?=[^;=]*[^\\S\\n]*\\})",
            beginCaptures: {
                1: {
                    name: "meta.brace.curly"
                }
            },
            end: "(?:[^\\S\\n]*(\\}))|\\n|$",
            endCaptures: {
                1: {
                    name: "meta.brace.curly"
                }
            },
            name: "meta.interpolation.stylus",
            patterns: [
                {
                    include: "#variable"
                },
                {
                    include: "#numeric"
                },
                {
                    include: "#string"
                },
                {
                    include: "#operator"
                }
            ]
        },
        language_constants: {
            match: "\\b(true|false|null)\\b",
            name: "constant.language.stylus"
        },
        language_keywords: {
            patterns: [
                {
                    match: "(\\b|\\s)(return|else|for|unless|if|else)\\b",
                    name: "keyword.control.stylus"
                },
                {
                    match: "(\\b|\\s)(!important|in|is defined|is a)\\b",
                    name: "keyword.other.stylus"
                },
                {
                    match: "\\barguments\\b",
                    name: "variable.language.stylus"
                }
            ]
        },
        numeric: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "keyword.other.unit.css"
                        }
                    },
                    match: "(?x) (?<!\\w|-)(?:(?:-|\\+)?(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+)) ((?:px|pt|ch|cm|mm|in|r?em|ex|pc|deg|g?rad|dpi|dpcm|dppx|fr|ms|s|turn|vh|vmax|vmin|vw)\\b|%)?",
                    name: "constant.numeric.css"
                }
            ]
        },
        operator: {
            patterns: [
                {
                    match: "((?:\\?|:|!|~|\\+|(\\s-\\s)|(?:\\*)?\\*|\\/|%|(\\.)?\\.\\.|<|>|(?:=|:|\\?|\\+|-|\\*|\\/|%|<|>)?=|!=)|\\b(?:in|is(?:nt)?|(?<!:)not|or|and)\\b)",
                    name: "keyword.operator.stylus"
                },
                {
                    include: "#char_escape"
                }
            ]
        },
        property: {
            begin: `(?x:\\G\\s*(?:
(-webkit-[-A-Za-z]+|-moz-[-A-Za-z]+|-o-[-A-Za-z]+|-ms-[-A-Za-z]+|-khtml-[-A-Za-z]+|zoom|z-index|y|x|wrap|word-wrap|word-spacing|word-break|word|width|widows|white-space-collapse|white-space|white|weight|volume|voice-volume|voice-stress|voice-rate|voice-pitch-range|voice-pitch|voice-family|voice-duration|voice-balance|voice|visibility|vertical-align|variant|user-select|up|unicode-bidi|unicode-range|unicode|trim|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform|touch-action|top-width|top-style|top-right-radius|top-left-radius|top-color|top|timing-function|text-wrap|text-transform|text-shadow|text-replace|text-rendering|text-overflow|text-outline|text-justify|text-indent|text-height|text-emphasis|text-decoration|text-align-last|text-align|text|target-position|target-new|target-name|target|table-layout|tab-size|style-type|style-position|style-image|style|string-set|stretch|stress|stacking-strategy|stacking-shift|stacking-ruby|stacking|src|speed|speech-rate|speech|speak-punctuation|speak-numeral|speak-header|speak|span|spacing|space-collapse|space|sizing|size-adjust|size|shadow|respond-to|rule-width|rule-style|rule-color|rule|ruby-span|ruby-position|ruby-overhang|ruby-align|ruby|rows|rotation-point|rotation|role|right-width|right-style|right-color|right|richness|rest-before|rest-after|rest|resource|resize|reset|replace|repeat|rendering-intent|rate|radius|quotes|punctuation-trim|punctuation|property|profile|presentation-level|presentation|position|pointer-events|point|play-state|play-during|play-count|pitch-range|pitch|phonemes|pause-before|pause-after|pause|page-policy|page-break-inside|page-break-before|page-break-after|page|padding-top|padding-right|padding-left|padding-bottom|padding|pack|overhang|overflow-y|overflow-x|overflow-style|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|origin|orientation|orient|ordinal-group|order|opacity|offset|numeral|new|nav-up|nav-right|nav-left|nav-index|nav-down|nav|name|move-to|model|mix-blend-mode|min-width|min-height|min|max-width|max-height|max|marquee-style|marquee-speed|marquee-play-count|marquee-direction|marquee|marks|mark-before|mark-after|mark|margin-top|margin-right|margin-left|margin-bottom|margin|mask-image|list-style-type|list-style-position|list-style-image|list-style|list|lines|line-stacking-strategy|line-stacking-shift|line-stacking-ruby|line-stacking|line-height|line-break|level|letter-spacing|length|left-width|left-style|left-color|left|label|justify-content|justify|iteration-count|inline-box-align|initial-value|initial-size|initial-before-align|initial-before-adjust|initial-after-align|initial-after-adjust|index|indent|increment|image-resolution|image-orientation|image|icon|hyphens|hyphenate-resource|hyphenate-lines|hyphenate-character|hyphenate-before|hyphenate-after|hyphenate|height|header|hanging-punctuation|gap|grid|grid-area|grid-auto-columns|grid-auto-flow|grid-auto-rows|grid-column|grid-column-end|grid-column-start|grid-row|grid-row-end|grid-row-start|grid-template|grid-template-areas|grid-template-columns|grid-template-rows|row-gap|gap|font-kerning|font-language-override|font-weight|font-variant-caps|font-variant|font-style|font-synthesis|font-stretch|font-size-adjust|font-size|font-family|font|float-offset|float|flex-wrap|flex-shrink|flex-grow|flex-group|flex-flow|flex-direction|flex-basis|flex|fit-position|fit|fill|filter|family|empty-cells|emphasis|elevation|duration|drop-initial-value|drop-initial-size|drop-initial-before-align|drop-initial-before-adjust|drop-initial-after-align|drop-initial-after-adjust|drop|down|dominant-baseline|display-role|display-model|display|direction|delay|decoration-break|decoration|cursor|cue-before|cue-after|cue|crop|counter-reset|counter-increment|counter|count|content|columns|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|column-break-before|column-break-after|column|color-profile|color|collapse|clip|clear|character|caption-side|break-inside|break-before|break-after|break|box-sizing|box-shadow|box-pack|box-orient|box-ordinal-group|box-lines|box-flex-group|box-flex|box-direction|box-decoration-break|box-align|box|bottom-width|bottom-style|bottom-right-radius|bottom-left-radius|bottom-color|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-length|border-left-width|border-left-style|border-left-color|border-left|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|bookmark-target|bookmark-level|bookmark-label|bookmark|binding|bidi|before|baseline-shift|baseline|balance|background-blend-mode|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-break|background-attachment|background|azimuth|attachment|appearance|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-duration|animation-direction|animation-delay|animation-fill-mode|animation|alignment-baseline|alignment-adjust|alignment|align-self|align-last|align-items|align-content|align|after|adjust|will-change)|
(writing-mode|text-anchor|stroke-width|stroke-opacity|stroke-miterlimit|stroke-linejoin|stroke-linecap|stroke-dashoffset|stroke-dasharray|stroke|stop-opacity|stop-color|shape-rendering|marker-start|marker-mid|marker-end|lighting-color|kerning|image-rendering|glyph-orientation-vertical|glyph-orientation-horizontal|flood-opacity|flood-color|fill-rule|fill-opacity|fill|enable-background|color-rendering|color-interpolation-filters|color-interpolation|clip-rule|clip-path)|
([a-zA-Z_-][a-zA-Z0-9_-]*)
)(?!([^\\S\\n]*&)|([^\\S\\n]*\\{))(?=:|([^\\S\\n]+[^\\s])))`,
            beginCaptures: {
                1: {
                    name: "support.type.property-name.css"
                },
                2: {
                    name: "support.type.property-name.svg.css"
                },
                3: {
                    name: "support.function.mixin.stylus"
                }
            },
            end: "(;)|(?=\\n|\\}|$)",
            endCaptures: {
                1: {
                    name: "punctuation.terminator.rule.css"
                }
            },
            patterns: [
                {
                    include: "#property_value"
                }
            ]
        },
        property_value: {
            begin: "\\G(?:(:)|(\\s))(\\s*)(?!&)",
            beginCaptures: {
                1: {
                    name: "punctuation.separator.key-value.css"
                },
                2: {
                    name: "punctuation.separator.key-value.css"
                }
            },
            end: "(?=\\n|;|\\})",
            endCaptures: {
                1: {
                    name: "punctuation.terminator.rule.css"
                }
            },
            name: "meta.property-value.css",
            patterns: [
                {
                    include: "#property_values"
                },
                {
                    match: "[^\\n]+?"
                }
            ]
        },
        property_values: {
            patterns: [
                {
                    include: "#function"
                },
                {
                    include: "#comment"
                },
                {
                    include: "#language_keywords"
                },
                {
                    include: "#language_constants"
                },
                {
                    match: "(?:(?=\\w)(?<![\\w-]))(wrap-reverse|wrap|whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|unicase|underline|ultra-expanded|ultra-condensed|transparent|transform|top|titling-caps|thin|thick|text-top|text-bottom|text|tb-rl|table-row-group|table-row|table-header-group|table-footer-group|table-column-group|table-column|table-cell|table|sw-resize|super|strict|stretch|step-start|step-end|static|square|space-between|space-around|space|solid|soft-light|small-caps|separate|semi-expanded|semi-condensed|se-resize|scroll|screen|saturation|s-resize|running|rtl|row-reverse|row-resize|row|round|right|ridge|reverse|repeat-y|repeat-x|repeat|relative|progressive|progress|pre-wrap|pre-line|pre|pointer|petite-caps|paused|pan-x|pan-left|pan-right|pan-y|pan-up|pan-down|padding-box|overline|overlay|outside|outset|optimizeSpeed|optimizeLegibility|opacity|oblique|nw-resize|nowrap|not-allowed|normal|none|no-repeat|no-drop|newspaper|ne-resize|n-resize|multiply|move|middle|medium|max-height|manipulation|main-size|luminosity|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|local|list-item|linear(?!-)|line-through|line-edge|line|lighter|lighten|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline-block|inline|inherit|infinite|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|hue|horizontal|hidden|help|hard-light|hand|groove|geometricPrecision|forwards|flex-start|flex-end|flex|fixed|extra-expanded|extra-condensed|expanded|exclusion|ellipsis|ease-out|ease-in-out|ease-in|ease|e-resize|double|dotted|distribute-space|distribute-letter|distribute-all-lines|distribute|disc|disabled|difference|default|decimal|dashed|darken|currentColor|crosshair|cover|content-box|contain|condensed|column-reverse|column|color-dodge|color-burn|color|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|border-box|bolder|bold|block|bidi-override|below|baseline|balance|backwards|auto|antialiased|always|alternate-reverse|alternate|all-small-caps|all-scroll|all-petite-caps|all|absolute)(?:(?<=\\w)(?![\\w-]))",
                    name: "support.constant.property-value.css"
                },
                {
                    match: "(?:(?=\\w)(?<![\\w-]))(start|sRGB|square|round|optimizeSpeed|optimizeQuality|nonzero|miter|middle|linearRGB|geometricPrecision |evenodd |end |crispEdges|butt|bevel)(?:(?<=\\w)(?![\\w-]))",
                    name: "support.constant.property-value.svg.css"
                },
                {
                    include: "#font_name"
                },
                {
                    include: "#numeric"
                },
                {
                    include: "#color"
                },
                {
                    include: "#string"
                },
                {
                    match: "\\!\\s*important",
                    name: "keyword.other.important.css"
                },
                {
                    include: "#operator"
                },
                {
                    include: "#stylus_keywords"
                },
                {
                    include: "#property_variable"
                }
            ]
        },
        property_variable: {
            patterns: [
                {
                    include: "#variable"
                },
                {
                    match: "(?<!^)(\\@[a-zA-Z_-][a-zA-Z0-9_-]*)",
                    name: "variable.property.stylus"
                }
            ]
        },
        selector: {
            patterns: [
                {
                    match: "(?:(?=\\w)(?<![\\w-]))(a|abbr|acronym|address|area|article|aside|audio|b|base|bdi|bdo|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|data|datalist|dd|del|details|dfn|dialog|div|dl|dt|em|embed|eventsource|fieldset|figure|figcaption|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|main|map|mark|math|menu|menuitem|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|picture|pre|progress|q|rb|rp|rt|rtc|ruby|s|samp|script|section|select|small|source|span|strike|strong|style|sub|summary|sup|svg|table|tbody|td|template|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video|wbr)(?:(?<=\\w)(?![\\w-]))",
                    name: "entity.name.tag.css"
                },
                {
                    match: "(?:(?=\\w)(?<![\\w-]))(vkern|view|use|tspan|tref|title|textPath|text|symbol|switch|svg|style|stop|set|script|rect|radialGradient|polyline|polygon|pattern|path|mpath|missing-glyph|metadata|mask|marker|linearGradient|line|image|hkern|glyphRef|glyph|g|foreignObject|font-face-uri|font-face-src|font-face-name|font-face-format|font-face|font|filter|feTurbulence|feTile|feSpotLight|feSpecularLighting|fePointLight|feOffset|feMorphology|feMergeNode|feMerge|feImage|feGaussianBlur|feFuncR|feFuncG|feFuncB|feFuncA|feFlood|feDistantLight|feDisplacementMap|feDiffuseLighting|feConvolveMatrix|feComposite|feComponentTransfer|feColorMatrix|feBlend|ellipse|desc|defs|cursor|color-profile|clipPath|circle|animateTransform|animateMotion|animateColor|animate|altGlyphItem|altGlyphDef|altGlyph|a)(?:(?<=\\w)(?![\\w-]))",
                    name: "entity.name.tag.svg.css"
                },
                {
                    match: "\\s*(\\,)\\s*",
                    name: "meta.selector.stylus"
                },
                {
                    match: "\\*",
                    name: "meta.selector.stylus"
                },
                {
                    captures: {
                        2: {
                            name: "entity.other.attribute-name.parent-selector-suffix.stylus"
                        }
                    },
                    match: "\\s*(\\&)([a-zA-Z0-9_-]+)\\s*",
                    name: "meta.selector.stylus"
                },
                {
                    match: "\\s*(\\&)\\s*",
                    name: "meta.selector.stylus"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.entity.css"
                        }
                    },
                    match: "(\\.)[a-zA-Z0-9_-]+",
                    name: "entity.other.attribute-name.class.css"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.entity.css"
                        }
                    },
                    match: "(#)[a-zA-Z][a-zA-Z0-9_-]*",
                    name: "entity.other.attribute-name.id.css"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.entity.css"
                        }
                    },
                    match: "(:+)(after|before|content|first-letter|first-line|host|(-(moz|webkit|ms)-)?selection)\\b",
                    name: "entity.other.attribute-name.pseudo-element.css"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.entity.css"
                        }
                    },
                    match: "(:)((first|last)-child|(first|last|only)-of-type|empty|root|target|first|left|right)\\b",
                    name: "entity.other.attribute-name.pseudo-class.css"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.entity.css"
                        }
                    },
                    match: "(:)(checked|enabled|default|disabled|indeterminate|invalid|optional|required|valid)\\b",
                    name: "entity.other.attribute-name.pseudo-class.ui-state.css"
                },
                {
                    begin: "((:)not)(\\()",
                    beginCaptures: {
                        1: {
                            name: "entity.other.attribute-name.pseudo-class.css"
                        },
                        2: {
                            name: "punctuation.definition.entity.css"
                        },
                        3: {
                            name: "punctuation.section.function.css"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.function.css"
                        }
                    },
                    patterns: [
                        {
                            include: "#selector"
                        }
                    ]
                },
                {
                    captures: {
                        1: {
                            name: "entity.other.attribute-name.pseudo-class.css"
                        },
                        2: {
                            name: "punctuation.definition.entity.css"
                        },
                        3: {
                            name: "punctuation.section.function.css"
                        },
                        4: {
                            name: "constant.numeric.css"
                        },
                        5: {
                            name: "punctuation.section.function.css"
                        }
                    },
                    match: "((:)nth-(?:(?:last-)?child|(?:last-)?of-type))(\\()(\\-?(?:\\d+n?|n)(?:\\+\\d+)?|even|odd)(\\))"
                },
                {
                    captures: {
                        1: {
                            name: "entity.other.attribute-name.pseudo-class.css"
                        },
                        2: {
                            name: "puncutation.definition.entity.css"
                        },
                        3: {
                            name: "punctuation.section.function.css"
                        },
                        4: {
                            name: "constant.language.css"
                        },
                        5: {
                            name: "punctuation.section.function.css"
                        }
                    },
                    match: "((:)dir)\\s*(?:(\\()(ltr|rtl)?(\\)))?"
                },
                {
                    captures: {
                        1: {
                            name: "entity.other.attribute-name.pseudo-class.css"
                        },
                        2: {
                            name: "puncutation.definition.entity.css"
                        },
                        3: {
                            name: "punctuation.section.function.css"
                        },
                        4: {
                            name: "constant.language.css"
                        },
                        6: {
                            name: "punctuation.section.function.css"
                        }
                    },
                    match: "((:)lang)\\s*(?:(\\()(\\w+(-\\w+)?)?(\\)))?"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.entity.css"
                        }
                    },
                    match: "(:)(active|hover|link|visited|focus)\\b",
                    name: "entity.other.attribute-name.pseudo-class.css"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.entity.css"
                        }
                    },
                    match: "(::)(shadow)\\b",
                    name: "entity.other.attribute-name.pseudo-class.css"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.entity.css"
                        },
                        2: {
                            name: "entity.other.attribute-name.attribute.css"
                        },
                        3: {
                            name: "punctuation.separator.operator.css"
                        },
                        4: {
                            name: "string.unquoted.attribute-value.css"
                        },
                        5: {
                            name: "string.quoted.double.attribute-value.css"
                        },
                        6: {
                            name: "punctuation.definition.string.begin.css"
                        },
                        7: {
                            name: "punctuation.definition.string.end.css"
                        },
                        8: {
                            name: "punctuation.definition.entity.css"
                        }
                    },
                    match: `(?i)(\\[)\\s*(-?[_a-z\\\\[[:^ascii:]]][_a-z0-9\\-\\\\[[:^ascii:]]]*)(?:\\s*([~|^$*]?=)\\s*(?:(-?[_a-z\\\\[[:^ascii:]]][_a-z0-9\\-\\\\[[:^ascii:]]]*)|((?>(['"])(?:[^\\\\]|\\\\.)*?(\\6)))))?\\s*(\\])`,
                    name: "meta.attribute-selector.css"
                },
                {
                    include: "#interpolation"
                },
                {
                    include: "#variable"
                }
            ]
        },
        string: {
            patterns: [
                {
                    begin: '"',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.css"
                        }
                    },
                    end: '"',
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.css"
                        }
                    },
                    name: "string.quoted.double.css",
                    patterns: [
                        {
                            match: "\\\\([a-fA-F0-9]{1,6}|.)",
                            name: "constant.character.escape.css"
                        }
                    ]
                },
                {
                    begin: "'",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.css"
                        }
                    },
                    end: "'",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.css"
                        }
                    },
                    name: "string.quoted.single.css",
                    patterns: [
                        {
                            match: "\\\\([a-fA-F0-9]{1,6}|.)",
                            name: "constant.character.escape.css"
                        }
                    ]
                }
            ]
        },
        variable: {
            match: "(\\$[a-zA-Z_-][a-zA-Z0-9_-]*)",
            name: "variable.stylus"
        },
        variable_declaration: {
            begin: "^[^\\S\\n]*(\\$?[a-zA-Z_-][a-zA-Z0-9_-]*)[^\\S\\n]*(\\=|\\?\\=|\\:\\=)",
            beginCaptures: {
                1: {
                    name: "variable.stylus"
                },
                2: {
                    name: "keyword.operator.stylus"
                }
            },
            end: "(\\n)|(;)|(?=\\})",
            endCaptures: {
                2: {
                    name: "punctuation.terminator.rule.css"
                }
            },
            patterns: [
                {
                    include: "#property_values"
                }
            ]
        }
    },
    scopeName: "source.stylus",
    aliases: [
        "styl"
    ]
});
var t = [
    e
];
;
}}),
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/sass-LqXmC1Fh.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>n)
});
const e = Object.freeze({
    displayName: "Sass",
    fileTypes: [
        "sass"
    ],
    foldingStartMarker: "/\\*|^#|^\\*|^\\b|*#?region|^\\.",
    foldingStopMarker: "\\*/|*#?endregion|^\\s*$",
    name: "sass",
    patterns: [
        {
            begin: "^(\\s*)(/\\*)",
            end: "(\\*/)|^(?!\\s\\1)",
            name: "comment.block.sass",
            patterns: [
                {
                    include: "#comment-tag"
                },
                {
                    include: "#comment-param"
                }
            ]
        },
        {
            match: "^[\\t ]*/?//[\\t ]*[SRI][\\t ]*$",
            name: "keyword.other.sass.formatter.action"
        },
        {
            begin: "^[\\t ]*//[\\t ]*(import)[\\t ]*(css-variables)[\\t ]*(from)",
            captures: {
                1: {
                    name: "keyword.control"
                },
                2: {
                    name: "variable"
                },
                3: {
                    name: "keyword.control"
                }
            },
            end: "$\\n?",
            name: "comment.import.css.variables",
            patterns: [
                {
                    include: "#import-quotes"
                }
            ]
        },
        {
            include: "#double-slash"
        },
        {
            include: "#double-quoted"
        },
        {
            include: "#single-quoted"
        },
        {
            include: "#interpolation"
        },
        {
            include: "#curly-brackets"
        },
        {
            include: "#placeholder-selector"
        },
        {
            begin: "\\$[a-zA-Z0-9_-]+(?=:)",
            captures: {
                0: {
                    name: "variable.other.name"
                }
            },
            end: "$\\n?|(?=\\)\\s\\)|\\)\\n)",
            name: "sass.script.maps",
            patterns: [
                {
                    include: "#double-slash"
                },
                {
                    include: "#double-quoted"
                },
                {
                    include: "#single-quoted"
                },
                {
                    include: "#interpolation"
                },
                {
                    include: "#variable"
                },
                {
                    include: "#rgb-value"
                },
                {
                    include: "#numeric"
                },
                {
                    include: "#unit"
                },
                {
                    include: "#flag"
                },
                {
                    include: "#comma"
                },
                {
                    include: "#function"
                },
                {
                    include: "#function-content"
                },
                {
                    include: "#operator"
                },
                {
                    include: "#reserved-words"
                },
                {
                    include: "#parent-selector"
                },
                {
                    include: "#property-value"
                },
                {
                    include: "#semicolon"
                },
                {
                    include: "#dotdotdot"
                }
            ]
        },
        {
            include: "#variable-root"
        },
        {
            include: "#numeric"
        },
        {
            include: "#unit"
        },
        {
            include: "#flag"
        },
        {
            include: "#comma"
        },
        {
            include: "#semicolon"
        },
        {
            include: "#dotdotdot"
        },
        {
            begin: "@include|\\+(?!\\W|\\d)",
            captures: {
                0: {
                    name: "keyword.control.at-rule.css.sass"
                }
            },
            end: "(?=\\n|\\()",
            name: "support.function.name.sass.library"
        },
        {
            begin: "^(@use)",
            captures: {
                0: {
                    name: "keyword.control.at-rule.css.sass.use"
                }
            },
            end: "(?=\\n)",
            name: "sass.use",
            patterns: [
                {
                    match: "as|with",
                    name: "support.type.css.sass"
                },
                {
                    include: "#numeric"
                },
                {
                    include: "#unit"
                },
                {
                    include: "#variable-root"
                },
                {
                    include: "#rgb-value"
                },
                {
                    include: "#comma"
                },
                {
                    include: "#parenthesis-open"
                },
                {
                    include: "#parenthesis-close"
                },
                {
                    include: "#colon"
                },
                {
                    include: "#import-quotes"
                }
            ]
        },
        {
            begin: "^@import(.*?)( as.*)?$",
            captures: {
                1: {
                    name: "constant.character.css.sass"
                },
                2: {
                    name: "invalid"
                }
            },
            end: "(?=\\n)",
            name: "keyword.control.at-rule.use"
        },
        {
            begin: "@mixin|^[\\t ]*=|@function",
            captures: {
                0: {
                    name: "keyword.control.at-rule.css.sass"
                }
            },
            end: "$\\n?|(?=\\()",
            name: "support.function.name.sass",
            patterns: [
                {
                    match: "[\\w-]+",
                    name: "entity.name.function"
                }
            ]
        },
        {
            begin: "@",
            end: "$\\n?|\\s(?!(all|braille|embossed|handheld|print|projection|screen|speech|tty|tv|if|only|not)(\\s|,))",
            name: "keyword.control.at-rule.css.sass"
        },
        {
            begin: "(?<!\\-|\\()\\b(a|abbr|acronym|address|applet|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|datalist|dd|del|details|dfn|dialog|div|dl|dt|em|embed|eventsource|fieldset|figure|figcaption|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|label|legend|li|link|map|mark|menu|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|picture|pre|progress|q|samp|script|section|select|small|source|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video|main|svg|rect|ruby|center|circle|ellipse|line|polyline|polygon|path|text|u|slot)\\b(?!-|\\)|:\\s)|&",
            end: "$\\n?|(?=\\s|,|\\(|\\)|\\.|\\#|\\[|>|-|_)",
            name: "entity.name.tag.css.sass.symbol",
            patterns: [
                {
                    include: "#interpolation"
                },
                {
                    include: "#pseudo-class"
                }
            ]
        },
        {
            begin: "#",
            end: "$\\n?|(?=\\s|,|\\(|\\)|\\.|\\[|>)",
            name: "entity.other.attribute-name.id.css.sass",
            patterns: [
                {
                    include: "#interpolation"
                },
                {
                    include: "#pseudo-class"
                }
            ]
        },
        {
            begin: "\\.|(?<=&)(-|_)",
            end: "$\\n?|(?=\\s|,|\\(|\\)|\\[|>)",
            name: "entity.other.attribute-name.class.css.sass",
            patterns: [
                {
                    include: "#interpolation"
                },
                {
                    include: "#pseudo-class"
                }
            ]
        },
        {
            begin: "\\[",
            end: "\\]",
            name: "entity.other.attribute-selector.sass",
            patterns: [
                {
                    include: "#double-quoted"
                },
                {
                    include: "#single-quoted"
                },
                {
                    match: "\\^|\\$|\\*|~",
                    name: "keyword.other.regex.sass"
                }
            ]
        },
        {
            match: `^((?<=\\]|\\)|not\\(|\\*|>|>\\s)|
*):[a-z:-]+|(::|:-)[a-z:-]+`,
            name: "entity.other.attribute-name.pseudo-class.css.sass"
        },
        {
            include: "#module"
        },
        {
            match: "[\\w-]*\\(",
            name: "entity.name.function"
        },
        {
            match: "\\)",
            name: "entity.name.function.close"
        },
        {
            begin: ":",
            end: "$\\n?|(?=\\s\\(|and\\(|\\),)",
            name: "meta.property-list.css.sass.prop",
            patterns: [
                {
                    match: "(?<=:)[a-z-]+\\s",
                    name: "support.type.property-name.css.sass.prop.name"
                },
                {
                    include: "#double-slash"
                },
                {
                    include: "#double-quoted"
                },
                {
                    include: "#single-quoted"
                },
                {
                    include: "#interpolation"
                },
                {
                    include: "#curly-brackets"
                },
                {
                    include: "#variable"
                },
                {
                    include: "#rgb-value"
                },
                {
                    include: "#numeric"
                },
                {
                    include: "#unit"
                },
                {
                    include: "#module"
                },
                {
                    match: "--.+?(?=\\))",
                    name: "variable.css"
                },
                {
                    match: "[\\w-]*\\(",
                    name: "entity.name.function"
                },
                {
                    match: "\\)",
                    name: "entity.name.function.close"
                },
                {
                    include: "#flag"
                },
                {
                    include: "#comma"
                },
                {
                    include: "#semicolon"
                },
                {
                    include: "#function"
                },
                {
                    include: "#function-content"
                },
                {
                    include: "#operator"
                },
                {
                    include: "#parent-selector"
                },
                {
                    include: "#property-value"
                }
            ]
        },
        {
            include: "#rgb-value"
        },
        {
            include: "#function"
        },
        {
            include: "#function-content"
        },
        {
            begin: "(?<=})(?!\\n|\\(|\\)|[a-zA-Z0-9_-]+:)",
            end: "\\s|(?=,|\\.|\\[|\\)|\\n)",
            name: "entity.name.tag.css.sass",
            patterns: [
                {
                    include: "#interpolation"
                },
                {
                    include: "#pseudo-class"
                }
            ]
        },
        {
            include: "#operator"
        },
        {
            match: "[a-z-]+((?=:|#{))",
            name: "support.type.property-name.css.sass.prop.name"
        },
        {
            include: "#reserved-words"
        },
        {
            include: "#property-value"
        }
    ],
    repository: {
        colon: {
            match: ":",
            name: "meta.property-list.css.sass.colon"
        },
        comma: {
            match: "\\band\\b|\\bor\\b|,",
            name: "comment.punctuation.comma.sass"
        },
        "comment-param": {
            match: "\\@(\\w+)",
            name: "storage.type.class.jsdoc"
        },
        "comment-tag": {
            begin: "(?<={{)",
            end: "(?=}})",
            name: "comment.tag.sass"
        },
        "curly-brackets": {
            match: "{|}",
            name: "invalid"
        },
        dotdotdot: {
            match: "\\.\\.\\.",
            name: "variable.other"
        },
        "double-quoted": {
            begin: '"',
            end: '"',
            name: "string.quoted.double.css.sass",
            patterns: [
                {
                    include: "#quoted-interpolation"
                }
            ]
        },
        "double-slash": {
            begin: "//",
            end: "$\\n?",
            name: "comment.line.sass",
            patterns: [
                {
                    include: "#comment-tag"
                }
            ]
        },
        flag: {
            match: "!(important|default|optional|global)",
            name: "keyword.other.important.css.sass"
        },
        function: {
            match: "(?<=[\\s|\\(|,|:])(?!url|format|attr)[a-zA-Z0-9_-][\\w-]*(?=\\()",
            name: "support.function.name.sass"
        },
        "function-content": {
            begin: "(?<=url\\(|format\\(|attr\\()",
            end: ".(?=\\))",
            name: "string.quoted.double.css.sass"
        },
        "import-quotes": {
            match: `["']?\\.{0,2}[\\w/]+["']?`,
            name: "constant.character.css.sass"
        },
        interpolation: {
            begin: "#{",
            end: "}",
            name: "support.function.interpolation.sass",
            patterns: [
                {
                    include: "#variable"
                },
                {
                    include: "#numeric"
                },
                {
                    include: "#operator"
                },
                {
                    include: "#unit"
                },
                {
                    include: "#comma"
                },
                {
                    include: "#double-quoted"
                },
                {
                    include: "#single-quoted"
                }
            ]
        },
        module: {
            captures: {
                1: {
                    name: "constant.character.module.name"
                },
                2: {
                    name: "constant.numeric.module.dot"
                }
            },
            match: "([\\w-]+?)(\\.)",
            name: "constant.character.module"
        },
        numeric: {
            match: "(-|\\.)?[0-9]+(\\.[0-9]+)?",
            name: "constant.numeric.css.sass"
        },
        operator: {
            match: "\\+|\\s-\\s|\\s-(?=\\$)|(?<=\\()-(?=\\$)|\\s-(?=\\()|\\*|/|%|=|!|<|>|~",
            name: "keyword.operator.sass"
        },
        "parent-selector": {
            match: "&",
            name: "entity.name.tag.css.sass"
        },
        "parenthesis-close": {
            match: "\\)",
            name: "entity.name.function.parenthesis.close"
        },
        "parenthesis-open": {
            match: "\\(",
            name: "entity.name.function.parenthesis.open"
        },
        "placeholder-selector": {
            begin: "(?<!\\d)%(?!\\d)",
            end: "$\\n?|\\s",
            name: "entity.other.inherited-class.placeholder-selector.css.sass"
        },
        "property-value": {
            match: "[a-zA-Z0-9_-]+",
            name: "meta.property-value.css.sass support.constant.property-value.css.sass"
        },
        "pseudo-class": {
            match: ":[a-z:-]+",
            name: "entity.other.attribute-name.pseudo-class.css.sass"
        },
        "quoted-interpolation": {
            begin: "#{",
            end: "}",
            name: "support.function.interpolation.sass",
            patterns: [
                {
                    include: "#variable"
                },
                {
                    include: "#numeric"
                },
                {
                    include: "#operator"
                },
                {
                    include: "#unit"
                },
                {
                    include: "#comma"
                }
            ]
        },
        "reserved-words": {
            match: "\\b(false|from|in|not|null|through|to|true)\\b",
            name: "support.type.property-name.css.sass"
        },
        "rgb-value": {
            match: "(#)([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\\b",
            name: "constant.language.color.rgb-value.css.sass"
        },
        semicolon: {
            match: ";",
            name: "invalid"
        },
        "single-quoted": {
            begin: "'",
            end: "'",
            name: "string.quoted.single.css.sass",
            patterns: [
                {
                    include: "#quoted-interpolation"
                }
            ]
        },
        unit: {
            match: "(?<=[\\d]|})(ch|cm|deg|dpcm|dpi|dppx|em|ex|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vw|fr|%)",
            name: "keyword.control.unit.css.sass"
        },
        variable: {
            match: "\\$[a-zA-Z0-9_-]+",
            name: "variable.other.value"
        },
        "variable-root": {
            match: "\\$[a-zA-Z0-9_-]+",
            name: "variable.other.root"
        }
    },
    scopeName: "source.sass"
});
var n = [
    e
];
;
}}),
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/css-CAzixsid.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>n)
});
const e = Object.freeze({
    displayName: "CSS",
    name: "css",
    patterns: [
        {
            include: "#comment-block"
        },
        {
            include: "#escapes"
        },
        {
            include: "#combinators"
        },
        {
            include: "#selector"
        },
        {
            include: "#at-rules"
        },
        {
            include: "#rule-list"
        }
    ],
    repository: {
        "at-rules": {
            patterns: [
                {
                    begin: "\\A(?:\\xEF\\xBB\\xBF)?(?i:(?=\\s*@charset\\b))",
                    end: ";|(?=$)",
                    endCaptures: {
                        0: {
                            name: "punctuation.terminator.rule.css"
                        }
                    },
                    name: "meta.at-rule.charset.css",
                    patterns: [
                        {
                            captures: {
                                1: {
                                    name: "invalid.illegal.not-lowercase.charset.css"
                                },
                                2: {
                                    name: "invalid.illegal.leading-whitespace.charset.css"
                                },
                                3: {
                                    name: "invalid.illegal.no-whitespace.charset.css"
                                },
                                4: {
                                    name: "invalid.illegal.whitespace.charset.css"
                                },
                                5: {
                                    name: "invalid.illegal.not-double-quoted.charset.css"
                                },
                                6: {
                                    name: "invalid.illegal.unclosed-string.charset.css"
                                },
                                7: {
                                    name: "invalid.illegal.unexpected-characters.charset.css"
                                }
                            },
                            match: `(?x)
\\G
((?!@charset)@\\w+)
|
\\G(\\s+)
|
(@charset\\S[^;]*)
|
(?<=@charset)
(\\x20{2,}|\\t+)
|
(?<=@charset\\x20)
([^";]+)
|
("[^"]+$)
|
(?<=")
([^;]+)`
                        },
                        {
                            captures: {
                                1: {
                                    name: "keyword.control.at-rule.charset.css"
                                },
                                2: {
                                    name: "punctuation.definition.keyword.css"
                                }
                            },
                            match: "((@)charset)(?=\\s)"
                        },
                        {
                            begin: '"',
                            beginCaptures: {
                                0: {
                                    name: "punctuation.definition.string.begin.css"
                                }
                            },
                            end: '"|$',
                            endCaptures: {
                                0: {
                                    name: "punctuation.definition.string.end.css"
                                }
                            },
                            name: "string.quoted.double.css",
                            patterns: [
                                {
                                    begin: '(?:\\G|^)(?=(?:[^"])+$)',
                                    end: "$",
                                    name: "invalid.illegal.unclosed.string.css"
                                }
                            ]
                        }
                    ]
                },
                {
                    begin: `(?i)((@)import)(?:\\s+|$|(?=['"]|/\\*))`,
                    beginCaptures: {
                        1: {
                            name: "keyword.control.at-rule.import.css"
                        },
                        2: {
                            name: "punctuation.definition.keyword.css"
                        }
                    },
                    end: ";",
                    endCaptures: {
                        0: {
                            name: "punctuation.terminator.rule.css"
                        }
                    },
                    name: "meta.at-rule.import.css",
                    patterns: [
                        {
                            begin: "\\G\\s*(?=/\\*)",
                            end: "(?<=\\*/)\\s*",
                            patterns: [
                                {
                                    include: "#comment-block"
                                }
                            ]
                        },
                        {
                            include: "#string"
                        },
                        {
                            include: "#url"
                        },
                        {
                            include: "#media-query-list"
                        }
                    ]
                },
                {
                    begin: "(?i)((@)font-face)(?=\\s*|{|/\\*|$)",
                    beginCaptures: {
                        1: {
                            name: "keyword.control.at-rule.font-face.css"
                        },
                        2: {
                            name: "punctuation.definition.keyword.css"
                        }
                    },
                    end: "(?!\\G)",
                    name: "meta.at-rule.font-face.css",
                    patterns: [
                        {
                            include: "#comment-block"
                        },
                        {
                            include: "#escapes"
                        },
                        {
                            include: "#rule-list"
                        }
                    ]
                },
                {
                    begin: "(?i)(@)page(?=[\\s:{]|/\\*|$)",
                    captures: {
                        0: {
                            name: "keyword.control.at-rule.page.css"
                        },
                        1: {
                            name: "punctuation.definition.keyword.css"
                        }
                    },
                    end: "(?=\\s*($|[:{;]))",
                    name: "meta.at-rule.page.css",
                    patterns: [
                        {
                            include: "#rule-list"
                        }
                    ]
                },
                {
                    begin: "(?i)(?=@media(\\s|\\(|/\\*|$))",
                    end: "(?<=})(?!\\G)",
                    patterns: [
                        {
                            begin: "(?i)\\G(@)media",
                            beginCaptures: {
                                0: {
                                    name: "keyword.control.at-rule.media.css"
                                },
                                1: {
                                    name: "punctuation.definition.keyword.css"
                                }
                            },
                            end: "(?=\\s*[{;])",
                            name: "meta.at-rule.media.header.css",
                            patterns: [
                                {
                                    include: "#media-query-list"
                                }
                            ]
                        },
                        {
                            begin: "{",
                            beginCaptures: {
                                0: {
                                    name: "punctuation.section.media.begin.bracket.curly.css"
                                }
                            },
                            end: "}",
                            endCaptures: {
                                0: {
                                    name: "punctuation.section.media.end.bracket.curly.css"
                                }
                            },
                            name: "meta.at-rule.media.body.css",
                            patterns: [
                                {
                                    include: "$self"
                                }
                            ]
                        }
                    ]
                },
                {
                    begin: `(?i)(?=@counter-style([\\s'"{;]|/\\*|$))`,
                    end: "(?<=})(?!\\G)",
                    patterns: [
                        {
                            begin: "(?i)\\G(@)counter-style",
                            beginCaptures: {
                                0: {
                                    name: "keyword.control.at-rule.counter-style.css"
                                },
                                1: {
                                    name: "punctuation.definition.keyword.css"
                                }
                            },
                            end: "(?=\\s*{)",
                            name: "meta.at-rule.counter-style.header.css",
                            patterns: [
                                {
                                    include: "#comment-block"
                                },
                                {
                                    include: "#escapes"
                                },
                                {
                                    captures: {
                                        0: {
                                            patterns: [
                                                {
                                                    include: "#escapes"
                                                }
                                            ]
                                        }
                                    },
                                    match: `(?x)
(?:[-a-zA-Z_]    | [^\\x00-\\x7F])
(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]
|\\\\(?:[0-9a-fA-F]{1,6}|.)
)*`,
                                    name: "variable.parameter.style-name.css"
                                }
                            ]
                        },
                        {
                            begin: "{",
                            beginCaptures: {
                                0: {
                                    name: "punctuation.section.property-list.begin.bracket.curly.css"
                                }
                            },
                            end: "}",
                            endCaptures: {
                                0: {
                                    name: "punctuation.section.property-list.end.bracket.curly.css"
                                }
                            },
                            name: "meta.at-rule.counter-style.body.css",
                            patterns: [
                                {
                                    include: "#comment-block"
                                },
                                {
                                    include: "#escapes"
                                },
                                {
                                    include: "#rule-list-innards"
                                }
                            ]
                        }
                    ]
                },
                {
                    begin: `(?i)(?=@document([\\s'"{;]|/\\*|$))`,
                    end: "(?<=})(?!\\G)",
                    patterns: [
                        {
                            begin: "(?i)\\G(@)document",
                            beginCaptures: {
                                0: {
                                    name: "keyword.control.at-rule.document.css"
                                },
                                1: {
                                    name: "punctuation.definition.keyword.css"
                                }
                            },
                            end: "(?=\\s*[{;])",
                            name: "meta.at-rule.document.header.css",
                            patterns: [
                                {
                                    begin: "(?i)(?<![\\w-])(url-prefix|domain|regexp)(\\()",
                                    beginCaptures: {
                                        1: {
                                            name: "support.function.document-rule.css"
                                        },
                                        2: {
                                            name: "punctuation.section.function.begin.bracket.round.css"
                                        }
                                    },
                                    end: "\\)",
                                    endCaptures: {
                                        0: {
                                            name: "punctuation.section.function.end.bracket.round.css"
                                        }
                                    },
                                    name: "meta.function.document-rule.css",
                                    patterns: [
                                        {
                                            include: "#string"
                                        },
                                        {
                                            include: "#comment-block"
                                        },
                                        {
                                            include: "#escapes"
                                        },
                                        {
                                            match: `[^'")\\s]+`,
                                            name: "variable.parameter.document-rule.css"
                                        }
                                    ]
                                },
                                {
                                    include: "#url"
                                },
                                {
                                    include: "#commas"
                                },
                                {
                                    include: "#comment-block"
                                },
                                {
                                    include: "#escapes"
                                }
                            ]
                        },
                        {
                            begin: "{",
                            beginCaptures: {
                                0: {
                                    name: "punctuation.section.document.begin.bracket.curly.css"
                                }
                            },
                            end: "}",
                            endCaptures: {
                                0: {
                                    name: "punctuation.section.document.end.bracket.curly.css"
                                }
                            },
                            name: "meta.at-rule.document.body.css",
                            patterns: [
                                {
                                    include: "$self"
                                }
                            ]
                        }
                    ]
                },
                {
                    begin: `(?i)(?=@(?:-(?:webkit|moz|o|ms)-)?keyframes([\\s'"{;]|/\\*|$))`,
                    end: "(?<=})(?!\\G)",
                    patterns: [
                        {
                            begin: "(?i)\\G(@)(?:-(?:webkit|moz|o|ms)-)?keyframes",
                            beginCaptures: {
                                0: {
                                    name: "keyword.control.at-rule.keyframes.css"
                                },
                                1: {
                                    name: "punctuation.definition.keyword.css"
                                }
                            },
                            end: "(?=\\s*{)",
                            name: "meta.at-rule.keyframes.header.css",
                            patterns: [
                                {
                                    include: "#comment-block"
                                },
                                {
                                    include: "#escapes"
                                },
                                {
                                    captures: {
                                        0: {
                                            patterns: [
                                                {
                                                    include: "#escapes"
                                                }
                                            ]
                                        }
                                    },
                                    match: `(?x)
(?:[-a-zA-Z_]    | [^\\x00-\\x7F])
(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]
|\\\\(?:[0-9a-fA-F]{1,6}|.)
)*`,
                                    name: "variable.parameter.keyframe-list.css"
                                }
                            ]
                        },
                        {
                            begin: "{",
                            beginCaptures: {
                                0: {
                                    name: "punctuation.section.keyframes.begin.bracket.curly.css"
                                }
                            },
                            end: "}",
                            endCaptures: {
                                0: {
                                    name: "punctuation.section.keyframes.end.bracket.curly.css"
                                }
                            },
                            name: "meta.at-rule.keyframes.body.css",
                            patterns: [
                                {
                                    include: "#comment-block"
                                },
                                {
                                    include: "#escapes"
                                },
                                {
                                    captures: {
                                        1: {
                                            name: "entity.other.keyframe-offset.css"
                                        },
                                        2: {
                                            name: "entity.other.keyframe-offset.percentage.css"
                                        }
                                    },
                                    match: `(?xi)
(?<![\\w-]) (from|to) (?![\\w-])
|
([-+]?(?:\\d+(?:\\.\\d+)?|\\.\\d+)%)`
                                },
                                {
                                    include: "#rule-list"
                                }
                            ]
                        }
                    ]
                },
                {
                    begin: "(?i)(?=@supports(\\s|\\(|/\\*|$))",
                    end: "(?<=})(?!\\G)|(?=;)",
                    patterns: [
                        {
                            begin: "(?i)\\G(@)supports",
                            beginCaptures: {
                                0: {
                                    name: "keyword.control.at-rule.supports.css"
                                },
                                1: {
                                    name: "punctuation.definition.keyword.css"
                                }
                            },
                            end: "(?=\\s*[{;])",
                            name: "meta.at-rule.supports.header.css",
                            patterns: [
                                {
                                    include: "#feature-query-operators"
                                },
                                {
                                    include: "#feature-query"
                                },
                                {
                                    include: "#comment-block"
                                },
                                {
                                    include: "#escapes"
                                }
                            ]
                        },
                        {
                            begin: "{",
                            beginCaptures: {
                                0: {
                                    name: "punctuation.section.supports.begin.bracket.curly.css"
                                }
                            },
                            end: "}",
                            endCaptures: {
                                0: {
                                    name: "punctuation.section.supports.end.bracket.curly.css"
                                }
                            },
                            name: "meta.at-rule.supports.body.css",
                            patterns: [
                                {
                                    include: "$self"
                                }
                            ]
                        }
                    ]
                },
                {
                    begin: `(?i)((@)(-(ms|o)-)?viewport)(?=[\\s'"{;]|/\\*|$)`,
                    beginCaptures: {
                        1: {
                            name: "keyword.control.at-rule.viewport.css"
                        },
                        2: {
                            name: "punctuation.definition.keyword.css"
                        }
                    },
                    end: "(?=\\s*[@{;])",
                    name: "meta.at-rule.viewport.css",
                    patterns: [
                        {
                            include: "#comment-block"
                        },
                        {
                            include: "#escapes"
                        }
                    ]
                },
                {
                    begin: `(?i)((@)font-feature-values)(?=[\\s'"{;]|/\\*|$)\\s*`,
                    beginCaptures: {
                        1: {
                            name: "keyword.control.at-rule.font-feature-values.css"
                        },
                        2: {
                            name: "punctuation.definition.keyword.css"
                        }
                    },
                    contentName: "variable.parameter.font-name.css",
                    end: "(?=\\s*[@{;])",
                    name: "meta.at-rule.font-features.css",
                    patterns: [
                        {
                            include: "#comment-block"
                        },
                        {
                            include: "#escapes"
                        }
                    ]
                },
                {
                    include: "#font-features"
                },
                {
                    begin: `(?i)((@)namespace)(?=[\\s'";]|/\\*|$)`,
                    beginCaptures: {
                        1: {
                            name: "keyword.control.at-rule.namespace.css"
                        },
                        2: {
                            name: "punctuation.definition.keyword.css"
                        }
                    },
                    end: ";|(?=[@{])",
                    endCaptures: {
                        0: {
                            name: "punctuation.terminator.rule.css"
                        }
                    },
                    name: "meta.at-rule.namespace.css",
                    patterns: [
                        {
                            include: "#url"
                        },
                        {
                            captures: {
                                1: {
                                    patterns: [
                                        {
                                            include: "#comment-block"
                                        }
                                    ]
                                },
                                2: {
                                    name: "entity.name.function.namespace-prefix.css",
                                    patterns: [
                                        {
                                            include: "#escapes"
                                        }
                                    ]
                                }
                            },
                            match: `(?xi)
(?:\\G|^|(?<=\\s))
(?=
(?<=\\s|^)
(?:[-a-zA-Z_]|[^\\x00-\\x7F])
|
\\s*
/\\*(?:[^*]|\\*[^/])*\\*/
)
(.*?)
(
(?:[-a-zA-Z_]    | [^\\x00-\\x7F])
(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]
|\\\\(?:[0-9a-fA-F]{1,6}|.)
)*
)`
                        },
                        {
                            include: "#comment-block"
                        },
                        {
                            include: "#escapes"
                        },
                        {
                            include: "#string"
                        }
                    ]
                },
                {
                    begin: "(?i)(?=@[\\w-]+[^;]+;s*$)",
                    end: "(?<=;)(?!\\G)",
                    patterns: [
                        {
                            begin: "(?i)\\G(@)[\\w-]+",
                            beginCaptures: {
                                0: {
                                    name: "keyword.control.at-rule.css"
                                },
                                1: {
                                    name: "punctuation.definition.keyword.css"
                                }
                            },
                            end: ";",
                            endCaptures: {
                                0: {
                                    name: "punctuation.terminator.rule.css"
                                }
                            },
                            name: "meta.at-rule.header.css"
                        }
                    ]
                },
                {
                    begin: "(?i)(?=@[\\w-]+(\\s|\\(|{|/\\*|$))",
                    end: "(?<=})(?!\\G)",
                    patterns: [
                        {
                            begin: "(?i)\\G(@)[\\w-]+",
                            beginCaptures: {
                                0: {
                                    name: "keyword.control.at-rule.css"
                                },
                                1: {
                                    name: "punctuation.definition.keyword.css"
                                }
                            },
                            end: "(?=\\s*[{;])",
                            name: "meta.at-rule.header.css"
                        },
                        {
                            begin: "{",
                            beginCaptures: {
                                0: {
                                    name: "punctuation.section.begin.bracket.curly.css"
                                }
                            },
                            end: "}",
                            endCaptures: {
                                0: {
                                    name: "punctuation.section.end.bracket.curly.css"
                                }
                            },
                            name: "meta.at-rule.body.css",
                            patterns: [
                                {
                                    include: "$self"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "color-keywords": {
            patterns: [
                {
                    match: "(?i)(?<![\\w-])(aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow)(?![\\w-])",
                    name: "support.constant.color.w3c-standard-color-name.css"
                },
                {
                    match: `(?xi) (?<![\\w-])
(aliceblue|antiquewhite|aquamarine|azure|beige|bisque|blanchedalmond|blueviolet|brown|burlywood
|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan
|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange
|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise
|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen
|gainsboro|ghostwhite|gold|goldenrod|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki
|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow
|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray
|lightslategrey|lightsteelblue|lightyellow|limegreen|linen|magenta|mediumaquamarine|mediumblue
|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise
|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olivedrab|orangered
|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum
|powderblue|rebeccapurple|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell
|sienna|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|thistle|tomato
|transparent|turquoise|violet|wheat|whitesmoke|yellowgreen)
(?![\\w-])`,
                    name: "support.constant.color.w3c-extended-color-name.css"
                },
                {
                    match: "(?i)(?<![\\w-])currentColor(?![\\w-])",
                    name: "support.constant.color.current.css"
                },
                {
                    match: `(?xi) (?<![\\w-])
(ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonFace|ButtonHighlight|ButtonShadow
|ButtonText|CaptionText|GrayText|Highlight|HighlightText|InactiveBorder|InactiveCaption
|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow
|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText)
(?![\\w-])`,
                    name: "invalid.deprecated.color.system.css"
                }
            ]
        },
        combinators: {
            patterns: [
                {
                    match: "/deep/|>>>",
                    name: "invalid.deprecated.combinator.css"
                },
                {
                    match: ">>|>|\\+|~",
                    name: "keyword.operator.combinator.css"
                }
            ]
        },
        commas: {
            match: ",",
            name: "punctuation.separator.list.comma.css"
        },
        "comment-block": {
            begin: "/\\*",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.comment.begin.css"
                }
            },
            end: "\\*/",
            endCaptures: {
                0: {
                    name: "punctuation.definition.comment.end.css"
                }
            },
            name: "comment.block.css"
        },
        escapes: {
            patterns: [
                {
                    match: "\\\\[0-9a-fA-F]{1,6}",
                    name: "constant.character.escape.codepoint.css"
                },
                {
                    begin: "\\\\$\\s*",
                    end: "^(?<!\\G)",
                    name: "constant.character.escape.newline.css"
                },
                {
                    match: "\\\\.",
                    name: "constant.character.escape.css"
                }
            ]
        },
        "feature-query": {
            begin: "\\(",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.condition.begin.bracket.round.css"
                }
            },
            end: "\\)",
            endCaptures: {
                0: {
                    name: "punctuation.definition.condition.end.bracket.round.css"
                }
            },
            name: "meta.feature-query.css",
            patterns: [
                {
                    include: "#feature-query-operators"
                },
                {
                    include: "#feature-query"
                }
            ]
        },
        "feature-query-operators": {
            patterns: [
                {
                    match: "(?i)(?<=[\\s()]|^|\\*/)(and|not|or)(?=[\\s()]|/\\*|$)",
                    name: "keyword.operator.logical.feature.$1.css"
                },
                {
                    include: "#rule-list-innards"
                }
            ]
        },
        "font-features": {
            begin: `(?xi)
((@)(annotation|character-variant|ornaments|styleset|stylistic|swash))
(?=[\\s@'"{;]|/\\*|$)`,
            beginCaptures: {
                1: {
                    name: "keyword.control.at-rule.${3:/downcase}.css"
                },
                2: {
                    name: "punctuation.definition.keyword.css"
                }
            },
            end: "(?<=})",
            name: "meta.at-rule.${3:/downcase}.css",
            patterns: [
                {
                    begin: "{",
                    beginCaptures: {
                        0: {
                            name: "punctuation.section.property-list.begin.bracket.curly.css"
                        }
                    },
                    end: "}",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.property-list.end.bracket.curly.css"
                        }
                    },
                    name: "meta.property-list.font-feature.css",
                    patterns: [
                        {
                            captures: {
                                0: {
                                    patterns: [
                                        {
                                            include: "#escapes"
                                        }
                                    ]
                                }
                            },
                            match: `(?x)
(?: [-a-zA-Z_]    | [^\\x00-\\x7F] )
(?: [-a-zA-Z0-9_] | [^\\x00-\\x7F]
| \\\\(?:[0-9a-fA-F]{1,6}|.)
)*`,
                            name: "variable.font-feature.css"
                        },
                        {
                            include: "#rule-list-innards"
                        }
                    ]
                }
            ]
        },
        "functional-pseudo-classes": {
            patterns: [
                {
                    begin: "(?i)((:)dir)(\\()",
                    beginCaptures: {
                        1: {
                            name: "entity.other.attribute-name.pseudo-class.css"
                        },
                        2: {
                            name: "punctuation.definition.entity.css"
                        },
                        3: {
                            name: "punctuation.section.function.begin.bracket.round.css"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.function.end.bracket.round.css"
                        }
                    },
                    patterns: [
                        {
                            include: "#comment-block"
                        },
                        {
                            include: "#escapes"
                        },
                        {
                            match: "(?i)(?<![\\w-])(ltr|rtl)(?![\\w-])",
                            name: "support.constant.text-direction.css"
                        },
                        {
                            include: "#property-values"
                        }
                    ]
                },
                {
                    begin: "(?i)((:)lang)(\\()",
                    beginCaptures: {
                        1: {
                            name: "entity.other.attribute-name.pseudo-class.css"
                        },
                        2: {
                            name: "punctuation.definition.entity.css"
                        },
                        3: {
                            name: "punctuation.section.function.begin.bracket.round.css"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.function.end.bracket.round.css"
                        }
                    },
                    patterns: [
                        {
                            match: "(?<=[(,\\s])[a-zA-Z]+(-[a-zA-Z0-9]*|\\\\(?:[0-9a-fA-F]{1,6}|.))*(?=[),\\s])",
                            name: "support.constant.language-range.css"
                        },
                        {
                            begin: '"',
                            beginCaptures: {
                                0: {
                                    name: "punctuation.definition.string.begin.css"
                                }
                            },
                            end: '"',
                            endCaptures: {
                                0: {
                                    name: "punctuation.definition.string.end.css"
                                }
                            },
                            name: "string.quoted.double.css",
                            patterns: [
                                {
                                    include: "#escapes"
                                },
                                {
                                    match: '(?<=["\\s])[a-zA-Z*]+(-[a-zA-Z0-9*]*)*(?=["\\s])',
                                    name: "support.constant.language-range.css"
                                }
                            ]
                        },
                        {
                            begin: "'",
                            beginCaptures: {
                                0: {
                                    name: "punctuation.definition.string.begin.css"
                                }
                            },
                            end: "'",
                            endCaptures: {
                                0: {
                                    name: "punctuation.definition.string.end.css"
                                }
                            },
                            name: "string.quoted.single.css",
                            patterns: [
                                {
                                    include: "#escapes"
                                },
                                {
                                    match: "(?<=['\\s])[a-zA-Z*]+(-[a-zA-Z0-9*]*)*(?=['\\s])",
                                    name: "support.constant.language-range.css"
                                }
                            ]
                        },
                        {
                            include: "#commas"
                        }
                    ]
                },
                {
                    begin: "(?i)((:)(?:not|has|matches|where|is))(\\()",
                    beginCaptures: {
                        1: {
                            name: "entity.other.attribute-name.pseudo-class.css"
                        },
                        2: {
                            name: "punctuation.definition.entity.css"
                        },
                        3: {
                            name: "punctuation.section.function.begin.bracket.round.css"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.function.end.bracket.round.css"
                        }
                    },
                    patterns: [
                        {
                            include: "#selector-innards"
                        }
                    ]
                },
                {
                    begin: "(?i)((:)nth-(?:last-)?(?:child|of-type))(\\()",
                    beginCaptures: {
                        1: {
                            name: "entity.other.attribute-name.pseudo-class.css"
                        },
                        2: {
                            name: "punctuation.definition.entity.css"
                        },
                        3: {
                            name: "punctuation.section.function.begin.bracket.round.css"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.function.end.bracket.round.css"
                        }
                    },
                    patterns: [
                        {
                            match: "(?i)[+-]?(\\d+n?|n)(\\s*[+-]\\s*\\d+)?",
                            name: "constant.numeric.css"
                        },
                        {
                            match: "(?i)even|odd",
                            name: "support.constant.parity.css"
                        }
                    ]
                }
            ]
        },
        functions: {
            patterns: [
                {
                    begin: "(?i)(?<![\\w-])(calc)(\\()",
                    beginCaptures: {
                        1: {
                            name: "support.function.calc.css"
                        },
                        2: {
                            name: "punctuation.section.function.begin.bracket.round.css"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.function.end.bracket.round.css"
                        }
                    },
                    name: "meta.function.calc.css",
                    patterns: [
                        {
                            match: "[*/]|(?<=\\s|^)[-+](?=\\s|$)",
                            name: "keyword.operator.arithmetic.css"
                        },
                        {
                            include: "#property-values"
                        }
                    ]
                },
                {
                    begin: "(?i)(?<![\\w-])(rgba?|rgb|hsla?|hsl|hwb|lab|oklab|lch|oklch|color)(\\()",
                    beginCaptures: {
                        1: {
                            name: "support.function.misc.css"
                        },
                        2: {
                            name: "punctuation.section.function.begin.bracket.round.css"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.function.end.bracket.round.css"
                        }
                    },
                    name: "meta.function.color.css",
                    patterns: [
                        {
                            include: "#property-values"
                        }
                    ]
                },
                {
                    begin: `(?xi) (?<![\\w-])
(
(?:-webkit-|-moz-|-o-)?
(?:repeating-)?
(?:linear|radial|conic)
-gradient
)
(\\()`,
                    beginCaptures: {
                        1: {
                            name: "support.function.gradient.css"
                        },
                        2: {
                            name: "punctuation.section.function.begin.bracket.round.css"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.function.end.bracket.round.css"
                        }
                    },
                    name: "meta.function.gradient.css",
                    patterns: [
                        {
                            match: "(?i)(?<![\\w-])(from|to|at|in|hue)(?![\\w-])",
                            name: "keyword.operator.gradient.css"
                        },
                        {
                            include: "#property-values"
                        }
                    ]
                },
                {
                    begin: "(?i)(?<![\\w-])(-webkit-gradient)(\\()",
                    beginCaptures: {
                        1: {
                            name: "invalid.deprecated.gradient.function.css"
                        },
                        2: {
                            name: "punctuation.section.function.begin.bracket.round.css"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.function.end.bracket.round.css"
                        }
                    },
                    name: "meta.function.gradient.invalid.deprecated.gradient.css",
                    patterns: [
                        {
                            begin: "(?i)(?<![\\w-])(from|to|color-stop)(\\()",
                            beginCaptures: {
                                1: {
                                    name: "invalid.deprecated.function.css"
                                },
                                2: {
                                    name: "punctuation.section.function.begin.bracket.round.css"
                                }
                            },
                            end: "\\)",
                            endCaptures: {
                                0: {
                                    name: "punctuation.section.function.end.bracket.round.css"
                                }
                            },
                            patterns: [
                                {
                                    include: "#property-values"
                                }
                            ]
                        },
                        {
                            include: "#property-values"
                        }
                    ]
                },
                {
                    begin: `(?xi) (?<![\\w-])
(annotation|attr|blur|brightness|character-variant|clamp|contrast|counters?
|cross-fade|drop-shadow|element|fit-content|format|grayscale|hue-rotate|color-mix
|image-set|invert|local|max|min|minmax|opacity|ornaments|repeat|saturate|sepia
|styleset|stylistic|swash|symbols
|cos|sin|tan|acos|asin|atan|atan2|hypot|sqrt|pow|log|exp|abs|sign)
(\\()`,
                    beginCaptures: {
                        1: {
                            name: "support.function.misc.css"
                        },
                        2: {
                            name: "punctuation.section.function.begin.bracket.round.css"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.function.end.bracket.round.css"
                        }
                    },
                    name: "meta.function.misc.css",
                    patterns: [
                        {
                            match: `(?i)(?<=[,\\s"]|\\*/|^)\\d+x(?=[\\s,"')]|/\\*|$)`,
                            name: "constant.numeric.other.density.css"
                        },
                        {
                            include: "#property-values"
                        },
                        {
                            match: `[^'"),\\s]+`,
                            name: "variable.parameter.misc.css"
                        }
                    ]
                },
                {
                    begin: "(?i)(?<![\\w-])(circle|ellipse|inset|polygon|rect)(\\()",
                    beginCaptures: {
                        1: {
                            name: "support.function.shape.css"
                        },
                        2: {
                            name: "punctuation.section.function.begin.bracket.round.css"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.function.end.bracket.round.css"
                        }
                    },
                    name: "meta.function.shape.css",
                    patterns: [
                        {
                            match: "(?i)(?<=\\s|^|\\*/)(at|round)(?=\\s|/\\*|$)",
                            name: "keyword.operator.shape.css"
                        },
                        {
                            include: "#property-values"
                        }
                    ]
                },
                {
                    begin: "(?i)(?<![\\w-])(cubic-bezier|steps)(\\()",
                    beginCaptures: {
                        1: {
                            name: "support.function.timing-function.css"
                        },
                        2: {
                            name: "punctuation.section.function.begin.bracket.round.css"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.function.end.bracket.round.css"
                        }
                    },
                    name: "meta.function.timing-function.css",
                    patterns: [
                        {
                            match: "(?i)(?<![\\w-])(start|end)(?=\\s*\\)|$)",
                            name: "support.constant.step-direction.css"
                        },
                        {
                            include: "#property-values"
                        }
                    ]
                },
                {
                    begin: `(?xi) (?<![\\w-])
( (?:translate|scale|rotate)(?:[XYZ]|3D)?
| matrix(?:3D)?
| skew[XY]?
| perspective
)
(\\()`,
                    beginCaptures: {
                        1: {
                            name: "support.function.transform.css"
                        },
                        2: {
                            name: "punctuation.section.function.begin.bracket.round.css"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.function.end.bracket.round.css"
                        }
                    },
                    patterns: [
                        {
                            include: "#property-values"
                        }
                    ]
                },
                {
                    include: "#url"
                },
                {
                    begin: "(?i)(?<![\\w-])(var)(\\()",
                    beginCaptures: {
                        1: {
                            name: "support.function.misc.css"
                        },
                        2: {
                            name: "punctuation.section.function.begin.bracket.round.css"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.function.end.bracket.round.css"
                        }
                    },
                    name: "meta.function.variable.css",
                    patterns: [
                        {
                            match: `(?x)
--
(?:[-a-zA-Z_]    | [^\\x00-\\x7F])
(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]
|\\\\(?:[0-9a-fA-F]{1,6}|.)
)*`,
                            name: "variable.argument.css"
                        },
                        {
                            include: "#property-values"
                        }
                    ]
                }
            ]
        },
        "media-feature-keywords": {
            match: `(?xi)
(?<=^|\\s|:|\\*/)
(?: portrait
| landscape
| progressive
| interlace
| fullscreen
| standalone
| minimal-ui
| browser
| hover
)
(?=\\s|\\)|$)`,
            name: "support.constant.property-value.css"
        },
        "media-features": {
            captures: {
                1: {
                    name: "support.type.property-name.media.css"
                },
                2: {
                    name: "support.type.property-name.media.css"
                },
                3: {
                    name: "support.type.vendored.property-name.media.css"
                }
            },
            match: `(?xi)
(?<=^|\\s|\\(|\\*/)
(?:

(
(?:min-|max-)?
(?: height
| width
| aspect-ratio
| color
| color-index
| monochrome
| resolution
)
| grid
| scan
| orientation
| display-mode
| hover
)
|

(
(?:min-|max-)?
device-
(?: height
| width
| aspect-ratio
)
)
|

(
(?:

[-_]
(?: webkit
| apple|khtml
| epub
| moz
| ms
| o
| xv|ah|rim|atsc|
hp|tc|wap|ro
)
|

(?: mso
| prince
)
)
-
[\\w-]+
(?=
\\s*
(?:
/\\*
(?:[^*]|\\*[^/])*
\\*/
)?
\\s*
[:)]
)
)
)
(?=\\s|$|[><:=]|\\)|/\\*)`
        },
        "media-query": {
            begin: "\\G",
            end: "(?=\\s*[{;])",
            patterns: [
                {
                    include: "#comment-block"
                },
                {
                    include: "#escapes"
                },
                {
                    include: "#media-types"
                },
                {
                    match: "(?i)(?<=\\s|^|,|\\*/)(only|not)(?=\\s|{|/\\*|$)",
                    name: "keyword.operator.logical.$1.media.css"
                },
                {
                    match: "(?i)(?<=\\s|^|\\*/|\\))and(?=\\s|/\\*|$)",
                    name: "keyword.operator.logical.and.media.css"
                },
                {
                    match: ",(?:(?:\\s*,)+|(?=\\s*[;){]))",
                    name: "invalid.illegal.comma.css"
                },
                {
                    include: "#commas"
                },
                {
                    begin: "\\(",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.parameters.begin.bracket.round.css"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.parameters.end.bracket.round.css"
                        }
                    },
                    patterns: [
                        {
                            include: "#media-features"
                        },
                        {
                            include: "#media-feature-keywords"
                        },
                        {
                            match: ":",
                            name: "punctuation.separator.key-value.css"
                        },
                        {
                            match: ">=|<=|=|<|>",
                            name: "keyword.operator.comparison.css"
                        },
                        {
                            captures: {
                                1: {
                                    name: "constant.numeric.css"
                                },
                                2: {
                                    name: "keyword.operator.arithmetic.css"
                                },
                                3: {
                                    name: "constant.numeric.css"
                                }
                            },
                            match: "(\\d+)\\s*(/)\\s*(\\d+)",
                            name: "meta.ratio.css"
                        },
                        {
                            include: "#numeric-values"
                        },
                        {
                            include: "#comment-block"
                        }
                    ]
                }
            ]
        },
        "media-query-list": {
            begin: "(?=\\s*[^{;])",
            end: "(?=\\s*[{;])",
            patterns: [
                {
                    include: "#media-query"
                }
            ]
        },
        "media-types": {
            captures: {
                1: {
                    name: "support.constant.media.css"
                },
                2: {
                    name: "invalid.deprecated.constant.media.css"
                }
            },
            match: `(?xi)
(?<=^|\\s|,|\\*/)
(?:

(all|print|screen|speech)
|

(aural|braille|embossed|handheld|projection|tty|tv)
)
(?=$|[{,\\s;]|/\\*)`
        },
        "numeric-values": {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.constant.css"
                        }
                    },
                    match: "(#)(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\\b",
                    name: "constant.other.color.rgb-value.hex.css"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.other.unit.percentage.css"
                        },
                        2: {
                            name: "keyword.other.unit.${2:/downcase}.css"
                        }
                    },
                    match: `(?xi) (?<![\\w-])
[-+]?

(?:
[0-9]+ (?:\\.[0-9]+)?
| \\.[0-9]+
)

(?:
(?<=[0-9])
E
[-+]?
[0-9]+
)?

(?:
(%)
| ( deg|grad|rad|turn
| Hz|kHz
| ch|cm|em|ex|fr|in|mm|mozmm|
pc|pt|px|q|rem|rch|rex|rlh|
ic|ric|rcap|vh|vw|vb|vi|svh|
svw|svb|svi|dvh|dvw|dvb|dvi|
lvh|lvw|lvb|lvi|vmax|vmin|
cqw|cqi|cqh|cqb|cqmin|cqmax
| dpi|dpcm|dppx
| s|ms
)
\\b
)?`,
                    name: "constant.numeric.css"
                }
            ]
        },
        "property-keywords": {
            patterns: [
                {
                    match: `(?xi) (?<![\\w-])
(above|absolute|active|add|additive|after-edge|alias|all|all-petite-caps|all-scroll|all-small-caps|alpha|alphabetic|alternate|alternate-reverse
|always|antialiased|auto|auto-fill|auto-fit|auto-pos|available|avoid|avoid-column|avoid-page|avoid-region|backwards|balance|baseline|before-edge|below|bevel
|bidi-override|blink|block|block-axis|block-start|block-end|bold|bolder|border|border-box|both|bottom|bottom-outside|break-all|break-word|bullets
|butt|capitalize|caption|cell|center|central|char|circle|clip|clone|close-quote|closest-corner|closest-side|col-resize|collapse|color|color-burn
|color-dodge|column|column-reverse|common-ligatures|compact|condensed|contain|content|content-box|contents|context-menu|contextual|copy|cover
|crisp-edges|crispEdges|crosshair|cyclic|dark|darken|dashed|decimal|default|dense|diagonal-fractions|difference|digits|disabled|disc|discretionary-ligatures
|distribute|distribute-all-lines|distribute-letter|distribute-space|dot|dotted|double|double-circle|downleft|downright|e-resize|each-line|ease|ease-in
|ease-in-out|ease-out|economy|ellipse|ellipsis|embed|end|evenodd|ew-resize|exact|exclude|exclusion|expanded|extends|extra-condensed|extra-expanded
|fallback|farthest-corner|farthest-side|fill|fill-available|fill-box|filled|fit-content|fixed|flat|flex|flex-end|flex-start|flip|flow-root|forwards|freeze
|from-image|full-width|geometricPrecision|georgian|grab|grabbing|grayscale|grid|groove|hand|hanging|hard-light|help|hidden|hide
|historical-forms|historical-ligatures|horizontal|horizontal-tb|hue|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space
|ideographic|inactive|infinite|inherit|initial|inline|inline-axis|inline-block|inline-end|inline-flex|inline-grid|inline-list-item|inline-start
|inline-table|inset|inside|inter-character|inter-ideograph|inter-word|intersect|invert|isolate|isolate-override|italic|jis04|jis78|jis83
|jis90|justify|justify-all|kannada|keep-all|landscape|large|larger|left|light|lighten|lighter|line|line-edge|line-through|linear|linearRGB
|lining-nums|list-item|local|loose|lowercase|lr|lr-tb|ltr|luminance|luminosity|main-size|mandatory|manipulation|manual|margin-box|match-parent
|match-source|mathematical|max-content|medium|menu|message-box|middle|min-content|miter|mixed|move|multiply|n-resize|narrower|ne-resize
|nearest-neighbor|nesw-resize|newspaper|no-change|no-clip|no-close-quote|no-common-ligatures|no-contextual|no-discretionary-ligatures
|no-drop|no-historical-ligatures|no-open-quote|no-repeat|none|nonzero|normal|not-allowed|nowrap|ns-resize|numbers|numeric|nw-resize|nwse-resize
|oblique|oldstyle-nums|open|open-quote|optimizeLegibility|optimizeQuality|optimizeSpeed|optional|ordinal|outset|outside|over|overlay|overline|padding
|padding-box|page|painted|pan-down|pan-left|pan-right|pan-up|pan-x|pan-y|paused|petite-caps|pixelated|plaintext|pointer|portrait|pre|pre-line
|pre-wrap|preserve-3d|progress|progressive|proportional-nums|proportional-width|proximity|radial|recto|region|relative|remove|repeat|repeat-[xy]
|reset-size|reverse|revert|ridge|right|rl|rl-tb|round|row|row-resize|row-reverse|row-severse|rtl|ruby|ruby-base|ruby-base-container|ruby-text
|ruby-text-container|run-in|running|s-resize|saturation|scale-down|screen|scroll|scroll-position|se-resize|semi-condensed|semi-expanded|separate
|sesame|show|sideways|sideways-left|sideways-lr|sideways-right|sideways-rl|simplified|slashed-zero|slice|small|small-caps|small-caption|smaller
|smooth|soft-light|solid|space|space-around|space-between|space-evenly|spell-out|square|sRGB|stacked-fractions|start|static|status-bar|swap
|step-end|step-start|sticky|stretch|strict|stroke|stroke-box|style|sub|subgrid|subpixel-antialiased|subtract|super|sw-resize|symbolic|table
|table-caption|table-cell|table-column|table-column-group|table-footer-group|table-header-group|table-row|table-row-group|tabular-nums|tb|tb-rl
|text|text-after-edge|text-before-edge|text-bottom|text-top|thick|thin|titling-caps|top|top-outside|touch|traditional|transparent|triangle
|ultra-condensed|ultra-expanded|under|underline|unicase|unset|upleft|uppercase|upright|use-glyph-orientation|use-script|verso|vertical
|vertical-ideographic|vertical-lr|vertical-rl|vertical-text|view-box|visible|visibleFill|visiblePainted|visibleStroke|w-resize|wait|wavy
|weight|whitespace|wider|words|wrap|wrap-reverse|x|x-large|x-small|xx-large|xx-small|y|zero|zoom-in|zoom-out)
(?![\\w-])`,
                    name: "support.constant.property-value.css"
                },
                {
                    match: `(?xi) (?<![\\w-])
(arabic-indic|armenian|bengali|cambodian|circle|cjk-decimal|cjk-earthly-branch|cjk-heavenly-stem|cjk-ideographic
|decimal|decimal-leading-zero|devanagari|disc|disclosure-closed|disclosure-open|ethiopic-halehame-am
|ethiopic-halehame-ti-e[rt]|ethiopic-numeric|georgian|gujarati|gurmukhi|hangul|hangul-consonant|hebrew
|hiragana|hiragana-iroha|japanese-formal|japanese-informal|kannada|katakana|katakana-iroha|khmer
|korean-hangul-formal|korean-hanja-formal|korean-hanja-informal|lao|lower-alpha|lower-armenian|lower-greek
|lower-latin|lower-roman|malayalam|mongolian|myanmar|oriya|persian|simp-chinese-formal|simp-chinese-informal
|square|tamil|telugu|thai|tibetan|trad-chinese-formal|trad-chinese-informal|upper-alpha|upper-armenian
|upper-latin|upper-roman|urdu)
(?![\\w-])`,
                    name: "support.constant.property-value.list-style-type.css"
                },
                {
                    match: "(?<![\\w-])(?i:-(?:ah|apple|atsc|epub|hp|khtml|moz|ms|o|rim|ro|tc|wap|webkit|xv)|(?:mso|prince))-[a-zA-Z-]+",
                    name: "support.constant.vendored.property-value.css"
                },
                {
                    match: "(?<![\\w-])(?i:arial|century|comic|courier|garamond|georgia|helvetica|impact|lucida|symbol|system-ui|system|tahoma|times|trebuchet|ui-monospace|ui-rounded|ui-sans-serif|ui-serif|utopia|verdana|webdings|sans-serif|serif|monospace)(?![\\w-])",
                    name: "support.constant.font-name.css"
                }
            ]
        },
        "property-names": {
            patterns: [
                {
                    match: `(?xi) (?<![\\w-])
(?:

accent-color|additive-symbols|align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration
| animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backdrop-filter
| backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image
| background-origin|background-position|background-position-[xy]|background-repeat|background-size|bleed|block-size|border
| border-block-end|border-block-end-color|border-block-end-style|border-block-end-width|border-block-start|border-block-start-color
| border-block-start-style|border-block-start-width|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius
| border-bottom-style|border-bottom-width|border-collapse|border-color|border-end-end-radius|border-end-start-radius|border-image
| border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-inline-end
| border-inline-end-color|border-inline-end-style|border-inline-end-width|border-inline-start|border-inline-start-color
| border-inline-start-style|border-inline-start-width|border-left|border-left-color|border-left-style|border-left-width
| border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-start-end-radius
| border-start-start-radius|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style
| border-top-width|border-width|bottom|box-decoration-break|box-shadow|box-sizing|break-after|break-before|break-inside|caption-side
| caret-color|clear|clip|clip-path|clip-rule|color|color-adjust|color-interpolation-filters|color-scheme|column-count|column-fill|column-gap
| column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|contain|container|container-name|container-type|content|counter-increment
| counter-reset|cursor|direction|display|empty-cells|enable-background|fallback|fill|fill-opacity|fill-rule|filter|flex|flex-basis
| flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|flood-color|flood-opacity|font|font-display|font-family
| font-feature-settings|font-kerning|font-language-override|font-optical-sizing|font-size|font-size-adjust|font-stretch
| font-style|font-synthesis|font-variant|font-variant-alternates|font-variant-caps|font-variant-east-asian|font-variant-ligatures
| font-variant-numeric|font-variant-position|font-variation-settings|font-weight|gap|glyph-orientation-horizontal|glyph-orientation-vertical
| grid|grid-area|grid-auto-columns|grid-auto-flow|grid-auto-rows|grid-column|grid-column-end|grid-column-gap|grid-column-start
| grid-gap|grid-row|grid-row-end|grid-row-gap|grid-row-start|grid-template|grid-template-areas|grid-template-columns|grid-template-rows
| hanging-punctuation|height|hyphens|image-orientation|image-rendering|image-resolution|ime-mode|initial-letter|initial-letter-align
| inline-size|inset|inset-block|inset-block-end|inset-block-start|inset-inline|inset-inline-end|inset-inline-start|isolation
| justify-content|justify-items|justify-self|kerning|left|letter-spacing|lighting-color|line-break|line-clamp|line-height|list-style
| list-style-image|list-style-position|list-style-type|margin|margin-block|margin-block-end|margin-block-start|margin-bottom|margin-inline|margin-inline-end|margin-inline-start
| margin-left|margin-right|margin-top|marker-end|marker-mid|marker-start|marks|mask|mask-border|mask-border-mode|mask-border-outset
| mask-border-repeat|mask-border-slice|mask-border-source|mask-border-width|mask-clip|mask-composite|mask-image|mask-mode
| mask-origin|mask-position|mask-repeat|mask-size|mask-type|max-block-size|max-height|max-inline-size|max-lines|max-width
| max-zoom|min-block-size|min-height|min-inline-size|min-width|min-zoom|mix-blend-mode|negative|object-fit|object-position
| offset|offset-anchor|offset-distance|offset-path|offset-position|offset-rotation|opacity|order|orientation|orphans
| outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-anchor|overflow-block|overflow-inline
| overflow-wrap|overflow-[xy]|overscroll-behavior|overscroll-behavior-block|overscroll-behavior-inline|overscroll-behavior-[xy]
| pad|padding|padding-block|padding-block-end|padding-block-start|padding-bottom|padding-inline|padding-inline-end|padding-inline-start|padding-left
| padding-right|padding-top|page-break-after|page-break-before|page-break-inside|paint-order|perspective|perspective-origin
| place-content|place-items|place-self|pointer-events|position|prefix|quotes|range|resize|right|rotate|row-gap|ruby-align
| ruby-merge|ruby-position|scale|scroll-behavior|scroll-margin|scroll-margin-block|scroll-margin-block-end|scroll-margin-block-start
| scroll-margin-bottom|scroll-margin-inline|scroll-margin-inline-end|scroll-margin-inline-start|scroll-margin-left|scroll-margin-right
| scroll-margin-top|scroll-padding|scroll-padding-block|scroll-padding-block-end|scroll-padding-block-start|scroll-padding-bottom
| scroll-padding-inline|scroll-padding-inline-end|scroll-padding-inline-start|scroll-padding-left|scroll-padding-right
| scroll-padding-top|scroll-snap-align|scroll-snap-coordinate|scroll-snap-destination|scroll-snap-stop|scroll-snap-type
| scrollbar-color|scrollbar-gutter|scrollbar-width|shape-image-threshold|shape-margin|shape-outside|shape-rendering|size
| speak-as|src|stop-color|stop-opacity|stroke|stroke-dasharray|stroke-dashoffset|stroke-linecap|stroke-linejoin|stroke-miterlimit
| stroke-opacity|stroke-width|suffix|symbols|system|tab-size|table-layout|text-align|text-align-last|text-anchor|text-combine-upright
| text-decoration|text-decoration-color|text-decoration-line|text-decoration-skip|text-decoration-skip-ink|text-decoration-style|text-decoration-thickness
| text-emphasis|text-emphasis-color|text-emphasis-position|text-emphasis-style|text-indent|text-justify|text-orientation
| text-overflow|text-rendering|text-shadow|text-size-adjust|text-transform|text-underline-offset|text-underline-position|top|touch-action|transform
| transform-box|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function
| translate|unicode-bidi|unicode-range|user-select|user-zoom|vertical-align|visibility|white-space|widows|width|will-change
| word-break|word-spacing|word-wrap|writing-mode|z-index|zoom


| alignment-baseline|baseline-shift|clip-rule|color-interpolation|color-interpolation-filters|color-profile
| color-rendering|cx|cy|dominant-baseline|enable-background|fill|fill-opacity|fill-rule|flood-color|flood-opacity
| glyph-orientation-horizontal|glyph-orientation-vertical|height|kerning|lighting-color|marker-end|marker-mid
| marker-start|r|rx|ry|shape-rendering|stop-color|stop-opacity|stroke|stroke-dasharray|stroke-dashoffset|stroke-linecap
| stroke-linejoin|stroke-miterlimit|stroke-opacity|stroke-width|text-anchor|width|x|y


| adjust|after|align|align-last|alignment|alignment-adjust|appearance|attachment|azimuth|background-break
| balance|baseline|before|bidi|binding|bookmark|bookmark-label|bookmark-level|bookmark-target|border-length
| bottom-color|bottom-left-radius|bottom-right-radius|bottom-style|bottom-width|box|box-align|box-direction
| box-flex|box-flex-group|box-lines|box-ordinal-group|box-orient|box-pack|break|character|collapse|column
| column-break-after|column-break-before|count|counter|crop|cue|cue-after|cue-before|decoration|decoration-break
| delay|display-model|display-role|down|drop|drop-initial-after-adjust|drop-initial-after-align|drop-initial-before-adjust
| drop-initial-before-align|drop-initial-size|drop-initial-value|duration|elevation|emphasis|family|fit|fit-position
| flex-group|float-offset|gap|grid-columns|grid-rows|hanging-punctuation|header|hyphenate|hyphenate-after|hyphenate-before
| hyphenate-character|hyphenate-lines|hyphenate-resource|icon|image|increment|indent|index|initial-after-adjust
| initial-after-align|initial-before-adjust|initial-before-align|initial-size|initial-value|inline-box-align|iteration-count
| justify|label|left-color|left-style|left-width|length|level|line|line-stacking|line-stacking-ruby|line-stacking-shift
| line-stacking-strategy|lines|list|mark|mark-after|mark-before|marks|marquee|marquee-direction|marquee-play-count|marquee-speed
| marquee-style|max|min|model|move-to|name|nav|nav-down|nav-index|nav-left|nav-right|nav-up|new|numeral|offset|ordinal-group
| orient|origin|overflow-style|overhang|pack|page|page-policy|pause|pause-after|pause-before|phonemes|pitch|pitch-range
| play-count|play-during|play-state|point|presentation|presentation-level|profile|property|punctuation|punctuation-trim
| radius|rate|rendering-intent|repeat|replace|reset|resolution|resource|respond-to|rest|rest-after|rest-before|richness
| right-color|right-style|right-width|role|rotation|rotation-point|rows|ruby|ruby-overhang|ruby-span|rule|rule-color
| rule-style|rule-width|shadow|size|size-adjust|sizing|space|space-collapse|spacing|span|speak|speak-header|speak-numeral
| speak-punctuation|speech|speech-rate|speed|stacking|stacking-ruby|stacking-shift|stacking-strategy|stress|stretch
| string-set|style|style-image|style-position|style-type|target|target-name|target-new|target-position|text|text-height
| text-justify|text-outline|text-replace|text-wrap|timing-function|top-color|top-left-radius|top-right-radius|top-style
| top-width|trim|unicode|up|user-select|variant|voice|voice-balance|voice-duration|voice-family|voice-pitch|voice-pitch-range
| voice-rate|voice-stress|voice-volume|volume|weight|white|white-space-collapse|word|wrap
)
(?![\\w-])`,
                    name: "support.type.property-name.css"
                },
                {
                    match: "(?<![\\w-])(?i:-(?:ah|apple|atsc|epub|hp|khtml|moz|ms|o|rim|ro|tc|wap|webkit|xv)|(?:mso|prince))-[a-zA-Z-]+",
                    name: "support.type.vendored.property-name.css"
                }
            ]
        },
        "property-values": {
            patterns: [
                {
                    include: "#commas"
                },
                {
                    include: "#comment-block"
                },
                {
                    include: "#escapes"
                },
                {
                    include: "#functions"
                },
                {
                    include: "#property-keywords"
                },
                {
                    include: "#unicode-range"
                },
                {
                    include: "#numeric-values"
                },
                {
                    include: "#color-keywords"
                },
                {
                    include: "#string"
                },
                {
                    match: "!\\s*important(?![\\w-])",
                    name: "keyword.other.important.css"
                }
            ]
        },
        "pseudo-classes": {
            captures: {
                1: {
                    name: "punctuation.definition.entity.css"
                },
                2: {
                    name: "invalid.illegal.colon.css"
                }
            },
            match: `(?xi)
(:)(:*)
(?: active|any-link|checked|default|disabled|empty|enabled|first
| (?:first|last|only)-(?:child|of-type)|focus|focus-visible|focus-within|fullscreen|host|hover
| in-range|indeterminate|invalid|left|link|optional|out-of-range
| read-only|read-write|required|right|root|scope|target|unresolved
| valid|visited
)(?![\\w-]|\\s*[;}])`,
            name: "entity.other.attribute-name.pseudo-class.css"
        },
        "pseudo-elements": {
            captures: {
                1: {
                    name: "punctuation.definition.entity.css"
                },
                2: {
                    name: "punctuation.definition.entity.css"
                }
            },
            match: `(?xi)
(?:
(::?)
(?: after
| before
| first-letter
| first-line
| (?:-(?:ah|apple|atsc|epub|hp|khtml|moz
|ms|o|rim|ro|tc|wap|webkit|xv)
| (?:mso|prince))
-[a-z-]+
)
|
(::)
(?: backdrop
| content
| grammar-error
| marker
| placeholder
| selection
| shadow
| spelling-error
)
)
(?![\\w-]|\\s*[;}])`,
            name: "entity.other.attribute-name.pseudo-element.css"
        },
        "rule-list": {
            begin: "{",
            beginCaptures: {
                0: {
                    name: "punctuation.section.property-list.begin.bracket.curly.css"
                }
            },
            end: "}",
            endCaptures: {
                0: {
                    name: "punctuation.section.property-list.end.bracket.curly.css"
                }
            },
            name: "meta.property-list.css",
            patterns: [
                {
                    include: "#rule-list-innards"
                }
            ]
        },
        "rule-list-innards": {
            patterns: [
                {
                    include: "#comment-block"
                },
                {
                    include: "#escapes"
                },
                {
                    include: "#font-features"
                },
                {
                    match: `(?x) (?<![\\w-])
--
(?:[-a-zA-Z_]    | [^\\x00-\\x7F])
(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]
|\\\\(?:[0-9a-fA-F]{1,6}|.)
)*`,
                    name: "variable.css"
                },
                {
                    begin: "(?<![-a-zA-Z])(?=[-a-zA-Z])",
                    end: "$|(?![-a-zA-Z])",
                    name: "meta.property-name.css",
                    patterns: [
                        {
                            include: "#property-names"
                        }
                    ]
                },
                {
                    begin: "(:)\\s*",
                    beginCaptures: {
                        1: {
                            name: "punctuation.separator.key-value.css"
                        }
                    },
                    contentName: "meta.property-value.css",
                    end: "\\s*(;)|\\s*(?=}|\\))",
                    endCaptures: {
                        1: {
                            name: "punctuation.terminator.rule.css"
                        }
                    },
                    patterns: [
                        {
                            include: "#comment-block"
                        },
                        {
                            include: "#property-values"
                        }
                    ]
                },
                {
                    match: ";",
                    name: "punctuation.terminator.rule.css"
                }
            ]
        },
        selector: {
            begin: `(?x)
(?=
(?:\\|)?
(?:
[-\\[:.*\\#a-zA-Z_]
|
[^\\x00-\\x7F]
|
\\\\
(?:[0-9a-fA-F]{1,6}|.)
)
)`,
            end: "(?=\\s*[/@{)])",
            name: "meta.selector.css",
            patterns: [
                {
                    include: "#selector-innards"
                }
            ]
        },
        "selector-innards": {
            patterns: [
                {
                    include: "#comment-block"
                },
                {
                    include: "#commas"
                },
                {
                    include: "#escapes"
                },
                {
                    include: "#combinators"
                },
                {
                    captures: {
                        1: {
                            name: "entity.other.namespace-prefix.css"
                        },
                        2: {
                            name: "punctuation.separator.css"
                        }
                    },
                    match: `(?x)
(?:^|(?<=[\\s,(};]))
(?!
[-\\w*]+
\\|
(?!
[-\\[:.*\\#a-zA-Z_]
| [^\\x00-\\x7F]
)
)
(
(?: [-a-zA-Z_]    | [^\\x00-\\x7F] )
(?: [-a-zA-Z0-9_] | [^\\x00-\\x7F]
| \\\\(?:[0-9a-fA-F]{1,6}|.)
)*
|
\\*
)?
(\\|)`
                },
                {
                    include: "#tag-names"
                },
                {
                    match: "\\*",
                    name: "entity.name.tag.wildcard.css"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.entity.css"
                        },
                        2: {
                            patterns: [
                                {
                                    include: "#escapes"
                                }
                            ]
                        }
                    },
                    match: `(?x) (?<![@\\w-])
([.\\#])
# Invalid identifier
(
(?:

-?[0-9]
|

-
(?= $
| [\\s,.\\#)\\[:{>+~|]
| /\\*
)
|

(?:
[-a-zA-Z_0-9]|[^\\x00-\\x7F]
| \\\\(?:[0-9a-fA-F]{1,6}|.)
)*
(?:
[!"'%&(*;<?@^\`|\\]}]
|
/ (?!\\*)
)+
)

(?: [-a-zA-Z_0-9]|[^\\x00-\\x7F]
| \\\\(?:[0-9a-fA-F]{1,6}|.)
)*
)`,
                    name: "invalid.illegal.bad-identifier.css"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.entity.css"
                        },
                        2: {
                            patterns: [
                                {
                                    include: "#escapes"
                                }
                            ]
                        }
                    },
                    match: `(?x)
(\\.)
(
(?: [-a-zA-Z_0-9]|[^\\x00-\\x7F]
| \\\\(?:[0-9a-fA-F]{1,6}|.)
)+
)
(?= $
| [\\s,.\\#)\\[:{>+~|]
| /\\*
)`,
                    name: "entity.other.attribute-name.class.css"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.entity.css"
                        },
                        2: {
                            patterns: [
                                {
                                    include: "#escapes"
                                }
                            ]
                        }
                    },
                    match: `(?x)
(\\#)
(
-?
(?![0-9])
(?:[-a-zA-Z0-9_]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+
)
(?=$|[\\s,.\\#)\\[:{>+~|]|/\\*)`,
                    name: "entity.other.attribute-name.id.css"
                },
                {
                    begin: "\\[",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.entity.begin.bracket.square.css"
                        }
                    },
                    end: "\\]",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.entity.end.bracket.square.css"
                        }
                    },
                    name: "meta.attribute-selector.css",
                    patterns: [
                        {
                            include: "#comment-block"
                        },
                        {
                            include: "#string"
                        },
                        {
                            captures: {
                                1: {
                                    name: "storage.modifier.ignore-case.css"
                                }
                            },
                            match: `(?<=["'\\s]|^|\\*/)\\s*([iI])\\s*(?=[\\s\\]]|/\\*|$)`
                        },
                        {
                            captures: {
                                1: {
                                    name: "string.unquoted.attribute-value.css",
                                    patterns: [
                                        {
                                            include: "#escapes"
                                        }
                                    ]
                                }
                            },
                            match: `(?x)(?<==)\\s*((?!/\\*)(?:[^\\\\"'\\s\\]]|\\\\.)+)`
                        },
                        {
                            include: "#escapes"
                        },
                        {
                            match: "[~|^$*]?=",
                            name: "keyword.operator.pattern.css"
                        },
                        {
                            match: "\\|",
                            name: "punctuation.separator.css"
                        },
                        {
                            captures: {
                                1: {
                                    name: "entity.other.namespace-prefix.css",
                                    patterns: [
                                        {
                                            include: "#escapes"
                                        }
                                    ]
                                }
                            },
                            match: `(?x)
# Qualified namespace prefix
( -?(?!\\d)(?:[\\w-]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+
| \\*
)
# Lookahead to ensure there's a valid identifier ahead
(?=
\\| (?!\\s|=|$|\\])
(?: -?(?!\\d)
|   [\\\\\\w-]
|   [^\\x00-\\x7F]
)
)`
                        },
                        {
                            captures: {
                                1: {
                                    name: "entity.other.attribute-name.css",
                                    patterns: [
                                        {
                                            include: "#escapes"
                                        }
                                    ]
                                }
                            },
                            match: `(?x)
(-?(?!\\d)(?>[\\w-]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+)
\\s*
(?=[~|^\\]$*=]|/\\*)`
                        }
                    ]
                },
                {
                    include: "#pseudo-classes"
                },
                {
                    include: "#pseudo-elements"
                },
                {
                    include: "#functional-pseudo-classes"
                },
                {
                    match: `(?x) (?<![@\\w-])
(?=
[a-z]
\\w* -
)
(?:
(?![A-Z])
[\\w-]
)+
(?![(\\w-])`,
                    name: "entity.name.tag.custom.css"
                }
            ]
        },
        string: {
            patterns: [
                {
                    begin: '"',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.css"
                        }
                    },
                    end: '"|(?<!\\\\)(?=$|\\n)',
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.css"
                        }
                    },
                    name: "string.quoted.double.css",
                    patterns: [
                        {
                            begin: '(?:\\G|^)(?=(?:[^\\\\"]|\\\\.)+$)',
                            end: "$",
                            name: "invalid.illegal.unclosed.string.css",
                            patterns: [
                                {
                                    include: "#escapes"
                                }
                            ]
                        },
                        {
                            include: "#escapes"
                        }
                    ]
                },
                {
                    begin: "'",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.css"
                        }
                    },
                    end: "'|(?<!\\\\)(?=$|\\n)",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.css"
                        }
                    },
                    name: "string.quoted.single.css",
                    patterns: [
                        {
                            begin: "(?:\\G|^)(?=(?:[^\\\\']|\\\\.)+$)",
                            end: "$",
                            name: "invalid.illegal.unclosed.string.css",
                            patterns: [
                                {
                                    include: "#escapes"
                                }
                            ]
                        },
                        {
                            include: "#escapes"
                        }
                    ]
                }
            ]
        },
        "tag-names": {
            match: `(?xi) (?<![\\w:-])
(?:

a|abbr|acronym|address|applet|area|article|aside|audio|b|base|basefont|bdi|bdo|bgsound
| big|blink|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|command
| content|data|datalist|dd|del|details|dfn|dialog|dir|div|dl|dt|element|em|embed|fieldset
| figcaption|figure|font|footer|form|frame|frameset|h[1-6]|head|header|hgroup|hr|html|i
| iframe|image|img|input|ins|isindex|kbd|keygen|label|legend|li|link|listing|main|map|mark
| marquee|math|menu|menuitem|meta|meter|multicol|nav|nextid|nobr|noembed|noframes|noscript
| object|ol|optgroup|option|output|p|param|picture|plaintext|pre|progress|q|rb|rp|rt|rtc
| ruby|s|samp|script|section|select|shadow|slot|small|source|spacer|span|strike|strong
| style|sub|summary|sup|table|tbody|td|template|textarea|tfoot|th|thead|time|title|tr
| track|tt|u|ul|var|video|wbr|xmp


| altGlyph|altGlyphDef|altGlyphItem|animate|animateColor|animateMotion|animateTransform
| circle|clipPath|color-profile|cursor|defs|desc|discard|ellipse|feBlend|feColorMatrix
| feComponentTransfer|feComposite|feConvolveMatrix|feDiffuseLighting|feDisplacementMap
| feDistantLight|feDropShadow|feFlood|feFuncA|feFuncB|feFuncG|feFuncR|feGaussianBlur
| feImage|feMerge|feMergeNode|feMorphology|feOffset|fePointLight|feSpecularLighting
| feSpotLight|feTile|feTurbulence|filter|font-face|font-face-format|font-face-name
| font-face-src|font-face-uri|foreignObject|g|glyph|glyphRef|hatch|hatchpath|hkern
| line|linearGradient|marker|mask|mesh|meshgradient|meshpatch|meshrow|metadata
| missing-glyph|mpath|path|pattern|polygon|polyline|radialGradient|rect|set|solidcolor
| stop|svg|switch|symbol|text|textPath|tref|tspan|use|view|vkern


| annotation|annotation-xml|maction|maligngroup|malignmark|math|menclose|merror|mfenced
| mfrac|mglyph|mi|mlabeledtr|mlongdiv|mmultiscripts|mn|mo|mover|mpadded|mphantom|mroot
| mrow|ms|mscarries|mscarry|msgroup|msline|mspace|msqrt|msrow|mstack|mstyle|msub|msubsup
| msup|mtable|mtd|mtext|mtr|munder|munderover|semantics
)
(?=[+~>\\s,.\\#|){:\\[]|/\\*|$)`,
            name: "entity.name.tag.css"
        },
        "unicode-range": {
            captures: {
                0: {
                    name: "constant.other.unicode-range.css"
                },
                1: {
                    name: "punctuation.separator.dash.unicode-range.css"
                }
            },
            match: "(?<![\\w-])[Uu]\\+[0-9A-Fa-f?]{1,6}(?:(-)[0-9A-Fa-f]{1,6})?(?![\\w-])"
        },
        url: {
            begin: "(?i)(?<![\\w@-])(url)(\\()",
            beginCaptures: {
                1: {
                    name: "support.function.url.css"
                },
                2: {
                    name: "punctuation.section.function.begin.bracket.round.css"
                }
            },
            end: "\\)",
            endCaptures: {
                0: {
                    name: "punctuation.section.function.end.bracket.round.css"
                }
            },
            name: "meta.function.url.css",
            patterns: [
                {
                    match: `[^'")\\s]+`,
                    name: "variable.parameter.url.css"
                },
                {
                    include: "#string"
                },
                {
                    include: "#comment-block"
                },
                {
                    include: "#escapes"
                }
            ]
        }
    },
    scopeName: "source.css"
});
var n = [
    e
];
;
}}),
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/scss-DjxgF7f7.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>s)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$css$2d$CAzixsid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/css-CAzixsid.js [app-client] (ecmascript)");
;
const n = Object.freeze({
    displayName: "SCSS",
    name: "scss",
    patterns: [
        {
            include: "#variable_setting"
        },
        {
            include: "#at_rule_forward"
        },
        {
            include: "#at_rule_use"
        },
        {
            include: "#at_rule_include"
        },
        {
            include: "#at_rule_import"
        },
        {
            include: "#general"
        },
        {
            include: "#flow_control"
        },
        {
            include: "#rules"
        },
        {
            include: "#property_list"
        },
        {
            include: "#at_rule_mixin"
        },
        {
            include: "#at_rule_media"
        },
        {
            include: "#at_rule_function"
        },
        {
            include: "#at_rule_charset"
        },
        {
            include: "#at_rule_option"
        },
        {
            include: "#at_rule_namespace"
        },
        {
            include: "#at_rule_fontface"
        },
        {
            include: "#at_rule_page"
        },
        {
            include: "#at_rule_keyframes"
        },
        {
            include: "#at_rule_at_root"
        },
        {
            include: "#at_rule_supports"
        },
        {
            match: ";",
            name: "punctuation.terminator.rule.css"
        }
    ],
    repository: {
        at_rule_at_root: {
            begin: "\\s*((@)(at-root))(\\s+|$)",
            beginCaptures: {
                1: {
                    name: "keyword.control.at-rule.at-root.scss"
                },
                2: {
                    name: "punctuation.definition.keyword.scss"
                }
            },
            end: "\\s*(?={)",
            name: "meta.at-rule.at-root.scss",
            patterns: [
                {
                    include: "#function_attributes"
                },
                {
                    include: "#functions"
                },
                {
                    include: "#selectors"
                }
            ]
        },
        at_rule_charset: {
            begin: "\\s*((@)charset\\b)\\s*",
            captures: {
                1: {
                    name: "keyword.control.at-rule.charset.scss"
                },
                2: {
                    name: "punctuation.definition.keyword.scss"
                }
            },
            end: "\\s*((?=;|$))",
            name: "meta.at-rule.charset.scss",
            patterns: [
                {
                    include: "#variable"
                },
                {
                    include: "#string_single"
                },
                {
                    include: "#string_double"
                }
            ]
        },
        at_rule_content: {
            begin: "\\s*((@)content\\b)\\s*",
            captures: {
                1: {
                    name: "keyword.control.content.scss"
                }
            },
            end: "\\s*((?=;))",
            name: "meta.content.scss",
            patterns: [
                {
                    include: "#variable"
                },
                {
                    include: "#selectors"
                },
                {
                    include: "#property_values"
                }
            ]
        },
        at_rule_each: {
            begin: "\\s*((@)each\\b)\\s*",
            captures: {
                1: {
                    name: "keyword.control.each.scss"
                },
                2: {
                    name: "punctuation.definition.keyword.scss"
                }
            },
            end: "\\s*((?=}))",
            name: "meta.at-rule.each.scss",
            patterns: [
                {
                    match: "\\b(in|,)\\b",
                    name: "keyword.control.operator"
                },
                {
                    include: "#variable"
                },
                {
                    include: "#property_values"
                },
                {
                    include: "$self"
                }
            ]
        },
        at_rule_else: {
            begin: "\\s*((@)else(\\s*(if)?))\\s*",
            captures: {
                1: {
                    name: "keyword.control.else.scss"
                },
                2: {
                    name: "punctuation.definition.keyword.scss"
                }
            },
            end: "\\s*(?={)",
            name: "meta.at-rule.else.scss",
            patterns: [
                {
                    include: "#conditional_operators"
                },
                {
                    include: "#variable"
                },
                {
                    include: "#property_values"
                }
            ]
        },
        at_rule_extend: {
            begin: "\\s*((@)extend\\b)\\s*",
            captures: {
                1: {
                    name: "keyword.control.at-rule.extend.scss"
                },
                2: {
                    name: "punctuation.definition.keyword.scss"
                }
            },
            end: "\\s*(?=;)",
            name: "meta.at-rule.extend.scss",
            patterns: [
                {
                    include: "#variable"
                },
                {
                    include: "#selectors"
                },
                {
                    include: "#property_values"
                }
            ]
        },
        at_rule_fontface: {
            patterns: [
                {
                    begin: "^\\s*((@)font-face\\b)",
                    beginCaptures: {
                        1: {
                            name: "keyword.control.at-rule.fontface.scss"
                        },
                        2: {
                            name: "punctuation.definition.keyword.scss"
                        }
                    },
                    end: "\\s*(?={)",
                    name: "meta.at-rule.fontface.scss",
                    patterns: [
                        {
                            include: "#function_attributes"
                        }
                    ]
                }
            ]
        },
        at_rule_for: {
            begin: "\\s*((@)for\\b)\\s*",
            captures: {
                1: {
                    name: "keyword.control.for.scss"
                },
                2: {
                    name: "punctuation.definition.keyword.scss"
                }
            },
            end: "\\s*(?={)",
            name: "meta.at-rule.for.scss",
            patterns: [
                {
                    match: "(==|!=|<=|>=|<|>|from|to|through)",
                    name: "keyword.control.operator"
                },
                {
                    include: "#variable"
                },
                {
                    include: "#property_values"
                },
                {
                    include: "$self"
                }
            ]
        },
        at_rule_forward: {
            begin: "\\s*((@)forward\\b)\\s*",
            captures: {
                1: {
                    name: "keyword.control.at-rule.forward.scss"
                },
                2: {
                    name: "punctuation.definition.keyword.scss"
                }
            },
            end: "\\s*(?=;)",
            name: "meta.at-rule.forward.scss",
            patterns: [
                {
                    match: "\\b(as|hide|show)\\b",
                    name: "keyword.control.operator"
                },
                {
                    captures: {
                        1: {
                            name: "entity.other.attribute-name.module.scss"
                        },
                        2: {
                            name: "punctuation.definition.wildcard.scss"
                        }
                    },
                    match: "\\b([\\w-]+)(\\*)"
                },
                {
                    match: "\\b[\\w-]+\\b",
                    name: "entity.name.function.scss"
                },
                {
                    include: "#variable"
                },
                {
                    include: "#string_single"
                },
                {
                    include: "#string_double"
                },
                {
                    include: "#comment_line"
                },
                {
                    include: "#comment_block"
                }
            ]
        },
        at_rule_function: {
            patterns: [
                {
                    begin: "\\s*((@)function\\b)\\s*",
                    captures: {
                        1: {
                            name: "keyword.control.at-rule.function.scss"
                        },
                        2: {
                            name: "punctuation.definition.keyword.scss"
                        },
                        3: {
                            name: "entity.name.function.scss"
                        }
                    },
                    end: "\\s*(?={)",
                    name: "meta.at-rule.function.scss",
                    patterns: [
                        {
                            include: "#function_attributes"
                        }
                    ]
                },
                {
                    captures: {
                        1: {
                            name: "keyword.control.at-rule.function.scss"
                        },
                        2: {
                            name: "punctuation.definition.keyword.scss"
                        },
                        3: {
                            name: "entity.name.function.scss"
                        }
                    },
                    match: "\\s*((@)function\\b)\\s*",
                    name: "meta.at-rule.function.scss"
                }
            ]
        },
        at_rule_if: {
            begin: "\\s*((@)if\\b)\\s*",
            captures: {
                1: {
                    name: "keyword.control.if.scss"
                },
                2: {
                    name: "punctuation.definition.keyword.scss"
                }
            },
            end: "\\s*(?={)",
            name: "meta.at-rule.if.scss",
            patterns: [
                {
                    include: "#conditional_operators"
                },
                {
                    include: "#variable"
                },
                {
                    include: "#property_values"
                }
            ]
        },
        at_rule_import: {
            begin: "\\s*((@)import\\b)\\s*",
            captures: {
                1: {
                    name: "keyword.control.at-rule.import.scss"
                },
                2: {
                    name: "punctuation.definition.keyword.scss"
                }
            },
            end: "\\s*((?=;)|(?=}))",
            name: "meta.at-rule.import.scss",
            patterns: [
                {
                    include: "#variable"
                },
                {
                    include: "#string_single"
                },
                {
                    include: "#string_double"
                },
                {
                    include: "#functions"
                },
                {
                    include: "#comment_line"
                }
            ]
        },
        at_rule_include: {
            patterns: [
                {
                    begin: "(?<=@include)\\s+(?:([\\w-]+)\\s*(\\.))?([\\w-]+)\\s*(\\()",
                    beginCaptures: {
                        1: {
                            name: "variable.scss"
                        },
                        2: {
                            name: "punctuation.access.module.scss"
                        },
                        3: {
                            name: "entity.name.function.scss"
                        },
                        4: {
                            name: "punctuation.definition.parameters.begin.bracket.round.scss"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.parameters.end.bracket.round.scss"
                        }
                    },
                    name: "meta.at-rule.include.scss",
                    patterns: [
                        {
                            include: "#function_attributes"
                        }
                    ]
                },
                {
                    captures: {
                        0: {
                            name: "meta.at-rule.include.scss"
                        },
                        1: {
                            name: "variable.scss"
                        },
                        2: {
                            name: "punctuation.access.module.scss"
                        },
                        3: {
                            name: "entity.name.function.scss"
                        }
                    },
                    match: "(?<=@include)\\s+(?:([\\w-]+)\\s*(\\.))?([\\w-]+)"
                },
                {
                    captures: {
                        0: {
                            name: "meta.at-rule.include.scss"
                        },
                        1: {
                            name: "keyword.control.at-rule.include.scss"
                        },
                        2: {
                            name: "punctuation.definition.keyword.scss"
                        }
                    },
                    match: "((@)include)\\b"
                }
            ]
        },
        at_rule_keyframes: {
            begin: "(?<=^|\\s)(@)(?:-(?:webkit|moz)-)?keyframes\\b",
            beginCaptures: {
                0: {
                    name: "keyword.control.at-rule.keyframes.scss"
                },
                1: {
                    name: "punctuation.definition.keyword.scss"
                }
            },
            end: "(?<=})",
            name: "meta.at-rule.keyframes.scss",
            patterns: [
                {
                    captures: {
                        1: {
                            name: "entity.name.function.scss"
                        }
                    },
                    match: "(?<=@keyframes)\\s+((?:[_A-Za-z][-\\w]|-[_A-Za-z])[-\\w]*)"
                },
                {
                    begin: '(?<=@keyframes)\\s+(")',
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.string.begin.scss"
                        }
                    },
                    contentName: "entity.name.function.scss",
                    end: '"',
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.scss"
                        }
                    },
                    name: "string.quoted.double.scss",
                    patterns: [
                        {
                            match: "\\\\(\\h{1,6}|.)",
                            name: "constant.character.escape.scss"
                        },
                        {
                            include: "#interpolation"
                        }
                    ]
                },
                {
                    begin: "(?<=@keyframes)\\s+(')",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.string.begin.scss"
                        }
                    },
                    contentName: "entity.name.function.scss",
                    end: "'",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.scss"
                        }
                    },
                    name: "string.quoted.single.scss",
                    patterns: [
                        {
                            match: "\\\\(\\h{1,6}|.)",
                            name: "constant.character.escape.scss"
                        },
                        {
                            include: "#interpolation"
                        }
                    ]
                },
                {
                    begin: "{",
                    beginCaptures: {
                        0: {
                            name: "punctuation.section.keyframes.begin.scss"
                        }
                    },
                    end: "}",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.keyframes.end.scss"
                        }
                    },
                    patterns: [
                        {
                            match: "\\b(?:(?:100|[1-9]\\d|\\d)%|from|to)(?=\\s*{)",
                            name: "entity.other.attribute-name.scss"
                        },
                        {
                            include: "#flow_control"
                        },
                        {
                            include: "#interpolation"
                        },
                        {
                            include: "#property_list"
                        },
                        {
                            include: "#rules"
                        }
                    ]
                }
            ]
        },
        at_rule_media: {
            patterns: [
                {
                    begin: "^\\s*((@)media)\\b",
                    beginCaptures: {
                        1: {
                            name: "keyword.control.at-rule.media.scss"
                        },
                        2: {
                            name: "punctuation.definition.keyword.scss"
                        }
                    },
                    end: "\\s*(?={)",
                    name: "meta.at-rule.media.scss",
                    patterns: [
                        {
                            include: "#comment_docblock"
                        },
                        {
                            include: "#comment_block"
                        },
                        {
                            include: "#comment_line"
                        },
                        {
                            match: "\\b(only)\\b",
                            name: "keyword.control.operator.css.scss"
                        },
                        {
                            begin: "\\(",
                            beginCaptures: {
                                0: {
                                    name: "punctuation.definition.media-query.begin.bracket.round.scss"
                                }
                            },
                            end: "\\)",
                            endCaptures: {
                                0: {
                                    name: "punctuation.definition.media-query.end.bracket.round.scss"
                                }
                            },
                            name: "meta.property-list.media-query.scss",
                            patterns: [
                                {
                                    begin: "(?<![-a-z])(?=[-a-z])",
                                    end: "$|(?![-a-z])",
                                    name: "meta.property-name.media-query.scss",
                                    patterns: [
                                        {
                                            include: "source.css#media-features"
                                        },
                                        {
                                            include: "source.css#property-names"
                                        }
                                    ]
                                },
                                {
                                    begin: "(:)\\s*(?!(\\s*{))",
                                    beginCaptures: {
                                        1: {
                                            name: "punctuation.separator.key-value.scss"
                                        }
                                    },
                                    contentName: "meta.property-value.media-query.scss",
                                    end: "\\s*(;|(?=}|\\)))",
                                    endCaptures: {
                                        1: {
                                            name: "punctuation.terminator.rule.scss"
                                        }
                                    },
                                    patterns: [
                                        {
                                            include: "#general"
                                        },
                                        {
                                            include: "#property_values"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            include: "#variable"
                        },
                        {
                            include: "#conditional_operators"
                        },
                        {
                            include: "source.css#media-types"
                        }
                    ]
                }
            ]
        },
        at_rule_mixin: {
            patterns: [
                {
                    begin: "(?<=@mixin)\\s+([\\w-]+)\\s*(\\()",
                    beginCaptures: {
                        1: {
                            name: "entity.name.function.scss"
                        },
                        2: {
                            name: "punctuation.definition.parameters.begin.bracket.round.scss"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.parameters.end.bracket.round.scss"
                        }
                    },
                    name: "meta.at-rule.mixin.scss",
                    patterns: [
                        {
                            include: "#function_attributes"
                        }
                    ]
                },
                {
                    captures: {
                        1: {
                            name: "entity.name.function.scss"
                        }
                    },
                    match: "(?<=@mixin)\\s+([\\w-]+)",
                    name: "meta.at-rule.mixin.scss"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.control.at-rule.mixin.scss"
                        },
                        2: {
                            name: "punctuation.definition.keyword.scss"
                        }
                    },
                    match: "((@)mixin)\\b",
                    name: "meta.at-rule.mixin.scss"
                }
            ]
        },
        at_rule_namespace: {
            patterns: [
                {
                    begin: "(?<=@namespace)\\s+(?=url)",
                    end: "(?=;|$)",
                    name: "meta.at-rule.namespace.scss",
                    patterns: [
                        {
                            include: "#property_values"
                        },
                        {
                            include: "#string_single"
                        },
                        {
                            include: "#string_double"
                        }
                    ]
                },
                {
                    begin: "(?<=@namespace)\\s+([\\w-]*)",
                    captures: {
                        1: {
                            name: "entity.name.namespace-prefix.scss"
                        }
                    },
                    end: "(?=;|$)",
                    name: "meta.at-rule.namespace.scss",
                    patterns: [
                        {
                            include: "#variables"
                        },
                        {
                            include: "#property_values"
                        },
                        {
                            include: "#string_single"
                        },
                        {
                            include: "#string_double"
                        }
                    ]
                },
                {
                    captures: {
                        1: {
                            name: "keyword.control.at-rule.namespace.scss"
                        },
                        2: {
                            name: "punctuation.definition.keyword.scss"
                        }
                    },
                    match: "((@)namespace)\\b",
                    name: "meta.at-rule.namespace.scss"
                }
            ]
        },
        at_rule_option: {
            captures: {
                1: {
                    name: "keyword.control.at-rule.charset.scss"
                },
                2: {
                    name: "punctuation.definition.keyword.scss"
                }
            },
            match: "^\\s*((@)option\\b)\\s*",
            name: "meta.at-rule.option.scss"
        },
        at_rule_page: {
            patterns: [
                {
                    begin: "^\\s*((@)page)(?=:|\\s)\\s*([-:\\w]*)",
                    captures: {
                        1: {
                            name: "keyword.control.at-rule.page.scss"
                        },
                        2: {
                            name: "punctuation.definition.keyword.scss"
                        },
                        3: {
                            name: "entity.name.function.scss"
                        }
                    },
                    end: "\\s*(?={)",
                    name: "meta.at-rule.page.scss"
                }
            ]
        },
        at_rule_return: {
            begin: "\\s*((@)(return)\\b)",
            captures: {
                1: {
                    name: "keyword.control.return.scss"
                },
                2: {
                    name: "punctuation.definition.keyword.scss"
                }
            },
            end: "\\s*((?=;))",
            name: "meta.at-rule.return.scss",
            patterns: [
                {
                    include: "#variable"
                },
                {
                    include: "#property_values"
                }
            ]
        },
        at_rule_supports: {
            begin: "(?<=^|\\s)(@)supports\\b",
            captures: {
                0: {
                    name: "keyword.control.at-rule.supports.scss"
                },
                1: {
                    name: "punctuation.definition.keyword.scss"
                }
            },
            end: "(?={)|$",
            name: "meta.at-rule.supports.scss",
            patterns: [
                {
                    include: "#logical_operators"
                },
                {
                    include: "#properties"
                },
                {
                    match: "\\(",
                    name: "punctuation.definition.condition.begin.bracket.round.scss"
                },
                {
                    match: "\\)",
                    name: "punctuation.definition.condition.end.bracket.round.scss"
                }
            ]
        },
        at_rule_use: {
            begin: "\\s*((@)use\\b)\\s*",
            captures: {
                1: {
                    name: "keyword.control.at-rule.use.scss"
                },
                2: {
                    name: "punctuation.definition.keyword.scss"
                }
            },
            end: "\\s*(?=;)",
            name: "meta.at-rule.use.scss",
            patterns: [
                {
                    match: "\\b(as|with)\\b",
                    name: "keyword.control.operator"
                },
                {
                    match: "\\b[\\w-]+\\b",
                    name: "variable.scss"
                },
                {
                    match: "\\*",
                    name: "variable.language.expanded-namespace.scss"
                },
                {
                    include: "#string_single"
                },
                {
                    include: "#string_double"
                },
                {
                    include: "#comment_line"
                },
                {
                    include: "#comment_block"
                },
                {
                    begin: "\\(",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.parameters.begin.bracket.round.scss"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.parameters.end.bracket.round.scss"
                        }
                    },
                    patterns: [
                        {
                            include: "#function_attributes"
                        }
                    ]
                }
            ]
        },
        at_rule_warn: {
            begin: "\\s*((@)(warn|debug|error)\\b)\\s*",
            captures: {
                1: {
                    name: "keyword.control.warn.scss"
                },
                2: {
                    name: "punctuation.definition.keyword.scss"
                }
            },
            end: "\\s*(?=;)",
            name: "meta.at-rule.warn.scss",
            patterns: [
                {
                    include: "#variable"
                },
                {
                    include: "#string_double"
                },
                {
                    include: "#string_single"
                }
            ]
        },
        at_rule_while: {
            begin: "\\s*((@)while\\b)\\s*",
            captures: {
                1: {
                    name: "keyword.control.while.scss"
                },
                2: {
                    name: "punctuation.definition.keyword.scss"
                }
            },
            end: "\\s*(?=})",
            name: "meta.at-rule.while.scss",
            patterns: [
                {
                    include: "#conditional_operators"
                },
                {
                    include: "#variable"
                },
                {
                    include: "#property_values"
                },
                {
                    include: "$self"
                }
            ]
        },
        comment_block: {
            begin: "/\\*",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.comment.scss"
                }
            },
            end: "\\*/",
            endCaptures: {
                0: {
                    name: "punctuation.definition.comment.scss"
                }
            },
            name: "comment.block.scss"
        },
        comment_docblock: {
            begin: "///",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.comment.scss"
                }
            },
            end: "(?=$)",
            name: "comment.block.documentation.scss",
            patterns: [
                {
                    include: "source.sassdoc"
                }
            ]
        },
        comment_line: {
            begin: "//",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.comment.scss"
                }
            },
            end: "\\n",
            name: "comment.line.scss"
        },
        comparison_operators: {
            match: "==|!=|<=|>=|<|>",
            name: "keyword.operator.comparison.scss"
        },
        conditional_operators: {
            patterns: [
                {
                    include: "#comparison_operators"
                },
                {
                    include: "#logical_operators"
                }
            ]
        },
        constant_default: {
            match: "!default",
            name: "keyword.other.default.scss"
        },
        constant_functions: {
            begin: "(?:([\\w-]+)(\\.))?([\\w-]+)(\\()",
            beginCaptures: {
                1: {
                    name: "variable.scss"
                },
                2: {
                    name: "punctuation.access.module.scss"
                },
                3: {
                    name: "support.function.misc.scss"
                },
                4: {
                    name: "punctuation.section.function.scss"
                }
            },
            end: "(\\))",
            endCaptures: {
                1: {
                    name: "punctuation.section.function.scss"
                }
            },
            patterns: [
                {
                    include: "#parameters"
                }
            ]
        },
        constant_important: {
            match: "!important",
            name: "keyword.other.important.scss"
        },
        constant_mathematical_symbols: {
            match: "\\b(\\+|-|\\*|/)\\b",
            name: "support.constant.mathematical-symbols.scss"
        },
        constant_optional: {
            match: "!optional",
            name: "keyword.other.optional.scss"
        },
        constant_sass_functions: {
            begin: "(headings|stylesheet-url|rgba?|hsla?|ie-hex-str|red|green|blue|alpha|opacity|hue|saturation|lightness|prefixed|prefix|-moz|-svg|-css2|-pie|-webkit|-ms|font-(?:files|url)|grid-image|image-(?:width|height|url|color)|sprites?|sprite-(?:map|map-name|file|url|position)|inline-(?:font-files|image)|opposite-position|grad-point|grad-end-position|color-stops|color-stops-in-percentages|grad-color-stops|(?:radial|linear)-(?:gradient|svg-gradient)|opacify|fade-?in|transparentize|fade-?out|lighten|darken|saturate|desaturate|grayscale|adjust-(?:hue|lightness|saturation|color)|scale-(?:lightness|saturation|color)|change-color|spin|complement|invert|mix|-compass-(?:list|space-list|slice|nth|list-size)|blank|compact|nth|first-value-of|join|length|append|nest|append-selector|headers|enumerate|range|percentage|unitless|unit|if|type-of|comparable|elements-of-type|quote|unquote|escape|e|sin|cos|tan|abs|round|ceil|floor|pi|translate(?:X|Y))(\\()",
            beginCaptures: {
                1: {
                    name: "support.function.misc.scss"
                },
                2: {
                    name: "punctuation.section.function.scss"
                }
            },
            end: "(\\))",
            endCaptures: {
                1: {
                    name: "punctuation.section.function.scss"
                }
            },
            patterns: [
                {
                    include: "#parameters"
                }
            ]
        },
        flow_control: {
            patterns: [
                {
                    include: "#at_rule_if"
                },
                {
                    include: "#at_rule_else"
                },
                {
                    include: "#at_rule_warn"
                },
                {
                    include: "#at_rule_for"
                },
                {
                    include: "#at_rule_while"
                },
                {
                    include: "#at_rule_each"
                },
                {
                    include: "#at_rule_return"
                }
            ]
        },
        function_attributes: {
            patterns: [
                {
                    match: ":",
                    name: "punctuation.separator.key-value.scss"
                },
                {
                    include: "#general"
                },
                {
                    include: "#property_values"
                },
                {
                    match: "[={}\\?;@]",
                    name: "invalid.illegal.scss"
                }
            ]
        },
        functions: {
            patterns: [
                {
                    begin: "([\\w-]{1,})(\\()\\s*",
                    beginCaptures: {
                        1: {
                            name: "support.function.misc.scss"
                        },
                        2: {
                            name: "punctuation.section.function.scss"
                        }
                    },
                    end: "(\\))",
                    endCaptures: {
                        1: {
                            name: "punctuation.section.function.scss"
                        }
                    },
                    patterns: [
                        {
                            include: "#parameters"
                        }
                    ]
                },
                {
                    match: "([\\w-]{1,})",
                    name: "support.function.misc.scss"
                }
            ]
        },
        general: {
            patterns: [
                {
                    include: "#variable"
                },
                {
                    include: "#comment_docblock"
                },
                {
                    include: "#comment_block"
                },
                {
                    include: "#comment_line"
                }
            ]
        },
        interpolation: {
            begin: "#{",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.interpolation.begin.bracket.curly.scss"
                }
            },
            end: "}",
            endCaptures: {
                0: {
                    name: "punctuation.definition.interpolation.end.bracket.curly.scss"
                }
            },
            name: "variable.interpolation.scss",
            patterns: [
                {
                    include: "#variable"
                },
                {
                    include: "#property_values"
                }
            ]
        },
        logical_operators: {
            match: "\\b(not|or|and)\\b",
            name: "keyword.operator.logical.scss"
        },
        map: {
            begin: "\\(",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.map.begin.bracket.round.scss"
                }
            },
            end: "\\)",
            endCaptures: {
                0: {
                    name: "punctuation.definition.map.end.bracket.round.scss"
                }
            },
            name: "meta.definition.variable.map.scss",
            patterns: [
                {
                    include: "#comment_docblock"
                },
                {
                    include: "#comment_block"
                },
                {
                    include: "#comment_line"
                },
                {
                    captures: {
                        1: {
                            name: "support.type.map.key.scss"
                        },
                        2: {
                            name: "punctuation.separator.key-value.scss"
                        }
                    },
                    match: "\\b([\\w-]+)\\s*(:)"
                },
                {
                    match: ",",
                    name: "punctuation.separator.delimiter.scss"
                },
                {
                    include: "#map"
                },
                {
                    include: "#variable"
                },
                {
                    include: "#property_values"
                }
            ]
        },
        operators: {
            match: "[-+*/](?!\\s*[-+*/])",
            name: "keyword.operator.css"
        },
        parameters: {
            patterns: [
                {
                    include: "#variable"
                },
                {
                    begin: "\\(",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.begin.bracket.round.scss"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.end.bracket.round.scss"
                        }
                    },
                    patterns: [
                        {
                            include: "#function_attributes"
                        }
                    ]
                },
                {
                    include: "#property_values"
                },
                {
                    include: "#comment_block"
                },
                {
                    match: `[^'",) \\t]+`,
                    name: "variable.parameter.url.scss"
                },
                {
                    match: ",",
                    name: "punctuation.separator.delimiter.scss"
                }
            ]
        },
        parent_selector_suffix: {
            captures: {
                1: {
                    name: "punctuation.definition.entity.css"
                },
                2: {
                    patterns: [
                        {
                            include: "#interpolation"
                        },
                        {
                            match: "\\\\([0-9a-fA-F]{1,6}|.)",
                            name: "constant.character.escape.scss"
                        },
                        {
                            match: "\\$|}",
                            name: "invalid.illegal.identifier.scss"
                        }
                    ]
                }
            },
            match: `(?x)
(?<=&)
(
(?: [-a-zA-Z_0-9]|[^\\x00-\\x7F]
| \\\\(?:[0-9a-fA-F]{1,6}|.)
| \\#\\{
| \\$
| }
)+
)
(?= $
| [\\s,.\\#)\\[:{>+~|]
| /\\*
)`,
            name: "entity.other.attribute-name.parent-selector-suffix.css"
        },
        properties: {
            patterns: [
                {
                    begin: "(?<![-a-z])(?=[-a-z])",
                    end: "$|(?![-a-z])",
                    name: "meta.property-name.scss",
                    patterns: [
                        {
                            include: "source.css#property-names"
                        },
                        {
                            include: "#at_rule_include"
                        }
                    ]
                },
                {
                    begin: "(:)\\s*(?!(\\s*{))",
                    beginCaptures: {
                        1: {
                            name: "punctuation.separator.key-value.scss"
                        }
                    },
                    contentName: "meta.property-value.scss",
                    end: "\\s*(;|(?=}|\\)))",
                    endCaptures: {
                        1: {
                            name: "punctuation.terminator.rule.scss"
                        }
                    },
                    patterns: [
                        {
                            include: "#general"
                        },
                        {
                            include: "#property_values"
                        }
                    ]
                }
            ]
        },
        property_list: {
            begin: "{",
            beginCaptures: {
                0: {
                    name: "punctuation.section.property-list.begin.bracket.curly.scss"
                }
            },
            end: "}",
            endCaptures: {
                0: {
                    name: "punctuation.section.property-list.end.bracket.curly.scss"
                }
            },
            name: "meta.property-list.scss",
            patterns: [
                {
                    include: "#flow_control"
                },
                {
                    include: "#rules"
                },
                {
                    include: "#properties"
                },
                {
                    include: "$self"
                }
            ]
        },
        property_values: {
            patterns: [
                {
                    include: "#string_single"
                },
                {
                    include: "#string_double"
                },
                {
                    include: "#constant_functions"
                },
                {
                    include: "#constant_sass_functions"
                },
                {
                    include: "#constant_important"
                },
                {
                    include: "#constant_default"
                },
                {
                    include: "#constant_optional"
                },
                {
                    include: "source.css#numeric-values"
                },
                {
                    include: "source.css#property-keywords"
                },
                {
                    include: "source.css#color-keywords"
                },
                {
                    include: "source.css#property-names"
                },
                {
                    include: "#constant_mathematical_symbols"
                },
                {
                    include: "#operators"
                },
                {
                    begin: "\\(",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.begin.bracket.round.scss"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.end.bracket.round.scss"
                        }
                    },
                    patterns: [
                        {
                            include: "#general"
                        },
                        {
                            include: "#property_values"
                        }
                    ]
                }
            ]
        },
        rules: {
            patterns: [
                {
                    include: "#general"
                },
                {
                    include: "#at_rule_extend"
                },
                {
                    include: "#at_rule_content"
                },
                {
                    include: "#at_rule_include"
                },
                {
                    include: "#at_rule_media"
                },
                {
                    include: "#selectors"
                }
            ]
        },
        selector_attribute: {
            captures: {
                1: {
                    name: "punctuation.definition.attribute-selector.begin.bracket.square.scss"
                },
                2: {
                    name: "entity.other.attribute-name.attribute.scss",
                    patterns: [
                        {
                            include: "#interpolation"
                        },
                        {
                            match: "\\\\([0-9a-fA-F]{1,6}|.)",
                            name: "constant.character.escape.scss"
                        },
                        {
                            match: "\\$|}",
                            name: "invalid.illegal.scss"
                        }
                    ]
                },
                3: {
                    name: "keyword.operator.scss"
                },
                4: {
                    name: "string.unquoted.attribute-value.scss",
                    patterns: [
                        {
                            include: "#interpolation"
                        },
                        {
                            match: "\\\\([0-9a-fA-F]{1,6}|.)",
                            name: "constant.character.escape.scss"
                        },
                        {
                            match: "\\$|}",
                            name: "invalid.illegal.scss"
                        }
                    ]
                },
                5: {
                    name: "string.quoted.double.attribute-value.scss"
                },
                6: {
                    name: "punctuation.definition.string.begin.scss"
                },
                7: {
                    patterns: [
                        {
                            include: "#interpolation"
                        },
                        {
                            match: "\\\\([0-9a-fA-F]{1,6}|.)",
                            name: "constant.character.escape.scss"
                        },
                        {
                            match: "\\$|}",
                            name: "invalid.illegal.scss"
                        }
                    ]
                },
                8: {
                    name: "punctuation.definition.string.end.scss"
                },
                9: {
                    name: "string.quoted.single.attribute-value.scss"
                },
                10: {
                    name: "punctuation.definition.string.begin.scss"
                },
                11: {
                    patterns: [
                        {
                            include: "#interpolation"
                        },
                        {
                            match: "\\\\([0-9a-fA-F]{1,6}|.)",
                            name: "constant.character.escape.scss"
                        },
                        {
                            match: "\\$|}",
                            name: "invalid.illegal.scss"
                        }
                    ]
                },
                12: {
                    name: "punctuation.definition.string.end.scss"
                },
                13: {
                    name: "punctuation.definition.attribute-selector.end.bracket.square.scss"
                }
            },
            match: `(?xi)
(\\[)
\\s*
(
(?:
[-a-zA-Z_0-9]|[^\\x00-\\x7F]
| \\\\(?:[0-9a-fA-F]{1,6}|.)
| \\#\\{
| \\.?\\$
| }
)+?
)
(?:
\\s*([~|^$*]?=)\\s*
(?:
(
(?:
[-a-zA-Z_0-9]|[^\\x00-\\x7F]
| \\\\(?:[0-9a-fA-F]{1,6}|.)
| \\#\\{
| \\.?\\$
| }
)+
)
|
((")(.*?)("))
|
((')(.*?)('))
)
)?
\\s*
(\\])`,
            name: "meta.attribute-selector.scss"
        },
        selector_class: {
            captures: {
                1: {
                    name: "punctuation.definition.entity.css"
                },
                2: {
                    patterns: [
                        {
                            include: "#interpolation"
                        },
                        {
                            match: "\\\\([0-9a-fA-F]{1,6}|.)",
                            name: "constant.character.escape.scss"
                        },
                        {
                            match: "\\$|}",
                            name: "invalid.illegal.scss"
                        }
                    ]
                }
            },
            match: `(?x)
(\\.)
(
(?: [-a-zA-Z_0-9]|[^\\x00-\\x7F]
| \\\\(?:[0-9a-fA-F]{1,6}|.)
| \\#\\{
| \\.?\\$
| }
)+
)
(?= $
| [\\s,\\#)\\[:{>+~|]
| \\.[^$]
| /\\*
| ;
)`,
            name: "entity.other.attribute-name.class.css"
        },
        selector_custom: {
            match: "\\b([a-zA-Z0-9]+(-[a-zA-Z0-9]+)+)(?=\\.|\\s++[^:]|\\s*[,\\[{]|:(link|visited|hover|active|focus|target|lang|disabled|enabled|checked|indeterminate|root|nth-(child|last-child|of-type|last-of-type)|first-child|last-child|first-of-type|last-of-type|only-child|only-of-type|empty|not|valid|invalid)(\\([0-9A-Za-z]*\\))?)",
            name: "entity.name.tag.custom.scss"
        },
        selector_id: {
            captures: {
                1: {
                    name: "punctuation.definition.entity.css"
                },
                2: {
                    patterns: [
                        {
                            include: "#interpolation"
                        },
                        {
                            match: "\\\\([0-9a-fA-F]{1,6}|.)",
                            name: "constant.character.escape.scss"
                        },
                        {
                            match: "\\$|}",
                            name: "invalid.illegal.identifier.scss"
                        }
                    ]
                }
            },
            match: `(?x)
(\\#)
(
(?: [-a-zA-Z_0-9]|[^\\x00-\\x7F]
| \\\\(?:[0-9a-fA-F]{1,6}|.)
| \\#\\{
| \\.?\\$
| }
)+
)
(?= $
| [\\s,\\#)\\[:{>+~|]
| \\.[^$]
| /\\*
)`,
            name: "entity.other.attribute-name.id.css"
        },
        selector_placeholder: {
            captures: {
                1: {
                    name: "punctuation.definition.entity.css"
                },
                2: {
                    patterns: [
                        {
                            include: "#interpolation"
                        },
                        {
                            match: "\\\\([0-9a-fA-F]{1,6}|.)",
                            name: "constant.character.escape.scss"
                        },
                        {
                            match: "\\$|}",
                            name: "invalid.illegal.identifier.scss"
                        }
                    ]
                }
            },
            match: `(?x)
(%)
(
(?: [-a-zA-Z_0-9]|[^\\x00-\\x7F]
| \\\\(?:[0-9a-fA-F]{1,6}|.)
| \\#\\{
| \\.\\$
| \\$
| }
)+
)
(?= ;
| $
| [\\s,\\#)\\[:{>+~|]
| \\.[^$]
| /\\*
)`,
            name: "entity.other.attribute-name.placeholder.css"
        },
        selector_pseudo_class: {
            patterns: [
                {
                    begin: "((:)\\bnth-(?:child|last-child|of-type|last-of-type))(\\()",
                    beginCaptures: {
                        1: {
                            name: "entity.other.attribute-name.pseudo-class.css"
                        },
                        2: {
                            name: "punctuation.definition.entity.css"
                        },
                        3: {
                            name: "punctuation.definition.pseudo-class.begin.bracket.round.css"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.pseudo-class.end.bracket.round.css"
                        }
                    },
                    patterns: [
                        {
                            include: "#interpolation"
                        },
                        {
                            match: "\\d+",
                            name: "constant.numeric.css"
                        },
                        {
                            match: "(?<=\\d)n\\b|\\b(n|even|odd)\\b",
                            name: "constant.other.scss"
                        },
                        {
                            match: "\\w+",
                            name: "invalid.illegal.scss"
                        }
                    ]
                },
                {
                    include: "source.css#pseudo-classes"
                },
                {
                    include: "source.css#pseudo-elements"
                },
                {
                    include: "source.css#functional-pseudo-classes"
                }
            ]
        },
        selectors: {
            patterns: [
                {
                    include: "source.css#tag-names"
                },
                {
                    include: "#selector_custom"
                },
                {
                    include: "#selector_class"
                },
                {
                    include: "#selector_id"
                },
                {
                    include: "#selector_pseudo_class"
                },
                {
                    include: "#tag_wildcard"
                },
                {
                    include: "#tag_parent_reference"
                },
                {
                    include: "source.css#pseudo-elements"
                },
                {
                    include: "#selector_attribute"
                },
                {
                    include: "#selector_placeholder"
                },
                {
                    include: "#parent_selector_suffix"
                }
            ]
        },
        string_double: {
            begin: '"',
            beginCaptures: {
                0: {
                    name: "punctuation.definition.string.begin.scss"
                }
            },
            end: '"',
            endCaptures: {
                0: {
                    name: "punctuation.definition.string.end.scss"
                }
            },
            name: "string.quoted.double.scss",
            patterns: [
                {
                    match: "\\\\(\\h{1,6}|.)",
                    name: "constant.character.escape.scss"
                },
                {
                    include: "#interpolation"
                }
            ]
        },
        string_single: {
            begin: "'",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.string.begin.scss"
                }
            },
            end: "'",
            endCaptures: {
                0: {
                    name: "punctuation.definition.string.end.scss"
                }
            },
            name: "string.quoted.single.scss",
            patterns: [
                {
                    match: "\\\\(\\h{1,6}|.)",
                    name: "constant.character.escape.scss"
                },
                {
                    include: "#interpolation"
                }
            ]
        },
        tag_parent_reference: {
            match: "&",
            name: "entity.name.tag.reference.scss"
        },
        tag_wildcard: {
            match: "\\*",
            name: "entity.name.tag.wildcard.scss"
        },
        variable: {
            patterns: [
                {
                    include: "#variables"
                },
                {
                    include: "#interpolation"
                }
            ]
        },
        variable_setting: {
            begin: "(?=\\$[\\w-]+\\s*:)",
            contentName: "meta.definition.variable.scss",
            end: ";",
            endCaptures: {
                0: {
                    name: "punctuation.terminator.rule.scss"
                }
            },
            patterns: [
                {
                    match: "\\$[\\w-]+(?=\\s*:)",
                    name: "variable.scss"
                },
                {
                    begin: ":",
                    beginCaptures: {
                        0: {
                            name: "punctuation.separator.key-value.scss"
                        }
                    },
                    end: "(?=;)",
                    patterns: [
                        {
                            include: "#comment_docblock"
                        },
                        {
                            include: "#comment_block"
                        },
                        {
                            include: "#comment_line"
                        },
                        {
                            include: "#map"
                        },
                        {
                            include: "#property_values"
                        },
                        {
                            include: "#variable"
                        },
                        {
                            match: ",",
                            name: "punctuation.separator.delimiter.scss"
                        }
                    ]
                }
            ]
        },
        variables: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "variable.scss"
                        },
                        2: {
                            name: "punctuation.access.module.scss"
                        },
                        3: {
                            name: "variable.scss"
                        }
                    },
                    match: "\\b([\\w-]+)(\\.)(\\$[\\w-]+)\\b"
                },
                {
                    match: "(\\$|\\-\\-)[A-Za-z0-9_-]+\\b",
                    name: "variable.scss"
                }
            ]
        }
    },
    scopeName: "source.css.scss",
    embeddedLangs: [
        "css"
    ]
});
var s = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$css$2d$CAzixsid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    n
];
;
}}),
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/postcss-Cz2vjx_4.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>t)
});
const e = Object.freeze({
    displayName: "PostCSS",
    fileTypes: [
        "pcss",
        "postcss"
    ],
    foldingStartMarker: "/\\*|^#|^\\*|^\\b|^\\.",
    foldingStopMarker: "\\*/|^\\s*$",
    name: "postcss",
    patterns: [
        {
            begin: "/\\*",
            end: "\\*/",
            name: "comment.block.postcss",
            patterns: [
                {
                    include: "#comment-tag"
                }
            ]
        },
        {
            include: "#double-slash"
        },
        {
            include: "#double-quoted"
        },
        {
            include: "#single-quoted"
        },
        {
            include: "#interpolation"
        },
        {
            include: "#placeholder-selector"
        },
        {
            include: "#variable"
        },
        {
            include: "#variable-root-css"
        },
        {
            include: "#numeric"
        },
        {
            include: "#unit"
        },
        {
            include: "#flag"
        },
        {
            include: "#dotdotdot"
        },
        {
            begin: "@include",
            captures: {
                0: {
                    name: "keyword.control.at-rule.css.postcss"
                }
            },
            end: "(?=\\n|\\(|{|;)",
            name: "support.function.name.postcss.library"
        },
        {
            begin: "@mixin|@function",
            captures: {
                0: {
                    name: "keyword.control.at-rule.css.postcss"
                }
            },
            end: "$\\n?|(?=\\(|{)",
            name: "support.function.name.postcss.no-completions",
            patterns: [
                {
                    match: "[\\w-]+",
                    name: "entity.name.function"
                }
            ]
        },
        {
            match: "(?<=@import)\\s[\\w/.*-]+",
            name: "string.quoted.double.css.postcss"
        },
        {
            begin: "@",
            end: "$\\n?|\\s(?!(all|braille|embossed|handheld|print|projection|screen|speech|tty|tv|if|only|not)(\\s|,))|(?=;)",
            name: "keyword.control.at-rule.css.postcss"
        },
        {
            begin: "#",
            end: "$\\n?|(?=\\s|,|;|\\(|\\)|\\.|\\[|{|>)",
            name: "entity.other.attribute-name.id.css.postcss",
            patterns: [
                {
                    include: "#interpolation"
                },
                {
                    include: "#pseudo-class"
                }
            ]
        },
        {
            begin: "\\.|(?<=&)(-|_)",
            end: "$\\n?|(?=\\s|,|;|\\(|\\)|\\[|{|>)",
            name: "entity.other.attribute-name.class.css.postcss",
            patterns: [
                {
                    include: "#interpolation"
                },
                {
                    include: "#pseudo-class"
                }
            ]
        },
        {
            begin: "\\[",
            end: "\\]",
            name: "entity.other.attribute-selector.postcss",
            patterns: [
                {
                    include: "#double-quoted"
                },
                {
                    include: "#single-quoted"
                },
                {
                    match: "\\^|\\$|\\*|~",
                    name: "keyword.other.regex.postcss"
                }
            ]
        },
        {
            match: "(?<=\\]|\\)|not\\(|\\*|>|>\\s):[a-z:-]+|(::|:-)[a-z:-]+",
            name: "entity.other.attribute-name.pseudo-class.css.postcss"
        },
        {
            begin: ":",
            end: "$\\n?|(?=;|\\s\\(|and\\(|{|}|\\),)",
            name: "meta.property-list.css.postcss",
            patterns: [
                {
                    include: "#double-slash"
                },
                {
                    include: "#double-quoted"
                },
                {
                    include: "#single-quoted"
                },
                {
                    include: "#interpolation"
                },
                {
                    include: "#variable"
                },
                {
                    include: "#rgb-value"
                },
                {
                    include: "#numeric"
                },
                {
                    include: "#unit"
                },
                {
                    include: "#flag"
                },
                {
                    include: "#function"
                },
                {
                    include: "#function-content"
                },
                {
                    include: "#function-content-var"
                },
                {
                    include: "#operator"
                },
                {
                    include: "#parent-selector"
                },
                {
                    include: "#property-value"
                }
            ]
        },
        {
            include: "#rgb-value"
        },
        {
            include: "#function"
        },
        {
            include: "#function-content"
        },
        {
            begin: "(?<!\\-|\\()\\b(a|abbr|acronym|address|applet|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|datalist|dd|del|details|dfn|dialog|div|dl|dt|em|embed|eventsource|fieldset|figure|figcaption|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|label|legend|li|link|map|mark|menu|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|picture|pre|progress|q|samp|script|section|select|small|source|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video|main|svg|rect|ruby|center|circle|ellipse|line|polyline|polygon|path|text|u|x)\\b(?!-|\\)|:\\s)|&",
            end: "(?=\\s|,|;|\\(|\\)|\\.|\\[|{|>|-|_)",
            name: "entity.name.tag.css.postcss.symbol",
            patterns: [
                {
                    include: "#interpolation"
                },
                {
                    include: "#pseudo-class"
                }
            ]
        },
        {
            include: "#operator"
        },
        {
            match: "[a-z-]+((?=:|#{))",
            name: "support.type.property-name.css.postcss"
        },
        {
            include: "#reserved-words"
        },
        {
            include: "#property-value"
        }
    ],
    repository: {
        "comment-tag": {
            begin: "{{",
            end: "}}",
            name: "comment.tags.postcss",
            patterns: [
                {
                    match: "[\\w-]+",
                    name: "comment.tag.postcss"
                }
            ]
        },
        dotdotdot: {
            match: "\\.{3}",
            name: "variable.other"
        },
        "double-quoted": {
            begin: '"',
            end: '"',
            name: "string.quoted.double.css.postcss",
            patterns: [
                {
                    include: "#quoted-interpolation"
                }
            ]
        },
        "double-slash": {
            begin: "//",
            end: "$",
            name: "comment.line.postcss",
            patterns: [
                {
                    include: "#comment-tag"
                }
            ]
        },
        flag: {
            match: "!(important|default|optional|global)",
            name: "keyword.other.important.css.postcss"
        },
        function: {
            match: "(?<=[\\s|\\(|,|:])(?!url|format|attr)[\\w-][\\w-]*(?=\\()",
            name: "support.function.name.postcss"
        },
        "function-content": {
            match: "(?<=url\\(|format\\(|attr\\().+?(?=\\))",
            name: "string.quoted.double.css.postcss"
        },
        "function-content-var": {
            match: "(?<=var\\()[\\w-]+(?=\\))",
            name: "variable.parameter.postcss"
        },
        interpolation: {
            begin: "#{",
            end: "}",
            name: "support.function.interpolation.postcss",
            patterns: [
                {
                    include: "#variable"
                },
                {
                    include: "#numeric"
                },
                {
                    include: "#operator"
                },
                {
                    include: "#unit"
                },
                {
                    include: "#double-quoted"
                },
                {
                    include: "#single-quoted"
                }
            ]
        },
        numeric: {
            match: "(-|\\.)?[0-9]+(\\.[0-9]+)?",
            name: "constant.numeric.css.postcss"
        },
        operator: {
            match: "\\+|\\s-\\s|\\s-(?=\\$)|(?<=\\()-(?=\\$)|\\s-(?=\\()|\\*|/|%|=|!|<|>|~",
            name: "keyword.operator.postcss"
        },
        "parent-selector": {
            match: "&",
            name: "entity.name.tag.css.postcss"
        },
        "placeholder-selector": {
            begin: "(?<!\\d)%(?!\\d)",
            end: "$\\n?|\\s|(?=;|{)",
            name: "entity.other.attribute-name.placeholder-selector.postcss"
        },
        "property-value": {
            match: "[\\w-]+",
            name: "meta.property-value.css.postcss, support.constant.property-value.css.postcss"
        },
        "pseudo-class": {
            match: ":[a-z:-]+",
            name: "entity.other.attribute-name.pseudo-class.css.postcss"
        },
        "quoted-interpolation": {
            begin: "#{",
            end: "}",
            name: "support.function.interpolation.postcss",
            patterns: [
                {
                    include: "#variable"
                },
                {
                    include: "#numeric"
                },
                {
                    include: "#operator"
                },
                {
                    include: "#unit"
                }
            ]
        },
        "reserved-words": {
            match: "\\b(false|from|in|not|null|through|to|true)\\b",
            name: "support.type.property-name.css.postcss"
        },
        "rgb-value": {
            match: "(#)([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\\b",
            name: "constant.other.color.rgb-value.css.postcss"
        },
        "single-quoted": {
            begin: "'",
            end: "'",
            name: "string.quoted.single.css.postcss",
            patterns: [
                {
                    include: "#quoted-interpolation"
                }
            ]
        },
        unit: {
            match: "(?<=[\\d]|})(ch|cm|deg|dpcm|dpi|dppx|em|ex|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vw|%)",
            name: "keyword.other.unit.css.postcss"
        },
        variable: {
            match: "\\$[\\w-]+",
            name: "variable.parameter.postcss"
        },
        "variable-root-css": {
            match: "(?<!&)--[\\w-]+",
            name: "variable.parameter.postcss"
        }
    },
    scopeName: "source.css.postcss"
});
var t = [
    e
];
;
}}),
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/pug-E8rs5QQH.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>b)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$javascript$2d$DYrC$2d$pEL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/javascript-DYrC-pEL.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$css$2d$CAzixsid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/css-CAzixsid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$sass$2d$LqXmC1Fh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/sass-LqXmC1Fh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$scss$2d$DjxgF7f7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/scss-DjxgF7f7.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$stylus$2d$CAHdVuhm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/stylus-CAHdVuhm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$coffee$2d$BVFTsnP5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/coffee-BVFTsnP5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$html$2d$CUoAo5SS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/html-CUoAo5SS.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const c = Object.freeze({
    displayName: "Pug",
    name: "pug",
    patterns: [
        {
            comment: "Doctype declaration.",
            match: "^(!!!|doctype)(\\s*[a-zA-Z0-9-_]+)?",
            name: "meta.tag.sgml.doctype.html"
        },
        {
            begin: "^(\\s*)//-",
            comment: "Unbuffered (pug-only) comments.",
            end: "^(?!(\\1\\s)|\\s*$)",
            name: "comment.unbuffered.block.pug"
        },
        {
            begin: "^(\\s*)//",
            comment: "Buffered (html) comments.",
            end: "^(?!(\\1\\s)|\\s*$)",
            name: "string.comment.buffered.block.pug",
            patterns: [
                {
                    captures: {
                        1: {
                            name: "invalid.illegal.comment.comment.block.pug"
                        }
                    },
                    comment: "Buffered comments inside buffered comments will generate invalid html.",
                    match: "^\\s*(//)(?!-)",
                    name: "string.comment.buffered.block.pug"
                }
            ]
        },
        {
            begin: "<!--",
            end: "--\\s*>",
            name: "comment.unbuffered.block.pug",
            patterns: [
                {
                    match: "--",
                    name: "invalid.illegal.comment.comment.block.pug"
                }
            ]
        },
        {
            begin: "^(\\s*)-$",
            comment: "Unbuffered code block.",
            end: "^(?!(\\1\\s)|\\s*$)",
            name: "source.js",
            patterns: [
                {
                    include: "source.js"
                }
            ]
        },
        {
            begin: "^(\\s*)(script)((\\.$)|(?=[^\\n]*((text|application)/javascript|module).*\\.$))",
            beginCaptures: {
                2: {
                    name: "entity.name.tag.pug"
                }
            },
            comment: "Script tag with JavaScript code.",
            end: "^(?!(\\1\\s)|\\s*$)",
            name: "meta.tag.other",
            patterns: [
                {
                    begin: "\\G(?=\\()",
                    end: "$",
                    patterns: [
                        {
                            include: "#tag_attributes"
                        }
                    ]
                },
                {
                    begin: "\\G(?=[.#])",
                    end: "$",
                    patterns: [
                        {
                            include: "#complete_tag"
                        }
                    ]
                },
                {
                    include: "source.js"
                }
            ]
        },
        {
            begin: "^(\\s*)(style)((\\.$)|(?=[.#(].*\\.$))",
            beginCaptures: {
                2: {
                    name: "entity.name.tag.pug"
                }
            },
            comment: "Style tag with CSS code.",
            end: "^(?!(\\1\\s)|\\s*$)",
            name: "meta.tag.other",
            patterns: [
                {
                    begin: "\\G(?=\\()",
                    end: "$",
                    patterns: [
                        {
                            include: "#tag_attributes"
                        }
                    ]
                },
                {
                    begin: "\\G(?=[.#])",
                    end: "$",
                    patterns: [
                        {
                            include: "#complete_tag"
                        }
                    ]
                },
                {
                    include: "source.css"
                }
            ]
        },
        {
            begin: "^(\\s*):(sass)(?=\\(|$)",
            beginCaptures: {
                2: {
                    name: "constant.language.name.sass.filter.pug"
                }
            },
            end: "^(?!(\\1\\s)|\\s*$)",
            name: "source.sass.filter.pug",
            patterns: [
                {
                    include: "#tag_attributes"
                },
                {
                    include: "source.sass"
                }
            ]
        },
        {
            begin: "^(\\s*):(scss)(?=\\(|$)",
            beginCaptures: {
                2: {
                    name: "constant.language.name.scss.filter.pug"
                }
            },
            end: "^(?!(\\1\\s)|\\s*$)",
            name: "source.css.scss.filter.pug",
            patterns: [
                {
                    include: "#tag_attributes"
                },
                {
                    include: "source.css.scss"
                }
            ]
        },
        {
            begin: "^(\\s*):(less)(?=\\(|$)",
            beginCaptures: {
                2: {
                    name: "constant.language.name.less.filter.pug"
                }
            },
            end: "^(?!(\\1\\s)|\\s*$)",
            name: "source.less.filter.pug",
            patterns: [
                {
                    include: "#tag_attributes"
                },
                {
                    include: "source.less"
                }
            ]
        },
        {
            begin: "^(\\s*):(stylus)(?=\\(|$)",
            beginCaptures: {
                2: {
                    name: "constant.language.name.stylus.filter.pug"
                }
            },
            end: "^(?!(\\1\\s)|\\s*$)",
            patterns: [
                {
                    include: "#tag_attributes"
                },
                {
                    include: "source.stylus"
                }
            ]
        },
        {
            begin: "^(\\s*):(coffee(-?script)?)(?=\\(|$)",
            beginCaptures: {
                2: {
                    name: "constant.language.name.coffeescript.filter.pug"
                }
            },
            end: "^(?!(\\1\\s)|\\s*$)",
            name: "source.coffeescript.filter.pug",
            patterns: [
                {
                    include: "#tag_attributes"
                },
                {
                    include: "source.coffee"
                }
            ]
        },
        {
            begin: "^(\\s*):(uglify-js)(?=\\(|$)",
            beginCaptures: {
                2: {
                    name: "constant.language.name.js.filter.pug"
                }
            },
            end: "^(?!(\\1\\s)|\\s*$)",
            name: "source.js.filter.pug",
            patterns: [
                {
                    include: "#tag_attributes"
                },
                {
                    include: "source.js"
                }
            ]
        },
        {
            begin: "^(\\s*)((:(?=.))|(:$))",
            beginCaptures: {
                4: {
                    name: "invalid.illegal.empty.generic.filter.pug"
                }
            },
            comment: "Generic Pug filter.",
            end: "^(?!(\\1\\s)|\\s*$)",
            patterns: [
                {
                    begin: "\\G(?<=:)(?=.)",
                    end: "$",
                    name: "name.generic.filter.pug",
                    patterns: [
                        {
                            match: "\\G\\(",
                            name: "invalid.illegal.name.generic.filter.pug"
                        },
                        {
                            match: "[\\w-]",
                            name: "constant.language.name.generic.filter.pug"
                        },
                        {
                            include: "#tag_attributes"
                        },
                        {
                            match: "\\W",
                            name: "invalid.illegal.name.generic.filter.pug"
                        }
                    ]
                }
            ]
        },
        {
            begin: `^(\\s*)(?:(?=\\.$)|(?:(?=[\\w.#].*?\\.$)(?=(?:(?:(?:(?:(?:#[\\w-]+)|(?:\\.[\\w-]+))|(?:(?:[#!]\\{[^}]*\\})|(?:\\w(?:(?:[\\w:-]+[\\w-])|(?:[\\w-]*)))))(?:(?:#[\\w-]+)|(?:\\.[\\w-]+)|(?:\\((?:[^()\\'\\"]*(?:(?:\\'(?:[^\\']|(?:(?<!\\\\)\\\\\\'))*\\')|(?:\\"(?:[^\\"]|(?:(?<!\\\\)\\\\\\"))*\\")))*[^()]*\\))*)*)(?:(?:(?::\\s+)|(?<=\\)))(?:(?:(?:(?:#[\\w-]+)|(?:\\.[\\w-]+))|(?:(?:[#!]\\{[^}]*\\})|(?:\\w(?:(?:[\\w:-]+[\\w-])|(?:[\\w-]*)))))(?:(?:#[\\w-]+)|(?:\\.[\\w-]+)|(?:\\((?:[^()\\'\\"]*(?:(?:\\'(?:[^\\']|(?:(?<!\\\\)\\\\\\'))*\\')|(?:\\"(?:[^\\"]|(?:(?<!\\\\)\\\\\\"))*\\")))*[^()]*\\))*)*))*)\\.$)(?:(?:(#[\\w-]+)|(\\.[\\w-]+))|((?:[#!]\\{[^}]*\\})|(?:\\w(?:(?:[\\w:-]+[\\w-])|(?:[\\w-]*)))))))`,
            beginCaptures: {
                2: {
                    name: "meta.selector.css entity.other.attribute-name.id.css.pug"
                },
                3: {
                    name: "meta.selector.css entity.other.attribute-name.class.css.pug"
                },
                4: {
                    name: "meta.tag.other entity.name.tag.pug"
                }
            },
            comment: "Generated from dot_block_tag.py",
            end: "^(?!(\\1\\s)|\\s*$)",
            patterns: [
                {
                    match: "\\.$",
                    name: "storage.type.function.pug.dot-block-dot"
                },
                {
                    include: "#tag_attributes"
                },
                {
                    include: "#complete_tag"
                },
                {
                    begin: "^(?=.)",
                    end: "$",
                    name: "text.block.pug",
                    patterns: [
                        {
                            include: "#inline_pug"
                        },
                        {
                            include: "#embedded_html"
                        },
                        {
                            include: "#html_entity"
                        },
                        {
                            include: "#interpolated_value"
                        },
                        {
                            include: "#interpolated_error"
                        }
                    ]
                }
            ]
        },
        {
            begin: "^\\s*",
            comment: "All constructs that generally span a single line starting with any number of white-spaces.",
            end: "$",
            patterns: [
                {
                    include: "#inline_pug"
                },
                {
                    include: "#blocks_and_includes"
                },
                {
                    include: "#unbuffered_code"
                },
                {
                    include: "#mixin_definition"
                },
                {
                    include: "#mixin_call"
                },
                {
                    include: "#flow_control"
                },
                {
                    include: "#flow_control_each"
                },
                {
                    include: "#case_conds"
                },
                {
                    begin: "\\|",
                    comment: "Tag pipe text line.",
                    end: "$",
                    name: "text.block.pipe.pug",
                    patterns: [
                        {
                            include: "#inline_pug"
                        },
                        {
                            include: "#embedded_html"
                        },
                        {
                            include: "#html_entity"
                        },
                        {
                            include: "#interpolated_value"
                        },
                        {
                            include: "#interpolated_error"
                        }
                    ]
                },
                {
                    include: "#printed_expression"
                },
                {
                    begin: "\\G(?=(#[^\\{\\w-])|[^\\w.#])",
                    comment: "Line starting with characters incompatible with tag name/id/class is standalone text.",
                    end: "$",
                    patterns: [
                        {
                            begin: "</?(?=[!#])",
                            end: ">|$",
                            patterns: [
                                {
                                    include: "#inline_pug"
                                },
                                {
                                    include: "#interpolated_value"
                                },
                                {
                                    include: "#interpolated_error"
                                }
                            ]
                        },
                        {
                            include: "#inline_pug"
                        },
                        {
                            include: "#embedded_html"
                        },
                        {
                            include: "#html_entity"
                        },
                        {
                            include: "#interpolated_value"
                        },
                        {
                            include: "#interpolated_error"
                        }
                    ]
                },
                {
                    include: "#complete_tag"
                }
            ]
        }
    ],
    repository: {
        babel_parens: {
            begin: "\\(",
            end: "\\)|(({\\s*)?$)",
            patterns: [
                {
                    include: "#babel_parens"
                },
                {
                    include: "source.js"
                }
            ]
        },
        blocks_and_includes: {
            captures: {
                1: {
                    name: "storage.type.import.include.pug"
                },
                4: {
                    name: "variable.control.import.include.pug"
                }
            },
            comment: "Template blocks and includes.",
            match: "(extends|include|yield|append|prepend|block( (append|prepend))?)\\s+(.*)$",
            name: "meta.first-class.pug"
        },
        case_conds: {
            begin: "(default|when)((\\s+|(?=:))|$)",
            captures: {
                1: {
                    name: "storage.type.function.pug"
                }
            },
            comment: "Pug case conditionals.",
            end: "$",
            name: "meta.control.flow.pug",
            patterns: [
                {
                    begin: "\\G(?!:)",
                    end: "(?=:\\s+)|$",
                    name: "js.embedded.control.flow.pug",
                    patterns: [
                        {
                            include: "#case_when_paren"
                        },
                        {
                            include: "source.js"
                        }
                    ]
                },
                {
                    begin: ":\\s+",
                    end: "$",
                    name: "tag.case.control.flow.pug",
                    patterns: [
                        {
                            include: "#complete_tag"
                        }
                    ]
                }
            ]
        },
        case_when_paren: {
            begin: "\\(",
            end: "\\)",
            name: "js.when.control.flow.pug",
            patterns: [
                {
                    include: "#case_when_paren"
                },
                {
                    match: ":",
                    name: "invalid.illegal.name.tag.pug"
                },
                {
                    include: "source.js"
                }
            ]
        },
        complete_tag: {
            begin: "(?=[\\w.#])|(:\\s*)",
            end: "(\\.?$)|(?=:.)",
            endCaptures: {
                1: {
                    name: "storage.type.function.pug.dot-block-dot"
                }
            },
            patterns: [
                {
                    include: "#blocks_and_includes"
                },
                {
                    include: "#unbuffered_code"
                },
                {
                    include: "#mixin_call"
                },
                {
                    include: "#flow_control"
                },
                {
                    include: "#flow_control_each"
                },
                {
                    match: "(?<=:)\\w.*$",
                    name: "invalid.illegal.name.tag.pug"
                },
                {
                    include: "#tag_name"
                },
                {
                    include: "#tag_id"
                },
                {
                    include: "#tag_classes"
                },
                {
                    include: "#tag_attributes"
                },
                {
                    include: "#tag_mixin_attributes"
                },
                {
                    captures: {
                        2: {
                            name: "invalid.illegal.end.tag.pug"
                        },
                        4: {
                            name: "invalid.illegal.end.tag.pug"
                        }
                    },
                    match: "((\\.)\\s+$)|((:)\\s*$)"
                },
                {
                    include: "#printed_expression"
                },
                {
                    include: "#tag_text"
                }
            ]
        },
        embedded_html: {
            begin: "(?=<[^>]*>)",
            end: "$|(?=>)",
            name: "html",
            patterns: [
                {
                    include: "text.html.basic"
                },
                {
                    include: "#interpolated_value"
                },
                {
                    include: "#interpolated_error"
                }
            ]
        },
        flow_control: {
            begin: "(for|if|else if|else|until|while|unless|case)(\\s+|$)",
            captures: {
                1: {
                    name: "storage.type.function.pug"
                }
            },
            comment: "Pug control flow.",
            end: "$",
            name: "meta.control.flow.pug",
            patterns: [
                {
                    begin: "",
                    end: "$",
                    name: "js.embedded.control.flow.pug",
                    patterns: [
                        {
                            include: "source.js"
                        }
                    ]
                }
            ]
        },
        flow_control_each: {
            begin: "(each)(\\s+|$)",
            captures: {
                1: {
                    name: "storage.type.function.pug"
                }
            },
            end: "$",
            name: "meta.control.flow.pug.each",
            patterns: [
                {
                    match: "([\\w$_]+)(?:\\s*,\\s*([\\w$_]+))?",
                    name: "variable.other.pug.each-var"
                },
                {
                    begin: "",
                    end: "$",
                    name: "js.embedded.control.flow.pug",
                    patterns: [
                        {
                            include: "source.js"
                        }
                    ]
                }
            ]
        },
        html_entity: {
            patterns: [
                {
                    match: "(&)([a-zA-Z0-9]+|#[0-9]+|#x[0-9a-fA-F]+)(;)",
                    name: "constant.character.entity.html.text.pug"
                },
                {
                    match: "[<>&]",
                    name: "invalid.illegal.html_entity.text.pug"
                }
            ]
        },
        inline_pug: {
            begin: "(?<!\\\\)(#\\[)",
            captures: {
                1: {
                    name: "entity.name.function.pug"
                },
                2: {
                    name: "entity.name.function.pug"
                }
            },
            end: "(\\])",
            name: "inline.pug",
            patterns: [
                {
                    include: "#inline_pug"
                },
                {
                    include: "#mixin_call"
                },
                {
                    begin: "(?<!\\])(?=[\\w.#])|(:\\s*)",
                    end: "(?=\\]|(:.)|=|\\s)",
                    name: "tag.inline.pug",
                    patterns: [
                        {
                            include: "#tag_name"
                        },
                        {
                            include: "#tag_id"
                        },
                        {
                            include: "#tag_classes"
                        },
                        {
                            include: "#tag_attributes"
                        },
                        {
                            include: "#tag_mixin_attributes"
                        },
                        {
                            include: "#inline_pug"
                        },
                        {
                            match: "\\[",
                            name: "invalid.illegal.tag.pug"
                        }
                    ]
                },
                {
                    include: "#unbuffered_code"
                },
                {
                    include: "#printed_expression"
                },
                {
                    match: "\\[",
                    name: "invalid.illegal.tag.pug"
                },
                {
                    include: "#inline_pug_text"
                }
            ]
        },
        inline_pug_text: {
            begin: "",
            end: "(?=\\])",
            patterns: [
                {
                    begin: "\\[",
                    end: "\\]",
                    patterns: [
                        {
                            include: "#inline_pug_text"
                        }
                    ]
                },
                {
                    include: "#inline_pug"
                },
                {
                    include: "#embedded_html"
                },
                {
                    include: "#html_entity"
                },
                {
                    include: "#interpolated_value"
                },
                {
                    include: "#interpolated_error"
                }
            ]
        },
        interpolated_error: {
            match: "(?<!\\\\)[#!]\\{(?=[^}]*$)",
            name: "invalid.illegal.tag.pug"
        },
        interpolated_value: {
            begin: "(?<!\\\\)[#!]\\{(?=.*?\\})",
            end: "\\}",
            name: "string.interpolated.pug",
            patterns: [
                {
                    match: "{",
                    name: "invalid.illegal.tag.pug"
                },
                {
                    include: "source.js"
                }
            ]
        },
        js_braces: {
            begin: "\\{",
            end: "\\}",
            patterns: [
                {
                    include: "#js_braces"
                },
                {
                    include: "source.js"
                }
            ]
        },
        js_brackets: {
            begin: "\\[",
            end: "\\]",
            patterns: [
                {
                    include: "#js_brackets"
                },
                {
                    include: "source.js"
                }
            ]
        },
        js_parens: {
            begin: "\\(",
            end: "\\)",
            patterns: [
                {
                    include: "#js_parens"
                },
                {
                    include: "source.js"
                }
            ]
        },
        mixin_call: {
            begin: "((?:mixin\\s+)|\\+)([\\w-]+)",
            beginCaptures: {
                1: {
                    name: "storage.type.function.pug"
                },
                2: {
                    name: "meta.tag.other entity.name.function.pug"
                }
            },
            end: "(?!\\()|$",
            patterns: [
                {
                    begin: "(?<!\\))\\(",
                    end: "\\)",
                    name: "args.mixin.pug",
                    patterns: [
                        {
                            include: "#js_parens"
                        },
                        {
                            captures: {
                                1: {
                                    name: "meta.tag.other entity.other.attribute-name.tag.pug"
                                }
                            },
                            match: "([^\\s(),=/]+)\\s*=\\s*"
                        },
                        {
                            include: "source.js"
                        }
                    ]
                },
                {
                    include: "#tag_attributes"
                }
            ]
        },
        mixin_definition: {
            captures: {
                1: {
                    name: "storage.type.function.pug"
                },
                2: {
                    name: "meta.tag.other entity.name.function.pug"
                },
                3: {
                    name: "punctuation.definition.parameters.begin.js"
                },
                4: {
                    name: "variable.parameter.function.js"
                },
                5: {
                    name: "punctuation.definition.parameters.begin.js"
                }
            },
            match: "(mixin\\s+)([\\w-]+)(?:(\\()\\s*((?:[a-zA-Z_]\\w*\\s*)(?:,\\s*[a-zA-Z_]\\w*\\s*)*)(\\)))?$"
        },
        printed_expression: {
            begin: "(!?\\=)\\s*",
            captures: {
                1: {
                    name: "constant"
                }
            },
            end: "(?=\\])|$",
            name: "source.js",
            patterns: [
                {
                    include: "#js_brackets"
                },
                {
                    include: "source.js"
                }
            ]
        },
        tag_attribute_name: {
            captures: {
                1: {
                    name: "entity.other.attribute-name.tag.pug"
                }
            },
            match: "([^\\s(),=/!]+)\\s*"
        },
        tag_attribute_name_paren: {
            begin: "\\(\\s*",
            end: "\\)",
            name: "entity.other.attribute-name.tag.pug",
            patterns: [
                {
                    include: "#tag_attribute_name_paren"
                },
                {
                    include: "#tag_attribute_name"
                }
            ]
        },
        tag_attributes: {
            begin: "(\\(\\s*)",
            captures: {
                1: {
                    name: "constant.name.attribute.tag.pug"
                }
            },
            end: "(\\))",
            name: "meta.tag.other",
            patterns: [
                {
                    include: "#tag_attribute_name_paren"
                },
                {
                    include: "#tag_attribute_name"
                },
                {
                    match: "!(?!=)",
                    name: "invalid.illegal.tag.pug"
                },
                {
                    begin: "=\\s*",
                    end: "$|(?=,|(?:\\s+[^!%&*\\-+~|<>?/])|\\))",
                    name: "attribute_value",
                    patterns: [
                        {
                            include: "#js_parens"
                        },
                        {
                            include: "#js_brackets"
                        },
                        {
                            include: "#js_braces"
                        },
                        {
                            include: "source.js"
                        }
                    ]
                },
                {
                    begin: "(?<=[%&*\\-+~|<>:?/])\\s+",
                    end: "$|(?=,|(?:\\s+[^!%&*\\-+~|<>?/])|\\))",
                    name: "attribute_value2",
                    patterns: [
                        {
                            include: "#js_parens"
                        },
                        {
                            include: "#js_brackets"
                        },
                        {
                            include: "#js_braces"
                        },
                        {
                            include: "source.js"
                        }
                    ]
                }
            ]
        },
        tag_classes: {
            captures: {
                1: {
                    name: "invalid.illegal.tag.pug"
                }
            },
            match: "\\.([^\\w-])?[\\w-]*",
            name: "meta.selector.css entity.other.attribute-name.class.css.pug"
        },
        tag_id: {
            match: "#[\\w-]+",
            name: "meta.selector.css entity.other.attribute-name.id.css.pug"
        },
        tag_mixin_attributes: {
            begin: "(&attributes\\()",
            captures: {
                1: {
                    name: "entity.name.function.pug"
                }
            },
            end: "(\\))",
            name: "meta.tag.other",
            patterns: [
                {
                    match: "attributes(?=\\))",
                    name: "storage.type.keyword.pug"
                },
                {
                    include: "source.js"
                }
            ]
        },
        tag_name: {
            begin: "([#!]\\{(?=.*?\\}))|(\\w(([\\w:-]+[\\w-])|([\\w-]*)))",
            end: "(\\G(?<!\\5[^\\w-]))|\\}|$",
            name: "meta.tag.other entity.name.tag.pug",
            patterns: [
                {
                    begin: "\\G(?<=\\{)",
                    end: "(?=\\})",
                    name: "meta.tag.other entity.name.tag.pug",
                    patterns: [
                        {
                            match: "{",
                            name: "invalid.illegal.tag.pug"
                        },
                        {
                            include: "source.js"
                        }
                    ]
                }
            ]
        },
        tag_text: {
            begin: "(?=.)",
            end: "$",
            patterns: [
                {
                    include: "#inline_pug"
                },
                {
                    include: "#embedded_html"
                },
                {
                    include: "#html_entity"
                },
                {
                    include: "#interpolated_value"
                },
                {
                    include: "#interpolated_error"
                }
            ]
        },
        unbuffered_code: {
            begin: "(-|(([a-zA-Z0-9_]+)\\s+=))",
            beginCaptures: {
                3: {
                    name: "variable.parameter.javascript.embedded.pug"
                }
            },
            comment: "name = function() {}",
            end: "(?=\\])|(({\\s*)?$)",
            name: "source.js",
            patterns: [
                {
                    include: "#js_brackets"
                },
                {
                    include: "#babel_parens"
                },
                {
                    include: "source.js"
                }
            ]
        }
    },
    scopeName: "text.pug",
    embeddedLangs: [
        "javascript",
        "css",
        "sass",
        "scss",
        "stylus",
        "coffee",
        "html"
    ],
    aliases: [
        "jade"
    ]
});
var b = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$javascript$2d$DYrC$2d$pEL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$css$2d$CAzixsid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$sass$2d$LqXmC1Fh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$scss$2d$DjxgF7f7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$stylus$2d$CAHdVuhm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$coffee$2d$BVFTsnP5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$html$2d$CUoAo5SS$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    c
];
;
}}),
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/markdown-BU4nyQnk.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>n)
});
const e = Object.freeze({
    displayName: "Markdown",
    name: "markdown",
    patterns: [
        {
            include: "#frontMatter"
        },
        {
            include: "#block"
        }
    ],
    repository: {
        ampersand: {
            comment: "Markdown will convert this for us. We match it so that the HTML grammar will not mark it up as invalid.",
            match: "&(?!([a-zA-Z0-9]+|#[0-9]+|#x[0-9a-fA-F]+);)",
            name: "meta.other.valid-ampersand.markdown"
        },
        block: {
            patterns: [
                {
                    include: "#separator"
                },
                {
                    include: "#heading"
                },
                {
                    include: "#blockquote"
                },
                {
                    include: "#lists"
                },
                {
                    include: "#fenced_code_block"
                },
                {
                    include: "#raw_block"
                },
                {
                    include: "#link-def"
                },
                {
                    include: "#html"
                },
                {
                    include: "#table"
                },
                {
                    include: "#paragraph"
                }
            ]
        },
        blockquote: {
            begin: "(^|\\G)[ ]{0,3}(>) ?",
            captures: {
                2: {
                    name: "punctuation.definition.quote.begin.markdown"
                }
            },
            name: "markup.quote.markdown",
            patterns: [
                {
                    include: "#block"
                }
            ],
            while: "(^|\\G)\\s*(>) ?"
        },
        bold: {
            begin: `(?x) (?<open>(\\*\\*(?=\\w)|(?<!\\w)\\*\\*|(?<!\\w)\\b__))(?=\\S) (?=
(
<[^>]*+>
| (?<raw>\`+)([^\`]|(?!(?<!\`)\\k<raw>(?!\`))\`)*+\\k<raw>

| \\\\[\\\\\`*_{}\\[\\]()#.!+\\->]?+
| \\[
(
(?<square>
[^\\[\\]\\\\]
| \\\\.
| \\[ \\g<square>*+ \\]
)*+
\\]
(
(
[ ]?
\\[[^\\]]*+\\]
)
| (
\\(
[ \\t]*+
<?(.*?)>?
[ \\t]*+
(
(?<title>['"])
(.*?)
\\k<title>
)?
\\)
)
)
)
| (?!(?<=\\S)\\k<open>).

)++
(?<=\\S)(?=__\\b|\\*\\*)\\k<open>
)
`,
            captures: {
                1: {
                    name: "punctuation.definition.bold.markdown"
                }
            },
            end: "(?<=\\S)(\\1)",
            name: "markup.bold.markdown",
            patterns: [
                {
                    applyEndPatternLast: 1,
                    begin: "(?=<[^>]*?>)",
                    end: "(?<=>)",
                    patterns: [
                        {
                            include: "text.html.derivative"
                        }
                    ]
                },
                {
                    include: "#escape"
                },
                {
                    include: "#ampersand"
                },
                {
                    include: "#bracket"
                },
                {
                    include: "#raw"
                },
                {
                    include: "#bold"
                },
                {
                    include: "#italic"
                },
                {
                    include: "#image-inline"
                },
                {
                    include: "#link-inline"
                },
                {
                    include: "#link-inet"
                },
                {
                    include: "#link-email"
                },
                {
                    include: "#image-ref"
                },
                {
                    include: "#link-ref-literal"
                },
                {
                    include: "#link-ref"
                },
                {
                    include: "#link-ref-shortcut"
                },
                {
                    include: "#strikethrough"
                }
            ]
        },
        bracket: {
            comment: "Markdown will convert this for us. We match it so that the HTML grammar will not mark it up as invalid.",
            match: "<(?![a-zA-Z/?\\$!])",
            name: "meta.other.valid-bracket.markdown"
        },
        escape: {
            match: "\\\\[-`*_#+.!(){}\\[\\]\\\\>]",
            name: "constant.character.escape.markdown"
        },
        fenced_code_block: {
            patterns: [
                {
                    include: "#fenced_code_block_css"
                },
                {
                    include: "#fenced_code_block_basic"
                },
                {
                    include: "#fenced_code_block_ini"
                },
                {
                    include: "#fenced_code_block_java"
                },
                {
                    include: "#fenced_code_block_lua"
                },
                {
                    include: "#fenced_code_block_makefile"
                },
                {
                    include: "#fenced_code_block_perl"
                },
                {
                    include: "#fenced_code_block_r"
                },
                {
                    include: "#fenced_code_block_ruby"
                },
                {
                    include: "#fenced_code_block_php"
                },
                {
                    include: "#fenced_code_block_sql"
                },
                {
                    include: "#fenced_code_block_vs_net"
                },
                {
                    include: "#fenced_code_block_xml"
                },
                {
                    include: "#fenced_code_block_xsl"
                },
                {
                    include: "#fenced_code_block_yaml"
                },
                {
                    include: "#fenced_code_block_dosbatch"
                },
                {
                    include: "#fenced_code_block_clojure"
                },
                {
                    include: "#fenced_code_block_coffee"
                },
                {
                    include: "#fenced_code_block_c"
                },
                {
                    include: "#fenced_code_block_cpp"
                },
                {
                    include: "#fenced_code_block_diff"
                },
                {
                    include: "#fenced_code_block_dockerfile"
                },
                {
                    include: "#fenced_code_block_git_commit"
                },
                {
                    include: "#fenced_code_block_git_rebase"
                },
                {
                    include: "#fenced_code_block_go"
                },
                {
                    include: "#fenced_code_block_groovy"
                },
                {
                    include: "#fenced_code_block_pug"
                },
                {
                    include: "#fenced_code_block_js"
                },
                {
                    include: "#fenced_code_block_js_regexp"
                },
                {
                    include: "#fenced_code_block_json"
                },
                {
                    include: "#fenced_code_block_jsonc"
                },
                {
                    include: "#fenced_code_block_less"
                },
                {
                    include: "#fenced_code_block_objc"
                },
                {
                    include: "#fenced_code_block_swift"
                },
                {
                    include: "#fenced_code_block_scss"
                },
                {
                    include: "#fenced_code_block_perl6"
                },
                {
                    include: "#fenced_code_block_powershell"
                },
                {
                    include: "#fenced_code_block_python"
                },
                {
                    include: "#fenced_code_block_julia"
                },
                {
                    include: "#fenced_code_block_regexp_python"
                },
                {
                    include: "#fenced_code_block_rust"
                },
                {
                    include: "#fenced_code_block_scala"
                },
                {
                    include: "#fenced_code_block_shell"
                },
                {
                    include: "#fenced_code_block_ts"
                },
                {
                    include: "#fenced_code_block_tsx"
                },
                {
                    include: "#fenced_code_block_csharp"
                },
                {
                    include: "#fenced_code_block_fsharp"
                },
                {
                    include: "#fenced_code_block_dart"
                },
                {
                    include: "#fenced_code_block_handlebars"
                },
                {
                    include: "#fenced_code_block_markdown"
                },
                {
                    include: "#fenced_code_block_log"
                },
                {
                    include: "#fenced_code_block_erlang"
                },
                {
                    include: "#fenced_code_block_elixir"
                },
                {
                    include: "#fenced_code_block_latex"
                },
                {
                    include: "#fenced_code_block_bibtex"
                },
                {
                    include: "#fenced_code_block_twig"
                },
                {
                    include: "#fenced_code_block_unknown"
                }
            ]
        },
        fenced_code_block_basic: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(html|htm|shtml|xhtml|inc|tmpl|tpl)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.html",
                    patterns: [
                        {
                            include: "text.html.basic"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_bibtex: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(bibtex)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.bibtex",
                    patterns: [
                        {
                            include: "text.bibtex"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_c: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(c|h)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.c",
                    patterns: [
                        {
                            include: "source.c"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_clojure: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(clj|cljs|clojure)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.clojure",
                    patterns: [
                        {
                            include: "source.clojure"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_coffee: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(coffee|Cakefile|coffee.erb)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.coffee",
                    patterns: [
                        {
                            include: "source.coffee"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_cpp: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(cpp|c\\+\\+|cxx)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.cpp source.cpp",
                    patterns: [
                        {
                            include: "source.cpp"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_csharp: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(cs|csharp|c#)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.csharp",
                    patterns: [
                        {
                            include: "source.cs"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_css: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(css|css.erb)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.css",
                    patterns: [
                        {
                            include: "source.css"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_dart: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(dart)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.dart",
                    patterns: [
                        {
                            include: "source.dart"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_diff: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(patch|diff|rej)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.diff",
                    patterns: [
                        {
                            include: "source.diff"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_dockerfile: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(dockerfile|Dockerfile)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.dockerfile",
                    patterns: [
                        {
                            include: "source.dockerfile"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_dosbatch: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(bat|batch)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.dosbatch",
                    patterns: [
                        {
                            include: "source.batchfile"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_elixir: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(elixir)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.elixir",
                    patterns: [
                        {
                            include: "source.elixir"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_erlang: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(erlang)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.erlang",
                    patterns: [
                        {
                            include: "source.erlang"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_fsharp: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(fs|fsharp|f#)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.fsharp",
                    patterns: [
                        {
                            include: "source.fsharp"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_git_commit: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(COMMIT_EDITMSG|MERGE_MSG)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.git_commit",
                    patterns: [
                        {
                            include: "text.git-commit"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_git_rebase: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(git-rebase-todo)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.git_rebase",
                    patterns: [
                        {
                            include: "text.git-rebase"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_go: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(go|golang)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.go",
                    patterns: [
                        {
                            include: "source.go"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_groovy: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(groovy|gvy)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.groovy",
                    patterns: [
                        {
                            include: "source.groovy"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_handlebars: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(handlebars|hbs)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.handlebars",
                    patterns: [
                        {
                            include: "text.html.handlebars"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_ini: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(ini|conf)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.ini",
                    patterns: [
                        {
                            include: "source.ini"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_java: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(java|bsh)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.java",
                    patterns: [
                        {
                            include: "source.java"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_js: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(js|jsx|javascript|es6|mjs|cjs|dataviewjs|\\{\\.js.+?\\})((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.javascript",
                    patterns: [
                        {
                            include: "source.js"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_js_regexp: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(regexp)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.js_regexp",
                    patterns: [
                        {
                            include: "source.js.regexp"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_json: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(json|json5|sublime-settings|sublime-menu|sublime-keymap|sublime-mousemap|sublime-theme|sublime-build|sublime-project|sublime-completions)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.json",
                    patterns: [
                        {
                            include: "source.json"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_jsonc: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(jsonc)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.jsonc",
                    patterns: [
                        {
                            include: "source.json.comments"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_julia: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(julia|\\{\\.julia.+?\\})((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.julia",
                    patterns: [
                        {
                            include: "source.julia"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_latex: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(latex|tex)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.latex",
                    patterns: [
                        {
                            include: "text.tex.latex"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_less: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(less)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.less",
                    patterns: [
                        {
                            include: "source.css.less"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_log: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(log)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.log",
                    patterns: [
                        {
                            include: "text.log"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_lua: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(lua)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.lua",
                    patterns: [
                        {
                            include: "source.lua"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_makefile: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(Makefile|makefile|GNUmakefile|OCamlMakefile)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.makefile",
                    patterns: [
                        {
                            include: "source.makefile"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_markdown: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(markdown|md)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.markdown",
                    patterns: [
                        {
                            include: "text.html.markdown"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_objc: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(objectivec|objective-c|mm|objc|obj-c|m|h)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.objc",
                    patterns: [
                        {
                            include: "source.objc"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_perl: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(perl|pl|pm|pod|t|PL|psgi|vcl)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.perl",
                    patterns: [
                        {
                            include: "source.perl"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_perl6: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(perl6|p6|pl6|pm6|nqp)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.perl6",
                    patterns: [
                        {
                            include: "source.perl.6"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_php: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(php|php3|php4|php5|phpt|phtml|aw|ctp)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.php",
                    patterns: [
                        {
                            include: "text.html.basic"
                        },
                        {
                            include: "source.php"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_powershell: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(powershell|ps1|psm1|psd1)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.powershell",
                    patterns: [
                        {
                            include: "source.powershell"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_pug: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(jade|pug)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.pug",
                    patterns: [
                        {
                            include: "text.pug"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_python: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(python|py|py3|rpy|pyw|cpy|SConstruct|Sconstruct|sconstruct|SConscript|gyp|gypi|\\{\\.python.+?\\})((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.python",
                    patterns: [
                        {
                            include: "source.python"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_r: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(R|r|s|S|Rprofile|\\{\\.r.+?\\})((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.r",
                    patterns: [
                        {
                            include: "source.r"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_regexp_python: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(re)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.regexp_python",
                    patterns: [
                        {
                            include: "source.regexp.python"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_ruby: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(ruby|rb|rbx|rjs|Rakefile|rake|cgi|fcgi|gemspec|irbrc|Capfile|ru|prawn|Cheffile|Gemfile|Guardfile|Hobofile|Vagrantfile|Appraisals|Rantfile|Berksfile|Berksfile.lock|Thorfile|Puppetfile)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.ruby",
                    patterns: [
                        {
                            include: "source.ruby"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_rust: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(rust|rs|\\{\\.rust.+?\\})((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.rust",
                    patterns: [
                        {
                            include: "source.rust"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_scala: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(scala|sbt)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.scala",
                    patterns: [
                        {
                            include: "source.scala"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_scss: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(scss)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.scss",
                    patterns: [
                        {
                            include: "source.css.scss"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_shell: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(shell|sh|bash|zsh|bashrc|bash_profile|bash_login|profile|bash_logout|.textmate_init|\\{\\.bash.+?\\})((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.shellscript",
                    patterns: [
                        {
                            include: "source.shell"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_sql: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(sql|ddl|dml)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.sql",
                    patterns: [
                        {
                            include: "source.sql"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_swift: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(swift)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.swift",
                    patterns: [
                        {
                            include: "source.swift"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_ts: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(typescript|ts)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.typescript",
                    patterns: [
                        {
                            include: "source.ts"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_tsx: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(tsx)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.typescriptreact",
                    patterns: [
                        {
                            include: "source.tsx"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_twig: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(twig)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.twig",
                    patterns: [
                        {
                            include: "source.twig"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_unknown: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?=([^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown"
        },
        fenced_code_block_vs_net: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(vb)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.vs_net",
                    patterns: [
                        {
                            include: "source.asp.vb.net"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_xml: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(xml|xsd|tld|jsp|pt|cpt|dtml|rss|opml)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.xml",
                    patterns: [
                        {
                            include: "text.xml"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_xsl: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(xsl|xslt)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.xsl",
                    patterns: [
                        {
                            include: "text.xml.xsl"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        fenced_code_block_yaml: {
            begin: "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(yaml|yml)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
            beginCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                },
                4: {
                    name: "fenced_code.block.language.markdown"
                },
                5: {
                    name: "fenced_code.block.language.attributes.markdown"
                }
            },
            end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
            endCaptures: {
                3: {
                    name: "punctuation.definition.markdown"
                }
            },
            name: "markup.fenced_code.block.markdown",
            patterns: [
                {
                    begin: "(^|\\G)(\\s*)(.*)",
                    contentName: "meta.embedded.block.yaml",
                    patterns: [
                        {
                            include: "source.yaml"
                        }
                    ],
                    while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)"
                }
            ]
        },
        frontMatter: {
            begin: "\\A-{3}\\s*$",
            contentName: "meta.embedded.block.frontmatter",
            end: "(^|\\G)-{3}|\\.{3}\\s*$",
            patterns: [
                {
                    include: "source.yaml"
                }
            ]
        },
        heading: {
            captures: {
                1: {
                    patterns: [
                        {
                            captures: {
                                1: {
                                    name: "punctuation.definition.heading.markdown"
                                },
                                2: {
                                    name: "entity.name.section.markdown",
                                    patterns: [
                                        {
                                            include: "#inline"
                                        },
                                        {
                                            include: "text.html.derivative"
                                        }
                                    ]
                                },
                                3: {
                                    name: "punctuation.definition.heading.markdown"
                                }
                            },
                            match: "(#{6})\\s+(.*?)(?:\\s+(#+))?\\s*$",
                            name: "heading.6.markdown"
                        },
                        {
                            captures: {
                                1: {
                                    name: "punctuation.definition.heading.markdown"
                                },
                                2: {
                                    name: "entity.name.section.markdown",
                                    patterns: [
                                        {
                                            include: "#inline"
                                        },
                                        {
                                            include: "text.html.derivative"
                                        }
                                    ]
                                },
                                3: {
                                    name: "punctuation.definition.heading.markdown"
                                }
                            },
                            match: "(#{5})\\s+(.*?)(?:\\s+(#+))?\\s*$",
                            name: "heading.5.markdown"
                        },
                        {
                            captures: {
                                1: {
                                    name: "punctuation.definition.heading.markdown"
                                },
                                2: {
                                    name: "entity.name.section.markdown",
                                    patterns: [
                                        {
                                            include: "#inline"
                                        },
                                        {
                                            include: "text.html.derivative"
                                        }
                                    ]
                                },
                                3: {
                                    name: "punctuation.definition.heading.markdown"
                                }
                            },
                            match: "(#{4})\\s+(.*?)(?:\\s+(#+))?\\s*$",
                            name: "heading.4.markdown"
                        },
                        {
                            captures: {
                                1: {
                                    name: "punctuation.definition.heading.markdown"
                                },
                                2: {
                                    name: "entity.name.section.markdown",
                                    patterns: [
                                        {
                                            include: "#inline"
                                        },
                                        {
                                            include: "text.html.derivative"
                                        }
                                    ]
                                },
                                3: {
                                    name: "punctuation.definition.heading.markdown"
                                }
                            },
                            match: "(#{3})\\s+(.*?)(?:\\s+(#+))?\\s*$",
                            name: "heading.3.markdown"
                        },
                        {
                            captures: {
                                1: {
                                    name: "punctuation.definition.heading.markdown"
                                },
                                2: {
                                    name: "entity.name.section.markdown",
                                    patterns: [
                                        {
                                            include: "#inline"
                                        },
                                        {
                                            include: "text.html.derivative"
                                        }
                                    ]
                                },
                                3: {
                                    name: "punctuation.definition.heading.markdown"
                                }
                            },
                            match: "(#{2})\\s+(.*?)(?:\\s+(#+))?\\s*$",
                            name: "heading.2.markdown"
                        },
                        {
                            captures: {
                                1: {
                                    name: "punctuation.definition.heading.markdown"
                                },
                                2: {
                                    name: "entity.name.section.markdown",
                                    patterns: [
                                        {
                                            include: "#inline"
                                        },
                                        {
                                            include: "text.html.derivative"
                                        }
                                    ]
                                },
                                3: {
                                    name: "punctuation.definition.heading.markdown"
                                }
                            },
                            match: "(#{1})\\s+(.*?)(?:\\s+(#+))?\\s*$",
                            name: "heading.1.markdown"
                        }
                    ]
                }
            },
            match: "(?:^|\\G)[ ]{0,3}(#{1,6}\\s+(.*?)(\\s+#{1,6})?\\s*)$",
            name: "markup.heading.markdown"
        },
        "heading-setext": {
            patterns: [
                {
                    match: "^(={3,})(?=[ \\t]*$\\n?)",
                    name: "markup.heading.setext.1.markdown"
                },
                {
                    match: "^(-{3,})(?=[ \\t]*$\\n?)",
                    name: "markup.heading.setext.2.markdown"
                }
            ]
        },
        html: {
            patterns: [
                {
                    begin: "(^|\\G)\\s*(<!--)",
                    captures: {
                        1: {
                            name: "punctuation.definition.comment.html"
                        },
                        2: {
                            name: "punctuation.definition.comment.html"
                        }
                    },
                    end: "(-->)",
                    name: "comment.block.html"
                },
                {
                    begin: "(?i)(^|\\G)\\s*(?=<(script|style|pre)(\\s|$|>)(?!.*?</(script|style|pre)>))",
                    end: "(?i)(.*)((</)(script|style|pre)(>))",
                    endCaptures: {
                        1: {
                            patterns: [
                                {
                                    include: "text.html.derivative"
                                }
                            ]
                        },
                        2: {
                            name: "meta.tag.structure.$4.end.html"
                        },
                        3: {
                            name: "punctuation.definition.tag.begin.html"
                        },
                        4: {
                            name: "entity.name.tag.html"
                        },
                        5: {
                            name: "punctuation.definition.tag.end.html"
                        }
                    },
                    patterns: [
                        {
                            begin: "(\\s*|$)",
                            patterns: [
                                {
                                    include: "text.html.derivative"
                                }
                            ],
                            while: "(?i)^(?!.*</(script|style|pre)>)"
                        }
                    ]
                },
                {
                    begin: "(?i)(^|\\G)\\s*(?=</?[a-zA-Z]+[^\\s/&gt;]*(\\s|$|/?>))",
                    patterns: [
                        {
                            include: "text.html.derivative"
                        }
                    ],
                    while: "^(?!\\s*$)"
                },
                {
                    begin: "(^|\\G)\\s*(?=(<[a-zA-Z0-9\\-](/?>|\\s.*?>)|</[a-zA-Z0-9\\-]>)\\s*$)",
                    patterns: [
                        {
                            include: "text.html.derivative"
                        }
                    ],
                    while: "^(?!\\s*$)"
                }
            ]
        },
        "image-inline": {
            captures: {
                1: {
                    name: "punctuation.definition.link.description.begin.markdown"
                },
                2: {
                    name: "string.other.link.description.markdown"
                },
                4: {
                    name: "punctuation.definition.link.description.end.markdown"
                },
                5: {
                    name: "punctuation.definition.metadata.markdown"
                },
                7: {
                    name: "punctuation.definition.link.markdown"
                },
                8: {
                    name: "markup.underline.link.image.markdown"
                },
                9: {
                    name: "punctuation.definition.link.markdown"
                },
                10: {
                    name: "markup.underline.link.image.markdown"
                },
                12: {
                    name: "string.other.link.description.title.markdown"
                },
                13: {
                    name: "punctuation.definition.string.begin.markdown"
                },
                14: {
                    name: "punctuation.definition.string.end.markdown"
                },
                15: {
                    name: "string.other.link.description.title.markdown"
                },
                16: {
                    name: "punctuation.definition.string.begin.markdown"
                },
                17: {
                    name: "punctuation.definition.string.end.markdown"
                },
                18: {
                    name: "string.other.link.description.title.markdown"
                },
                19: {
                    name: "punctuation.definition.string.begin.markdown"
                },
                20: {
                    name: "punctuation.definition.string.end.markdown"
                },
                21: {
                    name: "punctuation.definition.metadata.markdown"
                }
            },
            match: `(?x)
(\\!\\[)((?<square>[^\\[\\]\\\\]|\\\\.|\\[\\g<square>*+\\])*+)(\\])

(\\()

[ \\t]*
(
(<)((?:\\\\[<>]|[^<>\\n])*)(>)
| ((?<url>(?>[^\\s()]+)|\\(\\g<url>*\\))*)
)
[ \\t]*
(?:
((\\().+?(\\)))
| ((").+?("))
| ((').+?('))
)?
\\s*
(\\))
`,
            name: "meta.image.inline.markdown"
        },
        "image-ref": {
            captures: {
                1: {
                    name: "punctuation.definition.link.description.begin.markdown"
                },
                2: {
                    name: "string.other.link.description.markdown"
                },
                4: {
                    name: "punctuation.definition.link.description.end.markdown"
                },
                5: {
                    name: "punctuation.definition.constant.markdown"
                },
                6: {
                    name: "constant.other.reference.link.markdown"
                },
                7: {
                    name: "punctuation.definition.constant.markdown"
                }
            },
            match: "(\\!\\[)((?<square>[^\\[\\]\\\\]|\\\\.|\\[\\g<square>*+\\])*+)(\\])[ ]?(\\[)(.*?)(\\])",
            name: "meta.image.reference.markdown"
        },
        inline: {
            patterns: [
                {
                    include: "#ampersand"
                },
                {
                    include: "#bracket"
                },
                {
                    include: "#bold"
                },
                {
                    include: "#italic"
                },
                {
                    include: "#raw"
                },
                {
                    include: "#strikethrough"
                },
                {
                    include: "#escape"
                },
                {
                    include: "#image-inline"
                },
                {
                    include: "#image-ref"
                },
                {
                    include: "#link-email"
                },
                {
                    include: "#link-inet"
                },
                {
                    include: "#link-inline"
                },
                {
                    include: "#link-ref"
                },
                {
                    include: "#link-ref-literal"
                },
                {
                    include: "#link-ref-shortcut"
                }
            ]
        },
        italic: {
            begin: `(?x) (?<open>(\\*(?=\\w)|(?<!\\w)\\*|(?<!\\w)\\b_))(?=\\S)
(?=
(
<[^>]*+>
| (?<raw>\`+)([^\`]|(?!(?<!\`)\\k<raw>(?!\`))\`)*+\\k<raw>

| \\\\[\\\\\`*_{}\\[\\]()#.!+\\->]?+
| \\[
(
(?<square>
[^\\[\\]\\\\]
| \\\\.
| \\[ \\g<square>*+ \\]
)*+
\\]
(
(
[ ]?
\\[[^\\]]*+\\]
)
| (
\\(
[ \\t]*+
<?(.*?)>?
[ \\t]*+
(
(?<title>['"])
(.*?)
\\k<title>
)?
\\)
)
)
)
| \\k<open>\\k<open>
| (?!(?<=\\S)\\k<open>).

)++
(?<=\\S)(?=_\\b|\\*)\\k<open>
)
`,
            captures: {
                1: {
                    name: "punctuation.definition.italic.markdown"
                }
            },
            end: "(?<=\\S)(\\1)((?!\\1)|(?=\\1\\1))",
            name: "markup.italic.markdown",
            patterns: [
                {
                    applyEndPatternLast: 1,
                    begin: "(?=<[^>]*?>)",
                    end: "(?<=>)",
                    patterns: [
                        {
                            include: "text.html.derivative"
                        }
                    ]
                },
                {
                    include: "#escape"
                },
                {
                    include: "#ampersand"
                },
                {
                    include: "#bracket"
                },
                {
                    include: "#raw"
                },
                {
                    include: "#bold"
                },
                {
                    include: "#image-inline"
                },
                {
                    include: "#link-inline"
                },
                {
                    include: "#link-inet"
                },
                {
                    include: "#link-email"
                },
                {
                    include: "#image-ref"
                },
                {
                    include: "#link-ref-literal"
                },
                {
                    include: "#link-ref"
                },
                {
                    include: "#link-ref-shortcut"
                },
                {
                    include: "#strikethrough"
                }
            ]
        },
        "link-def": {
            captures: {
                1: {
                    name: "punctuation.definition.constant.markdown"
                },
                2: {
                    name: "constant.other.reference.link.markdown"
                },
                3: {
                    name: "punctuation.definition.constant.markdown"
                },
                4: {
                    name: "punctuation.separator.key-value.markdown"
                },
                5: {
                    name: "punctuation.definition.link.markdown"
                },
                6: {
                    name: "markup.underline.link.markdown"
                },
                7: {
                    name: "punctuation.definition.link.markdown"
                },
                8: {
                    name: "markup.underline.link.markdown"
                },
                9: {
                    name: "string.other.link.description.title.markdown"
                },
                10: {
                    name: "punctuation.definition.string.begin.markdown"
                },
                11: {
                    name: "punctuation.definition.string.end.markdown"
                },
                12: {
                    name: "string.other.link.description.title.markdown"
                },
                13: {
                    name: "punctuation.definition.string.begin.markdown"
                },
                14: {
                    name: "punctuation.definition.string.end.markdown"
                },
                15: {
                    name: "string.other.link.description.title.markdown"
                },
                16: {
                    name: "punctuation.definition.string.begin.markdown"
                },
                17: {
                    name: "punctuation.definition.string.end.markdown"
                }
            },
            match: `(?x)
\\s*
(\\[)([^]]+?)(\\])(:)
[ \\t]*
(?:(<)((?:\\\\[<>]|[^<>\\n])*)(>)|(\\S+?))
[ \\t]*
(?:
((\\().+?(\\)))
| ((").+?("))
| ((').+?('))
)?
\\s*
$
`,
            name: "meta.link.reference.def.markdown"
        },
        "link-email": {
            captures: {
                1: {
                    name: "punctuation.definition.link.markdown"
                },
                2: {
                    name: "markup.underline.link.markdown"
                },
                4: {
                    name: "punctuation.definition.link.markdown"
                }
            },
            match: "(<)((?:mailto:)?[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*)(>)",
            name: "meta.link.email.lt-gt.markdown"
        },
        "link-inet": {
            captures: {
                1: {
                    name: "punctuation.definition.link.markdown"
                },
                2: {
                    name: "markup.underline.link.markdown"
                },
                3: {
                    name: "punctuation.definition.link.markdown"
                }
            },
            match: "(<)((?:https?|ftp)://.*?)(>)",
            name: "meta.link.inet.markdown"
        },
        "link-inline": {
            captures: {
                1: {
                    name: "punctuation.definition.link.title.begin.markdown"
                },
                2: {
                    name: "string.other.link.title.markdown",
                    patterns: [
                        {
                            include: "#raw"
                        },
                        {
                            include: "#bold"
                        },
                        {
                            include: "#italic"
                        },
                        {
                            include: "#strikethrough"
                        },
                        {
                            include: "#image-inline"
                        }
                    ]
                },
                4: {
                    name: "punctuation.definition.link.title.end.markdown"
                },
                5: {
                    name: "punctuation.definition.metadata.markdown"
                },
                7: {
                    name: "punctuation.definition.link.markdown"
                },
                8: {
                    name: "markup.underline.link.markdown"
                },
                9: {
                    name: "punctuation.definition.link.markdown"
                },
                10: {
                    name: "markup.underline.link.markdown"
                },
                12: {
                    name: "string.other.link.description.title.markdown"
                },
                13: {
                    name: "punctuation.definition.string.begin.markdown"
                },
                14: {
                    name: "punctuation.definition.string.end.markdown"
                },
                15: {
                    name: "string.other.link.description.title.markdown"
                },
                16: {
                    name: "punctuation.definition.string.begin.markdown"
                },
                17: {
                    name: "punctuation.definition.string.end.markdown"
                },
                18: {
                    name: "string.other.link.description.title.markdown"
                },
                19: {
                    name: "punctuation.definition.string.begin.markdown"
                },
                20: {
                    name: "punctuation.definition.string.end.markdown"
                },
                21: {
                    name: "punctuation.definition.metadata.markdown"
                }
            },
            match: `(?x)
(\\[)((?<square>[^\\[\\]\\\\]|\\\\.|\\[\\g<square>*+\\])*+)(\\])

(\\()

[ \\t]*
(
(<)((?:\\\\[<>]|[^<>\\n])*)(>)
| ((?<url>(?>[^\\s()]+)|\\(\\g<url>*\\))*)
)
[ \\t]*

(?:
((\\()[^()]*(\\)))
| ((")[^"]*("))
| ((')[^']*('))
)?
\\s*
(\\))
`,
            name: "meta.link.inline.markdown"
        },
        "link-ref": {
            captures: {
                1: {
                    name: "punctuation.definition.link.title.begin.markdown"
                },
                2: {
                    name: "string.other.link.title.markdown",
                    patterns: [
                        {
                            include: "#raw"
                        },
                        {
                            include: "#bold"
                        },
                        {
                            include: "#italic"
                        },
                        {
                            include: "#strikethrough"
                        },
                        {
                            include: "#image-inline"
                        }
                    ]
                },
                4: {
                    name: "punctuation.definition.link.title.end.markdown"
                },
                5: {
                    name: "punctuation.definition.constant.begin.markdown"
                },
                6: {
                    name: "constant.other.reference.link.markdown"
                },
                7: {
                    name: "punctuation.definition.constant.end.markdown"
                }
            },
            match: "(?<![\\]\\\\])(\\[)((?<square>[^\\[\\]\\\\]|\\\\.|\\[\\g<square>*+\\])*+)(\\])(\\[)([^\\]]*+)(\\])",
            name: "meta.link.reference.markdown"
        },
        "link-ref-literal": {
            captures: {
                1: {
                    name: "punctuation.definition.link.title.begin.markdown"
                },
                2: {
                    name: "string.other.link.title.markdown"
                },
                4: {
                    name: "punctuation.definition.link.title.end.markdown"
                },
                5: {
                    name: "punctuation.definition.constant.begin.markdown"
                },
                6: {
                    name: "punctuation.definition.constant.end.markdown"
                }
            },
            match: "(?<![\\]\\\\])(\\[)((?<square>[^\\[\\]\\\\]|\\\\.|\\[\\g<square>*+\\])*+)(\\])[ ]?(\\[)(\\])",
            name: "meta.link.reference.literal.markdown"
        },
        "link-ref-shortcut": {
            captures: {
                1: {
                    name: "punctuation.definition.link.title.begin.markdown"
                },
                2: {
                    name: "string.other.link.title.markdown"
                },
                3: {
                    name: "punctuation.definition.link.title.end.markdown"
                }
            },
            match: "(?<![\\]\\\\])(\\[)((?:[^\\s\\[\\]\\\\]|\\\\[\\[\\]])+?)((?<!\\\\)\\])",
            name: "meta.link.reference.markdown"
        },
        list_paragraph: {
            begin: "(^|\\G)(?=\\S)(?![*+->]\\s|[0-9]+\\.\\s)",
            name: "meta.paragraph.markdown",
            patterns: [
                {
                    include: "#inline"
                },
                {
                    include: "text.html.derivative"
                },
                {
                    include: "#heading-setext"
                }
            ],
            while: "(^|\\G)(?!\\s*$|#|[ ]{0,3}([-*_>][ ]{2,}){3,}[ \\t]*$\\n?|[ ]{0,3}[*+->]|[ ]{0,3}[0-9]+\\.)"
        },
        lists: {
            patterns: [
                {
                    begin: "(^|\\G)([ ]{0,3})([*+-])([ \\t])",
                    beginCaptures: {
                        3: {
                            name: "punctuation.definition.list.begin.markdown"
                        }
                    },
                    comment: "Currently does not support un-indented second lines.",
                    name: "markup.list.unnumbered.markdown",
                    patterns: [
                        {
                            include: "#block"
                        },
                        {
                            include: "#list_paragraph"
                        }
                    ],
                    while: "((^|\\G)([ ]{2,4}|\\t))|(^[ \\t]*$)"
                },
                {
                    begin: "(^|\\G)([ ]{0,3})([0-9]+[\\.\\)])([ \\t])",
                    beginCaptures: {
                        3: {
                            name: "punctuation.definition.list.begin.markdown"
                        }
                    },
                    name: "markup.list.numbered.markdown",
                    patterns: [
                        {
                            include: "#block"
                        },
                        {
                            include: "#list_paragraph"
                        }
                    ],
                    while: "((^|\\G)([ ]{2,4}|\\t))|(^[ \\t]*$)"
                }
            ]
        },
        paragraph: {
            begin: "(^|\\G)[ ]{0,3}(?=[^ \\t\\n])",
            name: "meta.paragraph.markdown",
            patterns: [
                {
                    include: "#inline"
                },
                {
                    include: "text.html.derivative"
                },
                {
                    include: "#heading-setext"
                }
            ],
            while: "(^|\\G)((?=\\s*[-=]{3,}\\s*$)|[ ]{4,}(?=[^ \\t\\n]))"
        },
        raw: {
            captures: {
                1: {
                    name: "punctuation.definition.raw.markdown"
                },
                3: {
                    name: "punctuation.definition.raw.markdown"
                }
            },
            match: "(`+)((?:[^`]|(?!(?<!`)\\1(?!`))`)*+)(\\1)",
            name: "markup.inline.raw.string.markdown"
        },
        raw_block: {
            begin: "(^|\\G)([ ]{4}|\\t)",
            name: "markup.raw.block.markdown",
            while: "(^|\\G)([ ]{4}|\\t)"
        },
        separator: {
            match: "(^|\\G)[ ]{0,3}([\\*\\-\\_])([ ]{0,2}\\2){2,}[ \\t]*$\\n?",
            name: "meta.separator.markdown"
        },
        strikethrough: {
            captures: {
                1: {
                    name: "punctuation.definition.strikethrough.markdown"
                },
                2: {
                    patterns: [
                        {
                            applyEndPatternLast: 1,
                            begin: "(?=<[^>]*?>)",
                            end: "(?<=>)",
                            patterns: [
                                {
                                    include: "text.html.derivative"
                                }
                            ]
                        },
                        {
                            include: "#escape"
                        },
                        {
                            include: "#ampersand"
                        },
                        {
                            include: "#bracket"
                        },
                        {
                            include: "#raw"
                        },
                        {
                            include: "#bold"
                        },
                        {
                            include: "#italic"
                        },
                        {
                            include: "#image-inline"
                        },
                        {
                            include: "#link-inline"
                        },
                        {
                            include: "#link-inet"
                        },
                        {
                            include: "#link-email"
                        },
                        {
                            include: "#image-ref"
                        },
                        {
                            include: "#link-ref-literal"
                        },
                        {
                            include: "#link-ref"
                        },
                        {
                            include: "#link-ref-shortcut"
                        }
                    ]
                },
                3: {
                    name: "punctuation.definition.strikethrough.markdown"
                }
            },
            match: "(?<!\\\\)(~{2,})((?:[^~]|(?!(?<![~\\\\])\\1(?!~))~)*+)(\\1)",
            name: "markup.strikethrough.markdown"
        },
        table: {
            begin: "(^|\\G)(\\|)(?=[^|].+\\|\\s*$)",
            beginCaptures: {
                2: {
                    name: "punctuation.definition.table.markdown"
                }
            },
            name: "markup.table.markdown",
            patterns: [
                {
                    match: "\\|",
                    name: "punctuation.definition.table.markdown"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.separator.table.markdown"
                        }
                    },
                    match: "(?<=\\|)\\s*(:?-+:?)\\s*(?=\\|)"
                },
                {
                    captures: {
                        1: {
                            patterns: [
                                {
                                    include: "#inline"
                                }
                            ]
                        }
                    },
                    match: "(?<=\\|)\\s*(?=\\S)((\\\\\\||[^|])+)(?<=\\S)\\s*(?=\\|)"
                }
            ],
            while: "(^|\\G)(?=\\|)"
        }
    },
    scopeName: "text.html.markdown",
    embeddedLangs: [],
    aliases: [
        "md"
    ],
    embeddedLangsLazy: [
        "css",
        "html",
        "ini",
        "java",
        "lua",
        "make",
        "perl",
        "r",
        "ruby",
        "php",
        "sql",
        "vb",
        "xml",
        "xsl",
        "yaml",
        "bat",
        "clojure",
        "coffee",
        "c",
        "cpp",
        "diff",
        "docker",
        "git-commit",
        "git-rebase",
        "go",
        "groovy",
        "pug",
        "javascript",
        "json",
        "jsonc",
        "less",
        "objective-c",
        "swift",
        "scss",
        "raku",
        "powershell",
        "python",
        "julia",
        "rust",
        "scala",
        "shellscript",
        "typescript",
        "tsx",
        "csharp",
        "fsharp",
        "dart",
        "handlebars",
        "erlang",
        "elixir",
        "latex",
        "bibtex"
    ]
});
var n = [
    e
];
;
}}),
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/svelte-BmsbZUe0.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>C)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$javascript$2d$DYrC$2d$pEL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/javascript-DYrC-pEL.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$typescript$2d$CO9IEkHz$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/typescript-CO9IEkHz.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$coffee$2d$BVFTsnP5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/coffee-BVFTsnP5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$stylus$2d$CAHdVuhm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/stylus-CAHdVuhm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$sass$2d$LqXmC1Fh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/sass-LqXmC1Fh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$css$2d$CAzixsid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/css-CAzixsid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$scss$2d$DjxgF7f7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/scss-DjxgF7f7.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$less$2d$CW2GmQHL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/less-CW2GmQHL.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$postcss$2d$Cz2vjx_4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/postcss-Cz2vjx_4.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$pug$2d$E8rs5QQH$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/pug-E8rs5QQH.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$markdown$2d$BU4nyQnk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/markdown-BU4nyQnk.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const d = Object.freeze({
    displayName: "Svelte",
    fileTypes: [
        "svelte"
    ],
    injections: {
        "L:(meta.script.svelte | meta.style.svelte) (meta.lang.js | meta.lang.javascript) - (meta source)": {
            patterns: [
                {
                    begin: "(?<=>)(?!</)",
                    contentName: "source.js",
                    end: "(?=</)",
                    name: "meta.embedded.block.svelte",
                    patterns: [
                        {
                            include: "source.js"
                        }
                    ]
                }
            ]
        },
        "L:(meta.script.svelte | meta.style.svelte) (meta.lang.ts | meta.lang.typescript) - (meta source)": {
            patterns: [
                {
                    begin: "(?<=>)(?!</)",
                    contentName: "source.ts",
                    end: "(?=</)",
                    name: "meta.embedded.block.svelte",
                    patterns: [
                        {
                            include: "source.ts"
                        }
                    ]
                }
            ]
        },
        "L:(meta.script.svelte | meta.style.svelte) meta.lang.coffee - (meta source)": {
            patterns: [
                {
                    begin: "(?<=>)(?!</)",
                    contentName: "source.coffee",
                    end: "(?=</)",
                    name: "meta.embedded.block.svelte",
                    patterns: [
                        {
                            include: "source.coffee"
                        }
                    ]
                }
            ]
        },
        "L:(source.ts, source.js, source.coffee)": {
            patterns: [
                {
                    match: `(?<![_$./'"[:alnum:]])\\$(?=[_[:alpha:]][_$[:alnum:]]*)`,
                    name: "punctuation.definition.variable.svelte"
                },
                {
                    match: `(?<![_$./'"[:alnum:]])(\\$\\$)(?=props|restProps|slots)`,
                    name: "punctuation.definition.variable.svelte"
                }
            ]
        },
        "L:meta.script.svelte - meta.lang - (meta source)": {
            patterns: [
                {
                    begin: "(?<=>)(?!</)",
                    contentName: "source.js",
                    end: "(?=</)",
                    name: "meta.embedded.block.svelte",
                    patterns: [
                        {
                            include: "source.js"
                        }
                    ]
                }
            ]
        },
        "L:meta.style.svelte - meta.lang - (meta source)": {
            patterns: [
                {
                    begin: "(?<=>)(?!</)",
                    contentName: "source.css",
                    end: "(?=</)",
                    name: "meta.embedded.block.svelte",
                    patterns: [
                        {
                            include: "source.css"
                        }
                    ]
                }
            ]
        },
        "L:meta.style.svelte meta.lang.css - (meta source)": {
            patterns: [
                {
                    begin: "(?<=>)(?!</)",
                    contentName: "source.css",
                    end: "(?=</)",
                    name: "meta.embedded.block.svelte",
                    patterns: [
                        {
                            include: "source.css"
                        }
                    ]
                }
            ]
        },
        "L:meta.style.svelte meta.lang.less - (meta source)": {
            patterns: [
                {
                    begin: "(?<=>)(?!</)",
                    contentName: "source.css.less",
                    end: "(?=</)",
                    name: "meta.embedded.block.svelte",
                    patterns: [
                        {
                            include: "source.css.less"
                        }
                    ]
                }
            ]
        },
        "L:meta.style.svelte meta.lang.postcss - (meta source)": {
            patterns: [
                {
                    begin: "(?<=>)(?!</)",
                    contentName: "source.css.postcss",
                    end: "(?=</)",
                    name: "meta.embedded.block.svelte",
                    patterns: [
                        {
                            include: "source.css.postcss"
                        }
                    ]
                }
            ]
        },
        "L:meta.style.svelte meta.lang.sass - (meta source)": {
            patterns: [
                {
                    begin: "(?<=>)(?!</)",
                    contentName: "source.sass",
                    end: "(?=</)",
                    name: "meta.embedded.block.svelte",
                    patterns: [
                        {
                            include: "source.sass"
                        }
                    ]
                }
            ]
        },
        "L:meta.style.svelte meta.lang.scss - (meta source)": {
            patterns: [
                {
                    begin: "(?<=>)(?!</)",
                    contentName: "source.css.scss",
                    end: "(?=</)",
                    name: "meta.embedded.block.svelte",
                    patterns: [
                        {
                            include: "source.css.scss"
                        }
                    ]
                }
            ]
        },
        "L:meta.style.svelte meta.lang.stylus - (meta source)": {
            patterns: [
                {
                    begin: "(?<=>)(?!</)",
                    contentName: "source.stylus",
                    end: "(?=</)",
                    name: "meta.embedded.block.svelte",
                    patterns: [
                        {
                            include: "source.stylus"
                        }
                    ]
                }
            ]
        },
        "L:meta.template.svelte - meta.lang - (meta source)": {
            patterns: [
                {
                    begin: "(?<=>)\\s",
                    end: "(?=</template)",
                    patterns: [
                        {
                            include: "#scope"
                        }
                    ]
                }
            ]
        },
        "L:meta.template.svelte meta.lang.pug - (meta source)": {
            patterns: [
                {
                    begin: "(?<=>)(?!</)",
                    contentName: "text.pug",
                    end: "(?=</)",
                    name: "meta.embedded.block.svelte",
                    patterns: [
                        {
                            include: "text.pug"
                        }
                    ]
                }
            ]
        }
    },
    name: "svelte",
    patterns: [
        {
            include: "#scope"
        }
    ],
    repository: {
        attributes: {
            patterns: [
                {
                    include: "#attributes-directives"
                },
                {
                    include: "#attributes-keyvalue"
                },
                {
                    include: "#attributes-interpolated"
                }
            ]
        },
        "attributes-directives": {
            begin: "(?<!<)(on|use|bind|transition|in|out|animate|let|class|style)(:)(?:((?:--)?[_$[:alpha:]][_\\-$[:alnum:]]*(?=\\s*=))|((?:--)?[_$[:alpha:]][_\\-$[:alnum:]]*))((\\|\\w+)*)",
            beginCaptures: {
                1: {
                    patterns: [
                        {
                            include: "#attributes-directives-keywords"
                        }
                    ]
                },
                2: {
                    name: "punctuation.definition.keyword.svelte"
                },
                3: {
                    patterns: [
                        {
                            include: "#attributes-directives-types-assigned"
                        }
                    ]
                },
                4: {
                    patterns: [
                        {
                            include: "#attributes-directives-types"
                        }
                    ]
                },
                5: {
                    patterns: [
                        {
                            match: "\\w+",
                            name: "support.function.svelte"
                        },
                        {
                            match: "\\|",
                            name: "punctuation.separator.svelte"
                        }
                    ]
                }
            },
            end: "(?=\\s*+[^=\\s])",
            name: "meta.directive.$1.svelte",
            patterns: [
                {
                    begin: "=",
                    beginCaptures: {
                        0: {
                            name: "punctuation.separator.key-value.svelte"
                        }
                    },
                    end: "(?<=[^\\s=])(?!\\s*=)|(?=/?>)",
                    patterns: [
                        {
                            include: "#attributes-value"
                        }
                    ]
                }
            ]
        },
        "attributes-directives-keywords": {
            patterns: [
                {
                    match: "on|use|bind",
                    name: "keyword.control.svelte"
                },
                {
                    match: "transition|in|out|animate",
                    name: "keyword.other.animation.svelte"
                },
                {
                    match: "let",
                    name: "storage.type.svelte"
                },
                {
                    match: "class|style",
                    name: "entity.other.attribute-name.svelte"
                }
            ]
        },
        "attributes-directives-types": {
            patterns: [
                {
                    match: "(?<=(on):).*$",
                    name: "entity.name.type.svelte"
                },
                {
                    match: "(?<=(bind):).*$",
                    name: "variable.parameter.svelte"
                },
                {
                    match: "(?<=(use|transition|in|out|animate):).*$",
                    name: "variable.function.svelte"
                },
                {
                    match: "(?<=(let|class|style):).*$",
                    name: "variable.parameter.svelte"
                }
            ]
        },
        "attributes-directives-types-assigned": {
            patterns: [
                {
                    match: "(?<=(bind):)this$",
                    name: "variable.language.svelte"
                },
                {
                    match: "(?<=(bind):).*$",
                    name: "entity.name.type.svelte"
                },
                {
                    match: "(?<=(class):).*$",
                    name: "entity.other.attribute-name.class.svelte"
                },
                {
                    match: "(?<=(style):).*$",
                    name: "support.type.property-name.svelte"
                },
                {
                    include: "#attributes-directives-types"
                }
            ]
        },
        "attributes-generics": {
            begin: `(generics)(=)(["'])`,
            beginCaptures: {
                1: {
                    name: "entity.other.attribute-name.svelte"
                },
                2: {
                    name: "punctuation.separator.key-value.svelte"
                },
                3: {
                    name: "punctuation.definition.string.begin.svelte"
                }
            },
            contentName: "meta.embedded.expression.svelte source.ts",
            end: "(\\3)",
            endCaptures: {
                1: {
                    name: "punctuation.definition.string.end.svelte"
                }
            },
            patterns: [
                {
                    include: "#type-parameters"
                }
            ]
        },
        "attributes-interpolated": {
            begin: "(?<!:|=)\\s*({)",
            captures: {
                1: {
                    name: "entity.other.attribute-name.svelte"
                }
            },
            contentName: "meta.embedded.expression.svelte source.ts",
            end: "(\\})",
            patterns: [
                {
                    include: "source.ts"
                }
            ]
        },
        "attributes-keyvalue": {
            begin: "((?:--)?[_$[:alpha:]][_\\-$[:alnum:]]*)",
            beginCaptures: {
                0: {
                    patterns: [
                        {
                            match: "--.*",
                            name: "support.type.property-name.svelte"
                        },
                        {
                            match: ".*",
                            name: "entity.other.attribute-name.svelte"
                        }
                    ]
                }
            },
            end: "(?=\\s*+[^=\\s])",
            name: "meta.attribute.$1.svelte",
            patterns: [
                {
                    begin: "=",
                    beginCaptures: {
                        0: {
                            name: "punctuation.separator.key-value.svelte"
                        }
                    },
                    end: "(?<=[^\\s=])(?!\\s*=)|(?=/?>)",
                    patterns: [
                        {
                            include: "#attributes-value"
                        }
                    ]
                }
            ]
        },
        "attributes-value": {
            patterns: [
                {
                    include: "#interpolation"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.string.begin.svelte"
                        },
                        2: {
                            name: "constant.numeric.decimal.svelte"
                        },
                        3: {
                            name: "punctuation.definition.string.end.svelte"
                        },
                        4: {
                            name: "constant.numeric.decimal.svelte"
                        }
                    },
                    match: `(?:(['"])([0-9._]+[\\w%]{,4})(\\1))|(?:([0-9._]+[\\w%]{,4})(?=\\s|/?>))`
                },
                {
                    match: "([^\\s\"'=<>`/]|/(?!>))+",
                    name: "string.unquoted.svelte",
                    patterns: [
                        {
                            include: "#interpolation"
                        }
                    ]
                },
                {
                    begin: `(['"])`,
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.svelte"
                        }
                    },
                    end: "\\1",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.svelte"
                        }
                    },
                    name: "string.quoted.svelte",
                    patterns: [
                        {
                            include: "#interpolation"
                        }
                    ]
                }
            ]
        },
        comments: {
            begin: "<!--",
            captures: {
                0: {
                    name: "punctuation.definition.comment.svelte"
                }
            },
            end: "-->",
            name: "comment.block.svelte",
            patterns: [
                {
                    begin: "(@)(component)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.keyword.svelte"
                        },
                        2: {
                            name: "storage.type.class.component.svelte keyword.declaration.class.component.svelte"
                        }
                    },
                    contentName: "comment.block.documentation.svelte",
                    end: "(?=-->)",
                    patterns: [
                        {
                            captures: {
                                0: {
                                    patterns: [
                                        {
                                            include: "text.html.markdown"
                                        }
                                    ]
                                }
                            },
                            match: ".*?(?=-->)"
                        },
                        {
                            include: "text.html.markdown"
                        }
                    ]
                },
                {
                    match: "\\G-?>|<!--(?!>)|<!-(?=-->)|--!>",
                    name: "invalid.illegal.characters-not-allowed-here.svelte"
                }
            ]
        },
        destructuring: {
            patterns: [
                {
                    begin: "(?={)",
                    end: "(?<=})",
                    name: "meta.embedded.expression.svelte source.ts",
                    patterns: [
                        {
                            include: "source.ts#object-binding-pattern"
                        }
                    ]
                },
                {
                    begin: "(?=\\[)",
                    end: "(?<=\\])",
                    name: "meta.embedded.expression.svelte source.ts",
                    patterns: [
                        {
                            include: "source.ts#array-binding-pattern"
                        }
                    ]
                }
            ]
        },
        "destructuring-const": {
            patterns: [
                {
                    begin: "(?={)",
                    end: "(?<=})",
                    name: "meta.embedded.expression.svelte source.ts",
                    patterns: [
                        {
                            include: "source.ts#object-binding-pattern-const"
                        }
                    ]
                },
                {
                    begin: "(?=\\[)",
                    end: "(?<=\\])",
                    name: "meta.embedded.expression.svelte source.ts",
                    patterns: [
                        {
                            include: "source.ts#array-binding-pattern-const"
                        }
                    ]
                }
            ]
        },
        interpolation: {
            patterns: [
                {
                    begin: "\\{",
                    beginCaptures: {
                        0: {
                            name: "punctuation.section.embedded.begin.svelte"
                        }
                    },
                    contentName: "meta.embedded.expression.svelte source.ts",
                    end: "\\}",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.embedded.end.svelte"
                        }
                    },
                    patterns: [
                        {
                            begin: "\\G\\s*(?={)",
                            end: "(?<=})",
                            patterns: [
                                {
                                    include: "source.ts#object-literal"
                                }
                            ]
                        },
                        {
                            include: "source.ts"
                        }
                    ]
                }
            ]
        },
        scope: {
            patterns: [
                {
                    include: "#comments"
                },
                {
                    include: "#special-tags"
                },
                {
                    include: "#tags"
                },
                {
                    include: "#interpolation"
                },
                {
                    begin: "(?<=>|})",
                    end: "(?=<|{)",
                    name: "text.svelte"
                }
            ]
        },
        "special-tags": {
            patterns: [
                {
                    include: "#special-tags-void"
                },
                {
                    include: "#special-tags-block-begin"
                },
                {
                    include: "#special-tags-block-end"
                }
            ]
        },
        "special-tags-block-begin": {
            begin: "({)\\s*(#([a-z]*))",
            beginCaptures: {
                1: {
                    name: "punctuation.definition.block.begin.svelte"
                },
                2: {
                    patterns: [
                        {
                            include: "#special-tags-keywords"
                        }
                    ]
                }
            },
            end: "(})",
            endCaptures: {
                0: {
                    name: "punctuation.definition.block.end.svelte"
                }
            },
            name: "meta.special.$3.svelte meta.special.start.svelte",
            patterns: [
                {
                    include: "#special-tags-modes"
                }
            ]
        },
        "special-tags-block-end": {
            begin: "({)\\s*(/([a-z]*))",
            beginCaptures: {
                1: {
                    name: "punctuation.definition.block.begin.svelte"
                },
                2: {
                    patterns: [
                        {
                            include: "#special-tags-keywords"
                        }
                    ]
                }
            },
            end: "(})",
            endCaptures: {
                1: {
                    name: "punctuation.definition.block.end.svelte"
                }
            },
            name: "meta.special.$3.svelte meta.special.end.svelte"
        },
        "special-tags-keywords": {
            captures: {
                1: {
                    name: "punctuation.definition.keyword.svelte"
                },
                2: {
                    patterns: [
                        {
                            match: "if|else\\s+if|else",
                            name: "keyword.control.conditional.svelte"
                        },
                        {
                            match: "each|key",
                            name: "keyword.control.svelte"
                        },
                        {
                            match: "await|then|catch",
                            name: "keyword.control.flow.svelte"
                        },
                        {
                            match: "snippet",
                            name: "keyword.control.svelte"
                        },
                        {
                            match: "html",
                            name: "keyword.other.svelte"
                        },
                        {
                            match: "render",
                            name: "keyword.other.svelte"
                        },
                        {
                            match: "debug",
                            name: "keyword.other.debugger.svelte"
                        },
                        {
                            match: "const",
                            name: "storage.type.svelte"
                        }
                    ]
                }
            },
            match: "([#@/:])(else\\s+if|[a-z]*)"
        },
        "special-tags-modes": {
            patterns: [
                {
                    begin: "(?<=(if|key|then|catch|snippet|html|render).*?)\\G",
                    end: "(?=})",
                    name: "meta.embedded.expression.svelte source.ts",
                    patterns: [
                        {
                            include: "source.ts"
                        }
                    ]
                },
                {
                    begin: "(?<=const.*?)\\G",
                    end: "(?=})",
                    patterns: [
                        {
                            include: "#destructuring-const"
                        },
                        {
                            begin: "\\G\\s*([_$[:alpha:]][_$[:alnum:]]+)\\s*",
                            beginCaptures: {
                                1: {
                                    name: "variable.other.constant.svelte"
                                }
                            },
                            end: "(?=\\=)"
                        },
                        {
                            begin: "(?=\\=)",
                            end: "(?=})",
                            name: "meta.embedded.expression.svelte source.ts",
                            patterns: [
                                {
                                    include: "source.ts"
                                }
                            ]
                        }
                    ]
                },
                {
                    begin: "(?<=each.*?)\\G",
                    end: "(?=})",
                    patterns: [
                        {
                            begin: "\\G\\s*?(?=\\S)",
                            contentName: "meta.embedded.expression.svelte source.ts",
                            end: "(?=(?:^\\s*|\\s+)(as))",
                            patterns: [
                                {
                                    include: "source.ts"
                                }
                            ]
                        },
                        {
                            begin: "(as)",
                            beginCaptures: {
                                1: {
                                    name: "keyword.control.as.svelte"
                                }
                            },
                            end: "(?=})",
                            patterns: [
                                {
                                    include: "#destructuring"
                                },
                                {
                                    begin: "\\(",
                                    captures: {
                                        0: {
                                            name: "meta.brace.round.svelte"
                                        }
                                    },
                                    contentName: "meta.embedded.expression.svelte source.ts",
                                    end: "\\)|(?=})",
                                    patterns: [
                                        {
                                            include: "source.ts"
                                        }
                                    ]
                                },
                                {
                                    captures: {
                                        1: {
                                            name: "meta.embedded.expression.svelte source.ts",
                                            patterns: [
                                                {
                                                    include: "source.ts"
                                                }
                                            ]
                                        }
                                    },
                                    match: "(\\s*([_$[:alpha:]][_$[:alnum:]]*)\\s*)"
                                },
                                {
                                    match: ",",
                                    name: "punctuation.separator.svelte"
                                }
                            ]
                        }
                    ]
                },
                {
                    begin: "(?<=await.*?)\\G",
                    end: "(?=})",
                    patterns: [
                        {
                            begin: "\\G\\s*?(?=\\S)",
                            contentName: "meta.embedded.expression.svelte source.ts",
                            end: "\\s+(then)|(?=})",
                            endCaptures: {
                                1: {
                                    name: "keyword.control.flow.svelte"
                                }
                            },
                            patterns: [
                                {
                                    include: "source.ts"
                                }
                            ]
                        },
                        {
                            begin: "(?<=then\\b)",
                            contentName: "meta.embedded.expression.svelte source.ts",
                            end: "(?=})",
                            patterns: [
                                {
                                    include: "source.ts"
                                }
                            ]
                        }
                    ]
                },
                {
                    begin: "(?<=debug.*?)\\G",
                    end: "(?=})",
                    patterns: [
                        {
                            captures: {
                                0: {
                                    name: "meta.embedded.expression.svelte source.ts",
                                    patterns: [
                                        {
                                            include: "source.ts"
                                        }
                                    ]
                                }
                            },
                            match: "[_$[:alpha:]][_$[:alnum:]]*"
                        },
                        {
                            match: ",",
                            name: "punctuation.separator.svelte"
                        }
                    ]
                }
            ]
        },
        "special-tags-void": {
            begin: "({)\\s*((?:[@:])(else\\s+if|[a-z]*))",
            beginCaptures: {
                1: {
                    name: "punctuation.definition.block.begin.svelte"
                },
                2: {
                    patterns: [
                        {
                            include: "#special-tags-keywords"
                        }
                    ]
                }
            },
            end: "\\}",
            endCaptures: {
                0: {
                    name: "punctuation.definition.block.end.svelte"
                }
            },
            name: "meta.special.$3.svelte",
            patterns: [
                {
                    include: "#special-tags-modes"
                }
            ]
        },
        tags: {
            patterns: [
                {
                    include: "#tags-lang"
                },
                {
                    include: "#tags-void"
                },
                {
                    include: "#tags-general-end"
                },
                {
                    include: "#tags-general-start"
                }
            ]
        },
        "tags-end-node": {
            captures: {
                1: {
                    name: "meta.tag.end.svelte punctuation.definition.tag.begin.svelte"
                },
                2: {
                    name: "meta.tag.end.svelte",
                    patterns: [
                        {
                            include: "#tags-name"
                        }
                    ]
                },
                3: {
                    name: "meta.tag.end.svelte punctuation.definition.tag.end.svelte"
                },
                4: {
                    name: "meta.tag.start.svelte punctuation.definition.tag.end.svelte"
                }
            },
            match: "(</)(.*?)\\s*(>)|(/>)"
        },
        "tags-general-end": {
            begin: "(</)([^/\\s>]*)",
            beginCaptures: {
                1: {
                    name: "meta.tag.end.svelte punctuation.definition.tag.begin.svelte"
                },
                2: {
                    name: "meta.tag.end.svelte",
                    patterns: [
                        {
                            include: "#tags-name"
                        }
                    ]
                }
            },
            end: "(>)",
            endCaptures: {
                1: {
                    name: "meta.tag.end.svelte punctuation.definition.tag.end.svelte"
                }
            },
            name: "meta.scope.tag.$2.svelte"
        },
        "tags-general-start": {
            begin: "(<)([^/\\s>/]*)",
            beginCaptures: {
                0: {
                    patterns: [
                        {
                            include: "#tags-start-node"
                        }
                    ]
                }
            },
            end: "(/?>)",
            endCaptures: {
                1: {
                    name: "meta.tag.start.svelte punctuation.definition.tag.end.svelte"
                }
            },
            name: "meta.scope.tag.$2.svelte",
            patterns: [
                {
                    include: "#tags-start-attributes"
                }
            ]
        },
        "tags-lang": {
            begin: "<(script|style|template)",
            beginCaptures: {
                0: {
                    patterns: [
                        {
                            include: "#tags-start-node"
                        }
                    ]
                }
            },
            end: "</\\1\\s*>|/>",
            endCaptures: {
                0: {
                    patterns: [
                        {
                            include: "#tags-end-node"
                        }
                    ]
                }
            },
            name: "meta.$1.svelte",
            patterns: [
                {
                    begin: `\\G(?=\\s*[^>]*?(type|lang)\\s*=\\s*(['"]|)(?:text/)?(\\w+)\\2)`,
                    end: "(?=</|/>)",
                    name: "meta.lang.$3.svelte",
                    patterns: [
                        {
                            include: "#tags-lang-start-attributes"
                        }
                    ]
                },
                {
                    include: "#tags-lang-start-attributes"
                }
            ]
        },
        "tags-lang-start-attributes": {
            begin: "\\G",
            end: "(?=/>)|>",
            endCaptures: {
                0: {
                    name: "punctuation.definition.tag.end.svelte"
                }
            },
            name: "meta.tag.start.svelte",
            patterns: [
                {
                    include: "#attributes-generics"
                },
                {
                    include: "#attributes"
                }
            ]
        },
        "tags-name": {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "keyword.control.svelte"
                        },
                        2: {
                            name: "punctuation.definition.keyword.svelte"
                        },
                        3: {
                            name: "entity.name.tag.svelte"
                        }
                    },
                    match: "(svelte)(:)([a-z][\\w0-9:-]*)"
                },
                {
                    match: "slot",
                    name: "keyword.control.svelte"
                },
                {
                    match: "[A-Z][a-zA-Z0-9_]*",
                    name: "support.class.component.svelte"
                },
                {
                    match: "[a-z][\\w0-9:]*-[\\w0-9:-]*",
                    name: "meta.tag.custom.svelte entity.name.tag.svelte"
                },
                {
                    match: "[a-z][\\w0-9:-]*",
                    name: "entity.name.tag.svelte"
                }
            ]
        },
        "tags-start-attributes": {
            begin: "\\G",
            end: "(?=/?>)",
            name: "meta.tag.start.svelte",
            patterns: [
                {
                    include: "#attributes"
                }
            ]
        },
        "tags-start-node": {
            captures: {
                1: {
                    name: "punctuation.definition.tag.begin.svelte"
                },
                2: {
                    patterns: [
                        {
                            include: "#tags-name"
                        }
                    ]
                }
            },
            match: "(<)([^/\\s>/]*)",
            name: "meta.tag.start.svelte"
        },
        "tags-void": {
            begin: "(<)(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)(?=\\s|/?>)",
            beginCaptures: {
                1: {
                    name: "punctuation.definition.tag.begin.svelte"
                },
                2: {
                    name: "entity.name.tag.svelte"
                }
            },
            end: "/?>",
            endCaptures: {
                0: {
                    name: "punctuation.definition.tag.begin.svelte"
                }
            },
            name: "meta.tag.void.svelte",
            patterns: [
                {
                    include: "#attributes"
                }
            ]
        },
        "type-parameters": {
            name: "meta.type.parameters.ts",
            patterns: [
                {
                    include: "source.ts#comment"
                },
                {
                    match: "(?<![_$[:alnum:]])(?:(?<=\\.\\.\\.)|(?<!\\.))(extends|in|out|const)(?![_$[:alnum:]])(?:(?=\\.\\.\\.)|(?!\\.))",
                    name: "storage.modifier.ts"
                },
                {
                    include: "source.ts#type"
                },
                {
                    include: "source.ts#punctuation-comma"
                },
                {
                    match: "(=)(?!>)",
                    name: "keyword.operator.assignment.ts"
                }
            ]
        }
    },
    scopeName: "source.svelte",
    embeddedLangs: [
        "javascript",
        "typescript",
        "coffee",
        "stylus",
        "sass",
        "css",
        "scss",
        "less",
        "postcss",
        "pug",
        "markdown"
    ]
});
var C = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$javascript$2d$DYrC$2d$pEL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$typescript$2d$CO9IEkHz$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$coffee$2d$BVFTsnP5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$stylus$2d$CAHdVuhm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$sass$2d$LqXmC1Fh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$css$2d$CAzixsid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$scss$2d$DjxgF7f7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$less$2d$CW2GmQHL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$postcss$2d$Cz2vjx_4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$pug$2d$E8rs5QQH$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$markdown$2d$BU4nyQnk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    d
];
;
}}),
}]);

//# sourceMappingURL=f8f5a_%40zoerai_zoer-copilot_dist_5a35521b._.js.map