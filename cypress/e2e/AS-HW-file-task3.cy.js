describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.guru99.com')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(3) > .featured-box > :nth-child(5) > :nth-child(16) > a').click();
    cy.get('.yarpp > ul > :nth-child(8) > a').click();
    cy.get(':nth-child(13) > tbody > :nth-child(1) > :nth-child(2) > strong > a > span').click();
    cy.get(':nth-child(11) > .nohover > .entered').click();
    cy.get(':nth-child(7git) > :nth-child(5) > .button1').click();
    /* ==== End Cypress Studio ==== */
  })
})