// Main Controller File
const { Router } = require('express');
const { zodiacs } = require('../../data/zodiacs.js');

module.exports = Router()
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const matchingZodiac = zodiacs.find((zodiac) => zodiac.id === id);
    res.json(matchingZodiac);
  })

  .get('/', (req, res) => {
    const zodiacNameId = zodiacs.map(({ id, name }) => ({ id, name }));
    res.json(zodiacNameId);
  });
