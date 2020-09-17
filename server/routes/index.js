var express = require('express');
var router = express.Router();
const BikeList = require('../models/BikeList');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/bike', async (req, res) => {
  try {
    let bikeList = await BikeList.find()
    if (!bikeList) {
      throw new Error('No bikeList')
    }
    console.log(bikeList);
    res.status(200).json(bikeList)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }

})


router.post('/bike', async (req, res) => {
  const newBikeListItem = new BikeList(req.body)
  try {
    const bucketListItem = await newBikeListItem.save()
    if (!bucketListItem) throw new Error('Something went wrong saving the bucketListItem')
    res.status(200).json(bucketListItem)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})



module.exports = router;
