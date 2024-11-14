import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName :{
        type:String,
        required:true,
        minLength:[3,"First name should be of minimum 3  character "],
        MaxLength:[30,"First name can contai maximum 30 character"]


    },

    lastName:{
        type:String,
        required:true,
        minLength:[3,"Last name should contain inimum 3 character"],
        MaxLength:[30,"Last name can contai maximum 30 character"]
    },

    Email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"provide a valid emial"]

    },

    phoneNumber:{
        type:Number,
        required:true,
        minLength:[10,"Thier should be 10 valid number"]
    },

    Date:{
        type:String,
        required:true
    }

})

export const reservation = mongoose.model("reservation",reservationSchema) 



