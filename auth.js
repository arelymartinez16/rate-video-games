import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import supabase from "./app/lib/utils/supabase";
import bcrypt from "bcrypt";

export async function getUser(email) {
    try {
      const { data: user, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return user;
    } catch (error) {
      console.error("Failed to fetch user:", error);
      throw new Error("Failed to fetch user.");
    }
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
      Credentials({
        async authorize(credentials) {
          const parsedCredentials = z
            .object({ email: z.string().email(), password: z.string().min(6) })
            .safeParse(credentials);
  
          if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
            const user = await getUser(email);
            if (!user) return null;
            const passwordsMatch = await bcrypt.compare(password, user.password);
  
            if (passwordsMatch) return user;
          }
  
          console.log("Invalid credentials");
  
          return null;
        },
      }),
    ],
    callbacks: {
      async session(session, user) {
        session.user.id = user.id;
        return session
      }
    }
});