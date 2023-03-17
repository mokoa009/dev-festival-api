const express = require('express');
const router = express.Router();
const festival_controller = require("../controllers/festival_controller")

router.get("/",festival_controller.selectFestivals)
router.get("/:id",festival_controller.selectFestivalById)
router.delete("/delete",festival_controller.deleteFestival)
router.post("/create",festival_controller.createFestival)
router.put("/update",festival_controller.updateFestivalById)
router.put("/close",festival_controller.closeFestival)

module.exports = router