import { Router } from "express";
import { getInsumos,insertInsumo } from "../controllers/insumos.controller";

const router = Router();

router.get('/insumos', getInsumos);
router.post('/insertInsumo', insertInsumo);

export default router