import LoginPage from '../../../pages/LoginPage'


// TEST LOGIN MENGGUNAKAN POM

describe('OrangeHRM Login with POM + assertionLogin()', () => {

  const login = new LoginPage()

  beforeEach(() => {
    login.visit()
  })


  it('TC_001 - Login valid', () => {
    login.inputUsername('Admin')
    login.inputPassword('admin123')
    login.clickLogin()

    login.assertionLogin()
  })


  it('TC_002 - Login invalid', () => {
    login.inputUsername('salah')
    login.inputPassword('salah')
    login.clickLogin()

    login.assertionErrorMessage()
    login.assertionLoginFailed()
  })


  it('TC_003 - Password salah', () => {
    login.inputUsername('Admin')
    login.inputPassword('admin13')
    login.clickLogin()

    login.assertionErrorMessage()
    login.assertionLoginFailed()
  })


  it('TC_004 - Username salah', () => {
    login.inputUsername('Admi')
    login.inputPassword('admin123')
    login.clickLogin()

    login.assertionErrorMessage()
    login.assertionLoginFailed()
  })


  it('TC_005 - Username kosong', () => {
    login.inputPassword('admin123')
    login.clickLogin()

    login.assertionRequiredField()
    login.assertionLoginFailed()
  })


  it('TC_006 - Password kosong', () => {
    login.inputUsername('Admin')
    login.clickLogin()

    login.assertionRequiredField()
    login.assertionLoginFailed()
  })


  it('TC_007 - Semua field kosong', () => {
    login.clickLogin()

    login.assertionRequiredField()
    login.assertionLoginFailed()
  })

 
  it('TC_008 - Forgot Password', () => {
    login.clickForgotPassword()

    login.assertionForgotPage()
  })

})