describe('template spec', () => {  // оголошення test suit
  it('passes', () => {
    cy.visit('https://www.guru99.com')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('open website guru', function() {  // саме виконання test case
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://www.guru99.com');  // step of test case
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('open website guru and click', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('www.guru99.com');
    cy.get(':nth-child(3) > .featured-box > :nth-child(2) > :nth-child(5) > a').click();
    cy.get('.entry-content > :nth-child(20) > a').click();
    cy.get(':nth-child(2) > .cb-box__wrapper-center_modal > .cb-box__wrapper-table > .cb-box__wrapper-row > .cb-box > .cb-box__inner-wrap > .cb-box__inner > .cb-box__inner-row > .cb-box__inner-col > .cb-box__inner-drag > .cb-element__type-form > .cb-element__wrap > .cb-element__inner > form > :nth-child(1) > .cb-form-group__component > .cb-form-group__control > input').clear('d');
    cy.get(':nth-child(2) > .cb-box__wrapper-center_modal > .cb-box__wrapper-table > .cb-box__wrapper-row > .cb-box > .cb-box__inner-wrap > .cb-box__inner > .cb-box__inner-row > .cb-box__inner-col > .cb-box__inner-drag > .cb-element__type-form > .cb-element__wrap > .cb-element__inner > form > :nth-child(1) > .cb-form-group__component > .cb-form-group__control > input').type('davlog.usa@gmail.com');
    cy.get(':nth-child(2) > .cb-box__wrapper-center_modal > .cb-box__wrapper-table > .cb-box__wrapper-row > .cb-box > .cb-box__inner-wrap > .cb-box__inner > .cb-box__inner-row > .cb-box__inner-col > .cb-box__inner-drag > .cb-element__type-form > .cb-element__wrap > .cb-element__inner > form > [style="margin-bottom: 0px;"] > .cb-form-group__btn > span').click();
    cy.get(':nth-child(2) > .cb-box__wrapper-center_modal > .cb-box__wrapper-table > .cb-box__wrapper-row > .cb-box > .cb-close').click();
    /* ==== End Cypress Studio ==== */
  });
})