import { Router } from "express";

const userRouter = Router();


userRouter.get("/", (req,res)=>{
    res.send({title: "User", message: "User fetched successfully"} );
});

userRouter.get("/:id", (req,res)=>{
    res.send({title: "User", message: "User fetched successfully"});
});

userRouter.post("/", (req,res)=>{
    res.send({title: "User", message: "User created successfully"});
});

userRouter.put("/:id", (req,res)=>{
    res.send({title: "User", message: "User updated successfully"});
});

userRouter.delete("/:id", (req,res)=>{
    res.send({title: "User", message: "User deleted successfully"});
});

export default userRouter;