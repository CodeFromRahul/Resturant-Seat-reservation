import errorHandling from "../error/error.js";
import { Reservation } from "../model/reservationSchema.js";

export const sendReservation = async(req,res,next)=>{
    const {firstName,lastName,Email,phoneNumber,Date}= req.body;
    console.log(firstName)
    console.log(lastName)

    if(!firstName||!lastName ||!Email||!phoneNumber||!Date){
        return next(new errorHandling("Please fill full form correctly",401))
    }

    try {
        await Reservation.create({firstName,lastName ,Email,phoneNumber,Date})
        res.status(200).json({
            success:true,
            message:"Reservation send successfully "

        })
        
    } catch (error) {
        console.log(error.message)
        if(error.name==="ValidationError"){
            const validationErrors= Object.values(error.errors).map(
                (err)=>err.message
            )

            return next(new errorHandling(validationErrors.join(','),400))
        }
        return next(error)
        
    }
}




