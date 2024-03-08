const express = require('express');
const router = express.Router();
const { getItem, getItems, createItem, updateItem,  deleteItem, restoreItem } = require("../controllers/carrera.controllers.js");

router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);
router.put("/restore/:id", restoreItem);

module.exports = router;