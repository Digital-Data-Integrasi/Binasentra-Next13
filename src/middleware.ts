import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import authCredential from "./middlewares/authCredential";


export function mainMiddleware(request: NextRequest) {
    const res = NextResponse.next();
    return res;
};


export default authCredential(mainMiddleware, [
    '/',
    '/framework/dashboard',
    '/framework/alert',
    '/framework/entity',
    '/framework/link-analysis',
    '/framework/setting'
])