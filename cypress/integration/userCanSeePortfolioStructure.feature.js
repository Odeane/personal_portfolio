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

  it('Page should successfully render about section', () => {
    cy.get('#about-head').should('contain', 'About');
    cy.get('p').should('contain', 'Pellentesque in ipsum id orci porta dapibus.Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.');
    cy.get('img').should('be.visible')

  })
})