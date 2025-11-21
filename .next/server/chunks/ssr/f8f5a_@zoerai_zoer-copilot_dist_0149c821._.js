module.exports = {

"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/diff-Bo5iyMQ2.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>e)
});
const n = Object.freeze({
    displayName: "Diff",
    name: "diff",
    patterns: [
        {
            captures: {
                1: {
                    name: "punctuation.definition.separator.diff"
                }
            },
            match: "^((\\*{15})|(={67})|(-{3}))$\\n?",
            name: "meta.separator.diff"
        },
        {
            match: "^\\d+(,\\d+)*(a|d|c)\\d+(,\\d+)*$\\n?",
            name: "meta.diff.range.normal"
        },
        {
            captures: {
                1: {
                    name: "punctuation.definition.range.diff"
                },
                2: {
                    name: "meta.toc-list.line-number.diff"
                },
                3: {
                    name: "punctuation.definition.range.diff"
                }
            },
            match: "^(@@)\\s*(.+?)\\s*(@@)($\\n?)?",
            name: "meta.diff.range.unified"
        },
        {
            captures: {
                3: {
                    name: "punctuation.definition.range.diff"
                },
                4: {
                    name: "punctuation.definition.range.diff"
                },
                6: {
                    name: "punctuation.definition.range.diff"
                },
                7: {
                    name: "punctuation.definition.range.diff"
                }
            },
            match: "^(((\\-{3}) .+ (\\-{4}))|((\\*{3}) .+ (\\*{4})))$\\n?",
            name: "meta.diff.range.context"
        },
        {
            match: "^diff --git a/.*$\\n?",
            name: "meta.diff.header.git"
        },
        {
            match: "^diff (-|\\S+\\s+\\S+).*$\\n?",
            name: "meta.diff.header.command"
        },
        {
            captures: {
                4: {
                    name: "punctuation.definition.from-file.diff"
                },
                6: {
                    name: "punctuation.definition.from-file.diff"
                },
                7: {
                    name: "punctuation.definition.from-file.diff"
                }
            },
            match: "(^(((-{3}) .+)|((\\*{3}) .+))$\\n?|^(={4}) .+(?= - ))",
            name: "meta.diff.header.from-file"
        },
        {
            captures: {
                2: {
                    name: "punctuation.definition.to-file.diff"
                },
                3: {
                    name: "punctuation.definition.to-file.diff"
                },
                4: {
                    name: "punctuation.definition.to-file.diff"
                }
            },
            match: "(^(\\+{3}) .+$\\n?| (-) .* (={4})$\\n?)",
            name: "meta.diff.header.to-file"
        },
        {
            captures: {
                3: {
                    name: "punctuation.definition.inserted.diff"
                },
                6: {
                    name: "punctuation.definition.inserted.diff"
                }
            },
            match: "^(((>)( .*)?)|((\\+).*))$\\n?",
            name: "markup.inserted.diff"
        },
        {
            captures: {
                1: {
                    name: "punctuation.definition.changed.diff"
                }
            },
            match: "^(!).*$\\n?",
            name: "markup.changed.diff"
        },
        {
            captures: {
                3: {
                    name: "punctuation.definition.deleted.diff"
                },
                6: {
                    name: "punctuation.definition.deleted.diff"
                }
            },
            match: "^(((<)( .*)?)|((-).*))$\\n?",
            name: "markup.deleted.diff"
        },
        {
            begin: "^(#)",
            captures: {
                1: {
                    name: "punctuation.definition.comment.diff"
                }
            },
            comment: 'Git produces unified diffs with embedded comments"',
            end: "\\n",
            name: "comment.line.number-sign.diff"
        },
        {
            match: "^index [0-9a-f]{7,40}\\.\\.[0-9a-f]{7,40}.*$\\n?",
            name: "meta.diff.index.git"
        },
        {
            captures: {
                1: {
                    name: "punctuation.separator.key-value.diff"
                },
                2: {
                    name: "meta.toc-list.file-name.diff"
                }
            },
            match: "^Index(:) (.+)$\\n?",
            name: "meta.diff.index"
        },
        {
            match: "^Only in .*: .*$\\n?",
            name: "meta.diff.only-in"
        }
    ],
    scopeName: "source.diff"
});
var e = [
    n
];
;
}}),
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/git-commit-CWf81VOF.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>i)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$diff$2d$Bo5iyMQ2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/diff-Bo5iyMQ2.js [app-ssr] (ecmascript)");
;
const t = Object.freeze({
    displayName: "Git Commit Message",
    name: "git-commit",
    patterns: [
        {
            begin: "(?=^diff\\ \\-\\-git)",
            comment: "diff presented at the end of the commit message when using commit -v.",
            contentName: "source.diff",
            end: "\\z",
            name: "meta.embedded.diff.git-commit",
            patterns: [
                {
                    include: "source.diff"
                }
            ]
        },
        {
            begin: "^(?!#)",
            comment: "User supplied message",
            end: "^(?=#)",
            name: "meta.scope.message.git-commit",
            patterns: [
                {
                    captures: {
                        1: {
                            name: "invalid.deprecated.line-too-long.git-commit"
                        },
                        2: {
                            name: "invalid.illegal.line-too-long.git-commit"
                        }
                    },
                    comment: "Mark > 50 lines as deprecated, > 72 as illegal",
                    match: "\\G.{0,50}(.{0,22}(.*))$",
                    name: "meta.scope.subject.git-commit"
                }
            ]
        },
        {
            begin: "^(?=#)",
            comment: "Git supplied metadata in a number of lines starting with #",
            contentName: "comment.line.number-sign.git-commit",
            end: "^(?!#)",
            name: "meta.scope.metadata.git-commit",
            patterns: [
                {
                    captures: {
                        1: {
                            name: "markup.changed.git-commit"
                        }
                    },
                    match: "^#\\t((modified|renamed):.*)$"
                },
                {
                    captures: {
                        1: {
                            name: "markup.inserted.git-commit"
                        }
                    },
                    match: "^#\\t(new file:.*)$"
                },
                {
                    captures: {
                        1: {
                            name: "markup.deleted.git-commit"
                        }
                    },
                    match: "^#\\t(deleted.*)$"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.other.file-type.git-commit"
                        },
                        2: {
                            name: "string.unquoted.filename.git-commit"
                        }
                    },
                    comment: "Fallback for non-English git commit template",
                    match: "^#\\t([^:]+): *(.*)$"
                }
            ]
        }
    ],
    scopeName: "text.git-commit",
    embeddedLangs: [
        "diff"
    ]
});
var i = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$diff$2d$Bo5iyMQ2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    t
];
;
}}),

};

//# sourceMappingURL=f8f5a_%40zoerai_zoer-copilot_dist_0149c821._.js.map