describe('Portfolio interface', () => {
  it('successfully renders', () => {
    cy.visit('http://localhost:3000');
    cy.get('.heading').should('contain', 'HOME');
    cy.get('.heading').should('contain', 'ABOUT'); 
    cy.get('.heading').should('contain', 'RESUME');
    cy.get('.heading').should('contain', 'CONTACT'); 
  })
})