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
    cy.get('p').should('contain', 'I am an ambitious software developer filled with excitement, dedication and passion for the craft. I am open-minded and eager to learn new things. I am a great team player with the ability to also work independently. I am seeking the opportunity to work in an enthusing, diverse and challenging work environment.');
    cy.get('#avatar').should('be.visible')
    cy.get('.softIcons').within(() => {
      cy.get('.skillFont').should('contain', 'Programming')
      cy.get('.skillFont').should('contain', 'Agile software development')
      cy.get('.skillFont').should('contain', 'Test driven development')
      cy.get('.skillFont').should('contain', 'Version control')
    })
  })

  it('Social links should be available', () => {
    cy.get('a').children('i:first').should('exist')
  })

  it('Page should sucessfuly render projects section', () => {
    cy.get('.project__heading').should('contain', 'Projects')
    cy.get('.project').should('contain', 'Bidspace')
    cy.get('.project').should('contain', 'Rock Paper Scissors')
    cy.get('.project').should('contain', 'News on Rails')
  });

  it('Page should sucessfuly render resume section', () => {
    cy.get('.resume__heading').should('contain', 'Resume')
  });

})

