import { config } from "dotenv";
 
config({path: `.env.${process.env.NODE_ENV || "production"}.local`});

export const { PORT, NODE_ENV } = process.env;