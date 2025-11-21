(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/f8f5a_@zoerai_zoer-copilot_dist_4fabe868._.js", {

"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/shellscript-BX81u5Ls.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/json-B12k4-6m.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>e)
});
const n = Object.freeze({
    displayName: "JSON",
    name: "json",
    patterns: [
        {
            include: "#value"
        }
    ],
    repository: {
        array: {
            begin: "\\[",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.array.begin.json"
                }
            },
            end: "\\]",
            endCaptures: {
                0: {
                    name: "punctuation.definition.array.end.json"
                }
            },
            name: "meta.structure.array.json",
            patterns: [
                {
                    include: "#value"
                },
                {
                    match: ",",
                    name: "punctuation.separator.array.json"
                },
                {
                    match: "[^\\s\\]]",
                    name: "invalid.illegal.expected-array-separator.json"
                }
            ]
        },
        comments: {
            patterns: [
                {
                    begin: "/\\*\\*(?!/)",
                    captures: {
                        0: {
                            name: "punctuation.definition.comment.json"
                        }
                    },
                    end: "\\*/",
                    name: "comment.block.documentation.json"
                },
                {
                    begin: "/\\*",
                    captures: {
                        0: {
                            name: "punctuation.definition.comment.json"
                        }
                    },
                    end: "\\*/",
                    name: "comment.block.json"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.comment.json"
                        }
                    },
                    match: "(//).*$\\n?",
                    name: "comment.line.double-slash.js"
                }
            ]
        },
        constant: {
            match: "\\b(?:true|false|null)\\b",
            name: "constant.language.json"
        },
        number: {
            match: `(?x)
-?
(?:
0
|
[1-9]
\\d*
)
(?:
(?:
\\.
\\d+
)?
(?:
[eE]
[+-]?
\\d+
)?
)?`,
            name: "constant.numeric.json"
        },
        object: {
            begin: "\\{",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.dictionary.begin.json"
                }
            },
            end: "\\}",
            endCaptures: {
                0: {
                    name: "punctuation.definition.dictionary.end.json"
                }
            },
            name: "meta.structure.dictionary.json",
            patterns: [
                {
                    comment: "the JSON object key",
                    include: "#objectkey"
                },
                {
                    include: "#comments"
                },
                {
                    begin: ":",
                    beginCaptures: {
                        0: {
                            name: "punctuation.separator.dictionary.key-value.json"
                        }
                    },
                    end: "(,)|(?=\\})",
                    endCaptures: {
                        1: {
                            name: "punctuation.separator.dictionary.pair.json"
                        }
                    },
                    name: "meta.structure.dictionary.value.json",
                    patterns: [
                        {
                            comment: "the JSON object value",
                            include: "#value"
                        },
                        {
                            match: "[^\\s,]",
                            name: "invalid.illegal.expected-dictionary-separator.json"
                        }
                    ]
                },
                {
                    match: "[^\\s\\}]",
                    name: "invalid.illegal.expected-dictionary-separator.json"
                }
            ]
        },
        objectkey: {
            begin: '"',
            beginCaptures: {
                0: {
                    name: "punctuation.support.type.property-name.begin.json"
                }
            },
            end: '"',
            endCaptures: {
                0: {
                    name: "punctuation.support.type.property-name.end.json"
                }
            },
            name: "string.json support.type.property-name.json",
            patterns: [
                {
                    include: "#stringcontent"
                }
            ]
        },
        string: {
            begin: '"',
            beginCaptures: {
                0: {
                    name: "punctuation.definition.string.begin.json"
                }
            },
            end: '"',
            endCaptures: {
                0: {
                    name: "punctuation.definition.string.end.json"
                }
            },
            name: "string.quoted.double.json",
            patterns: [
                {
                    include: "#stringcontent"
                }
            ]
        },
        stringcontent: {
            patterns: [
                {
                    match: `(?x)
\\\\
(?:
["\\\\/bfnrt]
|
u
[0-9a-fA-F]{4})`,
                    name: "constant.character.escape.json"
                },
                {
                    match: "\\\\.",
                    name: "invalid.illegal.unrecognized-string-escape.json"
                }
            ]
        },
        value: {
            patterns: [
                {
                    include: "#constant"
                },
                {
                    include: "#number"
                },
                {
                    include: "#string"
                },
                {
                    include: "#array"
                },
                {
                    include: "#object"
                },
                {
                    include: "#comments"
                }
            ]
        }
    },
    scopeName: "source.json"
});
var e = [
    n
];
;
}}),
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/java-Bk2JzfKB.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/xml-CfRpfi_B.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>a)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$java$2d$Bk2JzfKB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/java-Bk2JzfKB.js [app-client] (ecmascript)");
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
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$java$2d$Bk2JzfKB$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    n
];
;
}}),
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/graphql-BNrvkZ-b.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>c)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$javascript$2d$DYrC$2d$pEL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/javascript-DYrC-pEL.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$typescript$2d$CO9IEkHz$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/typescript-CO9IEkHz.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$jsx$2d$CIqQ3lPg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/jsx-CIqQ3lPg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$tsx$2d$BigBxd0x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/tsx-BigBxd0x.js [app-client] (ecmascript)");
;
;
;
;
const r = Object.freeze({
    displayName: "GraphQL",
    fileTypes: [
        "graphql",
        "graphqls",
        "gql",
        "graphcool"
    ],
    name: "graphql",
    patterns: [
        {
            include: "#graphql"
        }
    ],
    repository: {
        graphql: {
            patterns: [
                {
                    include: "#graphql-comment"
                },
                {
                    include: "#graphql-description-docstring"
                },
                {
                    include: "#graphql-description-singleline"
                },
                {
                    include: "#graphql-fragment-definition"
                },
                {
                    include: "#graphql-directive-definition"
                },
                {
                    include: "#graphql-type-interface"
                },
                {
                    include: "#graphql-enum"
                },
                {
                    include: "#graphql-scalar"
                },
                {
                    include: "#graphql-union"
                },
                {
                    include: "#graphql-schema"
                },
                {
                    include: "#graphql-operation-def"
                },
                {
                    include: "#literal-quasi-embedded"
                }
            ]
        },
        "graphql-ampersand": {
            captures: {
                1: {
                    name: "keyword.operator.logical.graphql"
                }
            },
            match: "\\s*(&)"
        },
        "graphql-arguments": {
            begin: "\\s*(\\()",
            beginCaptures: {
                1: {
                    name: "meta.brace.round.directive.graphql"
                }
            },
            end: "\\s*(\\))",
            endCaptures: {
                1: {
                    name: "meta.brace.round.directive.graphql"
                }
            },
            name: "meta.arguments.graphql",
            patterns: [
                {
                    include: "#graphql-comment"
                },
                {
                    include: "#graphql-description-docstring"
                },
                {
                    include: "#graphql-description-singleline"
                },
                {
                    begin: "\\s*([_A-Za-z][_0-9A-Za-z]*)(?:\\s*(:))",
                    beginCaptures: {
                        1: {
                            name: "variable.parameter.graphql"
                        },
                        2: {
                            name: "punctuation.colon.graphql"
                        }
                    },
                    end: "(?=\\s*(?:(?:([_A-Za-z][_0-9A-Za-z]*)\\s*(:))|\\)))|\\s*(,)",
                    endCaptures: {
                        3: {
                            name: "punctuation.comma.graphql"
                        }
                    },
                    patterns: [
                        {
                            include: "#graphql-comment"
                        },
                        {
                            include: "#graphql-description-docstring"
                        },
                        {
                            include: "#graphql-description-singleline"
                        },
                        {
                            include: "#graphql-directive"
                        },
                        {
                            include: "#graphql-value"
                        },
                        {
                            include: "#graphql-skip-newlines"
                        }
                    ]
                },
                {
                    include: "#literal-quasi-embedded"
                }
            ]
        },
        "graphql-boolean-value": {
            captures: {
                1: {
                    name: "constant.language.boolean.graphql"
                }
            },
            match: "\\s*\\b(true|false)\\b"
        },
        "graphql-colon": {
            captures: {
                1: {
                    name: "punctuation.colon.graphql"
                }
            },
            match: "\\s*(:)"
        },
        "graphql-comma": {
            captures: {
                1: {
                    name: "punctuation.comma.graphql"
                }
            },
            match: "\\s*(,)"
        },
        "graphql-comment": {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "punctuation.whitespace.comment.leading.graphql"
                        }
                    },
                    comment: "need to prefix comment space with a scope else Atom's reflow cmd doesn't work",
                    match: "(\\s*)(#).*",
                    name: "comment.line.graphql.js"
                },
                {
                    begin: '(""")',
                    beginCaptures: {
                        1: {
                            name: "punctuation.whitespace.comment.leading.graphql"
                        }
                    },
                    end: '(""")',
                    name: "comment.line.graphql.js"
                },
                {
                    begin: '(")',
                    beginCaptures: {
                        1: {
                            name: "punctuation.whitespace.comment.leading.graphql"
                        }
                    },
                    end: '(")',
                    name: "comment.line.graphql.js"
                }
            ]
        },
        "graphql-description-docstring": {
            begin: '"""',
            end: '"""',
            name: "comment.block.graphql"
        },
        "graphql-description-singleline": {
            match: '#(?=([^"]*"[^"]*")*[^"]*$).*$',
            name: "comment.line.number-sign.graphql"
        },
        "graphql-directive": {
            applyEndPatternLast: 1,
            begin: "\\s*((@)\\s*([_A-Za-z][_0-9A-Za-z]*))",
            beginCaptures: {
                1: {
                    name: "entity.name.function.directive.graphql"
                }
            },
            end: "(?=.)",
            patterns: [
                {
                    include: "#graphql-comment"
                },
                {
                    include: "#graphql-description-docstring"
                },
                {
                    include: "#graphql-description-singleline"
                },
                {
                    include: "#graphql-arguments"
                },
                {
                    include: "#literal-quasi-embedded"
                },
                {
                    include: "#graphql-skip-newlines"
                }
            ]
        },
        "graphql-directive-definition": {
            applyEndPatternLast: 1,
            begin: "\\s*(\\bdirective\\b)\\s*(@[_A-Za-z][_0-9A-Za-z]*)",
            beginCaptures: {
                1: {
                    name: "keyword.directive.graphql"
                },
                2: {
                    name: "entity.name.function.directive.graphql"
                },
                3: {
                    name: "keyword.on.graphql"
                },
                4: {
                    name: "support.type.graphql"
                }
            },
            end: "(?=.)",
            patterns: [
                {
                    include: "#graphql-variable-definitions"
                },
                {
                    applyEndPatternLast: 1,
                    begin: "\\s*(\\bon\\b)\\s*([_A-Za-z]*)",
                    beginCaptures: {
                        1: {
                            name: "keyword.on.graphql"
                        },
                        2: {
                            name: "support.type.location.graphql"
                        }
                    },
                    end: "(?=.)",
                    patterns: [
                        {
                            include: "#graphql-skip-newlines"
                        },
                        {
                            include: "#graphql-comment"
                        },
                        {
                            include: "#literal-quasi-embedded"
                        },
                        {
                            captures: {
                                2: {
                                    name: "support.type.location.graphql"
                                }
                            },
                            match: "\\s*(\\|)\\s*([_A-Za-z]*)"
                        }
                    ]
                },
                {
                    include: "#graphql-skip-newlines"
                },
                {
                    include: "#graphql-comment"
                },
                {
                    include: "#literal-quasi-embedded"
                }
            ]
        },
        "graphql-enum": {
            begin: "\\s*+\\b(enum)\\b\\s*([_A-Za-z][_0-9A-Za-z]*)",
            beginCaptures: {
                1: {
                    name: "keyword.enum.graphql"
                },
                2: {
                    name: "support.type.enum.graphql"
                }
            },
            end: "(?<=})",
            name: "meta.enum.graphql",
            patterns: [
                {
                    begin: "\\s*({)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.operation.graphql"
                        }
                    },
                    end: "\\s*(})",
                    endCaptures: {
                        1: {
                            name: "punctuation.operation.graphql"
                        }
                    },
                    name: "meta.type.object.graphql",
                    patterns: [
                        {
                            include: "#graphql-object-type"
                        },
                        {
                            include: "#graphql-comment"
                        },
                        {
                            include: "#graphql-description-docstring"
                        },
                        {
                            include: "#graphql-description-singleline"
                        },
                        {
                            include: "#graphql-directive"
                        },
                        {
                            include: "#graphql-enum-value"
                        },
                        {
                            include: "#literal-quasi-embedded"
                        }
                    ]
                },
                {
                    include: "#graphql-comment"
                },
                {
                    include: "#graphql-description-docstring"
                },
                {
                    include: "#graphql-description-singleline"
                },
                {
                    include: "#graphql-directive"
                }
            ]
        },
        "graphql-enum-value": {
            match: "\\s*(?!=\\b(true|false|null)\\b)([_A-Za-z][_0-9A-Za-z]*)",
            name: "constant.character.enum.graphql"
        },
        "graphql-field": {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "string.unquoted.alias.graphql"
                        },
                        2: {
                            name: "punctuation.colon.graphql"
                        }
                    },
                    match: "\\s*([_A-Za-z][_0-9A-Za-z]*)\\s*(:)"
                },
                {
                    captures: {
                        1: {
                            name: "variable.graphql"
                        }
                    },
                    match: "\\s*([_A-Za-z][_0-9A-Za-z]*)"
                },
                {
                    include: "#graphql-arguments"
                },
                {
                    include: "#graphql-directive"
                },
                {
                    include: "#graphql-selection-set"
                },
                {
                    include: "#literal-quasi-embedded"
                },
                {
                    include: "#graphql-skip-newlines"
                }
            ]
        },
        "graphql-float-value": {
            captures: {
                1: {
                    name: "constant.numeric.float.graphql"
                }
            },
            match: "\\s*(-?(0|[1-9][0-9]*)(\\.[0-9]+)?((e|E)(\\+|-)?[0-9]+)?)"
        },
        "graphql-fragment-definition": {
            begin: "\\s*(?:(\\bfragment\\b)\\s*([_A-Za-z][_0-9A-Za-z]*)?\\s*(?:(\\bon\\b)\\s*([_A-Za-z][_0-9A-Za-z]*)))",
            captures: {
                1: {
                    name: "keyword.fragment.graphql"
                },
                2: {
                    name: "entity.name.fragment.graphql"
                },
                3: {
                    name: "keyword.on.graphql"
                },
                4: {
                    name: "support.type.graphql"
                }
            },
            end: "(?<=})",
            name: "meta.fragment.graphql",
            patterns: [
                {
                    include: "#graphql-comment"
                },
                {
                    include: "#graphql-description-docstring"
                },
                {
                    include: "#graphql-description-singleline"
                },
                {
                    include: "#graphql-selection-set"
                },
                {
                    include: "#graphql-directive"
                },
                {
                    include: "#graphql-skip-newlines"
                },
                {
                    include: "#literal-quasi-embedded"
                }
            ]
        },
        "graphql-fragment-spread": {
            applyEndPatternLast: 1,
            begin: "\\s*(\\.\\.\\.)\\s*(?!\\bon\\b)([_A-Za-z][_0-9A-Za-z]*)",
            captures: {
                1: {
                    name: "keyword.operator.spread.graphql"
                },
                2: {
                    name: "variable.fragment.graphql"
                }
            },
            end: "(?=.)",
            patterns: [
                {
                    include: "#graphql-comment"
                },
                {
                    include: "#graphql-description-docstring"
                },
                {
                    include: "#graphql-description-singleline"
                },
                {
                    include: "#graphql-selection-set"
                },
                {
                    include: "#graphql-directive"
                },
                {
                    include: "#literal-quasi-embedded"
                },
                {
                    include: "#graphql-skip-newlines"
                }
            ]
        },
        "graphql-ignore-spaces": {
            match: "\\s*"
        },
        "graphql-inline-fragment": {
            applyEndPatternLast: 1,
            begin: "\\s*(\\.\\.\\.)\\s*(?:(\\bon\\b)\\s*([_A-Za-z][_0-9A-Za-z]*))?",
            captures: {
                1: {
                    name: "keyword.operator.spread.graphql"
                },
                2: {
                    name: "keyword.on.graphql"
                },
                3: {
                    name: "support.type.graphql"
                }
            },
            end: "(?=.)",
            patterns: [
                {
                    include: "#graphql-comment"
                },
                {
                    include: "#graphql-description-docstring"
                },
                {
                    include: "#graphql-description-singleline"
                },
                {
                    include: "#graphql-selection-set"
                },
                {
                    include: "#graphql-directive"
                },
                {
                    include: "#graphql-skip-newlines"
                },
                {
                    include: "#literal-quasi-embedded"
                }
            ]
        },
        "graphql-input-types": {
            patterns: [
                {
                    include: "#graphql-scalar-type"
                },
                {
                    captures: {
                        1: {
                            name: "support.type.graphql"
                        },
                        2: {
                            name: "keyword.operator.nulltype.graphql"
                        }
                    },
                    match: "\\s*([_A-Za-z][_0-9A-Za-z]*)(?:\\s*(!))?"
                },
                {
                    begin: "\\s*(\\[)",
                    captures: {
                        1: {
                            name: "meta.brace.square.graphql"
                        },
                        2: {
                            name: "keyword.operator.nulltype.graphql"
                        }
                    },
                    end: "\\s*(\\])(?:\\s*(!))?",
                    name: "meta.type.list.graphql",
                    patterns: [
                        {
                            include: "#graphql-comment"
                        },
                        {
                            include: "#graphql-description-docstring"
                        },
                        {
                            include: "#graphql-description-singleline"
                        },
                        {
                            include: "#graphql-input-types"
                        },
                        {
                            include: "#graphql-comma"
                        },
                        {
                            include: "#literal-quasi-embedded"
                        }
                    ]
                }
            ]
        },
        "graphql-list-value": {
            patterns: [
                {
                    begin: "\\s*+(\\[)",
                    beginCaptures: {
                        1: {
                            name: "meta.brace.square.graphql"
                        }
                    },
                    end: "\\s*(\\])",
                    endCaptures: {
                        1: {
                            name: "meta.brace.square.graphql"
                        }
                    },
                    name: "meta.listvalues.graphql",
                    patterns: [
                        {
                            include: "#graphql-value"
                        }
                    ]
                }
            ]
        },
        "graphql-name": {
            captures: {
                1: {
                    name: "entity.name.function.graphql"
                }
            },
            match: "\\s*([_A-Za-z][_0-9A-Za-z]*)"
        },
        "graphql-null-value": {
            captures: {
                1: {
                    name: "constant.language.null.graphql"
                }
            },
            match: "\\s*\\b(null)\\b"
        },
        "graphql-object-field": {
            captures: {
                1: {
                    name: "constant.object.key.graphql"
                },
                2: {
                    name: "string.unquoted.graphql"
                },
                3: {
                    name: "punctuation.graphql"
                }
            },
            match: "\\s*(([_A-Za-z][_0-9A-Za-z]*))\\s*(:)"
        },
        "graphql-object-value": {
            patterns: [
                {
                    begin: "\\s*+({)",
                    beginCaptures: {
                        1: {
                            name: "meta.brace.curly.graphql"
                        }
                    },
                    end: "\\s*(})",
                    endCaptures: {
                        1: {
                            name: "meta.brace.curly.graphql"
                        }
                    },
                    name: "meta.objectvalues.graphql",
                    patterns: [
                        {
                            include: "#graphql-object-field"
                        },
                        {
                            include: "#graphql-value"
                        }
                    ]
                }
            ]
        },
        "graphql-operation-def": {
            patterns: [
                {
                    include: "#graphql-query-mutation"
                },
                {
                    include: "#graphql-name"
                },
                {
                    include: "#graphql-variable-definitions"
                },
                {
                    include: "#graphql-directive"
                },
                {
                    include: "#graphql-selection-set"
                }
            ]
        },
        "graphql-query-mutation": {
            captures: {
                1: {
                    name: "keyword.operation.graphql"
                }
            },
            match: "\\s*\\b(query|mutation)\\b"
        },
        "graphql-scalar": {
            captures: {
                1: {
                    name: "keyword.scalar.graphql"
                },
                2: {
                    name: "entity.scalar.graphql"
                }
            },
            match: "\\s*\\b(scalar)\\b\\s*([_A-Za-z][_0-9A-Za-z]*)"
        },
        "graphql-scalar-type": {
            captures: {
                1: {
                    name: "support.type.builtin.graphql"
                },
                2: {
                    name: "keyword.operator.nulltype.graphql"
                }
            },
            match: "\\s*\\b(Int|Float|String|Boolean|ID)\\b(?:\\s*(!))?"
        },
        "graphql-schema": {
            begin: "\\s*\\b(schema)\\b",
            beginCaptures: {
                1: {
                    name: "keyword.schema.graphql"
                }
            },
            end: "(?<=})",
            patterns: [
                {
                    begin: "\\s*({)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.operation.graphql"
                        }
                    },
                    end: "\\s*(})",
                    endCaptures: {
                        1: {
                            name: "punctuation.operation.graphql"
                        }
                    },
                    patterns: [
                        {
                            begin: "\\s*([_A-Za-z][_0-9A-Za-z]*)(?=\\s*\\(|:)",
                            beginCaptures: {
                                1: {
                                    name: "variable.arguments.graphql"
                                }
                            },
                            end: "(?=\\s*(([_A-Za-z][_0-9A-Za-z]*)\\s*(\\(|:)|(})))|\\s*(,)",
                            endCaptures: {
                                5: {
                                    name: "punctuation.comma.graphql"
                                }
                            },
                            patterns: [
                                {
                                    captures: {
                                        1: {
                                            name: "support.type.graphql"
                                        }
                                    },
                                    match: "\\s*([_A-Za-z][_0-9A-Za-z]*)"
                                },
                                {
                                    include: "#graphql-comment"
                                },
                                {
                                    include: "#graphql-description-docstring"
                                },
                                {
                                    include: "#graphql-description-singleline"
                                },
                                {
                                    include: "#graphql-colon"
                                },
                                {
                                    include: "#graphql-skip-newlines"
                                }
                            ]
                        },
                        {
                            include: "#graphql-comment"
                        },
                        {
                            include: "#graphql-description-docstring"
                        },
                        {
                            include: "#graphql-description-singleline"
                        },
                        {
                            include: "#graphql-skip-newlines"
                        }
                    ]
                },
                {
                    include: "#graphql-comment"
                },
                {
                    include: "#graphql-description-docstring"
                },
                {
                    include: "#graphql-description-singleline"
                },
                {
                    include: "#graphql-directive"
                },
                {
                    include: "#graphql-skip-newlines"
                }
            ]
        },
        "graphql-selection-set": {
            begin: "\\s*({)",
            beginCaptures: {
                1: {
                    name: "punctuation.operation.graphql"
                }
            },
            end: "\\s*(})",
            endCaptures: {
                1: {
                    name: "punctuation.operation.graphql"
                }
            },
            name: "meta.selectionset.graphql",
            patterns: [
                {
                    include: "#graphql-comment"
                },
                {
                    include: "#graphql-description-docstring"
                },
                {
                    include: "#graphql-description-singleline"
                },
                {
                    include: "#graphql-field"
                },
                {
                    include: "#graphql-fragment-spread"
                },
                {
                    include: "#graphql-inline-fragment"
                },
                {
                    include: "#graphql-comma"
                },
                {
                    include: "#native-interpolation"
                },
                {
                    include: "#literal-quasi-embedded"
                }
            ]
        },
        "graphql-skip-newlines": {
            match: `\\s*
`
        },
        "graphql-string-content": {
            patterns: [
                {
                    match: `\\\\[/'"\\\\nrtbf]`,
                    name: "constant.character.escape.graphql"
                },
                {
                    match: "\\\\u([0-9a-fA-F]{4})",
                    name: "constant.character.escape.graphql"
                }
            ]
        },
        "graphql-string-value": {
            begin: '\\s*+(("))',
            beginCaptures: {
                1: {
                    name: "string.quoted.double.graphql"
                },
                2: {
                    name: "punctuation.definition.string.begin.graphql"
                }
            },
            contentName: "string.quoted.double.graphql",
            end: `\\s*+(?:(("))|(
))`,
            endCaptures: {
                1: {
                    name: "string.quoted.double.graphql"
                },
                2: {
                    name: "punctuation.definition.string.end.graphql"
                },
                3: {
                    name: "invalid.illegal.newline.graphql"
                }
            },
            patterns: [
                {
                    include: "#graphql-string-content"
                },
                {
                    include: "#literal-quasi-embedded"
                }
            ]
        },
        "graphql-type-definition": {
            begin: "\\s*([_A-Za-z][_0-9A-Za-z]*)(?=\\s*\\(|:)",
            beginCaptures: {
                1: {
                    name: "variable.graphql"
                }
            },
            comment: "key (optionalArgs): Type",
            end: "(?=\\s*(([_A-Za-z][_0-9A-Za-z]*)\\s*(\\(|:)|(})))|\\s*(,)",
            endCaptures: {
                5: {
                    name: "punctuation.comma.graphql"
                }
            },
            patterns: [
                {
                    include: "#graphql-comment"
                },
                {
                    include: "#graphql-description-docstring"
                },
                {
                    include: "#graphql-description-singleline"
                },
                {
                    include: "#graphql-directive"
                },
                {
                    include: "#graphql-variable-definitions"
                },
                {
                    include: "#graphql-type-object"
                },
                {
                    include: "#graphql-colon"
                },
                {
                    include: "#graphql-input-types"
                },
                {
                    include: "#literal-quasi-embedded"
                }
            ]
        },
        "graphql-type-interface": {
            applyEndPatternLast: 1,
            begin: "\\s*\\b(?:(extends?)?\\b\\s*\\b(type)|(interface)|(input))\\b\\s*([_A-Za-z][_0-9A-Za-z]*)?",
            captures: {
                1: {
                    name: "keyword.type.graphql"
                },
                2: {
                    name: "keyword.type.graphql"
                },
                3: {
                    name: "keyword.interface.graphql"
                },
                4: {
                    name: "keyword.input.graphql"
                },
                5: {
                    name: "support.type.graphql"
                }
            },
            end: "(?=.)",
            name: "meta.type.interface.graphql",
            patterns: [
                {
                    begin: "\\s*\\b(implements)\\b\\s*",
                    beginCaptures: {
                        1: {
                            name: "keyword.implements.graphql"
                        }
                    },
                    end: "\\s*(?={)",
                    patterns: [
                        {
                            captures: {
                                1: {
                                    name: "support.type.graphql"
                                }
                            },
                            match: "\\s*([_A-Za-z][_0-9A-Za-z]*)"
                        },
                        {
                            include: "#graphql-comment"
                        },
                        {
                            include: "#graphql-description-docstring"
                        },
                        {
                            include: "#graphql-description-singleline"
                        },
                        {
                            include: "#graphql-directive"
                        },
                        {
                            include: "#graphql-ampersand"
                        },
                        {
                            include: "#graphql-comma"
                        }
                    ]
                },
                {
                    include: "#graphql-comment"
                },
                {
                    include: "#graphql-description-docstring"
                },
                {
                    include: "#graphql-description-singleline"
                },
                {
                    include: "#graphql-directive"
                },
                {
                    include: "#graphql-type-object"
                },
                {
                    include: "#literal-quasi-embedded"
                },
                {
                    include: "#graphql-ignore-spaces"
                }
            ]
        },
        "graphql-type-object": {
            begin: "\\s*({)",
            beginCaptures: {
                1: {
                    name: "punctuation.operation.graphql"
                }
            },
            end: "\\s*(})",
            endCaptures: {
                1: {
                    name: "punctuation.operation.graphql"
                }
            },
            name: "meta.type.object.graphql",
            patterns: [
                {
                    include: "#graphql-comment"
                },
                {
                    include: "#graphql-description-docstring"
                },
                {
                    include: "#graphql-description-singleline"
                },
                {
                    include: "#graphql-object-type"
                },
                {
                    include: "#graphql-type-definition"
                },
                {
                    include: "#literal-quasi-embedded"
                }
            ]
        },
        "graphql-union": {
            applyEndPatternLast: 1,
            begin: "\\s*\\b(union)\\b\\s*([_A-Za-z][_0-9A-Za-z]*)",
            captures: {
                1: {
                    name: "keyword.union.graphql"
                },
                2: {
                    name: "support.type.graphql"
                }
            },
            end: "(?=.)",
            patterns: [
                {
                    applyEndPatternLast: 1,
                    begin: "\\s*(=)\\s*([_A-Za-z][_0-9A-Za-z]*)",
                    captures: {
                        1: {
                            name: "punctuation.assignment.graphql"
                        },
                        2: {
                            name: "support.type.graphql"
                        }
                    },
                    end: "(?=.)",
                    patterns: [
                        {
                            include: "#graphql-comment"
                        },
                        {
                            include: "#graphql-description-docstring"
                        },
                        {
                            include: "#graphql-description-singleline"
                        },
                        {
                            include: "#graphql-skip-newlines"
                        },
                        {
                            include: "#literal-quasi-embedded"
                        },
                        {
                            captures: {
                                1: {
                                    name: "punctuation.or.graphql"
                                },
                                2: {
                                    name: "support.type.graphql"
                                }
                            },
                            match: "\\s*(\\|)\\s*([_A-Za-z][_0-9A-Za-z]*)"
                        }
                    ]
                },
                {
                    include: "#graphql-comment"
                },
                {
                    include: "#graphql-description-docstring"
                },
                {
                    include: "#graphql-description-singleline"
                },
                {
                    include: "#graphql-skip-newlines"
                },
                {
                    include: "#literal-quasi-embedded"
                }
            ]
        },
        "graphql-union-mark": {
            captures: {
                1: {
                    name: "punctuation.union.graphql"
                }
            },
            match: "\\s*(\\|)"
        },
        "graphql-value": {
            patterns: [
                {
                    include: "#graphql-comment"
                },
                {
                    include: "#graphql-description-docstring"
                },
                {
                    include: "#graphql-variable-name"
                },
                {
                    include: "#graphql-float-value"
                },
                {
                    include: "#graphql-string-value"
                },
                {
                    include: "#graphql-boolean-value"
                },
                {
                    include: "#graphql-null-value"
                },
                {
                    include: "#graphql-enum-value"
                },
                {
                    include: "#graphql-list-value"
                },
                {
                    include: "#graphql-object-value"
                },
                {
                    include: "#literal-quasi-embedded"
                }
            ]
        },
        "graphql-variable-assignment": {
            applyEndPatternLast: 1,
            begin: "\\s(=)",
            beginCaptures: {
                1: {
                    name: "punctuation.assignment.graphql"
                }
            },
            end: `(?=[
,)])`,
            patterns: [
                {
                    include: "#graphql-value"
                }
            ]
        },
        "graphql-variable-definition": {
            begin: "\\s*(\\$?[_A-Za-z][_0-9A-Za-z]*)(?=\\s*\\(|:)",
            beginCaptures: {
                1: {
                    name: "variable.parameter.graphql"
                }
            },
            comment: "variable: type = value,.... which may be a list",
            end: "(?=\\s*((\\$?[_A-Za-z][_0-9A-Za-z]*)\\s*(\\(|:)|(}|\\))))|\\s*(,)",
            endCaptures: {
                5: {
                    name: "punctuation.comma.graphql"
                }
            },
            name: "meta.variables.graphql",
            patterns: [
                {
                    include: "#graphql-comment"
                },
                {
                    include: "#graphql-description-docstring"
                },
                {
                    include: "#graphql-description-singleline"
                },
                {
                    include: "#graphql-directive"
                },
                {
                    include: "#graphql-colon"
                },
                {
                    include: "#graphql-input-types"
                },
                {
                    include: "#graphql-variable-assignment"
                },
                {
                    include: "#literal-quasi-embedded"
                },
                {
                    include: "#graphql-skip-newlines"
                }
            ]
        },
        "graphql-variable-definitions": {
            begin: "\\s*(\\()",
            captures: {
                1: {
                    name: "meta.brace.round.graphql"
                }
            },
            end: "\\s*(\\))",
            patterns: [
                {
                    include: "#graphql-comment"
                },
                {
                    include: "#graphql-description-docstring"
                },
                {
                    include: "#graphql-description-singleline"
                },
                {
                    include: "#graphql-variable-definition"
                },
                {
                    include: "#literal-quasi-embedded"
                }
            ]
        },
        "graphql-variable-name": {
            captures: {
                1: {
                    name: "variable.graphql"
                }
            },
            match: "\\s*(\\$[_A-Za-z][_0-9A-Za-z]*)"
        },
        "native-interpolation": {
            begin: "\\s*(\\${)",
            beginCaptures: {
                1: {
                    name: "keyword.other.substitution.begin"
                }
            },
            end: "(})",
            endCaptures: {
                1: {
                    name: "keyword.other.substitution.end"
                }
            },
            name: "native.interpolation",
            patterns: [
                {
                    include: "source.js"
                },
                {
                    include: "source.ts"
                },
                {
                    include: "source.js.jsx"
                },
                {
                    include: "source.tsx"
                }
            ]
        }
    },
    scopeName: "source.graphql",
    embeddedLangs: [
        "javascript",
        "typescript",
        "jsx",
        "tsx"
    ],
    aliases: [
        "gql"
    ]
});
var c = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$javascript$2d$DYrC$2d$pEL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$typescript$2d$CO9IEkHz$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$jsx$2d$CIqQ3lPg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$tsx$2d$BigBxd0x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    r
];
;
}}),
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/http-EL1vnHxj.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>h)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$shellscript$2d$BX81u5Ls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/shellscript-BX81u5Ls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$json$2d$B12k4$2d$6m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/json-B12k4-6m.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$xml$2d$CfRpfi_B$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/xml-CfRpfi_B.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$graphql$2d$BNrvkZ$2d$b$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/graphql-BNrvkZ-b.js [app-client] (ecmascript)");
;
;
;
;
const s = Object.freeze({
    displayName: "HTTP",
    fileTypes: [
        "http",
        "rest"
    ],
    name: "http",
    patterns: [
        {
            begin: "^\\s*(?=curl)",
            end: "^\\s*(\\#{3,}.*?)?\\s*$",
            endCaptures: {
                0: {
                    name: "comment.line.sharp.http"
                }
            },
            name: "http.request.curl",
            patterns: [
                {
                    include: "source.shell"
                }
            ]
        },
        {
            begin: "\\s*(?=(\\[|{[^{]))",
            end: "^\\s*(\\#{3,}.*?)?\\s*$",
            endCaptures: {
                0: {
                    name: "comment.line.sharp.http"
                }
            },
            name: "http.request.body.json",
            patterns: [
                {
                    include: "source.json"
                }
            ]
        },
        {
            begin: "^\\s*(?=<\\S)",
            end: "^\\s*(\\#{3,}.*?)?\\s*$",
            endCaptures: {
                0: {
                    name: "comment.line.sharp.http"
                }
            },
            name: "http.request.body.xml",
            patterns: [
                {
                    include: "text.xml"
                }
            ]
        },
        {
            begin: "\\s*(?=(query|mutation))",
            end: "^\\s*(\\#{3,}.*?)?\\s*$",
            endCaptures: {
                0: {
                    name: "comment.line.sharp.http"
                }
            },
            name: "http.request.body.graphql",
            patterns: [
                {
                    include: "source.graphql"
                }
            ]
        },
        {
            begin: "\\s*(?=(query|mutation))",
            end: "^\\{\\s*$",
            name: "http.request.body.graphql",
            patterns: [
                {
                    include: "source.graphql"
                }
            ]
        },
        {
            include: "#metadata"
        },
        {
            include: "#comments"
        },
        {
            captures: {
                1: {
                    name: "keyword.other.http"
                },
                2: {
                    name: "variable.other.http"
                },
                3: {
                    name: "string.other.http"
                }
            },
            match: "^\\s*(@)([^\\s=]+)\\s*=\\s*(.*?)\\s*$",
            name: "http.filevariable"
        },
        {
            captures: {
                1: {
                    name: "keyword.operator.http"
                },
                2: {
                    name: "variable.other.http"
                },
                3: {
                    name: "string.other.http"
                }
            },
            match: "^\\s*(\\?|&)([^=\\s]+)=(.*)$",
            name: "http.query"
        },
        {
            captures: {
                1: {
                    name: "entity.name.tag.http"
                },
                2: {
                    name: "keyword.other.http"
                },
                3: {
                    name: "string.other.http"
                }
            },
            match: "^([\\w\\-]+)\\s*(\\:)\\s*([^/].*?)\\s*$",
            name: "http.headers"
        },
        {
            include: "#request-line"
        },
        {
            include: "#response-line"
        }
    ],
    repository: {
        comments: {
            patterns: [
                {
                    match: "^\\s*\\#{1,}.*$",
                    name: "comment.line.sharp.http"
                },
                {
                    match: "^\\s*\\/{2,}.*$",
                    name: "comment.line.double-slash.http"
                }
            ]
        },
        metadata: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "entity.other.attribute-name"
                        },
                        2: {
                            name: "punctuation.definition.block.tag.metadata"
                        },
                        3: {
                            name: "entity.name.type.http"
                        }
                    },
                    match: "^\\s*\\#{1,}\\s+(?:((@)name)\\s+([^\\s\\.]+))$",
                    name: "comment.line.sharp.http"
                },
                {
                    captures: {
                        1: {
                            name: "entity.other.attribute-name"
                        },
                        2: {
                            name: "punctuation.definition.block.tag.metadata"
                        },
                        3: {
                            name: "entity.name.type.http"
                        }
                    },
                    match: "^\\s*\\/{2,}\\s+(?:((@)name)\\s+([^\\s\\.]+))$",
                    name: "comment.line.double-slash.http"
                },
                {
                    captures: {
                        1: {
                            name: "entity.other.attribute-name"
                        },
                        2: {
                            name: "punctuation.definition.block.tag.metadata"
                        }
                    },
                    match: "^\\s*\\#{1,}\\s+((@)note)\\s*$",
                    name: "comment.line.sharp.http"
                },
                {
                    captures: {
                        1: {
                            name: "entity.other.attribute-name"
                        },
                        2: {
                            name: "punctuation.definition.block.tag.metadata"
                        }
                    },
                    match: "^\\s*\\/{2,}\\s+((@)note)\\s*$",
                    name: "comment.line.double-slash.http"
                },
                {
                    captures: {
                        1: {
                            name: "entity.other.attribute-name"
                        },
                        2: {
                            name: "punctuation.definition.block.tag.metadata"
                        },
                        3: {
                            name: "variable.other.http"
                        },
                        4: {
                            name: "string.other.http"
                        }
                    },
                    match: "^\\s*\\#{1,}\\s+(?:((@)prompt)\\s+([^\\s]+)(?:\\s+(.*))?\\s*)$",
                    name: "comment.line.sharp.http"
                },
                {
                    captures: {
                        1: {
                            name: "entity.other.attribute-name"
                        },
                        2: {
                            name: "punctuation.definition.block.tag.metadata"
                        },
                        3: {
                            name: "variable.other.http"
                        },
                        4: {
                            name: "string.other.http"
                        }
                    },
                    match: "^\\s*\\/{2,}\\s+(?:((@)prompt)\\s+([^\\s]+)(?:\\s+(.*))?\\s*)$",
                    name: "comment.line.double-slash.http"
                }
            ]
        },
        protocol: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "keyword.other.http"
                        },
                        2: {
                            name: "constant.numeric.http"
                        }
                    },
                    match: "(HTTP)/(\\d+.\\d+)",
                    name: "http.version"
                }
            ]
        },
        "request-line": {
            captures: {
                1: {
                    name: "keyword.control.http"
                },
                2: {
                    name: "const.language.http"
                },
                3: {
                    patterns: [
                        {
                            include: "#protocol"
                        }
                    ]
                }
            },
            match: "(?i)^(?:(get|post|put|delete|patch|head|options|connect|trace|lock|unlock|propfind|proppatch|copy|move|mkcol|mkcalendar|acl|search)\\s+)?\\s*(.+?)(?:\\s+(HTTP\\/\\S+))?$",
            name: "http.requestline"
        },
        "response-line": {
            captures: {
                1: {
                    patterns: [
                        {
                            include: "#protocol"
                        }
                    ]
                },
                2: {
                    name: "constant.numeric.http"
                },
                3: {
                    name: "string.other.http"
                }
            },
            match: "(?i)^\\s*(HTTP\\/\\S+)\\s([1-5][0-9][0-9])\\s(.*)$",
            name: "http.responseLine"
        }
    },
    scopeName: "source.http",
    embeddedLangs: [
        "shellscript",
        "json",
        "xml",
        "graphql"
    ]
});
var h = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$shellscript$2d$BX81u5Ls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$json$2d$B12k4$2d$6m$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$xml$2d$CfRpfi_B$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$graphql$2d$BNrvkZ$2d$b$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    s
];
;
}}),
}]);

//# sourceMappingURL=f8f5a_%40zoerai_zoer-copilot_dist_4fabe868._.js.map