describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://www.guru99.com'); 
  });

  it('website functionality check2', function() {
    cy.visit('www.guru99.com');
    cy.get(':nth-child(3) > .featured-box > :nth-child(2) > :nth-child(4) > a').click();
    cy.get('.kb-table-of-contents-icon-trigger').click();
    cy.get(':nth-child(1) > .kb-table-of-contents__entry').click();
    cy.get('.kb-table-of-contents-icon-trigger').click();
    cy.get('.cb-close').click();
    cy.get('.slbCloseBtn').click();
    cy.get('.kb-table-of-contents-icon-trigger').click();
    cy.get(':nth-child(5) > .kb-table-of-contents__entry').click();
    cy.get('#kt-info-box_b7d75a-43 > .kt-blocks-info-box-link-wrap > .kt-blocks-info-box-media-container > .kt-blocks-info-box-media > .kadence-info-box-icon-container > .kadence-info-box-icon-inner-container > .kt-info-svg-icon > svg > path').click();
  });
})