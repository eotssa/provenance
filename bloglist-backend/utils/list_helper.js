const lodash = require('lodash')

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
  const favorite = blogs.reduce((prev, curr) => {
    return (prev.likes > curr.likes) ? prev : curr
  })

  return {
    title: favorite.title,
    author: favorite.author,
    likes: favorite.likes
  }
}

const mostBlogs = (blogs) => {
  const authors = lodash.countBy(blogs, 'author') /* Creates object of k-v pairs based on # time iteratee returns */

  const highestBlog = lodash.reduce(authors, (result, value, key) => {         /* `value` and `key` are referring to the current object iterated on */
    return (value > result.blogs) ? { author: key, blogs: value } : result
  }, { author: '', blogs: 0 })

  return highestBlog
}

const mostLikes = (blogs) => {
  // Step 1: Aggregate total likes for each author
  /* groupBy groups authors by their blog posts
   * {
   * 'Alice': [{ title: 'Blog 1', author: 'Alice', likes: 5 }, { title: 'Blog 3', author: 'Alice', likes: 7 }],
   * 'Bob': [{ title: 'Blog 2', author: 'Bob', likes: 12 }, { title: 'Blog 4', author: 'Bob', likes: 3 }],
   * 'Charlie': [{ title: 'Blog 5', author: 'Charlie', likes: 15 }]
     }
   */

  /* mapValues (1st parameter -- keeps the same key, 2nd parameter -- value depends on function) */
  const totalLikesByAuthor = lodash.mapValues(lodash.groupBy(blogs, 'author'), (authorBlogs) => {
    return lodash.sumBy(authorBlogs, 'likes')
  })

  // Step 2: Find the author with the most likes
  const authorWithMostLikes = lodash.maxBy(Object.keys(totalLikesByAuthor), (author) => {
    return totalLikesByAuthor[author]
  })

  return {
    author: authorWithMostLikes,
    likes: totalLikesByAuthor[authorWithMostLikes]
  }
}


module.exports = { totalLikes, favoriteBlog, mostBlogs, mostLikes }

