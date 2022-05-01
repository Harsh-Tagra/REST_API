const schema = require("./schema");
exports.create = async (req, res) => {
  try {
    const user = new schema(req.body);

    const result = await user.save();
    res.status(201).send({ msg: "sucees" });
  } catch (error) {
    res.status(400).send({ msg: "faild" });
  }
};
exports.Delete = async (req, res) => {
  try {
    const Delete = await schema.findByIdAndDelete(req.params.id);
    if (Delete === null) {
      return res.status(404).send({ msg: "not found" });
    }
    res.send({ msg: "Delete suceessful" });
  } catch (error) {
    res.status(400).send({ msg: "error to delete" });
  }
};
exports.update = async (req, res) => {
  try {
    const result = await schema.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send({ msg: "sucess to update" });
  } catch (error) {
    res.status(400).send({ msg: "error to update" });
  }
};
exports.read = async (req, res) => {
  try {
    const result = await schema.find();
    res.json(result);
  } catch (error) {
    res.status(404).send({ msg: "error to update" });
  }
};

exports.Name = async (req, res) => {
  try {
    const result = await schema.find(req.params);
    if (result.length == 0) {
      return res.status(404).send({ msg: "not found" });
    }
    res.send(result);
  } catch (error) {
    res.status(400).send({ msg: "error to find user " });
  }
};
