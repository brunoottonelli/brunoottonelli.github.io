(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/f8f5a_@zoerai_zoer-copilot_dist_8fe23d71._.js", {

"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/turtle-CjJ3DTEy.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>t)
});
const e = Object.freeze({
    displayName: "Turtle",
    fileTypes: [
        "turtle",
        "ttl",
        "acl"
    ],
    name: "turtle",
    patterns: [
        {
            include: "#rule-constraint"
        },
        {
            include: "#iriref"
        },
        {
            include: "#prefix"
        },
        {
            include: "#prefixed-name"
        },
        {
            include: "#comment"
        },
        {
            include: "#special-predicate"
        },
        {
            include: "#literals"
        },
        {
            include: "#language-tag"
        }
    ],
    repository: {
        boolean: {
            match: "\\b(?i:true|false)\\b",
            name: "constant.language.sparql"
        },
        comment: {
            match: "#.*$",
            name: "comment.line.number-sign.turtle"
        },
        integer: {
            match: "[+-]?(?:\\d+|[0-9]+\\.[0-9]*|\\.[0-9]+(?:[eE][+-]?\\d+)?)",
            name: "constant.numeric.turtle"
        },
        iriref: {
            match: '<[^\\x20-\\x20<>"{}|^`\\\\]*>',
            name: "entity.name.type.iriref.turtle"
        },
        "language-tag": {
            captures: {
                1: {
                    name: "entity.name.class.turtle"
                }
            },
            match: "@(\\w+)",
            name: "meta.string-literal-language-tag.turtle"
        },
        literals: {
            patterns: [
                {
                    include: "#string"
                },
                {
                    include: "#numeric"
                },
                {
                    include: "#boolean"
                }
            ]
        },
        numeric: {
            patterns: [
                {
                    include: "#integer"
                }
            ]
        },
        prefix: {
            match: "(?i:@?base|@?prefix)\\s",
            name: "keyword.operator.turtle"
        },
        "prefixed-name": {
            captures: {
                1: {
                    name: "storage.type.PNAME_NS.turtle"
                },
                2: {
                    name: "support.variable.PN_LOCAL.turtle"
                }
            },
            match: "(\\w*:)(\\w*)",
            name: "constant.complex.turtle"
        },
        "rule-constraint": {
            begin: '(rule:content) (""")',
            beginCaptures: {
                1: {
                    patterns: [
                        {
                            include: "#prefixed-name"
                        }
                    ]
                },
                2: {
                    name: "string.quoted.triple.turtle"
                }
            },
            end: '"""',
            endCaptures: {
                0: {
                    name: "string.quoted.triple.turtle"
                }
            },
            name: "meta.rule-constraint.turtle",
            patterns: [
                {
                    include: "source.srs"
                }
            ]
        },
        "single-dquote-string-literal": {
            begin: '"',
            beginCaptures: {
                0: {
                    name: "punctuation.definition.string.begin.turtle"
                }
            },
            end: '"',
            endCaptures: {
                0: {
                    name: "punctuation.definition.string.end.turtle"
                }
            },
            name: "string.quoted.double.turtle",
            patterns: [
                {
                    include: "#string-character-escape"
                }
            ]
        },
        "single-squote-string-literal": {
            begin: "'",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.string.begin.turtle"
                }
            },
            end: "'",
            endCaptures: {
                1: {
                    name: "punctuation.definition.string.end.turtle"
                },
                2: {
                    name: "invalid.illegal.newline.turtle"
                }
            },
            name: "string.quoted.single.turtle",
            patterns: [
                {
                    include: "#string-character-escape"
                }
            ]
        },
        "special-predicate": {
            captures: {
                1: {
                    name: "keyword.control.turtle"
                }
            },
            match: "\\s(a)\\s",
            name: "meta.specialPredicate.turtle"
        },
        string: {
            patterns: [
                {
                    include: "#triple-squote-string-literal"
                },
                {
                    include: "#triple-dquote-string-literal"
                },
                {
                    include: "#single-squote-string-literal"
                },
                {
                    include: "#single-dquote-string-literal"
                },
                {
                    include: "#triple-tick-string-literal"
                }
            ]
        },
        "string-character-escape": {
            match: "\\\\(x\\h{2}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.|$)",
            name: "constant.character.escape.turtle"
        },
        "triple-dquote-string-literal": {
            begin: '"""',
            beginCaptures: {
                0: {
                    name: "punctuation.definition.string.begin.turtle"
                }
            },
            end: '"""',
            endCaptures: {
                0: {
                    name: "punctuation.definition.string.end.turtle"
                }
            },
            name: "string.quoted.triple.turtle",
            patterns: [
                {
                    include: "#string-character-escape"
                }
            ]
        },
        "triple-squote-string-literal": {
            begin: "'''",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.string.begin.turtle"
                }
            },
            end: "'''",
            endCaptures: {
                0: {
                    name: "punctuation.definition.string.end.turtle"
                }
            },
            name: "string.quoted.triple.turtle",
            patterns: [
                {
                    include: "#string-character-escape"
                }
            ]
        },
        "triple-tick-string-literal": {
            begin: "```",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.string.begin.turtle"
                }
            },
            end: "```",
            endCaptures: {
                0: {
                    name: "punctuation.definition.string.end.turtle"
                }
            },
            name: "string.quoted.triple.turtle",
            patterns: [
                {
                    include: "#string-character-escape"
                }
            ]
        }
    },
    scopeName: "source.turtle"
});
var t = [
    e
];
;
}}),
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/sparql-C20FYxjg.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>a)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$turtle$2d$CjJ3DTEy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/turtle-CjJ3DTEy.js [app-client] (ecmascript)");
;
const s = Object.freeze({
    displayName: "SPARQL",
    fileTypes: [
        "rq",
        "sparql",
        "sq"
    ],
    name: "sparql",
    patterns: [
        {
            include: "source.turtle"
        },
        {
            include: "#query-keyword-operators"
        },
        {
            include: "#functions"
        },
        {
            include: "#variables"
        },
        {
            include: "#expression-operators"
        }
    ],
    repository: {
        "expression-operators": {
            match: "(?:\\|\\||&&|=|!=|<|>|<=|>=|\\*|/|\\+|-|\\||\\^|\\?|\\!)",
            name: "support.class.sparql"
        },
        functions: {
            match: "\\b(?i:concat|regex|asc|desc|bound|isiri|isuri|isblank|isliteral|isnumeric|str|lang|datatype|sameterm|langmatches|avg|count|group_concat|separator|max|min|sample|sum|iri|uri|bnode|strdt|uuid|struuid|strlang|strlen|substr|ucase|lcase|strstarts|strends|contains|strbefore|strafter|encode_for_uri|replace|abs|round|ceil|floor|rand|now|year|month|day|hours|minutes|seconds|timezone|tz|md5|sha1|sha256|sha384|sha512|coalesce|if)\\b",
            name: "support.function.sparql"
        },
        "query-keyword-operators": {
            match: "\\b(?i:define|select|distinct|reduced|from|named|construct|ask|describe|where|graph|having|bind|as|filter|optional|union|order|by|group|limit|offset|values|insert data|delete data|with|delete|insert|clear|silent|default|all|create|drop|copy|move|add|to|using|service|not exists|exists|not in|in|minus|load)\\b",
            name: "keyword.control.sparql"
        },
        variables: {
            match: "(?<!\\w)[?$]\\w+",
            name: "constant.variable.sparql.turtle"
        }
    },
    scopeName: "source.sparql",
    embeddedLangs: [
        "turtle"
    ]
});
var a = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$turtle$2d$CjJ3DTEy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    s
];
;
}}),
}]);

//# sourceMappingURL=f8f5a_%40zoerai_zoer-copilot_dist_8fe23d71._.js.map