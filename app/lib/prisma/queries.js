import { prisma } from "."
import {  Installments } from '@prisma/client'


export const saveInterest = async (data) => {
    console.log("IN SAVE")
    let { name, email, phone, address, message, country, state, city, propertyName, propertyPrice, TotalPrice, quantity, installments } = data
    installments = installments == 3 ? Installments.MONTHS3:installments == 6 ? Installments.MONTHS6:installments == 12 ? Installments.MONTHS12:Installments.FULL

    quantity = Number(quantity)
    propertyPrice = Number(propertyPrice)
    TotalPrice = Number(TotalPrice)
    try{
        let response = await prisma.interest.create({
            data: {
                name, email, phone, address, message, country, state, city, propertyName, propertyPrice, TotalPrice, quantity, installments
            }
        })
        console.log(response)
        return response
    }
    catch(e){
        console.log(e)
        return  new throwError(e)
    }
    
}