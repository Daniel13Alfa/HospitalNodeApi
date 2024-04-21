import { Router } from "express";
import { getCategorias } from "../controllers/categoria.controller";

const router = Router();

router.get('/categorias', getCategorias)

export default router