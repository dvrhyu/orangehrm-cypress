class DashboardPage {

  clickDirectoryMenu() {
    cy.contains('Directory').click()
  }

  assertionDirectoryPage() {
    cy.url().should('include', '/directory')
  }

  inputEmployeeName(employeeName) {
    cy.get('input[placeholder="Type for hints..."]').type(employeeName)
  }

  clickSearchButton() {
    cy.contains('Search').click()
  }

  assertionEmployeeResult() {
    cy.get('.oxd-grid-item').should('exist')
  }

}

export default DashboardPage