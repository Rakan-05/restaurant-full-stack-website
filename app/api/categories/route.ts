import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/app/generated/prisma/client";
import { NextResponse } from "next/server"


const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

//  FETCH ALL CATEGORIES
export const GET=async()=>{
    try{
    const categories =await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories),{status:200});
    } catch(err){
    console.log(err);
    return new NextResponse(JSON.stringify({message:"Something went wrong!"}),{status:500})
    }  
}
export const POST=()=>{
    return new NextResponse("Hello", {status:200})
} 