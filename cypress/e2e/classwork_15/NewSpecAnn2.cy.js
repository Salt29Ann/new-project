describe('template spec', () => { 
  // before (()
  // // login     //happens only once 
  // )

  beforeEach(() => {
    cy.visit('https://www.guru99.com'); 
  });
  it('open website', () => {  
    cy.get('h1.thick-heading').should('have.text', 'Tutorials Library') 
  })

  it('click Software testing link', () => {  
    // cy.visit('www.guru99.com');   
    cy.get(':nth-child(1) > .featured-box > :nth-child(2) > :nth-child(1) > a').should('be.visible').click();
    cy.get(':nth-child(11) > tbody > :nth-child(1) > .responsivetable > a > strong',
    {timeout: 3000})
    .should('be.visible').click();
    cy.get(':nth-child(11) > tbody > :nth-child(1) > .responsivetable > a > strong')
    .should('be.visible').click();
  });
})