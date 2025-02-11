import { CustomUser } from "@/types";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const users: CustomUser[] = [
  {
    id: "1",
    email: "fanatic@gmail.com",
    password: "hello_world",
    name: "Fanatic",
  },
  {
    id: "2",
    email: "test@gmail.com",
    password: "hello_world",
    name: "Test User",
  },
  {
    id: "3",
    email: "bob@gmail.com",
    password: "hello_world",
    name: "Bob",
  },
];

export const getUserByEmail = (email: string | undefined): CustomUser | undefined => {
  const found = users.find((user) => user.email === email);
  return found;
};

export const registerUserInDB = (user: CustomUser) => {
  users.push({ ...user });
};

export const { auth, handlers, signIn, signOut } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (credentials === null) return null;

        try {
          const user = getUserByEmail(credentials?.email as string);

          if (!user) {
            throw new Error("User not found");
          }

          const isMatch = user?.password === credentials?.password;

          if (!isMatch) {
            throw new Error("Password is not correct");
          }

          return user;
          /* eslint-disable @typescript-eslint/no-explicit-any */
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
});
