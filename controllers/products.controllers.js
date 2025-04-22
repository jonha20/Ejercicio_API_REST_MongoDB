const Product = require("../models/products.model");

// READ
const getProduct = async (req, res) => {
  try {
    let products = await Product.find({}, "-_id -__v").populate(
      "provider",
      "-_id -__v"
    );
    res.status(200).json(products); // Respuesta de la API para 1 producto o todos
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

// CREATE
const createProduct = async (req, res) => {
  console.log(req.body);

  try {
    const data = req.body;
    let answer = await new Product(data).save();
    res.status(201).json(answer);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

// UPDATE
const updateProduct = async (req, res) => {
  console.log(req.body);
  try {
    const data = req.body;
    let answer = await Product.findOneAndUpdate(
      {title: data.old_title},
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
const deleteProduct = async (req, res) => {
  console.log(req.body);
  try {
    const data = req.body;
    let answer = await Product.findOneAndDelete({ title: data.title }, data, {
      new: true,
    });
    res.status(200).json(answer);
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};
module.exports = {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
