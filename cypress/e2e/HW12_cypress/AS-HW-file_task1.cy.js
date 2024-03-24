describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://www.guru99.com'); 
  });
  it('website functionality checkout', () => {
    cy.get(':nth-child(1) > .featured-box > :nth-child(2) > :nth-child(4) > a').click();
    cy.get('.pagenav').click();
    cy.get('.nav-next > a > div > .pagenav').click();
    cy.get('.cb-form-group__control > input').clear('').type('davlog.usa@gmail.com');
    cy.get('span > b').click();
  })
})