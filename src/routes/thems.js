import express from 'express';
import { Theme } from '../db/models';

const router = express.Router();

router.get('/all', async (req, res) => {
  const dataFromDataBase = await Theme.findAll();
  res.json(dataFromDataBase);
});

router.get('/', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});
export default router;
