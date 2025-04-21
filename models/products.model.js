const mongoose = require("mongoose");
const Provider = require("./provider.model");
require("../config/db_mongo"); // Conexión a BBDD MongoDB

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  provider: {
    type: mongoose.Schema.Types.ObjectId, // Referencia al modelo Provider
    ref: "providers", // Nombre del modelo de la colección de providers
    required: true,
  },
});

const Product = mongoose.model("products", productSchema);

module.exports = Product;

// Crear juego pasando titulo + nombre de compañía por parámetro
async function createProduct(id, title, price, description, companyName) {
  const provider = await Provider.find({ companyName });
  const provider_id = provider[0]._id.toString();

  const product = new Product({
    id,
    title,
    price,
    description,
    provider: provider_id,
  });

  const result = await product.save();
  console.log(result);
}
async function deleteProduct(title) {
  const product = await Product.findOne({ title: title });
  if (product) {
    const result = await product.deleteOne();
    console.log("Se ha eliminado: " + result);
  } else {
    console.log("No existe el proveedor");
  }
}
  // createProduct(
  //   1,
  //   "Tortilla de patatas",
  //   1.5,
  //   "Cafe jugosa del teatro",
  //   "La casa de las flores"
  // );

  // //crear otro pruducto para la casa de las plantas
  // createProduct(
  //   2,
  //   "Ensalada de tomate",
  //   2.5,
  //   "Cafe jugosa del teatro",
  //   "La casa de las plantas"
  // );
