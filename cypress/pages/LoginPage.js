class LoginPage {

  // ===== ACTION =====
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
      timeout: 120000
    })
  }

  inputUsername(username) {
    cy.get('input[name="username"]').should('be.visible').clear().type(username)
  }

  inputPassword(password) {
    cy.get('input[name="password"]').clear().type(password)
  }

  clickLogin() {
    cy.get('button[type="submit"]').click()
  }

  clickForgotPassword() {
    cy.contains('Forgot your password?').click()
  }

  // ===== ASSERTION =====
  assertionLogin() {
    cy.url().should('include', '/dashboard')
  }

  assertionLoginFailed() {
    cy.url().should('include', '/auth/login')
  }

  assertionErrorMessage() {
    cy.contains('Invalid credentials').should('be.visible')
  }

  assertionRequiredField() {
    cy.contains('Required').should('be.visible')
  }

  assertionForgotPage() {
    cy.url().should('include', 'requestPasswordResetCode')
  }

}

export default LoginPage