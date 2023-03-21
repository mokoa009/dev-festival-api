const express = require('express');
const router = express.Router();
const attributionFZ_controller = require("../controllers/attributionFZ_controller.js")

router.get("/", attributionFZ_controller.selectAttributionsFZ)
router.get("/festival/:idFestival",attributionFZ_controller.selectAttributionsByFestival)
router.get("/zone/:idZone",attributionFZ_controller.selectAttributionsByZone)
router.get("/all",attributionFZ_controller.selectAttributionsByAll)
router.delete("/delete",attributionFZ_controller.deleteAttributionFZ)
router.post("/create",attributionFZ_controller.createAttributionFZ)

module.exports = router