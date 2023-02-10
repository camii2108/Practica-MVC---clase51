const express = require('express');/* requerimos en modulo de express */
const app = express();/* nos retorna un funcion */
const PORT = 3000;
const path = require("path");


app.use(express.static(path.join(__dirname, "public")));

/* Enrutador */
const mainRouter = require("./routers/main.js")




/* Middleware de ruta */
/* Rutas */
app.use("/", mainRouter);



app.listen(PORT, ()=> console.log(`Server listen in port ${PORT}\n http://localhost:${PORT}` ));
