const Car = require("./cars-model");
var vinValidator = require("vin-validator");

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const car = await Car.getById(req.params.id);
    if (!car) {
      return res
        .status(404)
        .json({ message: "car with id <car id> is not found" });
    }
    next();
  } catch (error) {
    next(error);
  }
};

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  if (!req.body.vin) {
    res.status(400).json({ message: "vin is missing" });
  } else if (!req.body.make) {
    res.status(400).json({ message: "make missing" });
  } else if (!req.body.model) {
    res.status(400).json({ message: "model missing" });
  } else if (!req.body.mileage) {
    res.status(400).json({ message: "mileage missing" });
  } else if (!req.body.title) {
    res.status(400).json({ message: "title missing" });
  } else {
    req.body.name = req.body.name.trim();
    next();
  }
};

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const valid = vinValidator.validate(req.body.vin);
  if (!valid) {
    return res.status(400).json({ message: `${req.body.vin} is valid` });
  }
};

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
  if (req.body.vin) {
    res.status(400).json({ message: `VIN ${req.body.vin} already exists` });
  } else {
    next();
  }
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};
