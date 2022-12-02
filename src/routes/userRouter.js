import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../db/models';

const router = express.Router();
// user/reg
router.post('/reg', async (req, res) => {
  const { name, email, pass } = req.body;
  const password = await bcrypt.hash(pass, 7);
  if (!name || !email || !password) return res.sendStatus(400);
  const [user, isCreated] = await User.findOrCreate({
    where: { email },
    defaults: { email, name, password },
  });

  if (!isCreated) return res.sendStatus(400);

  req.session.user = {
    id: user.id,
    name: user.name,
    email: user.email,
    // password: user.password,
  };
  res.sendStatus(200);
});
// user/avt
router.post('/avt', async (req, res) => {
  console.log(req.body, '====>');
  const { email, password } = req.body;
  const currUser = await User.findOne({ where: { email } });
  const compare = await bcrypt.compare(password, currUser.password);
  if (compare) {
    req.session.user = {
      id: currUser.id,
      name: currUser.name,
      email: currUser.email,
    };
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});

export default router;
