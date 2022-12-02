import express from 'express';

const router = express.Router();
router.get('/', (req, res) => {
  const initState = { hello: 'world' };
  res.render('Layout', initState);
});

router.get('/myScore', (req, res) => {
  const { user } = req.session;
  const initState = { user };
  res.render('Layout', initState);
});

router.get('/newForm', (req, res) => {
  const initState = { };
  res.render('Layout', initState);
});

export default router;
