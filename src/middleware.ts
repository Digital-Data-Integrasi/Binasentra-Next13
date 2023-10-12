import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import authCredential from "./middlewares/authCredential";


export function mainMiddleware(request: NextRequest) {
    const res = NextResponse.next();
    console.log(res)
    return res;
};


export default authCredential(mainMiddleware, [
    // Admin
    '/',
    '/framework/dashboard',
    '/framework/penutupan/pt-1',
    '/framework/penutupan/pt-2',
    '/framework/penutupan/pt-3',
    '/framework/setting',
    // Customer
    '/nsbh/asuransi-gempabumi',
    '/nsbh/asuransi-jaminan',
    '/nsbh/asuransi-kejiwaan'
])