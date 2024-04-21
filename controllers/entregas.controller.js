import { getConnection, sql, queries } from "../database";

export const getEntregas = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getEntregas);
        const newResult = result.recordset.map((e,i)=>{
            return{
                id:i+1,  
                id_solicitud: e.id_solicitud,
                fecha_solicitud:e.fecha_solicitud,
                fecha_entrega:"N/A",
                nombre_hospital:e.nombre_hospital,
                nombre_insumo:e.nombre_insumo,
                cantidad_solicitada:e.cantidad_solicitada
            }
        })
        res.send(newResult);
    } catch (error) {
        res.status(500)
        res.send(error.message)
        
    }
}