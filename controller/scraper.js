const cheerio = require('cheerio')
const fetch = require('isomorphic-fetch')


module.exports = {
    newArtikels: async(req,res)=>{
        const resp = await fetch('https://turnbackhoax.id/')
        try {
            if(resp.status >= 400){
               return res.json({message:`Server Error ${resp.status}`})
            }else {
                const text = await resp.text()
        const $ = cheerio.load(text)
        var jsonData = []
       
            $('article').each(function(i,e){
                jsonData.push({})
                const $e = $(e)
                jsonData[i].img = $e.find('figure.mh-loop-thumb > a > img').attr('src')
                jsonData[i].title = $e.find('h3').text().trim()
                jsonData[i].link = $e.find('h3 > a').attr('href')
                jsonData[i].date = $e.find('div.mh-meta.mh-loop-meta > span.mh-meta-date.updated').text().trim()
                jsonData[i].author = $e.find('div.mh-meta.mh-loop-meta > span.mh-meta-author.author.vcard > a').text().trim()
            })
            
      
        
        res.json(jsonData)
        // console.log(jsonData)
            }
        } catch (error) {
            res.status(500).json({message: 'Internal Server Error'})
        }
       
        

    }
}