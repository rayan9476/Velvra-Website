import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "rayan8422",
  database: "velvra_db",
});

export default db;
