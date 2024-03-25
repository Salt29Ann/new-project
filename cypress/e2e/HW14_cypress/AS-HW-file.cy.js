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
  
    it ('User Registration when correct data is provided', () => {  
      cy.get('.header_right > .btn').eq(0).click();
      cy.get('h4.modal-title').should('exist');
      cy.get('.modal-footer > .btn-link').first().click();
      cy.get('div.modal-body').should('be.visible');

      cy.get('input[id="signupName"]').should('be.visible')
      .clear().type('Anna');
      cy.get('input[id="signupName"]').should('have.value', 'Anna')
      cy.get('input[id="signupLastName"]').should('be.visible')
      .clear().type('Saltykova');
      cy.get('input[id="signupLastName"]').should('have.value','Saltykova');
      cy.get('input[id="signupEmail"]').should('be.visible')
      .clear().type('galambosbernadett9@gmail.com');
      cy.get('input[id="signupEmail"]').should('have.value','galambosbernadett9@gmail.com');
      cy.get('input[id="signupPassword"]').should('be.visible')
      .clear().type('Anna25Anna');
      cy.get('input[id="signupPassword"]').should('have.value', 'Anna25Anna');
      cy.get('input[id="signupRepeatPassword"]').should('be.visible')
      .clear().type('Anna25Anna');
      cy.get('input[id="signupRepeatPassword"]').should('have.value', 'Anna25Anna');
      cy.get('button[class="btn btn-primary"]').should('be.visible')
      .filter(':contains("Register")').first().click();
      cy.wait(3000)
      cy.url().should('include', '/panel/garage')
    });
  });