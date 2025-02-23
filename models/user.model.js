import mongoose from "mongoose";

const userSchema = new mongoose.schema({
    name:{type:String , 
    required:[true,"User Name is required"],
    trim:true,
    minLenght: [3,"User Name must be at least 3 characters long"],
    maxLenght: [50,"User Name must be less than 50 characters long"],
    },
    email:{type:String ,
     required:[true,"User Email is required"],
    trim:true,
    lowercase:true,
    minLenght: [3,"User Email must be at least 3 characters long"],
    maxLenght: [50,"User Email must be less than 50 characters long"],
    match:[/^\S+@\S+\.\S+$/,"Please use a valid email address"],
    },
    password:{type:String,
    required:[true,"User Password is required"],
    minLenght: [8,"User Password must be at least 8 characters long"],
    },
}, {timestamps:true});

const User = mongoose.model("User", userSchema);

export default User;