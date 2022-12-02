import { Router } from 'express';
import bcrypt from 'bcrypt';
import { Card, Theme, User } from '../db/models';

const router = Router();

// router.route('/entries/:id')
//   .put(async (req, res) => {
//     console.log(req.body, req.params.id);
//     await Entry.update(req.body, { where: { id: req.params.id } });
//     res.sendStatus(200);
//   })
//   .delete(async (req, res) => {
//     await Entry.destroy({ where: { id: req.params.id } });
//     res.sendStatus(200);
//   });

router.post('/', async (req, res) => {
  const { ruName, enName, theme } = req.body;
  console.log(req.body);
  const [createTheme, created] = await Theme.findOrCreate({
    where: { tittle: theme },
  });
  await Card.create({
    themeId: createTheme.id, ruName, enName, userId: req.session.user.id,
  });
  res.sendStatus(200);
});

// router.post('/signin', async (req, res) => {
//   const { name, pass: password } = req.body;
//   const currUser = await User.findOne({ where: { name } });
//   const compare = await bcrypt.compare(password, currUser.pass);
//   if (compare) {
//     req.session.user = {
//       id: currUser.id,
//       name: currUser.name,
//     };
//     res.sendStatus(200);
//   } else {
//     res.sendStatus(401);
//   }
// });

export default router;
