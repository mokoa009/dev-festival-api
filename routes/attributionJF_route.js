const express = require('express');
const router = express.Router();
const attributionJF_controller = require("../controllers/attributionJF_controller.js")

router.get("/", attributionJF_controller.selectAttributionsJF)
router.get("/jour/:idJour",attributionJF_controller.selectAttributionsByJour)
router.get("/festival/:idFestival",attributionJF_controller.selectAttributionsByFestival)
router.get("/all",attributionJF_controller.selectAttributionsByAll)
router.delete("/delete",attributionJF_controller.deleteAttributionJF)
router.post("/create",attributionJF_controller.createAttributionJF)

module.exports = router