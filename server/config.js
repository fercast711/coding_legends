import dotenv from 'dotenv'

dotenv.config()
//Configuraremos el uso de las variables de ambiente
export const PORT = process.env.PORT
export const USER = process.env.USER
export const HOST = process.env.HOST 
export const DATABASE = process.env.DATABASE
export const PASSWORD = process.env.PASSWORD
export const PORTDB = process.env.PORTDB