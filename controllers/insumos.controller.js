import { getConnection, sql, queries } from '../database'

export const getInsumos = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getInsumos);
        const newResult = result.recordset.map((e, i) => {
            return {
                id: e.id_insumo,
                nombre_insumo: e.nombre_insumo
            }
        }
        )
        res.send(newResult);
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
};
export const insertInsumo = async (req, res) => {
    console.log(req.body.params.nombre_insumo)
    const nombre_insumoo = req.body.params.nombre_insumo
    if (nombre_insumoo == null) {
        return res.status(400).json({ msg: '!Bad Request! please fill all de fields' });
    }
    try {
        const pool = await getConnection();
        await pool.request()
            .input('nombre_insumo', sql.VarChar, nombre_insumoo)
            .query(queries.insertInsumo)
        res.json('insert sucess');
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};
