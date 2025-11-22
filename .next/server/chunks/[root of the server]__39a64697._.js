module.exports = {

"[project]/.next-internal/server/app/next_api/contact/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route.runtime.dev.js [external] (next/dist/compiled/next-server/app-route.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/lib/create-response.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Creates a JSON success response with custom structure
 */ __turbopack_context__.s({
    "createErrorResponse": (()=>createErrorResponse),
    "createSuccessResponse": (()=>createSuccessResponse)
});
function createSuccessResponse(data, status = 200) {
    return new Response(JSON.stringify({
        success: true,
        data
    }), {
        status,
        headers: {
            "Content-Type": "application/json"
        }
    });
}
function createErrorResponse(params) {
    const { errorCode, errorMessage, status = 500 } = params;
    return new Response(JSON.stringify({
        success: false,
        errorCode,
        errorMessage
    }), {
        status,
        headers: {
            "Content-Type": "application/json"
        }
    });
}
}}),
"[project]/src/lib/api-utils.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseQueryParams": (()=>parseQueryParams),
    "requestMiddleware": (()=>requestMiddleware),
    "validateEnv": (()=>validateEnv),
    "validateRequestBody": (()=>validateRequestBody)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$create$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/create-response.ts [app-route] (ecmascript)");
;
function validateEnv() {
    const requiredVars = [
        "POSTGREST_URL",
        "POSTGREST_SCHEMA",
        "POSTGREST_API_KEY"
    ];
    const missing = requiredVars.filter((varName)=>!process.env[varName]);
    if (missing.length > 0) {
        throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
    }
}
function parseQueryParams(request) {
    const searchParams = request.nextUrl.searchParams;
    return {
        limit: parseInt(searchParams.get("limit") || "10"),
        offset: parseInt(searchParams.get("offset") || "0"),
        id: searchParams.get("id"),
        search: searchParams.get("search")
    };
}
async function validateRequestBody(request) {
    try {
        const body = await request.json();
        if (!body || typeof body !== "object") {
            throw new Error("Invalid request body");
        }
        return body;
    } catch (error) {
        if (error instanceof SyntaxError) {
            throw new Error("Invalid JSON in request body");
        }
        throw error;
    }
}
function requestMiddleware(handler) {
    return async (request)=>{
        try {
            return await handler(request);
        } catch (error) {
            // Pass through Response objects as-is
            if (error instanceof Response) {
                return error;
            }
            const anyError = error;
            const errorMessage = typeof anyError?.message === "string" ? anyError.message : "Request failed";
            const status = typeof anyError?.status === "number" ? anyError.status : typeof anyError?.statusCode === "number" ? anyError.statusCode : 500;
            const errorCode = typeof anyError?.code === "string" ? anyError.code : undefined;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$create$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createErrorResponse"])({
                errorCode,
                errorMessage,
                status
            });
        }
    };
}
}}),
"[project]/src/app/next_api/contact/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$create$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/create-response.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api-utils.ts [app-route] (ecmascript)");
;
;
const POST = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requestMiddleware"])(async (request)=>{
    const body = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateRequestBody"])(request);
    // Validate required fields
    if (!body.email || !body.subject || !body.message) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$create$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createErrorResponse"])({
            errorMessage: 'Email, subject, and message are required',
            status: 400
        });
    }
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$create$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createErrorResponse"])({
            errorMessage: 'Invalid email format',
            status: 400
        });
    }
    try {
        // Use Resend API to send email
        const RESEND_API_KEY = process.env.RESEND_API_KEY;
        if (!RESEND_API_KEY) {
            // Fallback: log the email (for development)
            console.log('Contact form submission:', {
                from: body.email,
                to: 'brunoottonelli@gmail.com',
                subject: body.subject,
                message: body.message
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$create$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSuccessResponse"])({
                message: 'Email logged (RESEND_API_KEY not configured)'
            }, 200);
        }
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${RESEND_API_KEY}`
            },
            body: JSON.stringify({
                from: 'Contact Form <onboarding@resend.dev>',
                to: 'brunoottonelli@gmail.com',
                reply_to: body.email,
                subject: body.subject,
                html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${body.email}</p>
          <p><strong>Subject:</strong> ${body.subject}</p>
          <hr>
          <p><strong>Message:</strong></p>
          <p>${body.message.replace(/\n/g, '<br>')}</p>
        `,
                text: `
New Contact Form Submission

From: ${body.email}
Subject: ${body.subject}

Message:
${body.message}
        `
            })
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to send email');
        }
        const data = await response.json();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$create$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSuccessResponse"])({
            message: 'Email sent successfully',
            id: data.id
        }, 200);
    } catch (error) {
        console.error('Email sending error:', error);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$create$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createErrorResponse"])({
            errorMessage: error.message || 'Failed to send email',
            status: 500
        });
    }
});
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__39a64697._.js.map