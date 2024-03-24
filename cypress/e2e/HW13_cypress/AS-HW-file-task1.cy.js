describe('QAUTO test case #1', () => { 
  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space', {
      failOnStatusCode: false,
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      }
    });
  });

  it ('Website Registration window overview', () => {  
    cy.get('.header_right > .btn').eq(0).click();
    cy.get('h4.modal-title').should('exist');
    cy.get('.modal-footer > .btn-link').first().click();
    cy.get('div.modal-body').should('be.visible');
    cy.get('input[id="signupName"]').clear().type('Anna');
    cy.get('input[id="signupName"]').should('have.value', 'Anna')
    cy.get('input[id="signupLastName"]').clear().type('Salt');
    cy.get('input[id="signupLastName"]').should('have.value','Salt');
    cy.get('.close > span').should('be.visible').click();
    cy.get('.modal-dialog').should('not.be.visible');
  });
});