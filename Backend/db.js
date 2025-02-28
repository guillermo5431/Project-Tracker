const mysql = require('mysql2/promise');
require('dotenv').config(); //To Load environment variables

//Create a connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root', //my MySQL username
    password: process.env.DB_PASSWORD || '12345678', //mysql password
    database: process.env.DB_NAME || 'Project_tracker',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

//Create a connection pool