import dotenv from "dotenv";

dotenv.config();

export const CLOUDINARY_API_KEY: string = process.env.CLOUDINARY_API_KEY || "753357197199188";
export const CLOUDINARY_API_SECRET: string = process.env.CLOUDINARY_API_SECRET || "5I8U9eRQVs1-Oki2X0RmO1FK9dg";
export const CLOUDINARY_CLOUD_NAME: string = process.env.CLOUDINARY_CLOUD_NAME || "drkp2wxz4";
export const DATABASE_URL: string = process.env.DATABASE_URL || "mongodb+srv://sandervdb23:0yXqhPQSejAfNMw5@cluster-nder.mjheb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-nder";
