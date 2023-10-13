import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt"

const adminPage = [
    '/',
    '/framework/dashboard',
    '/framework/penutupan/pt-1',
    '/framework/penutupan/pt-2',
    '/framework/penutupan/pt-3',
    '/framework/setting'
]

const custPage = [
    '/nsbh/asuransi-gempabumi',
    '/nsbh/asuransi-jaminan',
    '/nsbh/asuransi-kejiwaan'
]

export default function authCredential(
    middleware: NextMiddleware,
    requireAuth: string[] = []) {
    return async (req: NextRequest, next: NextFetchEvent) => {
        const pathname = req.nextUrl.pathname;
        if (requireAuth.includes(pathname)) {
            const token = await getToken({
                req,
                secret: process.env.NEXTAUTH_SECRET
            });
            if (!token) {
                const url = new URL('/auth/login', req.url)
                // console.log(url)
                return NextResponse.redirect(url)
            }
            // Admin Only
            if (token.role !== 'Admin' && adminPage.includes(pathname)) {
                return NextResponse.redirect(new URL("/auth/login", req.url))
            }

            // Customer onlye
            if (token.role !== "User" && custPage.includes(pathname)) {
                return NextResponse.redirect(new URL("/auth/login", req.url))
            }
            return middleware(req, next)
        }
    }
}