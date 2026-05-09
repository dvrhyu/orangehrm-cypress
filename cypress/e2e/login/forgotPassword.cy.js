// cypress/e2e/forgotPassword.cy.js

import LoginPage from '../pages/LoginPage'
import ForgotPasswordPage from '../pages/ForgotPasswordPage'

const loginPage = new LoginPage()
const forgotPasswordPage = new ForgotPasswordPage()

describe('Forgot Password Feature', () => {

  beforeEach(() => {
    loginPage.visit()
  })

  it('Reset Password berhasil', () => {

    forgotPasswordPage.clickForgotPassword()

    forgotPasswordPage.inputUsername('Admin')

    forgotPasswordPage.clickResetButton()

    forgotPasswordPage.assertionResetBerhasil()

  })

})