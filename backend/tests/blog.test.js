const listHelper = require('../utils/list_helper')


describe('total likes', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })
})

describe('favorites', () => {
  test('favorite blog', () => {
    const blogs = [
      {
        title: 'First Blog',
        author: 'Author 1',
        url: 'None.com',
        likes: 5
      },
      {
        title: 'Second Blog',
        author: 'Author 2',
        url: 'None2.com',
        likes: 10
      },
      {
        title: 'Third Blog',
        author: 'Author 3',
        url: 'None3.com',
        likes: 12
      }
    ]

    const result = listHelper.favoriteBlog(blogs)
    expect(result).toEqual({
      title: 'Third Blog',
      author: 'Author 3',
      likes: 12
    })
  })
})

describe('most blogs', () => {
  test('author with most blogs is returned', () => {
    const blogs = [
      {
        title: 'First Blog',
        author: 'Author 1',
        likes: 5
      },
      {
        title: 'Second Blog',
        author: 'Author 2',
        likes: 10
      },
      {
        title: 'Third Blog',
        author: 'Author 3',
        likes: 12
      },
      {
        title: 'Fourth Blog',
        author: 'Author 1',
        likes: 8
      },
      {
        title: 'Fifth Blog',
        author: 'Author 2',
        likes: 15
      },
      {
        title: 'Sixth Blog',
        author: 'Author 3',
        likes: 20
      },
      {
        title: 'Seventh Blog',
        author: 'Author 1',
        likes: 20
      }
    ]

    const result = listHelper.mostBlogs(blogs)
    expect(result).toEqual({
      author: 'Author 1',
      blogs: 3
    })
  })
})

describe('most likes', () => {
  test('author with most likes is returned', () => {
    const blogs = [
      {
        title: 'First Blog',
        author: 'Author 1',
        likes: 5
      },
      {
        title: 'Second Blog',
        author: 'Author 2',
        likes: 10
      },
      {
        title: 'Third Blog',
        author: 'Author 3',
        likes: 12
      },
      {
        title: 'Fourth Blog',
        author: 'Author 1',
        likes: 8
      },
      {
        title: 'Fifth Blog',
        author: 'Author 2',
        likes: 15
      },
      {
        title: 'Sixth Blog',
        author: 'Author 3',
        likes: 20
      },
      {
        title: 'Seventh Blog',
        author: 'Author 1',
        likes: 20
      }
    ]

    const result = listHelper.mostLikes(blogs)
    expect(result).toEqual({
      author: 'Author 1',
      likes: 33
    })
  })
})
