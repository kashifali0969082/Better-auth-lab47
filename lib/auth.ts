import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/Database/db";
import { account, session,user, verification } from "@/auth-schema";
export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg", 
        schema:{
            user:user,
            session:session,
            account:account,
            verification:verification,
        }
    }),
//     emailAndPassword: {
//     	enabled: true,
//   },
  socialProviders: { 
    google: { 
        enabled: true,
        clientId: process.env.GOOGLE_CLIENT_ID!, 
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!, 
    },
    facebook: {
        enabled: true,
        clientId: process.env.FACEBOOK_CLIENT_ID!,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRETE! ,
    },
}
});