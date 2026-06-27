const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/login', (req, res) => {
  passport.authenticate('google');
  res.status(200);
});

module.exports = router;
