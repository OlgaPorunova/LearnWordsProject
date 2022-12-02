import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const initState = { path: req.originalUrl };
  res.render('Layout', initState);
});

router.get('/reg', (req, res) => {
  const initState = { path: req.originalUrl };
  res.render('Layout', initState);
});
router.get('/avt', (req, res) => {
  const initState = { path: req.originalUrl };
  res.render('Layout', initState);
});

export default router;
