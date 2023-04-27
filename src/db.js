import {createPool} from 'mysql2/promise'
import {
DB_HOST,
DB_PORT,
DB_DATABASE,
DB_USERS,
DB_PASSWORD,
} from './config.js'

 export const pool = createPool({

    host: DB_HOST,
    user: DB_USERS,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE

})

