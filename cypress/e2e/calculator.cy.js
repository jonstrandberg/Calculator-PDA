describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should be able to do arithmetic and update display', () => {
    cy.get('#number4').click()
    cy.get('#operator_add').click()
    cy.get('#number1').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '5')
  })
  
  it('should allow multiple operations to be chained together', () => {
    cy.get('#number3').click()
    cy.get('#operator-multiply').click()
    cy.get('#number2').click()
    cy.get('#operator_add').click()
    cy.get('#number4').click()
    cy.get('#operator-subtract').click()
    cy.get('#number1').click()
    cy.get('#operator-divide').click()
    cy.get('#number3').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '3')
  })

  it('should be a positive number', () => {
    cy.get('#number3').click()
    cy.get('#operator-multiply').click()
    cy.get('#number2').click()
    cy.get('#operator_add').click()
    cy.get('#number4').click()
    cy.get('#operator-subtract').click()
    cy.get('#number1').click()
    cy.get('#operator-divide').click()
    cy.get('#number3').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '3')
  })
  
  it('should be a negative number', () => {
    cy.get('#number3').click()
    cy.get('#operator-subtract').click()
    cy.get('#number5').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '-2')
  })
  
  it('should be a decimal number', () => {
    cy.get('#number5').click()
    cy.get('#operator-divide').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '2.5')
  })

  it('should be a very large number', () => {
    cy.get('#number6').click()
    cy.get('#number4').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#operator-multiply').click()
    cy.get('#number5').click()
    cy.get('#number4').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '3456000000')
  })

  it('should not be able to divide by zero', () => {
    cy.get('#number5').click()
    cy.get('#operator-divide').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', 'error')
  })

})