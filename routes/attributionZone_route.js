const express = require('express');
const router = express.Router();
const attributionZone_controller = require("../controllers/attributionZone_controller")

router.get("/", attributionZone_controller.selectAttributionsZone)
router.get("/:id",attributionZone_controller.selectAttributionZoneById)
router.get("/zone/:idZone",attributionZone_controller.selectAttributionsByZone)
router.get("/creneau/:idCreneau",attributionZone_controller.selectAttributionsByCreneau)
router.get("/zone/:idZone/creneau/:idCreneau/jour/:idJour",attributionZone_controller.selectAttributionsByZoneAndCreneau)
router.get("/benevole/:idUtilisateur",attributionZone_controller.selectAttributionsByBenevole)
router.get("/all",attributionZone_controller.selectAttributionsByAll)
router.get("/zone-benevole/:idZone/:idBene",attributionZone_controller.selectCreneauNonSelectByZoneAndBenevole)
router.get("/zone-creneau/:idZone/:idCreneau/:idJour",attributionZone_controller.selectBenevoleNonSelectByZoneAndCreneau)
router.get("benevoles_creneau_aff/:idCreneau",attributionZone_controller.countBenevolesAff)
router.delete("/delete",attributionZone_controller.deleteAttributionZone)
router.delete("/creneau/delete",attributionZone_controller.deleteAttributionZoneFromCreneau)
router.post("/create",attributionZone_controller.createAttributionZone)

module.exports = router