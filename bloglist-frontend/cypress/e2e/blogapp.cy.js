describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', `${Cypress.env('BACKEND')}/testing/reset`)
    cy.request('POST', `${Cypress.env('BACKEND')}/users`, {
      name: 'Wilson',
      username: 'admin',
      password: 'admin'
    })
    cy.request('POST', `${Cypress.env('BACKEND')}/users`, {
      name: 'Arto Hellas',
      username: 'hellas',
      password: 'secret'
    })
    cy.visit('')
  })

  it('Login form is shown', function() {
    cy.contains('log in to application')
  })

  describe('Login',function() {
    it('succeeds with correct credentials', function() {
      cy.get('#username').type('admin')
      cy.get('#password').type('admin')
      cy.get('#login-button').click()

      cy.contains('welcome')
    })

    it('fails with wrong credentials', function() {
      cy.get('#username').type('admin')
      cy.get('#password').type('wrong')
      cy.get('#login-button').click()

      cy.contains('wrong username or password')
    })
  })

  describe('When logged in', function() {
    beforeEach(function() {
      cy.login({ username: 'admin', password: 'admin' })
    })

    it('A blog can be created', function() {
      cy.contains('new note').click()
      cy.get('#title').type('The Agile Way')
      cy.get('#author').type('Emma Johnson')
      cy.get('#url').type('https://agileway.com/articles/agile-principles/')
      cy.contains('create').click()

      cy.contains('The Agile Way')
      cy.contains('Emma Johnson')
    })
  })

  describe('When a blog has been created', function() {
    beforeEach(function() {
      cy.login({ username: 'admin', password: 'admin' })
      cy.createBlog({
        title: 'You’re NOT gonna need it!',
        author: 'Ron Jeffries',
        url: 'https://ronjeffries.com/xprog/articles/practices/pracnotneed//'
      })
    })

    it('it can be liked', function() {
      cy.contains('show').click()
      cy.contains('like').click()

      cy.contains('likes 1')
    })

    it('the creator can delete it', function() {
      cy.contains('show').click()
      cy.contains('delete').click()

      cy.contains('removed')
      cy.get('html').should('not.contain', 'You’re NOT gonna need it!')
    })

    it('a non creator can not delete a blog', function() {
      cy.contains('logout').click()
      cy.login({ username: 'hellas', password: 'secret' })
      cy.contains('show').click()
      cy.contains('delete').should('not.exist')
    })
  })

  describe('When there exists several blogs', function() {
    const blogs = [
      { title: 'Tech Innovations', author: 'Mike Ross', url: 'example.com' },
      { title: 'Healthcare and Tech', author: 'Sarah Lin', url: 'example.com' },
      { title: 'AI in Modern World', author: 'Alan Turing', url: 'example.com' },
    ]

    beforeEach(function() {
      cy.login({ username: 'admin', password: 'admin' })
      cy.createBlog(blogs[0])
      cy.createBlog(blogs[1])
      cy.createBlog(blogs[2])
    })

    it('those are ordered by the likes', function() {
      cy.contains(blogs[0].title).contains('show').click()
      cy.contains(blogs[0].title).contains('like').as('like0')
      cy.contains(blogs[1].title).contains('show').click()
      cy.contains(blogs[1].title).contains('like').as('like1')
      cy.contains(blogs[2].title).contains('show').click()
      cy.contains(blogs[2].title).contains('like').as('like2')

      // should() is used to prevent issues where rapid clicking may lead to unregistered clicks
      cy.get('@like2').click()
      cy.contains(blogs[2].title).contains('likes 1').should('be.visible')
      cy.get('@like2').click()
      cy.contains(blogs[2].title).contains('likes 2').should('be.visible')
      cy.get('@like2').click()
      cy.contains(blogs[2].title).contains('likes 3').should('be.visible')

      cy.get('@like1').click()
      cy.contains(blogs[1].title).contains('likes 1').should('be.visible')
      cy.get('@like1').click()
      cy.contains(blogs[1].title).contains('likes 2').should('be.visible')

      cy.get('@like0').click()
      cy.contains(blogs[0].title).contains('likes 1').should('be.visible')

      cy.get('.blog').eq(0).should('contain', blogs[2].title)
      cy.get('.blog').eq(1).should('contain', blogs[1].title)
      cy.get('.blog').eq(2).should('contain', blogs[0].title)
    })

  })
})