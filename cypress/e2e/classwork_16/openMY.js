describe('template spec', () => { 
    // before (()
    // // login     //happens only once 
    // )
  
    beforeEach(() => {
      cy.visit('https://www.guru99.com'); 
    });
    it('open website', () => {  
      cy.get('h1.thick-heading').should('have.text', 'Tutorials Library') 
    })
  
    it.skip('click Software testing link', () => {  
      // cy.visit('www.guru99.com');   
      cy.get(':nth-child(1) > .featured-box > :nth-child(2) > :nth-child(1) > a').should('be.visible').click();
      cy.get(':nth-child(11) > tbody > :nth-child(1) > .responsivetable > a > strong',
      {timeout: 3000})
      .should('be.visible').click();
      cy.get(':nth-child(11) > tbody > :nth-child(1) > .responsivetable > a > strong')
      .should('be.visible').click();
    });

    it.skip('selecting unique elem' , () => {  
        cy.get('ul.menu1') .eq(5).find('a[title="SAP Basis"]');
        cy.contains('SAP Bas').should('be visible');
        cy.contains('a', 'SAP Basis');
        cy.get('a').contains('SAP Bas');
        // search in header
        cy.get('#main-header #primary-menu').children()
    });

    it('typing data into search field', () => {  
        // cy.wait(3000);
        cy.get('iput[name="search]', { timeout: 10000 }).search('inputSearch')
        cy.get('@inputSearch').should('be visible');
        .should('be visible')
        .type('SAP Basis{enter}');
    });
    it('click search icon on main page', () => {  
        cy.get('@inputSearch').should('be visible');
        cy.get('span.search-toggle-icon').click();
        cy.get('input[type="search"]')
        .should('be visible')
        .clear()
        .type('SAP Basis{enter}')
        cy.url().should('include', '/search_gcse?q=SAP+Basis');
    });
  });