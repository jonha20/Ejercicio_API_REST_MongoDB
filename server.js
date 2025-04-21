const express = require('express')
const cowsay = require('cowsay')
const app = express()
const port = 3000

// Importar middlewares
const manage404 = require("./middlewares/error404");
const morgan = require("./middlewares/morgan");

// Logger
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

// Rutas
//const productsApiRoutes = require("./routes/productsApi.routes")
const productsRoutes = require("./routes/products.routes")
// const entriesApiRoutes = require("./routes/entriesApi.routes")

app.use(express.json()); // Habilito recepción de JSON en servidor

// Rutas
//API
//app.use('/api/products',productsApiRoutes);

//WEB
app.use('/products',productsRoutes);

// Para rutas no existentes
app.use('*',error404);

app.listen(port, () => {
  console.log(
      cowsay.say({
          text: `Nos vamos a por tortilla. Funcionando en: http://localhost:${port}`,
          e: "oO",
          T: "U "
      }))
})