describe('Some test', () => {
    it('open main page', () => {
      cy.setCookie(
        'sid',
        's%3AqdQJWGjxsW13ceiV2un2zH3GOu6UmzEY.f0W0UJSy9sH4BRYXR2N%2F9CngaLPIW0joRcJhom1UipU',
      );
      cy.visit('https://qauto.forstudy.space/panel/garage');
    });
  });
