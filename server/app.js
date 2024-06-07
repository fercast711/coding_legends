import express from 'express'
import cors from 'cors'
import pool from './db.js'
const app = express()

app.use(express.json())
app.use(cors())

app.post('/api/filter',async(req, res) => {
    const {
        classroom,
        day,
        hour,
        faculty,
        career
    } = req.body;
    try {
        console.log(req.body)

        // Consulta a ejecutar
        const consulta = 'SELECT * FROM SECCION;';
    
        // Ejecutar la consulta
        const resultado = await pool.query(consulta);
          console.log(resultado.rows)
        res.status(200).json({data: resultado.rows})
    } catch (error) {
        console.log(error)
        res.status(500).json({menssage: 'Ha ocurrido un error'})
    }
})

export default app