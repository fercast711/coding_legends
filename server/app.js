import express from 'express'
import cors from 'cors'
import client from './db.js'
const app = express()
//usamos express.json para permitir el envio de json a traves de la red
app.use(express.json())
//usamos cors para permitirnos conectar el backend con el front
app.use(cors())

//conectamos la base de datos
client.connect()

//creamos un endpoint post que nos permite traer informacion del front para hacer la consulta SQL
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

        //Definimos la consulta para la base de datos
        const consulta = `
            SELECT * FROM FILTRO($1, $2, $3, $4, $5, $6)
        `;

        // Ejecutamos la consulta con los parametros necesarios
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