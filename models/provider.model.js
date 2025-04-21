const mongoose = require("mongoose");
require("../config/db_mongo"); // Conexión a BBDD MongoDB

const objectSchema = {
  companyName: {
    type: String,
    required: true,
    unique: true,
  },
  cif: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  url_web: {
    type: String,
    required: true,
    validate: {
      validator: function (url) {
        if (url.indexOf("http") != -1) return true;
        else {
          return false;
        }
      },
      message: "Porfa, introduce una URL válida",
    },
  },
};

// Crear el esquema
const providerSchema = mongoose.Schema(objectSchema);
// Crear el modelo
const Provider = mongoose.model("providers", providerSchema);

module.exports = Provider;

// Crear juego pasando titulo + nombre de compañía por parámetro
async function createProvider(companyName, cif, address, url_web) {
  const provider = new Provider({
    companyName,
    cif,
    address,
    url_web,
  });

  const result = await provider.save();
  console.log("Se ha creado: " + result);
}

async function updateProvider(companyName, cif, address, url_web) {
  const provider = await Provider.findOne({ companyName: companyName });
  if (provider) {
    provider.cif = cif;
    provider.address = address;
    provider.url_web = url_web;
    const result = await provider.save();
    console.log("Se ha actualizado: " + result);
  } else {
    console.log("No existe el proveedor");
  }
}

async function deleteProvider(companyName) {
  const provider = await Provider.findOne({ companyName: companyName });
  if (provider) {
    const result = await provider.deleteOne();
    console.log("Se ha eliminado: " + result);
  } else {
    console.log("No existe el proveedor");
  }
}

//   createProvider(
//     "Ninja Turtles",
//     "C588654",
//     "Calle de las tortugas, 123",
//     "https://www.ninjaturtles.com"
//   );

// Insertar un proveedor
// const p = new Provider({
//     companyName: "La casa de las flores",
//     cif: "A12345678",
//     address: "Calle de las flores, 123",
//     url_web: "https://www.lacasadelasflores.com"
// });

// // Guardar en la BBDD
// p.save()
// .then((data)=>console.log(data))
// .catch(err=>console.log(err))

// // Insertar otro proveedor
// const p2 = new Provider({
//     companyName: "La casa de las plantas",
//     cif: "B12345678",
//     address: "Calle de las plantas, 123",
//     url_web: "https://www.lacasadelasplantas.com"
// });

// // Guardar en la BBDD
// p2.save()
// .then((data)=>console.log(data))
