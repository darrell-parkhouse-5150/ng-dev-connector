const mysql = require('mysql2');
const express = require('express');
const app = express();

export const db_config = {
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'dev_connector'
}
export const db = mysql.createPool(db_config)

db.getConnection((err) => {
    if (err) {
        console.error(`Error connection to database ${db_config.database}`);
    } else {
        console.log('connected to the database');
        
    }
})