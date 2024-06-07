import pkg from "pg";
import { DATABASE, HOST, PASSWORD, PORTDB, USER } from "./config.js";
const { Client } = pkg

const client = new Client({
    user: USER,
    host: HOST,
    database: DATABASE,
    password: PASSWORD,
    port: PORTDB,
  })

export default client;