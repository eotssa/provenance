// controllers/news.js
const axios = require('axios')
const NewsArticle = require('../models/newsArticle')

const fetchAndStoreNews = async (source, query, apiKey) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?sources=${source}&q=${query}&apiKey=${apiKey}`
    )
    const articles = response.data.articles

    // Store each article in MongoDB
    articles.forEach(async (article) => {
      const newArticle = new NewsArticle({ ...article, source: source })
      await newArticle.save()
    })

    return articles.length // return the count of articles stored
  } catch (error) {
    console.error('Error fetching news:', error)
  }
}

module.exports = { fetchAndStoreNews }

//-----------------------------------------------
const express = require('express')
const router = express.Router()

router.get('/aggregate', async (req, res) => {
  const event = req.query.event // or use req.params
  // Define your news sources and API keys
  const sources = {
    source1: 'api-key-1',
    source2: 'api-key-2',
    // Add more sources as needed
  }

  let totalArticles = 0
  for (const [source, apiKey] of Object.entries(sources)) {
    const count = await fetchAndStoreNews(source, event, apiKey)
    totalArticles += count
  }

  res.json({ message: `Aggregated ${totalArticles} articles about ${event}.` })
})

module.exports = router
