import pg from 'pg';

export const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'db_sigemo',
    password: 'root',
    port: 5432,
});

export default pool;