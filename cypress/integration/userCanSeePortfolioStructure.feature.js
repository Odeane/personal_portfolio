describe('Portfolio interface', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  })
  
  it('Page should successfully render a navbar', () => {
    cy.get('.menu').should('contain', 'HOME');
    cy.get('.menu').should('contain', 'ABOUT');
    cy.get('.menu').should('contain', 'PROJECTS');
    cy.get('.menu').should('contain', 'RESUME');
    cy.get('.menu').should('contain', 'CONTACT'); 
  })

  it('Page should successfully render a header', () => {
    cy.get('h1').should('contain', "Hi, I'm Odeane Croney.")
    cy.get('#occu').should('contain', "I'm a Full-Stack Web Developer based in Stockholm, Sweden.") 
  })

  it('Page should successfully render about section', () => {
    cy.get('#about-head').should('contain', 'About');
    cy.get('p').should('contain', 'Pellentesque in ipsum id orci porta dapibus.Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.');
    // cy.get('img').should('be.visible')
  })

  it('Social links should be available', () => {
    cy.get('a').children('i:first').should('exist')
  })

  it('Page should sucessfuly render projects section', () => {
    cy.get('.project__heading').should('contain', 'Projects')
    cy.get('.project').should('contain', 'Bidspace')
    
    

  });
})

