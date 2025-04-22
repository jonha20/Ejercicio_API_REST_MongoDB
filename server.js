const express = require("express");
const cowsay = require("cowsay");
const app = express();
const port = 3001;

// // Importar middlewares
// const manage404 = require("./middlewares/error404");
// const morgan = require("./middlewares/morgan");

// // Logger
// app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

// // Rutas
const productsRoutes = require("./routes/products.routes");
const providersRoutes = require("./routes/providers.routes");

// GET http://localhost:3000/ --> Ruta /. La principal
app.get("/", (req, res) => {
  // req: request, res: response
  res.send("Hello World!. Welcome to Backend");
});

app.use(express.json()); // Habilito recepción de JSON en servidor

// //WEB
app.use("/api/products", productsRoutes);
app.use("/api/providers", providersRoutes);

// // Para rutas no existentes
// app.use('*',error404);

app.listen(port, () => {
  console.log(
    cowsay.say({
      text: `Nos vamos a por tortilla. Funcionando en: http://localhost:${port}`,
      e: "oO",
      T: "U ",
    })
  );
});
