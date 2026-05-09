class LoginPage {

  // ===== ACTION =====
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
      timeout: 120000
    })

    cy.get('input[name="username"]', { timeout: 15000 })
      .should('be.visible')
  }

  inputUsername(username) {
    cy.get('input[name="username"]', { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(username)
  }

  inputPassword(password) {
    cy.get('input[name="password"]', { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(password)
  }

  clickLogin() {
    cy.get('button[type="submit"]', { timeout: 10000 })
      .should('be.visible')
      .click()
  }

  clickForgotPassword() {
    cy.contains('Forgot your password?', { timeout: 10000 })
      .should('be.visible')
      .click()
  }

  // ===== ASSERTION =====
  assertionLogin() {
    cy.url({ timeout: 10000 })
      .should('include', '/dashboard')
  }

  assertionLoginFailed() {
    cy.url({ timeout: 10000 })
      .should('include', '/auth/login')
  }

  assertionErrorMessage() {
    cy.contains('Invalid credentials', { timeout: 10000 })
      .should('be.visible')
  }

  assertionRequiredField() {
    cy.contains('Required', { timeout: 10000 })
      .should('be.visible')
  }

  assertionForgotPage() {
    cy.url({ timeout: 10000 })
      .should('include', 'requestPasswordResetCode')
  }

}

export default LoginPage