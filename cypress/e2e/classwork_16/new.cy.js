// реалізація коду: перевірка присутності модальноо вікна на веб сторінці, прийняття умов 
describe('template spec', () => {
before(() => {
    cy.visit('https://www.guru99.com/');
    cy.get('body').then(($body) => {
      if ($body.find('#sp_message_iframe_1091096').isVisible()) {
        cy.get('button[aria-label="Accept"]').click();
      } else {
        console.log('Modal is not visible');
      }
    });
  });
 
//   before(() => {
//     cy.visit('https://www.guru99.com/');
//     cy.get('a[data-lasso-id="147432"]').click();
 
//     cy.get('#sp_message_iframe_1091096')
//       .eq(0)
//       .should('be.visible')
//       .then(($iframe) => {
//         const $body = $iframe.contents().find('body');
//         cy.wrap($body).find('button[aria-label="Accept"]').click();
//       });
//   });
//   beforeEach(() => {
//     cy.visit('https://www.guru99.com');
//   });
//   it('open website', () => {
//     cy.get('.thick-heading').should('have.text', 'Tutorials Library');
//   });
 
//   it('click the software testing link', () => {
//     // cy.visit('www.guru99.com');
//     cy.get(':nth-child(1) > .featured-box > :nth-child(2) > :nth-child(1) > a')
//       .should('be.visible')
//       .click();
//     cy.get(
//       ':nth-child(11) > tbody > :nth-child(1) > .responsivetable > a > strong',
//       { timeout: 3000 },
//     ).should('be.visible');
//     cy.get(
//       ':nth-child(11) > tbody > :nth-child(1) > .responsivetable > a > strong',
//     ).click();
//   });
});