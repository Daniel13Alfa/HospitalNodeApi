import { getConnection, sql, queries } from '../database'

export const getProveedores = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProveedores);
        res.json(result.recordset);
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
};