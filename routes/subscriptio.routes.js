import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.post("/", (req,res)=>{
    res.send({title: "Subscription", message: "Subscription created successfully"});
});

subscriptionRouter.get("/", (req,res)=>{
    res.send({title: "Subscription", message: "Subscription fetched successfully"});    
});

subscriptionRouter.get("/:id", (req,res)=>{
        res.send({title: "Subscription", message: "Subscription fetched successfully"});
});

subscriptionRouter.put("/:id", (req,res)=>{
    res.send({title: "Subscription", message: "Subscription updated successfully"});
});

subscriptionRouter.delete("/:id", (req,res)=>{
    res.send({title: "Subscription", message: "Subscription deleted successfully"});
});
subscriptionRouter.get("/user/:id", (req,res)=>{
    res.send({title: "Subscription", message: "Subscription fetched successfully"});
});
subscriptionRouter.put("/:id/cancel", (req,res)=>{
    res.send({title: "Subscription", message: "Subscription cancelled successfully"});
});
subscriptionRouter.get("/upcoming-renewals", (req,res)=>{
    res.send({title: "Subscription", message: "Upcoming renewals fetched successfully"});
});


export default subscriptionRouter;  