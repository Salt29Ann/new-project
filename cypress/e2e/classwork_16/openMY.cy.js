describe('template spec', () => { 
    // before (()
    // // login     //happens only once 
    // )
  
    beforeEach(() => {
      cy.visit('https://www.guru99.com',{ timeout: 10000 }); 
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
        // селектор для пошуку одного елемента всередині іншого - працюють до першого співпадіння 
        cy.get('ul.menu1') .eq(5).find('a[title="SAP Basis"]'); 
        // селектор пошуку частини тексту - працюють до першого співпадіння 
        cy.contains('SAP Bas').should('be.visible'); 
        // або 
        cy.contains('a', 'SAP Basis');
        // або 
        cy.get('a').contains('SAP Bas');
        // search in header - отримуємо усі елементи що знаходяться всередині ID 'main-head...'
        cy.get('#main-header #primary-menu').children()
    });
   // перевірка пошуку по тексту у вікні search
    it('typing data into search field', () => {  
        // cy.wait(3000);
        cy.get('input[name="search"]', { timeout: 10000 }).as('inputSearch'); // оголошення аліас
        cy.get('@inputSearch')
        .should('be visible')
        .type('SAP Basis{enter}');
    });
    it('click search icon on main page', () => {  
        // cy.get('@inputSearch').should('be visible');
        cy.get('span.search-toggle-icon').click();
        cy.get('input[type="search"]')
        .should('be visible')
        .clear() // очистка вікна пошуку
        .type('SAP Basis{enter}');
        cy.url().should('include', '/search_gcse?q=SAP+Basis'); // redirect on specified URN
    });
    it ('check SAP text elem', () => {
      // cy.get('ul.menu1') .eq(5).filter('SAP').should('have.length', 12);
      cy.get('ul.menu1') .eq(5).each(($item) => {
        cy.wrap($item).find('a').should('be visible').contains('SAP');
      });
      cy.get('ul.menu1 li a')
      .filter(':contains("SAP MM")')
      .should('have.length', 1)
    });
  });