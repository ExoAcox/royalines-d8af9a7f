import NextAuth, { DefaultSession } from "next-auth"
import Credentials from "next-auth/providers/credentials"

declare module "next-auth" {
    interface Session {
        user: User & DefaultSession["user"]
    }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    trustHost: true,
    providers: [
        Credentials({
            authorize: async (credentials) => {
                let user = null

                const { user_id, fullname, email, roles } = credentials

                // logic to verify if the user exists
                user = { user_id, fullname, email, roles } as User

                if (!user) {
                    // No user found, so this is their first attempt to login
                    // Optionally, this is also the place you could do a user registration
                    throw new Error("Invalid credentials.")
                }

                // return user object with their profile data
                return user
            },
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 60 * 60 * 365,
    },
    jwt: {
        maxAge: 60 * 60 * 365
    }
})