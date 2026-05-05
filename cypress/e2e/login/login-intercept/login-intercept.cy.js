describe('OrangeHRM Login Real + Intercept', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
      timeout: 120000
    })
  })

  it('TC_001 - Login valid', () => {
    cy.intercept('POST', '**/auth/validate').as('loginValid')

    cy.get('input[name="username"]').should('be.visible').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

    cy.wait('@loginValid')
    cy.url().should('include', '/dashboard')
  })

  it('TC_002 - Username & password salah', () => {
    cy.intercept('POST', '**/auth/validate').as('loginInvalid')

    cy.get('input[name="username"]').type('salah')
    cy.get('input[name="password"]').type('salah')
    cy.get('button[type="submit"]').click()

    cy.wait('@loginInvalid')
    cy.contains('Invalid credentials').should('be.visible')
  })

 it('TC_003 - Username kosong', () => {
  cy.get('input[name="password"]').type('admin123')
  cy.get('button[type="submit"]').click()

  cy.contains('Required').should('be.visible')
})

  it('TC_004 - Password kosong', () => {
  cy.get('input[name="username"]').type('Admin')
  cy.get('button[type="submit"]').click()

  cy.contains('Required').should('be.visible')
})

  it('TC_005 - Forgot Password', () => {
    cy.intercept('GET', '**/auth/requestPasswordResetCode').as('forgotPassword')

    cy.contains('Forgot your password?').click()

    cy.wait('@forgotPassword')
    cy.url().should('include', 'requestPasswordResetCode')
  })

})