import { log } from "console"
import { NextRequest, NextResponse } from "next/server"
export async function GET(){
        return NextResponse.json({
            user:"dsingh9450492600@gmail.com",
            name:"atharv dev singh"
        })
}
export async function POST(req:NextRequest) {
    const body=await req.json()
    return NextResponse.json(body)
    
}