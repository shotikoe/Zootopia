describe('Zootopia Tests', () => {
  let userEmail
  let userPassword
  before(() => {
    cy.fixture('user').then((user) => {
      userEmail = user.email
      userPassword = user.password
    })
  })
  // TC-01
  it('registration with valid values', () => {
    cy.register()
    cy.contains('პროფილი').should('exist')
    cy.contains('კალათა').should('exist')
  })
  // TC-09
  it('login with valid data', () => {
    cy.visit('/')
    cy.contains('შესვლა').click({ force: true })
    cy.get('[name="login_email"]').type(userEmail)
    cy.get('[name="login_password"]').type(userPassword)
    cy.contains('button', 'ავტორიზაცია').click()
    cy.contains('პროფილი').should('be.visible')
    cy.url().should('include', '/ka')
  })
})
  // TC-11
  it('login with wrong data', () => {
    cy.visit('/')
    cy.contains('შესვლა').click({force:true})
    cy.get('[name="login_email"]').type('papapa@mail.ru')
    cy.get('[name="login_password"]').type('papapa123')
    cy.contains('button', 'ავტორიზაცია').click()
    cy.get('.alert-text').should('contain', 'არასწორი ელ.ფოსტა ან პაროლი')
})
  // TC-15
  it('add product to cart', () => {
    cy.visit('/')
    cy.get('[data-id="2448"]').click()
    cy.contains('დამატებულია').should('exist')
  })
   // TC-16
  it('Increase product quantity in cart', () => {
    cy.visit('/')
    cy.get('[data-id="2448"]').click()
    cy.contains('დამატებულია').should('exist')
    cy.get('a[href*="/cart"]').first().click({ force: true })
    cy.get('[class="plus change-qty-by-one"]').click()
    cy.get('input[type="text"][readonly]').should('have.value', '2')
  })