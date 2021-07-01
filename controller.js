const ordersRouter = require('express').Router();
const axios = require('axios')

ordersRouter.get('/rules.txt', async (req, res) => {
  try {
    const axiosRes = await axios.get('https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt');
    const text = axiosRes.data;
    return res.send(text);
  } catch (error) {
    return res.status(404).end();
  }
});

module.exports = ordersRouter;
