import { PrismaClient } from "../generated/prisma";
import type { Request, Response } from "express";
import { generateSlug } from "../util/generateSlug";
const prisma = new PrismaClient();

const UserRolesController = {
  async getUserRoles(req: Request, res: Response) {
    try {
      const roles = await prisma.userRoles.findMany();
      res.json({
        success: true,
        data: roles,
        message: "User roles fetched successfully",
      });
    } catch (err: any) {
      console.error("❌ Error in Getting UserRoles: ", err);
      res.status(501).json({
        success:false,
        message:"Failed to fetch",
        error:err.message
      });
    }
  },
  async createUserRole(req:Request,res:Response){
    try {
        const {role_name} = req.body;
        if(!role_name){
            res.status(400).json({
                success:false,
                message:"roles_name not found, it is required"
            })
        }
        const slug = await generateSlug(role_name);
        const role = await prisma.userRoles.create({
          data:{
            role_name,
            slug
          }
        }
        )

        res.json({
            success:true,
            message:"Role updated successfully.",
            data:role
        })
    } catch (error) {
        console.error("❌ Error Creating role",error);
        res.status(501).json({
            success:false,
            message:"Error Creating Role",
            error:error
        })
    }
  }
};

export default UserRolesController;
