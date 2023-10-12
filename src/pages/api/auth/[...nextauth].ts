import { getLogin } from "@/services/auth.service";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            type: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const fLogin = {
                    email: credentials?.email,
                    password: credentials?.password
                }
                const { data } = await getLogin(fLogin)
                const user = data;
                if (user.token) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, account, user }: any) {
            if (account?.provider === 'credentials') {
                token.email = user.email;
                token.username = user.username;
                token.role = user.role;
            }
            return token
        },
        async session({ session, token, user }: any) {
            session.user = token as any;
            return session;
        },
    },
    pages: {
        signIn: "/auth/login",
    },
    session: {
        strategy: 'jwt',
        maxAge: 60 * 10 * 1 //10 min
    }
});