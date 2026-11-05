import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/app/generated/prisma/client";
import { NextRequest, NextResponse } from "next/server";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

// FETCH ALL PRODUCTS
export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url);
    const cat = searchParams.get("cat");

    try {
        const products = await prisma.product.findMany({
            where: cat
                ? { CatSlug: cat }
                : { isFeatured: true },
        });
        return new NextResponse(JSON.stringify(products), { status: 200 });
    } catch (err) {
        console.error(err);
        return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
    }   
};

// CREATE A PRODUCT
export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();
        const { options, title, desc, price, CatSlug, img } = body;

        const product = await prisma.product.create({
            data: {
                title,
                desc,
                price: parseFloat(price) || 0, // Convert string price to number/decimal format
                CatSlug,
                img: img && img.trim() !== "" ? img : "/default-product.png", // Fallback if image is blank
                options: options && options.length > 0 ? options.map((opt: any) => ({
                    title: opt.title,
                    additionalPrice: parseFloat(opt.additionalPrice) || 0,
                })) : [],
            },
        });

        return new NextResponse(JSON.stringify(product), { status: 201 });
    } catch (err: any) {
        console.error("PRISMA ERROR DETAILS:", err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!", error: err.message }), 
            { status: 500 }
        );
    }   
};