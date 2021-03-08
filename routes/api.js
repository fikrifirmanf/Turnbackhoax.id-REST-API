const express = require('express')
const scraperController = require('../controller/scraper')
const router = express.Router()

router.get('/', scraperController.newArtikels)

module.exports = router;