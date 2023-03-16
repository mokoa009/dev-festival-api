const express = require('express');
const router = express.Router();
const jeu_controller = require("../controllers/jeu_controller")
const { verifAdmin } = require('../middleware/utilisateur');


router.get("/", jeu_controller.selectJeux)
router.get("/:id",jeu_controller.selectJeuById)
router.delete("/delete",verifAdmin,jeu_controller.deleteJeu)
router.post("/create",verifAdmin,jeu_controller.createJeu)
router.put("/update",verifAdmin,jeu_controller.updateJeuById)

module.exports = router