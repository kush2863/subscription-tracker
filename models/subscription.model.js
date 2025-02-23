import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
name:{
    type:String,    
    required:[true,"Subscription Name is required"],
    trim:true,
    minLenght: [3,"Subscription Name must be at least 3 characters long"],
    maxLenght: [50,"Subscription Name must be less than 50 characters long"],
},
price:{
    type:Number,
    required:[true,"Subscription Price is required"],
    min: [0,"Subscription Price must be greater than 0"],
},
currency:{
    type:String,
    enum:["USD","EUR","GBP","CAD","AUD","NZD","CHF","JPY","CNY","INR"],
    default:"USD",
    required:[true,"Subscription Currency is required"],
},
frequency:{
    type:String,
    enum:["daily","weekly","monthly","yearly"],
    required:[true,"Subscription Frequency is required"],
},
category:{
    type:String,
    enum:["food","sports","transportation","housing","utilities","entertainment","other"],
    required:[true,"Subscription Category is required"],
},
status:{
    type:String,
    enum:["active","inactive"],
    default:"active",
    
},
paymentMethod:{
    type:String,
    required:true,
    trim:true,    
},
startDate:{
    type:Date,
    required:true,
    validate:{
        validator:(value)=> value <= new Date(),    
        message:"Start Date must be in the past",
    }
},
renewalDate:{
    type:Date,
  
    validate:{
        validator:function(value){
            if(this.frequency === "monthly"){
                return value >= this.startDate;
            }
            return true;
        },
        message:"Renewal Date must be after Start Date",
    }
},
user :{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true,
    index:true,
},
}, {timestamps:true});

subscriptionSchema.pre("save",async function(next){
    if(!this.renewalDate){
        const renewalPeriods ={
            daily:1,
            weekly:7,
            monthly:30,
            yearly:365,
        };
        const renewalInterval = renewalPeriods[this.frequency];
        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalInterval);
    }
    if(this.renewalDate < new Date()){
        this.status = "expired";
    }
    next();
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;