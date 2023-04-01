const express = require('express');
const router = express.Router();
const attributionJZ_controller = require("../controllers/attributionJZ_controller.js")

router.get("/", attributionJZ_controller.selectAttributionsJZ)
router.get("/jour/:idJour",attributionJZ_controller.selectAttributionsByJour)
router.get("/zone/:idZone",attributionJZ_controller.selectAttributionsByZone)
router.delete("/delete",attributionJZ_controller.deleteAttributionJZ)
router.post("/create",attributionJZ_controller.createAttributionJZ)

module.exports = router