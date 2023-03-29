import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from "Database/server"
import Users from "Model/Schema"
import {compare} from "bcryptjs"

export const authOptions = {

  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      async authorize(credentials, req) {
        connectMongo().catch(function(err){ res.json({error:"Connection Failed!"})})
        
        // console.log(req)
        // Add logic here to look up the user from the credentials supplied
        const {username, password} = credentials
        const findUser = await Users.findOne({username})
        // check username
        if (!findUser) {
          // If you return null then an error will be displayed advising the user to check their details.
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          throw new Error("username tidak ditemukan")

        } 
    
        // CHECK PASSWORD 
        // parameter pertama password dari kredensial, paramter kedua password database
        const checkPassword = await compare(password, findUser.password)
        if(!checkPassword || findUser.username !== username) {
          throw new Error("username atau password tidak sama")
        }
        // console.log(findUser)
        // Any object returned will be saved in `user` property of the JWT
        return findUser
      }
    })
    // ...add more providers here
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
    // async session({ session}) {
    //   if (!session) return;
    //   connectMongo().catch(function(err){ res.json({error:"Connection Failed!"})})
    //   const findUser = await Users.findOne({username})

    //   return {session: 
    //   {
    //     user: {
    //       username: findUser.username
    //     }
    //   }}
    // }
  }
//   pages: {
//     signIn: "/belajar/auth/signin",
//   }
}

export default NextAuth(authOptions)