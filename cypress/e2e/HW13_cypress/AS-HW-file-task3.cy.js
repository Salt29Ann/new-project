describe('QAUTO test case #3', () => { 
    beforeEach(() => {
    cy.visit('https://qauto.forstudy.space', {
      failOnStatusCode: false,
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });
  });
  
  beforeEach('User Login', () => {
    cy.get('.header_right > .btn').eq(0).click();
    cy.get('h4.modal-title').should('exist');
    cy.get('input[id="signinEmail"]').should('be.visible')
    .click()
    .clear()
    .type('annaSATest@gmail.com');
    cy.get('input[id="signinEmail"]').should('have.value','annaSATest@gmail.com');
    cy.get('input[id="signinPassword"]').should('be.visible')
    .click()
    .clear()
    .type('Anna21Anna');
    cy.get('input[id="signinPassword"]').should('have.value','Anna21Anna');
    cy.get('input[id="remember"]').should('be.visible').check();
    cy.get('button[class="btn btn-primary"]').should('exist').click();
    cy.url().should('include', '/panel/garage')
  })

  it ('Add fuel expenses', () => {
  cy.get('p[class="car_name h2"]').should('exist').contains('Porsche Panamera');
  cy.get('[class="car_add-expense btn btn-success"]').eq(0)
  .should('exist')
  .click();
  cy.get('[class="modal-body"]').should('be.visible');
  // cy.get('input[id="addExpenseDate"]').should('be.visible');
  // cy.get('button[class="btn date-picker-toggle"]').should('exist').click();
  // cy.get('.ngb-dp-day:nth-child(5):nth-child(7)').click();
  cy.get('input[id="addExpenseDate"]').should('be.visible')
  .click()
  .clear()
  .type('25.03.2024');
  cy.get('input[id="addExpenseLiters"').should('be.visible')
  .click()
  .clear()
  .type('20');
  cy.get('input[id="addExpenseTotalCost"]').should('be.visible')
  .click()
  .clear()
  .type('1100');
  cy.get('input[id="addExpenseMileage"').should('be.visible')
  .click()
  .clear('975')
  .type('1000');
  cy.get('button[class="btn btn-primary"]').should('be.visible')
  .filter(':contains("Add")').eq(1).click({force: true});
  cy.wait(4000);
  cy.url().should('include', '/panel/expenses?carId=119093');
})
});