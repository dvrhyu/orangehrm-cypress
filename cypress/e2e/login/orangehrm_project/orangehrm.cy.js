import LoginPage from '../../../pages/LoginPage'
import DashboardPage from '../../../pages/DashboardPage'
import ForgotPasswordPage from '../../../pages/ForgotPasswordPage'

describe('OrangeHRM Final Project', () => {

  const login = new LoginPage()
  const dashboard = new DashboardPage()
  const forgot = new ForgotPasswordPage()

  beforeEach(() => {
    login.visit()
  })

  // TEST LOGIN

  it('User berhasil login', () => {

    cy.intercept('GET', '**/dashboard/**').as('dashboardPage')

    login.inputUsername('Admin')
    login.inputPassword('admin123')
    login.clickLogin()

    cy.wait('@dashboardPage')

    login.assertionLogin()
  })

  it('User tidak berhasil login', () => {

    cy.intercept('POST', '**/auth/validate').as('loginFailed')

    login.inputUsername('salah')
    login.inputPassword('salah')
    login.clickLogin()

    cy.wait('@loginFailed')

    login.assertionLoginFailed()
  })

  it('Username kosong', () => {

    login.inputPassword('admin123')
    login.clickLogin()

    login.assertionRequiredField()
  })

  it('Password kosong', () => {

    login.inputUsername('Admin')
    login.clickLogin()

    login.assertionRequiredField()
  })

  it('Password salah username kosong', () => {

  login.inputPassword('salah123')
  login.clickLogin()

  login.assertionRequiredField()

})

// TEST FORGOT PASSWORD

it('Forgot password', () => {

  forgot.clickForgotPassword()

  forgot.inputUsername('Admin')

  forgot.clickResetButton()

  forgot.assertionResetBerhasil()

})

  it('forgot password page', () => {

  forgot.clickForgotPassword()

  cy.url().should('include', 'requestPasswordResetCode')

})

//TEST DIRECTORY MENU

  it('Open directory menu', () => {

    login.inputUsername('Admin')
    login.inputPassword('admin123')
    login.clickLogin()

    dashboard.clickDirectoryMenu()

    dashboard.assertionDirectoryPage()
  })

  it('Search employee directory', () => {

    login.inputUsername('Admin')
    login.inputPassword('admin123')
    login.clickLogin()

    dashboard.clickDirectoryMenu()

    cy.intercept('GET', '**/directory/**').as('directorySearch')

    dashboard.inputEmployeeName('Linda')
    dashboard.clickSearchButton()

    cy.wait('@directorySearch')

    dashboard.assertionEmployeeResult()
  })

})