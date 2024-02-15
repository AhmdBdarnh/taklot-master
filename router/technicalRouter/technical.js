const express = require('express');
const router = express.Router();
const technicalController = require('../../controllers/technicalController/technicalcontroller');
//technical
router.get("/technical/:id", technicalController.getTechincalByID);
router.get("/technical", technicalController.getAllTechincal);
router.post("/technical", technicalController.techincal_post);
router.put("/technical/:id", technicalController.techincal_update);
router.delete("/technical/:id", technicalController.techincal_delete);

module.exports = router;
