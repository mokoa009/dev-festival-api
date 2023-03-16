const express = require('express');
const router = express.Router();
const utilisateur_controller = require("../controllers/utilisateur_controller");
const { verifConnecte, verifMemeId,verifLogin } = require('../middleware/utilisateur');

router.get("/",utilisateur_controller.selectUtilisateurs)
router.get("/profil/:id",verifMemeId,utilisateur_controller.selectUtilisateurById)
router.delete("/delete",verifMemeId,utilisateur_controller.deleteUtilisateur)
router.post("/create",verifLogin,utilisateur_controller.createUtilisateur)
router.put("/update",verifMemeId,utilisateur_controller.updateUtilisateurById)
router.post("/connexion",utilisateur_controller.connexionUtilisateur)


module.exports = router