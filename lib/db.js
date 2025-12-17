// import { PrismaClient } from "./generated/prisma/client";

// const db = globalThis.prisma || new PrismaClient(
//   {
//     log: ['query', 'info', 'warn', 'error'],
//   }
// )

// if(process.env.NODE_ENV === 'development'){
//   globalThis.prisma = db
// } 

// export default db;



import { PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const globalForPrisma = globalThis;
export const db = globalForPrisma.db || new PrismaClient({ adapter });
if (process.env.NODE_ENV !== "production") globalForPrisma.db = db;