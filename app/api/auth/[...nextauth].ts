import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as any,
      clientSecret: process.env.GITHUB_SECRET as any,
    }),
  ],
};

export default NextAuth(authOptions);
