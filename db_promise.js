import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: "localhost", 
    port: 3307,
    user: "root", 
    password: "", 
    database: "coffee_shop", 
    waitForConnections: true, 
    connectionLimit: 10, 
    queueLimit: 0 //ไม่จำกัด
});

export default pool;