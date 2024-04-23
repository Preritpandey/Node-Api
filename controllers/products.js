const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "Iam get all products" });
};
const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: "Iam get all testing products" });
};

module.exports = { getAllProducts, getAllProductsTesting };
