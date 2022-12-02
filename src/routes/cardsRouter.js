import express from 'express';
import { Card } from '../db/models';

const router = express.Router();

router.get('/:id', async (req, res) => {
  const cards = await Card.findAll({ where: { themeId: req.params.id } });
  const initState = { cards };
  res.render('Layout', initState);
});

// router.get('/lk/kab/:id', async (req, res) => {
//   console.log('Я тут');
// });

export default router;
