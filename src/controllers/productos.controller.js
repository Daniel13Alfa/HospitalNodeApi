import { getConnection, sql, queries } from '../database'
import jsonSize from 'json-size'

export const getProductos = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProductos);

        //console.log(result.recordset.length)
        //const size = Buffer.byteLength(result.recordset)
       // console.log(jsonSize(result.recordset))
    
        //console.log(size)
        res.json(result.recordset);

    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
};
