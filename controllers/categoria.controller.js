import { getConnection, sql, queries } from '../database'

export const getCategorias = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllCategoria);
        
        res.json(result.recordset);
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
};


