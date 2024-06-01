import { getConnection, sql, queries } from '../database'
import {performance}  from 'perf_hooks'
export const getVentasNetasPorTienda = async (req, res) => {
    try {
        const start = performance.now()
        console.log("get Reporte")

        const fInicio = new Date(req.query.inicioDate)
        const monthI = fInicio.getMonth()+1
        //const fechaInicio=""+fInicio.getDate()+"/"+monthI+"/"+fInicio.getFullYear()
        const fechaInicio=""+monthI+"/"+fInicio.getDate()+"/"+fInicio.getFullYear()
        
        const fFin = new Date(req.query.finDate)
        const monthF = fFin.getMonth()+1
        //const fechaFin=""+fFin.getDate()+"/"+monthF+"/"+fFin.getFullYear()
        const fechaFin=""+monthF+"/"+fFin.getDate()+"/"+fFin.getFullYear()
        //
        // console.log(fechaInicio)
        // console.log(fechaFin)
        //.input('pFechaDel','07/07/2022')
        //.input('pFechaAl','07/07/2022')
        //
        console.log(req.query.inicioDate)
        console.log(fechaInicio)
        console.log(req.query.finDate)
        console.log(fechaFin)

        const pool = await getConnection();
        const result = await pool.request()
        .input('pFechaDel',fechaInicio)
        .input('pFechaAl',fechaFin)
        .input('tienda','')
        .input('Categoria','')
        .input('proveedor','')
        .input('producto','')
        .input('pResumen','1')
        .execute("SQSP_REPORTE_VENTA_NETA")
        //SQSP_REPORTE_VENTA_NETA
        //console.log(result.recordset)
        //SQSP_PRUEBA
        console.log(result.recordset.length, "length");
        const end = performance.now();
        console.log(`Execution time: ${end - start} ms`);
        const newResult = result.recordset.map((e,i)=>{
            console.log(e)
            return{
                id:i+1,
                ...e
            }    
        }
        )
         res.send(newResult);
        //res.send("result.recordset");




        //const pFechaAl =new Date('01/07/2022') 02/01/2023
        //const pFechaDel = new Date('02/07/2022') 02/12/2023
        //[SQSP_REPORTE_SERVICIOS]
        //const result = await pool.request().execute("SQSP_REPORTE_VENTA_NETA")
        //.input('pFechaDel',req.query.fechaInicio)
        //.input('pFechaAl',req.query.fechaFin)
        //console.log(tiendaId);
        /*
        const { pFechaDel } = req.params;
        const { pFechaAl } = req.params;
        const { tienda } = req.params;
        const { Categoria } = req.params;
        const { proveedor } = req.params;
        const { producto } = req.params;
        const { pResumen } = req.params;
        .input('pFechaDel',"'"+pFechaDel+"'")
        .input('pFechaAl',"'"+pFechaAl+"'")
        .input('tienda',"'"+tienda+"'")
        .input('Categoria',"'"+Categoria+"'")
        .input('proveedor',"'"+proveedor+"'")
        .input('producto',"'"+producto+"'")
        .input('pResumen',"'"+pResumen+"'")
            */

    }
    catch (error) {
        console.log(error)
        res.status(500)
        res.send(error.message)
    }
};