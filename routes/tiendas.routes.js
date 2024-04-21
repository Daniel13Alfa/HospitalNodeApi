import { Router } from "express";
import { createNewTienda, getTiendas,getTiendasById } from "../controllers/tiendas.controller";

const router = Router();

router.get('/tiendas', getTiendas)
router.post('/tiendas', createNewTienda);
router.get('/tiendas/:tiendaId',getTiendasById)

export default router