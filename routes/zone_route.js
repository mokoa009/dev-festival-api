const express = require('express');
const router = express.Router();
const zone_controller = require("../controllers/zone_controller")

router.get("/",zone_controller.selectZones)
router.get("/:id",zone_controller.selectZoneById)
router.delete("/delete",zone_controller.deleteZone)
router.post("/create",zone_controller.createZone)
router.put("/update",zone_controller.updateZoneById)

module.exports = router