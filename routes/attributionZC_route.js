const express = require('express');
const router = express.Router();
const attributionZC_controller = require("../controllers/attributionZC_controller.js")

router.get("/zone/:idZone",attributionZC_controller.selectAttributionsByZone)
router.delete("/delete",attributionZC_controller.deleteAttributionZC)
router.post("/create",attributionZC_controller.createAttributionZC)
router.get("creneau/:idCreneau",attributionZC_controller.countBenevoles)

module.exports = router