import express from "express";
import { PORT } from "./config/env.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscriptio.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middleware/error.middleware.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions ", subscriptionRouter);

app.use(errorMiddleware);

app.listen(PORT, "localhost", async () => {
  console.log(`Server is running on port ${PORT}`);
  await connectToDatabase();
}); 

export default app;