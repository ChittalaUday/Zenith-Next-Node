import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();
import { Request,Response } from "express";

const userController = {
    async createUser(req:Request,res:Response){
        try {
            const {first_name,last_name,role,email,mobile,password} = req.body;
            

        } catch (error) {
            console.log("❌ Error in Creating User: ",error);
        }
    }

}

export default userController;