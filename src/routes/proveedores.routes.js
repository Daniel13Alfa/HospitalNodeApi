import { Router } from "express";
import { getProveedores } from "../controllers/proveedores.controller";

const router = Router();

router.get('/proveedores', getProveedores)

export default router