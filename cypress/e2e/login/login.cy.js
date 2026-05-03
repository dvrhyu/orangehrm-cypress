describe('OrangeHRM Login Feature Automation', () => {

  const URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'

  beforeEach(() => {
    cy.visit(URL)
  })

  // =========================
  // TC_001 - LOGIN VALID
  // =========================
  it('TC_001 - Login dengan username dan password benar', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

    cy.url().should('include', 'dashboard')
    cy.contains('Dashboard').should('be.visible')
  })

  // =========================
  // TC_002 - USERNAME & PASSWORD SALAH
  // =========================
  it('TC_002 - Login dengan username dan password salah', () => {
    cy.get('input[name="username"]').type('Admim')
    cy.get('input[name="password"]').type('admin13')
    cy.get('button[type="submit"]').click()

    cy.contains('Invalid credentials').should('be.visible')
  })

  // =========================
  // TC_003 - PASSWORD SALAH
  // =========================
  it('TC_003 - Login dengan username benar password salah', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin13')
    cy.get('button[type="submit"]').click()

    cy.contains('Invalid credentials').should('be.visible')
  })

  // =========================
  // TC_004 - USERNAME SALAH
  // =========================
  it('TC_004 - Login dengan username salah password benar', () => {
    cy.get('input[name="username"]').type('Admi')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

    cy.contains('Invalid credentials').should('be.visible')
  })

  // =========================
  // TC_005 - USERNAME KOSONG
  // =========================
  it('TC_005 - Username kosong', () => {
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

    cy.contains('Required').should('be.visible')
  })

  // =========================
  // TC_006 - PASSWORD KOSONG
  // =========================
  it('TC_006 - Password kosong', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('button[type="submit"]').click()

    cy.contains('Required').should('be.visible')
  })

  // =========================
  // TC_007 - SEMUA KOSONG
  // =========================
  it('TC_007 - Username dan password kosong', () => {
    cy.get('button[type="submit"]').click()

    cy.contains('Required').should('be.visible')
  })

  // =========================
  // TC_008 - FORGOT PASSWORD
  // =========================
  it('TC_008 - Forgot Password Function', () => {
    cy.contains('Forgot your password?').click()

    cy.url().should('include', 'requestPasswordResetCode')
  })

})