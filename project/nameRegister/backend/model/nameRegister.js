const mongooes = require("mongoose");

const nameRegisterSchema = new mongooes.Schema({
  firstName: { type: String, required: true },
  surname: { type: String, required: true },
  fullAdrress: { type: String, required: true },
  subCity: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
});

const Name = mongooes.model("Name", nameRegisterSchema);
module.exports = Name;
