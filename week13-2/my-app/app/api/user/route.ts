import { PrismaClient } from "@prisma/client";
import { log } from "console";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  return NextResponse.json({
    user: "dsingh9450492600@gmail.com",
    name: "atharv dev singh",
  });
}
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const existedUser = await prisma.users.findFirst({
      where: {
        email: body.email,
      },
    });
    if (existedUser) {
      return NextResponse.json(
        {
          message: "user already exist",
        },
        {
          status: 409,
        }
      );
    }

    const user = await prisma.users.create({
      data: {
        email: body.email,
        password: body.password,

      },
    });
    if (!user) {
      return NextResponse.json(
        {
          message: "can't create the user-something went wrong",
        },
        {
          status: 500,
        }
      );
    }
    return NextResponse.json(user, {
      status: 200,
    });
  } catch (error:any) {
    return NextResponse.json({
        message:error?.message || "some thing went wrong"
    },{
        status:500
    })
  }
}
