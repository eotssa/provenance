// models/newsArticle.js
const mongoose = require('mongoose')

const newsArticleSchema = new mongoose.Schema({
  title: String,
  description: String,
  source: String,
  publishedAt: Date,
  url: String,
  urlToImage: String,
})

const NewsArticle = mongoose.model('NewsArticle', newsArticleSchema)

module.exports = NewsArticle
