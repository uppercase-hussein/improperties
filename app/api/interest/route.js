import { saveInterest } from "@/app/lib/prisma/queries";
import { NextResponse } from "next/server";

export async function POST(request) {
    try{
        // console.log("INAPI")
        let body = await request.json();
    let newInterest = await saveInterest(body)
    return NextResponse.json(newInterest);
    }
    catch(e){
        console.log(e)
    }
    

  }
  
 