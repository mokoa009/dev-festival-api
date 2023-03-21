const express = require('express');
const router = express.Router();
const attributionCJ_controller = require("../controllers/attributionCJ_controller.js")

router.get("/", attributionCJ_controller.selectAttributionsCJ)
router.get("/jour/:idJour",attributionCJ_controller.selectAttributionsByJour)
router.get("/creneau/:idCreneau",attributionCJ_controller.selectAttributionsByCreneau)
router.get("/all",attributionCJ_controller.selectAttributionsByAll)
router.delete("/delete",attributionCJ_controller.deleteAttributionCJ)
router.post("/create",attributionCJ_controller.createAttributionCJ)

module.exports = router