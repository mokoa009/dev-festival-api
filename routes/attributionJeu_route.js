const express = require('express');
const router = express.Router();
const attributionJeu_controller = require("../controllers/attributionJeu_controller")
const { verifConnecte } = require('../middleware/utilisateur');


router.get("/", attributionJeu_controller.selectAttributions)
router.get("/jeu/:id",attributionJeu_controller.selectZoneByJeu)
router.get("/zone/:id",attributionJeu_controller.selectJeuByZone)
router.get("/zone",attributionJeu_controller.selectAttributionByZoneJeu)
router.get("/jeu/zone/:id",attributionJeu_controller.selectJeuNonSelectByZone)
router.delete("/delete",verifConnecte,attributionJeu_controller.deleteAttribution)
router.post("/create",verifConnecte,attributionJeu_controller.createAttribution)
router.get("/info",attributionJeu_controller.selectAllInformations)


module.exports = router
