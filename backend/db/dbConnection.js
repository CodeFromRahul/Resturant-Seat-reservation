import mongoose from "mongoose";

export const dbConnection = ()=>{
   try {
      mongoose.connect(process.env.MONGO_URI,{
        dbName:"Resturant",
      
    })
    console.log("Database connected successfully")
    
   } catch (error) {
    console.log(error.message)
    
   }

}

