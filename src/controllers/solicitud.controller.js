import { getConnection, sql, queries } from '../database'

export const insertSolicitud = async (req, res) => {
    
    try {
        
        const pool1 = await getConnection();
        await pool1.request()
            .input('id_hospital', sql.BigInt, req.body.params.hospital.charAt(0))
            .input('fecha_solicitud', sql.Date, req.body.params.fecha)
            .query(queries.insertSolicitud);

        const pooll = await getConnection();
        const id_soli = await pooll.request().query(queries.topSolicitud);

        for (let step = 0; step < req.body.params.detalle_pedido.length; step++) {
            const pool = await getConnection();
            await pool.request()
            .input('id_solicitud', sql.BigInt,id_soli.recordset[0].id_solicitud)
            .input('id_insumo', sql.BigInt, parseInt((req.body.params.detalle_pedido[step].id_insumo)))
            .input('cantidad_solicitada', sql.BigInt, parseInt((req.body.params.detalle_pedido[step].cantidad_solicitada)))
            .query(queries.insertDetalleSolicitud)
        }
        res.json('insert sucess');

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
};
