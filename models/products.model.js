const mongoose = require("mongoose");
const Provider = require("./provider.model");
require("../config/db_mongo"); // Conexión a BBDD MongoDB

const objectSchema = {
    id: { 
        type: Number, 
        required: true,
        unique: true
    },
    title: { 
        type: String, 
        required: true,
        unique: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Provider",
        required: true
      },
};
// Crear el esquema
const productSchema = mongoose.Schema(objectSchema);

// Crear el modelo --> Colección
const Product = mongoose.model('product', productSchema);

module.exports = Product;

// Crear juego pasando titulo + nombre de compañía por parámetro
async function createProduct(
    id,
    title,
    price,
    description,
    companyName
  ) {
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
  
//   createProduct(
//     1,
//     "Tortilla de patatas",
//     1.5,
//     "Cafe jugosa del teatro",
//     "La casa de las flores"
//   );
  
//   //crear otro pruducto para la casa de las plantas
//   createProduct(
//     2,
//     "Ensalada de tomate",
//     2.5,
//     "Cafe jugosa del teatro",
//     "La casa de las plantas"
//   ); 