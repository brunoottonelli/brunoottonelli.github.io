(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/f8f5a_@zoerai_zoer-copilot_dist_ini-BsUFIxsI_abff61a7.js", {

"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/ini-BsUFIxsI.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>i)
});
const n = Object.freeze({
    displayName: "INI",
    name: "ini",
    patterns: [
        {
            begin: "(^[ \\t]+)?(?=#)",
            beginCaptures: {
                1: {
                    name: "punctuation.whitespace.comment.leading.ini"
                }
            },
            end: "(?!\\G)",
            patterns: [
                {
                    begin: "#",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.comment.ini"
                        }
                    },
                    end: "\\n",
                    name: "comment.line.number-sign.ini"
                }
            ]
        },
        {
            begin: "(^[ \\t]+)?(?=;)",
            beginCaptures: {
                1: {
                    name: "punctuation.whitespace.comment.leading.ini"
                }
            },
            end: "(?!\\G)",
            patterns: [
                {
                    begin: ";",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.comment.ini"
                        }
                    },
                    end: "\\n",
                    name: "comment.line.semicolon.ini"
                }
            ]
        },
        {
            captures: {
                1: {
                    name: "keyword.other.definition.ini"
                },
                2: {
                    name: "punctuation.separator.key-value.ini"
                }
            },
            match: "\\b([a-zA-Z0-9_.-]+)\\b\\s*(=)"
        },
        {
            captures: {
                1: {
                    name: "punctuation.definition.entity.ini"
                },
                3: {
                    name: "punctuation.definition.entity.ini"
                }
            },
            match: "^(\\[)(.*?)(\\])",
            name: "entity.name.section.group-title.ini"
        },
        {
            begin: "'",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.string.begin.ini"
                }
            },
            end: "'",
            endCaptures: {
                0: {
                    name: "punctuation.definition.string.end.ini"
                }
            },
            name: "string.quoted.single.ini",
            patterns: [
                {
                    match: "\\\\.",
                    name: "constant.character.escape.ini"
                }
            ]
        },
        {
            begin: '"',
            beginCaptures: {
                0: {
                    name: "punctuation.definition.string.begin.ini"
                }
            },
            end: '"',
            endCaptures: {
                0: {
                    name: "punctuation.definition.string.end.ini"
                }
            },
            name: "string.quoted.double.ini"
        }
    ],
    scopeName: "source.ini",
    aliases: [
        "properties"
    ]
});
var i = [
    n
];
;
}}),
}]);

//# sourceMappingURL=f8f5a_%40zoerai_zoer-copilot_dist_ini-BsUFIxsI_abff61a7.js.map