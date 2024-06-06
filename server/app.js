import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.get('/',(req, res) => {
  res.json({hola:'hola'})
})

export default app