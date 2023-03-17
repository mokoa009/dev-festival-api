const express = require('express');
const router = express.Router();
const jour_controller = require("../controllers/jour_controller")

router.get("/",jour_controller.selectJours)
router.get("/:id",jour_controller.selectJourById)
router.delete("/delete",jour_controller.deleteJour)
router.post("/create",jour_controller.createJour)
router.put("/update",jour_controller.updateJourById)


module.exports = router