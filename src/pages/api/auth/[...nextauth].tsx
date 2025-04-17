// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = {
          id: "1",
          name: "Test User",
          email: "test@example.com",
        };

        if (
          credentials?.email === "test@example.com" &&
          credentials?.password === "1234"
        ) {
          return user; // 로그인 성공
        }

        return null; // 로그인 실패
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin", // 커스텀 로그인 페이지
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
