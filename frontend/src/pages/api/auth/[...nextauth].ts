import NextAuth, {NextAuthOptions} from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXT_AUTH_SECRET,
    pages: {
        signIn: "/"    
    },
    providers: [
        Credentials({
            // @ts-ignore
            authorize(credentials) {
              const { password, username }: any = credentials;
              if (
                password === process.env.CREDENTIALS_PASSWORD &&
                username === process.env.CREDENTIALS_USERNAME
              ) {
                return {
                  username,
                };
              }
      
              return null;
            },
          }),
    ]
}
export default NextAuth(authOptions);