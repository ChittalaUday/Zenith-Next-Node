import { Router } from 'express';
import healthRouter from './health';
import userRouter from './userRoles';

const router = Router();

router.use('/health', healthRouter);
router.use("/roles/",userRouter);

export default router; 