class ForgotPasswordPage {

  clickForgotPassword() {
    cy.contains('Forgot your password?', { timeout: 10000 })
      .should('be.visible')
      .click()
  }

  inputUsername(username) {
    cy.get('input[class="oxd-input oxd-input--active"]', { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(username)
  }

  clickResetButton() {
    cy.contains('Reset Password', { timeout: 10000 })
      .should('be.visible')
      .click()
  }

  assertionResetBerhasil() {
  cy.url({ timeout: 10000 })
    .should('include', 'requestPasswordResetCode')
}

}

export default ForgotPasswordPage