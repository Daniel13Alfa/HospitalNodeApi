import sql from 'mssql'
const dbSettings = {
    user: 'alfarodany_SQLLogin_2',
    password: '4a8mwep3u4',
    server: 'hospitalApi.mssql.somee.com',
    database: 'hospitalApi',
    requestTimeout: 12000000,
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};
export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        //const result = await pool.request().query('SELECT * from sqt_tienda where id=234');
        //console.log(result);
        return pool;
    }
    catch (error) {
        console.error(error);
    }
}
export { sql };