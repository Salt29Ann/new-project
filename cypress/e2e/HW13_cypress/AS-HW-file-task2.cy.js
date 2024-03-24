describe('QAUTO test case #2', () => {
  beforeEach(() => {
  cy.visit('https://qauto.forstudy.space', {
    failOnStatusCode: false,
    auth: {
      username: 'guest',
      password: 'welcome2qauto',
    },
  });
});

  it('User Login and car create', () => {
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

    cy.get('button[class="btn btn-primary"]').first().should('exist').click();
    cy.contains('h4[class="modal-title"]','Add a car').should('exist');

    cy.get('select[name="carBrandId"] option').filter('[value="3: 4"]')
    .then((option) => {
      cy.get('select[name="carBrandId"]')
      .select(option.val());
    });

    cy.get('select[name="carModelId"] option').filter('[value="7: 18"]')
    .then((option) => {
      cy.get('select[name="carModelId"]')
      .select(option.val());
    });

    cy.get('input[id="addCarMileage"]').should('be.visible')
    .click()
    .clear()
    .type('975');
    cy.get('button[class="btn btn-primary"]').contains('Add').should('exist').click({force: true});
    cy.wait(4000);
    cy.get('p[class="car_name h2"]').should('exist').contains ('Porsche Panamera');
  });
});