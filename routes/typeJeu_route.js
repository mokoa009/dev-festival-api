const express = require('express');
const router = express.Router();
const typeJeu_controller = require("../controllers/typeJeu_controller")
const { verifAdmin } = require('../middleware/utilisateur');


router.get("/",typeJeu_controller.selectTypeJeux)
router.get("/:id",verifAdmin,typeJeu_controller.selectTypeJeuById)
router.delete("/delete",verifAdmin,typeJeu_controller.deleteTypeJeu)
router.post("/create",verifAdmin,typeJeu_controller.createTypeJeu)
router.put("/update",verifAdmin,typeJeu_controller.updateTypeJeuById)

module.exports = router