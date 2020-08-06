describe('Portfolio interface', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  })
  
  it('Page should successfully render a navbar', () => {
    cy.get('.heading').should('contain', 'HOME');
    cy.get('.heading').should('contain', 'ABOUT');
    cy.get('.heading').should('contain', 'PROJECTS');
    cy.get('.heading').should('contain', 'RESUME');
    cy.get('.heading').should('contain', 'CONTACT'); 
  })

  it('Page should successfully render a header', () => {
    cy.get('h1').should('contain', "Hello, I'm Odeane Croney.")
    cy.get('#occu').should('contain', "I'm a Junior Full-Stack Web Developer based in Stockholm, Sweden.") 
  })
})