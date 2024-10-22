import CredentialsProvider from "next-auth/providers/credentials";
import { rest } from "@/lib/rest";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials, req) {
                try {
                    const res = await rest.post("/auth/login", {
                        email: credentials?.email,
                        password: credentials?.password,
                    });

                    if (res.data && res.data.statusCode === 201) {
                        return res.data.data;
                    } else {
                        throw new Error("Invalid credentials");
                    }
                } catch (e: any) {
                    if (e.name === "AxiosError") {
                        throw new Error(e.response.data.message);
                    }

                    throw e;
                }
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account?.type === "credentials") {
                account.accessToken = user.access_token;
                account.accessToken = user.refresh_token;
            }

            return true;
        },
        async jwt({ token, account }) {
            if (account && account.type === "credentials") {
                token.accessToken = account.access_token;
                token.refreshToken = account.refresh_token;
            }

            return token;
        },
        async session({ session, token, user }) {
            session.accessToken = token.accessToken as string;
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/auth/sign-in",
    },
}
