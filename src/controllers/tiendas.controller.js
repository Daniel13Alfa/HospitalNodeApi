//import { getConnection, sql } from "../database/connection";
//import querys from "../database/querys";
import { getConnection, sql, queries } from '../database'

export const getTiendas = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllTienda);
        //const result = await pool.request().query('exec SQSP_REPORTE_VENTA_NETA ''01/12/2022'',''30/12/2022'','','','','',''1''');
        //console.log(result);
        res.json(result.recordset);
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

export const createNewTienda = async (req, res) => {
    const { tienda_id, producto_id, enviado } = req.body
    //let {quamtity} = req.body;
    //Para si el parametro que llega cambia se crea como una variable     

    if (tienda_id == null || producto_id == null) {
        return res.status(400).json({ msg: '!Bad Request! please fill all de fields' });
    }
    //if(quantity == null ) quantity = 0;
    try {
        const pool = await getConnection();
        await pool.request()
            .input('tienda_id', sql.BigInt, tienda_id)
            .input('producto_id', sql.BigInt, producto_id)
            .input('enviado', sql.VarChar, enviado)
            .query(queries.createNewTienda)

        //console.log(tienda_id,producto_id,enviado);

        res.json('create a new Tienda');
    } catch (error) {
        res.status(500)

        res.send(error.message)
    }
};
export const getTiendasById = async (req, res) => {
    try {
        const { tiendaId } = req.params
        const pool = await getConnection();
        const result = await pool.request()
        .input('id',tiendaId)
        .query(queries.getTiendaById);
        console.log(result)
        //console.log(tiendaId);

        res.send(result.recordset[0]);
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

