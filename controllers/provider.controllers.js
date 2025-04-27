const Provider = require("../models/provider.model");
// READ
const getallProvider = async (req, res) => {
  try {
    const provider = await Provider.find({});
    console.log(provider);

    if (provider.length === 0) {
      res.status(404).json({ msj: "No hay proveedores" });
    } else {
      res.status(200).json(provider); // Respuesta de la API para 1 producto
    }
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

// CREATE
const createProvider = async (req, res) => {
  console.log(req.body);
  try {
    const data = req.body;
    let answer = await new Provider(data).save();
    res.status(201).json(answer);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

// UPDATE
const updateProvider = async (req, res) => {
  console.log(req.body);
  try {
    const data = req.body;
    let answer = await Provider.findOneAndUpdate(
      { companyName: data.old_companyName }, 
      data,
      { new: true }
    );
    res.status(200).json(answer);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

// DELETE
const deleteProvider = async (req, res) => {
  console.log(req.body);
  try {
    const data = req.body;
    let answer = await Provider.findOneAndDelete(
      { companyName: data.companyName },
      data,
      { new: true }
    );
    res.status(200).json(answer);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

module.exports = {
  getallProvider,
  createProvider,
  updateProvider,
  deleteProvider,
};
