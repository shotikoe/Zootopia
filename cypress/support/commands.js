Cypress.Commands.add('register', () => {
  cy.fixture('user').then((user) => {
    const random = Date.now()
    cy.visit('/')
    cy.contains('შესვლა').click({ force: true })
    cy.contains('გაიარეთ რეგისტრაცია').click()
    cy.get('[name="first_name"]').type(user.name)
    const emailParts = user.email.split('@')
    cy.get('[name="reg_email"]').type(emailParts[0] + random + '@' + emailParts[1])
    cy.get('[name="personal_id"]').type(user.personalId + random)
    cy.get('[name="phone"]').type(user.number + random)
    cy.get('[name="reg_password"]').type(user.password)
    cy.get('[name="reg_password_confirmation"]').type(user.password)
    cy.get('[data-name="Rectangle 517"]').first().click({ force: true })
    cy.get('button[type="submit"].regsub').click()
    cy.wait(2000)
    cy.url().then((url) => {
  if (url.includes('404')) {
    cy.contains('button', 'Go Home').click()
  } else {
    cy.visit('/')
  }
})
})
})
Cypress.Commands.add('login', () => {
  cy.fixture('user').then((user) => {
    cy.visit('/')
    cy.contains('შესვლა').click({ force: true })
    cy.get('[name="login_email"]').type(user.email)
    cy.get('[name="login_password"]').type(user.password)
    cy.contains('button', 'ავტორიზაცია').click()
    })
})
