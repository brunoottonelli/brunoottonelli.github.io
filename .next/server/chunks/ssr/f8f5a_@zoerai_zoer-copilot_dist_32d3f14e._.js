module.exports = {

"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/r-DU7Q70f1.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>a)
});
const e = Object.freeze({
    displayName: "R",
    name: "r",
    patterns: [
        {
            include: "#roxygen"
        },
        {
            include: "#comments"
        },
        {
            include: "#constants"
        },
        {
            include: "#keywords"
        },
        {
            include: "#storage-type"
        },
        {
            include: "#strings"
        },
        {
            include: "#brackets"
        },
        {
            include: "#function-declarations"
        },
        {
            include: "#lambda-functions"
        },
        {
            include: "#builtin-functions"
        },
        {
            include: "#function-calls"
        },
        {
            include: "#general-variables"
        }
    ],
    repository: {
        brackets: {
            patterns: [
                {
                    begin: "\\(",
                    beginCaptures: {
                        0: {
                            name: "punctuation.section.parens.begin.r"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.parens.end.r"
                        }
                    },
                    patterns: [
                        {
                            include: "source.r"
                        }
                    ]
                },
                {
                    begin: "\\[(?!\\[)",
                    beginCaptures: {
                        0: {
                            name: "punctuation.section.brackets.single.begin.r"
                        }
                    },
                    end: "\\]",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.brackets.single.end.r"
                        }
                    },
                    patterns: [
                        {
                            include: "source.r"
                        }
                    ]
                },
                {
                    begin: "\\[\\[",
                    beginCaptures: {
                        0: {
                            name: "punctuation.section.brackets.double.begin.r"
                        }
                    },
                    contentName: "meta.item-access.arguments.r",
                    end: "\\]\\]",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.brackets.double.end.r"
                        }
                    },
                    patterns: [
                        {
                            include: "source.r"
                        }
                    ]
                },
                {
                    begin: "\\{",
                    beginCaptures: {
                        0: {
                            name: "punctuation.section.braces.begin.r"
                        }
                    },
                    end: "\\}",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.braces.end.r"
                        }
                    },
                    patterns: [
                        {
                            include: "source.r"
                        }
                    ]
                }
            ]
        },
        "builtin-functions": {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "support.function.r"
                        }
                    },
                    match: "\\b(abbreviate|abs|acos|acosh|activeBindingFunction|addNA|addTaskCallback|agrep|agrepl|alist|all|all\\.equal|all\\.equal\\.character|all\\.equal\\.default|all\\.equal\\.environment|all\\.equal\\.envRefClass|all\\.equal\\.factor|all\\.equal\\.formula|all\\.equal\\.function|all\\.equal\\.language|all\\.equal\\.list|all\\.equal\\.numeric|all\\.equal\\.POSIXt|all\\.equal\\.raw|all\\.names|allowInterrupts|all\\.vars|any|anyDuplicated|anyDuplicated\\.array|anyDuplicated\\.data\\.frame|anyDuplicated\\.default|anyDuplicated\\.matrix|anyNA|anyNA\\.data\\.frame|anyNA\\.numeric_version|anyNA\\.POSIXlt|aperm|aperm\\.default|aperm\\.table|append|apply|Arg|args|array|arrayInd|as\\.array|as\\.array\\.default|as\\.call|as\\.character|as\\.character\\.condition|as\\.character\\.Date|as\\.character\\.default|as\\.character\\.error|as\\.character\\.factor|as\\.character\\.hexmode|as\\.character\\.numeric_version|as\\.character\\.octmode|as\\.character\\.POSIXt|as\\.character\\.srcref|as\\.complex|as\\.data\\.frame|as\\.data\\.frame\\.array|as\\.data\\.frame\\.AsIs|as\\.data\\.frame\\.character|as\\.data\\.frame\\.complex|as\\.data\\.frame\\.data\\.frame|as\\.data\\.frame\\.Date|as\\.data\\.frame\\.default|as\\.data\\.frame\\.difftime|as\\.data\\.frame\\.factor|as\\.data\\.frame\\.integer|as\\.data\\.frame\\.list|as\\.data\\.frame\\.logical|as\\.data\\.frame\\.matrix|as\\.data\\.frame\\.model\\.matrix|as\\.data\\.frame\\.noquote|as\\.data\\.frame\\.numeric|as\\.data\\.frame\\.numeric_version|as\\.data\\.frame\\.ordered|as\\.data\\.frame\\.POSIXct|as\\.data\\.frame\\.POSIXlt|as\\.data\\.frame\\.raw|as\\.data\\.frame\\.table|as\\.data\\.frame\\.ts|as\\.data\\.frame\\.vector|as\\.Date|as\\.Date\\.character|as\\.Date\\.default|as\\.Date\\.factor|as\\.Date\\.numeric|as\\.Date\\.POSIXct|as\\.Date\\.POSIXlt|as\\.difftime|as\\.double|as\\.double\\.difftime|as\\.double\\.POSIXlt|as\\.environment|as\\.expression|as\\.expression\\.default|as\\.factor|as\\.function|as\\.function\\.default|as\\.hexmode|asin|asinh|as\\.integer|as\\.list|as\\.list\\.data\\.frame|as\\.list\\.Date|as\\.list\\.default|as\\.list\\.difftime|as\\.list\\.environment|as\\.list\\.factor|as\\.list\\.function|as\\.list\\.numeric_version|as\\.list\\.POSIXct|as\\.list\\.POSIXlt|as\\.logical|as\\.logical\\.factor|as\\.matrix|as\\.matrix\\.data\\.frame|as\\.matrix\\.default|as\\.matrix\\.noquote|as\\.matrix\\.POSIXlt|as\\.name|asNamespace|as\\.null|as\\.null\\.default|as\\.numeric|as\\.numeric_version|as\\.octmode|as\\.ordered|as\\.package_version|as\\.pairlist|asplit|as\\.POSIXct|as\\.POSIXct\\.Date|as\\.POSIXct\\.default|as\\.POSIXct\\.numeric|as\\.POSIXct\\.POSIXlt|as\\.POSIXlt|as\\.POSIXlt\\.character|as\\.POSIXlt\\.Date|as\\.POSIXlt\\.default|as\\.POSIXlt\\.factor|as\\.POSIXlt\\.numeric|as\\.POSIXlt\\.POSIXct|as\\.qr|as\\.raw|asS3|asS4|assign|as\\.single|as\\.single\\.default|as\\.symbol|as\\.table|as\\.table\\.default|as\\.vector|as\\.vector\\.factor|atan|atan2|atanh|attach|attachNamespace|attr|attr\\.all\\.equal|attributes|autoload|autoloader|backsolve|baseenv|basename|besselI|besselJ|besselK|besselY|beta|bindingIsActive|bindingIsLocked|bindtextdomain|bitwAnd|bitwNot|bitwOr|bitwShiftL|bitwShiftR|bitwXor|body|bquote|break|browser|browserCondition|browserSetDebug|browserText|builtins|by|by\\.data\\.frame|by\\.default|bzfile|c|call|callCC|capabilities|casefold|cat|cbind|cbind\\.data\\.frame|c\\.Date|c\\.difftime|ceiling|c\\.factor|character|char\\.expand|charmatch|charToRaw|chartr|check_tzones|chkDots|chol|chol2inv|chol\\.default|choose|class|clearPushBack|close|closeAllConnections|close\\.connection|close\\.srcfile|close\\.srcfilealias|c\\.noquote|c\\.numeric_version|col|colMeans|colnames|colSums|commandArgs|comment|complex|computeRestarts|conditionCall|conditionCall\\.condition|conditionMessage|conditionMessage\\.condition|conflictRules|conflicts|Conj|contributors|cos|cosh|cospi|c\\.POSIXct|c\\.POSIXlt|crossprod|Cstack_info|cummax|cummin|cumprod|cumsum|curlGetHeaders|cut|cut\\.Date|cut\\.default|cut\\.POSIXt|c\\.warnings|data\\.class|data\\.frame|data\\.matrix|date|debug|debuggingState|debugonce|default\\.stringsAsFactors|delayedAssign|deparse|deparse1|det|detach|determinant|determinant\\.matrix|dget|diag|diff|diff\\.Date|diff\\.default|diff\\.difftime|diff\\.POSIXt|difftime|digamma|dim|dim\\.data\\.frame|dimnames|dimnames\\.data\\.frame|dir|dir\\.create|dir\\.exists|dirname|do\\.call|dontCheck|double|dput|dQuote|drop|droplevels|droplevels\\.data\\.frame|droplevels\\.factor|dump|duplicated|duplicated\\.array|duplicated\\.data\\.frame|duplicated\\.default|duplicated\\.matrix|duplicated\\.numeric_version|duplicated\\.POSIXlt|duplicated\\.warnings|dynGet|dyn\\.load|dyn\\.unload|eapply|eigen|emptyenv|enc2native|enc2utf8|encodeString|Encoding|endsWith|enquote|environment|environmentIsLocked|environmentName|env\\.profile|errorCondition|eval|eval\\.parent|evalq|exists|exp|expand\\.grid|expm1|expression|extSoftVersion|factor|factorial|fifo|file|file\\.access|file\\.append|file\\.choose|file\\.copy|file\\.create|file\\.exists|file\\.info|file\\.link|file\\.mode|file\\.mtime|file\\.path|file\\.remove|file\\.rename|file\\.show|file\\.size|file\\.symlink|Filter|Find|findInterval|find\\.package|findPackageEnv|findRestart|floor|flush|flush\\.connection|for|force|forceAndCall|formals|format|format\\.AsIs|formatC|format\\.data\\.frame|format\\.Date|format\\.default|format\\.difftime|formatDL|format\\.factor|format\\.hexmode|format\\.info|format\\.libraryIQR|format\\.numeric_version|format\\.octmode|format\\.packageInfo|format\\.POSIXct|format\\.POSIXlt|format\\.pval|format\\.summaryDefault|forwardsolve|function|gamma|gc|gcinfo|gc\\.time|gctorture|gctorture2|get|get0|getAllConnections|getCallingDLL|getCallingDLLe|getConnection|getDLLRegisteredRoutines|getDLLRegisteredRoutines\\.character|getDLLRegisteredRoutines\\.DLLInfo|getElement|geterrmessage|getExportedValue|getHook|getLoadedDLLs|getNamespace|getNamespaceExports|getNamespaceImports|getNamespaceInfo|getNamespaceName|getNamespaceUsers|getNamespaceVersion|getNativeSymbolInfo|getOption|getRversion|getSrcLines|getTaskCallbackNames|gettext|gettextf|getwd|gl|globalCallingHandlers|globalenv|gregexec|gregexpr|grep|grepl|grepRaw|grouping|gsub|gzcon|gzfile|I|iconv|iconvlist|icuGetCollate|icuSetCollate|identical|identity|if|ifelse|Im|importIntoEnv|infoRDS|inherits|integer|interaction|interactive|intersect|intToBits|intToUtf8|inverse\\.rle|invisible|invokeRestart|invokeRestartInteractively|isa|is\\.array|is\\.atomic|isatty|isBaseNamespace|is\\.call|is\\.character|is\\.complex|is\\.data\\.frame|isdebugged|is\\.double|is\\.element|is\\.environment|is\\.expression|is\\.factor|isFALSE|is\\.finite|is\\.function|isIncomplete|is\\.infinite|is\\.integer|is\\.language|is\\.list|is\\.loaded|is\\.logical|is\\.matrix|is\\.na|is\\.na\\.data\\.frame|is\\.name|isNamespace|isNamespaceLoaded|is\\.nan|is\\.na\\.numeric_version|is\\.na\\.POSIXlt|is\\.null|is\\.numeric|is\\.numeric\\.Date|is\\.numeric\\.difftime|is\\.numeric\\.POSIXt|is\\.numeric_version|is\\.object|ISOdate|ISOdatetime|isOpen|is\\.ordered|is\\.package_version|is\\.pairlist|is\\.primitive|is\\.qr|is\\.R|is\\.raw|is\\.recursive|isRestart|isS4|isSeekable|is\\.single|is\\.symbol|isSymmetric|isSymmetric\\.matrix|is\\.table|isTRUE|is\\.unsorted|is\\.vector|jitter|julian|julian\\.Date|julian\\.POSIXt|kappa|kappa\\.default|kappa\\.lm|kappa\\.qr|kronecker|l10n_info|labels|labels\\.default|La_library|lapply|La\\.svd|La_version|lazyLoad|lazyLoadDBexec|lazyLoadDBfetch|lbeta|lchoose|length|length\\.POSIXlt|lengths|levels|levels\\.default|lfactorial|lgamma|libcurlVersion|library|library\\.dynam|library\\.dynam\\.unload|licence|license|list|list2DF|list2env|list\\.dirs|list\\.files|load|loadedNamespaces|loadingNamespaceInfo|loadNamespace|local|lockBinding|lockEnvironment|log|log10|log1p|log2|logb|logical|lower\\.tri|ls|makeActiveBinding|make\\.names|make\\.unique|Map|mapply|marginSums|margin\\.table|match|match\\.arg|match\\.call|match\\.fun|Math\\.data\\.frame|Math\\.Date|Math\\.difftime|Math\\.factor|Math\\.POSIXt|mat\\.or\\.vec|matrix|max|max\\.col|mean|mean\\.Date|mean\\.default|mean\\.difftime|mean\\.POSIXct|mean\\.POSIXlt|memCompress|memDecompress|mem\\.maxNSize|mem\\.maxVSize|memory\\.profile|merge|merge\\.data\\.frame|merge\\.default|message|mget|min|missing|Mod|mode|months|months\\.Date|months\\.POSIXt|names|namespaceExport|namespaceImport|namespaceImportClasses|namespaceImportFrom|namespaceImportMethods|names\\.POSIXlt|nargs|nchar|ncol|NCOL|Negate|new\\.env|next|NextMethod|ngettext|nlevels|noquote|norm|normalizePath|nrow|NROW|nullfile|numeric|numeric_version|numToBits|numToInts|nzchar|objects|oldClass|OlsonNames|on\\.exit|open|open\\.connection|open\\.srcfile|open\\.srcfilealias|open\\.srcfilecopy|Ops\\.data\\.frame|Ops\\.Date|Ops\\.difftime|Ops\\.factor|Ops\\.numeric_version|Ops\\.ordered|Ops\\.POSIXt|options|order|ordered|outer|packageEvent|packageHasNamespace|packageNotFoundError|packageStartupMessage|package_version|packBits|pairlist|parent\\.env|parent\\.frame|parse|parseNamespaceFile|paste|paste0|path\\.expand|path\\.package|pcre_config|pi|pipe|plot|pmatch|pmax|pmax\\.int|pmin|pmin\\.int|polyroot|Position|pos\\.to\\.env|pretty|pretty\\.default|prettyNum|print|print\\.AsIs|print\\.by|print\\.condition|print\\.connection|print\\.data\\.frame|print\\.Date|print\\.default|print\\.difftime|print\\.Dlist|print\\.DLLInfo|print\\.DLLInfoList|print\\.DLLRegisteredRoutines|print\\.eigen|print\\.factor|print\\.function|print\\.hexmode|print\\.libraryIQR|print\\.listof|print\\.NativeRoutineList|print\\.noquote|print\\.numeric_version|print\\.octmode|print\\.packageInfo|print\\.POSIXct|print\\.POSIXlt|print\\.proc_time|print\\.restart|print\\.rle|print\\.simple\\.list|print\\.srcfile|print\\.srcref|print\\.summaryDefault|print\\.summary\\.table|print\\.summary\\.warnings|print\\.table|print\\.warnings|prmatrix|proc\\.time|prod|proportions|prop\\.table|provideDimnames|psigamma|pushBack|pushBackLength|q|qr|qr\\.coef|qr\\.default|qr\\.fitted|qr\\.Q|qr\\.qty|qr\\.qy|qr\\.R|qr\\.resid|qr\\.solve|qr\\.X|quarters|quarters\\.Date|quarters\\.POSIXt|quit|quote|range|range\\.default|rank|rapply|raw|rawConnection|rawConnectionValue|rawShift|rawToBits|rawToChar|rbind|rbind\\.data\\.frame|rcond|Re|readBin|readChar|read\\.dcf|readline|readLines|readRDS|readRenviron|Recall|Reduce|regexec|regexpr|reg\\.finalizer|registerS3method|registerS3methods|regmatches|remove|removeTaskCallback|rep|rep\\.Date|rep\\.difftime|repeat|rep\\.factor|rep\\.int|replace|rep_len|replicate|rep\\.numeric_version|rep\\.POSIXct|rep\\.POSIXlt|require|requireNamespace|restartDescription|restartFormals|retracemem|return|returnValue|rev|rev\\.default|R\\.home|rle|rm|RNGkind|RNGversion|round|round\\.Date|round\\.POSIXt|row|rowMeans|rownames|row\\.names|row\\.names\\.data\\.frame|row\\.names\\.default|rowsum|rowsum\\.data\\.frame|rowsum\\.default|rowSums|R_system_version|R\\.version|R\\.Version|R\\.version\\.string|sample|sample\\.int|sapply|save|save\\.image|saveRDS|scale|scale\\.default|scan|search|searchpaths|seek|seek\\.connection|seq|seq_along|seq\\.Date|seq\\.default|seq\\.int|seq_len|seq\\.POSIXt|sequence|sequence\\.default|serialize|serverSocket|setdiff|setequal|setHook|setNamespaceInfo|set\\.seed|setSessionTimeLimit|setTimeLimit|setwd|showConnections|shQuote|sign|signalCondition|signif|simpleCondition|simpleError|simpleMessage|simpleWarning|simplify2array|sin|single|sinh|sink|sink\\.number|sinpi|slice\\.index|socketAccept|socketConnection|socketSelect|socketTimeout|solve|solve\\.default|solve\\.qr|sort|sort\\.default|sort\\.int|sort\\.list|sort\\.POSIXlt|source|split|split\\.data\\.frame|split\\.Date|split\\.default|split\\.POSIXct|sprintf|sqrt|sQuote|srcfile|srcfilealias|srcfilecopy|srcref|standardGeneric|startsWith|stderr|stdin|stdout|stop|stopifnot|storage\\.mode|str2expression|str2lang|strftime|strptime|strrep|strsplit|strtoi|strtrim|structure|strwrap|sub|subset|subset\\.data\\.frame|subset\\.default|subset\\.matrix|substitute|substr|substring|sum|summary|summary\\.connection|summary\\.data\\.frame|Summary\\.data\\.frame|summary\\.Date|Summary\\.Date|summary\\.default|Summary\\.difftime|summary\\.factor|Summary\\.factor|summary\\.matrix|Summary\\.numeric_version|Summary\\.ordered|summary\\.POSIXct|Summary\\.POSIXct|summary\\.POSIXlt|Summary\\.POSIXlt|summary\\.proc_time|summary\\.srcfile|summary\\.srcref|summary\\.table|summary\\.warnings|suppressMessages|suppressPackageStartupMessages|suppressWarnings|suspendInterrupts|svd|sweep|switch|sys\\.call|sys\\.calls|Sys\\.chmod|Sys\\.Date|sys\\.frame|sys\\.frames|sys\\.function|Sys\\.getenv|Sys\\.getlocale|Sys\\.getpid|Sys\\.glob|Sys\\.info|sys\\.load\\.image|Sys\\.localeconv|sys\\.nframe|sys\\.on\\.exit|sys\\.parent|sys\\.parents|Sys\\.readlink|sys\\.save\\.image|Sys\\.setenv|Sys\\.setFileTime|Sys\\.setlocale|Sys\\.sleep|sys\\.source|sys\\.status|system|system2|system\\.file|system\\.time|Sys\\.time|Sys\\.timezone|Sys\\.umask|Sys\\.unsetenv|Sys\\.which|t|table|tabulate|tan|tanh|tanpi|tapply|taskCallbackManager|tcrossprod|t\\.data\\.frame|t\\.default|tempdir|tempfile|textConnection|textConnectionValue|tolower|topenv|toString|toString\\.default|toupper|trace|traceback|tracemem|tracingState|transform|transform\\.data\\.frame|transform\\.default|trigamma|trimws|trunc|truncate|truncate\\.connection|trunc\\.Date|trunc\\.POSIXt|try|tryCatch|tryInvokeRestart|typeof|unclass|undebug|union|unique|unique\\.array|unique\\.data\\.frame|unique\\.default|unique\\.matrix|unique\\.numeric_version|unique\\.POSIXlt|unique\\.warnings|units|units\\.difftime|unix\\.time|unlink|unlist|unloadNamespace|unlockBinding|unname|unserialize|unsplit|untrace|untracemem|unz|upper\\.tri|url|UseMethod|utf8ToInt|validEnc|validUTF8|vapply|vector|Vectorize|version|warning|warningCondition|warnings|weekdays|weekdays\\.Date|weekdays\\.POSIXt|which|which\\.max|which\\.min|while|with|withAutoprint|withCallingHandlers|with\\.default|within|within\\.data\\.frame|within\\.list|withRestarts|withVisible|write|writeBin|writeChar|write\\.dcf|writeLines|xor|xpdrows\\.data\\.frame|xtfrm|xtfrm\\.AsIs|xtfrm\\.data\\.frame|xtfrm\\.Date|xtfrm\\.default|xtfrm\\.difftime|xtfrm\\.factor|xtfrm\\.numeric_version|xtfrm\\.POSIXct|xtfrm\\.POSIXlt|xzfile|zapsmall)\\s*(\\()"
                },
                {
                    captures: {
                        1: {
                            name: "support.function.r"
                        }
                    },
                    match: "\\b(abline|arrows|assocplot|axis|Axis|axis\\.Date|axis\\.POSIXct|axTicks|barplot|barplot\\.default|box|boxplot|boxplot\\.default|boxplot\\.matrix|bxp|cdplot|clip|close\\.screen|co\\.intervals|contour|contour\\.default|coplot|curve|dotchart|erase\\.screen|filled\\.contour|fourfoldplot|frame|grconvertX|grconvertY|grid|hist|hist\\.default|identify|image|image\\.default|layout|layout\\.show|lcm|legend|lines|lines\\.default|locator|matlines|matplot|matpoints|mosaicplot|mtext|pairs|pairs\\.default|panel\\.smooth|par|persp|pie|plot|plot\\.default|plot\\.design|plot\\.function|plot\\.new|plot\\.window|plot\\.xy|points|points\\.default|polygon|polypath|rasterImage|rect|rug|screen|segments|smoothScatter|spineplot|split\\.screen|stars|stem|strheight|stripchart|strwidth|sunflowerplot|symbols|text|text\\.default|title|xinch|xspline|xyinch|yinch)\\s*(\\()"
                },
                {
                    captures: {
                        1: {
                            name: "support.function.r"
                        }
                    },
                    match: "\\b(adjustcolor|as\\.graphicsAnnot|as\\.raster|axisTicks|bitmap|blues9|bmp|boxplot\\.stats|cairo_pdf|cairo_ps|cairoSymbolFont|check\\.options|chull|CIDFont|cm|cm\\.colors|col2rgb|colorConverter|colorRamp|colorRampPalette|colors|colorspaces|colours|contourLines|convertColor|densCols|dev2bitmap|devAskNewPage|dev\\.capabilities|dev\\.capture|dev\\.control|dev\\.copy|dev\\.copy2eps|dev\\.copy2pdf|dev\\.cur|dev\\.flush|dev\\.hold|deviceIsInteractive|dev\\.interactive|dev\\.list|dev\\.new|dev\\.next|dev\\.off|dev\\.prev|dev\\.print|dev\\.set|dev\\.size|embedFonts|extendrange|getGraphicsEvent|getGraphicsEventEnv|graphics\\.off|gray|gray\\.colors|grey|grey\\.colors|grSoftVersion|hcl|hcl\\.colors|hcl\\.pals|heat\\.colors|Hershey|hsv|is\\.raster|jpeg|make\\.rgb|n2mfrow|nclass\\.FD|nclass\\.scott|nclass\\.Sturges|palette|palette\\.colors|palette\\.pals|pdf|pdfFonts|pdf\\.options|pictex|png|postscript|postscriptFonts|ps\\.options|quartz|quartzFont|quartzFonts|quartz\\.options|quartz\\.save|rainbow|recordGraphics|recordPlot|replayPlot|rgb|rgb2hsv|savePlot|setEPS|setGraphicsEventEnv|setGraphicsEventHandlers|setPS|svg|terrain\\.colors|tiff|topo\\.colors|trans3d|Type1Font|x11|X11|X11Font|X11Fonts|X11\\.options|xfig|xy\\.coords|xyTable|xyz\\.coords)\\s*(\\()"
                },
                {
                    captures: {
                        1: {
                            name: "support.function.r"
                        }
                    },
                    match: "\\b(addNextMethod|allNames|Arith|as|asMethodDefinition|assignClassDef|assignMethodsMetaData|balanceMethodsList|cacheGenericsMetaData|cacheMetaData|cacheMethod|callGeneric|callNextMethod|canCoerce|cbind2|checkAtAssignment|checkSlotAssignment|classesToAM|classLabel|classMetaName|className|coerce|Compare|completeClassDefinition|completeExtends|completeSubclasses|Complex|conformMethod|defaultDumpName|defaultPrototype|doPrimitiveMethod|dumpMethod|dumpMethods|el|elNamed|empty\\.dump|emptyMethodsList|evalOnLoad|evalqOnLoad|evalSource|existsFunction|existsMethod|extends|externalRefMethod|finalDefaultMethod|findClass|findFunction|findMethod|findMethods|findMethodSignatures|findUnique|fixPre1\\.8|formalArgs|functionBody|generic\\.skeleton|getAllSuperClasses|getClass|getClassDef|getClasses|getDataPart|getFunction|getGeneric|getGenerics|getGroup|getGroupMembers|getLoadActions|getMethod|getMethods|getMethodsForDispatch|getMethodsMetaData|getPackageName|getRefClass|getSlots|getValidity|hasArg|hasLoadAction|hasMethod|hasMethods|implicitGeneric|inheritedSlotNames|initFieldArgs|initialize|initRefFields|insertClassMethods|insertMethod|insertSource|is|isClass|isClassDef|isClassUnion|isGeneric|isGrammarSymbol|isGroup|isRematched|isSealedClass|isSealedMethod|isVirtualClass|isXS3Class|kronecker|languageEl|linearizeMlist|listFromMethods|listFromMlist|loadMethod|Logic|makeClassRepresentation|makeExtends|makeGeneric|makeMethodsList|makePrototypeFromClassDef|makeStandardGeneric|matchSignature|Math|Math2|mergeMethods|metaNameUndo|MethodAddCoerce|methodSignatureMatrix|method\\.skeleton|MethodsList|MethodsListSelect|methodsPackageMetaName|missingArg|multipleClasses|new|newBasic|newClassRepresentation|newEmptyObject|Ops|packageSlot|possibleExtends|prohibitGeneric|promptClass|promptMethods|prototype|Quote|rbind2|reconcilePropertiesAndPrototype|registerImplicitGenerics|rematchDefinition|removeClass|removeGeneric|removeMethod|removeMethods|representation|requireMethods|resetClass|resetGeneric|S3Class|S3Part|sealClass|selectMethod|selectSuperClasses|setAs|setClass|setClassUnion|setDataPart|setGeneric|setGenericImplicit|setGroupGeneric|setIs|setLoadAction|setLoadActions|setMethod|setOldClass|setPackageName|setPrimitiveMethods|setRefClass|setReplaceMethod|setValidity|show|showClass|showDefault|showExtends|showMethods|showMlist|signature|SignatureMethod|sigToEnv|slot|slotNames|slotsFromS3|substituteDirect|substituteFunctionArgs|Summary|superClassDepth|testInheritedMethods|testVirtual|tryNew|unRematchDefinition|validObject|validSlotNames)\\s*(\\()"
                },
                {
                    captures: {
                        1: {
                            name: "support.function.r"
                        }
                    },
                    match: "\\b(acf|acf2AR|add1|addmargins|add\\.scope|aggregate|aggregate\\.data\\.frame|aggregate\\.ts|AIC|alias|anova|ansari\\.test|aov|approx|approxfun|ar|ar\\.burg|arima|arima0|arima0\\.diag|arima\\.sim|ARMAacf|ARMAtoMA|ar\\.mle|ar\\.ols|ar\\.yw|as\\.dendrogram|as\\.dist|as\\.formula|as\\.hclust|asOneSidedFormula|as\\.stepfun|as\\.ts|ave|bandwidth\\.kernel|bartlett\\.test|BIC|binomial|binom\\.test|biplot|Box\\.test|bw\\.bcv|bw\\.nrd|bw\\.nrd0|bw\\.SJ|bw\\.ucv|C|cancor|case\\.names|ccf|chisq\\.test|cmdscale|coef|coefficients|complete\\.cases|confint|confint\\.default|confint\\.lm|constrOptim|contrasts|contr\\.helmert|contr\\.poly|contr\\.SAS|contr\\.sum|contr\\.treatment|convolve|cooks\\.distance|cophenetic|cor|cor\\.test|cov|cov2cor|covratio|cov\\.wt|cpgram|cutree|cycle|D|dbeta|dbinom|dcauchy|dchisq|decompose|delete\\.response|deltat|dendrapply|density|density\\.default|deriv|deriv3|deviance|dexp|df|DF2formula|dfbeta|dfbetas|dffits|df\\.kernel|df\\.residual|dgamma|dgeom|dhyper|diffinv|dist|dlnorm|dlogis|dmultinom|dnbinom|dnorm|dpois|drop1|drop\\.scope|drop\\.terms|dsignrank|dt|dummy\\.coef|dummy\\.coef\\.lm|dunif|dweibull|dwilcox|ecdf|eff\\.aovlist|effects|embed|end|estVar|expand\\.model\\.frame|extractAIC|factanal|factor\\.scope|family|fft|filter|fisher\\.test|fitted|fitted\\.values|fivenum|fligner\\.test|formula|frequency|friedman\\.test|ftable|Gamma|gaussian|get_all_vars|getCall|getInitial|glm|glm\\.control|glm\\.fit|hasTsp|hat|hatvalues|hclust|heatmap|HoltWinters|influence|influence\\.measures|integrate|interaction\\.plot|inverse\\.gaussian|IQR|is\\.empty\\.model|is\\.leaf|is\\.mts|isoreg|is\\.stepfun|is\\.ts|is\\.tskernel|KalmanForecast|KalmanLike|KalmanRun|KalmanSmooth|kernapply|kernel|kmeans|knots|kruskal\\.test|ksmooth|ks\\.test|lag|lag\\.plot|line|lm|lm\\.fit|lm\\.influence|lm\\.wfit|loadings|loess|loess\\.control|loess\\.smooth|logLik|loglin|lowess|ls\\.diag|lsfit|ls\\.print|mad|mahalanobis|makeARIMA|make\\.link|makepredictcall|manova|mantelhaen\\.test|mauchly\\.test|mcnemar\\.test|median|median\\.default|medpolish|model\\.extract|model\\.frame|model\\.frame\\.default|model\\.matrix|model\\.matrix\\.default|model\\.matrix\\.lm|model\\.offset|model\\.response|model\\.tables|model\\.weights|monthplot|mood\\.test|mvfft|na\\.action|na\\.contiguous|na\\.exclude|na\\.fail|na\\.omit|na\\.pass|napredict|naprint|naresid|nextn|nlm|nlminb|nls|nls\\.control|NLSstAsymptotic|NLSstClosestX|NLSstLfAsymptote|NLSstRtAsymptote|nobs|numericDeriv|offset|oneway\\.test|optim|optimHess|optimise|optimize|order\\.dendrogram|pacf|p\\.adjust|p\\.adjust\\.methods|Pair|pairwise\\.prop\\.test|pairwise\\.table|pairwise\\.t\\.test|pairwise\\.wilcox\\.test|pbeta|pbinom|pbirthday|pcauchy|pchisq|pexp|pf|pgamma|pgeom|phyper|plclust|plnorm|plogis|plot\\.ecdf|plot\\.spec\\.coherency|plot\\.spec\\.phase|plot\\.stepfun|plot\\.ts|pnbinom|pnorm|poisson|poisson\\.test|poly|polym|power|power\\.anova\\.test|power\\.prop\\.test|power\\.t\\.test|ppoints|ppois|ppr|PP\\.test|prcomp|predict|predict\\.glm|predict\\.lm|preplot|princomp|printCoefmat|profile|proj|promax|prop\\.test|prop\\.trend\\.test|psignrank|pt|ptukey|punif|pweibull|pwilcox|qbeta|qbinom|qbirthday|qcauchy|qchisq|qexp|qf|qgamma|qgeom|qhyper|qlnorm|qlogis|qnbinom|qnorm|qpois|qqline|qqnorm|qqplot|qsignrank|qt|qtukey|quade\\.test|quantile|quasi|quasibinomial|quasipoisson|qunif|qweibull|qwilcox|r2dtable|rbeta|rbinom|rcauchy|rchisq|read\\.ftable|rect\\.hclust|reformulate|relevel|reorder|replications|reshape|resid|residuals|residuals\\.glm|residuals\\.lm|rexp|rf|rgamma|rgeom|rhyper|rlnorm|rlogis|rmultinom|rnbinom|rnorm|rpois|rsignrank|rstandard|rstudent|rt|runif|runmed|rweibull|rwilcox|rWishart|scatter\\.smooth|screeplot|sd|se\\.contrast|selfStart|setNames|shapiro\\.test|sigma|simulate|smooth|smoothEnds|smooth\\.spline|sortedXyData|spec\\.ar|spec\\.pgram|spec\\.taper|spectrum|spline|splinefun|splinefunH|SSasymp|SSasympOff|SSasympOrig|SSbiexp|SSD|SSfol|SSfpl|SSgompertz|SSlogis|SSmicmen|SSweibull|start|stat\\.anova|step|stepfun|stl|StructTS|summary\\.aov|summary\\.glm|summary\\.lm|summary\\.manova|summary\\.stepfun|supsmu|symnum|termplot|terms|terms\\.formula|time|toeplitz|ts|tsdiag|ts\\.intersect|tsp|ts\\.plot|tsSmooth|ts\\.union|t\\.test|TukeyHSD|uniroot|update|update\\.default|update\\.formula|var|variable\\.names|varimax|var\\.test|vcov|weighted\\.mean|weighted\\.residuals|weights|wilcox\\.test|window|write\\.ftable|xtabs)\\s*(\\()"
                },
                {
                    captures: {
                        1: {
                            name: "support.function.r"
                        }
                    },
                    match: "\\b(adist|alarm|apropos|aregexec|argsAnywhere|asDateBuilt|askYesNo|aspell|aspell_package_C_files|aspell_package_Rd_files|aspell_package_R_files|aspell_package_vignettes|aspell_write_personal_dictionary_file|as\\.person|as\\.personList|as\\.relistable|as\\.roman|assignInMyNamespace|assignInNamespace|available\\.packages|bibentry|browseEnv|browseURL|browseVignettes|bug\\.report|capture\\.output|changedFiles|charClass|checkCRAN|chooseBioCmirror|chooseCRANmirror|citation|cite|citeNatbib|citEntry|citFooter|citHeader|close\\.socket|combn|compareVersion|contrib\\.url|count\\.fields|create\\.post|data|dataentry|data\\.entry|de|debugcall|debugger|demo|de\\.ncols|de\\.restore|de\\.setup|download\\.file|download\\.packages|dump\\.frames|edit|emacs|example|file\\.edit|fileSnapshot|file_test|find|findLineNum|fix|fixInNamespace|flush\\.console|formatOL|formatUL|getAnywhere|getCRANmirrors|getFromNamespace|getParseData|getParseText|getS3method|getSrcDirectory|getSrcFilename|getSrcLocation|getSrcref|getTxtProgressBar|glob2rx|globalVariables|hasName|head|head\\.matrix|help|help\\.request|help\\.search|help\\.start|history|hsearch_db|hsearch_db_concepts|hsearch_db_keywords|installed\\.packages|install\\.packages|is\\.relistable|isS3method|isS3stdGeneric|limitedLabels|loadhistory|localeToCharset|lsf\\.str|ls\\.str|maintainer|make\\.packages\\.html|makeRweaveLatexCodeRunner|make\\.socket|memory\\.limit|memory\\.size|menu|methods|mirror2html|modifyList|new\\.packages|news|nsl|object\\.size|old\\.packages|osVersion|packageDate|packageDescription|packageName|package\\.skeleton|packageStatus|packageVersion|page|person|personList|pico|process\\.events|prompt|promptData|promptImport|promptPackage|rc\\.getOption|rc\\.options|rc\\.settings|rc\\.status|readCitationFile|read\\.csv|read\\.csv2|read\\.delim|read\\.delim2|read\\.DIF|read\\.fortran|read\\.fwf|read\\.socket|read\\.table|recover|relist|remove\\.packages|removeSource|Rprof|Rprofmem|RShowDoc|RSiteSearch|rtags|Rtangle|RtangleFinish|RtangleRuncode|RtangleSetup|RtangleWritedoc|RweaveChunkPrefix|RweaveEvalWithOpt|RweaveLatex|RweaveLatexFinish|RweaveLatexOptions|RweaveLatexSetup|RweaveLatexWritedoc|RweaveTryStop|savehistory|select\\.list|sessionInfo|setBreakpoint|setRepositories|setTxtProgressBar|stack|Stangle|str|strcapture|strOptions|summaryRprof|suppressForeignCheck|Sweave|SweaveHooks|SweaveSyntaxLatex|SweaveSyntaxNoweb|SweaveSyntConv|tail|tail\\.matrix|tar|timestamp|toBibtex|toLatex|txtProgressBar|type\\.convert|undebugcall|unstack|untar|unzip|update\\.packages|upgrade|URLdecode|URLencode|url\\.show|vi|View|vignette|warnErrList|write\\.csv|write\\.csv2|write\\.socket|write\\.table|xedit|xemacs|zip)\\s*(\\()"
                }
            ]
        },
        comments: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "comment.line.pragma.r"
                        },
                        2: {
                            name: "entity.name.pragma.name.r"
                        }
                    },
                    match: "^(#pragma[ \\t]+mark)[ \\t](.*)",
                    name: "comment.line.pragma-mark.r"
                },
                {
                    begin: "(^[ \\t]+)?(?=#)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.whitespace.comment.leading.r"
                        }
                    },
                    end: "(?!\\G)",
                    patterns: [
                        {
                            begin: "#",
                            beginCaptures: {
                                0: {
                                    name: "punctuation.definition.comment.r"
                                }
                            },
                            end: "\\n",
                            name: "comment.line.number-sign.r"
                        }
                    ]
                }
            ]
        },
        constants: {
            patterns: [
                {
                    match: "\\b(pi|letters|LETTERS|month\\.abb|month\\.name)\\b",
                    name: "support.constant.misc.r"
                },
                {
                    match: "\\b(TRUE|FALSE|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_|Inf|NaN)\\b",
                    name: "constant.language.r"
                },
                {
                    match: "\\b0(x|X)[0-9a-fA-F]+i\\b",
                    name: "constant.numeric.imaginary.hexadecimal.r"
                },
                {
                    match: "\\b[0-9]+\\.?[0-9]*(?:(e|E)(\\+|-)?[0-9]+)?i\\b",
                    name: "constant.numeric.imaginary.decimal.r"
                },
                {
                    match: "\\.[0-9]+(?:(e|E)(\\+|-)?[0-9]+)?i\\b",
                    name: "constant.numeric.imaginary.decimal.r"
                },
                {
                    match: "\\b0(x|X)[0-9a-fA-F]+L\\b",
                    name: "constant.numeric.integer.hexadecimal.r"
                },
                {
                    match: "\\b(?:[0-9]+\\.?[0-9]*)(?:(e|E)(\\+|-)?[0-9]+)?L\\b",
                    name: "constant.numeric.integer.decimal.r"
                },
                {
                    match: "\\b0(x|X)[0-9a-fA-F]+\\b",
                    name: "constant.numeric.float.hexadecimal.r"
                },
                {
                    match: "\\b[0-9]+\\.?[0-9]*(?:(e|E)(\\+|-)?[0-9]+)?\\b",
                    name: "constant.numeric.float.decimal.r"
                },
                {
                    match: "\\.[0-9]+(?:(e|E)(\\+|-)?[0-9]+)?\\b",
                    name: "constant.numeric.float.decimal.r"
                }
            ]
        },
        "function-calls": {
            begin: "(?:\\b|(?=\\.))((?:[a-zA-Z._][\\w.]*|`[^`]+`))\\s*(\\()",
            beginCaptures: {
                1: {
                    name: "variable.function.r"
                },
                2: {
                    name: "punctuation.section.parens.begin.r"
                }
            },
            contentName: "meta.function-call.arguments.r",
            end: "(\\))",
            endCaptures: {
                1: {
                    name: "punctuation.section.parens.end.r"
                }
            },
            name: "meta.function-call.r",
            patterns: [
                {
                    include: "#function-parameters"
                }
            ]
        },
        "function-declarations": {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "entity.name.function.r"
                        },
                        2: {
                            name: "keyword.operator.assignment.r"
                        },
                        3: {
                            name: "keyword.control.r"
                        }
                    },
                    match: "((?:`[^`\\\\]*(?:\\\\.[^`\\\\]*)*`)|(?:[[:alpha:].][[:alnum:]._]*))\\s*(<?<-|=(?!=))\\s*(function|\\\\)(?!\\w)",
                    name: "meta.function.r",
                    patterns: [
                        {
                            include: "#lambda-functions"
                        }
                    ]
                }
            ]
        },
        "function-parameters": {
            patterns: [
                {
                    contentName: "meta.function-call.parameters.r",
                    name: "meta.function-call.r"
                },
                {
                    match: "(?:[a-zA-Z._][\\w.]*|`[^`]+`)(?=\\s[^=])",
                    name: "variable.other.r"
                },
                {
                    begin: "(?==)",
                    end: "(?=[,)])",
                    patterns: [
                        {
                            include: "source.r"
                        }
                    ]
                },
                {
                    match: ",",
                    name: "punctuation.separator.parameters.r"
                },
                {
                    include: "source.r"
                }
            ]
        },
        "general-variables": {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "variable.parameter.r"
                        },
                        2: {
                            name: "keyword.operator.assignment.r"
                        }
                    },
                    match: "([[:alpha:].][[:alnum:]._]*)\\s*(=)(?=[^=])"
                },
                {
                    captures: {
                        1: {
                            name: "variable.parameter.r"
                        },
                        2: {
                            name: "keyword.operator.assignment.r"
                        }
                    },
                    match: "(`[^`]+`)\\s*(=)(?=[^=])"
                },
                {
                    match: "\\b([\\d_][[:alnum:]._]+)\\b",
                    name: "invalid.illegal.variable.other.r"
                },
                {
                    match: "\\b([[:alnum:]_]+)(?=::)",
                    name: "entity.namespace.r"
                },
                {
                    match: "\\b([[:alnum:]._]+)\\b",
                    name: "variable.other.r"
                },
                {
                    match: "(`[^`]+`)",
                    name: "variable.other.r"
                }
            ]
        },
        keywords: {
            patterns: [
                {
                    match: "\\b(break|next|repeat|else|in)\\b",
                    name: "keyword.control.r"
                },
                {
                    match: "\\b(ifelse|if|for|return|switch|while|invisible)\\b(?=\\s*\\()",
                    name: "keyword.control.r"
                },
                {
                    match: "(\\-|\\+|\\*|\\/|%\\/%|%%|%\\*%|%o%|%x%|\\^)",
                    name: "keyword.operator.arithmetic.r"
                },
                {
                    match: "(:=|<-|<<-|->|->>)",
                    name: "keyword.operator.assignment.r"
                },
                {
                    match: "(==|<=|>=|!=|<>|<|>|%in%)",
                    name: "keyword.operator.comparison.r"
                },
                {
                    match: "(!|&{1,2}|[|]{1,2})",
                    name: "keyword.operator.logical.r"
                },
                {
                    match: "(\\|>)",
                    name: "keyword.operator.pipe.r"
                },
                {
                    match: "(%between%|%chin%|%like%|%\\+%|%\\+replace%|%:%|%do%|%dopar%|%>%|%<>%|%T>%|%\\$%)",
                    name: "keyword.operator.other.r"
                },
                {
                    match: "(\\.\\.\\.|\\$|:|\\~|@)",
                    name: "keyword.other.r"
                }
            ]
        },
        "lambda-functions": {
            patterns: [
                {
                    begin: "\\b(function)\\s*(\\()",
                    beginCaptures: {
                        1: {
                            name: "keyword.control.r"
                        },
                        2: {
                            name: "punctuation.section.parens.begin.r"
                        }
                    },
                    contentName: "meta.function.parameters.r",
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.section.parens.end.r"
                        }
                    },
                    name: "meta.function.r",
                    patterns: [
                        {
                            include: "#comments"
                        },
                        {
                            match: "(?:[a-zA-Z._][\\w.]*|`[^`]+`)",
                            name: "variable.other.r"
                        },
                        {
                            begin: "(?==)",
                            end: "(?=[,)])",
                            patterns: [
                                {
                                    include: "source.r"
                                }
                            ]
                        },
                        {
                            match: ",",
                            name: "punctuation.separator.parameters.r"
                        }
                    ]
                }
            ]
        },
        roxygen: {
            patterns: [
                {
                    begin: "^\\s*(#')\\s*",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.comment.r"
                        }
                    },
                    end: "$\\n?",
                    name: "comment.line.roxygen.r",
                    patterns: [
                        {
                            captures: {
                                1: {
                                    name: "keyword.other.r"
                                },
                                2: {
                                    name: "variable.parameter.r"
                                }
                            },
                            match: "(@param)\\s*((?:[a-zA-Z._][\\w.]*|`[^`]+`))"
                        },
                        {
                            match: "@[a-zA-Z0-9]+",
                            name: "keyword.other.r"
                        }
                    ]
                }
            ]
        },
        "storage-type": {
            patterns: [
                {
                    match: "\\b(character|complex|double|expression|integer|list|logical|numeric|single|raw)\\b(?=\\s*\\()",
                    name: "storage.type.r"
                }
            ]
        },
        strings: {
            patterns: [
                {
                    begin: '[rR]"(-*)\\[',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.raw.begin.r"
                        }
                    },
                    end: '\\]\\1"',
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.raw.end.r"
                        }
                    },
                    name: "string.quoted.double.raw.r"
                },
                {
                    begin: "[rR]'(-*)\\[",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.raw.begin.r"
                        }
                    },
                    end: "\\]\\1'",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.raw.end.r"
                        }
                    },
                    name: "string.quoted.single.raw.r"
                },
                {
                    begin: '[rR]"(-*)\\{',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.raw.begin.r"
                        }
                    },
                    end: '\\}\\1"',
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.raw.end.r"
                        }
                    },
                    name: "string.quoted.double.raw.r"
                },
                {
                    begin: "[rR]'(-*)\\{",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.raw.begin.r"
                        }
                    },
                    end: "\\}\\1'",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.raw.end.r"
                        }
                    },
                    name: "string.quoted.single.raw.r"
                },
                {
                    begin: '[rR]"(-*)\\(',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.raw.begin.r"
                        }
                    },
                    end: '\\)\\1"',
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.raw.end.r"
                        }
                    },
                    name: "string.quoted.double.raw.r"
                },
                {
                    begin: "[rR]'(-*)\\(",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.raw.begin.r"
                        }
                    },
                    end: "\\)\\1'",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.raw.end.r"
                        }
                    },
                    name: "string.quoted.single.raw.r"
                },
                {
                    begin: '"',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.r"
                        }
                    },
                    end: '"',
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.r"
                        }
                    },
                    name: "string.quoted.double.r",
                    patterns: [
                        {
                            match: "\\\\.",
                            name: "constant.character.escape.r"
                        }
                    ]
                },
                {
                    begin: "'",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.r"
                        }
                    },
                    end: "'",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.r"
                        }
                    },
                    name: "string.quoted.single.r",
                    patterns: [
                        {
                            match: "\\\\.",
                            name: "constant.character.escape.r"
                        }
                    ]
                }
            ]
        }
    },
    scopeName: "source.r"
});
var a = [
    e
];
;
}}),
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/tex-DFx9gLNm.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>n)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$r$2d$DU7Q70f1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/r-DU7Q70f1.js [app-ssr] (ecmascript)");
;
const t = Object.freeze({
    displayName: "TeX",
    name: "tex",
    patterns: [
        {
            captures: {
                1: {
                    name: "punctuation.definition.keyword.tex"
                }
            },
            match: "(\\\\)(backmatter|csname|else|endcsname|fi|frontmatter|mainmatter|unless|if(case|cat|csname|defined|dim|eof|false|fontchar|hbox|hmode|inner|mmode|num|odd|true|vbox|vmode|void|x)?)(?![a-zA-Z@])",
            name: "keyword.control.tex"
        },
        {
            captures: {
                1: {
                    name: "keyword.control.catcode.tex"
                },
                2: {
                    name: "punctuation.definition.keyword.tex"
                },
                3: {
                    name: "punctuation.separator.key-value.tex"
                },
                4: {
                    name: "constant.numeric.category.tex"
                }
            },
            match: "((\\\\)catcode)`(?:\\\\)?.(=)(\\d+)",
            name: "meta.catcode.tex"
        },
        {
            begin: "(^[ \\t]+)?(?=%)",
            beginCaptures: {
                1: {
                    name: "punctuation.whitespace.comment.leading.tex"
                }
            },
            end: "(?!\\G)",
            patterns: [
                {
                    begin: "%:?",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.comment.tex"
                        }
                    },
                    end: "$\\n?",
                    name: "comment.line.percentage.tex"
                },
                {
                    begin: "^(%!TEX) (\\S*) =",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.comment.tex"
                        }
                    },
                    end: "$\\n?",
                    name: "comment.line.percentage.directive.tex"
                }
            ]
        },
        {
            match: "[\\[\\]]",
            name: "punctuation.definition.brackets.tex"
        },
        {
            begin: "(\\$\\$|\\$)",
            beginCaptures: {
                1: {
                    name: "punctuation.definition.string.begin.tex"
                }
            },
            end: "(\\1)",
            endCaptures: {
                1: {
                    name: "punctuation.definition.string.end.tex"
                }
            },
            name: "meta.math.block.tex support.class.math.block.tex",
            patterns: [
                {
                    match: "\\\\\\$",
                    name: "constant.character.escape.tex"
                },
                {
                    include: "#math"
                },
                {
                    include: "$self"
                }
            ]
        },
        {
            match: "\\\\\\\\",
            name: "keyword.control.newline.tex"
        },
        {
            captures: {
                1: {
                    name: "punctuation.definition.function.tex"
                }
            },
            match: "(\\\\)(?:[\\p{Alphabetic}@]+|[,;])",
            name: "support.function.general.tex"
        },
        {
            captures: {
                1: {
                    name: "punctuation.definition.keyword.tex"
                }
            },
            match: "(\\\\)[^a-zA-Z@]",
            name: "constant.character.escape.tex"
        }
    ],
    repository: {
        braces: {
            begin: "(?<!\\\\)\\{",
            beginCaptures: {
                0: {
                    name: "punctuation.group.begin.tex"
                }
            },
            end: "(?<!\\\\)\\}",
            endCaptures: {
                0: {
                    name: "punctuation.group.end.tex"
                }
            },
            name: "meta.group.braces.tex",
            patterns: [
                {
                    include: "#braces"
                }
            ]
        },
        math: {
            patterns: [
                {
                    begin: "((\\\\)(?:text|mbox))(\\{)",
                    beginCaptures: {
                        1: {
                            name: "constant.other.math.tex"
                        },
                        2: {
                            name: "punctuation.definition.function.tex"
                        },
                        3: {
                            name: "punctuation.definition.arguments.begin.tex meta.text.normal.tex"
                        }
                    },
                    contentName: "meta.text.normal.tex",
                    end: "\\}",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.arguments.end.tex meta.text.normal.tex"
                        }
                    },
                    patterns: [
                        {
                            include: "#math"
                        },
                        {
                            include: "$base"
                        }
                    ]
                },
                {
                    match: "\\\\{|\\\\}",
                    name: "punctuation.math.bracket.pair.tex"
                },
                {
                    match: "\\\\(left|right|((big|bigg|Big|Bigg)[lr]?))([\\(\\[\\<\\>\\]\\)\\.\\|]|\\\\[{}|]|\\\\[lr]?[Vv]ert|\\\\[lr]angle)",
                    name: "punctuation.math.bracket.pair.big.tex"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.constant.math.tex"
                        }
                    },
                    match: "(\\\\)(s(s(earrow|warrow|lash)|h(ort(downarrow|uparrow|parallel|leftarrow|rightarrow|mid)|arp)|tar|i(gma|m(eq)?)|u(cc(sim|n(sim|approx)|curlyeq|eq|approx)?|pset(neq(q)?|plus(eq)?|eq(q)?)?|rd|m|bset(neq(q)?|plus(eq)?|eq(q)?)?)|p(hericalangle|adesuit)|e(tminus|arrow)|q(su(pset(eq)?|bset(eq)?)|c(up|ap)|uare)|warrow|m(ile|all(s(etminus|mile)|frown)))|h(slash|ook(leftarrow|rightarrow)|eartsuit|bar)|R(sh|ightarrow|e|bag)|Gam(e|ma)|n(s(hort(parallel|mid)|im|u(cc(eq)?|pseteq(q)?|bseteq))|Rightarrow|n(earrow|warrow)|cong|triangle(left(eq(slant)?)?|right(eq(slant)?)?)|i(plus)?|u|p(lus|arallel|rec(eq)?)|e(q|arrow|g|xists)|v(dash|Dash)|warrow|le(ss|q(slant|q)?|ft(arrow|rightarrow))|a(tural|bla)|VDash|rightarrow|g(tr|eq(slant|q)?)|mid|Left(arrow|rightarrow))|c(hi|irc(eq|le(d(circ|S|dash|ast)|arrow(left|right)))?|o(ng|prod|lon|mplement)|dot(s|p)?|u(p|r(vearrow(left|right)|ly(eq(succ|prec)|vee(downarrow|uparrow)?|wedge(downarrow|uparrow)?)))|enterdot|lubsuit|ap)|Xi|Maps(to(char)?|from(char)?)|B(ox|umpeq|bbk)|t(h(ick(sim|approx)|e(ta|refore))|imes|op|wohead(leftarrow|rightarrow)|a(u|lloblong)|riangle(down|q|left(eq(slant)?)?|right(eq(slant)?)?)?)|i(n(t(er(cal|leave))?|plus|fty)?|ota|math)|S(igma|u(pset|bset))|zeta|o(slash|times|int|dot|plus|vee|wedge|lessthan|greaterthan|m(inus|ega)|b(slash|long|ar))|d(i(v(ideontimes)?|a(g(down|up)|mond(suit)?)|gamma)|o(t(plus|eq(dot)?)|ublebarwedge|wn(harpoon(left|right)|downarrows|arrow))|d(ots|agger)|elta|a(sh(v|leftarrow|rightarrow)|leth|gger))|Y(down|up|left|right)|C(up|ap)|u(n(lhd|rhd)|p(silon|harpoon(left|right)|downarrow|uparrows|lus|arrow)|lcorner|rcorner)|jmath|Theta|Im|p(si|hi|i(tchfork)?|erp|ar(tial|allel)|r(ime|o(d|pto)|ec(sim|n(sim|approx)|curlyeq|eq|approx)?)|m)|e(t(h|a)|psilon|q(slant(less|gtr)|circ|uiv)|ll|xists|mptyset)|Omega|D(iamond|ownarrow|elta)|v(d(ots|ash)|ee(bar)?|Dash|ar(s(igma|u(psetneq(q)?|bsetneq(q)?))|nothing|curly(vee|wedge)|t(heta|imes|riangle(left|right)?)|o(slash|circle|times|dot|plus|vee|wedge|lessthan|ast|greaterthan|minus|b(slash|ar))|p(hi|i|ropto)|epsilon|kappa|rho|bigcirc))|kappa|Up(silon|downarrow|arrow)|Join|f(orall|lat|a(t(s(emi|lash)|bslash)|llingdotseq)|rown)|P(si|hi|i)|w(p|edge|r)|l(hd|n(sim|eq(q)?|approx)|ceil|times|ightning|o(ng(left(arrow|rightarrow)|rightarrow|maps(to|from))|zenge|oparrow(left|right))|dot(s|p)|e(ss(sim|dot|eq(qgtr|gtr)|approx|gtr)|q(slant|q)?|ft(slice|harpoon(down|up)|threetimes|leftarrows|arrow(t(ail|riangle))?|right(squigarrow|harpoons|arrow(s|triangle|eq)?))|adsto)|vertneqq|floor|l(c(orner|eil)|floor|l|bracket)?|a(ngle|mbda)|rcorner|bag)|a(s(ymp|t)|ngle|pprox(eq)?|l(pha|eph)|rrownot|malg)|V(dash|vdash)|r(h(o|d)|ceil|times|i(singdotseq|ght(s(quigarrow|lice)|harpoon(down|up)|threetimes|left(harpoons|arrows)|arrow(t(ail|riangle))?|rightarrows))|floor|angle|r(ceil|parenthesis|floor|bracket)|bag)|g(n(sim|eq(q)?|approx)|tr(sim|dot|eq(qless|less)|less|approx)|imel|eq(slant|q)?|vertneqq|amma|g(g)?)|Finv|xi|m(ho|i(nuso|d)|o(o|dels)|u(ltimap)?|p|e(asuredangle|rge)|aps(to|from(char)?))|b(i(n(dnasrepma|ampersand)|g(s(tar|qc(up|ap))|nplus|c(irc|u(p|rly(vee|wedge))|ap)|triangle(down|up)|interleave|o(times|dot|plus)|uplus|parallel|vee|wedge|box))|o(t|wtie|x(slash|circle|times|dot|plus|empty|ast|minus|b(slash|ox|ar)))|u(llet|mpeq)|e(cause|t(h|ween|a))|lack(square|triangle(down|left|right)?|lozenge)|a(ck(s(im(eq)?|lash)|prime|epsilon)|r(o|wedge))|bslash)|L(sh|ong(left(arrow|rightarrow)|rightarrow|maps(to|from))|eft(arrow|rightarrow)|leftarrow|ambda|bag)|Arrownot)(?![a-zA-Z@])",
                    name: "constant.character.math.tex"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.constant.math.tex"
                        }
                    },
                    match: "(\\\\)(sum|prod|coprod|int|oint|bigcap|bigcup|bigsqcup|bigvee|bigwedge|bigodot|bigotimes|bogoplus|biguplus)\\b",
                    name: "constant.character.math.tex"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.constant.math.tex"
                        }
                    },
                    match: "(\\\\)(arccos|arcsin|arctan|arg|cos|cosh|cot|coth|csc|deg|det|dim|exp|gcd|hom|inf|ker|lg|lim|liminf|limsup|ln|log|max|min|pr|sec|sin|sinh|sup|tan|tanh)\\b",
                    name: "constant.other.math.tex"
                },
                {
                    begin: "((\\\\)Sexpr(\\{))",
                    beginCaptures: {
                        1: {
                            name: "support.function.sexpr.math.tex"
                        },
                        2: {
                            name: "punctuation.definition.function.math.tex"
                        },
                        3: {
                            name: "punctuation.section.embedded.begin.math.tex"
                        }
                    },
                    contentName: "support.function.sexpr.math.tex",
                    end: "(((\\})))",
                    endCaptures: {
                        1: {
                            name: "support.function.sexpr.math.tex"
                        },
                        2: {
                            name: "punctuation.section.embedded.end.math.tex"
                        },
                        3: {
                            name: "source.r"
                        }
                    },
                    name: "meta.embedded.line.r",
                    patterns: [
                        {
                            begin: "\\G(?!\\})",
                            end: "(?=\\})",
                            name: "source.r",
                            patterns: [
                                {
                                    include: "source.r"
                                }
                            ]
                        }
                    ]
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.constant.math.tex"
                        }
                    },
                    match: "(\\\\)(?!begin\\{|verb)([A-Za-z]+)",
                    name: "constant.other.general.math.tex"
                },
                {
                    match: "(?<!\\\\)\\{",
                    name: "punctuation.math.begin.bracket.curly.tex"
                },
                {
                    match: "(?<!\\\\)\\}",
                    name: "punctuation.math.end.bracket.curly.tex"
                },
                {
                    match: "(?<!\\\\)\\(",
                    name: "punctuation.math.begin.bracket.round.tex"
                },
                {
                    match: "(?<!\\\\)\\)",
                    name: "punctuation.math.end.bracket.round.tex"
                },
                {
                    match: "(([0-9]*[\\.][0-9]+)|[0-9]+)",
                    name: "constant.numeric.math.tex"
                },
                {
                    match: "[\\+\\*/_\\^-]",
                    name: "punctuation.math.operator.tex"
                }
            ]
        }
    },
    scopeName: "text.tex",
    embeddedLangs: [
        "r"
    ]
});
var n = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$r$2d$DU7Q70f1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    t
];
;
}}),
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
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/haskell-BfFu8DD8.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>n)
});
const e = Object.freeze({
    displayName: "Haskell",
    fileTypes: [
        "hs",
        "hs-boot",
        "hsig"
    ],
    name: "haskell",
    patterns: [
        {
            include: "#liquid_haskell"
        },
        {
            include: "#comment_like"
        },
        {
            include: "#numeric_literals"
        },
        {
            include: "#string_literal"
        },
        {
            include: "#char_literal"
        },
        {
            match: "(?<!@|#)-\\}",
            name: "invalid"
        },
        {
            captures: {
                1: {
                    name: "punctuation.paren.haskell"
                },
                2: {
                    name: "punctuation.paren.haskell"
                }
            },
            match: "(\\()\\s*(\\))",
            name: "constant.language.unit.haskell"
        },
        {
            captures: {
                1: {
                    name: "punctuation.paren.haskell"
                },
                2: {
                    name: "keyword.operator.hash.haskell"
                },
                3: {
                    name: "keyword.operator.hash.haskell"
                },
                4: {
                    name: "punctuation.paren.haskell"
                }
            },
            match: "(\\()(#)\\s*(#)(\\))",
            name: "constant.language.unit.unboxed.haskell"
        },
        {
            captures: {
                1: {
                    name: "punctuation.paren.haskell"
                },
                2: {
                    name: "punctuation.paren.haskell"
                }
            },
            match: "(\\()\\s*,[\\s,]*(\\))",
            name: "support.constant.tuple.haskell"
        },
        {
            captures: {
                1: {
                    name: "punctuation.paren.haskell"
                },
                2: {
                    name: "keyword.operator.hash.haskell"
                },
                3: {
                    name: "keyword.operator.hash.haskell"
                },
                4: {
                    name: "punctuation.paren.haskell"
                }
            },
            match: "(\\()(#)\\s*,[\\s,]*(#)(\\))",
            name: "support.constant.tuple.unboxed.haskell"
        },
        {
            captures: {
                1: {
                    name: "punctuation.bracket.haskell"
                },
                2: {
                    name: "punctuation.bracket.haskell"
                }
            },
            match: "(\\[)\\s*(\\])",
            name: "constant.language.empty-list.haskell"
        },
        {
            begin: "(\\b(?<!')(module)|^(signature))(\\b(?!'))",
            beginCaptures: {
                2: {
                    name: "keyword.other.module.haskell"
                },
                3: {
                    name: "keyword.other.signature.haskell"
                }
            },
            end: "(?=\\b(?<!')where\\b(?!'))",
            name: "meta.declaration.module.haskell",
            patterns: [
                {
                    include: "#comment_like"
                },
                {
                    include: "#module_name"
                },
                {
                    include: "#module_exports"
                },
                {
                    match: "[a-z]+",
                    name: "invalid"
                }
            ]
        },
        {
            include: "#ffi"
        },
        {
            begin: "^(\\s*)(class)(\\b(?!'))",
            beginCaptures: {
                2: {
                    name: "keyword.other.class.haskell"
                }
            },
            end: `(?x)

(?=(?<!')\\bwhere\\b(?!'))

|(?=\\}|;)
|^(?!
\\1\\s+\\S
| \\s*
(?: $
|\\{-[^@]
|--+
(?![\\p{S}\\p{P}&&[^(),;\\[\\]{}\`_"']]).*$)


)`,
            name: "meta.declaration.class.haskell",
            patterns: [
                {
                    include: "#comment_like"
                },
                {
                    include: "#where"
                },
                {
                    include: "#type_signature"
                }
            ]
        },
        {
            begin: `(?x)
^(\\s*)(data|newtype)(?:\\s+(instance))?\\s+

((?:(?!

(?:
(?<![\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']])
(?:=|--+)
(?![\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']])
)

| (?:\\b(?<!')(?:where|deriving)\\b(?!'))

| {-

).)*)
(?=\\b(?<!'')where\\b(?!''))`,
            beginCaptures: {
                2: {
                    name: "keyword.other.$2.haskell"
                },
                3: {
                    name: "keyword.other.instance.haskell"
                },
                4: {
                    patterns: [
                        {
                            include: "#type_signature"
                        }
                    ]
                }
            },
            end: `(?x)

(?=(?<!')\\bderiving\\b(?!'))

|(?=\\}|;)
|^(?!
\\1\\s+\\S
| \\s*
(?: $
|\\{-[^@]
|--+
(?![\\p{S}\\p{P}&&[^(),;\\[\\]{}\`_"']]).*$)


)
`,
            name: "meta.declaration.$2.generalized.haskell",
            patterns: [
                {
                    include: "#comment_like"
                },
                {
                    begin: `(?x)
(?<!')\\b(where)
\\s*(\\{)(?!-)`,
                    beginCaptures: {
                        1: {
                            name: "keyword.other.where.haskell"
                        },
                        2: {
                            name: "punctuation.brace.haskell"
                        }
                    },
                    end: "(\\})",
                    endCaptures: {
                        1: {
                            name: "punctuation.brace.haskell"
                        }
                    },
                    patterns: [
                        {
                            include: "#comment_like"
                        },
                        {
                            include: "#gadt_constructor"
                        },
                        {
                            match: ";",
                            name: "punctuation.semicolon.haskell"
                        }
                    ]
                },
                {
                    match: "\\b(?<!')(where)\\b(?!')",
                    name: "keyword.other.where.haskell"
                },
                {
                    include: "#deriving"
                },
                {
                    include: "#gadt_constructor"
                }
            ]
        },
        {
            include: "#role_annotation"
        },
        {
            begin: "^(\\s*)(pattern)\\s+(.*?)\\s+(::|∷)(?![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_\"']])",
            beginCaptures: {
                2: {
                    name: "keyword.other.pattern.haskell"
                },
                3: {
                    patterns: [
                        {
                            include: "#comma"
                        },
                        {
                            include: "#data_constructor"
                        }
                    ]
                },
                4: {
                    name: "keyword.operator.double-colon.haskell"
                }
            },
            end: `(?x)
(?=\\}|;)
|^(?!
\\1\\s+\\S
| \\s*
(?: $
|\\{-[^@]
|--+
(?![\\p{S}\\p{P}&&[^(),;\\[\\]{}\`_"']]).*$)


)
`,
            name: "meta.declaration.pattern.type.haskell",
            patterns: [
                {
                    include: "#type_signature"
                }
            ]
        },
        {
            begin: "^\\s*(pattern)\\b(?!')",
            captures: {
                1: {
                    name: "keyword.other.pattern.haskell"
                }
            },
            end: `(?x)
(?=\\}|;)
|^(?!
\\1\\s+\\S
| \\s*
(?: $
|\\{-[^@]
|--+
(?![\\p{S}\\p{P}&&[^(),;\\[\\]{}\`_"']]).*$)


)
`,
            name: "meta.declaration.pattern.haskell",
            patterns: [
                {
                    include: "$self"
                }
            ]
        },
        {
            begin: `(?x)

^(\\s*)(data|newtype)(?:\\s+(family|instance))?\\s+

(((?!

(?:
(?<![\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']])
(?:=|--+)
(?![\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']])
)

| (?:\\b(?<!')(?:where|deriving)\\b(?!'))

| {-

).)*)`,
            beginCaptures: {
                2: {
                    name: "keyword.other.$2.haskell"
                },
                3: {
                    name: "keyword.other.$3.haskell"
                },
                4: {
                    patterns: [
                        {
                            include: "#type_signature"
                        }
                    ]
                }
            },
            end: `(?x)

(?=\\}|;)
|^(?!
\\1\\s+\\S
| \\s*
(?: $
|\\{-[^@]
|--+
(?![\\p{S}\\p{P}&&[^(),;\\[\\]{}\`_"']]).*$)


)`,
            name: "meta.declaration.$2.algebraic.haskell",
            patterns: [
                {
                    include: "#comment_like"
                },
                {
                    include: "#deriving"
                },
                {
                    include: "#forall"
                },
                {
                    include: "#adt_constructor"
                },
                {
                    include: "#context"
                },
                {
                    include: "#record_decl"
                },
                {
                    include: "#type_signature"
                }
            ]
        },
        {
            begin: `(?x)

^(\\s*)(type)\\s+(family)\\b(?!')

(((?!

(?:
(?<![\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']])
(?:=|--+)
(?![\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']])
)

| \\b(?<!')where\\b(?!')

| {-

).)*)`,
            beginCaptures: {
                2: {
                    name: "keyword.other.type.haskell"
                },
                3: {
                    name: "keyword.other.family.haskell"
                },
                4: {
                    patterns: [
                        {
                            include: "#comment_like"
                        },
                        {
                            include: "#where"
                        },
                        {
                            include: "#type_signature"
                        }
                    ]
                }
            },
            end: `(?x)
(?=\\}|;)
|^(?!
\\1\\s+\\S
| \\s*
(?: $
|\\{-[^@]
|--+
(?![\\p{S}\\p{P}&&[^(),;\\[\\]{}\`_"']]).*$)


)
`,
            name: "meta.declaration.type.family.haskell",
            patterns: [
                {
                    include: "#comment_like"
                },
                {
                    include: "#where"
                },
                {
                    include: "#type_signature"
                }
            ]
        },
        {
            begin: `(?x)

^(\\s*)(type)(?:\\s+(instance))?\\s+

(((?!

(?:
(?<![\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']])
(?:=|--+|::|∷)
(?![\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']])
)

| {-

).)*)`,
            beginCaptures: {
                2: {
                    name: "keyword.other.type.haskell"
                },
                3: {
                    name: "keyword.other.instance.haskell"
                },
                4: {
                    patterns: [
                        {
                            include: "#type_signature"
                        }
                    ]
                }
            },
            end: `(?x)
(?=\\}|;)
|^(?!
\\1\\s+\\S
| \\s*
(?: $
|\\{-[^@]
|--+
(?![\\p{S}\\p{P}&&[^(),;\\[\\]{}\`_"']]).*$)


)
`,
            name: "meta.declaration.type.haskell",
            patterns: [
                {
                    include: "#type_signature"
                }
            ]
        },
        {
            begin: "^(\\s*)(instance)(\\b(?!'))",
            beginCaptures: {
                2: {
                    name: "keyword.other.instance.haskell"
                }
            },
            end: `(?x)

(?=\\b(?<!')(where)\\b(?!'))

|(?=\\}|;)
|^(?!
\\1\\s+\\S
| \\s*
(?: $
|\\{-[^@]
|--+
(?![\\p{S}\\p{P}&&[^(),;\\[\\]{}\`_"']]).*$)


)
`,
            name: "meta.declaration.instance.haskell",
            patterns: [
                {
                    include: "#comment_like"
                },
                {
                    include: "#where"
                },
                {
                    include: "#type_signature"
                }
            ]
        },
        {
            begin: "^(\\s*)(import)(\\b(?!'))",
            beginCaptures: {
                2: {
                    name: "keyword.other.import.haskell"
                }
            },
            end: `(?x)

(?=\\b(?<!')(where)\\b(?!'))

|(?=\\}|;)
|^(?!
\\1\\s+\\S
| \\s*
(?: $
|\\{-[^@]
|--+
(?![\\p{S}\\p{P}&&[^(),;\\[\\]{}\`_"']]).*$)


)
`,
            name: "meta.import.haskell",
            patterns: [
                {
                    include: "#comment_like"
                },
                {
                    include: "#where"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.other.$1.haskell"
                        }
                    },
                    match: "(qualified|as|hiding)"
                },
                {
                    include: "#module_name"
                },
                {
                    include: "#module_exports"
                }
            ]
        },
        {
            include: "#deriving"
        },
        {
            include: "#layout_herald"
        },
        {
            include: "#keyword"
        },
        {
            captures: {
                1: {
                    name: "keyword.other.$1.haskell"
                },
                2: {
                    patterns: [
                        {
                            include: "#comment_like"
                        },
                        {
                            include: "#integer_literals"
                        },
                        {
                            include: "#infix_op"
                        }
                    ]
                }
            },
            match: "^\\s*(infix[lr]?)\\s+(.*)",
            name: "meta.fixity-declaration.haskell"
        },
        {
            include: "#overloaded_label"
        },
        {
            include: "#type_application"
        },
        {
            include: "#reserved_symbol"
        },
        {
            include: "#fun_decl"
        },
        {
            include: "#qualifier"
        },
        {
            include: "#data_constructor"
        },
        {
            include: "#start_type_signature"
        },
        {
            include: "#prefix_op"
        },
        {
            include: "#infix_op"
        },
        {
            begin: "(\\()(#)\\s",
            beginCaptures: {
                1: {
                    name: "punctuation.paren.haskell"
                },
                2: {
                    name: "keyword.operator.hash.haskell"
                }
            },
            end: "(#)(\\))",
            endCaptures: {
                1: {
                    name: "keyword.operator.hash.haskell"
                },
                2: {
                    name: "punctuation.paren.haskell"
                }
            },
            patterns: [
                {
                    include: "#comma"
                },
                {
                    include: "$self"
                }
            ]
        },
        {
            begin: "(\\()",
            beginCaptures: {
                1: {
                    name: "punctuation.paren.haskell"
                }
            },
            end: "(\\))",
            endCaptures: {
                1: {
                    name: "punctuation.paren.haskell"
                }
            },
            patterns: [
                {
                    include: "#comma"
                },
                {
                    include: "$self"
                }
            ]
        },
        {
            include: "#quasi_quote"
        },
        {
            begin: "(\\[)",
            beginCaptures: {
                1: {
                    name: "punctuation.bracket.haskell"
                }
            },
            end: "(\\])",
            endCaptures: {
                1: {
                    name: "punctuation.bracket.haskell"
                }
            },
            patterns: [
                {
                    include: "#comma"
                },
                {
                    include: "$self"
                }
            ]
        },
        {
            include: "#record"
        }
    ],
    repository: {
        adt_constructor: {
            patterns: [
                {
                    include: "#comment_like"
                },
                {
                    begin: `(?x)
(?<![\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']])
(?:(=)|(\\|))
(?![\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']])`,
                    beginCaptures: {
                        1: {
                            name: "keyword.operator.eq.haskell"
                        },
                        2: {
                            name: "keyword.operator.pipe.haskell"
                        }
                    },
                    end: `(?x)
(?:\\G|^)\\s*
(?:

(?:

(?<!')\\b((?:[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'\\.])+)

| ('?
(?<paren>
\\(
(?:
[^\\(\\)]*
| \\g<paren>
)*
\\)
)
)

| ('?
(?<brac>
\\(
(?:
[^\\[\\]]*
| \\g<brac>
)*
\\]
)
)
)

\\s*

(?:(?<![\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']])(:[\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']]*)

| (\`)([\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)(\`)
)

)
|
(?:(?<!')\\b([\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*))
|
(\\()\\s*(:[\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']]*)\\s*(\\))`,
                    endCaptures: {
                        1: {
                            patterns: [
                                {
                                    include: "#type_signature"
                                }
                            ]
                        },
                        2: {
                            patterns: [
                                {
                                    include: "#type_signature"
                                }
                            ]
                        },
                        4: {
                            patterns: [
                                {
                                    include: "#type_signature"
                                }
                            ]
                        },
                        6: {
                            name: "constant.other.operator.haskell"
                        },
                        7: {
                            name: "punctuation.backtick.haskell"
                        },
                        8: {
                            name: "constant.other.haskell"
                        },
                        9: {
                            name: "punctuation.backtick.haskell"
                        },
                        10: {
                            name: "constant.other.haskell"
                        },
                        11: {
                            name: "punctuation.paren.haskell"
                        },
                        12: {
                            name: "constant.other.operator.haskell"
                        },
                        13: {
                            name: "punctuation.paren.haskell"
                        }
                    },
                    patterns: [
                        {
                            include: "#comment_like"
                        },
                        {
                            include: "#deriving"
                        },
                        {
                            include: "#record_decl"
                        },
                        {
                            include: "#forall"
                        },
                        {
                            include: "#context"
                        }
                    ]
                }
            ]
        },
        block_comment: {
            applyEndPatternLast: 1,
            begin: "\\{-",
            captures: {
                0: {
                    name: "punctuation.definition.comment.haskell"
                }
            },
            end: "-\\}",
            name: "comment.block.haskell",
            patterns: [
                {
                    include: "#block_comment"
                }
            ]
        },
        char_literal: {
            captures: {
                1: {
                    name: "punctuation.definition.string.begin.haskell"
                },
                2: {
                    name: "constant.character.escape.haskell"
                },
                3: {
                    name: "constant.character.escape.octal.haskell"
                },
                4: {
                    name: "constant.character.escape.hexadecimal.haskell"
                },
                5: {
                    name: "constant.character.escape.control.haskell"
                },
                6: {
                    name: "punctuation.definition.string.end.haskell"
                }
            },
            match: `(?x)
(?<![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])
(')
(?:
[\\ -\\[\\]-~]
| (\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE
|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS
|US|SP|DEL|[abfnrtv\\\\\\"'\\\\&]))
| (\\\\o[0-7]+)
| (\\\\x[0-9A-Fa-f]+)
| (\\\\\\^[A-Z@\\[\\]\\\\\\^_])
)
(')
`,
            name: "string.quoted.single.haskell"
        },
        comma: {
            match: ",",
            name: "punctuation.separator.comma.haskell"
        },
        comment_like: {
            patterns: [
                {
                    include: "#cpp"
                },
                {
                    include: "#pragma"
                },
                {
                    include: "#comments"
                }
            ]
        },
        comments: {
            patterns: [
                {
                    begin: "^(\\s*)(--\\s[\\|\\$])",
                    beginCaptures: {
                        2: {
                            name: "punctuation.whitespace.comment.leading.haskell"
                        }
                    },
                    end: "(?=^(?!\\1--+(?![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_\"']])))",
                    name: "comment.block.documentation.haskell"
                },
                {
                    begin: "(^[ \\t]+)?(--\\s[\\^\\*])",
                    beginCaptures: {
                        1: {
                            name: "punctuation.whitespace.comment.leading.haskell"
                        }
                    },
                    end: "\\n",
                    name: "comment.line.documentation.haskell"
                },
                {
                    applyEndPatternLast: 1,
                    begin: "\\{-\\s?[\\|\\$\\*\\^]",
                    captures: {
                        0: {
                            name: "punctuation.definition.comment.haskell"
                        }
                    },
                    end: "-\\}",
                    name: "comment.block.documentation.haskell",
                    patterns: [
                        {
                            include: "#block_comment"
                        }
                    ]
                },
                {
                    begin: "(^[ \\t]+)?(?=--+(?![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_\"']]))",
                    beginCaptures: {
                        1: {
                            name: "punctuation.whitespace.comment.leading.haskell"
                        }
                    },
                    comment: "Operators may begin with '--' as long as they are not entirely composed of '-' characters. This means comments can't be immediately followed by an allowable operator character.",
                    end: "(?!\\G)",
                    patterns: [
                        {
                            begin: "--",
                            beginCaptures: {
                                0: {
                                    name: "punctuation.definition.comment.haskell"
                                }
                            },
                            end: "\\n",
                            name: "comment.line.double-dash.haskell"
                        }
                    ]
                },
                {
                    include: "#block_comment"
                }
            ]
        },
        context: {
            captures: {
                1: {
                    patterns: [
                        {
                            include: "#comment_like"
                        },
                        {
                            include: "#type_signature"
                        }
                    ]
                },
                2: {
                    name: "keyword.operator.big-arrow.haskell"
                }
            },
            match: `(?x)
(.*)
(?<![\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']])
(=>|⇒)
(?![\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']])
`
        },
        cpp: {
            captures: {
                1: {
                    name: "punctuation.definition.preprocessor.c"
                }
            },
            comment: `In addition to Haskell's "native" syntax, GHC permits the C preprocessor to be run on a source file.`,
            match: "^(#).*$",
            name: "meta.preprocessor.c"
        },
        data_constructor: {
            match: "\\b(?<!')[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?![\\.'\\w])",
            name: "constant.other.haskell"
        },
        deriving: {
            patterns: [
                {
                    begin: "^(\\s*)(deriving)\\s+(?:(via|stock|newtype|anyclass)\\s+)?",
                    beginCaptures: {
                        2: {
                            name: "keyword.other.deriving.haskell"
                        },
                        3: {
                            name: "keyword.other.deriving.strategy.$3.haskell"
                        }
                    },
                    end: `(?x)

(?=\\}|;)
|^(?!
\\1\\s+\\S
| \\s*
(?: $
|\\{-[^@]
|--+
(?![\\p{S}\\p{P}&&[^(),;\\[\\]{}\`_"']]).*$)


)`,
                    name: "meta.deriving.haskell",
                    patterns: [
                        {
                            include: "#comment_like"
                        },
                        {
                            match: "(?<!')\\b(instance)\\b(?!')",
                            name: "keyword.other.instance.haskell"
                        },
                        {
                            captures: {
                                1: {
                                    name: "keyword.other.deriving.strategy.$1.haskell"
                                }
                            },
                            match: "(?<!')\\b(via|stock|newtype|anyclass)\\b(?!')"
                        },
                        {
                            include: "#type_signature"
                        }
                    ]
                },
                {
                    begin: "(deriving)(?:\\s+(stock|newtype|anyclass))?\\s*(\\()",
                    beginCaptures: {
                        1: {
                            name: "keyword.other.deriving.haskell"
                        },
                        2: {
                            name: "keyword.other.deriving.strategy.$2.haskell"
                        },
                        3: {
                            name: "punctuation.paren.haskell"
                        }
                    },
                    end: "(\\))",
                    endCaptures: {
                        1: {
                            name: "punctuation.paren.haskell"
                        }
                    },
                    name: "meta.deriving.haskell",
                    patterns: [
                        {
                            include: "#type_signature"
                        }
                    ]
                },
                {
                    captures: {
                        1: {
                            name: "keyword.other.deriving.haskell"
                        },
                        2: {
                            name: "keyword.other.deriving.strategy.$2.haskell"
                        },
                        3: {
                            patterns: [
                                {
                                    include: "#type_signature"
                                }
                            ]
                        },
                        5: {
                            name: "keyword.other.deriving.strategy.via.haskell"
                        },
                        6: {
                            patterns: [
                                {
                                    include: "#type_signature"
                                }
                            ]
                        }
                    },
                    match: `(?x)
(deriving)(?:\\s+(stock|newtype|anyclass))?\\s+
([\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)
(\\s+(via)\\s+(.*)$)?
`,
                    name: "meta.deriving.haskell"
                },
                {
                    match: "(?<!')\\b(via)\\b(?!')",
                    name: "keyword.other.deriving.strategy.via.haskell"
                }
            ]
        },
        double_colon: {
            captures: {
                1: {
                    name: "keyword.operator.double-colon.haskell"
                }
            },
            match: "\\s*(::|∷)(?![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_\"']])\\s*"
        },
        export_constructs: {
            patterns: [
                {
                    include: "#comment_like"
                },
                {
                    begin: "\\b(?<!')(pattern)\\b(?!')",
                    beginCaptures: {
                        1: {
                            name: "keyword.other.pattern.haskell"
                        }
                    },
                    end: `(?x)

([\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)

| (\\()\\s*(:[\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']]+)\\s*(\\))`,
                    endCaptures: {
                        1: {
                            name: "constant.other.haskell"
                        },
                        2: {
                            name: "punctuation.paren.haskell"
                        },
                        3: {
                            name: "constant.other.operator.haskell"
                        },
                        4: {
                            name: "punctuation.paren.haskell"
                        }
                    },
                    patterns: [
                        {
                            include: "#comment_like"
                        }
                    ]
                },
                {
                    begin: "\\b(?<!')(type)\\b(?!')",
                    beginCaptures: {
                        1: {
                            name: "keyword.other.type.haskell"
                        }
                    },
                    end: `(?x)

([\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)

| (\\()\\s*([\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']]+)\\s*(\\))`,
                    endCaptures: {
                        1: {
                            name: "storage.type.haskell"
                        },
                        2: {
                            name: "punctuation.paren.haskell"
                        },
                        3: {
                            name: "storage.type.operator.haskell"
                        },
                        4: {
                            name: "punctuation.paren.haskell"
                        }
                    },
                    patterns: [
                        {
                            include: "#comment_like"
                        }
                    ]
                },
                {
                    match: "(?<!')\\b[\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*",
                    name: "entity.name.function.haskell"
                },
                {
                    match: "(?<!')\\b[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*",
                    name: "storage.type.haskell"
                },
                {
                    include: "#record_wildcard"
                },
                {
                    include: "#reserved_symbol"
                },
                {
                    include: "#prefix_op"
                }
            ]
        },
        ffi: {
            begin: "^(\\s*)(foreign)\\s+(import|export)\\s+",
            beginCaptures: {
                2: {
                    name: "keyword.other.foreign.haskell"
                },
                3: {
                    name: "keyword.other.$3.haskell"
                }
            },
            end: `(?x)
(?=\\}|;)
|^(?!
\\1\\s+\\S
| \\s*
(?: $
|\\{-[^@]
|--+
(?![\\p{S}\\p{P}&&[^(),;\\[\\]{}\`_"']]).*$)


)
`,
            name: "meta.$3.foreign.haskell",
            patterns: [
                {
                    include: "#comment_like"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.other.calling-convention.$1.haskell"
                        }
                    },
                    match: "\\b(?<!')(ccall|cplusplus|dotnet|jvm|stdcall|prim|capi)\\s+"
                },
                {
                    begin: `(?=")|(?=\\b(?<!')([\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)\\b(?!'))`,
                    end: "(?=(::|∷)(?![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_\"']]))",
                    patterns: [
                        {
                            include: "#comment_like"
                        },
                        {
                            captures: {
                                1: {
                                    name: "keyword.other.safety.$1.haskell"
                                },
                                2: {
                                    name: "entity.name.foreign.haskell",
                                    patterns: [
                                        {
                                            include: "#string_literal"
                                        }
                                    ]
                                },
                                3: {
                                    name: "entity.name.function.haskell"
                                },
                                4: {
                                    name: "entity.name.function.infix.haskell"
                                }
                            },
                            match: `(?x)
\\b(?<!')(safe|unsafe|interruptible)\\b(?!')
\\s*
("(?:\\\\"|[^"])*")?
\\s*
(?:
(?:\\b(?<!'')([\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)\\b(?!'))
|(?:\\(\\s*(?!--+\\))([\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']]+)\\s*\\))
)
`
                        },
                        {
                            captures: {
                                1: {
                                    name: "keyword.other.safety.$1.haskell"
                                },
                                2: {
                                    name: "entity.name.foreign.haskell",
                                    patterns: [
                                        {
                                            include: "#string_literal"
                                        }
                                    ]
                                }
                            },
                            match: `(?x)
\\b(?<!')(safe|unsafe|interruptible)\\b(?!')
\\s*
("(?:\\\\"|[^"])*")?
\\s*$
`
                        },
                        {
                            captures: {
                                0: {
                                    name: "entity.name.foreign.haskell",
                                    patterns: [
                                        {
                                            include: "#string_literal"
                                        }
                                    ]
                                }
                            },
                            match: `(?x)
"(?:\\\\"|[^"])*"`
                        },
                        {
                            captures: {
                                1: {
                                    name: "entity.name.function.haskell"
                                },
                                2: {
                                    name: "punctuation.paren.haskell"
                                },
                                3: {
                                    name: "entity.name.function.infix.haskell"
                                },
                                4: {
                                    name: "punctuation.paren.haskell"
                                }
                            },
                            match: `(?x)
(?:\\b(?<!'')([\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)\\b(?!'))
|(?:(\\()\\s*(?!--+\\))([\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']]+)\\s*(\\)))
`
                        }
                    ]
                },
                {
                    include: "#double_colon"
                },
                {
                    include: "#type_signature"
                }
            ]
        },
        float_literals: {
            captures: {
                1: {
                    name: "constant.numeric.floating.decimal.haskell"
                },
                2: {
                    name: "constant.numeric.floating.hexadecimal.haskell"
                }
            },
            comment: "Floats are decimal or hexadecimal",
            match: `(?x)
\\b(?<!')
(?:
([0-9][_0-9]*\\.[0-9][_0-9]*(?:[eE][-+]?[0-9][_0-9]*)?
|[0-9][_0-9]*[eE][-+]?[0-9][_0-9]*
)
|
(0[xX]_*[0-9a-fA-F][_0-9a-fA-F]*\\.[0-9a-fA-F][_0-9a-fA-F]*(?:[pP][-+]?[0-9][_0-9]*)?
|0[xX]_*[0-9a-fA-F][_0-9a-fA-F]*[pP][-+]?[0-9][_0-9]*
)
)\\b(?!')`
        },
        forall: {
            begin: "\\b(?<!')(forall|∀)\\b(?!')",
            beginCaptures: {
                1: {
                    name: "keyword.other.forall.haskell"
                }
            },
            end: "(\\.)|(->|→)",
            endCaptures: {
                1: {
                    name: "keyword.operator.period.haskell"
                },
                2: {
                    name: "keyword.operator.arrow.haskell"
                }
            },
            patterns: [
                {
                    include: "#comment_like"
                },
                {
                    include: "#type_variable"
                },
                {
                    include: "#type_signature"
                }
            ]
        },
        fun_decl: {
            begin: `(?x)^(\\s*)
(?<fn>
(?:
[\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*\\#*
| \\(\\s*
(?!--+\\))
[\\p{S}\\p{P}&&[^(),:;\\[\\]\`{}_"']]
[\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']]*
\\s*\\)
)
(?:\\s*,\\s*\\g<fn>)?
)
\\s*(?<![\\p{S}\\p{P}&&[^\\),;\\]\`}_"']])(::|∷)(?![\\p{S}\\p{P}&&[^\\(,;\\[\`{_"']])
`,
            beginCaptures: {
                2: {
                    name: "entity.name.function.haskell",
                    patterns: [
                        {
                            include: "#reserved_symbol"
                        },
                        {
                            include: "#prefix_op"
                        }
                    ]
                },
                3: {
                    name: "keyword.operator.double-colon.haskell"
                }
            },
            end: `(?x)


(?=

(?<![\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']])

((<-|←)|(=)|(-<|↢)|(-<<|⤛))

([(),;\\[\\]\`{}_"']|[^\\p{S}\\p{P}])
)

|(?=\\}|;)
|^(?!
\\1\\s+\\S
| \\s*
(?: $
|\\{-[^@]
|--+
(?![\\p{S}\\p{P}&&[^(),;\\[\\]{}\`_"']]).*$)


)
`,
            name: "meta.function.type-declaration.haskell",
            patterns: [
                {
                    include: "#type_signature"
                }
            ]
        },
        gadt_constructor: {
            patterns: [
                {
                    begin: `(?x)
^(\\s*)
(?:
(\\b(?<!')[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)
|(\\()\\s*(:[\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']]*)\\s*(\\))
)`,
                    beginCaptures: {
                        2: {
                            name: "constant.other.haskell"
                        },
                        3: {
                            name: "punctuation.paren.haskell"
                        },
                        4: {
                            name: "constant.other.operator.haskell"
                        },
                        5: {
                            name: "punctuation.paren.haskell"
                        }
                    },
                    end: `(?x)

(?=\\b(?<!'')deriving\\b(?!'))

|(?=\\}|;)
|^(?!
\\1\\s+\\S
| \\s*
(?: $
|\\{-[^@]
|--+
(?![\\p{S}\\p{P}&&[^(),;\\[\\]{}\`_"']]).*$)


)
`,
                    patterns: [
                        {
                            include: "#comment_like"
                        },
                        {
                            include: "#deriving"
                        },
                        {
                            include: "#double_colon"
                        },
                        {
                            include: "#record_decl"
                        },
                        {
                            include: "#type_signature"
                        }
                    ]
                },
                {
                    begin: `(?x)
(\\b(?<!')[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}]*)
|(\\()\\s*(:[\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']]*)\\s*(\\))`,
                    beginCaptures: {
                        1: {
                            name: "constant.other.haskell"
                        },
                        2: {
                            name: "punctuation.paren.haskell"
                        },
                        3: {
                            name: "constant.other.operator.haskell"
                        },
                        4: {
                            name: "punctuation.paren.haskell"
                        }
                    },
                    end: "$",
                    patterns: [
                        {
                            include: "#comment_like"
                        },
                        {
                            include: "#deriving"
                        },
                        {
                            include: "#double_colon"
                        },
                        {
                            include: "#record_decl"
                        },
                        {
                            include: "#type_signature"
                        }
                    ]
                }
            ]
        },
        infix_op: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "keyword.operator.promotion.haskell"
                        },
                        2: {
                            name: "entity.name.namespace.haskell"
                        },
                        3: {
                            name: "keyword.operator.infix.haskell"
                        }
                    },
                    comment: `In case this regex seems overly general, note that Haskell permits  the definition of new operators which can be nearly any string of  punctuation characters, such as $%^&*.
`,
                    match: `(?x)
((?:(?<!'')('')?[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'']*\\.)*)
(\\#+|[\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']]+(?<!\\#))`
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.backtick.haskell"
                        },
                        2: {
                            name: "entity.name.namespace.haskell"
                        },
                        3: {
                            patterns: [
                                {
                                    include: "#data_constructor"
                                }
                            ]
                        },
                        4: {
                            name: "punctuation.backtick.haskell"
                        }
                    },
                    comment: `In case this regex seems unusual for an infix operator, note that Haskell
allows any ordinary function application (elem 4 [1..10]) to be rewritten
as an infix expression (4 \`elem\` [1..10]).
`,
                    match: "(`)((?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'']*\\.)*)([\\p{Ll}\\p{Lu}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'']*)(`)",
                    name: "keyword.operator.function.infix.haskell"
                }
            ]
        },
        inline_phase: {
            begin: "\\[",
            beginCaptures: {
                0: {
                    name: "punctuation.bracket.haskell"
                }
            },
            end: "\\]",
            endCaptures: {
                0: {
                    name: "punctuation.bracket.haskell"
                }
            },
            name: "meta.inlining-phase.haskell",
            patterns: [
                {
                    match: "~",
                    name: "punctuation.tilde.haskell"
                },
                {
                    include: "#integer_literals"
                },
                {
                    match: "\\w*",
                    name: "invalid"
                }
            ]
        },
        integer_literals: {
            captures: {
                1: {
                    name: "constant.numeric.integral.decimal.haskell"
                },
                2: {
                    name: "constant.numeric.integral.hexadecimal.haskell"
                },
                3: {
                    name: "constant.numeric.integral.octal.haskell"
                },
                4: {
                    name: "constant.numeric.integral.binary.haskell"
                }
            },
            match: `(?x)
\\b(?<!')
(?:
([0-9][_0-9]*)
| (0[xX]_*[0-9a-fA-F][_0-9a-fA-F]*)
| (0[oO]_*[0-7][_0-7]*)
| (0[bB]_*[01][_01]*)
)
\\b(?!')`
        },
        keyword: {
            captures: {
                1: {
                    name: "keyword.other.$1.haskell"
                },
                2: {
                    name: "keyword.control.$2.haskell"
                }
            },
            match: "\\b(?<!')(?:(where|let|in|default)|(m?do|if|then|else|case|of|proc|rec))\\b(?!')"
        },
        layout_herald: {
            begin: `(?x)
(?<!')\\b(?:(where|let|m?do)|(of))
\\s*(\\{)(?!-)`,
            beginCaptures: {
                1: {
                    name: "keyword.other.$1.haskell"
                },
                2: {
                    name: "keyword.control.of.haskell"
                },
                3: {
                    name: "punctuation.brace.haskell"
                }
            },
            end: "(\\})",
            endCaptures: {
                1: {
                    name: "punctuation.brace.haskell"
                }
            },
            patterns: [
                {
                    include: "$self"
                },
                {
                    match: ";",
                    name: "punctuation.semicolon.haskell"
                }
            ]
        },
        liquid_haskell: {
            begin: "\\{-@",
            end: "@-\\}",
            name: "block.liquidhaskell.haskell",
            patterns: [
                {
                    include: "$self"
                }
            ]
        },
        module_exports: {
            applyEndPatternLast: 1,
            begin: "\\(",
            beginCaptures: {
                0: {
                    name: "punctuation.paren.haskell"
                }
            },
            end: "\\)",
            endCaptures: {
                0: {
                    name: "punctuation.paren.haskell"
                }
            },
            name: "meta.declaration.exports.haskell",
            patterns: [
                {
                    include: "#comment_like"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.other.module.haskell"
                        }
                    },
                    match: "\\b(?<!')(module)\\b(?!')"
                },
                {
                    include: "#comma"
                },
                {
                    include: "#export_constructs"
                },
                {
                    begin: "\\(",
                    beginCaptures: {
                        0: {
                            name: "punctuation.paren.haskell"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.paren.haskell"
                        }
                    },
                    patterns: [
                        {
                            include: "#comment_like"
                        },
                        {
                            include: "#record_wildcard"
                        },
                        {
                            include: "#export_constructs"
                        },
                        {
                            include: "#comma"
                        }
                    ]
                }
            ]
        },
        module_name: {
            match: "(?<conid>[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(\\.\\g<conid>)?)",
            name: "entity.name.namespace.haskell"
        },
        numeric_literals: {
            patterns: [
                {
                    include: "#float_literals"
                },
                {
                    include: "#integer_literals"
                }
            ]
        },
        overloaded_label: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "keyword.operator.prefix.hash.haskell"
                        },
                        2: {
                            patterns: [
                                {
                                    include: "#string_literal"
                                }
                            ]
                        }
                    },
                    match: `(?x)
(?<![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\\p{S}\\p{P}&&[^(,;\\[\`{]])
(\\#)
(?:

("(?:\\\\"|[^"])*")

|[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'\\.]+
)`,
                    name: "entity.name.label.haskell"
                }
            ]
        },
        pragma: {
            begin: "\\{-#",
            end: "#-\\}",
            name: "meta.preprocessor.haskell",
            patterns: [
                {
                    begin: "(?xi) \\b(?<!')(LANGUAGE)\\b(?!')",
                    beginCaptures: {
                        1: {
                            name: "keyword.other.preprocessor.pragma.haskell"
                        }
                    },
                    end: "(?=#-\\})",
                    patterns: [
                        {
                            match: `(?x)
(?:No)?
(?:AutoDeriveTypeable|DatatypeContexts|DoRec|IncoherentInstances|MonadFailDesugaring|MonoPatBinds|NullaryTypeClasses|OverlappingInstances|PatternSignatures|RecordPuns|RelaxedPolyRec)`,
                            name: "invalid.deprecated"
                        },
                        {
                            captures: {
                                1: {
                                    name: "keyword.other.preprocessor.extension.haskell"
                                }
                            },
                            match: `(?x)
(
(?:No)?
(?:AllowAmbiguousTypes|AlternativeLayoutRule|AlternativeLayoutRuleTransitional|Arrows|BangPatterns|BinaryLiterals|CApiFFI|CPP|CUSKs|ConstrainedClassMethods|ConstraintKinds|DataKinds|DefaultSignatures|DeriveAnyClass|DeriveDataTypeable|DeriveFoldable|DeriveFunctor|DeriveGeneric|DeriveLift|DeriveTraversable|DerivingStrategies|DerivingVia|DisambiguateRecordFields|DoAndIfThenElse|BlockArguments|DuplicateRecordFields|EmptyCase|EmptyDataDecls|EmptyDataDeriving|ExistentialQuantification|ExplicitForAll|ExplicitNamespaces|ExtendedDefaultRules|FlexibleContexts|FlexibleInstances|ForeignFunctionInterface|FunctionalDependencies|GADTSyntax|GADTs|GHCForeignImportPrim|Generali(?:s|z)edNewtypeDeriving|ImplicitParams|ImplicitPrelude|ImportQualifiedPost|ImpredicativeTypes|TypeFamilyDependencies|InstanceSigs|ApplicativeDo|InterruptibleFFI|JavaScriptFFI|KindSignatures|LambdaCase|LiberalTypeSynonyms|MagicHash|MonadComprehensions|MonoLocalBinds|MonomorphismRestriction|MultiParamTypeClasses|MultiWayIf|NumericUnderscores|NPlusKPatterns|NamedFieldPuns|NamedWildCards|NegativeLiterals|HexFloatLiterals|NondecreasingIndentation|NumDecimals|OverloadedLabels|OverloadedLists|OverloadedStrings|PackageImports|ParallelArrays|ParallelListComp|PartialTypeSignatures|PatternGuards|PatternSynonyms|PolyKinds|PolymorphicComponents|QuantifiedConstraints|PostfixOperators|QuasiQuotes|Rank2Types|RankNTypes|RebindableSyntax|RecordWildCards|RecursiveDo|RelaxedLayout|RoleAnnotations|ScopedTypeVariables|StandaloneDeriving|StarIsType|StaticPointers|Strict|StrictData|TemplateHaskell|TemplateHaskellQuotes|StandaloneKindSignatures|TraditionalRecordSyntax|TransformListComp|TupleSections|TypeApplications|TypeInType|TypeFamilies|TypeOperators|TypeSynonymInstances|UnboxedTuples|UnboxedSums|UndecidableInstances|UndecidableSuperClasses|UnicodeSyntax|UnliftedFFITypes|UnliftedNewtypes|ViewPatterns)
)`
                        },
                        {
                            include: "#comma"
                        }
                    ]
                },
                {
                    begin: `(?xi)
\\b(?<!')(SPECIALI(?:S|Z)E)
(?:
\\s*( \\[ [^\\[\\]]* \\])?\\s*
|\\s+
)
(instance)\\b(?!')`,
                    beginCaptures: {
                        1: {
                            name: "keyword.other.preprocessor.pragma.haskell"
                        },
                        2: {
                            patterns: [
                                {
                                    include: "#inline_phase"
                                }
                            ]
                        },
                        3: {
                            name: "keyword.other.instance.haskell"
                        }
                    },
                    end: "(?=#-\\})",
                    patterns: [
                        {
                            include: "#type_signature"
                        }
                    ]
                },
                {
                    begin: `(?xi)
\\b(?<!')(SPECIALI(?:S|Z)E)\\b(?!')
(?:\\s+(INLINE)\\b(?!'))?
(?:\\s*(\\[ [^\\[\\]]* \\])?)
\\s*`,
                    beginCaptures: {
                        1: {
                            name: "keyword.other.preprocessor.pragma.haskell"
                        },
                        2: {
                            name: "keyword.other.preprocessor.pragma.haskell"
                        },
                        3: {
                            patterns: [
                                {
                                    include: "#inline_phase"
                                }
                            ]
                        }
                    },
                    end: "(?=#-\\})",
                    patterns: [
                        {
                            include: "$self"
                        }
                    ]
                },
                {
                    match: `(?xi) \\b(?<!')
(LANGUAGE|OPTIONS_GHC|INCLUDE
|MINIMAL|UNPACK|OVERLAPS|INCOHERENT
|NOUNPACK|SOURCE|OVERLAPPING|OVERLAPPABLE|INLINE
|NOINLINE|INLINE?ABLE|CONLIKE|LINE|COLUMN|RULES
|COMPLETE)\\b(?!')`,
                    name: "keyword.other.preprocessor.haskell"
                },
                {
                    begin: "(?i)\\b(DEPRECATED|WARNING)\\b",
                    beginCaptures: {
                        1: {
                            name: "keyword.other.preprocessor.pragma.haskell"
                        }
                    },
                    end: "(?=#-\\})",
                    patterns: [
                        {
                            include: "#string_literal"
                        }
                    ]
                }
            ]
        },
        prefix_op: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "punctuation.paren.haskell"
                        },
                        2: {
                            name: "entity.name.function.infix.haskell"
                        },
                        3: {
                            name: "punctuation.paren.haskell"
                        }
                    },
                    comment: `An operator cannot be composed entirely of '-' characters;  instead, it should be matched as a comment.
`,
                    match: `(?x)
(\\()\\s*(?!(?:--+|\\.\\.)\\))(\\#+|[\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']]+(?<!\\#))\\s*(\\))`
                }
            ]
        },
        qualifier: {
            match: "\\b(?<!')[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*\\.",
            name: "entity.name.namespace.haskell"
        },
        quasi_quote: {
            patterns: [
                {
                    begin: `(?x)
(\\[)
(e|d|p)?
(\\|\\|?)`,
                    beginCaptures: {
                        1: {
                            name: "keyword.operator.quasi-quotation.begin.haskell"
                        },
                        2: {
                            name: "entity.name.quasi-quoter.haskell"
                        },
                        3: {
                            name: "keyword.operator.quasi-quotation.begin.haskell"
                        }
                    },
                    end: "\\3\\]",
                    endCaptures: {
                        0: {
                            name: "keyword.operator.quasi-quotation.end.haskell"
                        }
                    },
                    name: "meta.quasi-quotation.haskell",
                    patterns: [
                        {
                            include: "$self"
                        }
                    ]
                },
                {
                    begin: `(?x)
(\\[)
(t)
(\\|\\|?)`,
                    beginCaptures: {
                        1: {
                            name: "keyword.operator.quasi-quotation.begin.haskell"
                        },
                        2: {
                            name: "entity.name.quasi-quoter.haskell"
                        },
                        3: {
                            name: "keyword.operator.quasi-quotation.begin.haskell"
                        }
                    },
                    end: "\\3\\]",
                    endCaptures: {
                        0: {
                            name: "keyword.operator.quasi-quotation.end.haskell"
                        }
                    },
                    name: "meta.quasi-quotation.haskell",
                    patterns: [
                        {
                            include: "#type_signature"
                        }
                    ]
                },
                {
                    begin: `(?x)
(\\[)
(?:(\\$\\$)|(\\$))?
((?:[^\\s\\p{S}\\p{P}]|[\\.'_])*)
(\\|\\|?)`,
                    beginCaptures: {
                        1: {
                            name: "keyword.operator.quasi-quotation.begin.haskell"
                        },
                        2: {
                            name: "keyword.operator.prefix.double-dollar.haskell"
                        },
                        3: {
                            name: "keyword.operator.prefix.dollar.haskell"
                        },
                        4: {
                            name: "entity.name.quasi-quoter.haskell",
                            patterns: [
                                {
                                    include: "#qualifier"
                                }
                            ]
                        },
                        5: {
                            name: "keyword.operator.quasi-quotation.begin.haskell"
                        }
                    },
                    end: "\\5\\]",
                    endCaptures: {
                        0: {
                            name: "keyword.operator.quasi-quotation.end.haskell"
                        }
                    },
                    name: "meta.quasi-quotation.haskell"
                }
            ]
        },
        record: {
            begin: "({)(?!-)",
            beginCaptures: {
                1: {
                    name: "punctuation.brace.haskell"
                }
            },
            end: "(?<!-)(})",
            endCaptures: {
                1: {
                    name: "punctuation.brace.haskell"
                }
            },
            name: "meta.record.haskell",
            patterns: [
                {
                    include: "#comment_like"
                },
                {
                    include: "#record_field"
                }
            ]
        },
        record_decl: {
            begin: "({)(?!-)",
            beginCaptures: {
                1: {
                    name: "punctuation.brace.haskell"
                }
            },
            end: "(?<!-)(})",
            endCaptures: {
                1: {
                    name: "punctuation.brace.haskell"
                }
            },
            name: "meta.record.definition.haskell",
            patterns: [
                {
                    include: "#comment_like"
                },
                {
                    include: "#record_decl_field"
                }
            ]
        },
        record_decl_field: {
            begin: `(?x)
(?:([\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)
|(\\()\\s*([\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']]+)\\s*(\\))
)
`,
            beginCaptures: {
                1: {
                    name: "variable.other.member.definition.haskell"
                },
                2: {
                    name: "punctuation.paren.haskell"
                },
                3: {
                    name: "variable.other.member.definition.haskell"
                },
                4: {
                    name: "punctuation.paren.haskell"
                }
            },
            end: "(,)|(?=})",
            endCaptures: {
                1: {
                    name: "punctuation.comma.haskell"
                }
            },
            patterns: [
                {
                    include: "#comment_like"
                },
                {
                    include: "#comma"
                },
                {
                    include: "#double_colon"
                },
                {
                    include: "#type_signature"
                },
                {
                    include: "#record_decl_field"
                }
            ]
        },
        record_field: {
            patterns: [
                {
                    begin: `(?x)
(?:([\\p{Ll}\\p{Lu}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\\.']*)
|(\\()\\s*([\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']]+)\\s*(\\))
)
`,
                    beginCaptures: {
                        1: {
                            name: "variable.other.member.haskell",
                            patterns: [
                                {
                                    include: "#qualifier"
                                }
                            ]
                        },
                        2: {
                            name: "punctuation.paren.haskell"
                        },
                        3: {
                            name: "variable.other.member.haskell"
                        },
                        4: {
                            name: "punctuation.paren.haskell"
                        }
                    },
                    end: "(,)|(?=})",
                    endCaptures: {
                        1: {
                            name: "punctuation.comma.haskell"
                        }
                    },
                    patterns: [
                        {
                            include: "#comment_like"
                        },
                        {
                            include: "#comma"
                        },
                        {
                            include: "$self"
                        }
                    ]
                },
                {
                    include: "#record_wildcard"
                }
            ]
        },
        record_wildcard: {
            captures: {
                1: {
                    name: "variable.other.member.wildcard.haskell"
                }
            },
            match: `(?x)
(?<![\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']])
(\\.\\.)
(?![\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']])`
        },
        reserved_symbol: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "keyword.operator.double-dot.haskell"
                        },
                        2: {
                            name: "keyword.operator.colon.haskell"
                        },
                        3: {
                            name: "keyword.operator.eq.haskell"
                        },
                        4: {
                            name: "keyword.operator.lambda.haskell"
                        },
                        5: {
                            name: "keyword.operator.pipe.haskell"
                        },
                        6: {
                            name: "keyword.operator.arrow.left.haskell"
                        },
                        7: {
                            name: "keyword.operator.arrow.haskell"
                        },
                        8: {
                            name: "keyword.operator.arrow.left.tail.haskell"
                        },
                        9: {
                            name: "keyword.operator.arrow.left.tail.double.haskell"
                        },
                        10: {
                            name: "keyword.operator.arrow.tail.haskell"
                        },
                        11: {
                            name: "keyword.operator.arrow.tail.double.haskell"
                        },
                        12: {
                            name: "keyword.other.forall.haskell"
                        }
                    },
                    match: `(?x)
(?<![\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"'']])
(?:
(\\.\\.)
|(:)
|(=)
|(\\\\)
|(\\|)
|(<-|←)
|(->|→)
|(-<|↢)
|(-<<|⤛)
|(>-|⤚)
|(>>-|⤜)
|(∀)
)
(?![\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"'']])`
                },
                {
                    captures: {
                        1: {
                            name: "keyword.operator.postfix.hash.haskell"
                        }
                    },
                    match: `(?x)
(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\\p{S}\\p{P}&&[^\\#,;\\[\`{]])
(\\#+)
(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\\p{S}\\p{P}&&[^),;\\]\`}]])`
                },
                {
                    captures: {
                        1: {
                            name: "keyword.operator.infix.tight.at.haskell"
                        }
                    },
                    match: `(?x)
(?<=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\\)\\}\\]])
(@)
(?=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\\(\\[\\{])`
                },
                {
                    captures: {
                        1: {
                            name: "keyword.operator.prefix.tilde.haskell"
                        },
                        2: {
                            name: "keyword.operator.prefix.bang.haskell"
                        },
                        3: {
                            name: "keyword.operator.prefix.minus.haskell"
                        },
                        4: {
                            name: "keyword.operator.prefix.dollar.haskell"
                        },
                        5: {
                            name: "keyword.operator.prefix.double-dollar.haskell"
                        }
                    },
                    match: `(?x)
(?<![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\\p{S}\\p{P}&&[^(,;\\[\`{]])
(?:(~)|(!)|(-)|(\\$)|(\\$\\$))
(?=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\\(\\{\\[])`
                }
            ]
        },
        role_annotation: {
            patterns: [
                {
                    begin: "^(\\s*)(type)\\s+(role)\\b(?!')",
                    beginCaptures: {
                        2: {
                            name: "keyword.other.type.haskell"
                        },
                        3: {
                            name: "keyword.other.role.haskell"
                        }
                    },
                    end: `(?x)
(?=\\}|;)
|^(?!
\\1\\s+\\S
| \\s*
(?: $
|\\{-[^@]
|--+
(?![\\p{S}\\p{P}&&[^(),;\\[\\]{}\`_"']]).*$)


)`,
                    name: "meta.role-annotation.haskell",
                    patterns: [
                        {
                            include: "#comment_like"
                        },
                        {
                            include: "#type_constructor"
                        },
                        {
                            captures: {
                                1: {
                                    name: "keyword.other.role.$1.haskell"
                                }
                            },
                            match: "\\b(?<!')(nominal|representational|phantom)\\b(?!')"
                        }
                    ]
                }
            ]
        },
        start_type_signature: {
            patterns: [
                {
                    begin: "^(\\s*)(::|∷)(?![\\p{S}\\p{P}&&[^\\(,;\\[`{_\"']])\\s*",
                    beginCaptures: {
                        2: {
                            name: "keyword.operator.double-colon.haskell"
                        }
                    },
                    end: `(?x)

(?=
\\#?\\)
|\\]
|,
|(?<!')\\b(in|then|else|of)\\b(?!')
|
(?<![\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']])
(?:
(\\\\|λ)
|(<-|←)
|(=)
|(-<|↢)
|(-<<|⤛)
)
([(),;\\[\\]\`{}_"']|[^\\p{S}\\p{P}])
|(\\#|@)-\\}

| (?=\\}|;)
|^(?!
\\1\\s*\\S
| \\s*
(?: $
|\\{-[^@]
|--+
(?![\\p{S}\\p{P}&&[^(),;\\[\\]{}\`_"']]).*$)


)
)`,
                    name: "meta.type-declaration.haskell",
                    patterns: [
                        {
                            include: "#type_signature"
                        }
                    ]
                },
                {
                    begin: "(?<![\\p{S}\\p{P}&&[^\\(,;\\[`{_\"']])(::|∷)(?![\\p{S}\\p{P}&&[^\\(,;\\[`{_\"']])",
                    beginCaptures: {
                        1: {
                            name: "keyword.operator.double-colon.haskell"
                        }
                    },
                    end: `(?x)

(?=
\\#?\\)
|\\]
|,
|\\b(?<!')(in|then|else|of)\\b(?!')
|(\\#|@)-\\}
|
(?<![\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']])
(?:
(\\\\|λ)
|(<-|←)
|(=)
|(-<|↢)
|(-<<|⤛)
)
([(),;\\[\\]\`{}_"']|[^\\p{S}\\p{P}])

|(?=\\}|;)
|$
)`,
                    patterns: [
                        {
                            include: "#type_signature"
                        }
                    ]
                }
            ]
        },
        string_literal: {
            begin: '"',
            beginCaptures: {
                0: {
                    name: "punctuation.definition.string.begin.haskell"
                }
            },
            end: '"',
            endCaptures: {
                0: {
                    name: "punctuation.definition.string.end.haskell"
                }
            },
            name: "string.quoted.double.haskell",
            patterns: [
                {
                    match: `\\\\(NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"'\\&])`,
                    name: "constant.character.escape.haskell"
                },
                {
                    match: "\\\\o[0-7]+|\\\\x[0-9A-Fa-f]+|\\\\[0-9]+",
                    name: "constant.character.escape.octal.haskell"
                },
                {
                    match: "\\\\\\^[A-Z@\\[\\]\\\\\\^_]",
                    name: "constant.character.escape.control.haskell"
                },
                {
                    begin: "\\\\\\s",
                    beginCaptures: {
                        0: {
                            name: "constant.character.escape.begin.haskell"
                        }
                    },
                    end: "\\\\",
                    endCaptures: {
                        0: {
                            name: "constant.character.escape.end.haskell"
                        }
                    },
                    patterns: [
                        {
                            match: "\\S+",
                            name: "invalid.illegal.character-not-allowed-here.haskell"
                        }
                    ]
                }
            ]
        },
        type_application: {
            patterns: [
                {
                    begin: `(?<=[\\s,;\\[\\]{}"])(@)(')?(\\()`,
                    beginCaptures: {
                        1: {
                            name: "keyword.operator.prefix.at.haskell"
                        },
                        2: {
                            name: "keyword.operator.promotion.haskell"
                        },
                        3: {
                            name: "punctuation.paren.haskell"
                        }
                    },
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.paren.haskell"
                        }
                    },
                    name: "meta.type-application.haskell",
                    patterns: [
                        {
                            include: "#type_signature"
                        }
                    ]
                },
                {
                    begin: `(?<=[\\s,;\\[\\]{}"])(@)(')?(\\[)`,
                    beginCaptures: {
                        1: {
                            name: "keyword.operator.prefix.at.haskell"
                        },
                        2: {
                            name: "keyword.operator.promotion.haskell"
                        },
                        3: {
                            name: "punctuation.bracket.haskell"
                        }
                    },
                    end: "\\]",
                    endCaptures: {
                        0: {
                            name: "punctuation.bracket.haskell"
                        }
                    },
                    name: "meta.type-application.haskell",
                    patterns: [
                        {
                            include: "#type_signature"
                        }
                    ]
                },
                {
                    begin: '(?<=[\\s,;\\[\\]{}"])(@)(?=\\")',
                    beginCaptures: {
                        1: {
                            name: "keyword.operator.prefix.at.haskell"
                        }
                    },
                    end: '(?<=\\")',
                    name: "meta.type-application.haskell",
                    patterns: [
                        {
                            include: "#string_literal"
                        }
                    ]
                },
                {
                    begin: `(?<=[\\s,;\\[\\]{}"])(@)(?=[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])`,
                    beginCaptures: {
                        1: {
                            name: "keyword.operator.prefix.at.haskell"
                        }
                    },
                    end: "(?![\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}'])",
                    name: "meta.type-application.haskell",
                    patterns: [
                        {
                            include: "#type_signature"
                        }
                    ]
                }
            ]
        },
        type_constructor: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "keyword.operator.promotion.haskell"
                        },
                        2: {
                            name: "entity.name.namespace.haskell"
                        },
                        3: {
                            name: "storage.type.haskell"
                        }
                    },
                    match: `(?x)

(')?

((?:\\b[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*\\.)*)

(\\b[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)`
                },
                {
                    captures: {
                        1: {
                            name: "keyword.operator.promotion.haskell"
                        },
                        2: {
                            name: "punctuation.paren.haskell"
                        },
                        3: {
                            name: "entity.name.namespace.haskell"
                        },
                        4: {
                            name: "storage.type.operator.haskell"
                        },
                        5: {
                            name: "punctuation.paren.haskell"
                        }
                    },
                    match: `(?x)

(')?

(\\()\\s*

((?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*\\.)*)

([\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']]+)

\\s*(\\))`
                }
            ]
        },
        type_operator: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "keyword.operator.promotion.haskell"
                        },
                        2: {
                            name: "entity.name.namespace.haskell"
                        },
                        3: {
                            name: "storage.type.operator.infix.haskell"
                        }
                    },
                    match: `(?x)

(?:(?<!')('))?

((?:\\b[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*\\.)*)

(?![#@]?-})(\\#+|[\\p{S}\\p{P}&&[^(),;\\[\\]\`{}_"']]+(?<!\\#))
`
                },
                {
                    captures: {
                        1: {
                            name: "keyword.operator.promotion.haskell"
                        },
                        2: {
                            name: "punctuation.backtick.haskell"
                        },
                        3: {
                            name: "entity.name.namespace.haskell"
                        },
                        4: {
                            name: "storage.type.infix.haskell"
                        },
                        5: {
                            name: "punctuation.backtick.haskell"
                        }
                    },
                    match: `(?x)

(')?

(\\\`)

((?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*\\.)*)

([\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)

(\`)`
                }
            ]
        },
        type_signature: {
            patterns: [
                {
                    include: "#comment_like"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.operator.promotion.haskell"
                        },
                        2: {
                            name: "punctuation.paren.haskell"
                        },
                        3: {
                            name: "punctuation.paren.haskell"
                        }
                    },
                    match: "(')?(\\()\\s*(\\))",
                    name: "support.constant.unit.haskell"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.paren.haskell"
                        },
                        2: {
                            name: "keyword.operator.hash.haskell"
                        },
                        3: {
                            name: "keyword.operator.hash.haskell"
                        },
                        4: {
                            name: "punctuation.paren.haskell"
                        }
                    },
                    match: "(\\()(#)\\s*(#)(\\))",
                    name: "support.constant.unit.unboxed.haskell"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.operator.promotion.haskell"
                        },
                        2: {
                            name: "punctuation.paren.haskell"
                        },
                        3: {
                            name: "punctuation.paren.haskell"
                        }
                    },
                    match: "(')?(\\()\\s*,[\\s,]*(\\))",
                    name: "support.constant.tuple.haskell"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.paren.haskell"
                        },
                        2: {
                            name: "keyword.operator.hash.haskell"
                        },
                        3: {
                            name: "keyword.operator.hash.haskell"
                        },
                        4: {
                            name: "punctuation.paren.haskell"
                        }
                    },
                    match: "(\\()(#)\\s*(#)(\\))",
                    name: "support.constant.unit.unboxed.haskell"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.paren.haskell"
                        },
                        2: {
                            name: "keyword.operator.hash.haskell"
                        },
                        3: {
                            name: "keyword.operator.hash.haskell"
                        },
                        4: {
                            name: "punctuation.paren.haskell"
                        }
                    },
                    match: "(\\()(#)\\s*,[\\s,]*(#)(\\))",
                    name: "support.constant.tuple.unboxed.haskell"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.operator.promotion.haskell"
                        },
                        2: {
                            name: "punctuation.bracket.haskell"
                        },
                        3: {
                            name: "punctuation.bracket.haskell"
                        }
                    },
                    match: "(')?(\\[)\\s*(\\])",
                    name: "support.constant.empty-list.haskell"
                },
                {
                    include: "#integer_literals"
                },
                {
                    match: "(::|∷)(?![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_\"']])",
                    name: "keyword.operator.double-colon.haskell"
                },
                {
                    include: "#forall"
                },
                {
                    match: "=>|⇒",
                    name: "keyword.operator.big-arrow.haskell"
                },
                {
                    include: "#string_literal"
                },
                {
                    match: "'[^']'",
                    name: "invalid"
                },
                {
                    include: "#type_application"
                },
                {
                    include: "#reserved_symbol"
                },
                {
                    include: "#type_operator"
                },
                {
                    include: "#type_constructor"
                },
                {
                    begin: "(\\()(#)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.paren.haskell"
                        },
                        2: {
                            name: "keyword.operator.hash.haskell"
                        }
                    },
                    end: "(#)(\\))",
                    endCaptures: {
                        1: {
                            name: "keyword.operator.hash.haskell"
                        },
                        2: {
                            name: "punctuation.paren.haskell"
                        }
                    },
                    patterns: [
                        {
                            include: "#comma"
                        },
                        {
                            include: "#type_signature"
                        }
                    ]
                },
                {
                    begin: "(')?(\\()",
                    beginCaptures: {
                        1: {
                            name: "keyword.operator.promotion.haskell"
                        },
                        2: {
                            name: "punctuation.paren.haskell"
                        }
                    },
                    end: "(\\))",
                    endCaptures: {
                        1: {
                            name: "punctuation.paren.haskell"
                        }
                    },
                    patterns: [
                        {
                            include: "#comma"
                        },
                        {
                            include: "#type_signature"
                        }
                    ]
                },
                {
                    begin: "(')?(\\[)",
                    beginCaptures: {
                        1: {
                            name: "keyword.operator.promotion.haskell"
                        },
                        2: {
                            name: "punctuation.bracket.haskell"
                        }
                    },
                    end: "(\\])",
                    endCaptures: {
                        1: {
                            name: "punctuation.bracket.haskell"
                        }
                    },
                    patterns: [
                        {
                            include: "#comma"
                        },
                        {
                            include: "#type_signature"
                        }
                    ]
                },
                {
                    include: "#type_variable"
                }
            ]
        },
        type_variable: {
            match: "\\b(?<!')(?!(?:forall|deriving)\\b(?!'))[\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*",
            name: "variable.other.generic-type.haskell"
        },
        where: {
            patterns: [
                {
                    begin: `(?x)
(?<!')\\b(where)
\\s*(\\{)(?!-)`,
                    beginCaptures: {
                        1: {
                            name: "keyword.other.where.haskell"
                        },
                        2: {
                            name: "punctuation.brace.haskell"
                        }
                    },
                    end: "(\\})",
                    endCaptures: {
                        1: {
                            name: "punctuation.brace.haskell"
                        }
                    },
                    patterns: [
                        {
                            include: "$self"
                        },
                        {
                            match: ";",
                            name: "punctuation.semicolon.haskell"
                        }
                    ]
                },
                {
                    match: "\\b(?<!')(where)\\b(?!')",
                    name: "keyword.other.where.haskell"
                }
            ]
        }
    },
    scopeName: "source.haskell",
    aliases: [
        "hs"
    ]
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
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/glsl-DnS7pcDq.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>t)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$c$2d$eDnjw9rh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/c-eDnjw9rh.js [app-ssr] (ecmascript)");
;
const r = Object.freeze({
    displayName: "GLSL",
    fileTypes: [
        "vs",
        "fs",
        "gs",
        "vsh",
        "fsh",
        "gsh",
        "vshader",
        "fshader",
        "gshader",
        "vert",
        "frag",
        "geom",
        "f.glsl",
        "v.glsl",
        "g.glsl"
    ],
    foldingStartMarker: "/\\*\\*|\\{\\s*$",
    foldingStopMarker: "\\*\\*/|^\\s*\\}",
    name: "glsl",
    patterns: [
        {
            match: "\\b(break|case|continue|default|discard|do|else|for|if|return|switch|while)\\b",
            name: "keyword.control.glsl"
        },
        {
            match: "\\b(void|bool|int|uint|float|vec2|vec3|vec4|bvec2|bvec3|bvec4|ivec2|ivec2|ivec3|uvec2|uvec2|uvec3|mat2|mat3|mat4|mat2x2|mat2x3|mat2x4|mat3x2|mat3x3|mat3x4|mat4x2|mat4x3|mat4x4|sampler[1|2|3]D|samplerCube|sampler2DRect|sampler[1|2]DShadow|sampler2DRectShadow|sampler[1|2]DArray|sampler[1|2]DArrayShadow|samplerBuffer|sampler2DMS|sampler2DMSArray|struct|isampler[1|2|3]D|isamplerCube|isampler2DRect|isampler[1|2]DArray|isamplerBuffer|isampler2DMS|isampler2DMSArray|usampler[1|2|3]D|usamplerCube|usampler2DRect|usampler[1|2]DArray|usamplerBuffer|usampler2DMS|usampler2DMSArray)\\b",
            name: "storage.type.glsl"
        },
        {
            match: "\\b(attribute|centroid|const|flat|in|inout|invariant|noperspective|out|smooth|uniform|varying)\\b",
            name: "storage.modifier.glsl"
        },
        {
            match: "\\b(gl_BackColor|gl_BackLightModelProduct|gl_BackLightProduct|gl_BackMaterial|gl_BackSecondaryColor|gl_ClipDistance|gl_ClipPlane|gl_ClipVertex|gl_Color|gl_DepthRange|gl_DepthRangeParameters|gl_EyePlaneQ|gl_EyePlaneR|gl_EyePlaneS|gl_EyePlaneT|gl_Fog|gl_FogCoord|gl_FogFragCoord|gl_FogParameters|gl_FragColor|gl_FragCoord|gl_FragDat|gl_FragDept|gl_FrontColor|gl_FrontFacing|gl_FrontLightModelProduct|gl_FrontLightProduct|gl_FrontMaterial|gl_FrontSecondaryColor|gl_InstanceID|gl_Layer|gl_LightModel|gl_LightModelParameters|gl_LightModelProducts|gl_LightProducts|gl_LightSource|gl_LightSourceParameters|gl_MaterialParameters|gl_ModelViewMatrix|gl_ModelViewMatrixInverse|gl_ModelViewMatrixInverseTranspose|gl_ModelViewMatrixTranspose|gl_ModelViewProjectionMatrix|gl_ModelViewProjectionMatrixInverse|gl_ModelViewProjectionMatrixInverseTranspose|gl_ModelViewProjectionMatrixTranspose|gl_MultiTexCoord[0-7]|gl_Normal|gl_NormalMatrix|gl_NormalScale|gl_ObjectPlaneQ|gl_ObjectPlaneR|gl_ObjectPlaneS|gl_ObjectPlaneT|gl_Point|gl_PointCoord|gl_PointParameters|gl_PointSize|gl_Position|gl_PrimitiveIDIn|gl_ProjectionMatrix|gl_ProjectionMatrixInverse|gl_ProjectionMatrixInverseTranspose|gl_ProjectionMatrixTranspose|gl_SecondaryColor|gl_TexCoord|gl_TextureEnvColor|gl_TextureMatrix|gl_TextureMatrixInverse|gl_TextureMatrixInverseTranspose|gl_TextureMatrixTranspose|gl_Vertex|gl_VertexIDh)\\b",
            name: "support.variable.glsl"
        },
        {
            match: "\\b(gl_MaxClipPlanes|gl_MaxCombinedTextureImageUnits|gl_MaxDrawBuffers|gl_MaxFragmentUniformComponents|gl_MaxLights|gl_MaxTextureCoords|gl_MaxTextureImageUnits|gl_MaxTextureUnits|gl_MaxVaryingFloats|gl_MaxVertexAttribs|gl_MaxVertexTextureImageUnits|gl_MaxVertexUniformComponents)\\b",
            name: "support.constant.glsl"
        },
        {
            match: "\\b(abs|acos|all|any|asin|atan|ceil|clamp|cos|cross|degrees|dFdx|dFdy|distance|dot|equal|exp|exp2|faceforward|floor|fract|ftransform|fwidth|greaterThan|greaterThanEqual|inversesqrt|length|lessThan|lessThanEqual|log|log2|matrixCompMult|max|min|mix|mod|noise[1-4]|normalize|not|notEqual|outerProduct|pow|radians|reflect|refract|shadow1D|shadow1DLod|shadow1DProj|shadow1DProjLod|shadow2D|shadow2DLod|shadow2DProj|shadow2DProjLod|sign|sin|smoothstep|sqrt|step|tan|texture1D|texture1DLod|texture1DProj|texture1DProjLod|texture2D|texture2DLod|texture2DProj|texture2DProjLod|texture3D|texture3DLod|texture3DProj|texture3DProjLod|textureCube|textureCubeLod|transpose)\\b",
            name: "support.function.glsl"
        },
        {
            match: "\\b(asm|double|enum|extern|goto|inline|long|short|sizeof|static|typedef|union|unsigned|volatile)\\b",
            name: "invalid.illegal.glsl"
        },
        {
            include: "source.c"
        }
    ],
    scopeName: "source.glsl",
    embeddedLangs: [
        "c"
    ]
});
var t = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$c$2d$eDnjw9rh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    r
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
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/julia-DLg_x4fm.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>A)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$cpp$2d$a_Pl9yzy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/cpp-a_Pl9yzy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$python$2d$BQXev0_W$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/python-BQXev0_W.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$javascript$2d$DYrC$2d$pEL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/javascript-DYrC-pEL.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$r$2d$DU7Q70f1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/r-DU7Q70f1.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$sql$2d$DkzN59UV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/sql-DkzN59UV.js [app-ssr] (ecmascript)");
;
;
;
;
;
const i = Object.freeze({
    displayName: "Julia",
    name: "julia",
    patterns: [
        {
            include: "#operator"
        },
        {
            include: "#array"
        },
        {
            include: "#string"
        },
        {
            include: "#parentheses"
        },
        {
            include: "#bracket"
        },
        {
            include: "#function_decl"
        },
        {
            include: "#function_call"
        },
        {
            include: "#for_block"
        },
        {
            include: "#keyword"
        },
        {
            include: "#number"
        },
        {
            include: "#comment"
        },
        {
            include: "#type_decl"
        },
        {
            include: "#symbol"
        }
    ],
    repository: {
        array: {
            patterns: [
                {
                    begin: "\\[",
                    beginCaptures: {
                        0: {
                            name: "meta.bracket.julia"
                        }
                    },
                    end: "(\\])((?:\\.)?'*)",
                    endCaptures: {
                        1: {
                            name: "meta.bracket.julia"
                        },
                        2: {
                            name: "keyword.operator.transpose.julia"
                        }
                    },
                    name: "meta.array.julia",
                    patterns: [
                        {
                            match: "\\bbegin\\b",
                            name: "constant.numeric.julia"
                        },
                        {
                            match: "\\bend\\b",
                            name: "constant.numeric.julia"
                        },
                        {
                            include: "#self_no_for_block"
                        }
                    ]
                }
            ]
        },
        bracket: {
            patterns: [
                {
                    begin: "\\{",
                    beginCaptures: {
                        0: {
                            name: "meta.bracket.julia"
                        }
                    },
                    end: "(\\})((?:\\.)?'*)",
                    endCaptures: {
                        1: {
                            name: "meta.bracket.julia"
                        },
                        2: {
                            name: "keyword.operator.transpose.julia"
                        }
                    },
                    patterns: [
                        {
                            include: "#self_no_for_block"
                        }
                    ]
                }
            ]
        },
        comment: {
            patterns: [
                {
                    include: "#comment_block"
                },
                {
                    begin: "#",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.comment.julia"
                        }
                    },
                    end: "\\n",
                    name: "comment.line.number-sign.julia",
                    patterns: [
                        {
                            include: "#comment_tags"
                        }
                    ]
                }
            ]
        },
        comment_block: {
            patterns: [
                {
                    begin: "#=",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.comment.begin.julia"
                        }
                    },
                    end: "=#",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.comment.end.julia"
                        }
                    },
                    name: "comment.block.number-sign-equals.julia",
                    patterns: [
                        {
                            include: "#comment_tags"
                        },
                        {
                            include: "#comment_block"
                        }
                    ]
                }
            ]
        },
        comment_tags: {
            patterns: [
                {
                    match: "\\bTODO\\b",
                    name: "keyword.other.comment-annotation.julia"
                },
                {
                    match: "\\bFIXME\\b",
                    name: "keyword.other.comment-annotation.julia"
                },
                {
                    match: "\\bCHANGED\\b",
                    name: "keyword.other.comment-annotation.julia"
                },
                {
                    match: "\\bXXX\\b",
                    name: "keyword.other.comment-annotation.julia"
                }
            ]
        },
        for_block: {
            comment: "for blocks need to be special-cased to support tokenizing 'outer' properly",
            patterns: [
                {
                    begin: "\\b(for)\\b",
                    beginCaptures: {
                        0: {
                            name: "keyword.control.julia"
                        }
                    },
                    end: "(?<!,|\\s)(\\s*\\n)",
                    patterns: [
                        {
                            match: "\\bouter\\b",
                            name: "keyword.other.julia"
                        },
                        {
                            include: "$self"
                        }
                    ]
                }
            ]
        },
        function_call: {
            patterns: [
                {
                    begin: "((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}-¡]|[^\\P{Mc}-¡]|[^\\P{Nd}-¡]|[^\\P{Pc}-¡]|[^\\P{Sk}-¡]|[^\\P{Me}-¡]|[^\\P{No}-¡]|[′-‷⁗]|[^\\P{So}←-⇿])*)({(?:[^{}]|{(?:[^{}]|{[^{}]*})*})*})?\\.?(\\()",
                    beginCaptures: {
                        1: {
                            name: "support.function.julia"
                        },
                        2: {
                            name: "support.type.julia"
                        },
                        3: {
                            name: "meta.bracket.julia"
                        }
                    },
                    end: "\\)(('|(\\.'))*\\.?')?",
                    endCaptures: {
                        0: {
                            name: "meta.bracket.julia"
                        },
                        1: {
                            name: "keyword.operator.transposed-func.julia"
                        }
                    },
                    patterns: [
                        {
                            include: "#self_no_for_block"
                        }
                    ]
                }
            ]
        },
        function_decl: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "entity.name.function.julia"
                        },
                        2: {
                            name: "support.type.julia"
                        }
                    },
                    comment: `first group is function name
Second group is type parameters (e.g. {T<:Number, S})
Then open parens
Then a lookahead ensures that we are followed by:
  - anything (function arguments)
  - 0 or more spaces
  - Finally an equal sign
Negative lookahead ensures we don't have another equal sign (not \`==\`)`,
                    match: "((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}-¡]|[^\\P{Mc}-¡]|[^\\P{Nd}-¡]|[^\\P{Pc}-¡]|[^\\P{Sk}-¡]|[^\\P{Me}-¡]|[^\\P{No}-¡]|[′-‷⁗]|[^\\P{So}←-⇿])*)({(?:[^{}]|{(?:[^{}]|{[^{}]*})*})*})?(?=\\([^#]*\\)(::[^\\s]+)?(\\s*\\bwhere\\b\\s+.+?)?\\s*?=(?![=>]))"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.other.julia"
                        },
                        2: {
                            name: "keyword.operator.dots.julia"
                        },
                        3: {
                            name: "entity.name.function.julia"
                        },
                        4: {
                            name: "support.type.julia"
                        }
                    },
                    comment: "similar regex to previous, but with keyword not 1-line syntax",
                    match: "\\b(function|macro)(?:\\s+(?:(?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}-¡]|[^\\P{Mc}-¡]|[^\\P{Nd}-¡]|[^\\P{Pc}-¡]|[^\\P{Sk}-¡]|[^\\P{Me}-¡]|[^\\P{No}-¡]|[′-‷⁗]|[^\\P{So}←-⇿])*(\\.))?((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}-¡]|[^\\P{Mc}-¡]|[^\\P{Nd}-¡]|[^\\P{Pc}-¡]|[^\\P{Sk}-¡]|[^\\P{Me}-¡]|[^\\P{No}-¡]|[′-‷⁗]|[^\\P{So}←-⇿])*)({(?:[^{}]|{(?:[^{}]|{[^{}]*})*})*})?|\\s*)(?=\\()"
                }
            ]
        },
        keyword: {
            patterns: [
                {
                    match: "\\b(?<![:_\\.])(?:function|mutable\\s+struct|struct|macro|quote|abstract\\s+type|primitive\\s+type|module|baremodule|where)\\b",
                    name: "keyword.other.julia"
                },
                {
                    match: "\\b(?<![:_])(?:if|else|elseif|for|while|begin|let|do|try|catch|finally|return|break|continue)\\b",
                    name: "keyword.control.julia"
                },
                {
                    match: "\\b(?<![:_])end\\b",
                    name: "keyword.control.end.julia"
                },
                {
                    match: "\\b(?<![:_])(?:global|local|const)\\b",
                    name: "keyword.storage.modifier.julia"
                },
                {
                    match: "\\b(?<![:_])(?:export)\\b",
                    name: "keyword.control.export.julia"
                },
                {
                    match: "\\b(?<![:_])(?:import)\\b",
                    name: "keyword.control.import.julia"
                },
                {
                    match: "\\b(?<![:_])(?:using)\\b",
                    name: "keyword.control.using.julia"
                },
                {
                    match: "(?<=\\w\\s)\\b(as)\\b(?=\\s\\w)",
                    name: "keyword.control.as.julia"
                },
                {
                    match: "(@(\\.|(?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}-¡]|[^\\P{Mc}-¡]|[^\\P{Nd}-¡]|[^\\P{Pc}-¡]|[^\\P{Sk}-¡]|[^\\P{Me}-¡]|[^\\P{No}-¡]|[′-‷⁗]|[^\\P{So}←-⇿])*))",
                    name: "support.function.macro.julia"
                }
            ]
        },
        number: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "constant.numeric.julia"
                        },
                        2: {
                            name: "keyword.operator.conjugate-number.julia"
                        }
                    },
                    match: "((?<!(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}-¡]|[^\\P{Mc}-¡]|[^\\P{Nd}-¡]|[^\\P{Pc}-¡]|[^\\P{Sk}-¡]|[^\\P{Me}-¡]|[^\\P{No}-¡]|[′-‷⁗]|[^\\P{So}←-⇿]))(?:(?:\\b0(?:x|X)[0-9a-fA-F](?:_?[0-9a-fA-F])*)|(?:\\b0o[0-7](?:_?[0-7])*)|(?:\\b0b[0-1](?:_?[0-1])*)|(?:(?:\\b[0-9](?:_?[0-9])*\\.?(?!\\.)(?:[_0-9]*))|(?:\\b\\.[0-9](?:_?[0-9])*))(?:[efE][+-]?[0-9](?:_?[0-9])*)?(?:im\\b|Inf(?:16|32|64)?\\b|NaN(?:16|32|64)?\\b|π\\b|pi\\b|ℯ\\b)?|\\b[0-9]+|\\bInf(?:16|32|64)?\\b|\\bNaN(?:16|32|64)?\\b|\\bπ\\b|\\bpi\\b|\\bℯ\\b))('*)"
                },
                {
                    match: "\\bARGS\\b|\\bC_NULL\\b|\\bDEPOT_PATH\\b|\\bENDIAN_BOM\\b|\\bENV\\b|\\bLOAD_PATH\\b|\\bPROGRAM_FILE\\b|\\bstdin\\b|\\bstdout\\b|\\bstderr\\b|\\bVERSION\\b|\\bdevnull\\b",
                    name: "constant.global.julia"
                },
                {
                    match: "\\btrue\\b|\\bfalse\\b|\\bnothing\\b|\\bmissing\\b",
                    name: "constant.language.julia"
                }
            ]
        },
        operator: {
            patterns: [
                {
                    match: "(?:->|<-|-->|=>)",
                    name: "keyword.operator.arrow.julia"
                },
                {
                    match: "(?::=|\\+=|-=|\\*=|//=|/=|\\.//=|\\./=|\\.\\*=|\\\\=|\\.\\\\=|\\^=|\\.\\^=|%=|\\.%=|÷=|\\.÷=|\\|=|&=|\\.&=|⊻=|\\.⊻=|\\$=|<<=|>>=|>>>=|=(?!=))",
                    name: "keyword.operator.update.julia"
                },
                {
                    match: "(?:<<|>>>|>>|\\.>>>|\\.>>|\\.<<)",
                    name: "keyword.operator.shift.julia"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.operator.relation.types.julia"
                        },
                        2: {
                            name: "support.type.julia"
                        },
                        3: {
                            name: "keyword.operator.transpose.julia"
                        }
                    },
                    match: `(?:\\s*(::|>:|<:)\\s*((?:(?:Union)?\\([^)]*\\)|[[:alpha:]_$∇][[:word:]⁺-ₜ!′\\.]*(?:(?:{(?:[^{}]|{(?:[^{}]|{[^{}]*})*})*})|(?:".+?(?<!\\\\)"))?)))(?:\\.\\.\\.)?((?:\\.)?'*)`
                },
                {
                    match: "(?:===|∈|\\.∈|∉|\\.∉|∋|\\.∋|∌|\\.∌|≈|\\.≈|≉|\\.≉|≠|\\.≠|≡|\\.≡|≢|\\.≢|⊆|\\.⊆|⊇|\\.⊇|⊈|\\.⊈|⊉|\\.⊉|⊊|\\.⊊|⊋|\\.⊋|\\.==|!==|!=|\\.>=|\\.>|\\.<=|\\.<|\\.≤|\\.≥|==|\\.!=|\\.=|\\.!|<:|>:|:>|(?<!>)>=|(?<!<)<=|>|<|≥|≤)",
                    name: "keyword.operator.relation.julia"
                },
                {
                    match: "(?<=\\s)(?:\\?)(?=\\s)",
                    name: "keyword.operator.ternary.julia"
                },
                {
                    match: "(?<=\\s)(?:\\:)(?=\\s)",
                    name: "keyword.operator.ternary.julia"
                },
                {
                    match: "(?:\\|\\||&&|(?<!(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}-¡]|[^\\P{Mc}-¡]|[^\\P{Nd}-¡]|[^\\P{Pc}-¡]|[^\\P{Sk}-¡]|[^\\P{Me}-¡]|[^\\P{No}-¡]|[′-‷⁗]|[^\\P{So}←-⇿]))!)",
                    name: "keyword.operator.boolean.julia"
                },
                {
                    match: "(?<=[[:word:]⁺-ₜ!′∇\\)\\]\\}])(?::)",
                    name: "keyword.operator.range.julia"
                },
                {
                    match: "(?:\\|>)",
                    name: "keyword.operator.applies.julia"
                },
                {
                    match: "(?:\\||\\.\\||\\&|\\.\\&|~|\\.~|⊻|\\.⊻)",
                    name: "keyword.operator.bitwise.julia"
                },
                {
                    match: "(?:\\+\\+|--|\\+|\\.\\+|-|\\.\\-|\\*|\\.\\*|//(?!=)|\\.//(?!=)|/|\\./|%|\\.%|\\\\|\\.\\\\|\\^|\\.\\^|÷|\\.÷|⋅|\\.⋅|∩|\\.∩|∪|\\.∪|×|√|∛)",
                    name: "keyword.operator.arithmetic.julia"
                },
                {
                    match: "(?:∘)",
                    name: "keyword.operator.compose.julia"
                },
                {
                    match: "(?:::|(?<=\\s)isa(?=\\s))",
                    name: "keyword.operator.isa.julia"
                },
                {
                    match: "(?:(?<=\\s)in(?=\\s))",
                    name: "keyword.operator.relation.in.julia"
                },
                {
                    match: "(?:\\.(?=(?:@|_|\\p{L}))|\\.\\.+)",
                    name: "keyword.operator.dots.julia"
                },
                {
                    match: "(?:\\$)(?=.+)",
                    name: "keyword.operator.interpolation.julia"
                },
                {
                    captures: {
                        2: {
                            name: "keyword.operator.transposed-variable.julia"
                        }
                    },
                    match: "((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}-¡]|[^\\P{Mc}-¡]|[^\\P{Nd}-¡]|[^\\P{Pc}-¡]|[^\\P{Sk}-¡]|[^\\P{Me}-¡]|[^\\P{No}-¡]|[′-‷⁗]|[^\\P{So}←-⇿])*)(('|(\\.'))*\\.?')"
                },
                {
                    captures: {
                        1: {
                            name: "bracket.end.julia"
                        },
                        2: {
                            name: "keyword.operator.transposed-matrix.julia"
                        }
                    },
                    match: "(\\])((?:'|(?:\\.'))*\\.?')"
                },
                {
                    captures: {
                        1: {
                            name: "bracket.end.julia"
                        },
                        2: {
                            name: "keyword.operator.transposed-parens.julia"
                        }
                    },
                    match: "(\\))((?:'|(?:\\.'))*\\.?')"
                }
            ]
        },
        parentheses: {
            patterns: [
                {
                    begin: "\\(",
                    beginCaptures: {
                        0: {
                            name: "meta.bracket.julia"
                        }
                    },
                    end: "(\\))((?:\\.)?'*)",
                    endCaptures: {
                        1: {
                            name: "meta.bracket.julia"
                        },
                        2: {
                            name: "keyword.operator.transpose.julia"
                        }
                    },
                    patterns: [
                        {
                            include: "#self_no_for_block"
                        }
                    ]
                }
            ]
        },
        self_no_for_block: {
            comment: "Same as $self, but does not contain #for_block. 'outer' is not valid in some contexts (e.g. generators, comprehensions, indexing), so use this when matching those in begin/end patterns. Keep this up-to-date with $self!",
            patterns: [
                {
                    include: "#operator"
                },
                {
                    include: "#array"
                },
                {
                    include: "#string"
                },
                {
                    include: "#parentheses"
                },
                {
                    include: "#bracket"
                },
                {
                    include: "#function_decl"
                },
                {
                    include: "#function_call"
                },
                {
                    include: "#keyword"
                },
                {
                    include: "#number"
                },
                {
                    include: "#comment"
                },
                {
                    include: "#type_decl"
                },
                {
                    include: "#symbol"
                }
            ]
        },
        string: {
            patterns: [
                {
                    begin: '(?:(@doc)\\s((?:doc)?""")|(doc"""))',
                    beginCaptures: {
                        1: {
                            name: "support.function.macro.julia"
                        },
                        2: {
                            name: "punctuation.definition.string.begin.julia"
                        }
                    },
                    end: '(""") ?(->)?',
                    endCaptures: {
                        1: {
                            name: "punctuation.definition.string.end.julia"
                        },
                        2: {
                            name: "keyword.operator.arrow.julia"
                        }
                    },
                    name: "string.docstring.julia",
                    patterns: [
                        {
                            include: "#string_escaped_char"
                        },
                        {
                            include: "#string_dollar_sign_interpolate"
                        }
                    ]
                },
                {
                    begin: '(i?cxx)(""")',
                    beginCaptures: {
                        1: {
                            name: "support.function.macro.julia"
                        },
                        2: {
                            name: "punctuation.definition.string.begin.julia"
                        }
                    },
                    contentName: "meta.embedded.inline.cpp",
                    end: '"""',
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.julia"
                        }
                    },
                    name: "embed.cxx.julia",
                    patterns: [
                        {
                            include: "source.cpp#root_context"
                        },
                        {
                            include: "#string_dollar_sign_interpolate"
                        }
                    ]
                },
                {
                    begin: '(py)(""")',
                    beginCaptures: {
                        1: {
                            name: "support.function.macro.julia"
                        },
                        2: {
                            name: "punctuation.definition.string.begin.julia"
                        }
                    },
                    contentName: "meta.embedded.inline.python",
                    end: '([\\s\\w]*)(""")',
                    endCaptures: {
                        2: {
                            name: "punctuation.definition.string.end.julia"
                        }
                    },
                    name: "embed.python.julia",
                    patterns: [
                        {
                            include: "source.python"
                        },
                        {
                            include: "#string_dollar_sign_interpolate"
                        }
                    ]
                },
                {
                    begin: '(js)(""")',
                    beginCaptures: {
                        1: {
                            name: "support.function.macro.julia"
                        },
                        2: {
                            name: "punctuation.definition.string.begin.julia"
                        }
                    },
                    contentName: "meta.embedded.inline.javascript",
                    end: '"""',
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.julia"
                        }
                    },
                    name: "embed.js.julia",
                    patterns: [
                        {
                            include: "source.js"
                        },
                        {
                            include: "#string_dollar_sign_interpolate"
                        }
                    ]
                },
                {
                    begin: '(R)(""")',
                    beginCaptures: {
                        1: {
                            name: "support.function.macro.julia"
                        },
                        2: {
                            name: "punctuation.definition.string.begin.julia"
                        }
                    },
                    contentName: "meta.embedded.inline.r",
                    end: '"""',
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.julia"
                        }
                    },
                    name: "embed.R.julia",
                    patterns: [
                        {
                            include: "source.r"
                        },
                        {
                            include: "#string_dollar_sign_interpolate"
                        }
                    ]
                },
                {
                    begin: '(raw)(""")',
                    beginCaptures: {
                        1: {
                            name: "support.function.macro.julia"
                        },
                        2: {
                            name: "punctuation.definition.string.begin.julia"
                        }
                    },
                    end: '"""',
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.julia"
                        }
                    },
                    name: "string.quoted.other.julia",
                    patterns: [
                        {
                            include: "#string_escaped_char"
                        }
                    ]
                },
                {
                    begin: '(raw)(")',
                    beginCaptures: {
                        1: {
                            name: "support.function.macro.julia"
                        },
                        2: {
                            name: "punctuation.definition.string.begin.julia"
                        }
                    },
                    end: '"',
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.julia"
                        }
                    },
                    name: "string.quoted.other.julia",
                    patterns: [
                        {
                            include: "#string_escaped_char"
                        }
                    ]
                },
                {
                    begin: '(sql)(""")',
                    beginCaptures: {
                        1: {
                            name: "support.function.macro.julia"
                        },
                        2: {
                            name: "punctuation.definition.string.begin.julia"
                        }
                    },
                    contentName: "meta.embedded.inline.sql",
                    end: '"""',
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.julia"
                        }
                    },
                    name: "embed.sql.julia",
                    patterns: [
                        {
                            include: "source.sql"
                        },
                        {
                            include: "#string_dollar_sign_interpolate"
                        }
                    ]
                },
                {
                    begin: 'var"""',
                    end: '"""',
                    name: "constant.other.symbol.julia",
                    patterns: [
                        {
                            include: "#string_escaped_char"
                        }
                    ]
                },
                {
                    begin: 'var"',
                    end: '"',
                    name: "constant.other.symbol.julia",
                    patterns: [
                        {
                            include: "#string_escaped_char"
                        }
                    ]
                },
                {
                    begin: '^\\s?(doc)?(""")\\s?$',
                    beginCaptures: {
                        1: {
                            name: "support.function.macro.julia"
                        },
                        2: {
                            name: "punctuation.definition.string.begin.julia"
                        }
                    },
                    comment: `This only matches docstrings that start and end with triple quotes on
their own line in the void`,
                    end: '(""")',
                    endCaptures: {
                        1: {
                            name: "punctuation.definition.string.end.julia"
                        }
                    },
                    name: "string.docstring.julia",
                    patterns: [
                        {
                            include: "#string_escaped_char"
                        },
                        {
                            include: "#string_dollar_sign_interpolate"
                        }
                    ]
                },
                {
                    begin: "'",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.julia"
                        }
                    },
                    end: "'(?!')",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.julia"
                        }
                    },
                    name: "string.quoted.single.julia",
                    patterns: [
                        {
                            include: "#string_escaped_char"
                        }
                    ]
                },
                {
                    begin: '"""',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.multiline.begin.julia"
                        }
                    },
                    comment: "multi-line string with triple double quotes",
                    end: '"""',
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.multiline.end.julia"
                        }
                    },
                    name: "string.quoted.triple.double.julia",
                    patterns: [
                        {
                            include: "#string_escaped_char"
                        },
                        {
                            include: "#string_dollar_sign_interpolate"
                        }
                    ]
                },
                {
                    begin: '"(?!"")',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.julia"
                        }
                    },
                    comment: "String with single pair of double quotes. Regex matches isolated double quote",
                    end: '"',
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.julia"
                        }
                    },
                    name: "string.quoted.double.julia",
                    patterns: [
                        {
                            include: "#string_escaped_char"
                        },
                        {
                            include: "#string_dollar_sign_interpolate"
                        }
                    ]
                },
                {
                    begin: 'r"""',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.regexp.begin.julia"
                        }
                    },
                    end: '(""")([imsx]{0,4})?',
                    endCaptures: {
                        1: {
                            name: "punctuation.definition.string.regexp.end.julia"
                        },
                        2: {
                            comment: "I took this scope name from python regex grammar",
                            name: "keyword.other.option-toggle.regexp.julia"
                        }
                    },
                    name: "string.regexp.julia",
                    patterns: [
                        {
                            include: "#string_escaped_char"
                        }
                    ]
                },
                {
                    begin: 'r"',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.regexp.begin.julia"
                        }
                    },
                    end: '(")([imsx]{0,4})?',
                    endCaptures: {
                        1: {
                            name: "punctuation.definition.string.regexp.end.julia"
                        },
                        2: {
                            comment: "I took this scope name from python regex grammar",
                            name: "keyword.other.option-toggle.regexp.julia"
                        }
                    },
                    name: "string.regexp.julia",
                    patterns: [
                        {
                            include: "#string_escaped_char"
                        }
                    ]
                },
                {
                    begin: '(?<!")((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}-¡]|[^\\P{Mc}-¡]|[^\\P{Nd}-¡]|[^\\P{Pc}-¡]|[^\\P{Sk}-¡]|[^\\P{Me}-¡]|[^\\P{No}-¡]|[′-‷⁗]|[^\\P{So}←-⇿])*)"""',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.julia"
                        },
                        1: {
                            name: "support.function.macro.julia"
                        }
                    },
                    end: '(""")((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}-¡]|[^\\P{Mc}-¡]|[^\\P{Nd}-¡]|[^\\P{Pc}-¡]|[^\\P{Sk}-¡]|[^\\P{Me}-¡]|[^\\P{No}-¡]|[′-‷⁗]|[^\\P{So}←-⇿])*)?',
                    endCaptures: {
                        1: {
                            name: "punctuation.definition.string.end.julia"
                        },
                        2: {
                            name: "support.function.macro.julia"
                        }
                    },
                    name: "string.quoted.other.julia",
                    patterns: [
                        {
                            include: "#string_escaped_char"
                        }
                    ]
                },
                {
                    begin: '(?<!")((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}-¡]|[^\\P{Mc}-¡]|[^\\P{Nd}-¡]|[^\\P{Pc}-¡]|[^\\P{Sk}-¡]|[^\\P{Me}-¡]|[^\\P{No}-¡]|[′-‷⁗]|[^\\P{So}←-⇿])*)"',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.julia"
                        },
                        1: {
                            name: "support.function.macro.julia"
                        }
                    },
                    end: '(?<![^\\\\]\\\\)(")((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}-¡]|[^\\P{Mc}-¡]|[^\\P{Nd}-¡]|[^\\P{Pc}-¡]|[^\\P{Sk}-¡]|[^\\P{Me}-¡]|[^\\P{No}-¡]|[′-‷⁗]|[^\\P{So}←-⇿])*)?',
                    endCaptures: {
                        1: {
                            name: "punctuation.definition.string.end.julia"
                        },
                        2: {
                            name: "support.function.macro.julia"
                        }
                    },
                    name: "string.quoted.other.julia",
                    patterns: [
                        {
                            include: "#string_escaped_char"
                        }
                    ]
                },
                {
                    begin: "(?<!`)((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}-¡]|[^\\P{Mc}-¡]|[^\\P{Nd}-¡]|[^\\P{Pc}-¡]|[^\\P{Sk}-¡]|[^\\P{Me}-¡]|[^\\P{No}-¡]|[′-‷⁗]|[^\\P{So}←-⇿])*)?```",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.julia"
                        },
                        1: {
                            name: "support.function.macro.julia"
                        }
                    },
                    end: "(```)((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}-¡]|[^\\P{Mc}-¡]|[^\\P{Nd}-¡]|[^\\P{Pc}-¡]|[^\\P{Sk}-¡]|[^\\P{Me}-¡]|[^\\P{No}-¡]|[′-‷⁗]|[^\\P{So}←-⇿])*)?",
                    endCaptures: {
                        1: {
                            name: "punctuation.definition.string.end.julia"
                        },
                        2: {
                            name: "support.function.macro.julia"
                        }
                    },
                    name: "string.interpolated.backtick.julia",
                    patterns: [
                        {
                            include: "#string_escaped_char"
                        },
                        {
                            include: "#string_dollar_sign_interpolate"
                        }
                    ]
                },
                {
                    begin: "(?<!`)((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}-¡]|[^\\P{Mc}-¡]|[^\\P{Nd}-¡]|[^\\P{Pc}-¡]|[^\\P{Sk}-¡]|[^\\P{Me}-¡]|[^\\P{No}-¡]|[′-‷⁗]|[^\\P{So}←-⇿])*)?`",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.julia"
                        },
                        1: {
                            name: "support.function.macro.julia"
                        }
                    },
                    end: "(?<![^\\\\]\\\\)(`)((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}-¡]|[^\\P{Mc}-¡]|[^\\P{Nd}-¡]|[^\\P{Pc}-¡]|[^\\P{Sk}-¡]|[^\\P{Me}-¡]|[^\\P{No}-¡]|[′-‷⁗]|[^\\P{So}←-⇿])*)?",
                    endCaptures: {
                        1: {
                            name: "punctuation.definition.string.end.julia"
                        },
                        2: {
                            name: "support.function.macro.julia"
                        }
                    },
                    name: "string.interpolated.backtick.julia",
                    patterns: [
                        {
                            include: "#string_escaped_char"
                        },
                        {
                            include: "#string_dollar_sign_interpolate"
                        }
                    ]
                }
            ]
        },
        string_dollar_sign_interpolate: {
            patterns: [
                {
                    match: "\\$(?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{So}←-⇿]|[^\\p{^Sc}$])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}-¡]|[^\\P{Mc}-¡]|[^\\P{Nd}-¡]|[^\\P{Pc}-¡]|[^\\P{Sk}-¡]|[^\\P{Me}-¡]|[^\\P{No}-¡]|[′-‷⁗]|[^\\P{So}←-⇿]|[^\\p{^Sc}$])*",
                    name: "variable.interpolation.julia"
                },
                {
                    begin: "\\$(\\()",
                    beginCaptures: {
                        1: {
                            name: "meta.bracket.julia"
                        }
                    },
                    comment: "`punctuation.section.embedded`, `constant.escape`,\n& `meta.embedded.line` were considered but appear to have even spottier\nsupport among popular syntaxes.",
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "meta.bracket.julia"
                        }
                    },
                    name: "variable.interpolation.julia",
                    patterns: [
                        {
                            include: "#self_no_for_block"
                        }
                    ]
                }
            ]
        },
        string_escaped_char: {
            patterns: [
                {
                    match: "\\\\(\\\\|[0-3]\\d{,2}|[4-7]\\d?|x[a-fA-F0-9]{,2}|u[a-fA-F0-9]{,4}|U[a-fA-F0-9]{,8}|.)",
                    name: "constant.character.escape.julia"
                }
            ]
        },
        symbol: {
            patterns: [
                {
                    comment: "This is string.quoted.symbol.julia in tpoisot's package",
                    match: '(?<![[:word:]⁺-ₜ!′∇\\)\\]\\}]):(?:(?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}-¡]|[^\\P{Mc}-¡]|[^\\P{Nd}-¡]|[^\\P{Pc}-¡]|[^\\P{Sk}-¡]|[^\\P{Me}-¡]|[^\\P{No}-¡]|[′-‷⁗]|[^\\P{So}←-⇿])*)(?!(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}-¡]|[^\\P{Mc}-¡]|[^\\P{Nd}-¡]|[^\\P{Pc}-¡]|[^\\P{Sk}-¡]|[^\\P{Me}-¡]|[^\\P{No}-¡]|[′-‷⁗]|[^\\P{So}←-⇿]))(?!["`])',
                    name: "constant.other.symbol.julia"
                }
            ]
        },
        type_decl: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "entity.name.type.julia"
                        },
                        2: {
                            name: "entity.other.inherited-class.julia"
                        },
                        3: {
                            name: "punctuation.separator.inheritance.julia"
                        }
                    },
                    match: "(?>!:_)(?:struct|mutable\\s+struct|abstract\\s+type|primitive\\s+type)\\s+((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}-¡]|[^\\P{Mc}-¡]|[^\\P{Nd}-¡]|[^\\P{Pc}-¡]|[^\\P{Sk}-¡]|[^\\P{Me}-¡]|[^\\P{No}-¡]|[′-‷⁗]|[^\\P{So}←-⇿])*)(\\s*(<:)\\s*(?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}-¡]|[^\\P{Mc}-¡]|[^\\P{Nd}-¡]|[^\\P{Pc}-¡]|[^\\P{Sk}-¡]|[^\\P{Me}-¡]|[^\\P{No}-¡]|[′-‷⁗]|[^\\P{So}←-⇿])*(?:{.*})?)?",
                    name: "meta.type.julia"
                }
            ]
        }
    },
    scopeName: "source.julia",
    embeddedLangs: [
        "cpp",
        "python",
        "javascript",
        "r",
        "sql"
    ]
});
var A = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$cpp$2d$a_Pl9yzy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$python$2d$BQXev0_W$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$javascript$2d$DYrC$2d$pEL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$r$2d$DU7Q70f1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$sql$2d$DkzN59UV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    i
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
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/yaml-PGla5xPP.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>e)
});
const n = Object.freeze({
    displayName: "YAML",
    name: "yaml",
    patterns: [
        {
            include: "#comment"
        },
        {
            include: "#property"
        },
        {
            include: "#directive"
        },
        {
            match: "^---",
            name: "entity.other.document.begin.yaml"
        },
        {
            match: "^\\.{3}",
            name: "entity.other.document.end.yaml"
        },
        {
            include: "#node"
        }
    ],
    repository: {
        "block-collection": {
            patterns: [
                {
                    include: "#block-sequence"
                },
                {
                    include: "#block-mapping"
                }
            ]
        },
        "block-mapping": {
            patterns: [
                {
                    include: "#block-pair"
                }
            ]
        },
        "block-node": {
            patterns: [
                {
                    include: "#prototype"
                },
                {
                    include: "#block-scalar"
                },
                {
                    include: "#block-collection"
                },
                {
                    include: "#flow-scalar-plain-out"
                },
                {
                    include: "#flow-node"
                }
            ]
        },
        "block-pair": {
            patterns: [
                {
                    begin: "\\?",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.key-value.begin.yaml"
                        }
                    },
                    end: "(?=\\?)|^ *(:)|(:)",
                    endCaptures: {
                        1: {
                            name: "punctuation.separator.key-value.mapping.yaml"
                        },
                        2: {
                            name: "invalid.illegal.expected-newline.yaml"
                        }
                    },
                    name: "meta.block-mapping.yaml",
                    patterns: [
                        {
                            include: "#block-node"
                        }
                    ]
                },
                {
                    begin: `(?x)
(?=
(?x:
[^\\s[-?:,\\[\\]{}#&*!|>'"%@\`]]
| [?:-] \\S
)
(
[^\\s:]
| : \\S
| \\s+ (?![#\\s])
)*
\\s*
:
(\\s|$)
)
`,
                    end: `(?x)
(?=
\\s* $
| \\s+ \\#
| \\s* : (\\s|$)
)
`,
                    patterns: [
                        {
                            include: "#flow-scalar-plain-out-implicit-type"
                        },
                        {
                            begin: `(?x)
[^\\s[-?:,\\[\\]{}#&*!|>'"%@\`]]
| [?:-] \\S
`,
                            beginCaptures: {
                                0: {
                                    name: "entity.name.tag.yaml"
                                }
                            },
                            contentName: "entity.name.tag.yaml",
                            end: `(?x)
(?=
\\s* $
| \\s+ \\#
| \\s* : (\\s|$)
)
`,
                            name: "string.unquoted.plain.out.yaml"
                        }
                    ]
                },
                {
                    match: ":(?=\\s|$)",
                    name: "punctuation.separator.key-value.mapping.yaml"
                }
            ]
        },
        "block-scalar": {
            begin: "(?:(\\|)|(>))([1-9])?([-+])?(.*\\n?)",
            beginCaptures: {
                1: {
                    name: "keyword.control.flow.block-scalar.literal.yaml"
                },
                2: {
                    name: "keyword.control.flow.block-scalar.folded.yaml"
                },
                3: {
                    name: "constant.numeric.indentation-indicator.yaml"
                },
                4: {
                    name: "storage.modifier.chomping-indicator.yaml"
                },
                5: {
                    patterns: [
                        {
                            include: "#comment"
                        },
                        {
                            match: ".+",
                            name: "invalid.illegal.expected-comment-or-newline.yaml"
                        }
                    ]
                }
            },
            end: "^(?=\\S)|(?!\\G)",
            patterns: [
                {
                    begin: "^([ ]+)(?! )",
                    end: "^(?!\\1|\\s*$)",
                    name: "string.unquoted.block.yaml"
                }
            ]
        },
        "block-sequence": {
            match: "(-)(?!\\S)",
            name: "punctuation.definition.block.sequence.item.yaml"
        },
        comment: {
            begin: "(?:(^[ \\t]*)|[ \\t]+)(?=#\\p{Print}*$)",
            beginCaptures: {
                1: {
                    name: "punctuation.whitespace.comment.leading.yaml"
                }
            },
            end: "(?!\\G)",
            patterns: [
                {
                    begin: "#",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.comment.yaml"
                        }
                    },
                    end: "\\n",
                    name: "comment.line.number-sign.yaml"
                }
            ]
        },
        directive: {
            begin: "^%",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.directive.begin.yaml"
                }
            },
            end: "(?=$|[ \\t]+($|#))",
            name: "meta.directive.yaml",
            patterns: [
                {
                    captures: {
                        1: {
                            name: "keyword.other.directive.yaml.yaml"
                        },
                        2: {
                            name: "constant.numeric.yaml-version.yaml"
                        }
                    },
                    match: "\\G(YAML)[ \\t]+(\\d+\\.\\d+)"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.other.directive.tag.yaml"
                        },
                        2: {
                            name: "storage.type.tag-handle.yaml"
                        },
                        3: {
                            name: "support.type.tag-prefix.yaml"
                        }
                    },
                    match: `(?x)
\\G
(TAG)
(?:[ \\t]+
((?:!(?:[0-9A-Za-z\\-]*!)?))
(?:[ \\t]+ (
!              (?x: %[0-9A-Fa-f]{2} | [0-9A-Za-z\\-#;/?:@&=+$,_.!~*'()\\[\\]] )*
| (?![,!\\[\\]{}]) (?x: %[0-9A-Fa-f]{2} | [0-9A-Za-z\\-#;/?:@&=+$,_.!~*'()\\[\\]] )+
)
)?
)?
`
                },
                {
                    captures: {
                        1: {
                            name: "support.other.directive.reserved.yaml"
                        },
                        2: {
                            name: "string.unquoted.directive-name.yaml"
                        },
                        3: {
                            name: "string.unquoted.directive-parameter.yaml"
                        }
                    },
                    match: "(?x) \\G (\\w+) (?:[ \\t]+ (\\w+) (?:[ \\t]+ (\\w+))? )?"
                },
                {
                    match: "\\S+",
                    name: "invalid.illegal.unrecognized.yaml"
                }
            ]
        },
        "flow-alias": {
            captures: {
                1: {
                    name: "keyword.control.flow.alias.yaml"
                },
                2: {
                    name: "punctuation.definition.alias.yaml"
                },
                3: {
                    name: "variable.other.alias.yaml"
                },
                4: {
                    name: "invalid.illegal.character.anchor.yaml"
                }
            },
            match: "((\\*))([^\\s\\[\\]/{/},]+)([^\\s\\]},]\\S*)?"
        },
        "flow-collection": {
            patterns: [
                {
                    include: "#flow-sequence"
                },
                {
                    include: "#flow-mapping"
                }
            ]
        },
        "flow-mapping": {
            begin: "\\{",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.mapping.begin.yaml"
                }
            },
            end: "\\}",
            endCaptures: {
                0: {
                    name: "punctuation.definition.mapping.end.yaml"
                }
            },
            name: "meta.flow-mapping.yaml",
            patterns: [
                {
                    include: "#prototype"
                },
                {
                    match: ",",
                    name: "punctuation.separator.mapping.yaml"
                },
                {
                    include: "#flow-pair"
                }
            ]
        },
        "flow-node": {
            patterns: [
                {
                    include: "#prototype"
                },
                {
                    include: "#flow-alias"
                },
                {
                    include: "#flow-collection"
                },
                {
                    include: "#flow-scalar"
                }
            ]
        },
        "flow-pair": {
            patterns: [
                {
                    begin: "\\?",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.key-value.begin.yaml"
                        }
                    },
                    end: "(?=[},\\]])",
                    name: "meta.flow-pair.explicit.yaml",
                    patterns: [
                        {
                            include: "#prototype"
                        },
                        {
                            include: "#flow-pair"
                        },
                        {
                            include: "#flow-node"
                        },
                        {
                            begin: ":(?=\\s|$|[\\[\\]{},])",
                            beginCaptures: {
                                0: {
                                    name: "punctuation.separator.key-value.mapping.yaml"
                                }
                            },
                            end: "(?=[},\\]])",
                            patterns: [
                                {
                                    include: "#flow-value"
                                }
                            ]
                        }
                    ]
                },
                {
                    begin: `(?x)
(?=
(?:
[^\\s[-?:,\\[\\]{}#&*!|>'"%@\`]]
| [?:-] [^\\s[\\[\\]{},]]
)
(
[^\\s:[\\[\\]{},]]
| : [^\\s[\\[\\]{},]]
| \\s+ (?![#\\s])
)*
\\s*
:
(\\s|$)
)
`,
                    end: `(?x)
(?=
\\s* $
| \\s+ \\#
| \\s* : (\\s|$)
| \\s* : [\\[\\]{},]
| \\s* [\\[\\]{},]
)
`,
                    name: "meta.flow-pair.key.yaml",
                    patterns: [
                        {
                            include: "#flow-scalar-plain-in-implicit-type"
                        },
                        {
                            begin: `(?x)
[^\\s[-?:,\\[\\]{}#&*!|>'"%@\`]]
| [?:-] [^\\s[\\[\\]{},]]
`,
                            beginCaptures: {
                                0: {
                                    name: "entity.name.tag.yaml"
                                }
                            },
                            contentName: "entity.name.tag.yaml",
                            end: `(?x)
(?=
\\s* $
| \\s+ \\#
| \\s* : (\\s|$)
| \\s* : [\\[\\]{},]
| \\s* [\\[\\]{},]
)
`,
                            name: "string.unquoted.plain.in.yaml"
                        }
                    ]
                },
                {
                    include: "#flow-node"
                },
                {
                    begin: ":(?=\\s|$|[\\[\\]{},])",
                    captures: {
                        0: {
                            name: "punctuation.separator.key-value.mapping.yaml"
                        }
                    },
                    end: "(?=[},\\]])",
                    name: "meta.flow-pair.yaml",
                    patterns: [
                        {
                            include: "#flow-value"
                        }
                    ]
                }
            ]
        },
        "flow-scalar": {
            patterns: [
                {
                    include: "#flow-scalar-double-quoted"
                },
                {
                    include: "#flow-scalar-single-quoted"
                },
                {
                    include: "#flow-scalar-plain-in"
                }
            ]
        },
        "flow-scalar-double-quoted": {
            begin: '"',
            beginCaptures: {
                0: {
                    name: "punctuation.definition.string.begin.yaml"
                }
            },
            end: '"',
            endCaptures: {
                0: {
                    name: "punctuation.definition.string.end.yaml"
                }
            },
            name: "string.quoted.double.yaml",
            patterns: [
                {
                    match: '\\\\([0abtnvfre "/\\\\N_Lp]|x\\d\\d|u\\d{4}|U\\d{8})',
                    name: "constant.character.escape.yaml"
                },
                {
                    match: "\\\\\\n",
                    name: "constant.character.escape.double-quoted.newline.yaml"
                }
            ]
        },
        "flow-scalar-plain-in": {
            patterns: [
                {
                    include: "#flow-scalar-plain-in-implicit-type"
                },
                {
                    begin: `(?x)
[^\\s[-?:,\\[\\]{}#&*!|>'"%@\`]]
| [?:-] [^\\s[\\[\\]{},]]
`,
                    end: `(?x)
(?=
\\s* $
| \\s+ \\#
| \\s* : (\\s|$)
| \\s* : [\\[\\]{},]
| \\s* [\\[\\]{},]
)
`,
                    name: "string.unquoted.plain.in.yaml"
                }
            ]
        },
        "flow-scalar-plain-in-implicit-type": {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "constant.language.null.yaml"
                        },
                        2: {
                            name: "constant.language.boolean.yaml"
                        },
                        3: {
                            name: "constant.numeric.integer.yaml"
                        },
                        4: {
                            name: "constant.numeric.float.yaml"
                        },
                        5: {
                            name: "constant.other.timestamp.yaml"
                        },
                        6: {
                            name: "constant.language.value.yaml"
                        },
                        7: {
                            name: "constant.language.merge.yaml"
                        }
                    },
                    match: `(?x)
(?x:
(null|Null|NULL|~)
| (y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF)
| (
(?:
[-+]? 0b [0-1_]+
| [-+]? 0  [0-7_]+
| [-+]? (?: 0|[1-9][0-9_]*)
| [-+]? 0x [0-9a-fA-F_]+
| [-+]? [1-9] [0-9_]* (?: :[0-5]?[0-9])+
)
)
| (
(?x:
[-+]? (?: [0-9] [0-9_]*)? \\. [0-9.]* (?: [eE] [-+] [0-9]+)?
| [-+]? [0-9] [0-9_]* (?: :[0-5]?[0-9])+ \\. [0-9_]*
| [-+]? \\. (?: inf|Inf|INF)
|       \\. (?: nan|NaN|NAN)
)
)
| (
(?x:
\\d{4} - \\d{2} - \\d{2}
| \\d{4}
- \\d{1,2}
- \\d{1,2}
(?: [Tt] | [ \\t]+) \\d{1,2}
: \\d{2}
: \\d{2}
(?: \\.\\d*)?
(?:
(?:[ \\t]*) Z
| [-+] \\d{1,2} (?: :\\d{1,2})?
)?
)
)
| (=)
| (<<)
)
(?:
(?=
\\s* $
| \\s+ \\#
| \\s* : (\\s|$)
| \\s* : [\\[\\]{},]
| \\s* [\\[\\]{},]
)
)
`
                }
            ]
        },
        "flow-scalar-plain-out": {
            patterns: [
                {
                    include: "#flow-scalar-plain-out-implicit-type"
                },
                {
                    begin: `(?x)
[^\\s[-?:,\\[\\]{}#&*!|>'"%@\`]]
| [?:-] \\S
`,
                    end: `(?x)
(?=
\\s* $
| \\s+ \\#
| \\s* : (\\s|$)
)
`,
                    name: "string.unquoted.plain.out.yaml"
                }
            ]
        },
        "flow-scalar-plain-out-implicit-type": {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "constant.language.null.yaml"
                        },
                        2: {
                            name: "constant.language.boolean.yaml"
                        },
                        3: {
                            name: "constant.numeric.integer.yaml"
                        },
                        4: {
                            name: "constant.numeric.float.yaml"
                        },
                        5: {
                            name: "constant.other.timestamp.yaml"
                        },
                        6: {
                            name: "constant.language.value.yaml"
                        },
                        7: {
                            name: "constant.language.merge.yaml"
                        }
                    },
                    match: `(?x)
(?x:
(null|Null|NULL|~)
| (y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF)
| (
(?:
[-+]? 0b [0-1_]+
| [-+]? 0  [0-7_]+
| [-+]? (?: 0|[1-9][0-9_]*)
| [-+]? 0x [0-9a-fA-F_]+
| [-+]? [1-9] [0-9_]* (?: :[0-5]?[0-9])+
)
)
| (
(?x:
[-+]? (?: [0-9] [0-9_]*)? \\. [0-9.]* (?: [eE] [-+] [0-9]+)?
| [-+]? [0-9] [0-9_]* (?: :[0-5]?[0-9])+ \\. [0-9_]*
| [-+]? \\. (?: inf|Inf|INF)
|       \\. (?: nan|NaN|NAN)
)
)
| (
(?x:
\\d{4} - \\d{2} - \\d{2}
| \\d{4}
- \\d{1,2}
- \\d{1,2}
(?: [Tt] | [ \\t]+) \\d{1,2}
: \\d{2}
: \\d{2}
(?: \\.\\d*)?
(?:
(?:[ \\t]*) Z
| [-+] \\d{1,2} (?: :\\d{1,2})?
)?
)
)
| (=)
| (<<)
)
(?x:
(?=
\\s* $
| \\s+ \\#
| \\s* : (\\s|$)
)
)
`
                }
            ]
        },
        "flow-scalar-single-quoted": {
            begin: "'",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.string.begin.yaml"
                }
            },
            end: "'(?!')",
            endCaptures: {
                0: {
                    name: "punctuation.definition.string.end.yaml"
                }
            },
            name: "string.quoted.single.yaml",
            patterns: [
                {
                    match: "''",
                    name: "constant.character.escape.single-quoted.yaml"
                }
            ]
        },
        "flow-sequence": {
            begin: "\\[",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.sequence.begin.yaml"
                }
            },
            end: "\\]",
            endCaptures: {
                0: {
                    name: "punctuation.definition.sequence.end.yaml"
                }
            },
            name: "meta.flow-sequence.yaml",
            patterns: [
                {
                    include: "#prototype"
                },
                {
                    match: ",",
                    name: "punctuation.separator.sequence.yaml"
                },
                {
                    include: "#flow-pair"
                },
                {
                    include: "#flow-node"
                }
            ]
        },
        "flow-value": {
            patterns: [
                {
                    begin: "\\G(?![},\\]])",
                    end: "(?=[},\\]])",
                    name: "meta.flow-pair.value.yaml",
                    patterns: [
                        {
                            include: "#flow-node"
                        }
                    ]
                }
            ]
        },
        node: {
            patterns: [
                {
                    include: "#block-node"
                }
            ]
        },
        property: {
            begin: "(?=!|&)",
            end: "(?!\\G)",
            name: "meta.property.yaml",
            patterns: [
                {
                    captures: {
                        1: {
                            name: "keyword.control.property.anchor.yaml"
                        },
                        2: {
                            name: "punctuation.definition.anchor.yaml"
                        },
                        3: {
                            name: "entity.name.type.anchor.yaml"
                        },
                        4: {
                            name: "invalid.illegal.character.anchor.yaml"
                        }
                    },
                    match: "\\G((&))([^\\s\\[\\]/{/},]+)(\\S+)?"
                },
                {
                    match: `(?x)
\\G
(?:
! < (?: %[0-9A-Fa-f]{2} | [0-9A-Za-z\\-#;/?:@&=+$,_.!~*'()\\[\\]] )+ >
| (?:!(?:[0-9A-Za-z\\-]*!)?) (?: %[0-9A-Fa-f]{2} | [0-9A-Za-z\\-#;/?:@&=+$_.~*'()] )+
| !
)
(?=\\ |\\t|$)
`,
                    name: "storage.type.tag-handle.yaml"
                },
                {
                    match: "\\S+",
                    name: "invalid.illegal.tag-handle.yaml"
                }
            ]
        },
        prototype: {
            patterns: [
                {
                    include: "#comment"
                },
                {
                    include: "#property"
                }
            ]
        }
    },
    scopeName: "source.yaml",
    aliases: [
        "yml"
    ]
});
var e = [
    n
];
;
}}),
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/rust-FKJVU_QG.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>t)
});
const e = Object.freeze({
    displayName: "Rust",
    name: "rust",
    patterns: [
        {
            begin: "(<)(\\[)",
            beginCaptures: {
                1: {
                    name: "punctuation.brackets.angle.rust"
                },
                2: {
                    name: "punctuation.brackets.square.rust"
                }
            },
            comment: "boxed slice literal",
            end: ">",
            endCaptures: {
                0: {
                    name: "punctuation.brackets.angle.rust"
                }
            },
            patterns: [
                {
                    include: "#block-comments"
                },
                {
                    include: "#comments"
                },
                {
                    include: "#gtypes"
                },
                {
                    include: "#lvariables"
                },
                {
                    include: "#lifetimes"
                },
                {
                    include: "#punctuation"
                },
                {
                    include: "#types"
                }
            ]
        },
        {
            captures: {
                1: {
                    name: "keyword.operator.macro.dollar.rust"
                },
                3: {
                    name: "keyword.other.crate.rust"
                },
                4: {
                    name: "entity.name.type.metavariable.rust"
                },
                6: {
                    name: "keyword.operator.key-value.rust"
                },
                7: {
                    name: "variable.other.metavariable.specifier.rust"
                }
            },
            comment: "macro type metavariables",
            match: "(\\$)((crate)|([A-Z][A-Za-z0-9_]*))((:)(block|expr|ident|item|lifetime|literal|meta|path?|stmt|tt|ty|vis))?",
            name: "meta.macro.metavariable.type.rust",
            patterns: [
                {
                    include: "#keywords"
                }
            ]
        },
        {
            captures: {
                1: {
                    name: "keyword.operator.macro.dollar.rust"
                },
                2: {
                    name: "variable.other.metavariable.name.rust"
                },
                4: {
                    name: "keyword.operator.key-value.rust"
                },
                5: {
                    name: "variable.other.metavariable.specifier.rust"
                }
            },
            comment: "macro metavariables",
            match: "(\\$)([a-z][A-Za-z0-9_]*)((:)(block|expr|ident|item|lifetime|literal|meta|path?|stmt|tt|ty|vis))?",
            name: "meta.macro.metavariable.rust",
            patterns: [
                {
                    include: "#keywords"
                }
            ]
        },
        {
            captures: {
                1: {
                    name: "entity.name.function.macro.rules.rust"
                },
                3: {
                    name: "entity.name.function.macro.rust"
                },
                4: {
                    name: "entity.name.type.macro.rust"
                },
                5: {
                    name: "punctuation.brackets.curly.rust"
                }
            },
            comment: "macro rules",
            match: "\\b(macro_rules!)\\s+(([a-z0-9_]+)|([A-Z][a-z0-9_]*))\\s+(\\{)",
            name: "meta.macro.rules.rust"
        },
        {
            captures: {
                1: {
                    name: "storage.type.rust"
                },
                2: {
                    name: "entity.name.module.rust"
                }
            },
            comment: "modules",
            match: "(mod)\\s+((?:r#(?!crate|[Ss]elf|super))?[a-z][A-Za-z0-9_]*)"
        },
        {
            begin: "\\b(extern)\\s+(crate)",
            beginCaptures: {
                1: {
                    name: "storage.type.rust"
                },
                2: {
                    name: "keyword.other.crate.rust"
                }
            },
            comment: "external crate imports",
            end: ";",
            endCaptures: {
                0: {
                    name: "punctuation.semi.rust"
                }
            },
            name: "meta.import.rust",
            patterns: [
                {
                    include: "#block-comments"
                },
                {
                    include: "#comments"
                },
                {
                    include: "#keywords"
                },
                {
                    include: "#punctuation"
                }
            ]
        },
        {
            begin: "\\b(use)\\s",
            beginCaptures: {
                1: {
                    name: "keyword.other.rust"
                }
            },
            comment: "use statements",
            end: ";",
            endCaptures: {
                0: {
                    name: "punctuation.semi.rust"
                }
            },
            name: "meta.use.rust",
            patterns: [
                {
                    include: "#block-comments"
                },
                {
                    include: "#comments"
                },
                {
                    include: "#keywords"
                },
                {
                    include: "#namespaces"
                },
                {
                    include: "#punctuation"
                },
                {
                    include: "#types"
                },
                {
                    include: "#lvariables"
                }
            ]
        },
        {
            include: "#block-comments"
        },
        {
            include: "#comments"
        },
        {
            include: "#attributes"
        },
        {
            include: "#lvariables"
        },
        {
            include: "#constants"
        },
        {
            include: "#gtypes"
        },
        {
            include: "#functions"
        },
        {
            include: "#types"
        },
        {
            include: "#keywords"
        },
        {
            include: "#lifetimes"
        },
        {
            include: "#macros"
        },
        {
            include: "#namespaces"
        },
        {
            include: "#punctuation"
        },
        {
            include: "#strings"
        },
        {
            include: "#variables"
        }
    ],
    repository: {
        attributes: {
            begin: "(#)(\\!?)(\\[)",
            beginCaptures: {
                1: {
                    name: "punctuation.definition.attribute.rust"
                },
                3: {
                    name: "punctuation.brackets.attribute.rust"
                }
            },
            comment: "attributes",
            end: "\\]",
            endCaptures: {
                0: {
                    name: "punctuation.brackets.attribute.rust"
                }
            },
            name: "meta.attribute.rust",
            patterns: [
                {
                    include: "#block-comments"
                },
                {
                    include: "#comments"
                },
                {
                    include: "#keywords"
                },
                {
                    include: "#lifetimes"
                },
                {
                    include: "#punctuation"
                },
                {
                    include: "#strings"
                },
                {
                    include: "#gtypes"
                },
                {
                    include: "#types"
                }
            ]
        },
        "block-comments": {
            patterns: [
                {
                    comment: "empty block comments",
                    match: "/\\*\\*/",
                    name: "comment.block.rust"
                },
                {
                    begin: "/\\*\\*",
                    comment: "block documentation comments",
                    end: "\\*/",
                    name: "comment.block.documentation.rust",
                    patterns: [
                        {
                            include: "#block-comments"
                        }
                    ]
                },
                {
                    begin: "/\\*(?!\\*)",
                    comment: "block comments",
                    end: "\\*/",
                    name: "comment.block.rust",
                    patterns: [
                        {
                            include: "#block-comments"
                        }
                    ]
                }
            ]
        },
        comments: {
            patterns: [
                {
                    comment: "documentation comments",
                    match: "^\\s*///.*",
                    name: "comment.line.documentation.rust"
                },
                {
                    comment: "line comments",
                    match: "\\s*//.*",
                    name: "comment.line.double-slash.rust"
                }
            ]
        },
        constants: {
            patterns: [
                {
                    comment: "ALL CAPS constants",
                    match: "\\b[A-Z]{2}[A-Z0-9_]*\\b",
                    name: "constant.other.caps.rust"
                },
                {
                    captures: {
                        1: {
                            name: "storage.type.rust"
                        },
                        2: {
                            name: "constant.other.caps.rust"
                        }
                    },
                    comment: "constant declarations",
                    match: "\\b(const)\\s+([A-Z][A-Za-z0-9_]*)\\b"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.separator.dot.decimal.rust"
                        },
                        2: {
                            name: "keyword.operator.exponent.rust"
                        },
                        3: {
                            name: "keyword.operator.exponent.sign.rust"
                        },
                        4: {
                            name: "constant.numeric.decimal.exponent.mantissa.rust"
                        },
                        5: {
                            name: "entity.name.type.numeric.rust"
                        }
                    },
                    comment: "decimal integers and floats",
                    match: "\\b\\d[\\d_]*(\\.?)[\\d_]*(?:(E|e)([+-]?)([\\d_]+))?(f32|f64|i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?\\b",
                    name: "constant.numeric.decimal.rust"
                },
                {
                    captures: {
                        1: {
                            name: "entity.name.type.numeric.rust"
                        }
                    },
                    comment: "hexadecimal integers",
                    match: "\\b0x[\\da-fA-F_]+(i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?\\b",
                    name: "constant.numeric.hex.rust"
                },
                {
                    captures: {
                        1: {
                            name: "entity.name.type.numeric.rust"
                        }
                    },
                    comment: "octal integers",
                    match: "\\b0o[0-7_]+(i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?\\b",
                    name: "constant.numeric.oct.rust"
                },
                {
                    captures: {
                        1: {
                            name: "entity.name.type.numeric.rust"
                        }
                    },
                    comment: "binary integers",
                    match: "\\b0b[01_]+(i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?\\b",
                    name: "constant.numeric.bin.rust"
                },
                {
                    comment: "booleans",
                    match: "\\b(true|false)\\b",
                    name: "constant.language.bool.rust"
                }
            ]
        },
        escapes: {
            captures: {
                1: {
                    name: "constant.character.escape.backslash.rust"
                },
                2: {
                    name: "constant.character.escape.bit.rust"
                },
                3: {
                    name: "constant.character.escape.unicode.rust"
                },
                4: {
                    name: "constant.character.escape.unicode.punctuation.rust"
                },
                5: {
                    name: "constant.character.escape.unicode.punctuation.rust"
                }
            },
            comment: "escapes: ASCII, byte, Unicode, quote, regex",
            match: "(\\\\)(?:(?:(x[0-7][\\da-fA-F])|(u(\\{)[\\da-fA-F]{4,6}(\\}))|.))",
            name: "constant.character.escape.rust"
        },
        functions: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "keyword.other.rust"
                        },
                        2: {
                            name: "punctuation.brackets.round.rust"
                        }
                    },
                    comment: "pub as a function",
                    match: "\\b(pub)(\\()"
                },
                {
                    begin: "\\b(fn)\\s+((?:r#(?!crate|[Ss]elf|super))?[A-Za-z0-9_]+)((\\()|(<))",
                    beginCaptures: {
                        1: {
                            name: "keyword.other.fn.rust"
                        },
                        2: {
                            name: "entity.name.function.rust"
                        },
                        4: {
                            name: "punctuation.brackets.round.rust"
                        },
                        5: {
                            name: "punctuation.brackets.angle.rust"
                        }
                    },
                    comment: "function definition",
                    end: "\\{|;",
                    endCaptures: {
                        0: {
                            name: "punctuation.brackets.curly.rust"
                        }
                    },
                    name: "meta.function.definition.rust",
                    patterns: [
                        {
                            include: "#block-comments"
                        },
                        {
                            include: "#comments"
                        },
                        {
                            include: "#keywords"
                        },
                        {
                            include: "#lvariables"
                        },
                        {
                            include: "#constants"
                        },
                        {
                            include: "#gtypes"
                        },
                        {
                            include: "#functions"
                        },
                        {
                            include: "#lifetimes"
                        },
                        {
                            include: "#macros"
                        },
                        {
                            include: "#namespaces"
                        },
                        {
                            include: "#punctuation"
                        },
                        {
                            include: "#strings"
                        },
                        {
                            include: "#types"
                        },
                        {
                            include: "#variables"
                        }
                    ]
                },
                {
                    begin: "((?:r#(?!crate|[Ss]elf|super))?[A-Za-z0-9_]+)(\\()",
                    beginCaptures: {
                        1: {
                            name: "entity.name.function.rust"
                        },
                        2: {
                            name: "punctuation.brackets.round.rust"
                        }
                    },
                    comment: "function/method calls, chaining",
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.brackets.round.rust"
                        }
                    },
                    name: "meta.function.call.rust",
                    patterns: [
                        {
                            include: "#block-comments"
                        },
                        {
                            include: "#comments"
                        },
                        {
                            include: "#attributes"
                        },
                        {
                            include: "#keywords"
                        },
                        {
                            include: "#lvariables"
                        },
                        {
                            include: "#constants"
                        },
                        {
                            include: "#gtypes"
                        },
                        {
                            include: "#functions"
                        },
                        {
                            include: "#lifetimes"
                        },
                        {
                            include: "#macros"
                        },
                        {
                            include: "#namespaces"
                        },
                        {
                            include: "#punctuation"
                        },
                        {
                            include: "#strings"
                        },
                        {
                            include: "#types"
                        },
                        {
                            include: "#variables"
                        }
                    ]
                },
                {
                    begin: "((?:r#(?!crate|[Ss]elf|super))?[A-Za-z0-9_]+)(?=::<.*>\\()",
                    beginCaptures: {
                        1: {
                            name: "entity.name.function.rust"
                        }
                    },
                    comment: "function/method calls with turbofish",
                    end: "\\)",
                    endCaptures: {
                        0: {
                            name: "punctuation.brackets.round.rust"
                        }
                    },
                    name: "meta.function.call.rust",
                    patterns: [
                        {
                            include: "#block-comments"
                        },
                        {
                            include: "#comments"
                        },
                        {
                            include: "#attributes"
                        },
                        {
                            include: "#keywords"
                        },
                        {
                            include: "#lvariables"
                        },
                        {
                            include: "#constants"
                        },
                        {
                            include: "#gtypes"
                        },
                        {
                            include: "#functions"
                        },
                        {
                            include: "#lifetimes"
                        },
                        {
                            include: "#macros"
                        },
                        {
                            include: "#namespaces"
                        },
                        {
                            include: "#punctuation"
                        },
                        {
                            include: "#strings"
                        },
                        {
                            include: "#types"
                        },
                        {
                            include: "#variables"
                        }
                    ]
                }
            ]
        },
        gtypes: {
            patterns: [
                {
                    comment: "option types",
                    match: "\\b(Some|None)\\b",
                    name: "entity.name.type.option.rust"
                },
                {
                    comment: "result types",
                    match: "\\b(Ok|Err)\\b",
                    name: "entity.name.type.result.rust"
                }
            ]
        },
        interpolations: {
            captures: {
                1: {
                    name: "punctuation.definition.interpolation.rust"
                },
                2: {
                    name: "punctuation.definition.interpolation.rust"
                }
            },
            comment: "curly brace interpolations",
            match: '({)[^"{}]*(})',
            name: "meta.interpolation.rust"
        },
        keywords: {
            patterns: [
                {
                    comment: "control flow keywords",
                    match: "\\b(await|break|continue|do|else|for|if|loop|match|return|try|while|yield)\\b",
                    name: "keyword.control.rust"
                },
                {
                    comment: "storage keywords",
                    match: "\\b(extern|let|macro|mod)\\b",
                    name: "keyword.other.rust storage.type.rust"
                },
                {
                    comment: "const keyword",
                    match: "\\b(const)\\b",
                    name: "storage.modifier.rust"
                },
                {
                    comment: "type keyword",
                    match: "\\b(type)\\b",
                    name: "keyword.declaration.type.rust storage.type.rust"
                },
                {
                    comment: "enum keyword",
                    match: "\\b(enum)\\b",
                    name: "keyword.declaration.enum.rust storage.type.rust"
                },
                {
                    comment: "trait keyword",
                    match: "\\b(trait)\\b",
                    name: "keyword.declaration.trait.rust storage.type.rust"
                },
                {
                    comment: "struct keyword",
                    match: "\\b(struct)\\b",
                    name: "keyword.declaration.struct.rust storage.type.rust"
                },
                {
                    comment: "storage modifiers",
                    match: "\\b(abstract|static)\\b",
                    name: "storage.modifier.rust"
                },
                {
                    comment: "other keywords",
                    match: "\\b(as|async|become|box|dyn|move|final|impl|in|override|priv|pub|ref|typeof|union|unsafe|unsized|use|virtual|where)\\b",
                    name: "keyword.other.rust"
                },
                {
                    comment: "fn",
                    match: "\\bfn\\b",
                    name: "keyword.other.fn.rust"
                },
                {
                    comment: "crate",
                    match: "\\bcrate\\b",
                    name: "keyword.other.crate.rust"
                },
                {
                    comment: "mut",
                    match: "\\bmut\\b",
                    name: "storage.modifier.mut.rust"
                },
                {
                    comment: "logical operators",
                    match: "(\\^|\\||\\|\\||&&|<<|>>|!)(?!=)",
                    name: "keyword.operator.logical.rust"
                },
                {
                    comment: "logical AND, borrow references",
                    match: "&(?![&=])",
                    name: "keyword.operator.borrow.and.rust"
                },
                {
                    comment: "assignment operators",
                    match: "(\\+=|-=|\\*=|/=|%=|\\^=|&=|\\|=|<<=|>>=)",
                    name: "keyword.operator.assignment.rust"
                },
                {
                    comment: "single equal",
                    match: "(?<![<>])=(?!=|>)",
                    name: "keyword.operator.assignment.equal.rust"
                },
                {
                    comment: "comparison operators",
                    match: "(=(=)?(?!>)|!=|<=|(?<!=)>=)",
                    name: "keyword.operator.comparison.rust"
                },
                {
                    comment: "math operators",
                    match: "(([+%]|(\\*(?!\\w)))(?!=))|(-(?!>))|(/(?!/))",
                    name: "keyword.operator.math.rust"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.brackets.round.rust"
                        },
                        2: {
                            name: "punctuation.brackets.square.rust"
                        },
                        3: {
                            name: "punctuation.brackets.curly.rust"
                        },
                        4: {
                            name: "keyword.operator.comparison.rust"
                        },
                        5: {
                            name: "punctuation.brackets.round.rust"
                        },
                        6: {
                            name: "punctuation.brackets.square.rust"
                        },
                        7: {
                            name: "punctuation.brackets.curly.rust"
                        }
                    },
                    comment: "less than, greater than (special case)",
                    match: "(?:\\b|(?:(\\))|(\\])|(\\})))[ \\t]+([<>])[ \\t]+(?:\\b|(?:(\\()|(\\[)|(\\{)))"
                },
                {
                    comment: "namespace operator",
                    match: "::",
                    name: "keyword.operator.namespace.rust"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.operator.dereference.rust"
                        }
                    },
                    comment: "dereference asterisk",
                    match: "(\\*)(?=\\w+)"
                },
                {
                    comment: "subpattern binding",
                    match: "@",
                    name: "keyword.operator.subpattern.rust"
                },
                {
                    comment: "dot access",
                    match: "\\.(?!\\.)",
                    name: "keyword.operator.access.dot.rust"
                },
                {
                    comment: "ranges, range patterns",
                    match: "\\.{2}(=|\\.)?",
                    name: "keyword.operator.range.rust"
                },
                {
                    comment: "colon",
                    match: ":(?!:)",
                    name: "keyword.operator.key-value.rust"
                },
                {
                    comment: "dashrocket, skinny arrow",
                    match: "->",
                    name: "keyword.operator.arrow.skinny.rust"
                },
                {
                    comment: "hashrocket, fat arrow",
                    match: "=>",
                    name: "keyword.operator.arrow.fat.rust"
                },
                {
                    comment: "dollar macros",
                    match: "\\$",
                    name: "keyword.operator.macro.dollar.rust"
                },
                {
                    comment: "question mark operator, questionably sized, macro kleene matcher",
                    match: "\\?",
                    name: "keyword.operator.question.rust"
                }
            ]
        },
        lifetimes: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.lifetime.rust"
                        },
                        2: {
                            name: "entity.name.type.lifetime.rust"
                        }
                    },
                    comment: "named lifetime parameters",
                    match: "(['])([a-zA-Z_][0-9a-zA-Z_]*)(?!['])\\b"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.operator.borrow.rust"
                        },
                        2: {
                            name: "punctuation.definition.lifetime.rust"
                        },
                        3: {
                            name: "entity.name.type.lifetime.rust"
                        }
                    },
                    comment: "borrowing references to named lifetimes",
                    match: "(\\&)(['])([a-zA-Z_][0-9a-zA-Z_]*)(?!['])\\b"
                }
            ]
        },
        lvariables: {
            patterns: [
                {
                    comment: "self",
                    match: "\\b[Ss]elf\\b",
                    name: "variable.language.self.rust"
                },
                {
                    comment: "super",
                    match: "\\bsuper\\b",
                    name: "variable.language.super.rust"
                }
            ]
        },
        macros: {
            patterns: [
                {
                    captures: {
                        2: {
                            name: "entity.name.function.macro.rust"
                        },
                        3: {
                            name: "entity.name.type.macro.rust"
                        }
                    },
                    comment: "macros",
                    match: "(([a-z_][A-Za-z0-9_]*!)|([A-Z_][A-Za-z0-9_]*!))",
                    name: "meta.macro.rust"
                }
            ]
        },
        namespaces: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "entity.name.namespace.rust"
                        },
                        2: {
                            name: "keyword.operator.namespace.rust"
                        }
                    },
                    comment: "namespace (non-type, non-function path segment)",
                    match: "(?<![A-Za-z0-9_])([A-Za-z0-9_]+)((?<!super|self)::)"
                }
            ]
        },
        punctuation: {
            patterns: [
                {
                    comment: "comma",
                    match: ",",
                    name: "punctuation.comma.rust"
                },
                {
                    comment: "curly braces",
                    match: "[{}]",
                    name: "punctuation.brackets.curly.rust"
                },
                {
                    comment: "parentheses, round brackets",
                    match: "[()]",
                    name: "punctuation.brackets.round.rust"
                },
                {
                    comment: "semicolon",
                    match: ";",
                    name: "punctuation.semi.rust"
                },
                {
                    comment: "square brackets",
                    match: "[\\[\\]]",
                    name: "punctuation.brackets.square.rust"
                },
                {
                    comment: "angle brackets",
                    match: "(?<!=)[<>]",
                    name: "punctuation.brackets.angle.rust"
                }
            ]
        },
        strings: {
            patterns: [
                {
                    begin: '(b?)(")',
                    beginCaptures: {
                        1: {
                            name: "string.quoted.byte.raw.rust"
                        },
                        2: {
                            name: "punctuation.definition.string.rust"
                        }
                    },
                    comment: "double-quoted strings and byte strings",
                    end: '"',
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.rust"
                        }
                    },
                    name: "string.quoted.double.rust",
                    patterns: [
                        {
                            include: "#escapes"
                        },
                        {
                            include: "#interpolations"
                        }
                    ]
                },
                {
                    begin: '(b?r)(#*)(")',
                    beginCaptures: {
                        1: {
                            name: "string.quoted.byte.raw.rust"
                        },
                        2: {
                            name: "punctuation.definition.string.raw.rust"
                        },
                        3: {
                            name: "punctuation.definition.string.rust"
                        }
                    },
                    comment: "double-quoted raw strings and raw byte strings",
                    end: '(")(\\2)',
                    endCaptures: {
                        1: {
                            name: "punctuation.definition.string.rust"
                        },
                        2: {
                            name: "punctuation.definition.string.raw.rust"
                        }
                    },
                    name: "string.quoted.double.rust"
                },
                {
                    begin: "(b)?(')",
                    beginCaptures: {
                        1: {
                            name: "string.quoted.byte.raw.rust"
                        },
                        2: {
                            name: "punctuation.definition.char.rust"
                        }
                    },
                    comment: "characters and bytes",
                    end: "'",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.char.rust"
                        }
                    },
                    name: "string.quoted.single.char.rust",
                    patterns: [
                        {
                            include: "#escapes"
                        }
                    ]
                }
            ]
        },
        types: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "entity.name.type.numeric.rust"
                        }
                    },
                    comment: "numeric types",
                    match: "(?<![A-Za-z])(f32|f64|i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)\\b"
                },
                {
                    begin: "\\b(_?[A-Z][A-Za-z0-9_]*)(<)",
                    beginCaptures: {
                        1: {
                            name: "entity.name.type.rust"
                        },
                        2: {
                            name: "punctuation.brackets.angle.rust"
                        }
                    },
                    comment: "parameterized types",
                    end: ">",
                    endCaptures: {
                        0: {
                            name: "punctuation.brackets.angle.rust"
                        }
                    },
                    patterns: [
                        {
                            include: "#block-comments"
                        },
                        {
                            include: "#comments"
                        },
                        {
                            include: "#keywords"
                        },
                        {
                            include: "#lvariables"
                        },
                        {
                            include: "#lifetimes"
                        },
                        {
                            include: "#punctuation"
                        },
                        {
                            include: "#types"
                        },
                        {
                            include: "#variables"
                        }
                    ]
                },
                {
                    comment: "primitive types",
                    match: "\\b(bool|char|str)\\b",
                    name: "entity.name.type.primitive.rust"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.declaration.trait.rust storage.type.rust"
                        },
                        2: {
                            name: "entity.name.type.trait.rust"
                        }
                    },
                    comment: "trait declarations",
                    match: "\\b(trait)\\s+(_?[A-Z][A-Za-z0-9_]*)\\b"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.declaration.struct.rust storage.type.rust"
                        },
                        2: {
                            name: "entity.name.type.struct.rust"
                        }
                    },
                    comment: "struct declarations",
                    match: "\\b(struct)\\s+(_?[A-Z][A-Za-z0-9_]*)\\b"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.declaration.enum.rust storage.type.rust"
                        },
                        2: {
                            name: "entity.name.type.enum.rust"
                        }
                    },
                    comment: "enum declarations",
                    match: "\\b(enum)\\s+(_?[A-Z][A-Za-z0-9_]*)\\b"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.declaration.type.rust storage.type.rust"
                        },
                        2: {
                            name: "entity.name.type.declaration.rust"
                        }
                    },
                    comment: "type declarations",
                    match: "\\b(type)\\s+(_?[A-Z][A-Za-z0-9_]*)\\b"
                },
                {
                    comment: "types",
                    match: "\\b_?[A-Z][A-Za-z0-9_]*\\b(?!!)",
                    name: "entity.name.type.rust"
                }
            ]
        },
        variables: {
            patterns: [
                {
                    comment: "variables",
                    match: "\\b(?<!(?<!\\.)\\.)(?:r#(?!(crate|[Ss]elf|super)))?[a-z0-9_]+\\b",
                    name: "variable.other.rust"
                }
            ]
        }
    },
    scopeName: "source.rust",
    aliases: [
        "rs"
    ]
});
var t = [
    e
];
;
}}),
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/scala-D9aYzKDa.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>e)
});
const a = Object.freeze({
    displayName: "Scala",
    fileTypes: [
        "scala"
    ],
    firstLineMatch: "^#!/.*\\b\\w*scala\\b",
    foldingStartMarker: "/\\*\\*|\\{\\s*$",
    foldingStopMarker: "\\*\\*/|^\\s*\\}",
    name: "scala",
    patterns: [
        {
            include: "#code"
        }
    ],
    repository: {
        backQuotedVariable: {
            match: "`[^`]+`"
        },
        "block-comments": {
            patterns: [
                {
                    captures: {
                        0: {
                            name: "punctuation.definition.comment.scala"
                        }
                    },
                    match: "/\\*\\*/",
                    name: "comment.block.empty.scala"
                },
                {
                    begin: "^\\s*(/\\*\\*)(?!/)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.comment.scala"
                        }
                    },
                    end: "\\*/",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.comment.scala"
                        }
                    },
                    name: "comment.block.documentation.scala",
                    patterns: [
                        {
                            captures: {
                                1: {
                                    name: "keyword.other.documentation.scaladoc.scala"
                                },
                                2: {
                                    name: "variable.parameter.scala"
                                }
                            },
                            match: "(@param)\\s+(\\S+)"
                        },
                        {
                            captures: {
                                1: {
                                    name: "keyword.other.documentation.scaladoc.scala"
                                },
                                2: {
                                    name: "entity.name.class"
                                }
                            },
                            match: "(@(?:tparam|throws))\\s+(\\S+)"
                        },
                        {
                            match: "@(return|see|note|example|constructor|usecase|author|version|since|todo|deprecated|migration|define|inheritdoc)\\b",
                            name: "keyword.other.documentation.scaladoc.scala"
                        },
                        {
                            captures: {
                                1: {
                                    name: "punctuation.definition.documentation.link.scala"
                                },
                                2: {
                                    name: "string.other.link.title.markdown"
                                },
                                3: {
                                    name: "punctuation.definition.documentation.link.scala"
                                }
                            },
                            match: "(\\[\\[)([^\\]]+)(\\]\\])"
                        },
                        {
                            include: "#block-comments"
                        }
                    ]
                },
                {
                    begin: "/\\*",
                    captures: {
                        0: {
                            name: "punctuation.definition.comment.scala"
                        }
                    },
                    end: "\\*/",
                    name: "comment.block.scala",
                    patterns: [
                        {
                            include: "#block-comments"
                        }
                    ]
                }
            ]
        },
        "char-literal": {
            begin: "'",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.character.begin.scala"
                }
            },
            end: "'|$",
            endCaptures: {
                0: {
                    name: "punctuation.definition.character.end.scala"
                }
            },
            name: "string.quoted.other constant.character.literal.scala",
            patterns: [
                {
                    match: `\\\\(?:[btnfr\\\\"']|[0-7]{1,3}|u[0-9A-Fa-f]{4})`,
                    name: "constant.character.escape.scala"
                },
                {
                    match: "\\\\.",
                    name: "invalid.illegal.unrecognized-character-escape.scala"
                },
                {
                    match: "[^']{2,}",
                    name: "invalid.illegal.character-literal-too-long"
                },
                {
                    match: "(?<!')[^']",
                    name: "invalid.illegal.character-literal-too-long"
                }
            ]
        },
        code: {
            patterns: [
                {
                    include: "#using-directive"
                },
                {
                    include: "#script-header"
                },
                {
                    include: "#storage-modifiers"
                },
                {
                    include: "#declarations"
                },
                {
                    include: "#inheritance"
                },
                {
                    include: "#extension"
                },
                {
                    include: "#imports"
                },
                {
                    include: "#exports"
                },
                {
                    include: "#comments"
                },
                {
                    include: "#strings"
                },
                {
                    include: "#initialization"
                },
                {
                    include: "#xml-literal"
                },
                {
                    include: "#keywords"
                },
                {
                    include: "#using"
                },
                {
                    include: "#constants"
                },
                {
                    include: "#singleton-type"
                },
                {
                    include: "#inline"
                },
                {
                    include: "#scala-quoted-or-symbol"
                },
                {
                    include: "#char-literal"
                },
                {
                    include: "#empty-parentheses"
                },
                {
                    include: "#parameter-list"
                },
                {
                    include: "#qualifiedClassName"
                },
                {
                    include: "#backQuotedVariable"
                },
                {
                    include: "#curly-braces"
                },
                {
                    include: "#meta-brackets"
                },
                {
                    include: "#meta-bounds"
                },
                {
                    include: "#meta-colons"
                }
            ]
        },
        comments: {
            patterns: [
                {
                    include: "#block-comments"
                },
                {
                    begin: "(^[ \\t]+)?(?=//)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.whitespace.comment.leading.scala"
                        }
                    },
                    end: "(?!\\G)",
                    patterns: [
                        {
                            begin: "//",
                            beginCaptures: {
                                0: {
                                    name: "punctuation.definition.comment.scala"
                                }
                            },
                            end: "\\n",
                            name: "comment.line.double-slash.scala"
                        }
                    ]
                }
            ]
        },
        constants: {
            patterns: [
                {
                    match: "\\b(false|null|true)\\b",
                    name: "constant.language.scala"
                },
                {
                    match: "\\b(0[xX][0-9a-fA-F_]*)\\b",
                    name: "constant.numeric.scala"
                },
                {
                    match: "\\b(([0-9][0-9_]*(\\.[0-9][0-9_]*)?)([eE](\\+|-)?[0-9][0-9_]*)?|[0-9][0-9_]*)[LlFfDd]?\\b",
                    name: "constant.numeric.scala"
                },
                {
                    match: "(\\.[0-9][0-9_]*)([eE](\\+|-)?[0-9][0-9_]*)?[LlFfDd]?\\b",
                    name: "constant.numeric.scala"
                },
                {
                    match: "\\b(this|super)\\b",
                    name: "variable.language.scala"
                }
            ]
        },
        "curly-braces": {
            begin: "\\{",
            beginCaptures: {
                0: {
                    name: "punctuation.section.block.begin.scala"
                }
            },
            end: "\\}",
            endCaptures: {
                0: {
                    name: "punctuation.section.block.end.scala"
                }
            },
            patterns: [
                {
                    include: "#code"
                }
            ]
        },
        declarations: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "keyword.declaration.scala"
                        },
                        2: {
                            name: "entity.name.function.declaration"
                        }
                    },
                    match: "\\b(def)\\b\\s*(?!//|/\\*)((?:(?:[A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?|[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)|`[^`]+`))?"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.declaration.scala"
                        },
                        2: {
                            name: "entity.name.class.declaration"
                        }
                    },
                    match: "\\b(trait)\\b\\s*(?!//|/\\*)((?:(?:[A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?|[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)|`[^`]+`))?"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.declaration.scala"
                        },
                        2: {
                            name: "keyword.declaration.scala"
                        },
                        3: {
                            name: "entity.name.class.declaration"
                        }
                    },
                    match: "\\b(?:(case)\\s+)?(class|object|enum)\\b\\s*(?!//|/\\*)((?:(?:[A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?|[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)|`[^`]+`))?"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.declaration.scala"
                        },
                        2: {
                            name: "entity.name.type.declaration"
                        }
                    },
                    match: "(?<!\\.)\\b(type)\\b\\s*(?!//|/\\*)((?:(?:[A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?|[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)|`[^`]+`))?"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.declaration.stable.scala"
                        },
                        2: {
                            name: "keyword.declaration.volatile.scala"
                        }
                    },
                    match: "\\b(?:(val)|(var))\\b\\s*(?!//|/\\*)(?=(?:(?:[A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?|[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)|`[^`]+`)?\\()"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.declaration.stable.scala"
                        },
                        2: {
                            name: "variable.stable.declaration.scala"
                        }
                    },
                    match: "\\b(val)\\b\\s*(?!//|/\\*)((?:(?:[A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?|[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)|`[^`]+`)(?:\\s*,\\s*(?:(?:[A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?|[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)|`[^`]+`))*)?"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.declaration.volatile.scala"
                        },
                        2: {
                            name: "variable.volatile.declaration.scala"
                        }
                    },
                    match: "\\b(var)\\b\\s*(?!//|/\\*)((?:(?:[A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?|[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)|`[^`]+`)(?:\\s*,\\s*(?:(?:[A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?|[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)|`[^`]+`))*)?"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.other.scoping.scala"
                        },
                        2: {
                            name: "keyword.declaration.scala"
                        },
                        3: {
                            name: "entity.name.class.declaration"
                        }
                    },
                    match: "\\b(package)\\s+(object)\\b\\s*(?!//|/\\*)((?:(?:[A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?|[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)|`[^`]+`))?"
                },
                {
                    begin: "\\b(package)\\s+",
                    beginCaptures: {
                        1: {
                            name: "keyword.other.import.scala"
                        }
                    },
                    end: "(?<=[\\n;])",
                    name: "meta.package.scala",
                    patterns: [
                        {
                            include: "#comments"
                        },
                        {
                            match: "(`[^`]+`|(?:[A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?|[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+))",
                            name: "entity.name.package.scala"
                        },
                        {
                            match: "\\.",
                            name: "punctuation.definition.package"
                        }
                    ]
                },
                {
                    captures: {
                        1: {
                            name: "keyword.declaration.scala"
                        },
                        2: {
                            name: "entity.name.given.declaration"
                        }
                    },
                    match: "\\b(given)\\b\\s*([_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?|`[^`]+`)?"
                }
            ]
        },
        "empty-parentheses": {
            captures: {
                1: {
                    name: "meta.bracket.scala"
                }
            },
            match: "(\\(\\))",
            name: "meta.parentheses.scala"
        },
        exports: {
            begin: "\\b(export)\\s+",
            beginCaptures: {
                1: {
                    name: "keyword.other.export.scala"
                }
            },
            end: "(?<=[\\n;])",
            name: "meta.export.scala",
            patterns: [
                {
                    include: "#comments"
                },
                {
                    match: "\\b(given)\\b",
                    name: "keyword.other.export.given.scala"
                },
                {
                    match: "[A-Z\\p{Lt}\\p{Lu}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?",
                    name: "entity.name.class.export.scala"
                },
                {
                    match: "(`[^`]+`|(?:[A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?|[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+))",
                    name: "entity.name.export.scala"
                },
                {
                    match: "\\.",
                    name: "punctuation.definition.export"
                },
                {
                    begin: "{",
                    beginCaptures: {
                        0: {
                            name: "meta.bracket.scala"
                        }
                    },
                    end: "}",
                    endCaptures: {
                        0: {
                            name: "meta.bracket.scala"
                        }
                    },
                    name: "meta.export.selector.scala",
                    patterns: [
                        {
                            captures: {
                                1: {
                                    name: "keyword.other.export.given.scala"
                                },
                                2: {
                                    name: "entity.name.class.export.renamed-from.scala"
                                },
                                3: {
                                    name: "entity.name.export.renamed-from.scala"
                                },
                                4: {
                                    name: "keyword.other.arrow.scala"
                                },
                                5: {
                                    name: "entity.name.class.export.renamed-to.scala"
                                },
                                6: {
                                    name: "entity.name.export.renamed-to.scala"
                                }
                            },
                            match: "(?x)(given\\s)?\\s*(?:([A-Z\\p{Lt}\\p{Lu}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?)|(`[^`]+`|(?:[A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?|[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)))\\s*(=>)\\s*(?:([A-Z\\p{Lt}\\p{Lu}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?)|(`[^`]+`|(?:[A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?|[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)))\\s*"
                        },
                        {
                            match: "\\b(given)\\b",
                            name: "keyword.other.export.given.scala"
                        },
                        {
                            captures: {
                                1: {
                                    name: "keyword.other.export.given.scala"
                                },
                                2: {
                                    name: "entity.name.class.export.scala"
                                },
                                3: {
                                    name: "entity.name.export.scala"
                                }
                            },
                            match: "(given\\s+)?(?:([A-Z\\p{Lt}\\p{Lu}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?)|(`[^`]+`|(?:[A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?|[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)))"
                        }
                    ]
                }
            ]
        },
        extension: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "keyword.declaration.scala"
                        }
                    },
                    match: "^\\s*(extension)\\s+(?=[\\[\\(])"
                }
            ]
        },
        imports: {
            begin: "\\b(import)\\s+",
            beginCaptures: {
                1: {
                    name: "keyword.other.import.scala"
                }
            },
            end: "(?<=[\\n;])",
            name: "meta.import.scala",
            patterns: [
                {
                    include: "#comments"
                },
                {
                    match: "\\b(given)\\b",
                    name: "keyword.other.import.given.scala"
                },
                {
                    match: "[A-Z\\p{Lt}\\p{Lu}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?",
                    name: "entity.name.class.import.scala"
                },
                {
                    match: "(`[^`]+`|(?:[A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?|[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+))",
                    name: "entity.name.import.scala"
                },
                {
                    match: "\\.",
                    name: "punctuation.definition.import"
                },
                {
                    begin: "{",
                    beginCaptures: {
                        0: {
                            name: "meta.bracket.scala"
                        }
                    },
                    end: "}",
                    endCaptures: {
                        0: {
                            name: "meta.bracket.scala"
                        }
                    },
                    name: "meta.import.selector.scala",
                    patterns: [
                        {
                            captures: {
                                1: {
                                    name: "keyword.other.import.given.scala"
                                },
                                2: {
                                    name: "entity.name.class.import.renamed-from.scala"
                                },
                                3: {
                                    name: "entity.name.import.renamed-from.scala"
                                },
                                4: {
                                    name: "keyword.other.arrow.scala"
                                },
                                5: {
                                    name: "entity.name.class.import.renamed-to.scala"
                                },
                                6: {
                                    name: "entity.name.import.renamed-to.scala"
                                }
                            },
                            match: "(?x)(given\\s)?\\s*(?:([A-Z\\p{Lt}\\p{Lu}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?)|(`[^`]+`|(?:[A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?|[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)))\\s*(=>)\\s*(?:([A-Z\\p{Lt}\\p{Lu}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?)|(`[^`]+`|(?:[A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?|[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)))\\s*"
                        },
                        {
                            match: "\\b(given)\\b",
                            name: "keyword.other.import.given.scala"
                        },
                        {
                            captures: {
                                1: {
                                    name: "keyword.other.import.given.scala"
                                },
                                2: {
                                    name: "entity.name.class.import.scala"
                                },
                                3: {
                                    name: "entity.name.import.scala"
                                }
                            },
                            match: "(given\\s+)?(?:([A-Z\\p{Lt}\\p{Lu}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?)|(`[^`]+`|(?:[A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?|[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)))"
                        }
                    ]
                }
            ]
        },
        inheritance: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "keyword.declaration.scala"
                        },
                        2: {
                            name: "entity.name.class"
                        }
                    },
                    match: '\\b(extends|with|derives)\\b\\s*([A-Z\\p{Lt}\\p{Lu}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?|`[^`]+`|(?=\\([^\\)]+=>)|(?=(?:[A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?|[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+))|(?="))?'
                }
            ]
        },
        initialization: {
            captures: {
                1: {
                    name: "keyword.declaration.scala"
                }
            },
            match: "\\b(new)\\b"
        },
        inline: {
            patterns: [
                {
                    match: "\\b(inline)(?=\\s+((?:[A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?|[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)|`[^`]+`)\\s*:)",
                    name: "storage.modifier.other"
                },
                {
                    match: "\\b(inline)\\b(?=(?:.(?!\\b(?:val|def|given)\\b))*\\b(if|match)\\b)",
                    name: "keyword.control.flow.scala"
                }
            ]
        },
        keywords: {
            patterns: [
                {
                    match: "\\b(return|throw)\\b",
                    name: "keyword.control.flow.jump.scala"
                },
                {
                    match: "\\b(classOf|isInstanceOf|asInstanceOf)\\b",
                    name: "support.function.type-of.scala"
                },
                {
                    match: "\\b(else|if|then|do|while|for|yield|match|case)\\b",
                    name: "keyword.control.flow.scala"
                },
                {
                    match: "^\\s*(end)\\s+(if|while|for|match)(?=\\s*(//.*|/\\*(?!.*\\*/\\s*\\S.*).*)?$)",
                    name: "keyword.control.flow.end.scala"
                },
                {
                    match: "^\\s*(end)\\s+(val)(?=\\s*(//.*|/\\*(?!.*\\*/\\s*\\S.*).*)?$)",
                    name: "keyword.declaration.stable.end.scala"
                },
                {
                    match: "^\\s*(end)\\s+(var)(?=\\s*(//.*|/\\*(?!.*\\*/\\s*\\S.*).*)?$)",
                    name: "keyword.declaration.volatile.end.scala"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.declaration.end.scala"
                        },
                        2: {
                            name: "keyword.declaration.end.scala"
                        },
                        3: {
                            name: "entity.name.type.declaration"
                        }
                    },
                    match: "^\\s*(end)\\s+(?:(new|extension)|([A-Z\\p{Lt}\\p{Lu}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?))(?=\\s*(//.*|/\\*(?!.*\\*/\\s*\\S.*).*)?$)"
                },
                {
                    match: "\\b(catch|finally|try)\\b",
                    name: "keyword.control.exception.scala"
                },
                {
                    match: "^\\s*(end)\\s+(try)(?=\\s*(//.*|/\\*(?!.*\\*/\\s*\\S.*).*)?$)",
                    name: "keyword.control.exception.end.scala"
                },
                {
                    captures: {
                        1: {
                            name: "keyword.declaration.end.scala"
                        },
                        2: {
                            name: "entity.name.declaration"
                        }
                    },
                    match: "^\\s*(end)\\s+(`[^`]+`|(?:[A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?|[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+))?(?=\\s*(//.*|/\\*(?!.*\\*/\\s*\\S.*).*)?$)"
                },
                {
                    match: "(==?|!=|<=|>=|<>|<|>)",
                    name: "keyword.operator.comparison.scala"
                },
                {
                    match: "(\\-|\\+|\\*|/(?![/*])|%|~)",
                    name: "keyword.operator.arithmetic.scala"
                },
                {
                    match: "(?<![!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]|_)(!|&&|\\|\\|)(?![!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}])",
                    name: "keyword.operator.logical.scala"
                },
                {
                    match: "(<-|←|->|→|=>|⇒|\\?|\\:+|@|\\|)+",
                    name: "keyword.operator.scala"
                }
            ]
        },
        "meta-bounds": {
            comment: "For themes: Matching view bounds",
            match: "<%|=:=|<:<|<%<|>:|<:",
            name: "meta.bounds.scala"
        },
        "meta-brackets": {
            comment: "For themes: Brackets look nice when colored.",
            patterns: [
                {
                    comment: "The punctuation.section.*.begin is needed for return snippet in source bundle",
                    match: "\\{",
                    name: "punctuation.section.block.begin.scala"
                },
                {
                    comment: "The punctuation.section.*.end is needed for return snippet in source bundle",
                    match: "\\}",
                    name: "punctuation.section.block.end.scala"
                },
                {
                    match: "{|}|\\(|\\)|\\[|\\]",
                    name: "meta.bracket.scala"
                }
            ]
        },
        "meta-colons": {
            comment: "For themes: Matching type colons",
            patterns: [
                {
                    match: "(?<!:):(?!:)",
                    name: "meta.colon.scala"
                }
            ]
        },
        "parameter-list": {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "variable.parameter.scala"
                        },
                        2: {
                            name: "meta.colon.scala"
                        }
                    },
                    match: "(?<=[^\\._$a-zA-Z0-9])(`[^`]+`|[_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?)\\s*(:)\\s+"
                }
            ]
        },
        qualifiedClassName: {
            captures: {
                1: {
                    name: "entity.name.class"
                }
            },
            match: "(\\b([A-Z][\\w]*)(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?)"
        },
        "scala-quoted-or-symbol": {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "keyword.control.flow.staging.scala constant.other.symbol.scala"
                        },
                        2: {
                            name: "constant.other.symbol.scala"
                        }
                    },
                    match: "(')((?>(?:[A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?|[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)))(?!')"
                },
                {
                    match: "'(?=\\s*\\{(?!'))",
                    name: "keyword.control.flow.staging.scala"
                },
                {
                    match: "'(?=\\s*\\[(?!'))",
                    name: "keyword.control.flow.staging.scala"
                },
                {
                    match: "\\$(?=\\s*\\{)",
                    name: "keyword.control.flow.staging.scala"
                }
            ]
        },
        "script-header": {
            captures: {
                1: {
                    name: "string.unquoted.shebang.scala"
                }
            },
            match: "^#!(.*)$",
            name: "comment.block.shebang.scala"
        },
        "singleton-type": {
            captures: {
                1: {
                    name: "keyword.type.scala"
                }
            },
            match: "\\.(type)(?![A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?|[0-9])"
        },
        "storage-modifiers": {
            patterns: [
                {
                    match: "\\b(private\\[\\S+\\]|protected\\[\\S+\\]|private|protected)\\b",
                    name: "storage.modifier.access"
                },
                {
                    match: "\\b(synchronized|@volatile|abstract|final|lazy|sealed|implicit|override|@transient|@native)\\b",
                    name: "storage.modifier.other"
                },
                {
                    match: "(?<=^|\\s)\\b(transparent|opaque|infix|open|inline)\\b(?=[a-z\\s]*\\b(def|val|var|given|type|class|trait|object|enum)\\b)",
                    name: "storage.modifier.other"
                }
            ]
        },
        "string-interpolation": {
            patterns: [
                {
                    match: "\\$\\$",
                    name: "constant.character.escape.interpolation.scala"
                },
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.template-expression.begin.scala"
                        }
                    },
                    match: "(\\$)([A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}][A-Z\\p{Lt}\\p{Lu}_a-z\\p{Lo}\\p{Nl}\\p{Ll}0-9]*)",
                    name: "meta.template.expression.scala"
                },
                {
                    begin: "\\$\\{",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.template-expression.begin.scala"
                        }
                    },
                    contentName: "meta.embedded.line.scala",
                    end: "\\}",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.template-expression.end.scala"
                        }
                    },
                    name: "meta.template.expression.scala",
                    patterns: [
                        {
                            include: "#code"
                        }
                    ]
                }
            ]
        },
        strings: {
            patterns: [
                {
                    begin: '"""',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.scala"
                        }
                    },
                    end: '"""(?!")',
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.scala"
                        }
                    },
                    name: "string.quoted.triple.scala",
                    patterns: [
                        {
                            match: "\\\\\\\\|\\\\u[0-9A-Fa-f]{4}",
                            name: "constant.character.escape.scala"
                        }
                    ]
                },
                {
                    begin: '\\b(raw)(""")',
                    beginCaptures: {
                        1: {
                            name: "keyword.interpolation.scala"
                        },
                        2: {
                            name: "string.quoted.triple.interpolated.scala punctuation.definition.string.begin.scala"
                        }
                    },
                    end: `(""")(?!")|\\$
|(\\$[^\\$"_{A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}])`,
                    endCaptures: {
                        1: {
                            name: "string.quoted.triple.interpolated.scala punctuation.definition.string.end.scala"
                        },
                        2: {
                            name: "invalid.illegal.unrecognized-string-escape.scala"
                        }
                    },
                    patterns: [
                        {
                            match: '\\$[\\$"]',
                            name: "constant.character.escape.scala"
                        },
                        {
                            include: "#string-interpolation"
                        },
                        {
                            match: ".",
                            name: "string.quoted.triple.interpolated.scala"
                        }
                    ]
                },
                {
                    begin: '\\b((?:[A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?))(""")',
                    beginCaptures: {
                        1: {
                            name: "keyword.interpolation.scala"
                        },
                        2: {
                            name: "string.quoted.triple.interpolated.scala punctuation.definition.string.begin.scala"
                        }
                    },
                    end: `(""")(?!")|\\$
|(\\$[^\\$"_{A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}])`,
                    endCaptures: {
                        1: {
                            name: "string.quoted.triple.interpolated.scala punctuation.definition.string.end.scala"
                        },
                        2: {
                            name: "invalid.illegal.unrecognized-string-escape.scala"
                        }
                    },
                    patterns: [
                        {
                            include: "#string-interpolation"
                        },
                        {
                            match: "\\\\\\\\|\\\\u[0-9A-Fa-f]{4}",
                            name: "constant.character.escape.scala"
                        },
                        {
                            match: ".",
                            name: "string.quoted.triple.interpolated.scala"
                        }
                    ]
                },
                {
                    begin: '"',
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.string.begin.scala"
                        }
                    },
                    end: '"',
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.string.end.scala"
                        }
                    },
                    name: "string.quoted.double.scala",
                    patterns: [
                        {
                            match: `\\\\(?:[btnfr\\\\"']|[0-7]{1,3}|u[0-9A-Fa-f]{4})`,
                            name: "constant.character.escape.scala"
                        },
                        {
                            match: "\\\\.",
                            name: "invalid.illegal.unrecognized-string-escape.scala"
                        }
                    ]
                },
                {
                    begin: '\\b(raw)(")',
                    beginCaptures: {
                        1: {
                            name: "keyword.interpolation.scala"
                        },
                        2: {
                            name: "string.quoted.double.interpolated.scala punctuation.definition.string.begin.scala"
                        }
                    },
                    end: `(")|\\$
|(\\$[^\\$"_{A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}])`,
                    endCaptures: {
                        1: {
                            name: "string.quoted.double.interpolated.scala punctuation.definition.string.end.scala"
                        },
                        2: {
                            name: "invalid.illegal.unrecognized-string-escape.scala"
                        }
                    },
                    patterns: [
                        {
                            match: '\\$[\\$"]',
                            name: "constant.character.escape.scala"
                        },
                        {
                            include: "#string-interpolation"
                        },
                        {
                            match: ".",
                            name: "string.quoted.double.interpolated.scala"
                        }
                    ]
                },
                {
                    begin: '\\b((?:[A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?))(")',
                    beginCaptures: {
                        1: {
                            name: "keyword.interpolation.scala"
                        },
                        2: {
                            name: "string.quoted.double.interpolated.scala punctuation.definition.string.begin.scala"
                        }
                    },
                    end: `(")|\\$
|(\\$[^\\$"_{A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}])`,
                    endCaptures: {
                        1: {
                            name: "string.quoted.double.interpolated.scala punctuation.definition.string.end.scala"
                        },
                        2: {
                            name: "invalid.illegal.unrecognized-string-escape.scala"
                        }
                    },
                    patterns: [
                        {
                            match: '\\$[\\$"]',
                            name: "constant.character.escape.scala"
                        },
                        {
                            include: "#string-interpolation"
                        },
                        {
                            match: `\\\\(?:[btnfr\\\\"']|[0-7]{1,3}|u[0-9A-Fa-f]{4})`,
                            name: "constant.character.escape.scala"
                        },
                        {
                            match: "\\\\.",
                            name: "invalid.illegal.unrecognized-string-escape.scala"
                        },
                        {
                            match: ".",
                            name: "string.quoted.double.interpolated.scala"
                        }
                    ]
                }
            ]
        },
        using: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "keyword.declaration.scala"
                        }
                    },
                    match: "(?<=\\()\\s*(using)\\s"
                }
            ]
        },
        "using-directive": {
            begin: "^\\s*(//>)\\s*(using)[^\\S\\n]+(?:(\\S+))?",
            beginCaptures: {
                1: {
                    name: "punctuation.definition.comment.scala"
                },
                2: {
                    name: "keyword.other.import.scala"
                },
                3: {
                    patterns: [
                        {
                            match: "[A-Z\\p{Lt}\\p{Lu}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?|`[^`]+`|(?:[A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}][A-Z\\p{Lt}\\p{Lu}_a-z\\$\\p{Lo}\\p{Nl}\\p{Ll}0-9]*(?:(?<=_)[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)?|[!#%&*+\\-\\/:<>=?@^|~\\p{Sm}\\p{So}]+)",
                            name: "entity.name.import.scala"
                        },
                        {
                            match: "\\.",
                            name: "punctuation.definition.import"
                        }
                    ]
                }
            },
            end: "\\n",
            name: "comment.line.shebang.scala",
            patterns: [
                {
                    include: "#constants"
                },
                {
                    include: "#strings"
                },
                {
                    match: "[^\\s,]+",
                    name: "string.quoted.double.scala"
                }
            ]
        },
        "xml-doublequotedString": {
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
                    include: "#xml-entity"
                }
            ]
        },
        "xml-embedded-content": {
            patterns: [
                {
                    begin: "{",
                    captures: {
                        0: {
                            name: "meta.bracket.scala"
                        }
                    },
                    end: "}",
                    name: "meta.source.embedded.scala",
                    patterns: [
                        {
                            include: "#code"
                        }
                    ]
                },
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
                    match: " (?:([-_a-zA-Z0-9]+)((:)))?([_a-zA-Z-]+)="
                },
                {
                    include: "#xml-doublequotedString"
                },
                {
                    include: "#xml-singlequotedString"
                }
            ]
        },
        "xml-entity": {
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
        "xml-literal": {
            patterns: [
                {
                    begin: "(<)((?:([_a-zA-Z0-9][_a-zA-Z0-9]*)((:)))?([_a-zA-Z0-9][-_a-zA-Z0-9:]*))(?=(\\s[^>]*)?></\\2>)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.tag.xml"
                        },
                        3: {
                            name: "entity.name.tag.namespace.xml"
                        },
                        4: {
                            name: "entity.name.tag.xml"
                        },
                        5: {
                            name: "punctuation.separator.namespace.xml"
                        },
                        6: {
                            name: "entity.name.tag.localname.xml"
                        }
                    },
                    comment: "We do not allow a tag name to start with a - since this would likely conflict with the <- operator. This is not very common for tag names anyway.  Also code such as -- if (val <val2 || val> val3) will falsly be recognized as an xml tag.  The solution is to put a space on either side of the comparison operator",
                    end: "(>(<))/(?:([-_a-zA-Z0-9]+)((:)))?([-_a-zA-Z0-9:]*[_a-zA-Z0-9])(>)",
                    endCaptures: {
                        1: {
                            name: "punctuation.definition.tag.xml"
                        },
                        2: {
                            name: "meta.scope.between-tag-pair.xml"
                        },
                        3: {
                            name: "entity.name.tag.namespace.xml"
                        },
                        4: {
                            name: "entity.name.tag.xml"
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
                            include: "#xml-embedded-content"
                        }
                    ]
                },
                {
                    begin: "(</?)(?:([_a-zA-Z0-9][-_a-zA-Z0-9]*)((:)))?([_a-zA-Z0-9][-_a-zA-Z0-9:]*)(?=[^>]*?>)",
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
                            include: "#xml-embedded-content"
                        }
                    ]
                },
                {
                    include: "#xml-entity"
                }
            ]
        },
        "xml-singlequotedString": {
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
                    include: "#xml-entity"
                }
            ]
        }
    },
    scopeName: "source.scala"
});
var e = [
    a
];
;
}}),
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/gnuplot-BlQVe05z.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>e)
});
const n = Object.freeze({
    displayName: "Gnuplot",
    fileTypes: [
        "gp",
        "plt",
        "plot",
        "gnuplot"
    ],
    name: "gnuplot",
    patterns: [
        {
            match: "(\\\\(?!\\n).*)",
            name: "invalid.illegal.backslash.gnuplot"
        },
        {
            match: "(;)",
            name: "punctuation.separator.statement.gnuplot"
        },
        {
            include: "#LineComment"
        },
        {
            include: "#DataBlock"
        },
        {
            include: "#MacroExpansion"
        },
        {
            include: "#VariableDecl"
        },
        {
            include: "#ArrayDecl"
        },
        {
            include: "#FunctionDecl"
        },
        {
            include: "#ShellCommand"
        },
        {
            include: "#Command"
        }
    ],
    repository: {
        ArrayDecl: {
            begin: `\\b(?x:
(array)\\s+
([A-Za-z_]\\w*)?


)`,
            beginCaptures: {
                1: {
                    name: "support.type.array.gnuplot"
                },
                2: {
                    name: "entity.name.variable.gnuplot",
                    patterns: [
                        {
                            include: "#InvalidVariableDecl"
                        },
                        {
                            include: "#BuiltinVariable"
                        }
                    ]
                }
            },
            end: "(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
            name: "meta.variable.gnuplot",
            patterns: [
                {
                    include: "#Expression"
                }
            ]
        },
        BuiltinFunction: {
            patterns: [
                {
                    match: `\\b(?x:
defined
)\\b`,
                    name: "invalid.deprecated.function.gnuplot"
                },
                {
                    match: `\\b(?x:
abs            |
acos           |
acosh          |
airy           |
arg            |
asin           |
asinh          |
atan           |
atan2          |
atanh          |
EllipticK      |
EllipticE      |
EllipticPi     |
besj0          |
besj1          |
besy0          |
besy1          |
ceil           |
cos            |
cosh           |
erf            |
erfc           |
exp            |
expint         |
floor          |
gamma          |
ibeta          |
inverf         |
igamma         |
imag           |
invnorm        |
int            |
lambertw       |
lgamma         |
log            |
log10          |
norm           |
rand           |
real           |
sgn            |
sin            |
sinh           |
sqrt           |
tan            |
tanh           |
voigt          |
cerf           |
cdawson        |
faddeeva       |
erfi           |
VP
)\\b`,
                    name: "support.function.math.gnuplot"
                },
                {
                    match: `\\b(?x:
gprintf        |
sprintf        |
strlen         |
strstrt        |
substr         |
strftime       |
strptime       |
system         |
word           |
words
)\\b`,
                    name: "support.function.string.gnuplot"
                },
                {
                    match: `\\b(?x:
column         |
columnhead     |
exists         |
hsv2rgb        |
stringcolumn   |
timecolumn     |
tm_hour        |
tm_mday        |
tm_min         |
tm_mon         |
tm_sec         |
tm_wday        |
tm_yday        |
tm_year        |
time           |
valid          |
value
)\\b`,
                    name: "support.function.other.gnuplot"
                }
            ]
        },
        BuiltinOperator: {
            patterns: [
                {
                    match: "(&&|\\|\\|)",
                    name: "keyword.operator.logical.gnuplot"
                },
                {
                    match: "(<<|>>|&|\\||\\^)",
                    name: "keyword.operator.bitwise.gnuplot"
                },
                {
                    match: "(==|!=|<=|<|>=|>)",
                    name: "keyword.operator.comparison.gnuplot"
                },
                {
                    match: "(=)",
                    name: "keyword.operator.assignment.gnuplot"
                },
                {
                    match: "(\\+|-|~|!)",
                    name: "keyword.operator.arithmetic.gnuplot"
                },
                {
                    match: "(\\*\\*|\\+|-|\\*|/|%)",
                    name: "keyword.operator.arithmetic.gnuplot"
                },
                {
                    captures: {
                        2: {
                            name: "keyword.operator.word.gnuplot"
                        }
                    },
                    match: "(\\.|\\b(eq|ne)\\b)",
                    name: "keyword.operator.strings.gnuplot"
                }
            ]
        },
        BuiltinVariable: {
            patterns: [
                {
                    match: `\\b(?x:
FIT_LIMIT           |
FIT_MAXITER         |
FIT_START_LAMBDA    |
FIT_LAMBDA_FACTOR   |
FIT_SKIP            |
FIT_INDEX
)\\b`,
                    name: "invalid.deprecated.variable.gnuplot"
                },
                {
                    match: "\\b(GPVAL_\\w*|MOUSE_\\w*)\\b",
                    name: "support.constant.gnuplot"
                },
                {
                    match: "\\b(ARG[0-9C]|GPFUN_\\w*|FIT_\\w*|STATS_\\w*|pi|NaN)\\b",
                    name: "support.variable.gnuplot"
                }
            ]
        },
        ColumnIndexLiteral: {
            match: "([$][0-9]+)\\b",
            name: "support.constant.columnindex.gnuplot"
        },
        Command: {
            patterns: [
                {
                    begin: `\\b(?x:
update
)\\b`,
                    end: "(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
                    name: "invalid.deprecated.command.gnuplot"
                },
                {
                    begin: `\\b(?x:
break        |
clear        |
continue     |
pwd          |
refresh      |
replot       |
reread       |
shell
)\\b`,
                    beginCaptures: {
                        0: {
                            name: "keyword.other.command.gnuplot"
                        }
                    },
                    end: "(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
                    patterns: [
                        {
                            include: "#InvalidWord"
                        }
                    ]
                },
                {
                    begin: `\\b(?x:
cd           |
call         |
eval         |
exit         |
help         |
history      |
load         |
lower        |
pause        |
print        |
printerr     |
quit         |
raise        |
save         |
stats        |
system       |
test         |
toggle
)\\b`,
                    beginCaptures: {
                        0: {
                            name: "keyword.other.command.gnuplot"
                        }
                    },
                    end: "(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
                    patterns: [
                        {
                            include: "#Expression"
                        }
                    ]
                },
                {
                    begin: "\\b(import)\\s(.+)\\s(from)",
                    beginCaptures: {
                        1: {
                            name: "keyword.control.import.gnuplot"
                        },
                        2: {
                            patterns: [
                                {
                                    include: "#FunctionDecl"
                                }
                            ]
                        },
                        3: {
                            name: "keyword.control.import.gnuplot"
                        }
                    },
                    end: "(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
                    patterns: [
                        {
                            include: "#SingleQuotedStringLiteral"
                        },
                        {
                            include: "#DoubleQuotedStringLiteral"
                        },
                        {
                            include: "#InvalidWord"
                        }
                    ]
                },
                {
                    begin: "\\b(reset)\\b",
                    beginCaptures: {
                        1: {
                            name: "keyword.other.command.gnuplot"
                        }
                    },
                    end: "(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
                    patterns: [
                        {
                            match: "\\b(bind|error(state)?|session)\\b",
                            name: "support.class.reset.gnuplot"
                        },
                        {
                            include: "#InvalidWord"
                        }
                    ]
                },
                {
                    begin: "\\b(undefine)\\b",
                    beginCaptures: {
                        1: {
                            name: "keyword.other.command.gnuplot"
                        }
                    },
                    end: "(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
                    patterns: [
                        {
                            include: "#BuiltinVariable"
                        },
                        {
                            include: "#BuiltinFunction"
                        },
                        {
                            match: "(?<=\\s)([$]?[A-Za-z_]\\w*\\*?)(?=\\s)",
                            name: "source.gnuplot"
                        },
                        {
                            include: "#InvalidWord"
                        }
                    ]
                },
                {
                    begin: "\\b(if|while)\\b",
                    beginCaptures: {
                        1: {
                            name: "keyword.control.conditional.gnuplot"
                        }
                    },
                    end: "(?=(\\{|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
                    patterns: [
                        {
                            include: "#Expression"
                        }
                    ]
                },
                {
                    begin: "\\b(else)\\b",
                    beginCaptures: {
                        1: {
                            name: "keyword.control.conditional.gnuplot"
                        }
                    },
                    end: "(?=(\\{|#|\\\\(?!\\n)|(?<!\\\\)\\n$))"
                },
                {
                    begin: "\\b(do)\\b",
                    beginCaptures: {
                        1: {
                            name: "keyword.control.flow.gnuplot"
                        }
                    },
                    end: "(?=(\\{|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
                    patterns: [
                        {
                            include: "#ForIterationExpr"
                        }
                    ]
                },
                {
                    begin: "\\b(set)(?=\\s+pm3d)\\b",
                    beginCaptures: {
                        1: {
                            name: "keyword.other.command.gnuplot"
                        }
                    },
                    end: "(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
                    patterns: [
                        {
                            match: "\\b(hidden3d|map|transparent|solid)\\b",
                            name: "invalid.deprecated.options.gnuplot"
                        },
                        {
                            include: "#SetUnsetOptions"
                        },
                        {
                            include: "#ForIterationExpr"
                        },
                        {
                            include: "#Expression"
                        }
                    ]
                },
                {
                    begin: "\\b((un)?set)\\b",
                    beginCaptures: {
                        1: {
                            name: "keyword.other.command.gnuplot"
                        }
                    },
                    end: "(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
                    patterns: [
                        {
                            include: "#SetUnsetOptions"
                        },
                        {
                            include: "#ForIterationExpr"
                        },
                        {
                            include: "#Expression"
                        }
                    ]
                },
                {
                    begin: "\\b(show)\\b",
                    beginCaptures: {
                        1: {
                            name: "keyword.other.command.gnuplot"
                        }
                    },
                    end: "(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
                    patterns: [
                        {
                            include: "#ExtraShowOptions"
                        },
                        {
                            include: "#SetUnsetOptions"
                        },
                        {
                            include: "#Expression"
                        }
                    ]
                },
                {
                    begin: "\\b(fit|(s)?plot)\\b",
                    beginCaptures: {
                        1: {
                            name: "keyword.other.command.gnuplot"
                        }
                    },
                    end: "(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
                    patterns: [
                        {
                            include: "#ColumnIndexLiteral"
                        },
                        {
                            include: "#PlotModifiers"
                        },
                        {
                            include: "#ForIterationExpr"
                        },
                        {
                            include: "#Expression"
                        }
                    ]
                }
            ]
        },
        DataBlock: {
            begin: `(?x:
([$][A-Za-z_]\\w*)\\s*
(<<)\\s*
([A-Za-z_]\\w*)\\s*
(?=(\\#|$))
)`,
            beginCaptures: {
                1: {
                    patterns: [
                        {
                            include: "#SpecialVariable"
                        }
                    ]
                },
                3: {
                    name: "constant.language.datablock.gnuplot"
                }
            },
            end: "^(\\3)\\b(.*)",
            endCaptures: {
                1: {
                    name: "constant.language.datablock.gnuplot"
                },
                2: {
                    name: "invalid.illegal.datablock.gnuplot"
                }
            },
            name: "meta.datablock.gnuplot",
            patterns: [
                {
                    include: "#LineComment"
                },
                {
                    include: "#NumberLiteral"
                },
                {
                    include: "#DoubleQuotedStringLiteral"
                }
            ]
        },
        DeprecatedScriptArgsLiteral: {
            match: "([$][0-9#])",
            name: "invalid.illegal.scriptargs.gnuplot"
        },
        DoubleQuotedStringLiteral: {
            begin: '(")',
            beginCaptures: {
                1: {
                    name: "punctuation.definition.string.begin.gnuplot"
                }
            },
            end: '((")|(?=(?<!\\\\)\\n$))',
            endCaptures: {
                0: {
                    name: "punctuation.definition.string.end.gnuplot"
                }
            },
            name: "string.quoted.double.gnuplot",
            patterns: [
                {
                    include: "#EscapedChar"
                },
                {
                    include: "#RGBColorSpec"
                },
                {
                    include: "#DeprecatedScriptArgsLiteral"
                },
                {
                    include: "#InterpolatedStringLiteral"
                }
            ]
        },
        EscapedChar: {
            match: "(\\\\.)",
            name: "constant.character.escape.gnuplot"
        },
        Expression: {
            patterns: [
                {
                    include: "#Literal"
                },
                {
                    include: "#SpecialVariable"
                },
                {
                    include: "#BuiltinVariable"
                },
                {
                    include: "#BuiltinOperator"
                },
                {
                    include: "#TernaryExpr"
                },
                {
                    include: "#FunctionCallExpr"
                },
                {
                    include: "#SummationExpr"
                }
            ]
        },
        ExtraShowOptions: {
            match: `\\b(?x:
all                         |
bind                        |
colornames                  |
functions                   |
plot                        |
variables                   |
version
)\\b`,
            name: "support.class.options.gnuplot"
        },
        ForIterationExpr: {
            begin: `\\b(?x:
(for)\\s*
(\\[)\\s*
(?:
([A-Za-z_]\\w*)\\s+
(in)\\b
)?
)`,
            beginCaptures: {
                1: {
                    name: "keyword.control.flow.gnuplot"
                },
                2: {
                    patterns: [
                        {
                            include: "#RangeSeparators"
                        }
                    ]
                },
                3: {
                    name: "variable.other.iterator.gnuplot"
                },
                4: {
                    name: "keyword.control.flow.gnuplot"
                }
            },
            end: "((\\])|(?=(#|\\\\(?!\\n)|(?<!\\\\)\\n$)))",
            endCaptures: {
                2: {
                    patterns: [
                        {
                            include: "#RangeSeparators"
                        }
                    ]
                }
            },
            patterns: [
                {
                    include: "#Expression"
                },
                {
                    include: "#RangeSeparators"
                }
            ]
        },
        FunctionCallExpr: {
            begin: "\\b([A-Za-z_]\\w*)\\s*(\\()",
            beginCaptures: {
                1: {
                    name: "variable.function.gnuplot",
                    patterns: [
                        {
                            include: "#BuiltinFunction"
                        }
                    ]
                },
                2: {
                    name: "punctuation.definition.arguments.begin.gnuplot"
                }
            },
            end: "((\\))|(?=(#|\\\\(?!\\n)|(?<!\\\\)\\n$)))",
            endCaptures: {
                2: {
                    name: "punctuation.definition.arguments.end.gnuplot"
                }
            },
            name: "meta.function-call.gnuplot",
            patterns: [
                {
                    include: "#Expression"
                }
            ]
        },
        FunctionDecl: {
            begin: `\\b(?x:
([A-Za-z_]\\w*)\\s*
(
(\\()\\s*
([A-Za-z_]\\w*)\\s*
(?:
(,)\\s*
([A-Za-z_]\\w*)\\s*
)*
(\\))
)
)`,
            beginCaptures: {
                1: {
                    name: "entity.name.function.gnuplot",
                    patterns: [
                        {
                            include: "#BuiltinFunction"
                        }
                    ]
                },
                2: {
                    name: "meta.function.parameters.gnuplot"
                },
                3: {
                    name: "punctuation.definition.parameters.begin.gnuplot"
                },
                4: {
                    name: "variable.parameter.function.language.gnuplot"
                },
                5: {
                    name: "punctuation.separator.parameters.gnuplot"
                },
                6: {
                    name: "variable.parameter.function.language.gnuplot"
                },
                7: {
                    name: "punctuation.definition.parameters.end.gnuplot"
                }
            },
            end: "(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
            name: "meta.function.gnuplot",
            patterns: [
                {
                    include: "#Expression"
                }
            ]
        },
        InterpolatedStringLiteral: {
            begin: "(`)",
            beginCaptures: {
                1: {
                    name: "punctuation.definition.string.begin.gnuplot"
                }
            },
            end: "((`)|(?=(?<!\\\\)\\n$))",
            endCaptures: {
                0: {
                    name: "punctuation.definition.string.end.gnuplot"
                }
            },
            name: "string.interpolated.gnuplot",
            patterns: [
                {
                    include: "#EscapedChar"
                }
            ]
        },
        InvalidVariableDecl: {
            match: "\\b(GPVAL_\\w*|MOUSE_\\w*)\\b",
            name: "invalid.illegal.variable.gnuplot"
        },
        InvalidWord: {
            match: "([^;#\\\\[:space:]]+)",
            name: "invalid.illegal.gnuplot"
        },
        LineComment: {
            begin: "(#)",
            beginCaptures: {
                1: {
                    name: "punctuation.definition.comment.begin.gnuplot"
                }
            },
            end: "(?=(?<!\\\\)\\n$)",
            endCaptures: {
                0: {
                    name: "punctuation.definition.comment.end.gnuplot"
                }
            },
            name: "comment.line.number-sign.gnuplot"
        },
        Literal: {
            patterns: [
                {
                    include: "#NumberLiteral"
                },
                {
                    include: "#DeprecatedScriptArgsLiteral"
                },
                {
                    include: "#SingleQuotedStringLiteral"
                },
                {
                    include: "#DoubleQuotedStringLiteral"
                },
                {
                    include: "#InterpolatedStringLiteral"
                }
            ]
        },
        MacroExpansion: {
            begin: "([@][A-Za-z_]\\w*)",
            beginCaptures: {
                1: {
                    patterns: [
                        {
                            include: "#SpecialVariable"
                        }
                    ]
                }
            },
            end: "(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
            patterns: [
                {
                    include: "#Expression"
                }
            ]
        },
        NumberLiteral: {
            patterns: [
                {
                    match: `(?x:

( ((\\b[0-9]+)|(?<!\\d)) )
( [.][0-9]+ )
( [Ee][+-]?[0-9]+ )?
)(cm|in)?\\b`,
                    name: "constant.numeric.float.gnuplot"
                },
                {
                    match: `(?x:

( \\b[0-9]+ )
(
(     ( [Ee][+-]?[0-9]+\\b )  ) |
( [.] ( [Ee][+-]?[0-9]+\\b )? )
)
)(cm\\b|in\\b)?`,
                    name: "constant.numeric.float.gnuplot"
                },
                {
                    match: "\\b(0[Xx][0-9a-fA-F]+)(cm|in)?\\b",
                    name: "constant.numeric.hex.gnuplot"
                },
                {
                    match: "\\b(0+)(cm|in)?\\b",
                    name: "constant.numeric.dec.gnuplot"
                },
                {
                    match: "\\b(0[0-7]+)(cm|in)?\\b",
                    name: "constant.numeric.oct.gnuplot"
                },
                {
                    match: "\\b(0[0-9]+)(cm|in)?\\b",
                    name: "invalid.illegal.oct.gnuplot"
                },
                {
                    match: "\\b([0-9]+)(cm|in)?\\b",
                    name: "constant.numeric.dec.gnuplot"
                }
            ]
        },
        PlotModifiers: {
            patterns: [
                {
                    match: "\\b(thru)\\b",
                    name: "invalid.deprecated.plot.gnuplot"
                },
                {
                    match: `\\b(?x:
in(dex)?            |
every               |
us(ing)?            |
wi(th)?             |
via
)\\b`,
                    name: "storage.type.plot.gnuplot"
                },
                {
                    match: "\\b(newhist(ogram)?)\\b",
                    name: "storage.type.plot.gnuplot"
                }
            ]
        },
        RGBColorSpec: {
            match: "\\G(0x|#)(([0-9a-fA-F]{6})|([0-9a-fA-F]{8}))\\b",
            name: "constant.other.placeholder.gnuplot"
        },
        RangeSeparators: {
            patterns: [
                {
                    match: "(\\[)",
                    name: "punctuation.section.brackets.begin.gnuplot"
                },
                {
                    match: "(:)",
                    name: "punctuation.separator.range.gnuplot"
                },
                {
                    match: "(\\])",
                    name: "punctuation.section.brackets.end.gnuplot"
                }
            ]
        },
        SetUnsetOptions: {
            patterns: [
                {
                    match: `\\G\\s*\\b(?x:
clabel              |
data                |
function            |
historysize         |
macros              |
ticslevel           |
ticscale            |
(style\\s+increment\\s+\\w+)
)\\b`,
                    name: "invalid.deprecated.options.gnuplot"
                },
                {
                    match: `\\G\\s*\\b(?x:
angles              |
arrow               |
autoscale           |
border              |
boxwidth            |
clip                |
cntr(label|param)   |
color(box|sequence)?|
contour             |
(dash|line)type     |
datafile            |
decimal(sign)?      |
dgrid3d             |
dummy               |
encoding            |
(error)?bars        |
fit                 |
fontpath            |
format              |
grid                |
hidden3d            |
history             |
(iso)?samples       |
jitter              |
key                 |
label               |
link                |
loadpath            |
locale              |
logscale            |
mapping             |
[lrtb]margin        |
margins             |
micro               |
minus(sign)?        |
mono(chrome)?       |
mouse               |
multiplot           |
nonlinear           |
object              |
offsets             |
origin              |
output              |
parametric          |
(p|r)axis           |
pm3d                |
palette             |
pointintervalbox    |
pointsize           |
polar               |
print               |
psdir               |
size                |
style               |
surface             |
table               |
terminal            |
termoption          |
theta               |
tics                |
timestamp           |
timefmt             |
title               |
view                |
xyplane             |
zero                |
(no)?(m)?(x|x2|y|y2|z|cb|r|t)tics  |
(x|x2|y|y2|z|cb)data               |
(x|x2|y|y2|z|cb|r)label            |
(x|x2|y|y2|z|cb)dtics              |
(x|x2|y|y2|z|cb)mtics              |
(x|x2|y|y2|z|cb|[rtuv])range       |
(x|x2|y|y2|z)?zeroaxis
)\\b`,
                    name: "support.class.options.gnuplot"
                }
            ]
        },
        ShellCommand: {
            begin: "(!)",
            beginCaptures: {
                1: {
                    name: "keyword.other.shell.gnuplot"
                }
            },
            end: "(?=(#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
            patterns: [
                {
                    match: "([^#]|\\\\(?=\\n))",
                    name: "string.unquoted"
                }
            ]
        },
        SingleQuotedStringLiteral: {
            begin: "(')",
            beginCaptures: {
                1: {
                    name: "punctuation.definition.string.begin.gnuplot"
                }
            },
            end: "((')(?!')|(?=(?<!\\\\)\\n$))",
            endCaptures: {
                0: {
                    name: "punctuation.definition.string.end.gnuplot"
                }
            },
            name: "string.quoted.single.gnuplot",
            patterns: [
                {
                    include: "#RGBColorSpec"
                },
                {
                    match: "('')",
                    name: "constant.character.escape.gnuplot"
                }
            ]
        },
        SpecialVariable: {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "constant.language.wildcard.gnuplot"
                        }
                    },
                    match: "(?<=[\\[:=])\\s*(\\*)\\s*(?=[:\\]])"
                },
                {
                    captures: {
                        2: {
                            name: "punctuation.definition.variable.gnuplot"
                        }
                    },
                    match: "(([@$])[A-Za-z_]\\w*)\\b",
                    name: "constant.language.special.gnuplot"
                }
            ]
        },
        SummationExpr: {
            begin: "\\b(sum)\\s*(\\[)",
            beginCaptures: {
                1: {
                    name: "keyword.other.sum.gnuplot"
                },
                2: {
                    patterns: [
                        {
                            include: "#RangeSeparators"
                        }
                    ]
                }
            },
            end: "((\\])|(?=(#|\\\\(?!\\n)|(?<!\\\\)\\n$)))",
            endCaptures: {
                2: {
                    patterns: [
                        {
                            include: "#RangeSeparators"
                        }
                    ]
                }
            },
            patterns: [
                {
                    include: "#Expression"
                },
                {
                    include: "#RangeSeparators"
                }
            ]
        },
        TernaryExpr: {
            begin: "(?<!\\?)(\\?)(?!\\?)",
            beginCaptures: {
                1: {
                    name: "keyword.operator.ternary.gnuplot"
                }
            },
            end: "((?<!:)(:)(?!:)|(?=(#|\\\\(?!\\n)|(?<!\\\\)\\n$)))",
            endCaptures: {
                2: {
                    name: "keyword.operator.ternary.gnuplot"
                }
            },
            patterns: [
                {
                    include: "#Expression"
                }
            ]
        },
        VariableDecl: {
            begin: `\\b(?x:
([A-Za-z_]\\w*)\\s*
(?:
(\\[)\\s*
(.*)\\s*
(\\])\\s*
)?
(?=(=)(?!\\s*=))
)`,
            beginCaptures: {
                1: {
                    name: "entity.name.variable.gnuplot",
                    patterns: [
                        {
                            include: "#InvalidVariableDecl"
                        },
                        {
                            include: "#BuiltinVariable"
                        }
                    ]
                },
                3: {
                    patterns: [
                        {
                            include: "#Expression"
                        }
                    ]
                }
            },
            end: "(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
            name: "meta.variable.gnuplot",
            patterns: [
                {
                    include: "#Expression"
                }
            ]
        }
    },
    scopeName: "source.gnuplot"
});
var e = [
    n
];
;
}}),
"[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/latex-DJkqUiw5.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>V)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$tex$2d$DFx9gLNm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/tex-DFx9gLNm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$css$2d$CAzixsid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/css-CAzixsid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$haskell$2d$BfFu8DD8$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/haskell-BfFu8DD8.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$html$2d$CUoAo5SS$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/html-CUoAo5SS.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$xml$2d$CfRpfi_B$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/xml-CfRpfi_B.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$java$2d$Bk2JzfKB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/java-Bk2JzfKB.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$lua$2d$5TZ$2d$G8Be$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/lua-5TZ-G8Be.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$julia$2d$DLg_x4fm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/julia-DLg_x4fm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$ruby$2d$Brn6Q9Db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/ruby-Brn6Q9Db.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$javascript$2d$DYrC$2d$pEL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/javascript-DYrC-pEL.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$typescript$2d$CO9IEkHz$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/typescript-CO9IEkHz.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$python$2d$BQXev0_W$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/python-BQXev0_W.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$yaml$2d$PGla5xPP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/yaml-PGla5xPP.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$rust$2d$FKJVU_QG$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/rust-FKJVU_QG.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$scala$2d$D9aYzKDa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/scala-D9aYzKDa.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$gnuplot$2d$BlQVe05z$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@zoerai+zoer-copilot@0.0.3_@emotion+is-prop-valid@1.3.1_@types+react-dom@19.1.6_@types+_c9bb07ed57590fa35a513241fe4dea77/node_modules/@zoerai/zoer-copilot/dist/gnuplot-BlQVe05z.js [app-ssr] (ecmascript)");
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
;
;
;
;
;
const x = Object.freeze({
    displayName: "LaTeX",
    name: "latex",
    patterns: [
        {
            comment: "This scope identifies partially typed commands such as `\\tab`. We use this to trigger “Command Completion” only when it makes sense.",
            match: "(?<=\\\\[\\w@]|\\\\[\\w@]{2}|\\\\[\\w@]{3}|\\\\[\\w@]{4}|\\\\[\\w@]{5}|\\\\[\\w@]{6})\\s",
            name: "meta.space-after-command.latex"
        },
        {
            begin: "((\\\\)(?:usepackage|documentclass))\\b(?=\\[|\\{)",
            beginCaptures: {
                1: {
                    name: "keyword.control.preamble.latex"
                },
                2: {
                    name: "punctuation.definition.function.latex"
                }
            },
            end: "(?<=\\})",
            endCaptures: {
                0: {
                    name: "punctuation.definition.arguments.end.latex"
                }
            },
            name: "meta.preamble.latex",
            patterns: [
                {
                    include: "#multiline-optional-arg"
                },
                {
                    begin: "((?:\\G|(?<=\\]))\\{)",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.arguments.begin.latex"
                        }
                    },
                    contentName: "support.class.latex",
                    end: "(\\})",
                    endCaptures: {
                        0: {
                            name: "punctuation.definition.arguments.end.latex"
                        }
                    },
                    patterns: [
                        {
                            include: "$self"
                        }
                    ]
                }
            ]
        },
        {
            begin: "((\\\\)(?:include|input))(\\{)",
            beginCaptures: {
                1: {
                    name: "keyword.control.include.latex"
                },
                2: {
                    name: "punctuation.definition.function.latex"
                },
                3: {
                    name: "punctuation.definition.arguments.begin.latex"
                }
            },
            end: "\\}",
            endCaptures: {
                0: {
                    name: "punctuation.definition.arguments.end.latex"
                }
            },
            name: "meta.include.latex",
            patterns: [
                {
                    include: "$self"
                }
            ]
        },
        {
            begin: "((\\\\)((?:sub){0,2}section|(?:sub)?paragraph|chapter|part|addpart|addchap|addsec|minisec|frametitle)(?:\\*)?)((?:\\[[^\\[]*?\\]){0,2})(\\{)",
            beginCaptures: {
                1: {
                    name: "support.function.section.latex"
                },
                2: {
                    name: "punctuation.definition.function.latex"
                },
                4: {
                    patterns: [
                        {
                            include: "#optional-arg"
                        }
                    ]
                },
                5: {
                    name: "punctuation.definition.arguments.begin.latex"
                }
            },
            comment: "this works OK with all kinds of crazy stuff as long as section is one line",
            contentName: "entity.name.section.latex",
            end: "\\}",
            endCaptures: {
                0: {
                    name: "punctuation.definition.arguments.end.latex"
                }
            },
            name: "meta.function.section.$3.latex",
            patterns: [
                {
                    include: "text.tex#braces"
                },
                {
                    include: "$base"
                }
            ]
        },
        {
            begin: "((?:\\s*)\\\\begin\\{songs\\}\\{.*\\})",
            captures: {
                1: {
                    patterns: [
                        {
                            include: "#begin-env-tokenizer"
                        }
                    ]
                }
            },
            contentName: "meta.data.environment.songs.latex",
            end: "(\\\\end\\{songs\\}(?:\\s*\\n)?)",
            name: "meta.function.environment.songs.latex",
            patterns: [
                {
                    begin: "\\\\\\[",
                    end: "\\]",
                    name: "meta.chord.block.latex support.class.chord.block.environment.latex",
                    patterns: [
                        {
                            include: "$base"
                        }
                    ]
                },
                {
                    match: "\\^",
                    name: "meta.chord.block.latex support.class.chord.block.environment.latex"
                },
                {
                    include: "$self"
                }
            ]
        },
        {
            begin: "(^\\s*)?\\\\begin\\{(lstlisting|minted|pyglist)\\}(?=\\[|\\{)",
            captures: {
                0: {
                    patterns: [
                        {
                            include: "#begin-env-tokenizer"
                        }
                    ]
                }
            },
            end: "\\\\end\\{(?:minted|lstlisting|pyglist)\\}",
            patterns: [
                {
                    include: "#multiline-optional-arg-no-highlight"
                },
                {
                    begin: "(?:\\G|(?<=\\]))(\\{)((?:c|cpp))(\\})",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        },
                        2: {
                            name: "variable.parameter.function.latex"
                        },
                        3: {
                            name: "punctuation.definition.arguments.end.latex"
                        }
                    },
                    contentName: "source.cpp.embedded.latex",
                    end: "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
                    patterns: [
                        {
                            include: "source.cpp.embedded.latex"
                        }
                    ]
                },
                {
                    begin: "(?:\\G|(?<=\\]))(\\{)((?:asy|asymptote))(\\})",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        },
                        2: {
                            name: "variable.parameter.function.latex"
                        },
                        3: {
                            name: "punctuation.definition.arguments.end.latex"
                        }
                    },
                    contentName: "source.asy",
                    end: "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
                    patterns: [
                        {
                            include: "source.asy"
                        }
                    ]
                },
                {
                    begin: "(?:\\G|(?<=\\]))(\\{)((?:css))(\\})",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        },
                        2: {
                            name: "variable.parameter.function.latex"
                        },
                        3: {
                            name: "punctuation.definition.arguments.end.latex"
                        }
                    },
                    contentName: "source.css",
                    end: "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
                    patterns: [
                        {
                            include: "source.css"
                        }
                    ]
                },
                {
                    begin: "(?:\\G|(?<=\\]))(\\{)((?:hs|haskell))(\\})",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        },
                        2: {
                            name: "variable.parameter.function.latex"
                        },
                        3: {
                            name: "punctuation.definition.arguments.end.latex"
                        }
                    },
                    contentName: "source.haskell",
                    end: "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
                    patterns: [
                        {
                            include: "source.haskell"
                        }
                    ]
                },
                {
                    begin: "(?:\\G|(?<=\\]))(\\{)((?:html))(\\})",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        },
                        2: {
                            name: "variable.parameter.function.latex"
                        },
                        3: {
                            name: "punctuation.definition.arguments.end.latex"
                        }
                    },
                    contentName: "text.html",
                    end: "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
                    patterns: [
                        {
                            include: "text.html.basic"
                        }
                    ]
                },
                {
                    begin: "(?:\\G|(?<=\\]))(\\{)((?:xml))(\\})",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        },
                        2: {
                            name: "variable.parameter.function.latex"
                        },
                        3: {
                            name: "punctuation.definition.arguments.end.latex"
                        }
                    },
                    contentName: "text.xml",
                    end: "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
                    patterns: [
                        {
                            include: "text.xml"
                        }
                    ]
                },
                {
                    begin: "(?:\\G|(?<=\\]))(\\{)((?:java))(\\})",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        },
                        2: {
                            name: "variable.parameter.function.latex"
                        },
                        3: {
                            name: "punctuation.definition.arguments.end.latex"
                        }
                    },
                    contentName: "source.java",
                    end: "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
                    patterns: [
                        {
                            include: "source.java"
                        }
                    ]
                },
                {
                    begin: "(?:\\G|(?<=\\]))(\\{)((?:lua))(\\})",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        },
                        2: {
                            name: "variable.parameter.function.latex"
                        },
                        3: {
                            name: "punctuation.definition.arguments.end.latex"
                        }
                    },
                    contentName: "source.lua",
                    end: "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
                    patterns: [
                        {
                            include: "source.lua"
                        }
                    ]
                },
                {
                    begin: "(?:\\G|(?<=\\]))(\\{)((?:jl|julia))(\\})",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        },
                        2: {
                            name: "variable.parameter.function.latex"
                        },
                        3: {
                            name: "punctuation.definition.arguments.end.latex"
                        }
                    },
                    contentName: "source.julia",
                    end: "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
                    patterns: [
                        {
                            include: "source.julia"
                        }
                    ]
                },
                {
                    begin: "(?:\\G|(?<=\\]))(\\{)((?:rb|ruby))(\\})",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        },
                        2: {
                            name: "variable.parameter.function.latex"
                        },
                        3: {
                            name: "punctuation.definition.arguments.end.latex"
                        }
                    },
                    contentName: "source.ruby",
                    end: "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
                    patterns: [
                        {
                            include: "source.ruby"
                        }
                    ]
                },
                {
                    begin: "(?:\\G|(?<=\\]))(\\{)((?:js|javascript))(\\})",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        },
                        2: {
                            name: "variable.parameter.function.latex"
                        },
                        3: {
                            name: "punctuation.definition.arguments.end.latex"
                        }
                    },
                    contentName: "source.js",
                    end: "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
                    patterns: [
                        {
                            include: "source.js"
                        }
                    ]
                },
                {
                    begin: "(?:\\G|(?<=\\]))(\\{)((?:ts|typescript))(\\})",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        },
                        2: {
                            name: "variable.parameter.function.latex"
                        },
                        3: {
                            name: "punctuation.definition.arguments.end.latex"
                        }
                    },
                    contentName: "source.ts",
                    end: "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
                    patterns: [
                        {
                            include: "source.ts"
                        }
                    ]
                },
                {
                    begin: "(?:\\G|(?<=\\]))(\\{)((?:py|python))(\\})",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        },
                        2: {
                            name: "variable.parameter.function.latex"
                        },
                        3: {
                            name: "punctuation.definition.arguments.end.latex"
                        }
                    },
                    contentName: "source.python",
                    end: "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
                    patterns: [
                        {
                            include: "source.python"
                        }
                    ]
                },
                {
                    begin: "(?:\\G|(?<=\\]))(\\{)((?:yaml))(\\})",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        },
                        2: {
                            name: "variable.parameter.function.latex"
                        },
                        3: {
                            name: "punctuation.definition.arguments.end.latex"
                        }
                    },
                    contentName: "source.yaml",
                    end: "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
                    patterns: [
                        {
                            include: "source.yaml"
                        }
                    ]
                },
                {
                    begin: "(?:\\G|(?<=\\]))(\\{)((?:rust))(\\})",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        },
                        2: {
                            name: "variable.parameter.function.latex"
                        },
                        3: {
                            name: "punctuation.definition.arguments.end.latex"
                        }
                    },
                    contentName: "source.rust",
                    end: "^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",
                    patterns: [
                        {
                            include: "source.rust"
                        }
                    ]
                },
                {
                    begin: "(?:\\G|(?<=\\]))(\\{)([a-zA-Z]*)(\\})",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        },
                        2: {
                            name: "variable.parameter.function.latex"
                        },
                        3: {
                            name: "punctuation.definition.arguments.end.latex"
                        }
                    },
                    contentName: "meta.function.embedded.latex",
                    end: "^\\s*(?=\\\\end\\{(?:lstlisting|minted|pyglist)\\})",
                    name: "meta.embedded.block.generic.latex"
                }
            ]
        },
        {
            begin: "\\s*\\\\begin\\{(?:cppcode)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",
            captures: {
                0: {
                    patterns: [
                        {
                            include: "#begin-env-tokenizer"
                        }
                    ]
                }
            },
            end: "\\s*\\\\end\\{(?:cppcode)\\*?\\}",
            patterns: [
                {
                    include: "#multiline-optional-arg-no-highlight"
                },
                {
                    begin: "(?:\\G|(?<=\\]))(\\{)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        }
                    },
                    contentName: "variable.parameter.function.latex",
                    end: "(\\})",
                    endCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.end.latex"
                        }
                    }
                },
                {
                    begin: "^(?=\\s*)",
                    contentName: "source.cpp.embedded.latex",
                    end: "^\\s*(?=\\\\end\\{(?:cppcode)\\*?\\})",
                    patterns: [
                        {
                            include: "source.cpp.embedded.latex"
                        }
                    ]
                }
            ]
        },
        {
            begin: "\\s*\\\\begin\\{(?:hscode)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",
            captures: {
                0: {
                    patterns: [
                        {
                            include: "#begin-env-tokenizer"
                        }
                    ]
                }
            },
            end: "\\s*\\\\end\\{(?:hscode)\\*?\\}",
            patterns: [
                {
                    include: "#multiline-optional-arg-no-highlight"
                },
                {
                    begin: "(?:\\G|(?<=\\]))(\\{)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        }
                    },
                    contentName: "variable.parameter.function.latex",
                    end: "(\\})",
                    endCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.end.latex"
                        }
                    }
                },
                {
                    begin: "^(?=\\s*)",
                    contentName: "source.haskell",
                    end: "^\\s*(?=\\\\end\\{(?:hscode)\\*?\\})",
                    patterns: [
                        {
                            include: "source.haskell"
                        }
                    ]
                }
            ]
        },
        {
            begin: "\\s*\\\\begin\\{(?:luacode)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",
            captures: {
                0: {
                    patterns: [
                        {
                            include: "#begin-env-tokenizer"
                        }
                    ]
                }
            },
            end: "\\s*\\\\end\\{(?:luacode)\\*?\\}",
            patterns: [
                {
                    include: "#multiline-optional-arg-no-highlight"
                },
                {
                    begin: "(?:\\G|(?<=\\]))(\\{)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        }
                    },
                    contentName: "variable.parameter.function.latex",
                    end: "(\\})",
                    endCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.end.latex"
                        }
                    }
                },
                {
                    begin: "^(?=\\s*)",
                    contentName: "source.lua",
                    end: "^\\s*(?=\\\\end\\{(?:luacode)\\*?\\})",
                    patterns: [
                        {
                            include: "source.lua"
                        }
                    ]
                }
            ]
        },
        {
            begin: "\\s*\\\\begin\\{(?:jlcode|jlverbatim|jlblock|jlconcode|jlconsole|jlconverbatim)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",
            captures: {
                0: {
                    patterns: [
                        {
                            include: "#begin-env-tokenizer"
                        }
                    ]
                }
            },
            end: "\\s*\\\\end\\{(?:jlcode|jlverbatim|jlblock|jlconcode|jlconsole|jlconverbatim)\\*?\\}",
            patterns: [
                {
                    include: "#multiline-optional-arg-no-highlight"
                },
                {
                    begin: "(?:\\G|(?<=\\]))(\\{)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        }
                    },
                    contentName: "variable.parameter.function.latex",
                    end: "(\\})",
                    endCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.end.latex"
                        }
                    }
                },
                {
                    begin: "^(?=\\s*)",
                    contentName: "source.julia",
                    end: "^\\s*(?=\\\\end\\{(?:jlcode|jlverbatim|jlblock|jlconcode|jlconsole|jlconverbatim)\\*?\\})",
                    patterns: [
                        {
                            include: "source.julia"
                        }
                    ]
                }
            ]
        },
        {
            begin: "\\s*\\\\begin\\{(?:juliacode|juliaverbatim|juliablock|juliaconcode|juliaconsole|juliaconverbatim)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",
            captures: {
                0: {
                    patterns: [
                        {
                            include: "#begin-env-tokenizer"
                        }
                    ]
                }
            },
            end: "\\s*\\\\end\\{(?:juliacode|juliaverbatim|juliablock|juliaconcode|juliaconsole|juliaconverbatim)\\*?\\}",
            patterns: [
                {
                    include: "#multiline-optional-arg-no-highlight"
                },
                {
                    begin: "(?:\\G|(?<=\\]))(\\{)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        }
                    },
                    contentName: "variable.parameter.function.latex",
                    end: "(\\})",
                    endCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.end.latex"
                        }
                    }
                },
                {
                    begin: "^(?=\\s*)",
                    contentName: "source.julia",
                    end: "^\\s*(?=\\\\end\\{(?:juliacode|juliaverbatim|juliablock|juliaconcode|juliaconsole|juliaconverbatim)\\*?\\})",
                    patterns: [
                        {
                            include: "source.julia"
                        }
                    ]
                }
            ]
        },
        {
            begin: "\\s*\\\\begin\\{(?:sageblock|sagesilent|sageverbatim|sageexample|sagecommandline|python|pythonq|pythonrepl)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",
            captures: {
                0: {
                    patterns: [
                        {
                            include: "#begin-env-tokenizer"
                        }
                    ]
                }
            },
            end: "\\s*\\\\end\\{(?:sageblock|sagesilent|sageverbatim|sageexample|sagecommandline|python|pythonq|pythonrepl)\\*?\\}",
            patterns: [
                {
                    include: "#multiline-optional-arg-no-highlight"
                },
                {
                    begin: "(?:\\G|(?<=\\]))(\\{)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        }
                    },
                    contentName: "variable.parameter.function.latex",
                    end: "(\\})",
                    endCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.end.latex"
                        }
                    }
                },
                {
                    begin: "^(?=\\s*)",
                    contentName: "source.python",
                    end: "^\\s*(?=\\\\end\\{(?:sageblock|sagesilent|sageverbatim|sageexample|sagecommandline|python|pythonq|pythonrepl)\\*?\\})",
                    patterns: [
                        {
                            include: "source.python"
                        }
                    ]
                }
            ]
        },
        {
            begin: "\\s*\\\\begin\\{(?:pycode|pyverbatim|pyblock|pyconcode|pyconsole|pyconverbatim)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",
            captures: {
                0: {
                    patterns: [
                        {
                            include: "#begin-env-tokenizer"
                        }
                    ]
                }
            },
            end: "\\s*\\\\end\\{(?:pycode|pyverbatim|pyblock|pyconcode|pyconsole|pyconverbatim)\\*?\\}",
            patterns: [
                {
                    include: "#multiline-optional-arg-no-highlight"
                },
                {
                    begin: "(?:\\G|(?<=\\]))(\\{)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        }
                    },
                    contentName: "variable.parameter.function.latex",
                    end: "(\\})",
                    endCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.end.latex"
                        }
                    }
                },
                {
                    begin: "^(?=\\s*)",
                    contentName: "source.python",
                    end: "^\\s*(?=\\\\end\\{(?:pycode|pyverbatim|pyblock|pyconcode|pyconsole|pyconverbatim)\\*?\\})",
                    patterns: [
                        {
                            include: "source.python"
                        }
                    ]
                }
            ]
        },
        {
            begin: "\\s*\\\\begin\\{(?:pylabcode|pylabverbatim|pylabblock|pylabconcode|pylabconsole|pylabconverbatim)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",
            captures: {
                0: {
                    patterns: [
                        {
                            include: "#begin-env-tokenizer"
                        }
                    ]
                }
            },
            end: "\\s*\\\\end\\{(?:pylabcode|pylabverbatim|pylabblock|pylabconcode|pylabconsole|pylabconverbatim)\\*?\\}",
            patterns: [
                {
                    include: "#multiline-optional-arg-no-highlight"
                },
                {
                    begin: "(?:\\G|(?<=\\]))(\\{)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        }
                    },
                    contentName: "variable.parameter.function.latex",
                    end: "(\\})",
                    endCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.end.latex"
                        }
                    }
                },
                {
                    begin: "^(?=\\s*)",
                    contentName: "source.python",
                    end: "^\\s*(?=\\\\end\\{(?:pylabcode|pylabverbatim|pylabblock|pylabconcode|pylabconsole|pylabconverbatim)\\*?\\})",
                    patterns: [
                        {
                            include: "source.python"
                        }
                    ]
                }
            ]
        },
        {
            begin: "\\s*\\\\begin\\{(?:sympycode|sympyverbatim|sympyblock|sympyconcode|sympyconsole|sympyconverbatim)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",
            captures: {
                0: {
                    patterns: [
                        {
                            include: "#begin-env-tokenizer"
                        }
                    ]
                }
            },
            end: "\\s*\\\\end\\{(?:sympycode|sympyverbatim|sympyblock|sympyconcode|sympyconsole|sympyconverbatim)\\*?\\}",
            patterns: [
                {
                    include: "#multiline-optional-arg-no-highlight"
                },
                {
                    begin: "(?:\\G|(?<=\\]))(\\{)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        }
                    },
                    contentName: "variable.parameter.function.latex",
                    end: "(\\})",
                    endCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.end.latex"
                        }
                    }
                },
                {
                    begin: "^(?=\\s*)",
                    contentName: "source.python",
                    end: "^\\s*(?=\\\\end\\{(?:sympycode|sympyverbatim|sympyblock|sympyconcode|sympyconsole|sympyconverbatim)\\*?\\})",
                    patterns: [
                        {
                            include: "source.python"
                        }
                    ]
                }
            ]
        },
        {
            begin: "\\s*\\\\begin\\{(?:scalacode)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",
            captures: {
                0: {
                    patterns: [
                        {
                            include: "#begin-env-tokenizer"
                        }
                    ]
                }
            },
            end: "\\s*\\\\end\\{(?:scalacode)\\*?\\}",
            patterns: [
                {
                    include: "#multiline-optional-arg-no-highlight"
                },
                {
                    begin: "(?:\\G|(?<=\\]))(\\{)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        }
                    },
                    contentName: "variable.parameter.function.latex",
                    end: "(\\})",
                    endCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.end.latex"
                        }
                    }
                },
                {
                    begin: "^(?=\\s*)",
                    contentName: "source.scala",
                    end: "^\\s*(?=\\\\end\\{(?:scalacode)\\*?\\})",
                    patterns: [
                        {
                            include: "source.scala"
                        }
                    ]
                }
            ]
        },
        {
            begin: "\\s*\\\\begin\\{(?:asy|asycode)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",
            captures: {
                0: {
                    patterns: [
                        {
                            include: "#begin-env-tokenizer"
                        }
                    ]
                }
            },
            end: "\\s*\\\\end\\{(?:asy|asycode)\\*?\\}",
            patterns: [
                {
                    include: "#multiline-optional-arg-no-highlight"
                },
                {
                    begin: "(?:\\G|(?<=\\]))(\\{)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        }
                    },
                    contentName: "variable.parameter.function.latex",
                    end: "(\\})",
                    endCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.end.latex"
                        }
                    }
                },
                {
                    begin: "^(?=\\s*)",
                    contentName: "source.asymptote",
                    end: "^\\s*(?=\\\\end\\{(?:asy|asycode)\\*?\\})",
                    patterns: [
                        {
                            include: "source.asymptote"
                        }
                    ]
                }
            ]
        },
        {
            begin: "\\s*\\\\begin\\{(?:dot2tex|dotcode)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",
            captures: {
                0: {
                    patterns: [
                        {
                            include: "#begin-env-tokenizer"
                        }
                    ]
                }
            },
            end: "\\s*\\\\end\\{(?:dot2tex|dotcode)\\*?\\}",
            patterns: [
                {
                    include: "#multiline-optional-arg-no-highlight"
                },
                {
                    begin: "(?:\\G|(?<=\\]))(\\{)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        }
                    },
                    contentName: "variable.parameter.function.latex",
                    end: "(\\})",
                    endCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.end.latex"
                        }
                    }
                },
                {
                    begin: "^(?=\\s*)",
                    contentName: "source.dot",
                    end: "^\\s*(?=\\\\end\\{(?:dot2tex|dotcode)\\*?\\})",
                    patterns: [
                        {
                            include: "source.dot"
                        }
                    ]
                }
            ]
        },
        {
            begin: "\\s*\\\\begin\\{(?:gnuplot)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",
            captures: {
                0: {
                    patterns: [
                        {
                            include: "#begin-env-tokenizer"
                        }
                    ]
                }
            },
            end: "\\s*\\\\end\\{(?:gnuplot)\\*?\\}",
            patterns: [
                {
                    include: "#multiline-optional-arg-no-highlight"
                },
                {
                    begin: "(?:\\G|(?<=\\]))(\\{)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        }
                    },
                    contentName: "variable.parameter.function.latex",
                    end: "(\\})",
                    endCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.end.latex"
                        }
                    }
                },
                {
                    begin: "^(?=\\s*)",
                    contentName: "source.gnuplot",
                    end: "^\\s*(?=\\\\end\\{(?:gnuplot)\\*?\\})",
                    patterns: [
                        {
                            include: "source.gnuplot"
                        }
                    ]
                }
            ]
        },
        {
            begin: "((?:\\s*)\\\\begin\\{([a-zA-Z]*code|lstlisting|minted|pyglist)(?:\\*)?\\}(?:\\[.*\\])?(?:\\{.*\\})?)",
            captures: {
                1: {
                    patterns: [
                        {
                            include: "#begin-env-tokenizer"
                        }
                    ]
                }
            },
            contentName: "meta.function.embedded.latex",
            end: "(\\\\end\\{\\2\\}(?:\\s*\\n)?)",
            name: "meta.embedded.block.generic.latex"
        },
        {
            begin: "((\\\\)addplot)(?:\\+?)((?:\\[[^\\[]*\\]))*\\s*(gnuplot)\\s*((?:\\[[^\\[]*\\]))*\\s*(\\{)",
            captures: {
                1: {
                    name: "support.function.be.latex"
                },
                2: {
                    name: "punctuation.definition.function.latex"
                },
                3: {
                    patterns: [
                        {
                            include: "#optional-arg"
                        }
                    ]
                },
                4: {
                    name: "variable.parameter.function.latex"
                },
                5: {
                    patterns: [
                        {
                            include: "#optional-arg"
                        }
                    ]
                },
                6: {
                    name: "punctuation.definition.arguments.begin.latex"
                }
            },
            end: "\\s*(\\};)",
            patterns: [
                {
                    begin: "%",
                    beginCaptures: {
                        0: {
                            name: "punctuation.definition.comment.latex"
                        }
                    },
                    end: "$\\n?",
                    name: "comment.line.percentage.latex"
                },
                {
                    include: "source.gnuplot"
                }
            ]
        },
        {
            begin: "(\\s*\\\\begin\\{((?:fboxv|boxedv|V|v|spv)erbatim\\*?)\\})",
            captures: {
                1: {
                    patterns: [
                        {
                            include: "#begin-env-tokenizer"
                        }
                    ]
                }
            },
            contentName: "markup.raw.verbatim.latex",
            end: "(\\\\end\\{\\2\\})",
            name: "meta.function.verbatim.latex"
        },
        {
            begin: "(\\s*\\\\begin\\{VerbatimOut\\}\\{[^\\}]*\\})",
            captures: {
                1: {
                    patterns: [
                        {
                            include: "#begin-env-tokenizer"
                        }
                    ]
                }
            },
            contentName: "markup.raw.verbatim.latex",
            end: "(\\\\end\\{\\VerbatimOut\\})",
            name: "meta.function.verbatim.latex"
        },
        {
            begin: "(\\s*\\\\begin\\{alltt\\})",
            captures: {
                1: {
                    patterns: [
                        {
                            include: "#begin-env-tokenizer"
                        }
                    ]
                }
            },
            contentName: "markup.raw.verbatim.latex",
            end: "(\\\\end\\{alltt\\})",
            name: "meta.function.alltt.latex",
            patterns: [
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.function.latex"
                        }
                    },
                    match: "(\\\\)[A-Za-z]+",
                    name: "support.function.general.latex"
                }
            ]
        },
        {
            begin: "(\\s*\\\\begin\\{([Cc]omment)\\})",
            captures: {
                1: {
                    patterns: [
                        {
                            include: "#begin-env-tokenizer"
                        }
                    ]
                }
            },
            contentName: "punctuation.definition.comment.latex",
            end: "(\\\\end\\{\\2\\})",
            name: "meta.function.verbatim.latex"
        },
        {
            begin: "(?:\\s*)((\\\\)(?:href|hyperref|hyperimage))(?=\\[|\\{)",
            beginCaptures: {
                1: {
                    name: "support.function.url.latex"
                }
            },
            comment: "Captures \\command[option]{url}{optional category}{optional name}{text}",
            end: "(\\})",
            endCaptures: {
                1: {
                    name: "punctuation.definition.arguments.end.latex"
                }
            },
            name: "meta.function.hyperlink.latex",
            patterns: [
                {
                    include: "#multiline-optional-arg-no-highlight"
                },
                {
                    begin: "(?:\\G|(?<=\\]))(\\{)([^}]*)(\\})(?:\\{[^}]*\\}){2}?(\\{)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        },
                        2: {
                            name: "markup.underline.link.latex"
                        },
                        3: {
                            name: "punctuation.definition.arguments.end.latex"
                        },
                        4: {
                            name: "punctuation.definition.arguments.begin.latex"
                        }
                    },
                    contentName: "meta.variable.parameter.function.latex",
                    end: "(?=\\})",
                    patterns: [
                        {
                            include: "$base"
                        }
                    ]
                },
                {
                    begin: "(?:\\G|(?<=\\]))(?:(\\{)[^}]*(\\}))?(\\{)",
                    beginCaptures: {
                        1: {
                            name: "punctuation.definition.arguments.begin.latex"
                        },
                        2: {
                            name: "punctuation.definition.arguments.end.latex"
                        },
                        3: {
                            name: "punctuation.definition.arguments.begin.latex"
                        }
                    },
                    contentName: "meta.variable.parameter.function.latex",
                    end: "(?=\\})",
                    patterns: [
                        {
                            include: "$base"
                        }
                    ]
                }
            ]
        },
        {
            captures: {
                1: {
                    name: "support.function.url.latex"
                },
                2: {
                    name: "punctuation.definition.function.latex"
                },
                3: {
                    name: "punctuation.definition.arguments.begin.latex"
                },
                5: {
                    name: "punctuation.definition.arguments.end.latex"
                },
                "'": {
                    name: "markup.underline.link.latex"
                }
            },
            match: "(?:\\s*)((\\\\)url)(\\{)([^}]*)(\\})",
            name: "meta.function.link.url.latex"
        },
        {
            captures: {
                1: {
                    patterns: [
                        {
                            include: "#begin-env-tokenizer"
                        }
                    ]
                }
            },
            comment: "These two patterns match the \\begin{document} and \\end{document} commands, so that the environment matching pattern following them will ignore those commands.",
            match: "(\\s*\\\\begin\\{document\\})",
            name: "meta.function.begin-document.latex"
        },
        {
            captures: {
                1: {
                    patterns: [
                        {
                            include: "#begin-env-tokenizer"
                        }
                    ]
                }
            },
            match: "(\\s*\\\\end\\{document\\})",
            name: "meta.function.end-document.latex"
        },
        {
            begin: "(?:\\s*)((\\\\)begin)(\\{)((?:\\+?array|equation|(?:IEEE)?eqnarray|multline|align|aligned|alignat|alignedat|flalign|flaligned|flalignat|split|gather|gathered|\\+?cases|(?:display)?math|\\+?[a-zA-Z]*matrix|[pbBvV]?NiceMatrix|[pbBvV]?NiceArray|(?:(?:arg)?(?:mini|maxi)))(?:\\*|!)?)(\\})(\\s*\\n)?",
            captures: {
                1: {
                    name: "support.function.be.latex"
                },
                2: {
                    name: "punctuation.definition.function.latex"
                },
                3: {
                    name: "punctuation.definition.arguments.begin.latex"
                },
                4: {
                    name: "variable.parameter.function.latex"
                },
                5: {
                    name: "punctuation.definition.arguments.end.latex"
                }
            },
            contentName: "meta.math.block.latex support.class.math.block.environment.latex",
            end: "(?:\\s*)((\\\\)end)(\\{)(\\4)(\\})(?:\\s*\\n)?",
            name: "meta.function.environment.math.latex",
            patterns: [
                {
                    match: "(?<!\\\\)&",
                    name: "keyword.control.equation.align.latex"
                },
                {
                    match: "\\\\\\\\",
                    name: "keyword.control.equation.newline.latex"
                },
                {
                    include: "#definition-label"
                },
                {
                    include: "text.tex#math"
                },
                {
                    include: "$base"
                }
            ]
        },
        {
            begin: "(?:\\s*)(\\\\begin\\{empheq\\}(?:\\[.*\\])?)",
            captures: {
                1: {
                    patterns: [
                        {
                            include: "#begin-env-tokenizer"
                        }
                    ]
                }
            },
            contentName: "meta.math.block.latex support.class.math.block.environment.latex",
            end: "(?:\\s*)(\\\\end\\{empheq\\})",
            name: "meta.function.environment.math.latex",
            patterns: [
                {
                    match: "(?<!\\\\)&",
                    name: "keyword.control.equation.align.latex"
                },
                {
                    match: "\\\\\\\\",
                    name: "keyword.control.equation.newline.latex"
                },
                {
                    include: "#definition-label"
                },
                {
                    include: "text.tex#math"
                },
                {
                    include: "$base"
                }
            ]
        },
        {
            begin: "(\\s*\\\\begin\\{(tabular[xy*]?|xltabular|longtable|(?:long)?tabu|(?:long|tall)?tblr|NiceTabular[X*]?|booktabs)\\}(\\s*\\n)?)",
            captures: {
                1: {
                    patterns: [
                        {
                            include: "#begin-env-tokenizer"
                        }
                    ]
                }
            },
            contentName: "meta.data.environment.tabular.latex",
            end: "(\\s*\\\\end\\{(\\2)\\}(?:\\s*\\n)?)",
            name: "meta.function.environment.tabular.latex",
            patterns: [
                {
                    match: "(?<!\\\\)&",
                    name: "keyword.control.table.cell.latex"
                },
                {
                    match: "\\\\\\\\",
                    name: "keyword.control.table.newline.latex"
                },
                {
                    include: "$base"
                }
            ]
        },
        {
            begin: "(\\s*\\\\begin\\{(itemize|enumerate|description|list)\\})",
            captures: {
                1: {
                    patterns: [
                        {
                            include: "#begin-env-tokenizer"
                        }
                    ]
                }
            },
            end: "(\\\\end\\{\\2\\}(?:\\s*\\n)?)",
            name: "meta.function.environment.list.latex",
            patterns: [
                {
                    include: "$base"
                }
            ]
        },
        {
            begin: "(\\s*\\\\begin\\{tikzpicture\\})",
            captures: {
                1: {
                    patterns: [
                        {
                            include: "#begin-env-tokenizer"
                        }
                    ]
                }
            },
            end: "(\\\\end\\{tikzpicture\\}(?:\\s*\\n)?)",
            name: "meta.function.environment.latex.tikz",
            patterns: [
                {
                    include: "$base"
                }
            ]
        },
        {
            begin: "(\\s*\\\\begin\\{frame\\})",
            captures: {
                1: {
                    patterns: [
                        {
                            include: "#begin-env-tokenizer"
                        }
                    ]
                }
            },
            end: "(\\\\end\\{frame\\})",
            name: "meta.function.environment.frame.latex",
            patterns: [
                {
                    include: "$base"
                }
            ]
        },
        {
            begin: "(\\s*\\\\begin\\{(mpost\\*?)\\})",
            captures: {
                1: {
                    patterns: [
                        {
                            include: "#begin-env-tokenizer"
                        }
                    ]
                }
            },
            end: "(\\\\end\\{\\2\\}(?:\\s*\\n)?)",
            name: "meta.function.environment.latex.mpost"
        },
        {
            begin: "(\\s*\\\\begin\\{markdown\\})",
            captures: {
                1: {
                    patterns: [
                        {
                            include: "#begin-env-tokenizer"
                        }
                    ]
                }
            },
            contentName: "meta.embedded.markdown_latex_combined",
            end: "(\\\\end\\{markdown\\})",
            patterns: [
                {
                    include: "text.tex.markdown_latex_combined"
                }
            ]
        },
        {
            begin: "(\\s*\\\\begin\\{(\\w+\\*?)\\})",
            captures: {
                1: {
                    patterns: [
                        {
                            include: "#begin-env-tokenizer"
                        }
                    ]
                }
            },
            end: "(\\\\end\\{\\2\\}(?:\\s*\\n)?)",
            name: "meta.function.environment.general.latex",
            patterns: [
                {
                    include: "$base"
                }
            ]
        },
        {
            captures: {
                1: {
                    name: "storage.type.function.latex"
                },
                2: {
                    name: "punctuation.definition.function.latex"
                },
                3: {
                    name: "punctuation.definition.begin.latex"
                },
                4: {
                    name: "support.function.general.latex"
                },
                5: {
                    name: "punctuation.definition.function.latex"
                },
                6: {
                    name: "punctuation.definition.end.latex"
                }
            },
            match: "((\\\\)(?:newcommand|renewcommand|(?:re)?newrobustcmd|DeclareRobustCommand))\\*?({)((\\\\)[^}]*)(})"
        },
        {
            begin: "((\\\\)marginpar)((?:\\[[^\\[]*?\\])*)(\\{)",
            beginCaptures: {
                1: {
                    name: "support.function.marginpar.latex"
                },
                2: {
                    name: "punctuation.definition.function.latex"
                },
                3: {
                    patterns: [
                        {
                            include: "#optional-arg"
                        }
                    ]
                },
                4: {
                    name: "punctuation.definition.marginpar.begin.latex"
                }
            },
            contentName: "meta.paragraph.margin.latex",
            end: "\\}",
            endCaptures: {
                0: {
                    name: "punctuation.definition.marginpar.end.latex"
                }
            },
            patterns: [
                {
                    include: "text.tex#braces"
                },
                {
                    include: "$base"
                }
            ]
        },
        {
            begin: "((\\\\)footnote)((?:\\[[^\\[]*?\\])*)(\\{)",
            beginCaptures: {
                1: {
                    name: "support.function.footnote.latex"
                },
                2: {
                    name: "punctuation.definition.function.latex"
                },
                3: {
                    patterns: [
                        {
                            include: "#optional-arg"
                        }
                    ]
                },
                4: {
                    name: "punctuation.definition.footnote.begin.latex"
                }
            },
            contentName: "entity.name.footnote.latex",
            end: "\\}",
            endCaptures: {
                0: {
                    name: "punctuation.definition.footnote.end.latex"
                }
            },
            patterns: [
                {
                    include: "text.tex#braces"
                },
                {
                    include: "$base"
                }
            ]
        },
        {
            begin: "((\\\\)emph)(\\{)",
            beginCaptures: {
                1: {
                    name: "support.function.emph.latex"
                },
                2: {
                    name: "punctuation.definition.function.latex"
                },
                3: {
                    name: "punctuation.definition.emph.begin.latex"
                }
            },
            contentName: "markup.italic.emph.latex",
            end: "\\}",
            endCaptures: {
                0: {
                    name: "punctuation.definition.emph.end.latex"
                }
            },
            name: "meta.function.emph.latex",
            patterns: [
                {
                    include: "text.tex#braces"
                },
                {
                    include: "$base"
                }
            ]
        },
        {
            begin: "((\\\\)textit)(\\{)",
            captures: {
                1: {
                    name: "support.function.textit.latex"
                },
                2: {
                    name: "punctuation.definition.function.latex"
                },
                3: {
                    name: "punctuation.definition.textit.begin.latex"
                }
            },
            comment: `We put the keyword in a capture and name this capture, so that disabling spell checking for “keyword” won't be inherited by the argument to \\textit{...}.

Put specific matches for particular LaTeX keyword.functions before the last two more general functions`,
            contentName: "markup.italic.textit.latex",
            end: "\\}",
            endCaptures: {
                0: {
                    name: "punctuation.definition.textit.end.latex"
                }
            },
            name: "meta.function.textit.latex",
            patterns: [
                {
                    include: "text.tex#braces"
                },
                {
                    include: "$base"
                }
            ]
        },
        {
            begin: "((\\\\)textbf)(\\{)",
            captures: {
                1: {
                    name: "support.function.textbf.latex"
                },
                2: {
                    name: "punctuation.definition.function.latex"
                },
                3: {
                    name: "punctuation.definition.textbf.begin.latex"
                }
            },
            contentName: "markup.bold.textbf.latex",
            end: "\\}",
            endCaptures: {
                0: {
                    name: "punctuation.definition.textbf.end.latex"
                }
            },
            name: "meta.function.textbf.latex",
            patterns: [
                {
                    include: "text.tex#braces"
                },
                {
                    include: "$base"
                }
            ]
        },
        {
            begin: "((\\\\)texttt)(\\{)",
            captures: {
                1: {
                    name: "support.function.texttt.latex"
                },
                2: {
                    name: "punctuation.definition.function.latex"
                },
                3: {
                    name: "punctuation.definition.texttt.begin.latex"
                }
            },
            contentName: "markup.raw.texttt.latex",
            end: "\\}",
            endCaptures: {
                0: {
                    name: "punctuation.definition.texttt.end.latex"
                }
            },
            name: "meta.function.texttt.latex",
            patterns: [
                {
                    include: "text.tex#braces"
                },
                {
                    include: "$base"
                }
            ]
        },
        {
            captures: {
                0: {
                    name: "keyword.other.item.latex"
                },
                1: {
                    name: "punctuation.definition.keyword.latex"
                }
            },
            match: "(\\\\)item\\b",
            name: "meta.scope.item.latex"
        },
        {
            begin: "((\\\\)(?:[aA]uto|foot|full|no|ref|short|[tT]ext|[pP]aren|[sS]mart)?[cC]ite(?:al)?(?:p|s|t|author|year(?:par)?|title)?[ANP]*\\*?)((?:(?:\\([^\\)]*\\)){0,2}(?:\\[[^\\]]*\\]){0,2}\\{[\\p{Alphabetic}:.]*\\})*)(?:([<\\[])[^\\]<>]*([>\\]]))?(?:(\\[)[^\\]]*(\\]))?(\\{)",
            captures: {
                1: {
                    name: "keyword.control.cite.latex"
                },
                2: {
                    name: "punctuation.definition.keyword.latex"
                },
                3: {
                    patterns: [
                        {
                            include: "#autocites-arg"
                        }
                    ]
                },
                4: {
                    name: "punctuation.definition.arguments.optional.begin.latex"
                },
                5: {
                    name: "punctuation.definition.arguments.optional.end.latex"
                },
                6: {
                    name: "punctuation.definition.arguments.optional.begin.latex"
                },
                7: {
                    name: "punctuation.definition.arguments.optional.end.latex"
                },
                8: {
                    name: "punctuation.definition.arguments.begin.latex"
                }
            },
            end: "\\}",
            endCaptures: {
                0: {
                    name: "punctuation.definition.arguments.end.latex"
                }
            },
            name: "meta.citation.latex",
            patterns: [
                {
                    captures: {
                        1: {
                            name: "comment.line.percentage.tex"
                        },
                        2: {
                            name: "punctuation.definition.comment.tex"
                        }
                    },
                    match: "((%).*)$"
                },
                {
                    match: "[\\p{Alphabetic}\\p{Number}:.-]+",
                    name: "constant.other.reference.citation.latex"
                }
            ]
        },
        {
            begin: "((\\\\)bibentry)(\\{)",
            captures: {
                1: {
                    name: "keyword.control.cite.latex"
                },
                2: {
                    name: "punctuation.definition.keyword.latex"
                },
                3: {
                    name: "punctuation.definition.arguments.begin.latex"
                }
            },
            end: "\\}",
            endCaptures: {
                0: {
                    name: "punctuation.definition.arguments.end.latex"
                }
            },
            name: "meta.citation.latex",
            patterns: [
                {
                    match: "[\\p{Alphabetic}\\p{Number}:.]+",
                    name: "constant.other.reference.citation.latex"
                }
            ]
        },
        {
            begin: "((\\\\)(?:\\w*[rR]ef\\*?))(\\{)",
            beginCaptures: {
                1: {
                    name: "keyword.control.ref.latex"
                },
                2: {
                    name: "punctuation.definition.keyword.latex"
                },
                3: {
                    name: "punctuation.definition.arguments.begin.latex"
                }
            },
            end: "\\}",
            endCaptures: {
                0: {
                    name: "punctuation.definition.arguments.end.latex"
                }
            },
            name: "meta.reference.label.latex",
            patterns: [
                {
                    match: "[\\p{Alphabetic}\\p{Number}\\.,:/*!^_-]",
                    name: "constant.other.reference.label.latex"
                }
            ]
        },
        {
            include: "#definition-label"
        },
        {
            begin: "((\\\\)(?:verb|Verb|spverb)\\*?)\\s*((\\\\)scantokens)(\\{)",
            beginCaptures: {
                1: {
                    name: "support.function.verb.latex"
                },
                2: {
                    name: "punctuation.definition.function.latex"
                },
                3: {
                    name: "support.function.verb.latex"
                },
                4: {
                    name: "punctuation.definition.verb.latex"
                },
                5: {
                    name: "punctuation.definition.begin.latex"
                }
            },
            contentName: "markup.raw.verb.latex",
            end: "(\\})",
            endCaptures: {
                1: {
                    name: "punctuation.definition.end.latex"
                }
            },
            name: "meta.function.verb.latex",
            patterns: [
                {
                    include: "$self"
                }
            ]
        },
        {
            captures: {
                1: {
                    name: "support.function.verb.latex"
                },
                2: {
                    name: "punctuation.definition.function.latex"
                },
                3: {
                    name: "punctuation.definition.verb.latex"
                },
                4: {
                    name: "markup.raw.verb.latex"
                },
                5: {
                    name: "punctuation.definition.verb.latex"
                }
            },
            match: "((\\\\)(?:verb|Verb|spverb)\\*?)\\s*((?<=\\s)\\S|[^a-zA-Z])(.*?)(\\3|$)",
            name: "meta.function.verb.latex"
        },
        {
            captures: {
                1: {
                    name: "support.function.verb.latex"
                },
                2: {
                    name: "punctuation.definition.function.latex"
                },
                3: {
                    patterns: [
                        {
                            include: "#optional-arg"
                        }
                    ]
                },
                4: {
                    name: "punctuation.definition.arguments.begin.latex"
                },
                5: {
                    name: "punctuation.definition.arguments.end.latex"
                },
                6: {
                    name: "punctuation.definition.verb.latex"
                },
                7: {
                    name: "markup.raw.verb.latex"
                },
                8: {
                    name: "punctuation.definition.verb.latex"
                },
                9: {
                    name: "punctuation.definition.verb.latex"
                },
                10: {
                    name: "markup.raw.verb.latex"
                },
                11: {
                    name: "punctuation.definition.verb.latex"
                }
            },
            match: "((\\\\)(?:mint|mintinline))((?:\\[[^\\[]*?\\])?)(\\{)[a-zA-Z]*(\\})(?:(?:([^a-zA-Z\\{])(.*?)(\\6))|(?:(\\{)(.*?)(\\})))",
            name: "meta.function.verb.latex"
        },
        {
            captures: {
                1: {
                    name: "support.function.verb.latex"
                },
                2: {
                    name: "punctuation.definition.function.latex"
                },
                3: {
                    patterns: [
                        {
                            include: "#optional-arg"
                        }
                    ]
                },
                4: {
                    name: "punctuation.definition.verb.latex"
                },
                5: {
                    name: "markup.raw.verb.latex"
                },
                6: {
                    name: "punctuation.definition.verb.latex"
                },
                7: {
                    name: "punctuation.definition.verb.latex"
                },
                8: {
                    name: "markup.raw.verb.latex"
                },
                9: {
                    name: "punctuation.definition.verb.latex"
                }
            },
            match: "((\\\\)[a-z]+inline)((?:\\[[^\\[]*?\\])?)(?:(?:([^a-zA-Z\\{])(.*?)(\\4))|(?:(\\{)(.*?)(\\})))",
            name: "meta.function.verb.latex"
        },
        {
            captures: {
                1: {
                    name: "support.function.verb.latex"
                },
                2: {
                    name: "punctuation.definition.function.latex"
                },
                3: {
                    patterns: [
                        {
                            include: "#optional-arg"
                        }
                    ]
                },
                4: {
                    name: "punctuation.definition.verb.latex"
                },
                5: {
                    name: "source.python",
                    patterns: [
                        {
                            include: "source.python"
                        }
                    ]
                },
                6: {
                    name: "punctuation.definition.verb.latex"
                },
                7: {
                    name: "punctuation.definition.verb.latex"
                },
                8: {
                    name: "source.python",
                    patterns: [
                        {
                            include: "source.python"
                        }
                    ]
                },
                9: {
                    name: "punctuation.definition.verb.latex"
                }
            },
            match: "((\\\\)(?:(?:py|pycon|pylab|pylabcon|sympy|sympycon)[cv]?|pyq|pycq|pyif))((?:\\[[^\\[]*?\\])?)(?:(?:([^a-zA-Z\\{])(.*?)(\\4))|(?:(\\{)(.*?)(\\})))",
            name: "meta.function.verb.latex"
        },
        {
            captures: {
                1: {
                    name: "support.function.verb.latex"
                },
                2: {
                    name: "punctuation.definition.function.latex"
                },
                3: {
                    patterns: [
                        {
                            include: "#optional-arg"
                        }
                    ]
                },
                4: {
                    name: "punctuation.definition.verb.latex"
                },
                5: {
                    name: "source.julia",
                    patterns: [
                        {
                            include: "source.julia"
                        }
                    ]
                },
                6: {
                    name: "punctuation.definition.verb.latex"
                },
                7: {
                    name: "punctuation.definition.verb.latex"
                },
                8: {
                    name: "source.julia",
                    patterns: [
                        {
                            include: "source.julia"
                        }
                    ]
                },
                9: {
                    name: "punctuation.definition.verb.latex"
                }
            },
            match: "((\\\\)(?:jl|julia)[cv]?)((?:\\[[^\\[]*?\\])?)(?:(?:([^a-zA-Z\\{])(.*?)(\\4))|(?:(\\{)(.*?)(\\})))",
            name: "meta.function.verb.latex"
        },
        {
            match: "\\\\(?:newline|pagebreak|clearpage|linebreak|pause)(?:\\b)",
            name: "keyword.control.layout.latex"
        },
        {
            begin: "\\\\\\(",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.string.begin.latex"
                }
            },
            end: "\\\\\\)",
            endCaptures: {
                0: {
                    name: "punctuation.definition.string.end.latex"
                }
            },
            name: "meta.math.block.latex support.class.math.block.environment.latex",
            patterns: [
                {
                    include: "text.tex#math"
                },
                {
                    include: "$base"
                }
            ]
        },
        {
            begin: "\\$\\$",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.string.begin.latex"
                }
            },
            end: "\\$\\$",
            endCaptures: {
                0: {
                    name: "punctuation.definition.string.end.latex"
                }
            },
            name: "meta.math.block.latex support.class.math.block.environment.latex",
            patterns: [
                {
                    match: "\\\\\\$",
                    name: "constant.character.escape.latex"
                },
                {
                    include: "text.tex#math"
                },
                {
                    include: "$base"
                }
            ]
        },
        {
            begin: "\\$",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.string.begin.tex"
                }
            },
            end: "\\$",
            endCaptures: {
                0: {
                    name: "punctuation.definition.string.end.tex"
                }
            },
            name: "meta.math.block.tex support.class.math.block.tex",
            patterns: [
                {
                    match: "\\\\\\$",
                    name: "constant.character.escape.latex"
                },
                {
                    include: "text.tex#math"
                },
                {
                    include: "$base"
                }
            ]
        },
        {
            begin: "\\\\\\[",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.string.begin.latex"
                }
            },
            end: "\\\\\\]",
            endCaptures: {
                0: {
                    name: "punctuation.definition.string.end.latex"
                }
            },
            name: "meta.math.block.latex support.class.math.block.environment.latex",
            patterns: [
                {
                    include: "text.tex#math"
                },
                {
                    include: "$base"
                }
            ]
        },
        {
            captures: {
                1: {
                    name: "punctuation.definition.constant.latex"
                }
            },
            match: "(\\\\)(text(s(terling|ixoldstyle|urd|e(ction|venoldstyle|rvicemark))|yen|n(ineoldstyle|umero|aira)|c(ircledP|o(py(left|right)|lonmonetary)|urrency|e(nt(oldstyle)?|lsius))|t(hree(superior|oldstyle|quarters(emdash)?)|i(ldelow|mes)|w(o(superior|oldstyle)|elveudash)|rademark)|interrobang(down)?|zerooldstyle|o(hm|ne(superior|half|oldstyle|quarter)|penbullet|rd(feminine|masculine))|d(i(scount|ed|v(orced)?)|o(ng|wnarrow|llar(oldstyle)?)|egree|agger(dbl)?|blhyphen(char)?)|uparrow|p(ilcrow|e(so|r(t(housand|enthousand)|iodcentered))|aragraph|m)|e(stimated|ightoldstyle|uro)|quotes(traight(dblbase|base)|ingle)|f(iveoldstyle|ouroldstyle|lorin|ractionsolidus)|won|l(not|ira|e(ftarrow|af)|quill|angle|brackdbl)|a(s(cii(caron|dieresis|acute|grave|macron|breve)|teriskcentered)|cutedbl)|r(ightarrow|e(cipe|ferencemark|gistered)|quill|angle|brackdbl)|g(uarani|ravedbl)|m(ho|inus|u(sicalnote)?|arried)|b(igcircle|orn|ullet|lank|a(ht|rdbl)|rokenbar)))\\b",
            name: "constant.character.latex"
        },
        {
            captures: {
                1: {
                    name: "punctuation.definition.column-specials.begin.latex"
                },
                2: {
                    name: "punctuation.definition.column-specials.end.latex"
                }
            },
            match: "(?:<|>)(\\{)\\$(\\})",
            name: "meta.column-specials.latex"
        },
        {
            include: "text.tex"
        }
    ],
    repository: {
        "autocites-arg": {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.arguments.optional.begin.latex"
                        },
                        2: {
                            name: "punctuation.definition.arguments.optional.end.latex"
                        },
                        3: {
                            name: "punctuation.definition.arguments.optional.begin.latex"
                        },
                        4: {
                            name: "punctuation.definition.arguments.optional.end.latex"
                        },
                        5: {
                            name: "punctuation.definition.arguments.begin.latex"
                        },
                        6: {
                            name: "constant.other.reference.citation.latex"
                        },
                        7: {
                            name: "punctuation.definition.arguments.end.latex"
                        },
                        8: {
                            patterns: [
                                {
                                    include: "#autocites-arg"
                                }
                            ]
                        }
                    },
                    match: "(?:(\\()[^\\)]*(\\))){0,2}(?:(\\[)[^\\]]*(\\])){0,2}(\\{)([\\p{Alphabetic}\\p{Number}:.]+)(\\})(.*)"
                }
            ]
        },
        "begin-env-tokenizer": {
            captures: {
                1: {
                    name: "support.function.be.latex"
                },
                2: {
                    name: "punctuation.definition.function.latex"
                },
                3: {
                    name: "punctuation.definition.arguments.begin.latex"
                },
                4: {
                    name: "variable.parameter.function.latex"
                },
                5: {
                    name: "punctuation.definition.arguments.end.latex"
                },
                6: {
                    name: "punctuation.definition.arguments.optional.begin.latex"
                },
                7: {
                    patterns: [
                        {
                            include: "$base"
                        }
                    ]
                },
                8: {
                    name: "punctuation.definition.arguments.optional.end.latex"
                },
                9: {
                    name: "punctuation.definition.arguments.begin.latex"
                },
                10: {
                    name: "variable.parameter.function.latex"
                },
                11: {
                    name: "punctuation.definition.arguments.end.latex"
                }
            },
            match: "\\s*((\\\\)(?:begin|end))(\\{)([a-zA-Z]*\\*?)(\\})(?:(\\[)(.*)(\\]))?(?:(\\{)([^{}]*)(\\}))?"
        },
        "definition-label": {
            begin: "((\\\\)label)((?:\\[[^\\[]*?\\])*)(\\{)",
            beginCaptures: {
                1: {
                    name: "keyword.control.label.latex"
                },
                2: {
                    name: "punctuation.definition.keyword.latex"
                },
                3: {
                    patterns: [
                        {
                            include: "#optional-arg"
                        }
                    ]
                },
                4: {
                    name: "punctuation.definition.arguments.begin.latex"
                }
            },
            end: "\\}",
            endCaptures: {
                0: {
                    name: "punctuation.definition.arguments.end.latex"
                }
            },
            name: "meta.definition.label.latex",
            patterns: [
                {
                    match: "[\\p{Alphabetic}\\p{Number}\\.,:/*!^_-]",
                    name: "variable.parameter.definition.label.latex"
                }
            ]
        },
        "multiline-optional-arg": {
            begin: "\\G\\[",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.arguments.optional.begin.latex"
                }
            },
            contentName: "variable.parameter.function.latex",
            end: "\\]",
            endCaptures: {
                0: {
                    name: "punctuation.definition.arguments.optional.end.latex"
                }
            },
            name: "meta.parameter.optional.latex",
            patterns: [
                {
                    include: "$self"
                }
            ]
        },
        "multiline-optional-arg-no-highlight": {
            begin: "\\G\\[",
            beginCaptures: {
                0: {
                    name: "punctuation.definition.arguments.optional.begin.latex"
                }
            },
            end: "\\]",
            endCaptures: {
                0: {
                    name: "punctuation.definition.arguments.optional.end.latex"
                }
            },
            name: "meta.parameter.optional.latex",
            patterns: [
                {
                    include: "$self"
                }
            ]
        },
        "optional-arg": {
            patterns: [
                {
                    captures: {
                        1: {
                            name: "punctuation.definition.arguments.optional.begin.latex"
                        },
                        2: {
                            name: "variable.parameter.function.latex"
                        },
                        3: {
                            name: "punctuation.definition.arguments.optional.end.latex"
                        }
                    },
                    match: "(\\[)([^\\[]*?)(\\])",
                    name: "meta.parameter.optional.latex"
                }
            ]
        }
    },
    scopeName: "text.tex.latex",
    embeddedLangs: [
        "tex",
        "css",
        "haskell",
        "html",
        "xml",
        "java",
        "lua",
        "julia",
        "ruby",
        "javascript",
        "typescript",
        "python",
        "yaml",
        "rust",
        "scala",
        "gnuplot"
    ]
});
var V = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$tex$2d$DFx9gLNm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$css$2d$CAzixsid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$haskell$2d$BfFu8DD8$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$html$2d$CUoAo5SS$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$xml$2d$CfRpfi_B$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$java$2d$Bk2JzfKB$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$lua$2d$5TZ$2d$G8Be$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$julia$2d$DLg_x4fm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$ruby$2d$Brn6Q9Db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$javascript$2d$DYrC$2d$pEL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$typescript$2d$CO9IEkHz$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$python$2d$BQXev0_W$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$yaml$2d$PGla5xPP$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$rust$2d$FKJVU_QG$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$scala$2d$D9aYzKDa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$zoerai$2b$zoer$2d$copilot$40$0$2e$0$2e$3_$40$emotion$2b$is$2d$prop$2d$valid$40$1$2e$3$2e$1_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$_c9bb07ed57590fa35a513241fe4dea77$2f$node_modules$2f40$zoerai$2f$zoer$2d$copilot$2f$dist$2f$gnuplot$2d$BlQVe05z$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    x
];
;
}}),

};

//# sourceMappingURL=f8f5a_%40zoerai_zoer-copilot_dist_32d3f14e._.js.map