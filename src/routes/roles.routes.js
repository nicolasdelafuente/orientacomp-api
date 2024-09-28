const express = require('express');
const router = express.Router();
const {
  getRoles,
  getAllRoles,
  getRolById,
  createRol,
  updateRol,
  deleteRol,
} = require('../controllers/rol.controller');

router.get('/', getRoles);
router.get('/getall', getAllRoles);
router.get('/:id', getRolById);
router.post('/', createRol);
router.patch('/:id', updateRol);
router.delete('/:id', deleteRol);

module.exports = router;
