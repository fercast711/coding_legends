import express from 'express'
import cors from 'cors'
import client from './db.js'
const app = express()

app.use(express.json())
app.use(cors())
client.connect()
app.post('/api/filter', async (req, res) => {
    const {
        classroom,
        day,
        hour,
        faculty,
        career
    } = req.body;

    try {
        console.log(req.body);

        // Definir la consulta con placeholders para los parámetros
        const consulta = `
            SELECT * FROM FILTRO($1, $2, $3, $4, $5, $6)
        `;

        // Ejecutar la consulta con los parámetros
        client.query(consulta, [classroom, day, hour, faculty, career, 'TODAS'], (err, result) => {
            if (err) {
                console.error('Error ejecutando la consulta', err.stack);
                res.status(500).json({ message: 'Error ejecutando la consulta' });
            } else {
                console.log('Datos traídos por la consulta:', result.rows);
                res.status(200).json({ data: result.rows });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Ha ocurrido un error' });
    }
});


export default app