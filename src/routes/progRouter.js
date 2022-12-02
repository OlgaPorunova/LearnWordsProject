import express from 'express';
import { Score, Card, Theme } from '../db/models';

const router = express.Router();

router.get('/kab/:id', async (req, res) => {
  const cardId = req.params.id;
  const card = await Card.findByPk(cardId);
  if (card === null) {
    console.log('Not found!');
  } else {
    console.log(card instanceof Card);
  }
  const theme = card.themeId;
  // найти карточку из БД по id find by pk
  // из найденной карточки взять themeId
  // добавить этот themeId в defaults
  const [score, created] = await Score.findOrCreate({
    where: { userId: req.session.user },
    // узнать,как называется user
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
  res.json(); // обсудить с Юлей какой ответ нужен
  // res.render('Layout', initState);
});

router.get('/kab/prog.id', async (req, res) => {
  const userId = req.params.id;
  const progress = await Score.findAll({
    where: { userId },
    include: [{
      model: Theme,
      as: 'themes',
      attributes: ['tittle'],
    }],
  });
  res.json(progress);
});

export default router;
