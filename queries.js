const { Pool } = require('pg');

async function run() {
  const pool = new Pool({
    host: '',
    database: '',
    user: '',
    password: '',
  });

  const result = await pool.query(`

  `);

  console.log(result.rows);
  pool.end();
}

run();
