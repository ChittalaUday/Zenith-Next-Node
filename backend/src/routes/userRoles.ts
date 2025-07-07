import { Router } from "express";
import UserRolesController from "../controllers/UserRolesController";

const router = Router();

router.get("/",UserRolesController.getUserRoles);
router.post("/create",UserRolesController.createUserRole);

export default router;