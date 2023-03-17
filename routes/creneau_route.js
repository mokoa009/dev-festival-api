const express = require('express');
const router = express.Router();
const creneau_controller = require("../controllers/creneau_controller")

router.get("/",creneau_controller.selectCreneaux)
router.get("/:id",creneau_controller.selectCreneauById)
router.delete("/delete",creneau_controller.deleteCreneau)
router.post("/create",creneau_controller.createCreneau)
router.put("/update",creneau_controller.updateCreneauById)

module.exports = router