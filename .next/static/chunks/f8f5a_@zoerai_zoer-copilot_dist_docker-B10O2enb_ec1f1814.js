(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/f8f5a_@zoerai_zoer-copilot_dist_docker-B10O2enb_ec1f1814.js", {

"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/docker-B10O2enb.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>n)
});
const e = Object.freeze({
    displayName: "Dockerfile",
    name: "docker",
    patterns: [
        {
            captures: {
                1: {
                    name: "keyword.other.special-method.dockerfile"
                },
                2: {
                    name: "keyword.other.special-method.dockerfile"
                }
            },
            match: "^\\s*\\b(?i:(FROM))\\b.*?\\b(?i:(AS))\\b"
        },
        {
            captures: {
                1: {
                    name: "keyword.control.dockerfile"
                },
                2: {
                    name: "keyword.other.special-method.dockerfile"
                }
            },
            match: "^\\s*(?i:(ONBUILD)\\s+)?(?i:(ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR))\\s"
        },
        {
            captures: {
                1: {
                    name: "keyword.operator.dockerfile"
                },
                2: {
                    name: "keyword.other.special-method.dockerfile"
                }
            },
            match: "^\\s*(?i:(ONBUILD)\\s+)?(?i:(CMD|ENTRYPOINT))\\s"
        },
        {
            begin: '"',
            beginCaptures: {
                1: {
                    name: "punctuation.definition.string.begin.dockerfile"
                }
            },
            end: '"',
            endCaptures: {
                1: {
                    name: "punctuation.definition.string.end.dockerfile"
                }
            },
            name: "string.quoted.double.dockerfile",
            patterns: [
                {
                    match: "\\\\.",
                    name: "constant.character.escaped.dockerfile"
                }
            ]
        },
        {
            begin: "'",
            beginCaptures: {
                1: {
                    name: "punctuation.definition.string.begin.dockerfile"
                }
            },
            end: "'",
            endCaptures: {
                1: {
                    name: "punctuation.definition.string.end.dockerfile"
                }
            },
            name: "string.quoted.single.dockerfile",
            patterns: [
                {
                    match: "\\\\.",
                    name: "constant.character.escaped.dockerfile"
                }
            ]
        },
        {
            captures: {
                1: {
                    name: "punctuation.whitespace.comment.leading.dockerfile"
                },
                2: {
                    name: "comment.line.number-sign.dockerfile"
                },
                3: {
                    name: "punctuation.definition.comment.dockerfile"
                }
            },
            comment: "comment.line",
            match: "^(\\s*)((#).*$\\n?)"
        }
    ],
    scopeName: "source.dockerfile",
    aliases: [
        "dockerfile"
    ]
});
var n = [
    e
];
;
}}),
}]);

//# sourceMappingURL=f8f5a_%40zoerai_zoer-copilot_dist_docker-B10O2enb_ec1f1814.js.map