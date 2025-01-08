import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials'; 
import bcrypt from 'bcryptjs';
import UserModel from '@/models/User';
import { connect } from '@/lib/db';

export const config = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: 'email' },
        password: { type: 'password' },
      },
      async authorize(credentials) {
        await connect();
        if (!credentials) return null;

        const { email, password } = credentials;
        const user = await UserModel.findOne({ email });

        if (user) {
          const isMatch = await bcrypt.compare(password, user.password);
          if (isMatch) {
            return { _id: user._id, email: user.email, name: user.name, isAdmin: user.isAdmin };
          }
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        // Make sure user._id is part of the token
        token.user = { _id: user._id, email: user.email, name: user.name, isAdmin: user.isAdmin };
      }
      return token;
    },
    async session({ session, token }) {
      // Make sure _id is added to session user
      if (token?.user) {
        session.user = { ...session.user, _id: token.user._id }; 
      }
      return session;
    },
    
    
  },
};

const handler = NextAuth(config);
export { handler as GET, handler as POST };
