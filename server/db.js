import pkg from "pg";
import { DATABASE, HOST, PASSWORD, PORTDB, USER } from "./config.js";
const { Client } = pkg

//Creamos el cliente que nos conectara con la base de datos local
const client = new Client({
    user: USER,
    host: HOST,
    database: DATABASE,
    password: PASSWORD,
    port: PORTDB,
  })

export default client;