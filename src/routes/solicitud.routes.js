import { Router } from "express";
import { insertSolicitud } from "../controllers/solicitud.controller";

const router = Router();

router.post('/insertSolicitud', insertSolicitud);

export default router