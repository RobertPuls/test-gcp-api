var express = require('express');
var router = express.Router();
const wordBank = require("../test-data/_index");

getWordArray = (word) => {
  return wordBank[word[0].toLowerCase()];
}

// Remember to test numbers
router.get('/:keyword/:count', (req, res) => {
  const count = parseInt(req.params.count);
  const keyword = req.params.keyword;
  const wordArray = getWordArray(keyword);

  let matchingWords = wordArray.filter((word) => {
    return word.toLowerCase().includes(keyword.toLowerCase());
  }).slice(0, count);

  res.json({matchingWords});
});

module.exports = router;
