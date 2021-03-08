const cheerio = require('cheerio')
const fetch = require('isomorphic-fetch')


module.exports = {
    newArtikels: async (req, res) => {
        const page = req.query.page;
        const url = `https://turnbackhoax.id/page/${page == null ? 1:page}/`;
        const resp = await fetch(url)
        try {
            if (resp.status >= 400) {
                return res.json({
                    message: `Server Error ${resp.status}`
                })
            } else {
                const text = await resp.text()
                const $ = cheerio.load(text)
                var jsonData = []

                $('article').each(function (i, e) {
                    jsonData.push({})
                    const $e = $(e)
                    jsonData[i].img = $e.find('figure.mh-loop-thumb > a > img').attr('src')
                    jsonData[i].title = $e.find('h3').text().trim()
                    jsonData[i].link = $e.find('h3 > a').attr('href')
                    jsonData[i].date = $e.find('div.mh-meta.mh-loop-meta > span.mh-meta-date.updated').text().trim()
                    jsonData[i].author = $e.find('div.mh-meta.mh-loop-meta > span.mh-meta-author.author.vcard > a').text().trim()
                })
                const currentPage = $('#main-content > div > nav > div > span.page-numbers.current').text()
                const nextPage = $('#main-content > div > nav > div > a:nth-child(2)').text()

                const totalPage = $('#main-content > div > nav > div > a:nth-child(4)').text()

                res.json({
                    'status': resp.status,
                    'currentPage': currentPage,
                    'nextPage': nextPage,
                    'totalPage': totalPage,
                    'data': jsonData
                })
                // console.log(jsonData)
            }
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error'
            })
        }


    },
    searchArtikels: async (req, res) => {
        const page = req.query.page;
        const query = req.query.q
        const url = `https://turnbackhoax.id/page/${page == null ? 1:page}/?s=${query == null ? '':query}`
        const resp = await fetch(url)
        console.log(url)
        try {
            if (resp.status >= 400) {
                return res.json({
                    message: `Server Error ${resp.status}`
                })
            } else {
                const text = await resp.text()
                const $ = cheerio.load(text)
                var jsonData = []

                $('article').each(function (i, e) {
                    jsonData.push({})
                    const $e = $(e)
                    jsonData[i].img = $e.find('figure.mh-loop-thumb > a > img').attr('src')
                    jsonData[i].title = $e.find('h3').text().trim()
                    jsonData[i].link = $e.find('h3 > a').attr('href')
                    jsonData[i].date = $e.find('div.mh-meta.mh-loop-meta > span.mh-meta-date.updated').text().trim()
                    jsonData[i].author = $e.find('div.mh-meta.mh-loop-meta > span.mh-meta-author.author.vcard > a').text().trim()
                })
                const currentPage = $('#main-content > div > nav > div > span.page-numbers.current').text()
                const nextPage = $('#main-content > div > nav > div > a:nth-child(2)').text()

                const totalPage = $('#main-content > div > nav > div > a:nth-child(4)').text()

                res.json({
                    'status': resp.status,
                    'currentPage': currentPage,
                    'nextPage': nextPage,
                    'totalPage': totalPage,
                    'data': jsonData
                })
                // console.log(jsonData)
            }
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error'
            })
        }


    }
}