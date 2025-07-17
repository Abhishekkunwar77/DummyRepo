import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
const authHandler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
  ],
});

export { authHandler as GET, authHandler as POST };
