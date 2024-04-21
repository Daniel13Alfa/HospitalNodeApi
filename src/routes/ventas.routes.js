import { Router } from "express";
import { getVentasNetasPorTienda } from "../controllers/ventas.controller";

const router = Router();

router.get('/getReportesVentasNetas',getVentasNetasPorTienda)
export default router