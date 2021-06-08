// DO YOUR MAGIC
const router = require("express").Router();
const Cars = require("./cars-model.js");
const middleware = require("./cars-middleware");

router.get("/", async (req, res, next) => {
  const allCars = await Cars.getAll();
  res.json(allCars);
});

router.get("/:id", middleware.checkCarId, async (req, res, next) => {
  const car = await cars.getById(req.params.id);
  res.status(200).json(car);
});

router.post(
  "/",
  middleware.checkCarPayload,
  middleware.checkVinNumberValid,
  middleware.checkVinNumberUnique,
  async (req, res, next) => {
    const newCar = await cars.create(req.body);
    res.status(201).json(newCar);
  }
);

module.exports = router;
