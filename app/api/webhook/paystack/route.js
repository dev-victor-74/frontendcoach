import { removePro } from "@/app/utils/payments/remove-pro";
import { onChargeSuccessPro, updatePro } from "@/app/utils/payments/update-api-limit";
import crypto from "crypto-js"
import {headers} from "next/headers"
import { NextResponse } from "next/server";

export const POST=async(req)=>{
    const body = await req.json();
    // const hash = headers().get(['x-paystack-signature'])
    
    // const secret = process.env.PAYSTACK_SECRET;
    // const payload = JSON.stringify(body);

    // if (!secret || !hash || !payload) {
    //     return new NextResponse("missing fields",{status:404});
    //   }

    //   const computedHash = crypto
    //   .HmacSHA512(payload, secret)
    //   .toString(crypto.enc.Hex);

    //   if (computedHash !== hash) {
    //     return new NextResponse ('Invalid signature' ,{status:403});
    //   }

      const event = body.event

      if(event === "subscription.create"){
         await updatePro(body?.data?.customer.email,"Pro",body?.data?.customer.customer_code,body?.data.subscription_code)
        }
        if(event === "charge.success"){

          await onChargeSuccessPro(body?.data?.customer.email,"Pro")
        }
        if(event === "subscription.disable"){
          await removePro(body?.data?.customer.email, "Free")
        }
        if(event === "invoice.payment_failed"){
          await removePro(body?.data?.customer.email,"Free")
        }

      return NextResponse.json(null,{status:200});

}