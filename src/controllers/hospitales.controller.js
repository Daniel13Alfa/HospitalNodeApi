import { getConnection, sql, queries } from '../database'

export const getHospitales = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getHospitales);
        const newResult = result.recordset.map((e,i)=>{
            return{
                id:e.id_hospital,
                nombre_hospital:e.nombre_hospital,
                num_casos:e.num_casos
            }    
        }
        )
        res.send(newResult);
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

export const insertHospital = async (req, res) => {
    console.log(req.body.params.nombre_hospital, req.body.params.num_casos)
    const  nombre_hospitaal = req.body.params.nombre_hospital
    const  num_casoos = req.body.params.num_casos
    if (nombre_hospitaal == null || num_casoos == null) {
        return res.status(400).json({ msg: '!Bad Request! please fill all de fields' });
    }
    try {
        const pool = await getConnection();
        await pool.request()
            .input('nombre_hospital', sql.VarChar, nombre_hospitaal)
            .input('num_casos', sql.Int, num_casoos)
            .query(queries.insertHospital)
        res.json('insert sucess');
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};
export const customHospitales = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.customHospitales);
        const newResult = result.recordset.map((e,i)=>{
            return{
                id:e.id_hospital,
                nombre_hospital:e.nombre_hospital
            }    
        }
        )
        res.send(newResult);
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};