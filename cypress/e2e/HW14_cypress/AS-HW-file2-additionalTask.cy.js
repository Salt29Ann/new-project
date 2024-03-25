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

        const uuid = require('uuid')
        const userEmail = 'userAcc' + uuid.v4() + '@test.com'
        const validPassword = 'Qwerty091' 

      cy.get('input[id="signupName"]').clear().type('UserName');
      cy.get('input[id="signupName"]').should('have.value', 'UserName')
      cy.get('input[id="signupLastName"]').clear().type('UserLastName');
      cy.get('input[id="signupLastName"]').should('have.value','UserLastName');
      cy.get('input[id="signupEmail"]').clear().type(userEmail);
      cy.get('input[id="signupEmail"]').should('have.value', userEmail);
      cy.get('input[id="signupPassword"]').clear().type(validPassword);
      cy.get('input[id="signupPassword"]').should('have.value', validPassword);
      cy.get('input[id="signupRepeatPassword"]').clear().type(validPassword);
      cy.get('input[id="signupRepeatPassword"]').should('have.value', validPassword);
      cy.get('button[class="btn btn-primary"]').should('be.visible')
      .filter(':contains("Register")').first().click();
      cy.wait(3000)
      cy.url().should('include', '/panel/garage')
    });
});