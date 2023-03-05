import express from 'express';
import { Score, Card, Theme } from '../db/models';

const router = express.Router();

router.get('/kab/:id', async (req, res) => {
  const cardId = req.params.id;
  const card = await Card.findByPk(cardId);
  const theme = card.themeId;
  console.log(theme);
  const [score, created] = await Score.findOrCreate({
    where: { userId: req.session.user.id, themeId: theme },
    defaults: {
      count: 1,
      themeId: theme,
    },
  });
  console.log(score, 'score');
  const initState = { score };
  if (!created) {
    score.count += 1;
  }
  score.save();
  res.sendStatus(200);
});

router.get('/kab/prog/:id', async (req, res) => {
  const userId = req.params.id;
  console.log(req.params);
  const progress = await Score.findAll({
    where: { userId },
    include: [{
      model: Theme,
      attributes: ['tittle'],
    }],
  });
  res.json(progress);
});

router.get('/user', async (req, res) => {
  res.json(req.session.user);
});

export default router;
