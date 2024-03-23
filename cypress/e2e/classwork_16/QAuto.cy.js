describe('Some test', () => {
    it('open main page', () => {
      cy.setCookie(
        'sid',
        // 's%3AqdQJWGjxsW13ceiV2un2zH3GOu6UmzEY.f0W0UJSy9sH4BRYXR2N%2F9CngaLPIW0joRcJhom1UipU',
        's%3AIGBgH7HTq6rxw6I2nXBP2W1RnvoXIpMA.6e8knIP5VfybGFI3eP7cFQx1oI%2BYhuYhvYJc%2BkJPndY'
      );
      cy.visit('https://qauto.forstudy.space/panel/garage');
    });
  });


  // describe('Some test', () => {
  //   it('request', () => {
  //     cy.request({
  //       method: 'POST',
  //       url: 'https://qauto.forstudy.space/api/auth/signin',
  //       body: {
  //          email: 'annaSalt@gmail.com',
  //          pasword: 'Qwerty+1',
  //          remember: false,
  //       },
  //     });
  //     cy.getCookie('sid').should('exist')
  //   })
  //   it('open main page', () => {
  //   cy.visit('https://qauto.forstudy.space/panel/garage');
  //   });
  // });