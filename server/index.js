import app from "./app.js";
import { PORT } from "./config.js";

//Pondremos nuestro servidor web en el puerto 8000
app.listen(PORT, () => console.log(`Server listen on port ${PORT}`))