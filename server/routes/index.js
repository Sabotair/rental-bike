var express = require('express');
const { remove } = require('../models/BikeList');
var router = express.Router();
const BikeList = require('../models/BikeList');
const RentBike = require('../models/RentalBikeList');

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

router.delete('/bike/:id', async (req, res) => {
  const { id } = req.params
  try {
    const removed = await BikeList.findByIdAndDelete(id)
    if (!removed) throw new Error('Something went wrong deleting the BikeList')
    res.status(200).json(removed)

  } catch (error) {
    res.status(500).json({ message: error.message })
  }

})

router.get('/rental', async (req, res) => {
  try {
    let bikeList = await RentBike.find()
    if (!bikeList) {
      throw new Error('No bikeList')
    }
    res.status(200).json(bikeList)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.post('/rental', async (req, res) => {
  const newBikeListItem = new RentBike(req.body)
  try {
    const bucketListItem = await newBikeListItem.save()
    if (!bucketListItem) throw new Error('Something went wrong saving the bucketListItem')
    res.status(200).json(bucketListItem)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.delete('/rental/:id', async (req, res) => {
  const { id } = req.params
  try {
    const removed = await RentBike.findByIdAndDelete(id)
    if (!removed) throw new Error('Something went wrong deleting the BikeList')
    res.status(200).json(removed)

  } catch (error) {
    res.status(500).json({ message: error.message })
  }

})


router.post('/bike/rental/:id', async (req, res) => {
  const { id } = req.params
  const { name, types, cost } = req.body
  try {
    const removed = await BikeList.findByIdAndDelete(id)

    if (!removed) throw new Error('Something went wrong deleting the BikeList')
    const newBikeListItem = new RentBike({ _id: id, name, types, cost })
    const rentalListItem = await newBikeListItem.save()
    res.status(200).json(rentalListItem)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})


module.exports = router;
