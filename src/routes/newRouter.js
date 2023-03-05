import { Router } from 'express';
import { Card, Theme } from '../db/models';

const router = Router();

router.post('/', async (req, res) => {
  const {
    ruName, enName, theme, link,
  } = req.body;
  console.log(req.body);
  const [createTheme, created] = await Theme.findOrCreate({
    where: { tittle: theme },
  });
  await Card.create({
    themeId: createTheme.id, ruName, enName, userId: req.session.user.id, link,
  });
  res.sendStatus(200);
});

export default router;
