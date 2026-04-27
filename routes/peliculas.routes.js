const express = require('express');
const router = express.Router();

const service = require('../services/peliculas.service');

//Middlewares
const logger = require('../middlewares/logger');
const validarApiKey = require('../middlewares/apiKey');

router.use(logger);
router.use(validarApiKey);

//GET /peliculas
router.get('/', async (req, res) => {
  const data = await service.getAll();
  res.json(data);
});

//GET /peliculas/:id
router.get('/:id', async (req, res) => {
  const data = await service.getById(req.params.id);
  res.json(data);
});

//POST /peliculas
router.post('/', async (req, res) => {
  const data = await service.create(req.body);
  res.json(data);
});

//PUT /peliculas/:id
router.put('/:id', async (req, res) => {
  const data = await service.update(req.params.id, req.body);
  res.json(data);
});

//DELETE /peliculas/:id
router.delete('/:id', async (req, res) => {
  const data = await service.remove(req.params.id);
  res.json({ deleted: data });
});

module.exports = router;