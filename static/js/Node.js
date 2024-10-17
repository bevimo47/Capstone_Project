const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
    user: 'your_username',
    host: 'capstonedb.cbi0ekqes6po.eu-north-1.rds.amazonaws.com',
    database: 'your_database',
    password: 'your_password',
    port: 5432,
    ssl: { rejectUnauthorized: false },
});

app.get('/data', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM your_table');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});