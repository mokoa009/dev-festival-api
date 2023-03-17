const express = require('express');
const router = express.Router();
const jour_controller = require("../controllers/jour_controller")

router.get("/",jour_controller.selectZones)
router.get("/:id",jour_controller.selectZoneById)
router.delete("/delete",jour_controller.deleteZone)
router.post("/create",jour_controller.createZone)
router.put("/update",jour_controller.updateZoneById)

module.exports = router