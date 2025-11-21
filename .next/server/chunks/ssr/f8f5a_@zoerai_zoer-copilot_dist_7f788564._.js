module.exports = {

"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/css-CAzixsid.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/java-Bk2JzfKB.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>a)
});
const e = Object.freeze({
    displayName: "Java",
    name: "java",
    patterns: [
        {
            begin: "\\b(package)\\b\\s*",
            beginCaptures: {
                1: {
                    name: "keyword.other.package.java"
                }
            },
            contentName: "storage.modifier.package.java",
            end: "\\s*(;)",
            endCaptures: {
                1: {
                    name: "punctuation.terminator.java"
                }
            },
            name: "meta.package.java",
            patterns: [
                {
                    include: "#comments"
                },
                {
                    match: "(?<=\\.)\\s*\\.|\\.(?=\\s*;)",
                    name: "invalid.illegal.character_not_allowed_here.java"
                },
                {
                    match: "(?<!_)_(?=\\s*(\\.|;))|\\b\\d+|-+",
                    name: "invalid.illegal.character_not_allowed_here.java"
                },
                {
                    match: "[A-Z]+",
                    name: "invalid.deprecated.package_name_not_lowercase.java"
                },
                {
                    match: `(?x)\\b(?<!\\$)
(abstract|assert|boolean|break|byte|case|catch|char|class|
const|continue|default|do|double|else|enum|extends|final|
finally|float|for|goto|if|implements|import|instanceof|int|
interface|long|native|new|non-sealed|package|permits|private|protected|public|
return|sealed|short|static|strictfp|super|switch|syncronized|this|
throw|throws|transient|try|void|volatile|while|yield|
true|false|null)\\b`,
                    name: "invalid.illegal.character_not_allowed_here.java"
                },
                {
                    match: "\\.",
                    name: "punctuation.separator.java"
                }
            ]
        },
        {
            begin: "\\b(import)\\b\\s*\\b(static)?\\b\\s",
            beginCaptures: {
                1: {
                    name: "keyword.other.import.java"
                },
                2: {
                    name: "storage.modifier.java"
                }
            },
            contentName: "storage.modifier.import.java",
            end: "\\s*(;)",
            endCaptures: {
                1: {
                    name: "punctuation.terminator.java"
                }
            },
            name: "meta.import.java",
            patterns: [
                {
                    include: "#comments"
                },
                {
                    match: "(?<=\\.)\\s*\\.|\\.(?=\\s*;)",
                    name: "invalid.illegal.character_not_allowed_here.java"
                },
                {
                    match: "(?<!\\.)\\s*\\*",
                    name: "invalid.illegal.character_not_allowed_here.java"
                },
                {
                    match: "(?<!_)_(?=\\s*(\\.|;))|\\b\\d+|-+",
                    name: "invalid.illegal.character_not_allowed_here.java"
                },
                {
                    match: `(?x)\\b(?<!\\$)
(abstract|assert|boolean|break|byte|case|catch|char|class|
const|continue|default|do|double|else|enum|extends|final|
finally|float|for|goto|if|implements|import|instanceof|int|
interface|long|native|new|non-sealed|package|permits|private|protected|public|
return|sealed|short|static|strictfp|super|switch|syncronized|this|
throw|throws|transient|try|void|volatile|while|yield|
true|false|null)\\b`,
                    name: "invalid.illegal.character_not_allowed_here.java"
                },
                {
                    match: "\\.",
                    name: "punctuation.separator.java"
                },
                {
                    match: "\\*",
                    name: "variable.language.wildcard.java"
                }
            ]
        },
        {
            include: "#comments-javadoc"
        },
        {
            include: "#code"
        },
        {
            include: "#module"
        }
    ],
    repository: {
        "all-types": {
            patterns: [
                {
                    include: "#primitive-arrays"
                },
                {
                    include: "#primitive-types"
                },
                {
                    include: "#object-types"
                }
            ]
        },
        annotations: {
            patterns: [
                {
                    begin: "((@)\\s*([^\\s(]+))(\\()",
                    beginCaptures: {
                        2: {
                            name: "punctuation.definition.annotation.java"
                        },
                        3: {
                            name: "storage.type.annotation.java"
                        },
                        4: {
                            name: "punctuation.definition.annotation-arguments.begin.bracket.round.java"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.annotation-arguments.end.bracket.round.java"
                        }
                    },
                    name: "meta.declaration.annotation.java",
                    patterns: [
                        {
                            captures: {
                                1: {
                                    name: "constant.other.key.java"
                                },
                                2: {
                                    name: "keyword.operator.assignment.java"
                                }
                            },
                            match: "(\\w*)\\s*(=)"
                        },
                        {
                            include: "#code"
                        }
                    ]
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.annotation.java"
                        },
                        2: {
                            name: "storage.modifier.java"
                        },
                        3: {
                            name: "storage.type.annotation.java"
                        },
                        5: {
                            name: "punctuation.definition.annotation.java"
                        },
                        6: {
                            name: "storage.type.annotation.java"
                        }
                    },
                    match: "(@)(interface)\\s+(\\w*)|((@)\\s*(\\w+))",
                    name: "meta.declaration.annotation.java"
                }
            ]
        },
        "anonymous-block-and-instance-initializer": {
            begin: "{",
            beginCaptures: {
                0: {
                    name: "punctuation.section.block.begin.bracket.curly.java"
                }
            },
            end: "}",
            endCaptures: {
                0: {
                    name: "punctuation.section.block.end.bracket.curly.java"
                }
            },
            patterns: [
                {
                    include: "#code"
                }
            ]
        },
        "anonymous-classes-and-new": {
            begin: "\\bnew\\b",
            beginCaptures: {
                0: {
                    name: "keyword.control.new.java"
                }
            },
            end: "(?=;|\\)|\\]|\\.|,|\\?|:|}|\\+|\\-|\\*|\\/(?!\\/|\\*)|%|!|&|\\||\\^|=)",
            patterns: [
                {
                    include: "#comments"
                },
                {
                    include: "#function-call"
                },
                {
                    include: "#all-types"
                },
                {
                    begin: "(?<=\\))",
                    end: "(?=;|\\)|\\]|\\.|,|\\?|:|}|\\+|\\-|\\*|\\/(?!\\/|\\*)|%|!|&|\\||\\^|=)",
                    patterns: [
                        {
                            include: "#comments"
                        },
                        {
                            begin: "{",
                            beginCaptures: {
                                0: {
                                    name: "punctuation.section.inner-class.begin.bracket.curly.java"
                                }
                            },
                            end: "}",
                            endCaptures: {
                                0: {
                                    name: "punctuation.section.inner-class.end.bracket.curly.java"
                                }
                            },
                            name: "meta.inner-class.java",
                            patterns: [
                                {
                                    include: "#class-body"
                                }
                            ]
                        }
                    ]
                },
                {
                    begin: "(?<=\\])",
                    end: "(?=;|\\)|\\]|\\.|,|\\?|:|}|\\+|\\-|\\*|\\/(?!\\/|\\*)|%|!|&|\\||\\^|=)",
                    patterns: [
                        {
                            include: "#comments"
                        },
                        {
                            begin: "{",
                            beginCaptures: {
                                0: {
                                    name: "punctuation.section.array-initializer.begin.bracket.curly.java"
                                }
                            },
                            end: "}",
                            endCaptures: {
                                0: {
                                    name: "punctuation.section.array-initializer.end.bracket.curly.java"
                                }
                            },
                            name: "meta.array-initializer.java",
                            patterns: [
                                {
                                    include: "#code"
                                }
                            ]
                        }
                    ]
                },
                {
                    include: "#parens"
                }
            ]
        },
        assertions: {
            patterns: [
                {
                    begin: "\\b(assert)\\s",
                    beginCaptures: {
                        1: {
                            name: "keyword.control.assert.java"
                        }
                    },
                    end: "$",
                    name: "meta.declaration.assertion.java",
                    patterns: [
                        {
                            match: ":",
                            name: "keyword.operator.assert.expression-separator.java"
                        },
                        {
                            include: "#code"
                        }
                    ]
                }
            ]
        },
        class: {
            begin: "(?=\\w?[\\w\\s-]*\\b(?:class|(?<!@)interface|enum)\\s+[\\w$]+)",
            end: "}",
            endCaptures: {
                0: {
                    name: "punctuation.section.class.end.bracket.curly.java"
                }
            },
            name: "meta.class.java",
            patterns: [
                {
                    include: "#storage-modifiers"
                },
                {
                    include: "#generics"
                },
                {
                    include: "#comments"
                },
                {
                    captures: {
                        1: {
                            name: "storage.modifier.java"
                        },
                        2: {
                            name: "entity.name.type.class.java"
                        }
                    },
                    match: "(class|(?<!@)interface|enum)\\s+([\\w$]+)",
                    name: "meta.class.identifier.java"
                },
                {
                    begin: "extends",
                    beginCaptures: {
                        0: {
                            name: "storage.modifier.extends.java"
                        }
                    },
                    end: "(?={|implements|permits)",
                    name: "meta.definition.class.inherited.classes.java",
                    patterns: [
                        {
                            include: "#object-types-inherited"
                        },
                        {
                            include: "#comments"
                        }
                    ]
                },
                {
                    begin: "(implements)\\s",
                    beginCaptures: {
                        1: {
                            name: "storage.modifier.implements.java"
                        }
                    },
                    end: "(?=\\s*extends|permits|\\{)",
                    name: "meta.definition.class.implemented.interfaces.java",
                    patterns: [
                        {
                            include: "#object-types-inherited"
                        },
                        {
                            include: "#comments"
                        }
                    ]
                },
                {
                    begin: "(permits)\\s",
                    beginCaptures: {
                        1: {
                            name: "storage.modifier.permits.java"
                        }
                    },
                    end: "(?=\\s*extends|implements|\\{)",
                    name: "meta.definition.class.permits.classes.java",
                    patterns: [
                        {
                            include: "#object-types-inherited"
                        },
                        {
                            include: "#comments"
                        }
                    ]
                },
                {
                    begin: "{",
                    beginCaptures: {
                        0: {
                            name: "punctuation.section.class.begin.bracket.curly.java"
                        }
                    },
                    contentName: "meta.class.body.java",
                    end: "(?=})",
                    patterns: [
                        {
                            include: "#class-body"
                        }
                    ]
                }
            ]
        },
        "class-body": {
            patterns: [
                {
                    include: "#comments-javadoc"
                },
                {
                    include: "#comments"
                },
                {
                    include: "#enums"
                },
                {
                    include: "#class"
                },
                {
                    include: "#generics"
                },
                {
                    include: "#static-initializer"
                },
                {
                    include: "#class-fields-and-methods"
                },
                {
                    include: "#annotations"
                },
                {
                    include: "#storage-modifiers"
                },
                {
                    include: "#member-variables"
                },
                {
                    include: "#code"
                }
            ]
        },
        "class-fields-and-methods": {
            patterns: [
                {
                    begin: "(?=\\=)",
                    end: "(?=;)",
                    patterns: [
                        {
                            include: "#code"
                        }
                    ]
                },
                {
                    include: "#methods"
                }
            ]
        },
        code: {
            patterns: [
                {
                    include: "#annotations"
                },
                {
                    include: "#comments"
                },
                {
                    include: "#enums"
                },
                {
                    include: "#class"
                },
                {
                    include: "#record"
                },
                {
                    include: "#anonymous-block-and-instance-initializer"
                },
                {
                    include: "#try-catch-finally"
                },
                {
                    include: "#assertions"
                },
                {
                    include: "#parens"
                },
                {
                    include: "#constants-and-special-vars"
                },
                {
                    include: "#numbers"
                },
                {
                    include: "#anonymous-classes-and-new"
                },
                {
                    include: "#lambda-expression"
                },
                {
                    include: "#keywords"
                },
                {
                    include: "#storage-modifiers"
                },
                {
                    include: "#method-call"
                },
                {
                    include: "#function-call"
                },
                {
                    include: "#variables"
                },
                {
                    include: "#variables-local"
                },
                {
                    include: "#objects"
                },
                {
                    include: "#properties"
                },
                {
                    include: "#strings"
                },
                {
                    include: "#all-types"
                },
                {
                    match: ",",
                    name: "punctuation.separator.delimiter.java"
                },
                {
                    match: "\\.",
                    name: "punctuation.separator.period.java"
                },
                {
                    match: ";",
                    name: "punctuation.terminator.java"
                }
            ]
        },
        comments: {
            patterns: [
                {
                    captures: {
                        0: {
                            name: "punctuation.definition.comment.java"
                        }
                    },
                    match: "/\\*\\*/",
                    name: "comment.block.empty.java"
                },
                {
                    include: "#comments-inline"
                }
            ]
        },
        "comments-inline": {
            patterns: [
                {
                    begin: "/\\*",
                    captures: {
                        0: {
                            name: "punctuation.definition.comment.java"
                        }
                    },
                    end: "\\*/",
                    name: "comment.block.java"
                },
                {
                    begin: "(^[ \\t]+)?(?=//)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.whitespace.comment.leading.java"
                        }
                    },
                    end: "(?!\\G)",
                    patterns: [
                        {
                            begin: "//",
                            beginCaptures: {
                                0: {
                                    name: "punctuation.definition.comment.java"
                                }
                            },
                            end: "\\n",
                            name: "comment.line.double-slash.java"
                        }
                    ]
                }
            ]
        },
        "comments-javadoc": {
            patterns: [
                {
                    begin: "^\\s*(/\\*\\*)(?!/)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.comment.java"
                        }
                    },
                    end: "\\*/",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.comment.java"
                        }
                    },
                    name: "comment.block.javadoc.java",
                    patterns: [
                        {
                            match: "@(author|deprecated|return|see|serial|since|version)\\b",
                            name: "keyword.other.documentation.javadoc.java"
                        },
                        {
                            captures: {
                                1: {
                                    name: "keyword.other.documentation.javadoc.java"
                                },
                                2: {
                                    name: "variable.parameter.java"
                                }
                            },
                            match: "(@param)\\s+(\\S+)"
                        },
                        {
                            captures: {
                                1: {
                                    name: "keyword.other.documentation.javadoc.java"
                                },
                                2: {
                                    name: "entity.name.type.class.java"
                                }
                            },
                            match: "(@(?:exception|throws))\\s+(\\S+)"
                        },
                        {
                            captures: {
                                1: {
                                    name: "keyword.other.documentation.javadoc.java"
                                },
                                2: {
                                    name: "entity.name.type.class.java"
                                },
                                3: {
                                    name: "variable.parameter.java"
                                }
                            },
                            match: "{(@link)\\s+(\\S+)?#([\\w$]+\\s*\\([^\\(\\)]*\\)).*?}"
                        }
                    ]
                }
            ]
        },
        "constants-and-special-vars": {
            patterns: [
                {
                    match: "\\b(true|false|null)\\b",
                    name: "constant.language.java"
                },
                {
                    match: "\\bthis\\b",
                    name: "variable.language.this.java"
                },
                {
                    match: "\\bsuper\\b",
                    name: "variable.language.java"
                }
            ]
        },
        enums: {
            begin: "^\\s*([\\w\\s]*)(enum)\\s+(\\w+)",
            beginCaptures: {
                1: {
                    patterns: [
                        {
                            include: "#storage-modifiers"
                        }
                    ]
                },
                2: {
                    name: "storage.modifier.java"
                },
                3: {
                    name: "entity.name.type.enum.java"
                }
            },
            end: "}",
            endCaptures: {
                0: {
                    name: "punctuation.section.enum.end.bracket.curly.java"
                }
            },
            name: "meta.enum.java",
            patterns: [
                {
                    begin: "\\b(extends)\\b",
                    beginCaptures: {
                        1: {
                            name: "storage.modifier.extends.java"
                        }
                    },
                    end: "(?={|\\bimplements\\b)",
                    name: "meta.definition.class.inherited.classes.java",
                    patterns: [
                        {
                            include: "#object-types-inherited"
                        },
                        {
                            include: "#comments"
                        }
                    ]
                },
                {
                    begin: "\\b(implements)\\b",
                    beginCaptures: {
                        1: {
                            name: "storage.modifier.implements.java"
                        }
                    },
                    end: "(?={|\\bextends\\b)",
                    name: "meta.definition.class.implemented.interfaces.java",
                    patterns: [
                        {
                            include: "#object-types-inherited"
                        },
                        {
                            include: "#comments"
                        }
                    ]
                },
                {
                    begin: "{",
                    beginCaptures: {
                        0: {
                            name: "punctuation.section.enum.begin.bracket.curly.java"
                        }
                    },
                    end: "(?=})",
                    patterns: [
                        {
                            begin: "(?<={)",
                            end: "(?=;|})",
                            patterns: [
                                {
                                    include: "#comments-javadoc"
                                },
                                {
                                    include: "#comments"
                                },
                                {
                                    begin: "\\b(\\w+)\\b",
                                    beginCaptures: {
                                        1: {
                                            name: "constant.other.enum.java"
                                        }
                                    },
                                    end: "(,)|(?=;|})",
                                    endCaptures: {
                                        1: {
                                            name: "punctuation.separator.delimiter.java"
                                        }
                                    },
                                    patterns: [
                                        {
                                            include: "#comments-javadoc"
                                        },
                                        {
                                            include: "#comments"
                                        },
                                        {
                                            begin: "\\(",
                                            beginCaptures: {
                                                0: {
                                                    name: "punctuation.bracket.round.java"
                                                }
                                            },
                                            end: "\\)",
                                            endCaptures: {
                                                0: {
                                                    name: "punctuation.bracket.round.java"
                                                }
                                            },
                                            patterns: [
                                                {
                                                    include: "#code"
                                                }
                                            ]
                                        },
                                        {
                                            begin: "{",
                                            beginCaptures: {
                                                0: {
                                                    name: "punctuation.bracket.curly.java"
                                                }
                                            },
                                            end: "}",
                                            endCaptures: {
                                                0: {
                                                    name: "punctuation.bracket.curly.java"
                                                }
                                            },
                                            patterns: [
                                                {
                                                    include: "#class-body"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            include: "#class-body"
                        }
                    ]
                }
            ]
        },
        "function-call": {
            begin: "([A-Za-z_$][\\w$]*)\\s*(\\()",
            beginCaptures: {
                1: {
                    name: "entity.name.function.java"
                },
                2: {
                    name: "punctuation.definition.parameters.begin.bracket.round.java"
                }
            },
            end: "\\)",
            endCaptures: {
                0: {
                    name: "punctuation.definition.parameters.end.bracket.round.java"
                }
            },
            name: "meta.function-call.java",
            patterns: [
                {
                    include: "#code"
                }
            ]
        },
        generics: {
            begin: "<",
            beginCaptures: {
                0: {
                    name: "punctuation.bracket.angle.java"
                }
            },
            end: ">",
            endCaptures: {
                0: {
                    name: "punctuation.bracket.angle.java"
                }
            },
            patterns: [
                {
                    match: "\\b(extends|super)\\b",
                    name: "storage.modifier.$1.java"
                },
                {
                    captures: {
                        1: {
                            name: "storage.type.java"
                        }
                    },
                    match: "(?<!\\.)([a-zA-Z$_][a-zA-Z0-9$_]*)(?=\\s*<)"
                },
                {
                    include: "#primitive-arrays"
                },
                {
                    match: "[a-zA-Z$_][a-zA-Z0-9$_]*",
                    name: "storage.type.generic.java"
                },
                {
                    match: "\\?",
                    name: "storage.type.generic.wildcard.java"
                },
                {
                    match: "&",
                    name: "punctuation.separator.types.java"
                },
                {
                    match: ",",
                    name: "punctuation.separator.delimiter.java"
                },
                {
                    match: "\\.",
                    name: "punctuation.separator.period.java"
                },
                {
                    include: "#parens"
                },
                {
                    include: "#generics"
                },
                {
                    include: "#comments"
                }
            ]
        },
        keywords: {
            patterns: [
                {
                    match: "\\bthrow\\b",
                    name: "keyword.control.throw.java"
                },
                {
                    match: "\\?|:",
                    name: "keyword.control.ternary.java"
                },
                {
                    match: "\\b(return|yield|break|case|continue|default|do|while|for|switch|if|else)\\b",
                    name: "keyword.control.java"
                },
                {
                    match: "\\b(instanceof)\\b",
                    name: "keyword.operator.instanceof.java"
                },
                {
                    match: "(<<|>>>?|~|\\^)",
                    name: "keyword.operator.bitwise.java"
                },
                {
                    match: "((&|\\^|\\||<<|>>>?)=)",
                    name: "keyword.operator.assignment.bitwise.java"
                },
                {
                    match: "(===?|!=|<=|>=|<>|<|>)",
                    name: "keyword.operator.comparison.java"
                },
                {
                    match: "([+*/%-]=)",
                    name: "keyword.operator.assignment.arithmetic.java"
                },
                {
                    match: "(=)",
                    name: "keyword.operator.assignment.java"
                },
                {
                    match: "(\\-\\-|\\+\\+)",
                    name: "keyword.operator.increment-decrement.java"
                },
                {
                    match: "(\\-|\\+|\\*|\\/|%)",
                    name: "keyword.operator.arithmetic.java"
                },
                {
                    match: "(!|&&|\\|\\|)",
                    name: "keyword.operator.logical.java"
                },
                {
                    match: "(\\||&)",
                    name: "keyword.operator.bitwise.java"
                },
                {
                    match: "\\b(const|goto)\\b",
                    name: "keyword.reserved.java"
                }
            ]
        },
        "lambda-expression": {
            patterns: [
                {
                    match: "->",
                    name: "storage.type.function.arrow.java"
                }
            ]
        },
        "member-variables": {
            begin: "(?=private|protected|public|native|synchronized|abstract|threadsafe|transient|static|final)",
            end: "(?=\\=|;)",
            patterns: [
                {
                    include: "#storage-modifiers"
                },
                {
                    include: "#variables"
                },
                {
                    include: "#primitive-arrays"
                },
                {
                    include: "#object-types"
                }
            ]
        },
        "method-call": {
            begin: "(\\.)\\s*([A-Za-z_$][\\w$]*)\\s*(\\()",
            beginCaptures: {
                1: {
                    name: "punctuation.separator.period.java"
                },
                2: {
                    name: "entity.name.function.java"
                },
                3: {
                    name: "punctuation.definition.parameters.begin.bracket.round.java"
                }
            },
            end: "\\)",
            endCaptures: {
                0: {
                    name: "punctuation.definition.parameters.end.bracket.round.java"
                }
            },
            name: "meta.method-call.java",
            patterns: [
                {
                    include: "#code"
                }
            ]
        },
        methods: {
            begin: "(?!new)(?=[\\w<].*\\s+)(?=([^=/]|/(?!/))+\\()",
            end: "(})|(?=;)",
            endCaptures: {
                1: {
                    name: "punctuation.section.method.end.bracket.curly.java"
                }
            },
            name: "meta.method.java",
            patterns: [
                {
                    include: "#storage-modifiers"
                },
                {
                    begin: "(\\w+)\\s*(\\()",
                    beginCaptures: {
                        1: {
                            name: "entity.name.function.java"
                        },
                        2: {
                            name: "punctuation.definition.parameters.begin.bracket.round.java"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.parameters.end.bracket.round.java"
                        }
                    },
                    name: "meta.method.identifier.java",
                    patterns: [
                        {
                            include: "#parameters"
                        },
                        {
                            include: "#parens"
                        },
                        {
                            include: "#comments"
                        }
                    ]
                },
                {
                    include: "#generics"
                },
                {
                    begin: "(?=\\w.*\\s+\\w+\\s*\\()",
                    end: "(?=\\s+\\w+\\s*\\()",
                    name: "meta.method.return-type.java",
                    patterns: [
                        {
                            include: "#all-types"
                        },
                        {
                            include: "#parens"
                        },
                        {
                            include: "#comments"
                        }
                    ]
                },
                {
                    include: "#throws"
                },
                {
                    begin: "{",
                    beginCaptures: {
                        0: {
                            name: "punctuation.section.method.begin.bracket.curly.java"
                        }
                    },
                    contentName: "meta.method.body.java",
                    end: "(?=})",
                    patterns: [
                        {
                            include: "#code"
                        }
                    ]
                },
                {
                    include: "#comments"
                }
            ]
        },
        module: {
            begin: "((open)\\s)?(module)\\s+(\\w+)",
            beginCaptures: {
                1: {
                    name: "storage.modifier.java"
                },
                3: {
                    name: "storage.modifier.java"
                },
                4: {
                    name: "entity.name.type.module.java"
                }
            },
            end: "}",
            endCaptures: {
                0: {
                    name: "punctuation.section.module.end.bracket.curly.java"
                }
            },
            name: "meta.module.java",
            patterns: [
                {
                    begin: "{",
                    beginCaptures: {
                        0: {
                            name: "punctuation.section.module.begin.bracket.curly.java"
                        }
                    },
                    contentName: "meta.module.body.java",
                    end: "(?=})",
                    patterns: [
                        {
                            include: "#comments"
                        },
                        {
                            include: "#comments-javadoc"
                        },
                        {
                            match: "\\b(requires|transitive|exports|opens|to|uses|provides|with)\\b",
                            name: "keyword.module.java"
                        }
                    ]
                }
            ]
        },
        numbers: {
            patterns: [
                {
                    match: `(?x)
\\b(?<!\\$)
0(x|X)
(
(?<!\\.)[0-9a-fA-F]([0-9a-fA-F_]*[0-9a-fA-F])?[Ll]?(?!\\.)
|
(
[0-9a-fA-F]([0-9a-fA-F_]*[0-9a-fA-F])?\\.?
|
([0-9a-fA-F]([0-9a-fA-F_]*[0-9a-fA-F])?)?\\.[0-9a-fA-F]([0-9a-fA-F_]*[0-9a-fA-F])?
)
[Pp][+-]?[0-9]([0-9_]*[0-9])?[FfDd]?
)
\\b(?!\\$)`,
                    name: "constant.numeric.hex.java"
                },
                {
                    match: "\\b(?<!\\$)0(b|B)[01]([01_]*[01])?[Ll]?\\b(?!\\$)",
                    name: "constant.numeric.binary.java"
                },
                {
                    match: "\\b(?<!\\$)0[0-7]([0-7_]*[0-7])?[Ll]?\\b(?!\\$)",
                    name: "constant.numeric.octal.java"
                },
                {
                    match: `(?x)
(?<!\\$)
(
\\b[0-9]([0-9_]*[0-9])?\\.\\B(?!\\.)
|
\\b[0-9]([0-9_]*[0-9])?\\.([Ee][+-]?[0-9]([0-9_]*[0-9])?)[FfDd]?\\b
|
\\b[0-9]([0-9_]*[0-9])?\\.([Ee][+-]?[0-9]([0-9_]*[0-9])?)?[FfDd]\\b
|
\\b[0-9]([0-9_]*[0-9])?\\.([0-9]([0-9_]*[0-9])?)([Ee][+-]?[0-9]([0-9_]*[0-9])?)?[FfDd]?\\b
|
(?<!\\.)\\B\\.[0-9]([0-9_]*[0-9])?([Ee][+-]?[0-9]([0-9_]*[0-9])?)?[FfDd]?\\b
|
\\b[0-9]([0-9_]*[0-9])?([Ee][+-]?[0-9]([0-9_]*[0-9])?)[FfDd]?\\b
|
\\b[0-9]([0-9_]*[0-9])?([Ee][+-]?[0-9]([0-9_]*[0-9])?)?[FfDd]\\b
|
\\b(0|[1-9]([0-9_]*[0-9])?)(?!\\.)[Ll]?\\b
)
(?!\\$)`,
                    name: "constant.numeric.decimal.java"
                }
            ]
        },
        "object-types": {
            patterns: [
                {
                    include: "#generics"
                },
                {
                    begin: "\\b((?:[A-Za-z_]\\w*\\s*\\.\\s*)*)([A-Z_]\\w*)\\s*(?=\\[)",
                    beginCaptures: {
                        1: {
                            patterns: [
                                {
                                    match: "[A-Za-z_]\\w*",
                                    name: "storage.type.java"
                                },
                                {
                                    match: "\\.",
                                    name: "punctuation.separator.period.java"
                                }
                            ]
                        },
                        2: {
                            name: "storage.type.object.array.java"
                        }
                    },
                    end: "(?!\\s*\\[)",
                    patterns: [
                        {
                            include: "#comments"
                        },
                        {
                            include: "#parens"
                        }
                    ]
                },
                {
                    captures: {
                        1: {
                            patterns: [
                                {
                                    match: "[A-Za-z_]\\w*",
                                    name: "storage.type.java"
                                },
                                {
                                    match: "\\.",
                                    name: "punctuation.separator.period.java"
                                }
                            ]
                        }
                    },
                    match: "\\b((?:[A-Za-z_]\\w*\\s*\\.\\s*)*[A-Z_]\\w*)\\s*(?=<)"
                },
                {
                    captures: {
                        1: {
                            patterns: [
                                {
                                    match: "[A-Za-z_]\\w*",
                                    name: "storage.type.java"
                                },
                                {
                                    match: "\\.",
                                    name: "punctuation.separator.period.java"
                                }
                            ]
                        }
                    },
                    match: "\\b((?:[A-Za-z_]\\w*\\s*\\.\\s*)*[A-Z_]\\w*)\\b((?=\\s*[A-Za-z$_\\n])|(?=\\s*\\.\\.\\.))"
                }
            ]
        },
        "object-types-inherited": {
            patterns: [
                {
                    include: "#generics"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.separator.period.java"
                        }
                    },
                    match: "\\b(?:[A-Z]\\w*\\s*(\\.)\\s*)*[A-Z]\\w*\\b",
                    name: "entity.other.inherited-class.java"
                },
                {
                    match: ",",
                    name: "punctuation.separator.delimiter.java"
                }
            ]
        },
        objects: {
            match: "(?<![\\w$])[a-zA-Z_$][\\w$]*(?=\\s*\\.\\s*[\\w$]+)",
            name: "variable.other.object.java"
        },
        parameters: {
            patterns: [
                {
                    match: "\\bfinal\\b",
                    name: "storage.modifier.java"
                },
                {
                    include: "#annotations"
                },
                {
                    include: "#all-types"
                },
                {
                    include: "#strings"
                },
                {
                    match: "\\w+",
                    name: "variable.parameter.java"
                },
                {
                    match: ",",
                    name: "punctuation.separator.delimiter.java"
                },
                {
                    match: "\\.\\.\\.",
                    name: "punctuation.definition.parameters.varargs.java"
                }
            ]
        },
        parens: {
            patterns: [
                {
                    begin: "\\(",
                    beginCaptures: {
                        0: {
                            name: "punctuation.bracket.round.java"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.bracket.round.java"
                        }
                    },
                    patterns: [
                        {
                            include: "#code"
                        }
                    ]
                },
                {
                    begin: "\\[",
                    beginCaptures: {
                        0: {
                            name: "punctuation.bracket.square.java"
                        }
                    },
                    end: "\\]",
                    endCaptures: {
                        0: {
                            name: "punctuation.bracket.square.java"
                        }
                    },
                    patterns: [
                        {
                            include: "#code"
                        }
                    ]
                },
                {
                    begin: "{",
                    beginCaptures: {
                        0: {
                            name: "punctuation.bracket.curly.java"
                        }
                    },
                    end: "}",
                    endCaptures: {
                        0: {
                            name: "punctuation.bracket.curly.java"
                        }
                    },
                    patterns: [
                        {
                            include: "#code"
                        }
                    ]
                }
            ]
        },
        "primitive-arrays": {
            patterns: [
                {
                    begin: "\\b(void|boolean|byte|char|short|int|float|long|double)\\b\\s*(?=\\[)",
                    beginCaptures: {
                        1: {
                            name: "storage.type.primitive.array.java"
                        }
                    },
                    end: "(?!\\s*\\[)",
                    patterns: [
                        {
                            include: "#comments"
                        },
                        {
                            include: "#parens"
                        }
                    ]
                }
            ]
        },
        "primitive-types": {
            match: "\\b(void|boolean|byte|char|short|int|float|long|double)\\b",
            name: "storage.type.primitive.java"
        },
        properties: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "punctuation.separator.period.java"
                        },
                        2: {
                            name: "keyword.control.new.java"
                        }
                    },
                    match: "(\\.)\\s*(new)"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.separator.period.java"
                        },
                        2: {
                            name: "variable.other.object.property.java"
                        }
                    },
                    match: "(\\.)\\s*([a-zA-Z_$][\\w$]*)(?=\\s*\\.\\s*[a-zA-Z_$][\\w$]*)"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.separator.period.java"
                        },
                        2: {
                            name: "variable.other.object.property.java"
                        }
                    },
                    match: "(\\.)\\s*([a-zA-Z_$][\\w$]*)"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.separator.period.java"
                        },
                        2: {
                            name: "invalid.illegal.identifier.java"
                        }
                    },
                    match: "(\\.)\\s*([0-9][\\w$]*)"
                }
            ]
        },
        record: {
            begin: "(?=\\w?[\\w\\s]*\\b(?:record)\\s+[\\w$]+)",
            end: "}",
            endCaptures: {
                0: {
                    name: "punctuation.section.class.end.bracket.curly.java"
                }
            },
            name: "meta.record.java",
            patterns: [
                {
                    include: "#storage-modifiers"
                },
                {
                    include: "#generics"
                },
                {
                    include: "#comments"
                },
                {
                    begin: "(record)\\s+([\\w$]+)(<[\\w$]+>)?(\\()",
                    beginCaptures: {
                        1: {
                            name: "storage.modifier.java"
                        },
                        2: {
                            name: "entity.name.type.record.java"
                        },
                        3: {
                            patterns: [
                                {
                                    include: "#generics"
                                }
                            ]
                        },
                        4: {
                            name: "punctuation.definition.parameters.begin.bracket.round.java"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.parameters.end.bracket.round.java"
                        }
                    },
                    name: "meta.record.identifier.java",
                    patterns: [
                        {
                            include: "#code"
                        }
                    ]
                },
                {
                    begin: "(implements)\\s",
                    beginCaptures: {
                        1: {
                            name: "storage.modifier.implements.java"
                        }
                    },
                    end: "(?=\\s*\\{)",
                    name: "meta.definition.class.implemented.interfaces.java",
                    patterns: [
                        {
                            include: "#object-types-inherited"
                        },
                        {
                            include: "#comments"
                        }
                    ]
                },
                {
                    include: "#record-body"
                }
            ]
        },
        "record-body": {
            begin: "{",
            beginCaptures: {
                0: {
                    name: "punctuation.section.class.begin.bracket.curly.java"
                }
            },
            end: "(?=})",
            name: "meta.record.body.java",
            patterns: [
                {
                    include: "#record-constructor"
                },
                {
                    include: "#class-body"
                }
            ]
        },
        "record-constructor": {
            begin: "(?!new)(?=[\\w<].*\\s+)(?=([^\\(=/]|/(?!/))+(?={))",
            end: "(})|(?=;)",
            endCaptures: {
                1: {
                    name: "punctuation.section.method.end.bracket.curly.java"
                }
            },
            name: "meta.method.java",
            patterns: [
                {
                    include: "#storage-modifiers"
                },
                {
                    begin: "(\\w+)",
                    beginCaptures: {
                        1: {
                            name: "entity.name.function.java"
                        }
                    },
                    end: "(?=\\s*{)",
                    name: "meta.method.identifier.java",
                    patterns: [
                        {
                            include: "#comments"
                        }
                    ]
                },
                {
                    include: "#comments"
                },
                {
                    begin: "{",
                    beginCaptures: {
                        0: {
                            name: "punctuation.section.method.begin.bracket.curly.java"
                        }
                    },
                    contentName: "meta.method.body.java",
                    end: "(?=})",
                    patterns: [
                        {
                            include: "#code"
                        }
                    ]
                }
            ]
        },
        "static-initializer": {
            patterns: [
                {
                    include: "#anonymous-block-and-instance-initializer"
                },
                {
                    match: "static",
                    name: "storage.modifier.java"
                }
            ]
        },
        "storage-modifiers": {
            match: "\\b(public|private|protected|static|final|native|synchronized|abstract|threadsafe|transient|volatile|default|strictfp|sealed|non-sealed)\\b",
            name: "storage.modifier.java"
        },
        strings: {
            patterns: [
                {
                    begin: '"""',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.java"
                        }
                    },
                    end: '"""',
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.java"
                        }
                    },
                    name: "string.quoted.triple.java",
                    patterns: [
                        {
                            match: '(\\\\""")(?!")|(\\\\.)',
                            name: "constant.character.escape.java"
                        }
                    ]
                },
                {
                    begin: '"',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.java"
                        }
                    },
                    end: '"',
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.java"
                        }
                    },
                    name: "string.quoted.double.java",
                    patterns: [
                        {
                            match: "\\\\.",
                            name: "constant.character.escape.java"
                        }
                    ]
                },
                {
                    begin: "'",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.java"
                        }
                    },
                    end: "'",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.java"
                        }
                    },
                    name: "string.quoted.single.java",
                    patterns: [
                        {
                            match: "\\\\.",
                            name: "constant.character.escape.java"
                        }
                    ]
                }
            ]
        },
        throws: {
            begin: "throws",
            beginCaptures: {
                0: {
                    name: "storage.modifier.java"
                }
            },
            end: "(?={|;)",
            name: "meta.throwables.java",
            patterns: [
                {
                    match: ",",
                    name: "punctuation.separator.delimiter.java"
                },
                {
                    match: "[a-zA-Z$_][\\.a-zA-Z0-9$_]*",
                    name: "storage.type.java"
                },
                {
                    include: "#comments"
                }
            ]
        },
        "try-catch-finally": {
            patterns: [
                {
                    begin: "\\btry\\b",
                    beginCaptures: {
                        0: {
                            name: "keyword.control.try.java"
                        }
                    },
                    end: "}",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.try.end.bracket.curly.java"
                        }
                    },
                    name: "meta.try.java",
                    patterns: [
                        {
                            begin: "\\(",
                            beginCaptures: {
                                0: {
                                    name: "punctuation.section.try.resources.begin.bracket.round.java"
                                }
                            },
                            end: "\\)",
                            endCaptures: {
                                0: {
                                    name: "punctuation.section.try.resources.end.bracket.round.java"
                                }
                            },
                            name: "meta.try.resources.java",
                            patterns: [
                                {
                                    include: "#code"
                                }
                            ]
                        },
                        {
                            begin: "{",
                            beginCaptures: {
                                0: {
                                    name: "punctuation.section.try.begin.bracket.curly.java"
                                }
                            },
                            contentName: "meta.try.body.java",
                            end: "(?=})",
                            patterns: [
                                {
                                    include: "#code"
                                }
                            ]
                        }
                    ]
                },
                {
                    begin: "\\b(catch)\\b",
                    beginCaptures: {
                        1: {
                            name: "keyword.control.catch.java"
                        }
                    },
                    end: "}",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.catch.end.bracket.curly.java"
                        }
                    },
                    name: "meta.catch.java",
                    patterns: [
                        {
                            include: "#comments"
                        },
                        {
                            begin: "\\(",
                            beginCaptures: {
                                0: {
                                    name: "punctuation.definition.parameters.begin.bracket.round.java"
                                }
                            },
                            contentName: "meta.catch.parameters.java",
                            end: "\\)",
                            endCaptures: {
                                0: {
                                    name: "punctuation.definition.parameters.end.bracket.round.java"
                                }
                            },
                            patterns: [
                                {
                                    include: "#comments"
                                },
                                {
                                    include: "#storage-modifiers"
                                },
                                {
                                    begin: "[a-zA-Z$_][\\.a-zA-Z0-9$_]*",
                                    beginCaptures: {
                                        0: {
                                            name: "storage.type.java"
                                        }
                                    },
                                    end: "(\\|)|(?=\\))",
                                    endCaptures: {
                                        1: {
                                            name: "punctuation.catch.separator.java"
                                        }
                                    },
                                    patterns: [
                                        {
                                            include: "#comments"
                                        },
                                        {
                                            captures: {
                                                0: {
                                                    name: "variable.parameter.java"
                                                }
                                            },
                                            match: "\\w+"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            begin: "{",
                            beginCaptures: {
                                0: {
                                    name: "punctuation.section.catch.begin.bracket.curly.java"
                                }
                            },
                            contentName: "meta.catch.body.java",
                            end: "(?=})",
                            patterns: [
                                {
                                    include: "#code"
                                }
                            ]
                        }
                    ]
                },
                {
                    begin: "\\bfinally\\b",
                    beginCaptures: {
                        0: {
                            name: "keyword.control.finally.java"
                        }
                    },
                    end: "}",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.finally.end.bracket.curly.java"
                        }
                    },
                    name: "meta.finally.java",
                    patterns: [
                        {
                            begin: "{",
                            beginCaptures: {
                                0: {
                                    name: "punctuation.section.finally.begin.bracket.curly.java"
                                }
                            },
                            contentName: "meta.finally.body.java",
                            end: "(?=})",
                            patterns: [
                                {
                                    include: "#code"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        variables: {
            begin: `(?x)
(?=
\\b
(
(void|boolean|byte|char|short|int|float|long|double)
|
(?>(\\w+\\.)*[A-Z_]+\\w*)
)
\\b
\\s*
(
<[\\w<>,\\.?\\s\\[\\]]*>
)?
\\s*
(
(\\[\\])*
)?
\\s+
[A-Za-z_$][\\w$]*
([\\w\\[\\],$][\\w\\[\\],\\s]*)?
\\s*(=|:|;)
)`,
            end: "(?=\\=|:|;)",
            name: "meta.definition.variable.java",
            patterns: [
                {
                    captures: {
                        1: {
                            name: "variable.other.definition.java"
                        }
                    },
                    match: "([A-Za-z$_][\\w$]*)(?=\\s*(\\[\\])*\\s*(;|:|=|,))"
                },
                {
                    include: "#all-types"
                },
                {
                    include: "#code"
                }
            ]
        },
        "variables-local": {
            begin: "(?=\\b(var)\\b\\s+[A-Za-z_$][\\w$]*\\s*(=|:|;))",
            end: "(?=\\=|:|;)",
            name: "meta.definition.variable.local.java",
            patterns: [
                {
                    match: "\\bvar\\b",
                    name: "storage.type.local.java"
                },
                {
                    captures: {
                        1: {
                            name: "variable.other.definition.java"
                        }
                    },
                    match: "([A-Za-z$_][\\w$]*)(?=\\s*(\\[\\])*\\s*(=|:|;))"
                },
                {
                    include: "#code"
                }
            ]
        }
    },
    scopeName: "source.java"
});
var a = [
    e
];
;
}}),
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/xml-CfRpfi_B.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>a)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$java$2d$Bk2JzfKB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/java-Bk2JzfKB.js [app-ssr] (ecmascript)");
;
const n = Object.freeze({
    displayName: "XML",
    name: "xml",
    patterns: [
        {
            begin: "(<\\?)\\s*([-_a-zA-Z0-9]+)",
            captures: {
                1: {
                    name: "punctuation.definition.tag.xml"
                },
                2: {
                    name: "entity.name.tag.xml"
                }
            },
            end: "(\\?>)",
            name: "meta.tag.preprocessor.xml",
            patterns: [
                {
                    match: " ([a-zA-Z-]+)",
                    name: "entity.other.attribute-name.xml"
                },
                {
                    include: "#doublequotedString"
                },
                {
                    include: "#singlequotedString"
                }
            ]
        },
        {
            begin: "(<!)(DOCTYPE)\\s+([:a-zA-Z_][:a-zA-Z0-9_.-]*)",
            captures: {
                1: {
                    name: "punctuation.definition.tag.xml"
                },
                2: {
                    name: "keyword.other.doctype.xml"
                },
                3: {
                    name: "variable.language.documentroot.xml"
                }
            },
            end: "\\s*(>)",
            name: "meta.tag.sgml.doctype.xml",
            patterns: [
                {
                    include: "#internalSubset"
                }
            ]
        },
        {
            include: "#comments"
        },
        {
            begin: "(<)((?:([-_a-zA-Z0-9]+)(:))?([-_a-zA-Z0-9:]+))(?=(\\s[^>]*)?></\\2>)",
            beginCaptures: {
                1: {
                    name: "punctuation.definition.tag.xml"
                },
                2: {
                    name: "entity.name.tag.xml"
                },
                3: {
                    name: "entity.name.tag.namespace.xml"
                },
                4: {
                    name: "punctuation.separator.namespace.xml"
                },
                5: {
                    name: "entity.name.tag.localname.xml"
                }
            },
            end: "(>)(</)((?:([-_a-zA-Z0-9]+)(:))?([-_a-zA-Z0-9:]+))(>)",
            endCaptures: {
                1: {
                    name: "punctuation.definition.tag.xml"
                },
                2: {
                    name: "punctuation.definition.tag.xml"
                },
                3: {
                    name: "entity.name.tag.xml"
                },
                4: {
                    name: "entity.name.tag.namespace.xml"
                },
                5: {
                    name: "punctuation.separator.namespace.xml"
                },
                6: {
                    name: "entity.name.tag.localname.xml"
                },
                7: {
                    name: "punctuation.definition.tag.xml"
                }
            },
            name: "meta.tag.no-content.xml",
            patterns: [
                {
                    include: "#tagStuff"
                }
            ]
        },
        {
            begin: "(</?)(?:([-\\w\\.]+)((:)))?([-\\w\\.:]+)",
            captures: {
                1: {
                    name: "punctuation.definition.tag.xml"
                },
                2: {
                    name: "entity.name.tag.namespace.xml"
                },
                3: {
                    name: "entity.name.tag.xml"
                },
                4: {
                    name: "punctuation.separator.namespace.xml"
                },
                5: {
                    name: "entity.name.tag.localname.xml"
                }
            },
            end: "(/?>)",
            name: "meta.tag.xml",
            patterns: [
                {
                    include: "#tagStuff"
                }
            ]
        },
        {
            include: "#entity"
        },
        {
            include: "#bare-ampersand"
        },
        {
            begin: "<%@",
            beginCaptures: {
                0: {
                    name: "punctuation.section.embedded.begin.xml"
                }
            },
            end: "%>",
            endCaptures: {
                0: {
                    name: "punctuation.section.embedded.end.xml"
                }
            },
            name: "source.java-props.embedded.xml",
            patterns: [
                {
                    match: "page|include|taglib",
                    name: "keyword.other.page-props.xml"
                }
            ]
        },
        {
            begin: "<%[!=]?(?!--)",
            beginCaptures: {
                0: {
                    name: "punctuation.section.embedded.begin.xml"
                }
            },
            end: "(?!--)%>",
            endCaptures: {
                0: {
                    name: "punctuation.section.embedded.end.xml"
                }
            },
            name: "source.java.embedded.xml",
            patterns: [
                {
                    include: "source.java"
                }
            ]
        },
        {
            begin: "<!\\[CDATA\\[",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.string.begin.xml"
                }
            },
            end: "]]>",
            endCaptures: {
                0: {
                    name: "punctuation.definition.string.end.xml"
                }
            },
            name: "string.unquoted.cdata.xml"
        }
    ],
    repository: {
        EntityDecl: {
            begin: "(<!)(ENTITY)\\s+(%\\s+)?([:a-zA-Z_][:a-zA-Z0-9_.-]*)(\\s+(?:SYSTEM|PUBLIC)\\s+)?",
            captures: {
                1: {
                    name: "punctuation.definition.tag.xml"
                },
                2: {
                    name: "keyword.other.entity.xml"
                },
                3: {
                    name: "punctuation.definition.entity.xml"
                },
                4: {
                    name: "variable.language.entity.xml"
                },
                5: {
                    name: "keyword.other.entitytype.xml"
                }
            },
            end: "(>)",
            patterns: [
                {
                    include: "#doublequotedString"
                },
                {
                    include: "#singlequotedString"
                }
            ]
        },
        "bare-ampersand": {
            match: "&",
            name: "invalid.illegal.bad-ampersand.xml"
        },
        comments: {
            patterns: [
                {
                    begin: "<%--",
                    captures: {
                        0: {
                            name: "punctuation.definition.comment.xml"
                        },
                        end: "--%>",
                        name: "comment.block.xml"
                    }
                },
                {
                    begin: "<!--",
                    captures: {
                        0: {
                            name: "punctuation.definition.comment.xml"
                        }
                    },
                    end: "-->",
                    name: "comment.block.xml",
                    patterns: [
                        {
                            begin: "--(?!>)",
                            captures: {
                                0: {
                                    name: "invalid.illegal.bad-comments-or-CDATA.xml"
                                }
                            }
                        }
                    ]
                }
            ]
        },
        doublequotedString: {
            begin: '"',
            beginCaptures: {
                0: {
                    name: "punctuation.definition.string.begin.xml"
                }
            },
            end: '"',
            endCaptures: {
                0: {
                    name: "punctuation.definition.string.end.xml"
                }
            },
            name: "string.quoted.double.xml",
            patterns: [
                {
                    include: "#entity"
                },
                {
                    include: "#bare-ampersand"
                }
            ]
        },
        entity: {
            captures: {
                1: {
                    name: "punctuation.definition.constant.xml"
                },
                3: {
                    name: "punctuation.definition.constant.xml"
                }
            },
            match: "(&)([:a-zA-Z_][:a-zA-Z0-9_.-]*|#[0-9]+|#x[0-9a-fA-F]+)(;)",
            name: "constant.character.entity.xml"
        },
        internalSubset: {
            begin: "(\\[)",
            captures: {
                1: {
                    name: "punctuation.definition.constant.xml"
                }
            },
            end: "(\\])",
            name: "meta.internalsubset.xml",
            patterns: [
                {
                    include: "#EntityDecl"
                },
                {
                    include: "#parameterEntity"
                },
                {
                    include: "#comments"
                }
            ]
        },
        parameterEntity: {
            captures: {
                1: {
                    name: "punctuation.definition.constant.xml"
                },
                3: {
                    name: "punctuation.definition.constant.xml"
                }
            },
            match: "(%)([:a-zA-Z_][:a-zA-Z0-9_.-]*)(;)",
            name: "constant.character.parameter-entity.xml"
        },
        singlequotedString: {
            begin: "'",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.string.begin.xml"
                }
            },
            end: "'",
            endCaptures: {
                0: {
                    name: "punctuation.definition.string.end.xml"
                }
            },
            name: "string.quoted.single.xml",
            patterns: [
                {
                    include: "#entity"
                },
                {
                    include: "#bare-ampersand"
                }
            ]
        },
        tagStuff: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "entity.other.attribute-name.namespace.xml"
                        },
                        2: {
                            name: "entity.other.attribute-name.xml"
                        },
                        3: {
                            name: "punctuation.separator.namespace.xml"
                        },
                        4: {
                            name: "entity.other.attribute-name.localname.xml"
                        }
                    },
                    match: "(?:^|\\s+)(?:([-\\w.]+)((:)))?([-\\w.:]+)\\s*="
                },
                {
                    include: "#doublequotedString"
                },
                {
                    include: "#singlequotedString"
                }
            ]
        }
    },
    scopeName: "text.xml",
    embeddedLangs: [
        "java"
    ]
});
var a = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$java$2d$Bk2JzfKB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    n
];
;
}}),
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/sql-DkzN59UV.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>t)
});
const e = Object.freeze({
    displayName: "SQL",
    name: "sql",
    patterns: [
        {
            match: "((?<!@)@)\\b(\\w+)\\b",
            name: "text.variable"
        },
        {
            match: "(\\[)[^\\]]*(\\])",
            name: "text.bracketed"
        },
        {
            include: "#comments"
        },
        {
            captures: {
                1: {
                    name: "keyword.other.create.sql"
                },
                2: {
                    name: "keyword.other.sql"
                },
                5: {
                    name: "entity.name.function.sql"
                }
            },
            match: "(?i:^\\s*(create(?:\\s+or\\s+replace)?)\\s+(aggregate|conversion|database|domain|function|group|(unique\\s+)?index|language|operator class|operator|rule|schema|sequence|table|tablespace|trigger|type|user|view)\\s+)(['\"`]?)(\\w+)\\4",
            name: "meta.create.sql"
        },
        {
            captures: {
                1: {
                    name: "keyword.other.create.sql"
                },
                2: {
                    name: "keyword.other.sql"
                }
            },
            match: "(?i:^\\s*(drop)\\s+(aggregate|conversion|database|domain|function|group|index|language|operator class|operator|rule|schema|sequence|table|tablespace|trigger|type|user|view))",
            name: "meta.drop.sql"
        },
        {
            captures: {
                1: {
                    name: "keyword.other.create.sql"
                },
                2: {
                    name: "keyword.other.table.sql"
                },
                3: {
                    name: "entity.name.function.sql"
                },
                4: {
                    name: "keyword.other.cascade.sql"
                }
            },
            match: "(?i:\\s*(drop)\\s+(table)\\s+(\\w+)(\\s+cascade)?\\b)",
            name: "meta.drop.sql"
        },
        {
            captures: {
                1: {
                    name: "keyword.other.create.sql"
                },
                2: {
                    name: "keyword.other.table.sql"
                }
            },
            match: "(?i:^\\s*(alter)\\s+(aggregate|conversion|database|domain|function|group|index|language|operator class|operator|proc(edure)?|rule|schema|sequence|table|tablespace|trigger|type|user|view)\\s+)",
            name: "meta.alter.sql"
        },
        {
            captures: {
                1: {
                    name: "storage.type.sql"
                },
                2: {
                    name: "storage.type.sql"
                },
                3: {
                    name: "constant.numeric.sql"
                },
                4: {
                    name: "storage.type.sql"
                },
                5: {
                    name: "constant.numeric.sql"
                },
                6: {
                    name: "storage.type.sql"
                },
                7: {
                    name: "constant.numeric.sql"
                },
                8: {
                    name: "constant.numeric.sql"
                },
                9: {
                    name: "storage.type.sql"
                },
                10: {
                    name: "constant.numeric.sql"
                },
                11: {
                    name: "storage.type.sql"
                },
                12: {
                    name: "storage.type.sql"
                },
                13: {
                    name: "storage.type.sql"
                },
                14: {
                    name: "constant.numeric.sql"
                },
                15: {
                    name: "storage.type.sql"
                }
            },
            match: `(?xi)


\\b(bigint|bigserial|bit|boolean|box|bytea|cidr|circle|date|double\\sprecision|inet|int|integer|line|lseg|macaddr|money|oid|path|point|polygon|real|serial|smallint|sysdate|text)\\b


|\\b(bit\\svarying|character\\s(?:varying)?|tinyint|var\\schar|float|interval)\\((\\d+)\\)


|\\b(char|number|varchar\\d?)\\b(?:\\((\\d+)\\))?


|\\b(numeric|decimal)\\b(?:\\((\\d+),(\\d+)\\))?


|\\b(times?)\\b(?:\\((\\d+)\\))?(\\swith(?:out)?\\stime\\szone\\b)?


|\\b(timestamp)(?:(s|tz))?\\b(?:\\((\\d+)\\))?(\\s(with|without)\\stime\\szone\\b)?

`
        },
        {
            match: "(?i:\\b((?:primary|foreign)\\s+key|references|on\\sdelete(\\s+cascade)?|nocheck|check|constraint|collate|default)\\b)",
            name: "storage.modifier.sql"
        },
        {
            match: "\\b\\d+\\b",
            name: "constant.numeric.sql"
        },
        {
            match: "(?i:\\b(select(\\s+(all|distinct))?|insert\\s+(ignore\\s+)?into|update|delete|from|set|where|group\\s+by|or|like|and|union(\\s+all)?|having|order\\s+by|limit|cross\\s+join|join|straight_join|(inner|(left|right|full)(\\s+outer)?)\\s+join|natural(\\s+(inner|(left|right|full)(\\s+outer)?))?\\s+join)\\b)",
            name: "keyword.other.DML.sql"
        },
        {
            match: "(?i:\\b(on|off|((is\\s+)?not\\s+)?null)\\b)",
            name: "keyword.other.DDL.create.II.sql"
        },
        {
            match: "(?i:\\bvalues\\b)",
            name: "keyword.other.DML.II.sql"
        },
        {
            match: "(?i:\\b(begin(\\s+work)?|start\\s+transaction|commit(\\s+work)?|rollback(\\s+work)?)\\b)",
            name: "keyword.other.LUW.sql"
        },
        {
            match: "(?i:\\b(grant(\\swith\\sgrant\\soption)?|revoke)\\b)",
            name: "keyword.other.authorization.sql"
        },
        {
            match: "(?i:\\bin\\b)",
            name: "keyword.other.data-integrity.sql"
        },
        {
            match: "(?i:^\\s*(comment\\s+on\\s+(table|column|aggregate|constraint|database|domain|function|index|operator|rule|schema|sequence|trigger|type|view))\\s+.*?\\s+(is)\\s+)",
            name: "keyword.other.object-comments.sql"
        },
        {
            match: "(?i)\\bAS\\b",
            name: "keyword.other.alias.sql"
        },
        {
            match: "(?i)\\b(DESC|ASC)\\b",
            name: "keyword.other.order.sql"
        },
        {
            match: "\\*",
            name: "keyword.operator.star.sql"
        },
        {
            match: "[!<>]?=|<>|<|>",
            name: "keyword.operator.comparison.sql"
        },
        {
            match: "-|\\+|/",
            name: "keyword.operator.math.sql"
        },
        {
            match: "\\|\\|",
            name: "keyword.operator.concatenator.sql"
        },
        {
            captures: {
                1: {
                    name: "support.function.aggregate.sql"
                }
            },
            match: "(?i)\\b(approx_count_distinct|approx_percentile_cont|approx_percentile_disc|avg|checksum_agg|count|count_big|group|grouping|grouping_id|max|min|sum|stdev|stdevp|var|varp)\\b\\s*\\("
        },
        {
            captures: {
                1: {
                    name: "support.function.analytic.sql"
                }
            },
            match: "(?i)\\b(cume_dist|first_value|lag|last_value|lead|percent_rank|percentile_cont|percentile_disc)\\b\\s*\\("
        },
        {
            captures: {
                1: {
                    name: "support.function.bitmanipulation.sql"
                }
            },
            match: "(?i)\\b(bit_count|get_bit|left_shift|right_shift|set_bit)\\b\\s*\\("
        },
        {
            captures: {
                1: {
                    name: "support.function.conversion.sql"
                }
            },
            match: "(?i)\\b(cast|convert|parse|try_cast|try_convert|try_parse)\\b\\s*\\("
        },
        {
            captures: {
                1: {
                    name: "support.function.collation.sql"
                }
            },
            match: "(?i)\\b(collationproperty|tertiary_weights)\\b\\s*\\("
        },
        {
            captures: {
                1: {
                    name: "support.function.cryptographic.sql"
                }
            },
            match: "(?i)\\b(asymkey_id|asymkeyproperty|certproperty|cert_id|crypt_gen_random|decryptbyasymkey|decryptbycert|decryptbykey|decryptbykeyautoasymkey|decryptbykeyautocert|decryptbypassphrase|encryptbyasymkey|encryptbycert|encryptbykey|encryptbypassphrase|hashbytes|is_objectsigned|key_guid|key_id|key_name|signbyasymkey|signbycert|symkeyproperty|verifysignedbycert|verifysignedbyasymkey)\\b\\s*\\("
        },
        {
            captures: {
                1: {
                    name: "support.function.cursor.sql"
                }
            },
            match: "(?i)\\b(cursor_status)\\b\\s*\\("
        },
        {
            captures: {
                1: {
                    name: "support.function.datetime.sql"
                }
            },
            match: "(?i)\\b(sysdatetime|sysdatetimeoffset|sysutcdatetime|current_time(stamp)?|getdate|getutcdate|datename|datepart|day|month|year|datefromparts|datetime2fromparts|datetimefromparts|datetimeoffsetfromparts|smalldatetimefromparts|timefromparts|datediff|dateadd|datetrunc|eomonth|switchoffset|todatetimeoffset|isdate|date_bucket)\\b\\s*\\("
        },
        {
            captures: {
                1: {
                    name: "support.function.datatype.sql"
                }
            },
            match: "(?i)\\b(datalength|ident_current|ident_incr|ident_seed|identity|sql_variant_property)\\b\\s*\\("
        },
        {
            captures: {
                1: {
                    name: "support.function.expression.sql"
                }
            },
            match: "(?i)\\b(coalesce|nullif)\\b\\s*\\("
        },
        {
            captures: {
                1: {
                    name: "support.function.globalvar.sql"
                }
            },
            match: "(?<!@)@@(?i)\\b(cursor_rows|connections|cpu_busy|datefirst|dbts|error|fetch_status|identity|idle|io_busy|langid|language|lock_timeout|max_connections|max_precision|nestlevel|options|packet_errors|pack_received|pack_sent|procid|remserver|rowcount|servername|servicename|spid|textsize|timeticks|total_errors|total_read|total_write|trancount|version)\\b\\s*\\("
        },
        {
            captures: {
                1: {
                    name: "support.function.json.sql"
                }
            },
            match: "(?i)\\b(json|isjson|json_object|json_array|json_value|json_query|json_modify|json_path_exists)\\b\\s*\\("
        },
        {
            captures: {
                1: {
                    name: "support.function.logical.sql"
                }
            },
            match: "(?i)\\b(choose|iif|greatest|least)\\b\\s*\\("
        },
        {
            captures: {
                1: {
                    name: "support.function.mathematical.sql"
                }
            },
            match: "(?i)\\b(abs|acos|asin|atan|atn2|ceiling|cos|cot|degrees|exp|floor|log|log10|pi|power|radians|rand|round|sign|sin|sqrt|square|tan)\\b\\s*\\("
        },
        {
            captures: {
                1: {
                    name: "support.function.metadata.sql"
                }
            },
            match: "(?i)\\b(app_name|applock_mode|applock_test|assemblyproperty|col_length|col_name|columnproperty|database_principal_id|databasepropertyex|db_id|db_name|file_id|file_idex|file_name|filegroup_id|filegroup_name|filegroupproperty|fileproperty|fulltextcatalogproperty|fulltextserviceproperty|index_col|indexkey_property|indexproperty|object_definition|object_id|object_name|object_schema_name|objectproperty|objectpropertyex|original_db_name|parsename|schema_id|schema_name|scope_identity|serverproperty|stats_date|type_id|type_name|typeproperty)\\b\\s*\\("
        },
        {
            captures: {
                1: {
                    name: "support.function.ranking.sql"
                }
            },
            match: "(?i)\\b(rank|dense_rank|ntile|row_number)\\b\\s*\\("
        },
        {
            captures: {
                1: {
                    name: "support.function.rowset.sql"
                }
            },
            match: "(?i)\\b(generate_series|opendatasource|openjson|openrowset|openquery|openxml|predict|string_split)\\b\\s*\\("
        },
        {
            captures: {
                1: {
                    name: "support.function.security.sql"
                }
            },
            match: "(?i)\\b(certencoded|certprivatekey|current_user|database_principal_id|has_perms_by_name|is_member|is_rolemember|is_srvrolemember|original_login|permissions|pwdcompare|pwdencrypt|schema_id|schema_name|session_user|suser_id|suser_sid|suser_sname|system_user|suser_name|user_id|user_name)\\b\\s*\\("
        },
        {
            captures: {
                1: {
                    name: "support.function.string.sql"
                }
            },
            match: "(?i)\\b(ascii|char|charindex|concat|difference|format|left|len|lower|ltrim|nchar|nodes|patindex|quotename|replace|replicate|reverse|right|rtrim|soundex|space|str|string_agg|string_escape|string_split|stuff|substring|translate|trim|unicode|upper)\\b\\s*\\("
        },
        {
            captures: {
                1: {
                    name: "support.function.system.sql"
                }
            },
            match: "(?i)\\b(binary_checksum|checksum|compress|connectionproperty|context_info|current_request_id|current_transaction_id|decompress|error_line|error_message|error_number|error_procedure|error_severity|error_state|formatmessage|get_filestream_transaction_context|getansinull|host_id|host_name|isnull|isnumeric|min_active_rowversion|newid|newsequentialid|rowcount_big|session_context|session_id|xact_state)\\b\\s*\\("
        },
        {
            captures: {
                1: {
                    name: "support.function.textimage.sql"
                }
            },
            match: "(?i)\\b(patindex|textptr|textvalid)\\b\\s*\\("
        },
        {
            captures: {
                1: {
                    name: "constant.other.database-name.sql"
                },
                2: {
                    name: "constant.other.table-name.sql"
                }
            },
            match: "(\\w+?)\\.(\\w+)"
        },
        {
            include: "#strings"
        },
        {
            include: "#regexps"
        },
        {
            match: "\\b(?i)(abort|abort_after_wait|absent|absolute|accent_sensitivity|acceptable_cursopt|acp|action|activation|add|address|admin|aes_128|aes_192|aes_256|affinity|after|aggregate|algorithm|all_constraints|all_errormsgs|all_indexes|all_levels|all_results|allow_connections|allow_dup_row|allow_encrypted_value_modifications|allow_page_locks|allow_row_locks|allow_snapshot_isolation|alter|altercolumn|always|anonymous|ansi_defaults|ansi_null_default|ansi_null_dflt_off|ansi_null_dflt_on|ansi_nulls|ansi_padding|ansi_warnings|appdomain|append|application|apply|arithabort|arithignore|array|assembly|asymmetric|asynchronous_commit|at|atan2|atomic|attach|attach_force_rebuild_log|attach_rebuild_log|audit|auth_realm|authentication|auto|auto_cleanup|auto_close|auto_create_statistics|auto_drop|auto_shrink|auto_update_statistics|auto_update_statistics_async|automated_backup_preference|automatic|autopilot|availability|availability_mode|backup|backup_priority|base64|basic|batches|batchsize|before|between|bigint|binary|binding|bit|block|blockers|blocksize|bmk|both|break|broker|broker_instance|bucket_count|buffer|buffercount|bulk_logged|by|call|caller|card|case|catalog|catch|cert|certificate|change_retention|change_tracking|change_tracking_context|changes|char|character|character_set|check_expiration|check_policy|checkconstraints|checkindex|checkpoint|checksum|cleanup_policy|clear|clear_port|close|clustered|codepage|collection|column_encryption_key|column_master_key|columnstore|columnstore_archive|colv_80_to_100|colv_100_to_80|commit_differential_base|committed|compatibility_level|compress_all_row_groups|compression|compression_delay|concat_null_yields_null|concatenate|configuration|connect|connection|containment|continue|continue_after_error|contract|contract_name|control|conversation|conversation_group_id|conversation_handle|copy|copy_only|count_rows|counter|create(\\\\s+or\\\\s+alter)?|credential|cross|cryptographic|cryptographic_provider|cube|cursor|cursor_close_on_commit|cursor_default|data|data_compression|data_flush_interval_seconds|data_mirroring|data_purity|data_source|database|database_name|database_snapshot|datafiletype|date_correlation_optimization|date|datefirst|dateformat|date_format|datetime|datetime2|datetimeoffset|day(s)?|db_chaining|dbid|dbidexec|dbo_only|deadlock_priority|deallocate|dec|decimal|declare|decrypt|decrypt_a|decryption|default_database|default_fulltext_language|default_language|default_logon_domain|default_schema|definition|delay|delayed_durability|delimitedtext|density_vector|dependent|des|description|desired_state|desx|differential|digest|disable|disable_broker|disable_def_cnst_chk|disabled|disk|distinct|distributed|distribution|drop|drop_existing|dts_buffers|dump|durability|dynamic|edition|elements|else|emergency|empty|enable|enable_broker|enabled|encoding|encrypted|encrypted_value|encryption|encryption_type|end|endpoint|endpoint_url|enhancedintegrity|entry|error_broker_conversations|errorfile|estimateonly|event|except|exec|executable|execute|exists|expand|expiredate|expiry_date|explicit|external|external_access|failover|failover_mode|failure_condition_level|fast|fast_forward|fastfirstrow|federated_service_account|fetch|field_terminator|fieldterminator|file|filelistonly|filegroup|filegrowth|filename|filestream|filestream_log|filestream_on|filetable|file_format|filter|first_row|fips_flagger|fire_triggers|first|firstrow|float|flush_interval_seconds|fmtonly|following|for|force|force_failover_allow_data_loss|force_service_allow_data_loss|forced|forceplan|formatfile|format_options|format_type|formsof|forward_only|free_cursors|free_exec_context|fullscan|fulltext|fulltextall|fulltextkey|function|generated|get|geography|geometry|global|go|goto|governor|guid|hadoop|hardening|hash|hashed|header_limit|headeronly|health_check_timeout|hidden|hierarchyid|histogram|histogram_steps|hits_cursors|hits_exec_context|hour(s)?|http|identity|identity_value|if|ifnull|ignore|ignore_constraints|ignore_dup_key|ignore_dup_row|ignore_triggers|image|immediate|implicit_transactions|include|include_null_values|incremental|index|inflectional|init|initiator|insensitive|insert|instead|int|integer|integrated|intersect|intermediate|interval_length_minutes|into|inuse_cursors|inuse_exec_context|io|is|isabout|iso_week|isolation|job_tracker_location|json|keep|keep_nulls|keep_replication|keepdefaults|keepfixed|keepidentity|keepnulls|kerberos|key|key_path|key_source|key_store_provider_name|keyset|kill|kilobytes_per_batch|labelonly|langid|language|last|lastrow|leading|legacy_cardinality_estimation|length|level|lifetime|lineage_80_to_100|lineage_100_to_80|listener_ip|listener_port|load|loadhistory|lob_compaction|local|local_service_name|locate|location|lock_escalation|lock_timeout|lockres|log|login|login_type|loop|manual|mark_in_use_for_removal|masked|master|match|matched|max_queue_readers|max_duration|max_outstanding_io_per_volume|maxdop|maxerrors|maxlength|maxtransfersize|max_plans_per_query|max_storage_size_mb|mediadescription|medianame|mediapassword|memogroup|memory_optimized|merge|message|message_forward_size|message_forwarding|microsecond|millisecond|minute(s)?|mirror_address|misses_cursors|misses_exec_context|mixed|modify|money|month|move|multi_user|must_change|name|namespace|nanosecond|native|native_compilation|nchar|ncharacter|nested_triggers|never|new_account|new_broker|newname|next|no|no_browsetable|no_checksum|no_compression|no_infomsgs|no_triggers|no_truncate|nocount|noexec|noexpand|noformat|noinit|nolock|nonatomic|nonclustered|nondurable|none|norecompute|norecovery|noreset|norewind|noskip|not|notification|nounload|now|nowait|ntext|ntlm|nulls|numeric|numeric_roundabort|nvarchar|object|objid|oem|offline|old_account|online|operation_mode|open|openjson|optimistic|option|orc|out|outer|output|over|override|owner|ownership|pad_index|page|page_checksum|page_verify|pagecount|paglock|param|parameter_sniffing|parameter_type_expansion|parameterization|parquet|parseonly|partial|partition|partner|password|path|pause|percentage|permission_set|persisted|period|physical_only|plan_forcing_mode|policy|pool|population|ports|preceding|precision|predicate|presume_abort|primary|primary_role|print|prior|priority |priority_level|private|proc(edure)?|procedure_name|profile|provider|quarter|query_capture_mode|query_governor_cost_limit|query_optimizer_hotfixes|query_store|queue|quoted_identifier|raiserror|range|raw|rcfile|rc2|rc4|rc4_128|rdbms|read_committed_snapshot|read|read_only|read_write|readcommitted|readcommittedlock|readonly|readpast|readuncommitted|readwrite|real|rebuild|receive|recmodel_70backcomp|recompile|reconfigure|recovery|recursive|recursive_triggers|redo_queue|reject_sample_value|reject_type|reject_value|relative|remote|remote_data_archive|remote_proc_transactions|remote_service_name|remove|removed_cursors|removed_exec_context|reorganize|repeat|repeatable|repeatableread|replace|replica|replicated|replnick_100_to_80|replnickarray_80_to_100|replnickarray_100_to_80|required|required_cursopt|resample|reset|resource|resource_manager_location|respect|restart|restore|restricted_user|resume|retaindays|retention|return|revert|rewind|rewindonly|returns|robust|role|rollup|root|round_robin|route|row|rowdump|rowguidcol|rowlock|row_terminator|rows|rows_per_batch|rowsets_only|rowterminator|rowversion|rsa_1024|rsa_2048|rsa_3072|rsa_4096|rsa_512|safe|safety|sample|save|scalar|schema|schemabinding|scoped|scroll|scroll_locks|sddl|second|secexpr|seconds|secondary|secondary_only|secondary_role|secret|security|securityaudit|selective|self|send|sent|sequence|serde_method|serializable|server|service|service_broker|service_name|service_objective|session_timeout|session|sessions|seterror|setopts|sets|shard_map_manager|shard_map_name|sharded|shared_memory|shortest_path|show_statistics|showplan_all|showplan_text|showplan_xml|showplan_xml_with_recompile|shrinkdb|shutdown|sid|signature|simple|single_blob|single_clob|single_nclob|single_user|singleton|site|size|size_based_cleanup_mode|skip|smalldatetime|smallint|smallmoney|snapshot|snapshot_import|snapshotrestorephase|soap|softnuma|sort_in_tempdb|sorted_data|sorted_data_reorg|spatial|sql|sql_bigint|sql_binary|sql_bit|sql_char|sql_date|sql_decimal|sql_double|sql_float|sql_guid|sql_handle|sql_longvarbinary|sql_longvarchar|sql_numeric|sql_real|sql_smallint|sql_time|sql_timestamp|sql_tinyint|sql_tsi_day|sql_tsi_frac_second|sql_tsi_hour|sql_tsi_minute|sql_tsi_month|sql_tsi_quarter|sql_tsi_second|sql_tsi_week|sql_tsi_year|sql_type_date|sql_type_time|sql_type_timestamp|sql_varbinary|sql_varchar|sql_variant|sql_wchar|sql_wlongvarchar|ssl|ssl_port|standard|standby|start|start_date|started|stat_header|state|statement|static|statistics|statistics_incremental|statistics_norecompute|statistics_only|statman|stats|stats_stream|status|stop|stop_on_error|stopat|stopatmark|stopbeforemark|stoplist|stopped|string_delimiter|subject|supplemental_logging|supported|suspend|symmetric|synchronous_commit|synonym|sysname|system|system_time|system_versioning|table|tableresults|tablock|tablockx|take|tape|target|target_index|target_partition|target_recovery_time|tcp|temporal_history_retention|text|textimage_on|then|thesaurus|throw|time|timeout|timestamp|tinyint|to|top|torn_page_detection|track_columns_updated|trailing|tran|transaction|transfer|transform_noise_words|triple_des|triple_des_3key|truncate|trustworthy|try|tsql|two_digit_year_cutoff|type|type_desc|type_warning|tzoffset|uid|unbounded|uncommitted|unique|uniqueidentifier|unlimited|unload|unlock|unsafe|updlock|url|use|useplan|useroptions|use_type_default|using|utcdatetime|valid_xml|validation|value|values|varbinary|varchar|verbose|verifyonly|version|view_metadata|virtual_device|visiblity|wait_at_low_priority|waitfor|webmethod|week|weekday|weight|well_formed_xml|when|while|widechar|widechar_ansi|widenative|window|windows|with|within|within group|witness|without|without_array_wrapper|workload|wsdl|xact_abort|xlock|xml|xmlschema|xquery|xsinil|year|zone)\\b",
            name: "keyword.other.sql"
        },
        {
            captures: {
                1: {
                    name: "punctuation.section.scope.begin.sql"
                },
                2: {
                    name: "punctuation.section.scope.end.sql"
                }
            },
            comment: "Allow for special ↩ behavior",
            match: "(\\()(\\))",
            name: "meta.block.sql"
        }
    ],
    repository: {
        "comment-block": {
            begin: "/\\*",
            captures: {
                0: {
                    name: "punctuation.definition.comment.sql"
                }
            },
            end: "\\*/",
            name: "comment.block",
            patterns: [
                {
                    include: "#comment-block"
                }
            ]
        },
        comments: {
            patterns: [
                {
                    begin: "(^[ \\t]+)?(?=--)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.whitespace.comment.leading.sql"
                        }
                    },
                    end: "(?!\\G)",
                    patterns: [
                        {
                            begin: "--",
                            beginCaptures: {
                                0: {
                                    name: "punctuation.definition.comment.sql"
                                }
                            },
                            end: "\\n",
                            name: "comment.line.double-dash.sql"
                        }
                    ]
                },
                {
                    begin: "(^[ \\t]+)?(?=#)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.whitespace.comment.leading.sql"
                        }
                    },
                    end: "(?!\\G)",
                    patterns: []
                },
                {
                    include: "#comment-block"
                }
            ]
        },
        regexps: {
            patterns: [
                {
                    begin: "/(?=\\S.*/)",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.sql"
                        }
                    },
                    end: "/",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.sql"
                        }
                    },
                    name: "string.regexp.sql",
                    patterns: [
                        {
                            include: "#string_interpolation"
                        },
                        {
                            match: "\\\\/",
                            name: "constant.character.escape.slash.sql"
                        }
                    ]
                },
                {
                    begin: "%r\\{",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.sql"
                        }
                    },
                    comment: "We should probably handle nested bracket pairs!?! -- Allan",
                    end: "\\}",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.sql"
                        }
                    },
                    name: "string.regexp.modr.sql",
                    patterns: [
                        {
                            include: "#string_interpolation"
                        }
                    ]
                }
            ]
        },
        string_escape: {
            match: "\\\\.",
            name: "constant.character.escape.sql"
        },
        string_interpolation: {
            captures: {
                1: {
                    name: "punctuation.definition.string.begin.sql"
                },
                3: {
                    name: "punctuation.definition.string.end.sql"
                }
            },
            match: "(#\\{)([^\\}]*)(\\})",
            name: "string.interpolated.sql"
        },
        strings: {
            patterns: [
                {
                    captures: {
                        2: {
                            name: "punctuation.definition.string.begin.sql"
                        },
                        3: {
                            name: "punctuation.definition.string.end.sql"
                        }
                    },
                    comment: "this is faster than the next begin/end rule since sub-pattern will match till end-of-line and SQL files tend to have very long lines.",
                    match: "(N)?(')[^']*(')",
                    name: "string.quoted.single.sql"
                },
                {
                    begin: "'",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.sql"
                        }
                    },
                    end: "'",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.sql"
                        }
                    },
                    name: "string.quoted.single.sql",
                    patterns: [
                        {
                            include: "#string_escape"
                        }
                    ]
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.string.begin.sql"
                        },
                        2: {
                            name: "punctuation.definition.string.end.sql"
                        }
                    },
                    comment: "this is faster than the next begin/end rule since sub-pattern will match till end-of-line and SQL files tend to have very long lines.",
                    match: "(`)[^`\\\\]*(`)",
                    name: "string.quoted.other.backtick.sql"
                },
                {
                    begin: "`",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.sql"
                        }
                    },
                    end: "`",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.sql"
                        }
                    },
                    name: "string.quoted.other.backtick.sql",
                    patterns: [
                        {
                            include: "#string_escape"
                        }
                    ]
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.string.begin.sql"
                        },
                        2: {
                            name: "punctuation.definition.string.end.sql"
                        }
                    },
                    comment: "this is faster than the next begin/end rule since sub-pattern will match till end-of-line and SQL files tend to have very long lines.",
                    match: '(")[^"#]*(")',
                    name: "string.quoted.double.sql"
                },
                {
                    begin: '"',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.sql"
                        }
                    },
                    end: '"',
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.sql"
                        }
                    },
                    name: "string.quoted.double.sql",
                    patterns: [
                        {
                            include: "#string_interpolation"
                        }
                    ]
                },
                {
                    begin: "%\\{",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.sql"
                        }
                    },
                    end: "\\}",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.sql"
                        }
                    },
                    name: "string.other.quoted.brackets.sql",
                    patterns: [
                        {
                            include: "#string_interpolation"
                        }
                    ]
                }
            ]
        }
    },
    scopeName: "source.sql"
});
var t = [
    e
];
;
}}),
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/shellscript-BX81u5Ls.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>n)
});
const e = Object.freeze({
    displayName: "Shell",
    name: "shellscript",
    patterns: [
        {
            include: "#initial_context"
        }
    ],
    repository: {
        alias_statement: {
            begin: "(alias)[ \\t]*+[ \\t]*+(?:((?<=^|;|&|[ \\t])(?:readonly|declare|typeset|export|local)(?=[ \\t]|;|&|$))[ \\t]*+)?((?<!\\w)[a-zA-Z_0-9-]+(?!\\w))(?:(\\[)((?:(?:(?:\\$)?(?<!\\w)[a-zA-Z_0-9-]+(?!\\w)|@)|\\*))(\\]))?(?:(?:(\\=)|(\\+\\=))|(\\-\\=))",
            beginCaptures: {
                1: {
                    name: "storage.type.alias.shell"
                },
                2: {
                    name: "storage.modifier.$2.shell"
                },
                3: {
                    name: "variable.other.assignment.shell"
                },
                4: {
                    name: "punctuation.definition.array.access.shell"
                },
                5: {
                    name: "variable.other.assignment.shell"
                },
                6: {
                    name: "punctuation.definition.array.access.shell"
                },
                7: {
                    name: "keyword.operator.assignment.shell"
                },
                8: {
                    name: "keyword.operator.assignment.compound.shell"
                },
                9: {
                    name: "keyword.operator.assignment.compound.shell"
                }
            },
            end: "(?:(?= |\\t|$)|(?:(?:(?:(?:(;)|(&&))|(\\|\\|))|(&))|\\n))",
            endCaptures: {
                1: {
                    name: "punctuation.terminator.statement.semicolon.shell"
                },
                2: {
                    name: "punctuation.separator.statement.and.shell"
                },
                3: {
                    name: "punctuation.separator.statement.or.shell"
                },
                4: {
                    name: "punctuation.separator.statement.background.shell"
                }
            },
            name: "meta.expression.assignment.shell",
            patterns: [
                {
                    include: "#normal_statement_context"
                }
            ]
        },
        argument: {
            begin: "[ \\t]++(?!(?:&|\\||\\(|\\[|#|\\n|$|;))",
            beginCaptures: {},
            end: "(?= |\\t|;|\\||&|$|\\n|\\)|\\`)",
            endCaptures: {},
            name: "meta.argument.shell",
            patterns: [
                {
                    include: "#argument_context"
                },
                {
                    include: "#line_continuation"
                }
            ]
        },
        argument_context: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "string.unquoted.argument.shell",
                            patterns: [
                                {
                                    match: "\\*",
                                    name: "variable.language.special.wildcard.shell"
                                },
                                {
                                    include: "#variable"
                                },
                                {
                                    include: "#numeric_literal"
                                },
                                {
                                    captures: {
                                        1: {
                                            name: "constant.language.$1.shell"
                                        }
                                    },
                                    match: "(?<!\\w)(\\b(?:true|false)\\b)(?!\\w)"
                                }
                            ]
                        }
                    },
                    match: `[ \\t]*+([^
'&;<>\\(\\)\\$\`\\\\"\\|]+(?!>))`
                },
                {
                    include: "#normal_statement_context"
                }
            ]
        },
        assignment: {
            patterns: [
                {
                    begin: "[ \\t]*+(?:((?<=^|;|&|[ \\t])(?:readonly|declare|typeset|export|local)(?=[ \\t]|;|&|$))[ \\t]*+)?((?<!\\w)[a-zA-Z_0-9-]+(?!\\w))(?:(\\[)((?:(?:(?:\\$)?(?<!\\w)[a-zA-Z_0-9-]+(?!\\w)|@)|\\*))(\\]))?(?:(?:(\\=)|(\\+\\=))|(\\-\\=))[ \\t]*+(\\()",
                    beginCaptures: {
                        1: {
                            name: "storage.modifier.$1.shell"
                        },
                        2: {
                            name: "variable.other.assignment.shell"
                        },
                        3: {
                            name: "punctuation.definition.array.access.shell"
                        },
                        4: {
                            name: "variable.other.assignment.shell"
                        },
                        5: {
                            name: "punctuation.definition.array.access.shell"
                        },
                        6: {
                            name: "keyword.operator.assignment.shell"
                        },
                        7: {
                            name: "keyword.operator.assignment.compound.shell"
                        },
                        8: {
                            name: "keyword.operator.assignment.compound.shell"
                        },
                        9: {
                            name: "punctuation.shell"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.shell"
                        }
                    },
                    name: "meta.expression.assignment.shell",
                    patterns: [
                        {
                            include: "#comment"
                        },
                        {
                            include: "#argument_context"
                        }
                    ]
                },
                {
                    begin: "[ \\t]*+(?:((?<=^|;|&|[ \\t])(?:readonly|declare|typeset|export|local)(?=[ \\t]|;|&|$))[ \\t]*+)?((?<!\\w)[a-zA-Z_0-9-]+(?!\\w))(?:(\\[)((?:(?:(?:\\$)?(?<!\\w)[a-zA-Z_0-9-]+(?!\\w)|@)|\\*))(\\]))?(?:(?:(\\=)|(\\+\\=))|(\\-\\=))",
                    beginCaptures: {
                        1: {
                            name: "storage.modifier.$1.shell"
                        },
                        2: {
                            name: "variable.other.assignment.shell"
                        },
                        3: {
                            name: "punctuation.definition.array.access.shell"
                        },
                        4: {
                            name: "variable.other.assignment.shell"
                        },
                        5: {
                            name: "punctuation.definition.array.access.shell"
                        },
                        6: {
                            name: "keyword.operator.assignment.shell"
                        },
                        7: {
                            name: "keyword.operator.assignment.compound.shell"
                        },
                        8: {
                            name: "keyword.operator.assignment.compound.shell"
                        }
                    },
                    end: "(?:(?= |\\t|$)|(?:(?:(?:(?:(;)|(&&))|(\\|\\|))|(&))|\\n))",
                    endCaptures: {
                        1: {
                            name: "punctuation.terminator.statement.semicolon.shell"
                        },
                        2: {
                            name: "punctuation.separator.statement.and.shell"
                        },
                        3: {
                            name: "punctuation.separator.statement.or.shell"
                        },
                        4: {
                            name: "punctuation.separator.statement.background.shell"
                        }
                    },
                    name: "meta.expression.assignment.shell",
                    patterns: [
                        {
                            include: "#comment"
                        },
                        {
                            include: "#argument_context"
                        }
                    ]
                }
            ]
        },
        basic_command_name: {
            captures: {
                1: {
                    name: "storage.modifier.$1.shell"
                },
                2: {
                    name: "entity.name.function.call.shell entity.name.command.shell",
                    patterns: [
                        {
                            match: "(?<!\\w)(?:continue|return|break)(?!\\w)",
                            name: "keyword.control.$0.shell"
                        },
                        {
                            match: "(?<!\\w)(?:unfunction|continue|autoload|unsetopt|bindkey|builtin|getopts|command|declare|unalias|history|unlimit|typeset|suspend|source|printf|unhash|disown|ulimit|return|which|alias|break|false|print|shift|times|umask|umask|unset|read|type|exec|eval|wait|echo|dirs|jobs|kill|hash|stat|exit|test|trap|true|let|set|pwd|cd|fg|bg|fc|:|\\.)(?!\\/)(?!\\w)",
                            name: "support.function.builtin.shell"
                        },
                        {
                            include: "#variable"
                        }
                    ]
                }
            },
            match: `(?!(?:!|&|\\||\\(|\\)|\\{|\\[|<|>|#|\\n|$|;|[ \\t]))(?!foreach\\b(?!\\/)|select\\b(?!\\/)|repeat\\b(?!\\/)|until\\b(?!\\/)|while\\b(?!\\/)|case\\b(?!\\/)|done\\b(?!\\/)|elif\\b(?!\\/)|else\\b(?!\\/)|esac\\b(?!\\/)|then\\b(?!\\/)|for\\b(?!\\/)|end\\b(?!\\/)|in\\b(?!\\/)|fi\\b(?!\\/)|do\\b(?!\\/)|if\\b(?!\\/))(?:((?<=^|;|&|[ \\t])(?:readonly|declare|typeset|export|local)(?=[ \\t]|;|&|$))|((?!"|'|\\\\\\n?$)[^!'" \\t\\n\\r]+?))(?:(?= |\\t)|(?=;|\\||&|\\n|\\)|\\\`|\\{|\\}|[ \\t]*#|\\])(?<!\\\\))`,
            name: "meta.statement.command.name.basic.shell"
        },
        block_comment: {
            begin: "\\s*+(\\/\\*)",
            beginCaptures: {
                1: {
                    name: "punctuation.definition.comment.begin.shell"
                }
            },
            end: "\\*\\/",
            endCaptures: {
                0: {
                    name: "punctuation.definition.comment.end.shell"
                }
            },
            name: "comment.block.shell"
        },
        boolean: {
            match: "\\b(?:true|false)\\b",
            name: "constant.language.$0.shell"
        },
        "case-clause": {
            patterns: [
                {
                    begin: "(?=\\S)",
                    end: ";;&?|;&",
                    endCaptures: {
                        0: {
                            name: "punctuation.terminator.case-clause.shell"
                        }
                    },
                    name: "meta.scope.case-clause.shell",
                    patterns: [
                        {
                            begin: "\\(|(?=\\S)",
                            beginCaptures: {
                                0: {
                                    name: "punctuation.definition.case-pattern.shell"
                                }
                            },
                            end: "\\)",
                            endCaptures: {
                                0: {
                                    name: "punctuation.definition.case-pattern.shell"
                                }
                            },
                            name: "meta.scope.case-pattern.shell",
                            patterns: [
                                {
                                    match: "\\|",
                                    name: "punctuation.separator.pipe-sign.shell"
                                },
                                {
                                    include: "#string"
                                },
                                {
                                    include: "#variable"
                                },
                                {
                                    include: "#interpolation"
                                },
                                {
                                    include: "#pathname"
                                }
                            ]
                        },
                        {
                            begin: "(?<=\\))",
                            end: "(?=;;&?|;&)",
                            name: "meta.scope.case-clause-body.shell",
                            patterns: [
                                {
                                    include: "#initial_context"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        comment: {
            captures: {
                1: {
                    name: "comment.line.number-sign.shell meta.shebang.shell"
                },
                2: {
                    name: "punctuation.definition.comment.shebang.shell"
                },
                3: {
                    name: "comment.line.number-sign.shell"
                },
                4: {
                    name: "punctuation.definition.comment.shell"
                }
            },
            match: "(?:^|[ \\t]++)(?:((#!).*)|((#).*))"
        },
        comments: {
            patterns: [
                {
                    include: "#block_comment"
                },
                {
                    include: "#line_comment"
                }
            ]
        },
        "compound-command": {
            patterns: [
                {
                    begin: "\\[{1,2}",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.logical-expression.shell"
                        }
                    },
                    end: "\\]{1,2}",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.logical-expression.shell"
                        }
                    },
                    name: "meta.scope.logical-expression.shell",
                    patterns: [
                        {
                            include: "#logical-expression"
                        },
                        {
                            include: "#initial_context"
                        }
                    ]
                },
                {
                    begin: "\\({2}",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.shell"
                        }
                    },
                    end: "\\){2}",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.shell"
                        }
                    },
                    name: "string.other.math.shell",
                    patterns: [
                        {
                            include: "#math"
                        }
                    ]
                },
                {
                    begin: "\\(",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.subshell.shell"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.subshell.shell"
                        }
                    },
                    name: "meta.scope.subshell.shell",
                    patterns: [
                        {
                            include: "#initial_context"
                        }
                    ]
                },
                {
                    begin: "(?<=\\s|^){(?=\\s|$)",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.group.shell"
                        }
                    },
                    end: "(?<=^|;)\\s*(})",
                    endCaptures: {
                        1: {
                            name: "punctuation.definition.group.shell"
                        }
                    },
                    name: "meta.scope.group.shell",
                    patterns: [
                        {
                            include: "#initial_context"
                        }
                    ]
                }
            ]
        },
        continuation_of_double_quoted_command_name: {
            begin: '\\G(?<=")',
            beginCaptures: {},
            contentName: "meta.statement.command.name.continuation string.quoted.double entity.name.function.call entity.name.command",
            end: '"',
            endCaptures: {
                0: {
                    name: "string.quoted.double.shell punctuation.definition.string.end.shell entity.name.function.call.shell entity.name.command.shell"
                }
            },
            patterns: [
                {
                    match: '\\\\[\\$\\n`"\\\\]',
                    name: "constant.character.escape.shell"
                },
                {
                    include: "#variable"
                },
                {
                    include: "#interpolation"
                }
            ]
        },
        continuation_of_single_quoted_command_name: {
            begin: "\\G(?<=')",
            beginCaptures: {},
            contentName: "meta.statement.command.name.continuation string.quoted.single entity.name.function.call entity.name.command",
            end: "'",
            endCaptures: {
                0: {
                    name: "string.quoted.single.shell punctuation.definition.string.end.shell entity.name.function.call.shell entity.name.command.shell"
                }
            }
        },
        custom_command_names: {
            patterns: []
        },
        custom_commands: {
            patterns: []
        },
        double_quote_context: {
            patterns: [
                {
                    match: '\\\\[\\$`"\\\\\\n]',
                    name: "constant.character.escape.shell"
                },
                {
                    include: "#variable"
                },
                {
                    include: "#interpolation"
                }
            ]
        },
        double_quote_escape_char: {
            match: '\\\\[\\$`"\\\\\\n]',
            name: "constant.character.escape.shell"
        },
        function_definition: {
            applyEndPatternLast: 1,
            begin: "[ \\t]*+(?:(\\bfunction\\b)[ \\t]*+([^ \\t\\n\\r\\(\\)=]+)(?:(\\()[ \\t]*+(\\)))?|([^ \\t\\n\\r\\(\\)=]+)[ \\t]*+(\\()[ \\t]*+(\\)))",
            beginCaptures: {
                1: {
                    name: "storage.type.function.shell"
                },
                2: {
                    name: "entity.name.function.shell"
                },
                3: {
                    name: "punctuation.definition.arguments.shell"
                },
                4: {
                    name: "punctuation.definition.arguments.shell"
                },
                5: {
                    name: "entity.name.function.shell"
                },
                6: {
                    name: "punctuation.definition.arguments.shell"
                },
                7: {
                    name: "punctuation.definition.arguments.shell"
                }
            },
            end: "(?<=\\}|\\))",
            endCaptures: {},
            name: "meta.function.shell",
            patterns: [
                {
                    match: "\\G(?:\\t| |\\n)"
                },
                {
                    begin: "\\{",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.group.shell punctuation.section.function.definition.shell"
                        }
                    },
                    end: "\\}",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.group.shell punctuation.section.function.definition.shell"
                        }
                    },
                    name: "meta.function.body.shell",
                    patterns: [
                        {
                            include: "#initial_context"
                        }
                    ]
                },
                {
                    begin: "\\(",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.group.shell punctuation.section.function.definition.shell"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.group.shell punctuation.section.function.definition.shell"
                        }
                    },
                    name: "meta.function.body.shell",
                    patterns: [
                        {
                            include: "#initial_context"
                        }
                    ]
                }
            ]
        },
        heredoc: {
            patterns: [
                {
                    begin: `((?<!<)<<-)[ \\t]*+("|')[ \\t]*+((?<!\\w)[a-zA-Z_0-9-]+(?!\\w))(?=\\s|;|&|<|"|')(?:\\2)(.*)`,
                    beginCaptures: {
                        1: {
                            name: "keyword.operator.heredoc.shell"
                        },
                        2: {},
                        3: {
                            name: "punctuation.definition.string.heredoc.shell"
                        },
                        4: {
                            patterns: [
                                {
                                    include: "#normal_statement_context"
                                }
                            ]
                        }
                    },
                    contentName: "string.quoted.heredoc.indent",
                    end: "^\\t*(?:\\3)(?=\\s|;|&|$)",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.heredoc.shell"
                        }
                    },
                    patterns: []
                },
                {
                    begin: `((?<!<)<<(?!<))[ \\t]*+("|')[ \\t]*+((?<!\\w)[a-zA-Z_0-9-]+(?!\\w))(?=\\s|;|&|<|"|')(?:\\2)(.*)`,
                    beginCaptures: {
                        1: {
                            name: "keyword.operator.heredoc.shell"
                        },
                        2: {},
                        3: {
                            name: "punctuation.definition.string.heredoc.shell"
                        },
                        4: {
                            patterns: [
                                {
                                    include: "#normal_statement_context"
                                }
                            ]
                        }
                    },
                    contentName: "string.quoted.heredoc.no-indent",
                    end: "^(?:\\3)(?=\\s|;|&|$)",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.heredoc.shell"
                        }
                    },
                    patterns: []
                },
                {
                    begin: `((?<!<)<<-)[ \\t]*+((?<!\\w)[a-zA-Z_0-9-]+(?!\\w))(?=\\s|;|&|<|"|')(.*)`,
                    beginCaptures: {
                        1: {
                            name: "keyword.operator.heredoc.shell"
                        },
                        2: {
                            name: "punctuation.definition.string.heredoc.shell"
                        },
                        3: {
                            patterns: [
                                {
                                    include: "#normal_statement_context"
                                }
                            ]
                        }
                    },
                    contentName: "string.unquoted.heredoc.indent",
                    end: "^\\t*(?:\\2)(?=\\s|;|&|$)",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.heredoc.shell"
                        }
                    },
                    patterns: [
                        {
                            include: "#double_quote_escape_char"
                        },
                        {
                            include: "#variable"
                        },
                        {
                            include: "#interpolation"
                        }
                    ]
                },
                {
                    begin: `((?<!<)<<(?!<))[ \\t]*+((?<!\\w)[a-zA-Z_0-9-]+(?!\\w))(?=\\s|;|&|<|"|')(.*)`,
                    beginCaptures: {
                        1: {
                            name: "keyword.operator.heredoc.shell"
                        },
                        2: {
                            name: "punctuation.definition.string.heredoc.shell"
                        },
                        3: {
                            patterns: [
                                {
                                    include: "#normal_statement_context"
                                }
                            ]
                        }
                    },
                    contentName: "string.unquoted.heredoc.no-indent",
                    end: "^(?:\\2)(?=\\s|;|&|$)",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.heredoc.shell"
                        }
                    },
                    patterns: [
                        {
                            include: "#double_quote_escape_char"
                        },
                        {
                            include: "#variable"
                        },
                        {
                            include: "#interpolation"
                        }
                    ]
                }
            ]
        },
        herestring: {
            patterns: [
                {
                    begin: "(<<<)\\s*(('))",
                    beginCaptures: {
                        1: {
                            name: "keyword.operator.herestring.shell"
                        },
                        2: {
                            name: "string.quoted.single.shell"
                        },
                        3: {
                            name: "punctuation.definition.string.begin.shell"
                        }
                    },
                    contentName: "string.quoted.single.shell",
                    end: "(')",
                    endCaptures: {
                        0: {
                            name: "string.quoted.single.shell"
                        },
                        1: {
                            name: "punctuation.definition.string.end.shell"
                        }
                    },
                    name: "meta.herestring.shell"
                },
                {
                    begin: '(<<<)\\s*(("))',
                    beginCaptures: {
                        1: {
                            name: "keyword.operator.herestring.shell"
                        },
                        2: {
                            name: "string.quoted.double.shell"
                        },
                        3: {
                            name: "punctuation.definition.string.begin.shell"
                        }
                    },
                    contentName: "string.quoted.double.shell",
                    end: '(")',
                    endCaptures: {
                        0: {
                            name: "string.quoted.double.shell"
                        },
                        1: {
                            name: "punctuation.definition.string.end.shell"
                        }
                    },
                    name: "meta.herestring.shell",
                    patterns: [
                        {
                            include: "#double_quote_context"
                        }
                    ]
                },
                {
                    captures: {
                        1: {
                            name: "keyword.operator.herestring.shell"
                        },
                        2: {
                            name: "string.unquoted.herestring.shell",
                            patterns: [
                                {
                                    include: "#initial_context"
                                }
                            ]
                        }
                    },
                    match: "(<<<)\\s*(([^\\s)\\\\]|\\\\.)+)",
                    name: "meta.herestring.shell"
                }
            ]
        },
        initial_context: {
            patterns: [
                {
                    include: "#comment"
                },
                {
                    include: "#pipeline"
                },
                {
                    include: "#normal_statement_seperator"
                },
                {
                    include: "#logical_expression_double"
                },
                {
                    include: "#logical_expression_single"
                },
                {
                    include: "#misc_ranges"
                },
                {
                    include: "#loop"
                },
                {
                    include: "#function_definition"
                },
                {
                    include: "#variable"
                },
                {
                    include: "#interpolation"
                },
                {
                    include: "#heredoc"
                },
                {
                    include: "#herestring"
                },
                {
                    include: "#redirection"
                },
                {
                    include: "#pathname"
                },
                {
                    include: "#keyword"
                },
                {
                    include: "#alias_statement"
                },
                {
                    include: "#normal_statement"
                },
                {
                    include: "#string"
                },
                {
                    include: "#support"
                }
            ]
        },
        inline_comment: {
            captures: {
                1: {
                    name: "comment.block.shell punctuation.definition.comment.begin.shell"
                },
                2: {
                    name: "comment.block.shell"
                },
                3: {
                    patterns: [
                        {
                            match: "\\*\\/",
                            name: "comment.block.shell punctuation.definition.comment.end.shell"
                        },
                        {
                            match: "\\*",
                            name: "comment.block.shell"
                        }
                    ]
                }
            },
            match: "(\\/\\*)((?:[^\\*]|(?:\\*)++[^\\/])*+((?:\\*)++\\/))"
        },
        interpolation: {
            patterns: [
                {
                    begin: "\\$\\({2}",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.evaluation.arithmetic.begin.shell"
                        }
                    },
                    end: "\\)\\s*\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.evaluation.arithmetic.end.shell"
                        }
                    },
                    name: "string.other.math.shell",
                    patterns: [
                        {
                            include: "#math"
                        }
                    ]
                },
                {
                    begin: "`",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.evaluation.backticks.shell"
                        }
                    },
                    end: "`",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.evaluation.backticks.shell"
                        }
                    },
                    name: "string.interpolated.backtick.shell",
                    patterns: [
                        {
                            match: "\\\\[`\\\\$]",
                            name: "constant.character.escape.shell"
                        },
                        {
                            begin: "(?<=\\W)(?=#)(?!#{)",
                            beginCaptures: {
                                1: {
                                    name: "punctuation.whitespace.comment.leading.shell"
                                }
                            },
                            end: "(?!\\G)",
                            patterns: [
                                {
                                    begin: "#",
                                    beginCaptures: {
                                        0: {
                                            name: "punctuation.definition.comment.shell"
                                        }
                                    },
                                    end: "(?=`)",
                                    name: "comment.line.number-sign.shell"
                                }
                            ]
                        },
                        {
                            include: "#initial_context"
                        }
                    ]
                },
                {
                    begin: "\\$\\(",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.evaluation.parens.begin.shell"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.evaluation.parens.end.shell"
                        }
                    },
                    name: "string.interpolated.dollar.shell",
                    patterns: [
                        {
                            include: "#initial_context"
                        }
                    ]
                }
            ]
        },
        keyword: {
            patterns: [
                {
                    match: "(?<=^|;|&| |\\t)(?:continue|foreach|return|select|repeat|break|until|while|case|done|elif|else|esac|then|for|end|do|if|fi|in)(?= |\\t|;|&|$)",
                    name: "keyword.control.$0.shell"
                }
            ]
        },
        line_comment: {
            begin: "\\s*+(\\/\\/)",
            beginCaptures: {
                1: {
                    name: "punctuation.definition.comment.shell"
                }
            },
            end: "(?<=\\n)(?<!\\\\\\n)",
            endCaptures: {},
            name: "comment.line.double-slash.shell",
            patterns: [
                {
                    include: "#line_continuation_character"
                }
            ]
        },
        line_continuation: {
            match: "\\\\(?=\\n)",
            name: "constant.character.escape.line-continuation.shell"
        },
        "logical-expression": {
            patterns: [
                {
                    comment: "do we want a special rule for ( expr )?",
                    match: "=[=~]?|!=?|<|>|&&|\\|\\|",
                    name: "keyword.operator.logical.shell"
                },
                {
                    match: "(?<!\\S)-(nt|ot|ef|eq|ne|l[te]|g[te]|[a-hknoprstuwxzOGLSN])\\b",
                    name: "keyword.operator.logical.shell"
                }
            ]
        },
        logical_expression_context: {
            patterns: [
                {
                    include: "#regex_comparison"
                },
                {
                    include: "#logical-expression"
                },
                {
                    include: "#logical_expression_single"
                },
                {
                    include: "#logical_expression_double"
                },
                {
                    include: "#comment"
                },
                {
                    include: "#boolean"
                },
                {
                    include: "#redirect_number"
                },
                {
                    include: "#numeric_literal"
                },
                {
                    include: "#pipeline"
                },
                {
                    include: "#normal_statement_seperator"
                },
                {
                    include: "#string"
                },
                {
                    include: "#variable"
                },
                {
                    include: "#interpolation"
                },
                {
                    include: "#heredoc"
                },
                {
                    include: "#herestring"
                },
                {
                    include: "#pathname"
                },
                {
                    include: "#keyword"
                },
                {
                    include: "#support"
                }
            ]
        },
        logical_expression_double: {
            begin: "\\[\\[",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.logical-expression.shell"
                }
            },
            end: "\\]\\]",
            endCaptures: {
                0: {
                    name: "punctuation.definition.logical-expression.shell"
                }
            },
            name: "meta.scope.logical-expression.shell",
            patterns: [
                {
                    include: "#logical_expression_context"
                }
            ]
        },
        logical_expression_single: {
            begin: "\\[",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.logical-expression.shell"
                }
            },
            end: "\\]",
            endCaptures: {
                0: {
                    name: "punctuation.definition.logical-expression.shell"
                }
            },
            name: "meta.scope.logical-expression.shell",
            patterns: [
                {
                    include: "#logical_expression_context"
                }
            ]
        },
        loop: {
            patterns: [
                {
                    begin: "(?<=^|;|&|\\s)(for)\\s+(?=\\({2})",
                    beginCaptures: {
                        1: {
                            name: "keyword.control.shell"
                        }
                    },
                    end: "(?<=^|;|&|\\s)done(?=\\s|;|&|$|\\))",
                    endCaptures: {
                        0: {
                            name: "keyword.control.shell"
                        }
                    },
                    name: "meta.scope.for-loop.shell",
                    patterns: [
                        {
                            include: "#initial_context"
                        }
                    ]
                },
                {
                    begin: "(?<=^|;|&|\\s)(for)\\s+(.+?)\\s+(in)(?=\\s|;|&|$)",
                    beginCaptures: {
                        1: {
                            name: "keyword.control.shell"
                        },
                        2: {
                            name: "variable.other.loop.shell",
                            patterns: [
                                {
                                    include: "#string"
                                }
                            ]
                        },
                        3: {
                            name: "keyword.control.shell"
                        }
                    },
                    end: "(?<=^|;|&|\\s)done(?=\\s|;|&|$|\\))",
                    endCaptures: {
                        0: {
                            name: "keyword.control.shell"
                        }
                    },
                    name: "meta.scope.for-in-loop.shell",
                    patterns: [
                        {
                            include: "#initial_context"
                        }
                    ]
                },
                {
                    begin: "(?<=^|;|&|\\s)(while|until)(?=\\s|;|&|$)",
                    beginCaptures: {
                        1: {
                            name: "keyword.control.shell"
                        }
                    },
                    end: "(?<=^|;|&|\\s)done(?=\\s|;|&|$|\\))",
                    endCaptures: {
                        0: {
                            name: "keyword.control.shell"
                        }
                    },
                    name: "meta.scope.while-loop.shell",
                    patterns: [
                        {
                            include: "#initial_context"
                        }
                    ]
                },
                {
                    begin: "(?<=^|;|&|\\s)(select)\\s+((?:[^\\s\\\\]|\\\\.)+)(?=\\s|;|&|$)",
                    beginCaptures: {
                        1: {
                            name: "keyword.control.shell"
                        },
                        2: {
                            name: "variable.other.loop.shell"
                        }
                    },
                    end: "(?<=^|;|&|\\s)(done)(?=\\s|;|&|$|\\))",
                    endCaptures: {
                        1: {
                            name: "keyword.control.shell"
                        }
                    },
                    name: "meta.scope.select-block.shell",
                    patterns: [
                        {
                            include: "#initial_context"
                        }
                    ]
                },
                {
                    begin: "(?<=^|;|&|\\s)case(?=\\s|;|&|$)",
                    beginCaptures: {
                        0: {
                            name: "keyword.control.shell"
                        }
                    },
                    end: "(?<=^|;|&|\\s)esac(?=\\s|;|&|$)",
                    endCaptures: {
                        0: {
                            name: "keyword.control.shell"
                        }
                    },
                    name: "meta.scope.case-block.shell",
                    patterns: [
                        {
                            begin: "(?<=^|;|&|\\s)in(?=\\s|;|&|$)",
                            beginCaptures: {
                                0: {
                                    name: "keyword.control.shell"
                                }
                            },
                            end: "(?<=^|;|&|\\s)(?=esac(\\s|;|&|$))",
                            name: "meta.scope.case-body.shell",
                            patterns: [
                                {
                                    include: "#comment"
                                },
                                {
                                    include: "#case-clause"
                                }
                            ]
                        },
                        {
                            include: "#initial_context"
                        }
                    ]
                },
                {
                    begin: "(?<=^|;|&|\\s)if(?=\\s|;|&|$)",
                    beginCaptures: {
                        0: {
                            name: "keyword.control.shell"
                        }
                    },
                    end: "(?<=^|;|&|\\s)fi(?=\\s|;|&|$)",
                    endCaptures: {
                        0: {
                            name: "keyword.control.shell"
                        }
                    },
                    name: "meta.scope.if-block.shell",
                    patterns: [
                        {
                            include: "#initial_context"
                        }
                    ]
                }
            ]
        },
        math: {
            patterns: [
                {
                    include: "#variable"
                },
                {
                    match: "\\+{1,2}|-{1,2}|!|~|\\*{1,2}|/|%|<[<=]?|>[>=]?|==|!=|^|\\|{1,2}|&{1,2}|\\?|\\:|,|=|[*/%+\\-&^|]=|<<=|>>=",
                    name: "keyword.operator.arithmetic.shell"
                },
                {
                    match: "0[xX][0-9A-Fa-f]+",
                    name: "constant.numeric.hex.shell"
                },
                {
                    match: "0\\d+",
                    name: "constant.numeric.octal.shell"
                },
                {
                    match: "\\d{1,2}#[0-9a-zA-Z@_]+",
                    name: "constant.numeric.other.shell"
                },
                {
                    match: "\\d+",
                    name: "constant.numeric.integer.shell"
                }
            ]
        },
        misc_ranges: {
            patterns: [
                {
                    include: "#logical_expression_single"
                },
                {
                    include: "#logical_expression_double"
                },
                {
                    begin: "\\(\\(",
                    beginCaptures: {
                        0: {
                            name: "punctuation.section.arithmetic.shell"
                        }
                    },
                    end: "\\)\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.arithmetic.shell"
                        }
                    },
                    name: "meta.arithmetic.shell",
                    patterns: [
                        {
                            include: "#math"
                        }
                    ]
                },
                {
                    begin: "(?<!=)\\(",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.subshell"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.subshell"
                        }
                    },
                    name: "meta.scope.subshell",
                    patterns: [
                        {
                            include: "#initial_context"
                        }
                    ]
                },
                {
                    begin: "(?<![^ \\t])({)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.group.shell"
                        }
                    },
                    end: "}",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.group.shell"
                        }
                    },
                    name: "meta.scope.group.shell",
                    patterns: [
                        {
                            include: "#initial_context"
                        }
                    ]
                }
            ]
        },
        modifiers: {
            match: "(?<=^|;|&|[ \\t])(?:readonly|declare|typeset|export|local)(?=[ \\t]|;|&|$)",
            name: "storage.modifier.$0.shell"
        },
        normal_statement: {
            begin: "(?!^[ \\t]*+$)(?:(?<=^until | until |\\tuntil |^while | while |\\twhile |^elif | elif |\\telif |^else | else |\\telse |^then | then |\\tthen |^do | do |\\tdo |^if | if |\\tif )|(?<=(?:^|;|\\||&|!|\\(|\\{|\\`)))[ \\t]*+(?!nocorrect\\W|nocorrect\\$|function\\W|function\\$|foreach\\W|foreach\\$|repeat\\W|repeat\\$|logout\\W|logout\\$|coproc\\W|coproc\\$|select\\W|select\\$|while\\W|while\\$|pushd\\W|pushd\\$|until\\W|until\\$|case\\W|case\\$|done\\W|done\\$|elif\\W|elif\\$|else\\W|else\\$|esac\\W|esac\\$|popd\\W|popd\\$|then\\W|then\\$|time\\W|time\\$|for\\W|for\\$|end\\W|end\\$|fi\\W|fi\\$|do\\W|do\\$|in\\W|in\\$|if\\W|if\\$)",
            beginCaptures: {},
            end: "(?=;|\\||&|\\n|\\)|\\`|\\{|\\}|[ \\t]*#|\\])(?<!\\\\)",
            endCaptures: {},
            name: "meta.statement.shell",
            patterns: [
                {
                    include: "#function_definition"
                },
                {
                    include: "#assignment"
                },
                {
                    begin: "[ \\t]*+(?!(?:!|&|\\||\\(|\\)|\\{|\\[|<|>|#|\\n|$|;|[ \\t]))(?!foreach\\b(?!\\/)|select\\b(?!\\/)|repeat\\b(?!\\/)|until\\b(?!\\/)|while\\b(?!\\/)|case\\b(?!\\/)|done\\b(?!\\/)|elif\\b(?!\\/)|else\\b(?!\\/)|esac\\b(?!\\/)|then\\b(?!\\/)|for\\b(?!\\/)|end\\b(?!\\/)|in\\b(?!\\/)|fi\\b(?!\\/)|do\\b(?!\\/)|if\\b(?!\\/))(?!\\\\\\n?$)",
                    beginCaptures: {},
                    end: "(?=;|\\||&|\\n|\\)|\\`|\\{|\\}|[ \\t]*#|\\])(?<!\\\\)",
                    endCaptures: {},
                    name: "meta.statement.command.shell",
                    patterns: [
                        {
                            begin: "\\G",
                            beginCaptures: {},
                            end: "(?= |\\t|;|\\||&|$|\\n|\\)|\\`)",
                            endCaptures: {},
                            name: "meta.statement.command.name.shell",
                            patterns: [
                                {
                                    include: "#modifiers"
                                },
                                {
                                    match: "(?<!\\w)(?:continue|return|break)(?!\\w)",
                                    name: "entity.name.function.call.shell entity.name.command.shell keyword.control.$0.shell"
                                },
                                {
                                    match: "(?<!\\w)(?:unfunction|continue|autoload|unsetopt|bindkey|builtin|getopts|command|declare|unalias|history|unlimit|typeset|suspend|source|printf|unhash|disown|ulimit|return|which|alias|break|false|print|shift|times|umask|umask|unset|read|type|exec|eval|wait|echo|dirs|jobs|kill|hash|stat|exit|test|trap|true|let|set|pwd|cd|fg|bg|fc|:|\\.)(?!\\/)(?!\\w)",
                                    name: "entity.name.function.call.shell entity.name.command.shell support.function.builtin.shell"
                                },
                                {
                                    include: "#variable"
                                },
                                {
                                    captures: {
                                        1: {
                                            name: "entity.name.function.call.shell entity.name.command.shell"
                                        }
                                    },
                                    match: `(?<=\\G|'|"|\\}|\\))([^ \\n\\t\\r"'=;&\\|\`\\)\\{]+)`
                                },
                                {
                                    begin: `(?:\\G|(?<! |\\t|;|\\||&|\\n|\\{|#))((?:\\$)?)((?:(")|(')))`,
                                    beginCaptures: {
                                        1: {
                                            name: "meta.statement.command.name.quoted.shell punctuation.definition.string.shell entity.name.function.call.shell entity.name.command.shell"
                                        },
                                        2: {},
                                        3: {
                                            name: "meta.statement.command.name.quoted.shell string.quoted.double.shell punctuation.definition.string.begin.shell entity.name.function.call.shell entity.name.command.shell"
                                        },
                                        4: {
                                            name: "meta.statement.command.name.quoted.shell string.quoted.single.shell punctuation.definition.string.begin.shell entity.name.function.call.shell entity.name.command.shell"
                                        }
                                    },
                                    end: "(?<!\\G)(?<=(?:\\2))",
                                    endCaptures: {},
                                    patterns: [
                                        {
                                            include: "#continuation_of_single_quoted_command_name"
                                        },
                                        {
                                            include: "#continuation_of_double_quoted_command_name"
                                        }
                                    ]
                                },
                                {
                                    include: "#line_continuation"
                                }
                            ]
                        },
                        {
                            include: "#line_continuation"
                        },
                        {
                            include: "#option"
                        },
                        {
                            include: "#argument"
                        },
                        {
                            include: "#statement_context"
                        },
                        {
                            include: "#string"
                        }
                    ]
                },
                {
                    include: "#line_continuation"
                },
                {
                    include: "#normal_statement_context"
                }
            ]
        },
        normal_statement_context: {
            patterns: [
                {
                    include: "#comment"
                },
                {
                    include: "#pipeline"
                },
                {
                    include: "#normal_statement_seperator"
                },
                {
                    include: "#misc_ranges"
                },
                {
                    include: "#boolean"
                },
                {
                    include: "#redirect_number"
                },
                {
                    include: "#numeric_literal"
                },
                {
                    include: "#string"
                },
                {
                    include: "#variable"
                },
                {
                    include: "#interpolation"
                },
                {
                    include: "#heredoc"
                },
                {
                    include: "#herestring"
                },
                {
                    include: "#redirection"
                },
                {
                    include: "#pathname"
                },
                {
                    include: "#keyword"
                },
                {
                    include: "#support"
                }
            ]
        },
        normal_statement_seperator: {
            captures: {
                1: {
                    name: "punctuation.terminator.statement.semicolon.shell"
                },
                2: {
                    name: "punctuation.separator.statement.and.shell"
                },
                3: {
                    name: "punctuation.separator.statement.or.shell"
                },
                4: {
                    name: "punctuation.separator.statement.background.shell"
                }
            },
            match: "(?:(?:(?:(?:(;)|(&&))|(\\|\\|))|(&))|\\n)"
        },
        numeric_literal: {
            captures: {
                1: {
                    name: "constant.numeric.shell constant.numeric.hex.shell"
                },
                2: {
                    name: "constant.numeric.shell constant.numeric.octal.shell"
                },
                3: {
                    name: "constant.numeric.shell constant.numeric.other.shell"
                },
                4: {
                    name: "constant.numeric.shell constant.numeric.integer.shell"
                },
                5: {
                    name: "constant.numeric.shell constant.numeric.integer.shell"
                }
            },
            match: "[ \\t]*+(?<==| |\\t|^|\\{|\\(|\\[)(?:(?:(?:(?:(0[xX][0-9A-Fa-f]+)|(0\\d+))|(\\d{1,2}#[0-9a-zA-Z@_]+))|(-?\\d+\\.\\d+))|(-?\\d+))(?!>)"
        },
        option: {
            begin: "[ \\t]++(-)((?!(?:!|&|\\||\\(|\\)|\\{|\\[|<|>|#|\\n|$|;|[ \\t])))",
            beginCaptures: {
                1: {
                    name: "string.unquoted.argument.shell constant.other.option.dash.shell"
                },
                2: {
                    name: "string.unquoted.argument.shell constant.other.option.shell"
                }
            },
            contentName: "string.unquoted.argument constant.other.option",
            end: "(?:(?=[ \\t])|(?=;|\\||&|\\n|\\)|\\`|\\{|\\}|[ \\t]*#|\\])(?<!\\\\))",
            endCaptures: {},
            patterns: [
                {
                    include: "#option_context"
                }
            ]
        },
        option_context: {
            patterns: [
                {
                    include: "#misc_ranges"
                },
                {
                    include: "#string"
                },
                {
                    include: "#variable"
                },
                {
                    include: "#interpolation"
                },
                {
                    include: "#heredoc"
                },
                {
                    include: "#herestring"
                },
                {
                    include: "#redirection"
                },
                {
                    include: "#pathname"
                },
                {
                    include: "#keyword"
                },
                {
                    include: "#support"
                }
            ]
        },
        pathname: {
            patterns: [
                {
                    match: "(?<=\\s|:|=|^)~",
                    name: "keyword.operator.tilde.shell"
                },
                {
                    match: "\\*|\\?",
                    name: "keyword.operator.glob.shell"
                },
                {
                    begin: "([?*+@!])(\\()",
                    beginCaptures: {
                        1: {
                            name: "keyword.operator.extglob.shell"
                        },
                        2: {
                            name: "punctuation.definition.extglob.shell"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.extglob.shell"
                        }
                    },
                    name: "meta.structure.extglob.shell",
                    patterns: [
                        {
                            include: "#initial_context"
                        }
                    ]
                }
            ]
        },
        pipeline: {
            patterns: [
                {
                    match: "(?<=^|;|&|\\s)(time)(?=\\s|;|&|$)",
                    name: "keyword.other.shell"
                },
                {
                    match: "[|!]",
                    name: "keyword.operator.pipe.shell"
                }
            ]
        },
        redirect_number: {
            captures: {
                1: {
                    name: "keyword.operator.redirect.stdout.shell"
                },
                2: {
                    name: "keyword.operator.redirect.stderr.shell"
                },
                3: {
                    name: "keyword.operator.redirect.$3.shell"
                }
            },
            match: "(?<=[ \\t])(?:(1)|(2)|(\\d+))(?=>)"
        },
        redirection: {
            patterns: [
                {
                    begin: "[><]\\(",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.shell"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.shell"
                        }
                    },
                    name: "string.interpolated.process-substitution.shell",
                    patterns: [
                        {
                            include: "#initial_context"
                        }
                    ]
                },
                {
                    match: "(?<![<>])(&>|\\d*>&\\d*|\\d*(>>|>|<)|\\d*<&|\\d*<>)(?![<>])",
                    name: "keyword.operator.redirect.shell"
                }
            ]
        },
        regex_comparison: {
            match: "\\=~",
            name: "keyword.operator.logical.regex.shell"
        },
        regexp: {
            patterns: [
                {
                    match: ".+"
                }
            ]
        },
        simple_options: {
            captures: {
                0: {
                    patterns: [
                        {
                            captures: {
                                1: {
                                    name: "string.unquoted.argument.shell constant.other.option.dash.shell"
                                },
                                2: {
                                    name: "string.unquoted.argument.shell constant.other.option.shell"
                                }
                            },
                            match: "[ \\t]++(\\-)(\\w+)"
                        }
                    ]
                }
            },
            match: "(?:[ \\t]++\\-\\w+)*"
        },
        start_of_command: {
            match: "[ \\t]*+(?!(?:!|&|\\||\\(|\\)|\\{|\\[|<|>|#|\\n|$|;|[ \\t]))(?!foreach\\b(?!\\/)|select\\b(?!\\/)|repeat\\b(?!\\/)|until\\b(?!\\/)|while\\b(?!\\/)|case\\b(?!\\/)|done\\b(?!\\/)|elif\\b(?!\\/)|else\\b(?!\\/)|esac\\b(?!\\/)|then\\b(?!\\/)|for\\b(?!\\/)|end\\b(?!\\/)|in\\b(?!\\/)|fi\\b(?!\\/)|do\\b(?!\\/)|if\\b(?!\\/))(?!\\\\\\n?$)"
        },
        start_of_double_quoted_command_name: {
            captures: {
                1: {
                    name: "entity.name.function.call.shell entity.name.command.shell",
                    patterns: [
                        {
                            match: "\\*",
                            name: "variable.language.special.wildcard.shell"
                        },
                        {
                            include: "#variable"
                        },
                        {
                            include: "#numeric_literal"
                        },
                        {
                            captures: {
                                1: {
                                    name: "constant.language.$1.shell"
                                }
                            },
                            match: "(?<!\\w)(\\b(?:true|false)\\b)(?!\\w)"
                        }
                    ]
                }
            },
            match: `(?!(?:!|&|\\||\\(|\\)|\\{|\\[|<|>|#|\\n|$|;|[ \\t]))(?:[ \\t]*+([^
'&;<>\\(\\)\\$\`\\\\"\\|]+(?!>)))?(?:(?:\\$")|")`,
            name: "meta.statement.command.name.quoted.shell string.quoted.double.shell punctuation.definition.string.begin.shell entity.name.function.call.shell entity.name.command.shell"
        },
        start_of_single_quoted_command_name: {
            captures: {
                1: {
                    name: "entity.name.function.call.shell entity.name.command.shell",
                    patterns: [
                        {
                            match: "\\*",
                            name: "variable.language.special.wildcard.shell"
                        },
                        {
                            include: "#variable"
                        },
                        {
                            include: "#numeric_literal"
                        },
                        {
                            captures: {
                                1: {
                                    name: "constant.language.$1.shell"
                                }
                            },
                            match: "(?<!\\w)(\\b(?:true|false)\\b)(?!\\w)"
                        }
                    ]
                }
            },
            match: `(?!(?:!|&|\\||\\(|\\)|\\{|\\[|<|>|#|\\n|$|;|[ \\t]))(?:[ \\t]*+([^
'&;<>\\(\\)\\$\`\\\\"\\|]+(?!>)))?(?:(?:\\$')|')`,
            name: "meta.statement.command.name.quoted.shell string.quoted.single.shell punctuation.definition.string.begin.shell entity.name.function.call.shell entity.name.command.shell"
        },
        string: {
            patterns: [
                {
                    match: "\\\\.",
                    name: "constant.character.escape.shell"
                },
                {
                    begin: "'",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.shell"
                        }
                    },
                    end: "'",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.shell"
                        }
                    },
                    name: "string.quoted.single.shell"
                },
                {
                    begin: '\\$?"',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.shell"
                        }
                    },
                    end: '"',
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.shell"
                        }
                    },
                    name: "string.quoted.double.shell",
                    patterns: [
                        {
                            match: '\\\\[\\$\\n`"\\\\]',
                            name: "constant.character.escape.shell"
                        },
                        {
                            include: "#variable"
                        },
                        {
                            include: "#interpolation"
                        }
                    ]
                },
                {
                    begin: "\\$'",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.shell"
                        }
                    },
                    end: "'",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.shell"
                        }
                    },
                    name: "string.quoted.single.dollar.shell",
                    patterns: [
                        {
                            match: "\\\\(?:a|b|e|f|n|r|t|v|\\\\|')",
                            name: "constant.character.escape.ansi-c.shell"
                        },
                        {
                            match: '\\\\[0-9]{3}"',
                            name: "constant.character.escape.octal.shell"
                        },
                        {
                            match: '\\\\x[0-9a-fA-F]{2}"',
                            name: "constant.character.escape.hex.shell"
                        },
                        {
                            match: '\\\\c."',
                            name: "constant.character.escape.control-char.shell"
                        }
                    ]
                }
            ]
        },
        support: {
            patterns: [
                {
                    match: "(?<=^|;|&|\\s)(?::|\\.)(?=\\s|;|&|$)",
                    name: "support.function.builtin.shell"
                }
            ]
        },
        variable: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.variable.shell variable.parameter.positional.all.shell"
                        },
                        2: {
                            name: "variable.parameter.positional.all.shell"
                        }
                    },
                    match: "(\\$)(\\@(?!\\w))"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.variable.shell variable.parameter.positional.shell"
                        },
                        2: {
                            name: "variable.parameter.positional.shell"
                        }
                    },
                    match: "(\\$)([0-9](?!\\w))"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.variable.shell variable.language.special.shell"
                        },
                        2: {
                            name: "variable.language.special.shell"
                        }
                    },
                    match: "(\\$)([-*#?$!0_](?!\\w))"
                },
                {
                    begin: "(\\$)(\\{)[ \\t]*+(?=\\d)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.variable.shell variable.parameter.positional.shell"
                        },
                        2: {
                            name: "punctuation.section.bracket.curly.variable.begin.shell punctuation.definition.variable.shell variable.parameter.positional.shell"
                        }
                    },
                    contentName: "meta.parameter-expansion",
                    end: "\\}",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.bracket.curly.variable.end.shell punctuation.definition.variable.shell variable.parameter.positional.shell"
                        }
                    },
                    patterns: [
                        {
                            match: "!|:[-=?]?|\\*|@|##|#|%%|%|\\/",
                            name: "keyword.operator.expansion.shell"
                        },
                        {
                            captures: {
                                1: {
                                    name: "punctuation.section.array.shell"
                                },
                                2: {
                                    name: "punctuation.section.array.shell"
                                }
                            },
                            match: "(\\[)[^\\]]+(\\])"
                        },
                        {
                            match: "[0-9]+",
                            name: "variable.parameter.positional.shell"
                        },
                        {
                            match: "(?<!\\w)[a-zA-Z_0-9-]+(?!\\w)",
                            name: "variable.other.normal.shell"
                        },
                        {
                            include: "#variable"
                        },
                        {
                            include: "#string"
                        }
                    ]
                },
                {
                    begin: "(\\$)(\\{)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.variable.shell"
                        },
                        2: {
                            name: "punctuation.section.bracket.curly.variable.begin.shell punctuation.definition.variable.shell"
                        }
                    },
                    contentName: "meta.parameter-expansion",
                    end: "\\}",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.bracket.curly.variable.end.shell punctuation.definition.variable.shell"
                        }
                    },
                    patterns: [
                        {
                            match: "!|:[-=?]?|\\*|@|##|#|%%|%|\\/",
                            name: "keyword.operator.expansion.shell"
                        },
                        {
                            captures: {
                                1: {
                                    name: "punctuation.section.array.shell"
                                },
                                2: {
                                    name: "punctuation.section.array.shell"
                                }
                            },
                            match: "(\\[)[^\\]]+(\\])"
                        },
                        {
                            match: "(?<!\\w)[a-zA-Z_0-9-]+(?!\\w)",
                            name: "variable.other.normal.shell"
                        },
                        {
                            include: "#variable"
                        },
                        {
                            include: "#string"
                        }
                    ]
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.variable.shell variable.other.normal.shell"
                        },
                        2: {
                            name: "variable.other.normal.shell"
                        }
                    },
                    match: "(\\$)(\\w+(?!\\w))"
                }
            ]
        }
    },
    scopeName: "source.shell",
    aliases: [
        "bash",
        "sh",
        "shell",
        "zsh"
    ]
});
var n = [
    e
];
;
}}),
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/lua-5TZ-G8Be.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>t)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$c$2d$eDnjw9rh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/c-eDnjw9rh.js [app-ssr] (ecmascript)");
;
const a = Object.freeze({
    displayName: "Lua",
    name: "lua",
    patterns: [
        {
            begin: "\\b(?:(local)\\s+)?(function)\\b(?![,:])",
            beginCaptures: {
                1: {
                    name: "keyword.local.lua"
                },
                2: {
                    name: "keyword.control.lua"
                }
            },
            end: `(?<=[\\)\\-{}\\[\\]"'])`,
            name: "meta.function.lua",
            patterns: [
                {
                    include: "#comment"
                },
                {
                    begin: "(\\()",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.parameters.begin.lua"
                        }
                    },
                    end: `(\\))|(?=[\\-\\.{}\\[\\]"'])`,
                    endCaptures: {
                        1: {
                            name: "punctuation.definition.parameters.finish.lua"
                        }
                    },
                    name: "meta.parameter.lua",
                    patterns: [
                        {
                            include: "#comment"
                        },
                        {
                            match: "[a-zA-Z_][a-zA-Z0-9_]*",
                            name: "variable.parameter.function.lua"
                        },
                        {
                            match: ",",
                            name: "punctuation.separator.arguments.lua"
                        },
                        {
                            begin: ":",
                            beginCaptures: {
                                0: {
                                    name: "punctuation.separator.arguments.lua"
                                }
                            },
                            end: "(?=[\\),])",
                            patterns: [
                                {
                                    include: "#emmydoc.type"
                                }
                            ]
                        }
                    ]
                },
                {
                    match: "\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b\\s*(?=:)",
                    name: "entity.name.class.lua"
                },
                {
                    match: "\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b",
                    name: "entity.name.function.lua"
                }
            ]
        },
        {
            match: "(?<![\\w\\d.])0[xX][0-9A-Fa-f]+(\\.[0-9A-Fa-f]*)?([eE]-?\\d*)?([pP][-+]\\d+)?",
            name: "constant.numeric.float.hexadecimal.lua"
        },
        {
            match: "(?<![\\w\\d.])0[xX]\\.[0-9A-Fa-f]+([eE]-?\\d*)?([pP][-+]\\d+)?",
            name: "constant.numeric.float.hexadecimal.lua"
        },
        {
            match: "(?<![\\w\\d.])0[xX][0-9A-Fa-f]+(?![pPeE.0-9])",
            name: "constant.numeric.integer.hexadecimal.lua"
        },
        {
            match: "(?<![\\w\\d.])\\d+(\\.\\d*)?([eE]-?\\d*)?",
            name: "constant.numeric.float.lua"
        },
        {
            match: "(?<![\\w\\d.])\\.\\d+([eE]-?\\d*)?",
            name: "constant.numeric.float.lua"
        },
        {
            match: "(?<![\\w\\d.])\\d+(?![pPeE.0-9])",
            name: "constant.numeric.integer.lua"
        },
        {
            include: "#string"
        },
        {
            captures: {
                1: {
                    name: "punctuation.definition.comment.lua"
                }
            },
            match: "\\A(#!).*$\\n?",
            name: "comment.line.shebang.lua"
        },
        {
            include: "#comment"
        },
        {
            captures: {
                1: {
                    name: "keyword.control.goto.lua"
                },
                2: {
                    name: "string.tag.lua"
                }
            },
            match: "\\b(goto)\\s+([a-zA-Z_][a-zA-Z0-9_]*)"
        },
        {
            captures: {
                1: {
                    name: "punctuation.section.embedded.begin.lua"
                },
                2: {
                    name: "punctuation.section.embedded.end.lua"
                }
            },
            match: "(::)\\s*[a-zA-Z_][a-zA-Z0-9_]*\\s*(::)",
            name: "string.tag.lua"
        },
        {
            captures: {
                1: {
                    name: "string.tag.lua"
                }
            },
            match: "<\\s*(const|close)\\s*>"
        },
        {
            match: "\\<[a-zA-Z_\\*][a-zA-Z0-9_\\.\\*\\-]*\\>",
            name: "storage.type.generic.lua"
        },
        {
            match: "\\b(break|do|else|for|if|elseif|goto|return|then|repeat|while|until|end|in)\\b",
            name: "keyword.control.lua"
        },
        {
            match: "\\b(local|global)\\b",
            name: "keyword.local.lua"
        },
        {
            match: "\\b(function)\\b(?![,:])",
            name: "keyword.control.lua"
        },
        {
            match: "(?<![^.]\\.|:)\\b(false|nil(?!:)|true|_ENV|_G|_VERSION|math\\.(pi|huge|maxinteger|mininteger)|utf8\\.charpattern|io\\.(stdin|stdout|stderr)|package\\.(config|cpath|loaded|loaders|path|preload|searchers))\\b|(?<![.])\\.{3}(?!\\.)",
            name: "constant.language.lua"
        },
        {
            match: "(?<![^.]\\.|:)\\b(self)\\b",
            name: "variable.language.self.lua"
        },
        {
            match: "(?<![^.]\\.|:)\\b(assert|collectgarbage|dofile|error|getfenv|getmetatable|ipairs|load|loadfile|loadstring|module|next|pairs|pcall|print|rawequal|rawget|rawlen|rawset|require|select|setfenv|setmetatable|tonumber|tostring|type|unpack|xpcall)\\b(?!\\s*=(?!=))",
            name: "support.function.lua"
        },
        {
            match: "(?<![^.]\\.|:)\\b(async)\\b(?!\\s*=(?!=))",
            name: "entity.name.tag.lua"
        },
        {
            match: "(?<![^.]\\.|:)\\b(coroutine\\.(create|isyieldable|close|resume|running|status|wrap|yield)|string\\.(byte|char|dump|find|format|gmatch|gsub|len|lower|match|pack|packsize|rep|reverse|sub|unpack|upper)|table\\.(concat|insert|maxn|move|pack|remove|sort|unpack)|math\\.(abs|acos|asin|atan2?|ceil|cosh?|deg|exp|floor|fmod|frexp|ldexp|log|log10|max|min|modf|pow|rad|random|randomseed|sinh?|sqrt|tanh?|tointeger|type)|io\\.(close|flush|input|lines|open|output|popen|read|tmpfile|type|write)|os\\.(clock|date|difftime|execute|exit|getenv|remove|rename|setlocale|time|tmpname)|package\\.(loadlib|seeall|searchpath)|debug\\.(debug|[gs]etfenv|[gs]ethook|getinfo|[gs]etlocal|[gs]etmetatable|getregistry|[gs]etupvalue|[gs]etuservalue|set[Cc]stacklimit|traceback|upvalueid|upvaluejoin)|bit32\\.(arshift|band|bnot|bor|btest|bxor|extract|replace|lrotate|lshift|rrotate|rshift)|utf8\\.(char|codes|codepoint|len|offset))\\b(?!\\s*=(?!=))",
            name: "support.function.library.lua"
        },
        {
            match: "\\b(and|or|not|\\|\\||\\&\\&|\\!)\\b",
            name: "keyword.operator.lua"
        },
        {
            match: `\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b(?=\\s*(?:[({"']|\\[\\[))`,
            name: "support.function.any-method.lua"
        },
        {
            match: "\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b(?=\\s*\\??:)",
            name: "entity.name.class.lua"
        },
        {
            match: "(?<=[^.]\\.|:)\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b(?!\\s*=\\s*\\b(function)\\b)",
            name: "entity.other.attribute.lua"
        },
        {
            match: "\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b(?!\\s*=\\s*\\b(function)\\b)",
            name: "variable.other.lua"
        },
        {
            match: "\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b(?=\\s*=\\s*\\b(function)\\b)",
            name: "entity.name.function.lua"
        },
        {
            match: "\\+|-|%|#|\\*|\\/|\\^|==?|~=|!=|<=?|>=?|(?<!\\.)\\.{2}(?!\\.)",
            name: "keyword.operator.lua"
        }
    ],
    repository: {
        comment: {
            patterns: [
                {
                    begin: "(^[ \\t]+)?(?=--)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.whitespace.comment.leading.lua"
                        }
                    },
                    end: "(?!\\G)((?!^)[ \\t]+\\n)?",
                    endCaptures: {
                        1: {
                            name: "punctuation.whitespace.comment.trailing.lua"
                        }
                    },
                    patterns: [
                        {
                            begin: "--\\[(=*)\\[@@@",
                            beginCaptures: {
                                0: {
                                    name: "punctuation.definition.comment.begin.lua"
                                }
                            },
                            end: "\\]\\1\\]",
                            endCaptures: {
                                0: {
                                    name: "punctuation.definition.comment.end.lua"
                                }
                            },
                            name: "",
                            patterns: [
                                {
                                    include: "source.lua"
                                }
                            ]
                        },
                        {
                            begin: "--\\[(=*)\\[",
                            beginCaptures: {
                                0: {
                                    name: "punctuation.definition.comment.begin.lua"
                                }
                            },
                            end: "\\]\\1\\]",
                            endCaptures: {
                                0: {
                                    name: "punctuation.definition.comment.end.lua"
                                }
                            },
                            name: "comment.block.lua",
                            patterns: [
                                {
                                    include: "#emmydoc"
                                },
                                {
                                    include: "#ldoc_tag"
                                }
                            ]
                        },
                        {
                            begin: "----",
                            beginCaptures: {
                                0: {
                                    name: "punctuation.definition.comment.lua"
                                }
                            },
                            end: "\\n",
                            name: "comment.line.double-dash.lua"
                        },
                        {
                            begin: "---",
                            beginCaptures: {
                                0: {
                                    name: "punctuation.definition.comment.lua"
                                }
                            },
                            end: "\\n",
                            name: "comment.line.double-dash.documentation.lua",
                            patterns: [
                                {
                                    include: "#emmydoc"
                                },
                                {
                                    include: "#ldoc_tag"
                                }
                            ]
                        },
                        {
                            begin: "--",
                            beginCaptures: {
                                0: {
                                    name: "punctuation.definition.comment.lua"
                                }
                            },
                            end: "\\n",
                            name: "comment.line.double-dash.lua",
                            patterns: [
                                {
                                    include: "#ldoc_tag"
                                }
                            ]
                        }
                    ]
                },
                {
                    begin: "\\/\\*",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.comment.begin.lua"
                        }
                    },
                    end: "\\*\\/",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.comment.end.lua"
                        }
                    },
                    name: "comment.block.lua",
                    patterns: [
                        {
                            include: "#emmydoc"
                        },
                        {
                            include: "#ldoc_tag"
                        }
                    ]
                }
            ]
        },
        emmydoc: {
            patterns: [
                {
                    begin: "(?<=---[ \\t]*)@class",
                    beginCaptures: {
                        0: {
                            name: "storage.type.annotation.lua"
                        }
                    },
                    end: "(?=[\\n@#])",
                    patterns: [
                        {
                            match: "\\b([a-zA-Z_\\*][a-zA-Z0-9_\\.\\*\\-]*)",
                            name: "support.class.lua"
                        },
                        {
                            match: ":|,",
                            name: "keyword.operator.lua"
                        }
                    ]
                },
                {
                    begin: "(?<=---[ \\t]*)@enum",
                    beginCaptures: {
                        0: {
                            name: "storage.type.annotation.lua"
                        }
                    },
                    end: "(?=[\\n@#])",
                    patterns: [
                        {
                            begin: "\\b([a-zA-Z_\\*][a-zA-Z0-9_\\.\\*\\-]*)",
                            beginCaptures: {
                                0: {
                                    name: "variable.lua"
                                }
                            },
                            end: "(?=\\n)"
                        }
                    ]
                },
                {
                    begin: "(?<=---[ \\t]*)@type",
                    beginCaptures: {
                        0: {
                            name: "storage.type.annotation.lua"
                        }
                    },
                    end: "(?=[\\n@#])",
                    patterns: [
                        {
                            include: "#emmydoc.type"
                        }
                    ]
                },
                {
                    begin: "(?<=---[ \\t]*)@alias",
                    beginCaptures: {
                        0: {
                            name: "storage.type.annotation.lua"
                        }
                    },
                    end: "(?=[\\n@#])",
                    patterns: [
                        {
                            begin: "\\b([a-zA-Z_\\*][a-zA-Z0-9_\\.\\*\\-]*)",
                            beginCaptures: {
                                0: {
                                    name: "variable.lua"
                                }
                            },
                            end: "(?=[\\n#])",
                            patterns: [
                                {
                                    include: "#emmydoc.type"
                                }
                            ]
                        }
                    ]
                },
                {
                    begin: "(?<=---[ \\t]*)(@operator)\\s*(\\b[a-z]+)?",
                    beginCaptures: {
                        1: {
                            name: "storage.type.annotation.lua"
                        },
                        2: {
                            name: "support.function.library.lua"
                        }
                    },
                    end: "(?=[\\n@#])",
                    patterns: [
                        {
                            include: "#emmydoc.type"
                        }
                    ]
                },
                {
                    begin: "(?<=---[ \\t]*)@cast",
                    beginCaptures: {
                        0: {
                            name: "storage.type.annotation.lua"
                        }
                    },
                    end: "(?=[\\n@#])",
                    patterns: [
                        {
                            begin: "\\b([a-zA-Z_\\*][a-zA-Z0-9_\\.\\*\\-]*)",
                            beginCaptures: {
                                0: {
                                    name: "variable.other.lua"
                                }
                            },
                            end: "(?=\\n)",
                            patterns: [
                                {
                                    include: "#emmydoc.type"
                                },
                                {
                                    match: "([+-|])",
                                    name: "keyword.operator.lua"
                                }
                            ]
                        }
                    ]
                },
                {
                    begin: "(?<=---[ \\t]*)@param",
                    beginCaptures: {
                        0: {
                            name: "storage.type.annotation.lua"
                        }
                    },
                    end: "(?=[\\n@#])",
                    patterns: [
                        {
                            begin: "\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b(\\??)",
                            beginCaptures: {
                                1: {
                                    name: "entity.name.variable.lua"
                                },
                                2: {
                                    name: "keyword.operator.lua"
                                }
                            },
                            end: "(?=[\\n#])",
                            patterns: [
                                {
                                    include: "#emmydoc.type"
                                }
                            ]
                        }
                    ]
                },
                {
                    begin: "(?<=---[ \\t]*)@return",
                    beginCaptures: {
                        0: {
                            name: "storage.type.annotation.lua"
                        }
                    },
                    end: "(?=[\\n@#])",
                    patterns: [
                        {
                            match: "\\?",
                            name: "keyword.operator.lua"
                        },
                        {
                            include: "#emmydoc.type"
                        }
                    ]
                },
                {
                    begin: "(?<=---[ \\t]*)@field",
                    beginCaptures: {
                        0: {
                            name: "storage.type.annotation.lua"
                        }
                    },
                    end: "(?=[\\n@#])",
                    patterns: [
                        {
                            begin: "(\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b|(\\[))(\\??)",
                            beginCaptures: {
                                2: {
                                    name: "entity.name.variable.lua"
                                },
                                3: {
                                    name: "keyword.operator.lua"
                                }
                            },
                            end: "(?=[\\n#])",
                            patterns: [
                                {
                                    include: "#string"
                                },
                                {
                                    include: "#emmydoc.type"
                                },
                                {
                                    match: "\\]",
                                    name: "keyword.operator.lua"
                                }
                            ]
                        }
                    ]
                },
                {
                    begin: "(?<=---[ \\t]*)@generic",
                    beginCaptures: {
                        0: {
                            name: "storage.type.annotation.lua"
                        }
                    },
                    end: "(?=[\\n@#])",
                    patterns: [
                        {
                            begin: "\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b",
                            beginCaptures: {
                                0: {
                                    name: "storage.type.generic.lua"
                                }
                            },
                            end: "(?=\\n)|(,)",
                            endCaptures: {
                                0: {
                                    name: "keyword.operator.lua"
                                }
                            },
                            patterns: [
                                {
                                    match: ":",
                                    name: "keyword.operator.lua"
                                },
                                {
                                    include: "#emmydoc.type"
                                }
                            ]
                        }
                    ]
                },
                {
                    begin: "(?<=---[ \\t]*)@vararg",
                    beginCaptures: {
                        0: {
                            name: "storage.type.annotation.lua"
                        }
                    },
                    end: "(?=[\\n@#])",
                    patterns: [
                        {
                            include: "#emmydoc.type"
                        }
                    ]
                },
                {
                    begin: "(?<=---[ \\t]*)@overload",
                    beginCaptures: {
                        0: {
                            name: "storage.type.annotation.lua"
                        }
                    },
                    end: "(?=[\\n@#])",
                    patterns: [
                        {
                            include: "#emmydoc.type"
                        }
                    ]
                },
                {
                    begin: "(?<=---[ \\t]*)@deprecated",
                    beginCaptures: {
                        0: {
                            name: "storage.type.annotation.lua"
                        }
                    },
                    end: "(?=[\\n@#])"
                },
                {
                    begin: "(?<=---[ \\t]*)@meta",
                    beginCaptures: {
                        0: {
                            name: "storage.type.annotation.lua"
                        }
                    },
                    end: "(?=[\\n@#])"
                },
                {
                    begin: "(?<=---[ \\t]*)@private",
                    beginCaptures: {
                        0: {
                            name: "storage.type.annotation.lua"
                        }
                    },
                    end: "(?=[\\n@#])"
                },
                {
                    begin: "(?<=---[ \\t]*)@protected",
                    beginCaptures: {
                        0: {
                            name: "storage.type.annotation.lua"
                        }
                    },
                    end: "(?=[\\n@#])"
                },
                {
                    begin: "(?<=---[ \\t]*)@package",
                    beginCaptures: {
                        0: {
                            name: "storage.type.annotation.lua"
                        }
                    },
                    end: "(?=[\\n@#])"
                },
                {
                    begin: "(?<=---[ \\t]*)@version",
                    beginCaptures: {
                        0: {
                            name: "storage.type.annotation.lua"
                        }
                    },
                    end: "(?=[\\n@#])",
                    patterns: [
                        {
                            match: "\\b(5\\.1|5\\.2|5\\.3|5\\.4|JIT)\\b",
                            name: "support.class.lua"
                        },
                        {
                            match: ",|\\>|\\<",
                            name: "keyword.operator.lua"
                        }
                    ]
                },
                {
                    begin: "(?<=---[ \\t]*)@see",
                    beginCaptures: {
                        0: {
                            name: "storage.type.annotation.lua"
                        }
                    },
                    end: "(?=[\\n@#])",
                    patterns: [
                        {
                            match: "\\b([a-zA-Z_\\*][a-zA-Z0-9_\\.\\*\\-]*)",
                            name: "support.class.lua"
                        },
                        {
                            match: "#",
                            name: "keyword.operator.lua"
                        }
                    ]
                },
                {
                    begin: "(?<=---[ \\t]*)@diagnostic",
                    beginCaptures: {
                        0: {
                            name: "storage.type.annotation.lua"
                        }
                    },
                    end: "(?=[\\n@#])",
                    patterns: [
                        {
                            begin: "([a-zA-Z_\\-0-9]+)[ \\t]*(:)?",
                            beginCaptures: {
                                1: {
                                    name: "keyword.other.unit"
                                },
                                2: {
                                    name: "keyword.operator.unit"
                                }
                            },
                            end: "(?=\\n)",
                            patterns: [
                                {
                                    match: "\\b([a-zA-Z_\\*][a-zA-Z0-9_\\-]*)",
                                    name: "support.class.lua"
                                },
                                {
                                    match: ",",
                                    name: "keyword.operator.lua"
                                }
                            ]
                        }
                    ]
                },
                {
                    begin: "(?<=---[ \\t]*)@module",
                    beginCaptures: {
                        0: {
                            name: "storage.type.annotation.lua"
                        }
                    },
                    end: "(?=[\\n@#])",
                    patterns: [
                        {
                            include: "#string"
                        }
                    ]
                },
                {
                    match: "(?<=---[ \\t]*)@(async|nodiscard)",
                    name: "storage.type.annotation.lua"
                },
                {
                    begin: "(?<=---)\\|\\s*[\\>\\+]?",
                    beginCaptures: {
                        0: {
                            name: "storage.type.annotation.lua"
                        }
                    },
                    end: "(?=[\\n@#])",
                    patterns: [
                        {
                            include: "#string"
                        }
                    ]
                }
            ]
        },
        "emmydoc.type": {
            patterns: [
                {
                    begin: "\\bfun\\b",
                    beginCaptures: {
                        0: {
                            name: "keyword.control.lua"
                        }
                    },
                    end: "(?=[\\s#])",
                    patterns: [
                        {
                            match: "[\\(\\),:\\?][ \\t]*",
                            name: "keyword.operator.lua"
                        },
                        {
                            match: "([a-zA-Z_][a-zA-Z0-9_\\.\\*\\[\\]\\<\\>\\,\\-]*)(?<!,)[ \\t]*(?=\\??:)",
                            name: "entity.name.variable.lua"
                        },
                        {
                            include: "#emmydoc.type"
                        },
                        {
                            include: "#string"
                        }
                    ]
                },
                {
                    match: "\\<[a-zA-Z_\\*][a-zA-Z0-9_\\.\\*\\-]*\\>",
                    name: "storage.type.generic.lua"
                },
                {
                    match: "\\basync\\b",
                    name: "entity.name.tag.lua"
                },
                {
                    match: "[\\{\\}\\:\\,\\?\\|\\`][ \\t]*",
                    name: "keyword.operator.lua"
                },
                {
                    begin: `(?=[a-zA-Z_\\.\\*"'\\[])`,
                    end: "(?=[\\s\\)\\,\\?\\:\\}\\|#])",
                    patterns: [
                        {
                            match: "([a-zA-Z0-9_\\.\\*\\[\\]\\<\\>\\,\\-]+)(?<!,)[ \\t]*",
                            name: "support.type.lua"
                        },
                        {
                            match: "(\\.\\.\\.)[ \\t]*",
                            name: "constant.language.lua"
                        },
                        {
                            include: "#string"
                        }
                    ]
                }
            ]
        },
        escaped_char: {
            patterns: [
                {
                    match: `\\\\[abfnrtv\\\\"'\\n]`,
                    name: "constant.character.escape.lua"
                },
                {
                    match: "\\\\z[\\n\\t ]*",
                    name: "constant.character.escape.lua"
                },
                {
                    match: "\\\\\\d{1,3}",
                    name: "constant.character.escape.byte.lua"
                },
                {
                    match: "\\\\x[0-9A-Fa-f][0-9A-Fa-f]",
                    name: "constant.character.escape.byte.lua"
                },
                {
                    match: "\\\\u\\{[0-9A-Fa-f]+\\}",
                    name: "constant.character.escape.unicode.lua"
                },
                {
                    match: "\\\\.",
                    name: "invalid.illegal.character.escape.lua"
                }
            ]
        },
        ldoc_tag: {
            captures: {
                1: {
                    name: "punctuation.definition.block.tag.ldoc"
                },
                2: {
                    name: "storage.type.class.ldoc"
                }
            },
            match: "\\G[ \\t]*(@)(alias|annotation|author|charset|class|classmod|comment|constructor|copyright|description|example|export|factory|field|file|fixme|function|include|lfunction|license|local|module|name|param|pragma|private|raise|release|return|script|section|see|set|static|submodule|summary|tfield|thread|tparam|treturn|todo|topic|type|usage|warning|within)\\b"
        },
        string: {
            patterns: [
                {
                    begin: "'",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.lua"
                        }
                    },
                    end: "'[ \\t]*|(?=\\n)",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.lua"
                        }
                    },
                    name: "string.quoted.single.lua",
                    patterns: [
                        {
                            include: "#escaped_char"
                        }
                    ]
                },
                {
                    begin: '"',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.lua"
                        }
                    },
                    end: '"[ \\t]*|(?=\\n)',
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.lua"
                        }
                    },
                    name: "string.quoted.double.lua",
                    patterns: [
                        {
                            include: "#escaped_char"
                        }
                    ]
                },
                {
                    begin: "`",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.lua"
                        }
                    },
                    end: "`[ \\t]*|(?=\\n)",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.lua"
                        }
                    },
                    name: "string.quoted.double.lua"
                },
                {
                    begin: "(?<=\\.cdef)\\s*(\\[(=*)\\[)",
                    beginCaptures: {
                        0: {
                            name: "string.quoted.other.multiline.lua"
                        },
                        1: {
                            name: "punctuation.definition.string.begin.lua"
                        }
                    },
                    contentName: "meta.embedded.lua",
                    end: "(\\]\\2\\])[ \\t]*",
                    endCaptures: {
                        0: {
                            name: "string.quoted.other.multiline.lua"
                        },
                        1: {
                            name: "punctuation.definition.string.end.lua"
                        }
                    },
                    patterns: [
                        {
                            include: "source.c"
                        }
                    ]
                },
                {
                    begin: "(?<!--)\\[(=*)\\[",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.lua"
                        }
                    },
                    end: "\\]\\1\\][ \\t]*",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.lua"
                        }
                    },
                    name: "string.quoted.other.multiline.lua"
                }
            ]
        }
    },
    scopeName: "source.lua",
    embeddedLangs: [
        "c"
    ]
});
var t = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$c$2d$eDnjw9rh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    a
];
;
}}),
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/ruby-Brn6Q9Db.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>h)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$html$2d$CUoAo5SS$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/html-CUoAo5SS.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$xml$2d$CfRpfi_B$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/xml-CfRpfi_B.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$sql$2d$DkzN59UV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/sql-DkzN59UV.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$css$2d$CAzixsid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/css-CAzixsid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$c$2d$eDnjw9rh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/c-eDnjw9rh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$javascript$2d$DYrC$2d$pEL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/javascript-DYrC-pEL.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$shellscript$2d$BX81u5Ls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/shellscript-BX81u5Ls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$lua$2d$5TZ$2d$G8Be$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/lua-5TZ-G8Be.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const u = Object.freeze({
    displayName: "Ruby",
    name: "ruby",
    patterns: [
        {
            captures: {
                1: {
                    name: "keyword.control.class.ruby"
                },
                2: {
                    name: "entity.name.type.class.ruby"
                },
                3: {
                    name: "keyword.operator.other.ruby"
                },
                4: {
                    name: "entity.other.inherited-class.ruby"
                },
                5: {
                    name: "keyword.operator.other.ruby"
                },
                6: {
                    name: "variable.other.object.ruby"
                }
            },
            match: "^\\s*(class)\\s+(?:([.a-zA-Z0-9_:]+)(?:\\s*(<)\\s*([.a-zA-Z0-9_:]+))?|(<<)\\s*([.a-zA-Z0-9_:]+))",
            name: "meta.class.ruby"
        },
        {
            captures: {
                1: {
                    name: "keyword.control.module.ruby"
                },
                2: {
                    name: "entity.name.type.module.ruby"
                },
                3: {
                    name: "entity.other.inherited-class.module.first.ruby"
                },
                4: {
                    name: "punctuation.separator.inheritance.ruby"
                },
                5: {
                    name: "entity.other.inherited-class.module.second.ruby"
                },
                6: {
                    name: "punctuation.separator.inheritance.ruby"
                },
                7: {
                    name: "entity.other.inherited-class.module.third.ruby"
                },
                8: {
                    name: "punctuation.separator.inheritance.ruby"
                }
            },
            match: "^\\s*(module)\\s+(([A-Z]\\w*(::))?([A-Z]\\w*(::))?([A-Z]\\w*(::))*[A-Z]\\w*)",
            name: "meta.module.ruby"
        },
        {
            comment: "else if is a common mistake carried over from other languages. it works if you put in a second end, but it’s never what you want.",
            match: "(?<!\\.)\\belse(\\s)+if\\b",
            name: "invalid.deprecated.ruby"
        },
        {
            captures: {
                1: {
                    name: "punctuation.definition.constant.ruby"
                }
            },
            comment: "symbols as hash key (1.9 syntax)",
            match: "(?>[a-zA-Z_]\\w*(?>[?!])?)(:)(?!:)",
            name: "constant.other.symbol.hashkey.ruby"
        },
        {
            captures: {
                1: {
                    name: "punctuation.definition.constant.ruby"
                }
            },
            comment: "symbols as hash key (1.8 syntax)",
            match: "(?<!:)(:)(?>[a-zA-Z_]\\w*(?>[?!])?)(?=\\s*=>)",
            name: "constant.other.symbol.hashkey.ruby"
        },
        {
            comment: "everything being a reserved word, not a value and needing a 'end' is a..",
            match: "(?<!\\.)\\b(BEGIN|begin|case|class|else|elsif|END|end|ensure|for|if|in|module|rescue|then|unless|until|when|while)\\b(?![?!])",
            name: "keyword.control.ruby"
        },
        {
            comment: "contextual smart pair support for block parameters",
            match: "(?<!\\.)\\bdo\\b",
            name: "keyword.control.start-block.ruby"
        },
        {
            comment: "contextual smart pair support",
            match: "(?<=\\{)(\\s+)",
            name: "meta.syntax.ruby.start-block"
        },
        {
            match: "(?<!\\.)\\b(alias|alias_method|block_given[?]|break|defined[?]|iterator[?]|next|redo|retry|return|super|undef|yield)(\\b|(?<=[?]))(?![?!])",
            name: "keyword.control.pseudo-method.ruby"
        },
        {
            match: "\\b(nil|true|false)\\b(?![?!])",
            name: "constant.language.ruby"
        },
        {
            match: "\\b(__(dir|FILE|LINE)__)\\b(?![?!])",
            name: "variable.language.ruby"
        },
        {
            begin: "^__END__\\n",
            captures: {
                0: {
                    name: "string.unquoted.program-block.ruby"
                }
            },
            comment: "__END__ marker",
            contentName: "text.plain",
            end: "(?=not)impossible",
            patterns: [
                {
                    begin: "(?=<?xml|<(?i:html\\b)|!DOCTYPE (?i:html\\b))",
                    end: "(?=not)impossible",
                    name: "text.html.embedded.ruby",
                    patterns: [
                        {
                            include: "text.html.basic"
                        }
                    ]
                }
            ]
        },
        {
            match: "\\b(self)\\b(?![?!])",
            name: "variable.language.self.ruby"
        },
        {
            comment: " everything being a method but having a special function is a..",
            match: "\\b(initialize|new|loop|include|extend|prepend|fail|raise|attr_reader|attr_writer|attr_accessor|attr|catch|throw|private|private_class_method|module_function|public|public_class_method|protected|refine|using)\\b(?![?!])",
            name: "keyword.other.special-method.ruby"
        },
        {
            begin: "\\b(?<!\\.|::)(require|require_relative)\\b",
            captures: {
                1: {
                    name: "keyword.other.special-method.ruby"
                }
            },
            end: "$|(?=#|\\})",
            name: "meta.require.ruby",
            patterns: [
                {
                    include: "$self"
                }
            ]
        },
        {
            captures: {
                1: {
                    name: "punctuation.definition.variable.ruby"
                }
            },
            match: "(@)[a-zA-Z_]\\w*",
            name: "variable.other.readwrite.instance.ruby"
        },
        {
            captures: {
                1: {
                    name: "punctuation.definition.variable.ruby"
                }
            },
            match: "(@@)[a-zA-Z_]\\w*",
            name: "variable.other.readwrite.class.ruby"
        },
        {
            captures: {
                1: {
                    name: "punctuation.definition.variable.ruby"
                }
            },
            match: "(\\$)[a-zA-Z_]\\w*",
            name: "variable.other.readwrite.global.ruby"
        },
        {
            captures: {
                1: {
                    name: "punctuation.definition.variable.ruby"
                }
            },
            match: "(\\$)(!|@|&|`|'|\\+|\\d+|~|=|/|\\\\|,|;|\\.|<|>|_|\\*|\\$|\\?|:|\"|-[0adFiIlpvw])",
            name: "variable.other.readwrite.global.pre-defined.ruby"
        },
        {
            begin: "\\b(ENV)\\[",
            beginCaptures: {
                1: {
                    name: "variable.other.constant.ruby"
                }
            },
            end: "\\]",
            name: "meta.environment-variable.ruby",
            patterns: [
                {
                    include: "$self"
                }
            ]
        },
        {
            match: "\\b[A-Z]\\w*(?=((\\.|::)[A-Za-z]|\\[))",
            name: "support.class.ruby"
        },
        {
            match: "\\b(abort|at_exit|autoload[?]?|binding|callcc|caller|caller_locations|chomp|chop|eval|exec|exit|exit!|fork|format|gets|global_variables|gsub|lambda|load|local_variables|open|p|print|printf|proc|putc|puts|rand|readline|readlines|select|set_trace_func|sleep|spawn|sprintf|srand|sub|syscall|system|test|trace_var|trap|untrace_var|warn)(\\b|(?<=[?!]))(?![?!])",
            name: "support.function.kernel.ruby"
        },
        {
            match: "\\b[A-Z]\\w*\\b",
            name: "variable.other.constant.ruby"
        },
        {
            begin: `(?x)
(?=def\\b)
(?<=^|\\s)(def)\\s+
( (?>[a-zA-Z_]\\w*(?>\\.|::))?
(?>[a-zA-Z_]\\w*(?>[?!]|=(?!>))?
|===?|!=|!~|>[>=]?|<=>|<[<=]?|[%&\`/\\|^]|\\*\\*?|=?~|[-+]@?|\\[\\]=?) )
\\s*(\\()
`,
            beginCaptures: {
                1: {
                    name: "keyword.control.def.ruby"
                },
                2: {
                    name: "entity.name.function.ruby"
                },
                3: {
                    name: "punctuation.definition.parameters.ruby"
                }
            },
            comment: "the method pattern comes from the symbol pattern, see there for a explaination",
            end: "\\)",
            endCaptures: {
                0: {
                    name: "punctuation.definition.parameters.ruby"
                }
            },
            name: "meta.function.method.with-arguments.ruby",
            patterns: [
                {
                    begin: "(?=[&*_a-zA-Z])",
                    end: "(?=[,)])",
                    patterns: [
                        {
                            captures: {
                                1: {
                                    name: "storage.type.variable.ruby"
                                },
                                2: {
                                    name: "constant.other.symbol.hashkey.parameter.function.ruby"
                                },
                                3: {
                                    name: "punctuation.definition.constant.ruby"
                                },
                                4: {
                                    name: "variable.parameter.function.ruby"
                                }
                            },
                            match: "\\G([&*]?)(?:([_a-zA-Z]\\w*(:))|([_a-zA-Z]\\w*))"
                        },
                        {
                            include: "#parens"
                        },
                        {
                            include: "#braces"
                        },
                        {
                            include: "$self"
                        }
                    ]
                }
            ],
            repository: {
                braces: {
                    begin: "\\{",
                    beginCaptures: {
                        0: {
                            name: "punctuation.section.function.begin.ruby"
                        }
                    },
                    end: "\\}",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.function.end.ruby"
                        }
                    },
                    patterns: [
                        {
                            include: "#parens"
                        },
                        {
                            include: "#braces"
                        },
                        {
                            include: "$self"
                        }
                    ]
                },
                parens: {
                    begin: "\\(",
                    beginCaptures: {
                        0: {
                            name: "punctuation.section.function.begin.ruby"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.function.end.ruby"
                        }
                    },
                    patterns: [
                        {
                            include: "#parens"
                        },
                        {
                            include: "#braces"
                        },
                        {
                            include: "$self"
                        }
                    ]
                }
            }
        },
        {
            begin: `(?x)
(?=def\\b)
(?<=^|\\s)(def)\\s+
( (?>[a-zA-Z_]\\w*(?>\\.|::))?
(?>[a-zA-Z_]\\w*(?>[?!]|=(?!>))?
|===?|!=|!~|>[>=]?|<=>|<[<=]?|[%&\`/\\|^]|\\*\\*?|=?~|[-+]@?|\\[\\]=?) )
[ \\t]
(?=[ \\t]*[^\\s#;])
`,
            beginCaptures: {
                1: {
                    name: "keyword.control.def.ruby"
                },
                2: {
                    name: "entity.name.function.ruby"
                }
            },
            comment: "same as the previous rule, but without parentheses around the arguments",
            end: "$",
            name: "meta.function.method.with-arguments.ruby",
            patterns: [
                {
                    begin: "(?![\\s,])",
                    end: "(?=,|$)",
                    patterns: [
                        {
                            captures: {
                                1: {
                                    name: "storage.type.variable.ruby"
                                },
                                2: {
                                    name: "constant.other.symbol.hashkey.parameter.function.ruby"
                                },
                                3: {
                                    name: "punctuation.definition.constant.ruby"
                                },
                                4: {
                                    name: "variable.parameter.function.ruby"
                                }
                            },
                            match: "\\G([&*]?)(?:([_a-zA-Z]\\w*(:))|([_a-zA-Z]\\w*))",
                            name: "variable.parameter.function.ruby"
                        },
                        {
                            include: "$self"
                        }
                    ]
                }
            ]
        },
        {
            captures: {
                1: {
                    name: "keyword.control.def.ruby"
                },
                3: {
                    name: "entity.name.function.ruby"
                }
            },
            comment: " the optional name is just to catch the def also without a method-name",
            match: `(?x)
(?=def\\b)
(?<=^|\\s)(def)\\b
( \\s+
( (?>[a-zA-Z_]\\w*(?>\\.|::))?
(?>[a-zA-Z_]\\w*(?>[?!]|=(?!>))?
|===?|!=|!~|>[>=]?|<=>|<[<=]?|[%&\`/\\|^]|\\*\\*?|=?~|[-+]@?|\\[\\]=?) ) )?
`,
            name: "meta.function.method.without-arguments.ruby"
        },
        {
            match: "\\b\\d(?>_?\\d)*(?=\\.\\d|[eE])(\\.\\d(?>_?\\d)*)?([eE][-+]?\\d(?>_?\\d)*)?r?i?\\b",
            name: "constant.numeric.float.ruby"
        },
        {
            match: "\\b(0|(0[dD]\\d|[1-9])(?>_?\\d)*)r?i?\\b",
            name: "constant.numeric.integer.ruby"
        },
        {
            match: "\\b0[xX]\\h(?>_?\\h)*r?i?\\b",
            name: "constant.numeric.hex.ruby"
        },
        {
            match: "\\b0[bB][01](?>_?[01])*r?i?\\b",
            name: "constant.numeric.binary.ruby"
        },
        {
            match: "\\b0([oO]?[0-7](?>_?[0-7])*)?r?i?\\b",
            name: "constant.numeric.octal.ruby"
        },
        {
            begin: ":'",
            captures: {
                0: {
                    name: "punctuation.definition.constant.ruby"
                }
            },
            end: "'",
            name: "constant.other.symbol.single-quoted.ruby",
            patterns: [
                {
                    match: "\\\\['\\\\]",
                    name: "constant.character.escape.ruby"
                }
            ]
        },
        {
            begin: ':"',
            captures: {
                0: {
                    name: "punctuation.definition.constant.ruby"
                }
            },
            end: '"',
            name: "constant.other.symbol.double-quoted.ruby",
            patterns: [
                {
                    include: "#interpolated_ruby"
                },
                {
                    include: "#escaped_char"
                }
            ]
        },
        {
            comment: "Needs higher precedence than regular expressions.",
            match: "(?<!\\()/=",
            name: "keyword.operator.assignment.augmented.ruby"
        },
        {
            begin: "'",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.string.begin.ruby"
                }
            },
            comment: "single quoted string (does not allow interpolation)",
            end: "'",
            endCaptures: {
                0: {
                    name: "punctuation.definition.string.end.ruby"
                }
            },
            name: "string.quoted.single.ruby",
            patterns: [
                {
                    match: "\\\\'|\\\\\\\\",
                    name: "constant.character.escape.ruby"
                }
            ]
        },
        {
            begin: '"',
            beginCaptures: {
                0: {
                    name: "punctuation.definition.string.begin.ruby"
                }
            },
            comment: "double quoted string (allows for interpolation)",
            end: '"',
            endCaptures: {
                0: {
                    name: "punctuation.definition.string.end.ruby"
                }
            },
            name: "string.quoted.double.ruby",
            patterns: [
                {
                    include: "#interpolated_ruby"
                },
                {
                    include: "#escaped_char"
                }
            ]
        },
        {
            begin: "`",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.string.begin.ruby"
                }
            },
            comment: "execute string (allows for interpolation)",
            end: "`",
            endCaptures: {
                0: {
                    name: "punctuation.definition.string.end.ruby"
                }
            },
            name: "string.interpolated.ruby",
            patterns: [
                {
                    include: "#interpolated_ruby"
                },
                {
                    include: "#escaped_char"
                }
            ]
        },
        {
            include: "#percent_literals"
        },
        {
            begin: `(?x)
(?:
^
| (?<=
[=>~(?:\\[,|&;]
| [\\s;]if\\s
| [\\s;]elsif\\s
| [\\s;]while\\s
| [\\s;]unless\\s
| [\\s;]when\\s
| [\\s;]assert_match\\s
| [\\s;]or\\s
| [\\s;]and\\s
| [\\s;]not\\s
| [\\s.]index\\s
| [\\s.]scan\\s
| [\\s.]sub\\s
| [\\s.]sub!\\s
| [\\s.]gsub\\s
| [\\s.]gsub!\\s
| [\\s.]match\\s
)
| (?<=
^when\\s
| ^if\\s
| ^elsif\\s
| ^while\\s
| ^unless\\s
)
)
\\s*((/))(?![*+{}?])
`,
            captures: {
                1: {
                    name: "string.regexp.classic.ruby"
                },
                2: {
                    name: "punctuation.definition.string.ruby"
                }
            },
            comment: `regular expressions (normal)
			we only start a regexp if the character before it (excluding whitespace)
			is what we think is before a regexp
			`,
            contentName: "string.regexp.classic.ruby",
            end: "((/[eimnosux]*))",
            patterns: [
                {
                    include: "#regex_sub"
                }
            ]
        },
        {
            captures: {
                1: {
                    name: "punctuation.definition.constant.ruby"
                }
            },
            comment: "symbols",
            match: "(?<!:)(:)(?>[a-zA-Z_]\\w*(?>[?!]|=(?![>=]))?|===?|>[>=]?|<=>|<[<=]?|[%&`/\\|]|\\*\\*?|=?~|[-+]@?|\\[\\]=?|(@@?|\\$)[a-zA-Z_]\\w*)",
            name: "constant.other.symbol.ruby"
        },
        {
            begin: "^=begin",
            captures: {
                0: {
                    name: "punctuation.definition.comment.ruby"
                }
            },
            comment: "multiline comments",
            end: "^=end",
            name: "comment.block.documentation.ruby"
        },
        {
            begin: "(^[ \\t]+)?(?=#)",
            beginCaptures: {
                1: {
                    name: "punctuation.whitespace.comment.leading.ruby"
                }
            },
            end: "(?!\\G)",
            patterns: [
                {
                    begin: "#",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.comment.ruby"
                        }
                    },
                    end: "\\n",
                    name: "comment.line.number-sign.ruby"
                }
            ]
        },
        {
            comment: `
			matches questionmark-letters.

			examples (1st alternation = hex):
			?\\x1     ?\\x61

			examples (2nd alternation = octal):
			?\\0      ?\\07     ?\\017

			examples (3rd alternation = escaped):
			?\\n      ?\\b

			examples (4th alternation = meta-ctrl):
			?\\C-a    ?\\M-a    ?\\C-\\M-\\C-\\M-a

			examples (4th alternation = normal):
			?a       ?A       ?0 
			?*       ?"       ?( 
			?.       ?#
			
			
			the negative lookbehind prevents against matching
			p(42.tainted?)
			`,
            match: "(?<!\\w)\\?(\\\\(x\\h{1,2}(?!\\h)\\b|0[0-7]{0,2}(?![0-7])\\b|[^x0MC])|(\\\\[MC]-)+\\w|[^\\s\\\\])",
            name: "constant.numeric.ruby"
        },
        {
            begin: '(?=(?><<[-~]("?)((?:[_\\w]+_|)HTML)\\b\\1))',
            comment: "Heredoc with embedded html",
            end: "(?!\\G)",
            name: "meta.embedded.block.html",
            patterns: [
                {
                    begin: '(?><<[-~]("?)((?:[_\\w]+_|)HTML)\\b\\1)',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.ruby"
                        }
                    },
                    contentName: "text.html",
                    end: "\\s*\\2$\\n?",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.ruby"
                        }
                    },
                    name: "string.unquoted.heredoc.ruby",
                    patterns: [
                        {
                            include: "#heredoc"
                        },
                        {
                            include: "#interpolated_ruby"
                        },
                        {
                            include: "text.html.basic"
                        },
                        {
                            include: "#escaped_char"
                        }
                    ]
                }
            ]
        },
        {
            begin: '(?=(?><<[-~]("?)((?:[_\\w]+_|)XML)\\b\\1))',
            comment: "Heredoc with embedded xml",
            end: "(?!\\G)",
            name: "meta.embedded.block.xml",
            patterns: [
                {
                    begin: '(?><<[-~]("?)((?:[_\\w]+_|)XML)\\b\\1)',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.ruby"
                        }
                    },
                    contentName: "text.xml",
                    end: "\\s*\\2$\\n?",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.ruby"
                        }
                    },
                    name: "string.unquoted.heredoc.ruby",
                    patterns: [
                        {
                            include: "#heredoc"
                        },
                        {
                            include: "#interpolated_ruby"
                        },
                        {
                            include: "text.xml"
                        },
                        {
                            include: "#escaped_char"
                        }
                    ]
                }
            ]
        },
        {
            begin: '(?=(?><<[-~]("?)((?:[_\\w]+_|)SQL)\\b\\1))',
            comment: "Heredoc with embedded sql",
            end: "(?!\\G)",
            name: "meta.embedded.block.sql",
            patterns: [
                {
                    begin: '(?><<[-~]("?)((?:[_\\w]+_|)SQL)\\b\\1)',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.ruby"
                        }
                    },
                    contentName: "source.sql",
                    end: "\\s*\\2$\\n?",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.ruby"
                        }
                    },
                    name: "string.unquoted.heredoc.ruby",
                    patterns: [
                        {
                            include: "#heredoc"
                        },
                        {
                            include: "#interpolated_ruby"
                        },
                        {
                            include: "source.sql"
                        },
                        {
                            include: "#escaped_char"
                        }
                    ]
                }
            ]
        },
        {
            begin: '(?=(?><<[-~]("?)((?:[_\\w]+_|)CSS)\\b\\1))',
            comment: "Heredoc with embedded css",
            end: "(?!\\G)",
            name: "meta.embedded.block.css",
            patterns: [
                {
                    begin: '(?><<[-~]("?)((?:[_\\w]+_|)CSS)\\b\\1)',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.ruby"
                        }
                    },
                    contentName: "source.css",
                    end: "\\s*\\2$\\n?",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.ruby"
                        }
                    },
                    name: "string.unquoted.heredoc.ruby",
                    patterns: [
                        {
                            include: "#heredoc"
                        },
                        {
                            include: "#interpolated_ruby"
                        },
                        {
                            include: "source.css"
                        },
                        {
                            include: "#escaped_char"
                        }
                    ]
                }
            ]
        },
        {
            begin: '(?=(?><<[-~]("?)((?:[_\\w]+_|)CPP)\\b\\1))',
            comment: "Heredoc with embedded c++",
            end: "(?!\\G)",
            name: "meta.embedded.block.c++",
            patterns: [
                {
                    begin: '(?><<[-~]("?)((?:[_\\w]+_|)CPP)\\b\\1)',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.ruby"
                        }
                    },
                    contentName: "source.c++",
                    end: "\\s*\\2$\\n?",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.ruby"
                        }
                    },
                    name: "string.unquoted.heredoc.ruby",
                    patterns: [
                        {
                            include: "#heredoc"
                        },
                        {
                            include: "#interpolated_ruby"
                        },
                        {
                            include: "source.c++"
                        },
                        {
                            include: "#escaped_char"
                        }
                    ]
                }
            ]
        },
        {
            begin: '(?=(?><<[-~]("?)((?:[_\\w]+_|)C)\\b\\1))',
            comment: "Heredoc with embedded c",
            end: "(?!\\G)",
            name: "meta.embedded.block.c",
            patterns: [
                {
                    begin: '(?><<[-~]("?)((?:[_\\w]+_|)C)\\b\\1)',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.ruby"
                        }
                    },
                    contentName: "source.c",
                    end: "\\s*\\2$\\n?",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.ruby"
                        }
                    },
                    name: "string.unquoted.heredoc.ruby",
                    patterns: [
                        {
                            include: "#heredoc"
                        },
                        {
                            include: "#interpolated_ruby"
                        },
                        {
                            include: "source.c"
                        },
                        {
                            include: "#escaped_char"
                        }
                    ]
                }
            ]
        },
        {
            begin: '(?=(?><<[-~]("?)((?:[_\\w]+_|)(?:JS|JAVASCRIPT))\\b\\1))',
            comment: "Heredoc with embedded javascript",
            end: "(?!\\G)",
            name: "meta.embedded.block.js",
            patterns: [
                {
                    begin: '(?><<[-~]("?)((?:[_\\w]+_|)(?:JS|JAVASCRIPT))\\b\\1)',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.ruby"
                        }
                    },
                    contentName: "source.js",
                    end: "\\s*\\2$\\n?",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.ruby"
                        }
                    },
                    name: "string.unquoted.heredoc.ruby",
                    patterns: [
                        {
                            include: "#heredoc"
                        },
                        {
                            include: "#interpolated_ruby"
                        },
                        {
                            include: "source.js"
                        },
                        {
                            include: "#escaped_char"
                        }
                    ]
                }
            ]
        },
        {
            begin: '(?=(?><<[-~]("?)((?:[_\\w]+_|)JQUERY)\\b\\1))',
            comment: "Heredoc with embedded jQuery javascript",
            end: "(?!\\G)",
            name: "meta.embedded.block.js.jquery",
            patterns: [
                {
                    begin: '(?><<[-~]("?)((?:[_\\w]+_|)JQUERY)\\b\\1)',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.ruby"
                        }
                    },
                    contentName: "source.js.jquery",
                    end: "\\s*\\2$\\n?",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.ruby"
                        }
                    },
                    name: "string.unquoted.heredoc.ruby",
                    patterns: [
                        {
                            include: "#heredoc"
                        },
                        {
                            include: "#interpolated_ruby"
                        },
                        {
                            include: "source.js.jquery"
                        },
                        {
                            include: "#escaped_char"
                        }
                    ]
                }
            ]
        },
        {
            begin: '(?=(?><<[-~]("?)((?:[_\\w]+_|)(?:SH|SHELL))\\b\\1))',
            comment: "Heredoc with embedded shell",
            end: "(?!\\G)",
            name: "meta.embedded.block.shell",
            patterns: [
                {
                    begin: '(?><<[-~]("?)((?:[_\\w]+_|)(?:SH|SHELL))\\b\\1)',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.ruby"
                        }
                    },
                    contentName: "source.shell",
                    end: "\\s*\\2$\\n?",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.ruby"
                        }
                    },
                    name: "string.unquoted.heredoc.ruby",
                    patterns: [
                        {
                            include: "#heredoc"
                        },
                        {
                            include: "#interpolated_ruby"
                        },
                        {
                            include: "source.shell"
                        },
                        {
                            include: "#escaped_char"
                        }
                    ]
                }
            ]
        },
        {
            begin: '(?=(?><<[-~]("?)((?:[_\\w]+_|)LUA)\\b\\1))',
            comment: "Heredoc with embedded lua",
            end: "(?!\\G)",
            name: "meta.embedded.block.lua",
            patterns: [
                {
                    begin: '(?><<[-~]("?)((?:[_\\w]+_|)LUA)\\b\\1)',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.ruby"
                        }
                    },
                    contentName: "source.lua",
                    end: "\\s*\\2$\\n?",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.ruby"
                        }
                    },
                    name: "string.unquoted.heredoc.ruby",
                    patterns: [
                        {
                            include: "#heredoc"
                        },
                        {
                            include: "#interpolated_ruby"
                        },
                        {
                            include: "source.lua"
                        },
                        {
                            include: "#escaped_char"
                        }
                    ]
                }
            ]
        },
        {
            begin: '(?=(?><<[-~]("?)((?:[_\\w]+_|)RUBY)\\b\\1))',
            comment: "Heredoc with embedded ruby",
            end: "(?!\\G)",
            name: "meta.embedded.block.ruby",
            patterns: [
                {
                    begin: '(?><<[-~]("?)((?:[_\\w]+_|)RUBY)\\b\\1)',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.ruby"
                        }
                    },
                    contentName: "source.ruby",
                    end: "\\s*\\2$\\n?",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.ruby"
                        }
                    },
                    name: "string.unquoted.heredoc.ruby",
                    patterns: [
                        {
                            include: "#heredoc"
                        },
                        {
                            include: "#interpolated_ruby"
                        },
                        {
                            include: "source.ruby"
                        },
                        {
                            include: "#escaped_char"
                        }
                    ]
                }
            ]
        },
        {
            begin: "(?>=\\s*<<(\\w+))",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.string.begin.ruby"
                }
            },
            end: "^\\1$",
            endCaptures: {
                0: {
                    name: "punctuation.definition.string.end.ruby"
                }
            },
            name: "string.unquoted.heredoc.ruby",
            patterns: [
                {
                    include: "#heredoc"
                },
                {
                    include: "#interpolated_ruby"
                },
                {
                    include: "#escaped_char"
                }
            ]
        },
        {
            begin: "(?><<[-~](\\w+))",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.string.begin.ruby"
                }
            },
            comment: "heredoc with indented terminator",
            end: "\\s*\\1$",
            endCaptures: {
                0: {
                    name: "punctuation.definition.string.end.ruby"
                }
            },
            name: "string.unquoted.heredoc.ruby",
            patterns: [
                {
                    include: "#heredoc"
                },
                {
                    include: "#interpolated_ruby"
                },
                {
                    include: "#escaped_char"
                }
            ]
        },
        {
            begin: "(?<=\\{|do|\\{\\s|do\\s)(\\|)",
            captures: {
                1: {
                    name: "punctuation.separator.arguments.ruby"
                }
            },
            end: "(?<!\\|)(\\|)(?!\\|)",
            patterns: [
                {
                    include: "$self"
                },
                {
                    match: "[_a-zA-Z][_a-zA-Z0-9]*",
                    name: "variable.other.block.ruby"
                },
                {
                    match: ",",
                    name: "punctuation.separator.variable.ruby"
                }
            ]
        },
        {
            match: "=>",
            name: "punctuation.separator.key-value"
        },
        {
            match: "->",
            name: "support.function.kernel.lambda.ruby"
        },
        {
            match: "<<=|%=|&{1,2}=|\\*=|\\*\\*=|\\+=|-=|\\^=|\\|{1,2}=|<<",
            name: "keyword.operator.assignment.augmented.ruby"
        },
        {
            match: "<=>|<(?!<|=)|>(?!<|=|>)|<=|>=|===|==|=~|!=|!~|(?<=[ \\t])\\?",
            name: "keyword.operator.comparison.ruby"
        },
        {
            match: "(?<!\\.)\\b(and|not|or)\\b(?![?!])",
            name: "keyword.operator.logical.ruby"
        },
        {
            comment: "Make sure this goes after assignment and comparison",
            match: "(?<=^|[ \\t])!|&&|\\|\\||\\^",
            name: "keyword.operator.logical.ruby"
        },
        {
            captures: {
                1: {
                    name: "punctuation.separator.method.ruby"
                }
            },
            comment: "Safe navigation operator - Added in 2.3",
            match: "(&\\.)\\s*(?![A-Z])"
        },
        {
            match: "(%|&|\\*\\*|\\*|\\+|-|/)",
            name: "keyword.operator.arithmetic.ruby"
        },
        {
            match: "=",
            name: "keyword.operator.assignment.ruby"
        },
        {
            match: "\\||~|>>",
            name: "keyword.operator.other.ruby"
        },
        {
            match: ";",
            name: "punctuation.separator.statement.ruby"
        },
        {
            match: ",",
            name: "punctuation.separator.object.ruby"
        },
        {
            captures: {
                1: {
                    name: "punctuation.separator.namespace.ruby"
                }
            },
            comment: "Mark as namespace separator if double colons followed by capital letter",
            match: "(::)\\s*(?=[A-Z])"
        },
        {
            captures: {
                1: {
                    name: "punctuation.separator.method.ruby"
                }
            },
            comment: "Mark as method separator if double colons not followed by capital letter",
            match: "(\\.|::)\\s*(?![A-Z])"
        },
        {
            comment: "Must come after method and constant separators to prefer double colons",
            match: ":",
            name: "punctuation.separator.other.ruby"
        },
        {
            match: "\\{",
            name: "punctuation.section.scope.begin.ruby"
        },
        {
            match: "\\}",
            name: "punctuation.section.scope.end.ruby"
        },
        {
            match: "\\[",
            name: "punctuation.section.array.begin.ruby"
        },
        {
            match: "\\]",
            name: "punctuation.section.array.end.ruby"
        },
        {
            match: "\\(|\\)",
            name: "punctuation.section.function.ruby"
        }
    ],
    repository: {
        escaped_char: {
            match: "\\\\(?:[0-7]{1,3}|x[\\da-fA-F]{1,2}|.)",
            name: "constant.character.escape.ruby"
        },
        heredoc: {
            begin: "^<<[-~]?\\w+",
            end: "$",
            patterns: [
                {
                    include: "$self"
                }
            ]
        },
        interpolated_ruby: {
            patterns: [
                {
                    begin: "#\\{",
                    beginCaptures: {
                        0: {
                            name: "punctuation.section.embedded.begin.ruby"
                        }
                    },
                    contentName: "source.ruby",
                    end: "(\\})",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.embedded.end.ruby"
                        },
                        1: {
                            name: "source.ruby"
                        }
                    },
                    name: "meta.embedded.line.ruby",
                    patterns: [
                        {
                            include: "#nest_curly_and_self"
                        },
                        {
                            include: "$self"
                        }
                    ],
                    repository: {
                        nest_curly_and_self: {
                            patterns: [
                                {
                                    begin: "\\{",
                                    captures: {
                                        0: {
                                            name: "punctuation.section.scope.ruby"
                                        }
                                    },
                                    end: "\\}",
                                    patterns: [
                                        {
                                            include: "#nest_curly_and_self"
                                        }
                                    ]
                                },
                                {
                                    include: "$self"
                                }
                            ]
                        }
                    }
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.variable.ruby"
                        }
                    },
                    match: "(#@)[a-zA-Z_]\\w*",
                    name: "variable.other.readwrite.instance.ruby"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.variable.ruby"
                        }
                    },
                    match: "(#@@)[a-zA-Z_]\\w*",
                    name: "variable.other.readwrite.class.ruby"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.variable.ruby"
                        }
                    },
                    match: "(#\\$)[a-zA-Z_]\\w*",
                    name: "variable.other.readwrite.global.ruby"
                }
            ]
        },
        percent_literals: {
            patterns: [
                {
                    begin: "%i(?:([(\\[{<])|([^\\w\\s]|_))",
                    beginCaptures: {
                        0: {
                            name: "punctuation.section.array.begin.ruby"
                        }
                    },
                    end: "[)\\]}>]\\2|\\1\\2",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.array.end.ruby"
                        }
                    },
                    name: "meta.array.symbol.ruby",
                    patterns: [
                        {
                            begin: "\\G(?<=\\()(?!\\))",
                            end: "(?=\\))",
                            patterns: [
                                {
                                    include: "#parens"
                                },
                                {
                                    include: "#symbol"
                                }
                            ]
                        },
                        {
                            begin: "\\G(?<=\\[)(?!\\])",
                            end: "(?=\\])",
                            patterns: [
                                {
                                    include: "#brackets"
                                },
                                {
                                    include: "#symbol"
                                }
                            ]
                        },
                        {
                            begin: "\\G(?<=\\{)(?!\\})",
                            end: "(?=\\})",
                            patterns: [
                                {
                                    include: "#braces"
                                },
                                {
                                    include: "#symbol"
                                }
                            ]
                        },
                        {
                            begin: "\\G(?<=<)(?!>)",
                            end: "(?=>)",
                            patterns: [
                                {
                                    include: "#angles"
                                },
                                {
                                    include: "#symbol"
                                }
                            ]
                        },
                        {
                            include: "#symbol"
                        }
                    ],
                    repository: {
                        angles: {
                            patterns: [
                                {
                                    captures: {
                                        0: {
                                            name: "constant.character.escape.ruby"
                                        }
                                    },
                                    match: "\\\\<|\\\\>",
                                    name: "constant.other.symbol.ruby"
                                },
                                {
                                    begin: "<",
                                    captures: {
                                        0: {
                                            name: "constant.other.symbol.ruby"
                                        }
                                    },
                                    end: ">",
                                    patterns: [
                                        {
                                            include: "#angles"
                                        },
                                        {
                                            include: "#symbol"
                                        }
                                    ]
                                }
                            ]
                        },
                        braces: {
                            patterns: [
                                {
                                    captures: {
                                        0: {
                                            name: "constant.character.escape.ruby"
                                        }
                                    },
                                    match: "\\\\\\{|\\\\\\}",
                                    name: "constant.other.symbol.ruby"
                                },
                                {
                                    begin: "\\{",
                                    captures: {
                                        0: {
                                            name: "constant.other.symbol.ruby"
                                        }
                                    },
                                    end: "\\}",
                                    patterns: [
                                        {
                                            include: "#braces"
                                        },
                                        {
                                            include: "#symbol"
                                        }
                                    ]
                                }
                            ]
                        },
                        brackets: {
                            patterns: [
                                {
                                    captures: {
                                        0: {
                                            name: "constant.character.escape.ruby"
                                        }
                                    },
                                    match: "\\\\\\[|\\\\\\]",
                                    name: "constant.other.symbol.ruby"
                                },
                                {
                                    begin: "\\[",
                                    captures: {
                                        0: {
                                            name: "constant.other.symbol.ruby"
                                        }
                                    },
                                    end: "\\]",
                                    patterns: [
                                        {
                                            include: "#brackets"
                                        },
                                        {
                                            include: "#symbol"
                                        }
                                    ]
                                }
                            ]
                        },
                        parens: {
                            patterns: [
                                {
                                    captures: {
                                        0: {
                                            name: "constant.character.escape.ruby"
                                        }
                                    },
                                    match: "\\\\\\(|\\\\\\)",
                                    name: "constant.other.symbol.ruby"
                                },
                                {
                                    begin: "\\(",
                                    captures: {
                                        0: {
                                            name: "constant.other.symbol.ruby"
                                        }
                                    },
                                    end: "\\)",
                                    patterns: [
                                        {
                                            include: "#parens"
                                        },
                                        {
                                            include: "#symbol"
                                        }
                                    ]
                                }
                            ]
                        },
                        symbol: {
                            patterns: [
                                {
                                    captures: {
                                        0: {
                                            name: "constant.character.escape.ruby"
                                        }
                                    },
                                    match: "\\\\\\\\|\\\\[ ]",
                                    name: "constant.other.symbol.ruby"
                                },
                                {
                                    match: "\\S\\w*",
                                    name: "constant.other.symbol.ruby"
                                }
                            ]
                        }
                    }
                },
                {
                    begin: "%I(?:([(\\[{<])|([^\\w\\s]|_))",
                    beginCaptures: {
                        0: {
                            name: "punctuation.section.array.begin.ruby"
                        }
                    },
                    end: "[)\\]}>]\\2|\\1\\2",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.array.end.ruby"
                        }
                    },
                    name: "meta.array.symbol.interpolated.ruby",
                    patterns: [
                        {
                            begin: "\\G(?<=\\()(?!\\))",
                            end: "(?=\\))",
                            patterns: [
                                {
                                    include: "#parens"
                                },
                                {
                                    include: "#symbol"
                                }
                            ]
                        },
                        {
                            begin: "\\G(?<=\\[)(?!\\])",
                            end: "(?=\\])",
                            patterns: [
                                {
                                    include: "#brackets"
                                },
                                {
                                    include: "#symbol"
                                }
                            ]
                        },
                        {
                            begin: "\\G(?<=\\{)(?!\\})",
                            end: "(?=\\})",
                            patterns: [
                                {
                                    include: "#braces"
                                },
                                {
                                    include: "#symbol"
                                }
                            ]
                        },
                        {
                            begin: "\\G(?<=<)(?!>)",
                            end: "(?=>)",
                            patterns: [
                                {
                                    include: "#angles"
                                },
                                {
                                    include: "#symbol"
                                }
                            ]
                        },
                        {
                            include: "#symbol"
                        }
                    ],
                    repository: {
                        angles: {
                            patterns: [
                                {
                                    begin: "<",
                                    captures: {
                                        0: {
                                            name: "constant.other.symbol.ruby"
                                        }
                                    },
                                    end: ">",
                                    patterns: [
                                        {
                                            include: "#angles"
                                        },
                                        {
                                            include: "#symbol"
                                        }
                                    ]
                                }
                            ]
                        },
                        braces: {
                            patterns: [
                                {
                                    begin: "\\{",
                                    captures: {
                                        0: {
                                            name: "constant.other.symbol.ruby"
                                        }
                                    },
                                    end: "\\}",
                                    patterns: [
                                        {
                                            include: "#braces"
                                        },
                                        {
                                            include: "#symbol"
                                        }
                                    ]
                                }
                            ]
                        },
                        brackets: {
                            patterns: [
                                {
                                    begin: "\\[",
                                    captures: {
                                        0: {
                                            name: "constant.other.symbol.ruby"
                                        }
                                    },
                                    end: "\\]",
                                    patterns: [
                                        {
                                            include: "#brackets"
                                        },
                                        {
                                            include: "#symbol"
                                        }
                                    ]
                                }
                            ]
                        },
                        parens: {
                            patterns: [
                                {
                                    begin: "\\(",
                                    captures: {
                                        0: {
                                            name: "constant.other.symbol.ruby"
                                        }
                                    },
                                    end: "\\)",
                                    patterns: [
                                        {
                                            include: "#parens"
                                        },
                                        {
                                            include: "#symbol"
                                        }
                                    ]
                                }
                            ]
                        },
                        symbol: {
                            patterns: [
                                {
                                    begin: "(?=\\\\|#\\{)",
                                    end: "(?!\\G)",
                                    name: "constant.other.symbol.ruby",
                                    patterns: [
                                        {
                                            include: "#escaped_char"
                                        },
                                        {
                                            include: "#interpolated_ruby"
                                        }
                                    ]
                                },
                                {
                                    match: "\\S\\w*",
                                    name: "constant.other.symbol.ruby"
                                }
                            ]
                        }
                    }
                },
                {
                    begin: "%q(?:([(\\[{<])|([^\\w\\s]|_))",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.ruby"
                        }
                    },
                    end: "[)\\]}>]\\2|\\1\\2",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.ruby"
                        }
                    },
                    name: "string.quoted.other.ruby",
                    patterns: [
                        {
                            begin: "\\G(?<=\\()(?!\\))",
                            end: "(?=\\))",
                            patterns: [
                                {
                                    include: "#parens"
                                }
                            ]
                        },
                        {
                            begin: "\\G(?<=\\[)(?!\\])",
                            end: "(?=\\])",
                            patterns: [
                                {
                                    include: "#brackets"
                                }
                            ]
                        },
                        {
                            begin: "\\G(?<=\\{)(?!\\})",
                            end: "(?=\\})",
                            patterns: [
                                {
                                    include: "#braces"
                                }
                            ]
                        },
                        {
                            begin: "\\G(?<=<)(?!>)",
                            end: "(?=>)",
                            patterns: [
                                {
                                    include: "#angles"
                                }
                            ]
                        }
                    ],
                    repository: {
                        angles: {
                            patterns: [
                                {
                                    match: "\\\\<|\\\\>|\\\\\\\\",
                                    name: "constant.character.escape.ruby"
                                },
                                {
                                    begin: "<",
                                    end: ">",
                                    patterns: [
                                        {
                                            include: "#angles"
                                        }
                                    ]
                                }
                            ]
                        },
                        braces: {
                            patterns: [
                                {
                                    match: "\\\\\\{|\\\\\\}|\\\\\\\\",
                                    name: "constant.character.escape.ruby"
                                },
                                {
                                    begin: "\\{",
                                    end: "\\}",
                                    patterns: [
                                        {
                                            include: "#braces"
                                        }
                                    ]
                                }
                            ]
                        },
                        brackets: {
                            patterns: [
                                {
                                    match: "\\\\\\[|\\\\\\]|\\\\\\\\",
                                    name: "constant.character.escape.ruby"
                                },
                                {
                                    begin: "\\[",
                                    end: "\\]",
                                    patterns: [
                                        {
                                            include: "#brackets"
                                        }
                                    ]
                                }
                            ]
                        },
                        parens: {
                            patterns: [
                                {
                                    match: "\\\\\\(|\\\\\\)|\\\\\\\\",
                                    name: "constant.character.escape.ruby"
                                },
                                {
                                    begin: "\\(",
                                    end: "\\)",
                                    patterns: [
                                        {
                                            include: "#parens"
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                },
                {
                    begin: "%Q?(?:([(\\[{<])|([^\\w\\s=]|_))",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.ruby"
                        }
                    },
                    end: "[)\\]}>]\\2|\\1\\2",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.ruby"
                        }
                    },
                    name: "string.quoted.other.interpolated.ruby",
                    patterns: [
                        {
                            begin: "\\G(?<=\\()(?!\\))",
                            end: "(?=\\))",
                            patterns: [
                                {
                                    include: "#parens"
                                }
                            ]
                        },
                        {
                            begin: "\\G(?<=\\[)(?!\\])",
                            end: "(?=\\])",
                            patterns: [
                                {
                                    include: "#brackets"
                                }
                            ]
                        },
                        {
                            begin: "\\G(?<=\\{)(?!\\})",
                            end: "(?=\\})",
                            patterns: [
                                {
                                    include: "#braces"
                                }
                            ]
                        },
                        {
                            begin: "\\G(?<=<)(?!>)",
                            end: "(?=>)",
                            patterns: [
                                {
                                    include: "#angles"
                                }
                            ]
                        },
                        {
                            include: "#escaped_char"
                        },
                        {
                            include: "#interpolated_ruby"
                        }
                    ],
                    repository: {
                        angles: {
                            patterns: [
                                {
                                    include: "#escaped_char"
                                },
                                {
                                    include: "#interpolated_ruby"
                                },
                                {
                                    begin: "<",
                                    end: ">",
                                    patterns: [
                                        {
                                            include: "#angles"
                                        }
                                    ]
                                }
                            ]
                        },
                        braces: {
                            patterns: [
                                {
                                    include: "#escaped_char"
                                },
                                {
                                    include: "#interpolated_ruby"
                                },
                                {
                                    begin: "\\{",
                                    end: "\\}",
                                    patterns: [
                                        {
                                            include: "#braces"
                                        }
                                    ]
                                }
                            ]
                        },
                        brackets: {
                            patterns: [
                                {
                                    include: "#escaped_char"
                                },
                                {
                                    include: "#interpolated_ruby"
                                },
                                {
                                    begin: "\\[",
                                    end: "\\]",
                                    patterns: [
                                        {
                                            include: "#brackets"
                                        }
                                    ]
                                }
                            ]
                        },
                        parens: {
                            patterns: [
                                {
                                    include: "#escaped_char"
                                },
                                {
                                    include: "#interpolated_ruby"
                                },
                                {
                                    begin: "\\(",
                                    end: "\\)",
                                    patterns: [
                                        {
                                            include: "#parens"
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                },
                {
                    begin: "%r(?:([(\\[{<])|([^\\w\\s]|_))",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.ruby"
                        }
                    },
                    end: "([)\\]}>]\\2|\\1\\2)[eimnosux]*",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.ruby"
                        }
                    },
                    name: "string.regexp.percent.ruby",
                    patterns: [
                        {
                            begin: "\\G(?<=\\()(?!\\))",
                            end: "(?=\\))",
                            patterns: [
                                {
                                    include: "#parens"
                                }
                            ]
                        },
                        {
                            begin: "\\G(?<=\\[)(?!\\])",
                            end: "(?=\\])",
                            patterns: [
                                {
                                    include: "#brackets"
                                }
                            ]
                        },
                        {
                            begin: "\\G(?<=\\{)(?!\\})",
                            end: "(?=\\})",
                            patterns: [
                                {
                                    include: "#braces"
                                }
                            ]
                        },
                        {
                            begin: "\\G(?<=<)(?!>)",
                            end: "(?=>)",
                            patterns: [
                                {
                                    include: "#angles"
                                }
                            ]
                        },
                        {
                            include: "#regex_sub"
                        }
                    ],
                    repository: {
                        angles: {
                            patterns: [
                                {
                                    include: "#regex_sub"
                                },
                                {
                                    begin: "<",
                                    end: ">",
                                    patterns: [
                                        {
                                            include: "#angles"
                                        }
                                    ]
                                }
                            ]
                        },
                        braces: {
                            patterns: [
                                {
                                    include: "#regex_sub"
                                },
                                {
                                    begin: "\\{",
                                    end: "\\}",
                                    patterns: [
                                        {
                                            include: "#braces"
                                        }
                                    ]
                                }
                            ]
                        },
                        brackets: {
                            patterns: [
                                {
                                    include: "#regex_sub"
                                },
                                {
                                    begin: "\\[",
                                    end: "\\]",
                                    patterns: [
                                        {
                                            include: "#brackets"
                                        }
                                    ]
                                }
                            ]
                        },
                        parens: {
                            patterns: [
                                {
                                    include: "#regex_sub"
                                },
                                {
                                    begin: "\\(",
                                    end: "\\)",
                                    patterns: [
                                        {
                                            include: "#parens"
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                },
                {
                    begin: "%s(?:([(\\[{<])|([^\\w\\s]|_))",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.constant.begin.ruby"
                        }
                    },
                    end: "[)\\]}>]\\2|\\1\\2",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.constant.end.ruby"
                        }
                    },
                    name: "constant.other.symbol.percent.ruby",
                    patterns: [
                        {
                            begin: "\\G(?<=\\()(?!\\))",
                            end: "(?=\\))",
                            patterns: [
                                {
                                    include: "#parens"
                                }
                            ]
                        },
                        {
                            begin: "\\G(?<=\\[)(?!\\])",
                            end: "(?=\\])",
                            patterns: [
                                {
                                    include: "#brackets"
                                }
                            ]
                        },
                        {
                            begin: "\\G(?<=\\{)(?!\\})",
                            end: "(?=\\})",
                            patterns: [
                                {
                                    include: "#braces"
                                }
                            ]
                        },
                        {
                            begin: "\\G(?<=<)(?!>)",
                            end: "(?=>)",
                            patterns: [
                                {
                                    include: "#angles"
                                }
                            ]
                        }
                    ],
                    repository: {
                        angles: {
                            patterns: [
                                {
                                    match: "\\\\<|\\\\>|\\\\\\\\",
                                    name: "constant.character.escape.ruby"
                                },
                                {
                                    begin: "<",
                                    end: ">",
                                    patterns: [
                                        {
                                            include: "#angles"
                                        }
                                    ]
                                }
                            ]
                        },
                        braces: {
                            patterns: [
                                {
                                    match: "\\\\\\{|\\\\\\}|\\\\\\\\",
                                    name: "constant.character.escape.ruby"
                                },
                                {
                                    begin: "\\{",
                                    end: "\\}",
                                    patterns: [
                                        {
                                            include: "#braces"
                                        }
                                    ]
                                }
                            ]
                        },
                        brackets: {
                            patterns: [
                                {
                                    match: "\\\\\\[|\\\\\\]|\\\\\\\\",
                                    name: "constant.character.escape.ruby"
                                },
                                {
                                    begin: "\\[",
                                    end: "\\]",
                                    patterns: [
                                        {
                                            include: "#brackets"
                                        }
                                    ]
                                }
                            ]
                        },
                        parens: {
                            patterns: [
                                {
                                    match: "\\\\\\(|\\\\\\)|\\\\\\\\",
                                    name: "constant.character.escape.ruby"
                                },
                                {
                                    begin: "\\(",
                                    end: "\\)",
                                    patterns: [
                                        {
                                            include: "#parens"
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                },
                {
                    begin: "%w(?:([(\\[{<])|([^\\w\\s]|_))",
                    beginCaptures: {
                        0: {
                            name: "punctuation.section.array.begin.ruby"
                        }
                    },
                    end: "[)\\]}>]\\2|\\1\\2",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.array.end.ruby"
                        }
                    },
                    name: "meta.array.string.ruby",
                    patterns: [
                        {
                            begin: "\\G(?<=\\()(?!\\))",
                            end: "(?=\\))",
                            patterns: [
                                {
                                    include: "#parens"
                                },
                                {
                                    include: "#string"
                                }
                            ]
                        },
                        {
                            begin: "\\G(?<=\\[)(?!\\])",
                            end: "(?=\\])",
                            patterns: [
                                {
                                    include: "#brackets"
                                },
                                {
                                    include: "#string"
                                }
                            ]
                        },
                        {
                            begin: "\\G(?<=\\{)(?!\\})",
                            end: "(?=\\})",
                            patterns: [
                                {
                                    include: "#braces"
                                },
                                {
                                    include: "#string"
                                }
                            ]
                        },
                        {
                            begin: "\\G(?<=<)(?!>)",
                            end: "(?=>)",
                            patterns: [
                                {
                                    include: "#angles"
                                },
                                {
                                    include: "#string"
                                }
                            ]
                        },
                        {
                            include: "#string"
                        }
                    ],
                    repository: {
                        angles: {
                            patterns: [
                                {
                                    captures: {
                                        0: {
                                            name: "constant.character.escape.ruby"
                                        }
                                    },
                                    match: "\\\\<|\\\\>",
                                    name: "string.other.ruby"
                                },
                                {
                                    begin: "<",
                                    captures: {
                                        0: {
                                            name: "string.other.ruby"
                                        }
                                    },
                                    end: ">",
                                    patterns: [
                                        {
                                            include: "#angles"
                                        },
                                        {
                                            include: "#string"
                                        }
                                    ]
                                }
                            ]
                        },
                        braces: {
                            patterns: [
                                {
                                    captures: {
                                        0: {
                                            name: "constant.character.escape.ruby"
                                        }
                                    },
                                    match: "\\\\\\{|\\\\\\}",
                                    name: "string.other.ruby"
                                },
                                {
                                    begin: "\\{",
                                    captures: {
                                        0: {
                                            name: "string.other.ruby"
                                        }
                                    },
                                    end: "\\}",
                                    patterns: [
                                        {
                                            include: "#braces"
                                        },
                                        {
                                            include: "#string"
                                        }
                                    ]
                                }
                            ]
                        },
                        brackets: {
                            patterns: [
                                {
                                    captures: {
                                        0: {
                                            name: "constant.character.escape.ruby"
                                        }
                                    },
                                    match: "\\\\\\[|\\\\\\]",
                                    name: "string.other.ruby"
                                },
                                {
                                    begin: "\\[",
                                    captures: {
                                        0: {
                                            name: "string.other.ruby"
                                        }
                                    },
                                    end: "\\]",
                                    patterns: [
                                        {
                                            include: "#brackets"
                                        },
                                        {
                                            include: "#string"
                                        }
                                    ]
                                }
                            ]
                        },
                        parens: {
                            patterns: [
                                {
                                    captures: {
                                        0: {
                                            name: "constant.character.escape.ruby"
                                        }
                                    },
                                    match: "\\\\\\(|\\\\\\)",
                                    name: "string.other.ruby"
                                },
                                {
                                    begin: "\\(",
                                    captures: {
                                        0: {
                                            name: "string.other.ruby"
                                        }
                                    },
                                    end: "\\)",
                                    patterns: [
                                        {
                                            include: "#parens"
                                        },
                                        {
                                            include: "#string"
                                        }
                                    ]
                                }
                            ]
                        },
                        string: {
                            patterns: [
                                {
                                    captures: {
                                        0: {
                                            name: "constant.character.escape.ruby"
                                        }
                                    },
                                    match: "\\\\\\\\|\\\\[ ]",
                                    name: "string.other.ruby"
                                },
                                {
                                    match: "\\S\\w*",
                                    name: "string.other.ruby"
                                }
                            ]
                        }
                    }
                },
                {
                    begin: "%W(?:([(\\[{<])|([^\\w\\s]|_))",
                    beginCaptures: {
                        0: {
                            name: "punctuation.section.array.begin.ruby"
                        }
                    },
                    end: "[)\\]}>]\\2|\\1\\2",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.array.end.ruby"
                        }
                    },
                    name: "meta.array.string.interpolated.ruby",
                    patterns: [
                        {
                            begin: "\\G(?<=\\()(?!\\))",
                            end: "(?=\\))",
                            patterns: [
                                {
                                    include: "#parens"
                                },
                                {
                                    include: "#string"
                                }
                            ]
                        },
                        {
                            begin: "\\G(?<=\\[)(?!\\])",
                            end: "(?=\\])",
                            patterns: [
                                {
                                    include: "#brackets"
                                },
                                {
                                    include: "#string"
                                }
                            ]
                        },
                        {
                            begin: "\\G(?<=\\{)(?!\\})",
                            end: "(?=\\})",
                            patterns: [
                                {
                                    include: "#braces"
                                },
                                {
                                    include: "#string"
                                }
                            ]
                        },
                        {
                            begin: "\\G(?<=<)(?!>)",
                            end: "(?=>)",
                            patterns: [
                                {
                                    include: "#angles"
                                },
                                {
                                    include: "#string"
                                }
                            ]
                        },
                        {
                            include: "#string"
                        }
                    ],
                    repository: {
                        angles: {
                            patterns: [
                                {
                                    begin: "<",
                                    captures: {
                                        0: {
                                            name: "string.other.ruby"
                                        }
                                    },
                                    end: ">",
                                    patterns: [
                                        {
                                            include: "#angles"
                                        },
                                        {
                                            include: "#string"
                                        }
                                    ]
                                }
                            ]
                        },
                        braces: {
                            patterns: [
                                {
                                    begin: "\\{",
                                    captures: {
                                        0: {
                                            name: "string.other.ruby"
                                        }
                                    },
                                    end: "\\}",
                                    patterns: [
                                        {
                                            include: "#braces"
                                        },
                                        {
                                            include: "#string"
                                        }
                                    ]
                                }
                            ]
                        },
                        brackets: {
                            patterns: [
                                {
                                    begin: "\\[",
                                    captures: {
                                        0: {
                                            name: "string.other.ruby"
                                        }
                                    },
                                    end: "\\]",
                                    patterns: [
                                        {
                                            include: "#brackets"
                                        },
                                        {
                                            include: "#string"
                                        }
                                    ]
                                }
                            ]
                        },
                        parens: {
                            patterns: [
                                {
                                    begin: "\\(",
                                    captures: {
                                        0: {
                                            name: "string.other.ruby"
                                        }
                                    },
                                    end: "\\)",
                                    patterns: [
                                        {
                                            include: "#parens"
                                        },
                                        {
                                            include: "#string"
                                        }
                                    ]
                                }
                            ]
                        },
                        string: {
                            patterns: [
                                {
                                    begin: "(?=\\\\|#\\{)",
                                    end: "(?!\\G)",
                                    name: "string.other.ruby",
                                    patterns: [
                                        {
                                            include: "#escaped_char"
                                        },
                                        {
                                            include: "#interpolated_ruby"
                                        }
                                    ]
                                },
                                {
                                    match: "\\S\\w*",
                                    name: "string.other.ruby"
                                }
                            ]
                        }
                    }
                },
                {
                    begin: "%x(?:([(\\[{<])|([^\\w\\s]|_))",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.ruby"
                        }
                    },
                    end: "[)\\]}>]\\2|\\1\\2",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.ruby"
                        }
                    },
                    name: "string.interpolated.percent.ruby",
                    patterns: [
                        {
                            begin: "\\G(?<=\\()(?!\\))",
                            end: "(?=\\))",
                            patterns: [
                                {
                                    include: "#parens"
                                }
                            ]
                        },
                        {
                            begin: "\\G(?<=\\[)(?!\\])",
                            end: "(?=\\])",
                            patterns: [
                                {
                                    include: "#brackets"
                                }
                            ]
                        },
                        {
                            begin: "\\G(?<=\\{)(?!\\})",
                            end: "(?=\\})",
                            patterns: [
                                {
                                    include: "#braces"
                                }
                            ]
                        },
                        {
                            begin: "\\G(?<=<)(?!>)",
                            end: "(?=>)",
                            patterns: [
                                {
                                    include: "#angles"
                                }
                            ]
                        },
                        {
                            include: "#escaped_char"
                        },
                        {
                            include: "#interpolated_ruby"
                        }
                    ],
                    repository: {
                        angles: {
                            patterns: [
                                {
                                    include: "#escaped_char"
                                },
                                {
                                    include: "#interpolated_ruby"
                                },
                                {
                                    begin: "<",
                                    end: ">",
                                    patterns: [
                                        {
                                            include: "#angles"
                                        }
                                    ]
                                }
                            ]
                        },
                        braces: {
                            patterns: [
                                {
                                    include: "#escaped_char"
                                },
                                {
                                    include: "#interpolated_ruby"
                                },
                                {
                                    begin: "\\{",
                                    end: "\\}",
                                    patterns: [
                                        {
                                            include: "#braces"
                                        }
                                    ]
                                }
                            ]
                        },
                        brackets: {
                            patterns: [
                                {
                                    include: "#escaped_char"
                                },
                                {
                                    include: "#interpolated_ruby"
                                },
                                {
                                    begin: "\\[",
                                    end: "\\]",
                                    patterns: [
                                        {
                                            include: "#brackets"
                                        }
                                    ]
                                }
                            ]
                        },
                        parens: {
                            patterns: [
                                {
                                    include: "#escaped_char"
                                },
                                {
                                    include: "#interpolated_ruby"
                                },
                                {
                                    begin: "\\(",
                                    end: "\\)",
                                    patterns: [
                                        {
                                            include: "#parens"
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                }
            ]
        },
        regex_sub: {
            patterns: [
                {
                    include: "#interpolated_ruby"
                },
                {
                    include: "#escaped_char"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.quantifier.begin.ruby"
                        },
                        3: {
                            name: "punctuation.definition.quantifier.end.ruby"
                        }
                    },
                    match: "(\\{)\\d+(,\\d+)?(\\})",
                    name: "keyword.operator.quantifier.ruby"
                },
                {
                    begin: "\\[\\^?",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.character-class.begin.ruby"
                        }
                    },
                    end: "\\]",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.character-class.end.ruby"
                        }
                    },
                    name: "constant.other.character-class.set.ruby",
                    patterns: [
                        {
                            include: "#escaped_char"
                        }
                    ]
                },
                {
                    begin: "\\(\\?#",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.comment.begin.ruby"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.comment.end.ruby"
                        }
                    },
                    name: "comment.line.number-sign.ruby",
                    patterns: [
                        {
                            include: "#escaped_char"
                        }
                    ]
                },
                {
                    begin: "\\(",
                    captures: {
                        0: {
                            name: "punctuation.definition.group.ruby"
                        }
                    },
                    end: "\\)",
                    name: "meta.group.regexp.ruby",
                    patterns: [
                        {
                            include: "#regex_sub"
                        }
                    ]
                },
                {
                    begin: "(?<=^|\\s)(#)\\s(?=[[a-zA-Z0-9,. \\t?!-][^\\x{00}-\\x{7F}]]*$)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.comment.ruby"
                        }
                    },
                    comment: "We are restrictive in what we allow to go after the comment character to avoid false positives, since the availability of comments depend on regexp flags.",
                    end: "$\\n?",
                    name: "comment.line.number-sign.ruby"
                }
            ]
        }
    },
    scopeName: "source.ruby",
    embeddedLangs: [
        "html",
        "xml",
        "sql",
        "css",
        "c",
        "javascript",
        "shellscript",
        "lua"
    ],
    aliases: [
        "rb"
    ]
});
var h = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$html$2d$CUoAo5SS$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$xml$2d$CfRpfi_B$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$sql$2d$DkzN59UV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$css$2d$CAzixsid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$c$2d$eDnjw9rh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$javascript$2d$DYrC$2d$pEL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$shellscript$2d$BX81u5Ls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$lua$2d$5TZ$2d$G8Be$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    u
];
;
}}),
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/sass-LqXmC1Fh.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/coffee-BVFTsnP5.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>a)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$javascript$2d$DYrC$2d$pEL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/javascript-DYrC-pEL.js [app-ssr] (ecmascript)");
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
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$javascript$2d$DYrC$2d$pEL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    t
];
;
}}),
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/markdown-BU4nyQnk.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/haml-BuxuxriR.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>b)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$ruby$2d$Brn6Q9Db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/ruby-Brn6Q9Db.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$javascript$2d$DYrC$2d$pEL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/javascript-DYrC-pEL.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$sass$2d$LqXmC1Fh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/sass-LqXmC1Fh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$coffee$2d$BVFTsnP5$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/coffee-BVFTsnP5.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$markdown$2d$BU4nyQnk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/markdown-BU4nyQnk.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$css$2d$CAzixsid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/css-CAzixsid.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const m = Object.freeze({
    displayName: "Ruby Haml",
    fileTypes: [
        "haml",
        "html.haml"
    ],
    foldingStartMarker: "^\\s*([-%#\\:\\.\\w\\=].*)\\s$",
    foldingStopMarker: "^\\s*$",
    name: "haml",
    patterns: [
        {
            begin: "^(\\s*)==",
            contentName: "string.quoted.double.ruby",
            end: "$\\n*",
            patterns: [
                {
                    include: "#interpolated_ruby"
                }
            ]
        },
        {
            begin: "^(\\s*):ruby",
            end: "^(?!\\1\\s+|$\\n*)",
            name: "source.ruby.embedded.filter.haml",
            patterns: [
                {
                    include: "source.ruby"
                }
            ]
        },
        {
            captures: {
                1: {
                    name: "punctuation.definition.prolog.haml"
                }
            },
            match: "^(!!!)($|\\s.*)",
            name: "meta.prolog.haml"
        },
        {
            begin: "^(\\s*):javascript",
            end: "^(?!\\1\\s+|$\\n*)",
            name: "js.haml",
            patterns: [
                {
                    include: "source.js"
                }
            ]
        },
        {
            begin: "^(\\s*)%script",
            end: "^(?!\\1\\s+|$\\n*)",
            name: "js.inline.haml",
            patterns: [
                {
                    include: "source.js"
                }
            ]
        },
        {
            begin: "^(\\s*):ruby$",
            end: "^(?!\\1\\s+|$\\n*)",
            name: "source.ruby.embedded.filter.haml",
            patterns: [
                {
                    include: "source.ruby"
                }
            ]
        },
        {
            captures: {
                1: {
                    name: "punctuation.section.comment.haml"
                }
            },
            match: "^(\\s*)(\\/\\[[^\\]].*?$\\n?)",
            name: "comment.line.slash.haml"
        },
        {
            begin: "^(\\s*)(\\-\\#|\\/|\\-\\s*\\/\\*+)",
            beginCaptures: {
                2: {
                    name: "punctuation.section.comment.haml"
                }
            },
            end: "^(?!\\1\\s+|\\n)",
            name: "comment.block.haml",
            patterns: [
                {
                    include: "text.haml"
                }
            ]
        },
        {
            begin: "^\\s*(?:((%)([-\\w:]+))|(?=\\.|#))",
            captures: {
                1: {
                    name: "meta.tag.haml"
                },
                2: {
                    name: "punctuation.definition.tag.haml"
                },
                3: {
                    name: "entity.name.tag.haml"
                }
            },
            end: "$|(?!\\.|#|\\{|\\(|\\[|&amp;|=|-|~|!=|&=|/)",
            patterns: [
                {
                    begin: "==",
                    contentName: "string.quoted.double.ruby",
                    end: "$\\n?",
                    patterns: [
                        {
                            include: "#interpolated_ruby"
                        }
                    ]
                },
                {
                    captures: {
                        1: {
                            name: "entity.other.attribute-name.class"
                        }
                    },
                    match: "(\\.[\\w\\-\\:]+)",
                    name: "meta.selector.css"
                },
                {
                    captures: {
                        1: {
                            name: "entity.other.attribute-name.id"
                        }
                    },
                    match: "(#[\\w-]+)",
                    name: "meta.selector.css"
                },
                {
                    begin: "(?<!\\#)\\{(?=.*(,|(do)|\\{|\\}|\\||(\\#.*)|\\R)\\s*)",
                    end: "\\s*\\}(?!\\s*\\,)(?!\\s*\\|)(?!\\#\\{.*\\})",
                    name: "meta.section.attributes.haml",
                    patterns: [
                        {
                            include: "source.ruby"
                        },
                        {
                            include: "#continuation"
                        },
                        {
                            include: "#rubyline"
                        }
                    ]
                },
                {
                    begin: "\\(",
                    end: "\\)",
                    name: "meta.section.attributes.plain.haml",
                    patterns: [
                        {
                            match: "([\\w-]+)",
                            name: "constant.other.symbol.ruby"
                        },
                        {
                            match: "\\=",
                            name: "punctuation"
                        },
                        {
                            include: "#variables"
                        },
                        {
                            begin: '"',
                            end: '"',
                            name: "string.quoted.double.ruby",
                            patterns: [
                                {
                                    match: "\\\\(x\\h{2}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)",
                                    name: "constant.character.escape.ruby"
                                },
                                {
                                    include: "#interpolated_ruby"
                                }
                            ]
                        },
                        {
                            include: "#interpolated_ruby"
                        }
                    ]
                },
                {
                    begin: "\\[(?=.+(,|\\[|\\]|\\||(\\#.*))\\s*)",
                    end: "\\s*\\](?!.*(?!\\#\\[)\\])",
                    name: "meta.section.object.haml",
                    patterns: [
                        {
                            include: "source.ruby"
                        },
                        {
                            include: "#continuation"
                        },
                        {
                            include: "#rubyline"
                        }
                    ]
                },
                {
                    include: "#interpolated_ruby_line"
                },
                {
                    include: "#rubyline"
                },
                {
                    match: "/",
                    name: "punctuation.terminator.tag.haml"
                }
            ]
        },
        {
            begin: "^(\\s*):(ruby|opal)$",
            end: "^(?!\\1\\s+|$\\n*)",
            name: "source.ruby.embedded.filter.haml",
            patterns: [
                {
                    include: "source.ruby"
                }
            ]
        },
        {
            begin: "^(\\s*):ruby$",
            end: "^(?!\\1\\s+|$\\n*)",
            name: "source.ruby.embedded.filter.haml",
            patterns: [
                {
                    include: "source.ruby"
                }
            ]
        },
        {
            begin: "^(\\s*):(style|sass)$",
            end: "^(?=\\1\\s+|$\\n*)",
            name: "source.sass.embedded.filter.haml",
            patterns: [
                {
                    include: "source.sass"
                }
            ]
        },
        {
            begin: "^(\\s*):coffee(script)?",
            end: "^(?!\\1\\s+|$\\n*)",
            name: "source.coffee.embedded.filter.haml",
            patterns: [
                {
                    include: "source.coffee"
                }
            ]
        },
        {
            begin: "^(\\s*):plain$",
            end: "^(?=\\1\\s+|$\\n*)",
            name: "text.plain.embedded.filter.haml",
            patterns: [
                {
                    include: "text.plain"
                }
            ]
        },
        {
            begin: "^(\\s*)(:ruby)",
            beginCaptures: {
                2: {
                    name: "keyword.control.filter.haml"
                }
            },
            end: "(?m:(?<=\\n)(?!\\1\\s+|$\\n*))",
            name: "source.ruby.embedded.filter.haml",
            patterns: [
                {
                    include: "source.ruby"
                }
            ]
        },
        {
            begin: "^(\\s*)(:sass)",
            beginCaptures: {
                2: {
                    name: "keyword.control.filter.haml"
                }
            },
            end: "^(?!\\1\\s+|$\\n*)",
            name: "source.embedded.filter.sass",
            patterns: [
                {
                    include: "source.sass"
                }
            ]
        },
        {
            begin: "^(\\s*):(styles|sass)$",
            end: "^(?=\\1\\s+|$\\n*)",
            name: "source.sass.embedded.filter.haml",
            patterns: [
                {
                    include: "source.sass"
                }
            ]
        },
        {
            begin: "^(\\s*):plain$",
            end: "^(?=\\1\\s+|$\\n*)",
            name: "text.plain.embedded.filter.haml",
            patterns: [
                {
                    include: "text.plain"
                }
            ]
        },
        {
            captures: {
                1: {
                    name: "meta.escape.haml"
                }
            },
            match: "^\\s*(\\.)"
        },
        {
            begin: "^\\s*(?==|-|~|!=|&=)",
            end: "$",
            patterns: [
                {
                    include: "#interpolated_ruby_line"
                },
                {
                    include: "#rubyline"
                }
            ]
        },
        {
            begin: "^(\\s*)(:php)",
            captures: {
                2: {
                    name: "entity.name.tag.haml"
                }
            },
            end: "^(?!\\1\\s+|$\\n*)",
            name: "meta.embedded.php",
            patterns: [
                {
                    include: "text.html.php#language"
                }
            ]
        },
        {
            begin: "^(\\s*)(:markdown)",
            captures: {
                2: {
                    name: "entity.name.tag.haml"
                }
            },
            end: "^(?!\\1\\s+|$\\n*)",
            name: "meta.embedded.markdown",
            patterns: [
                {
                    include: "text.html.markdown"
                }
            ]
        },
        {
            begin: "^(\\s*)(:(css|styles?))$",
            captures: {
                2: {
                    name: "entity.name.tag.haml"
                }
            },
            end: "^(?!\\1\\s+|$\\n*)",
            name: "meta.embedded.css",
            patterns: [
                {
                    include: "source.css"
                }
            ]
        },
        {
            begin: "^(\\s*)(:sass)$",
            captures: {
                2: {
                    name: "entity.name.tag.haml"
                }
            },
            end: "^(?!\\1\\s+|$\\n*)",
            name: "meta.embedded.sass",
            patterns: [
                {
                    include: "source.sass"
                }
            ]
        },
        {
            begin: "^(\\s*)(:scss)$",
            captures: {
                2: {
                    name: "entity.name.tag.haml"
                }
            },
            end: "^(?!\\1\\s+|$\\n*)",
            name: "meta.embedded.scss",
            patterns: [
                {
                    include: "source.scss"
                }
            ]
        }
    ],
    repository: {
        continuation: {
            captures: {
                1: {
                    name: "punctuation.separator.continuation.haml"
                }
            },
            match: "(\\|)\\s*\\n"
        },
        interpolated_ruby: {
            patterns: [
                {
                    captures: {
                        0: {
                            name: "punctuation.section.embedded.ruby"
                        },
                        1: {
                            name: "source.ruby.embedded.source.empty"
                        }
                    },
                    match: "#\\{(\\})",
                    name: "source.ruby.embedded.source"
                },
                {
                    begin: "#\\{",
                    captures: {
                        0: {
                            name: "punctuation.section.embedded.ruby"
                        }
                    },
                    end: "(\\})",
                    name: "source.ruby.embedded.source",
                    patterns: [
                        {
                            include: "#nest_curly_and_self"
                        },
                        {
                            include: "source.ruby"
                        }
                    ]
                },
                {
                    include: "#variables"
                }
            ]
        },
        interpolated_ruby_line: {
            begin: "!?==",
            contentName: "string.source.ruby.embedded.haml",
            end: "$",
            name: "meta.line.ruby.interpolated.haml",
            patterns: [
                {
                    include: "#interpolated_ruby"
                },
                {
                    include: "source.ruby#escaped_char"
                }
            ]
        },
        nest_curly_and_self: {
            patterns: [
                {
                    begin: "\\{",
                    captures: {
                        0: {
                            name: "punctuation.section.scope.ruby"
                        }
                    },
                    end: "\\}",
                    patterns: [
                        {
                            include: "#nest_curly_and_self"
                        },
                        {
                            include: "source.ruby"
                        }
                    ]
                }
            ]
        },
        rubyline: {
            begin: "(&amp|!)?(=|-|~)",
            contentName: "source.ruby.embedded.haml",
            end: "((do|\\{)( \\|[.*]+\\|)?)$|$|^(?!.*\\|\\s*)$\\n?",
            endCaptures: {
                1: {
                    name: "source.ruby.embedded.html"
                },
                2: {
                    name: "keyword.control.ruby.start-block"
                }
            },
            name: "meta.line.ruby.haml",
            patterns: [
                {
                    captures: {
                        1: {
                            name: "keyword.control.php"
                        }
                    },
                    match: "\\s+((elseif|foreach|switch|declare|default|use))(?=\\s|\\()"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.control.import.include.php"
                        }
                    },
                    match: "\\s+(require_once|include_once)(?=\\s|\\()"
                },
                {
                    match: "\\s+(catch|try|throw|exception|finally|die)(?=\\s|\\(|\\n*)",
                    name: "keyword.control.exception.php"
                },
                {
                    captures: {
                        1: {
                            name: "storage.type.function.php"
                        }
                    },
                    match: "\\s+(function\\s*)((?=\\())"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.control.php"
                        }
                    },
                    match: "\\s+(use\\s*)((?=\\())"
                },
                {
                    match: "(\\||,|<|do|\\{)\\s*(\\#.*)?$\\n*",
                    name: "source.ruby",
                    patterns: [
                        {
                            include: "#rubyline"
                        }
                    ]
                },
                {
                    comment: "Hack to let ruby comments work in this context properly",
                    match: "#.*$",
                    name: "comment.line.number-sign.ruby"
                },
                {
                    include: "source.ruby"
                },
                {
                    include: "#continuation"
                }
            ]
        },
        variables: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.variable.ruby"
                        }
                    },
                    match: "(#@)[a-zA-Z_]\\w*",
                    name: "variable.other.readwrite.instance.ruby"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.variable.ruby"
                        }
                    },
                    match: "(#@@)[a-zA-Z_]\\w*",
                    name: "variable.other.readwrite.class.ruby"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.variable.ruby"
                        }
                    },
                    match: "(#\\$)[a-zA-Z_]\\w*",
                    name: "variable.other.readwrite.global.ruby"
                }
            ]
        }
    },
    scopeName: "text.haml",
    embeddedLangs: [
        "ruby",
        "javascript",
        "sass",
        "coffee",
        "markdown",
        "css"
    ]
});
var b = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$ruby$2d$Brn6Q9Db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$javascript$2d$DYrC$2d$pEL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$sass$2d$LqXmC1Fh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$coffee$2d$BVFTsnP5$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$markdown$2d$BU4nyQnk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$css$2d$CAzixsid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    m
];
;
}}),

};

//# sourceMappingURL=f8f5a_%40zoerai_zoer-copilot_dist_7f788564._.js.map