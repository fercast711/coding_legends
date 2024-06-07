import app from "./app.js";
import { PORT } from "./config.js";
import pool from "./db.js";


pool.connect().then(() => {
  console.log('connect successful')
}).catch((e) => {
  console.log('error connecting', e.message)
})


app.listen(PORT, () => console.log(`Server listen on port ${PORT}`))