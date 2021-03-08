const express = require('express')
const scraperController = require('../controller/scraper')
const router = express.Router()

router.get('/', (req,res)=>{
res.send('<h3>Selamat datang di turnbackhoax.id API</h3>')
})
router.get('/all', scraperController.newArtikels)
router.get('/search', scraperController.searchArtikels)

module.exports = router;