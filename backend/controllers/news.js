const NewsAPI = require('newsapi')
const newsapi = new NewsAPI('your-api-key-here')
const NewsArticle = require('../models/newsArticle')

const fetchAndStoreNews = async (query) => {
  try {
    const response = await newsapi.v2.everything({
      q: query,
      language: 'en',
      sortBy: 'relevancy',
    })

    const articles = response.articles

    // Store each article in MongoDB
    articles.forEach(async (article) => {
      const newArticle = new NewsArticle({
        ...article,
        source: article.source.name,
      })
      await newArticle.save()
    })

    return articles.length // return the count of articles stored
  } catch (error) {
    console.error('Error fetching news:', error)
  }
}

//-----------------------------------------------
const express = require('express')
const router = express.Router()

router.get('/aggregate', async (req, res) => {
  const query = req.query.q // get the query parameter from the request
  const count = await fetchAndStoreNews(query)

  res.json({ message: `Aggregated ${count} articles about ${query}.` })
})

module.exports = router
