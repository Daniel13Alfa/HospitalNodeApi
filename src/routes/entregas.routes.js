import { Router } from "express";
import { getEntregas } from "../controllers/entregas.controller";

const router = Router();

router.get('/entregas', getEntregas);

export default router