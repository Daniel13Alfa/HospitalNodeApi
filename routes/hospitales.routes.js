import { Router } from "express";
import { getHospitales, insertHospital, customHospitales } from "../controllers/hospitales.controller";

const router = Router();


router.get('/hospitales', getHospitales);
router.post('/insertHospital', insertHospital);
router.get('/customhospital', customHospitales);

export default router