import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();
import { Request,Response } from "express";

const userController = {
    async login(req:Request,res:Response){
        try{
            const {email,mobile,password} = req.body;

            if(!email || !mobile){
                return res.status(400).json({
                    success:false,
                    mesasge:"Missing mobile or email fields"
                })
            }
            if(!password){
                return res.status(400).json({
                    success:false,
                    message:"Missing password"
                });
            }

            const result = prisma.users.findFirst()


        }catch(error){

        }
        
    }

}

export default userController;