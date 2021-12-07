describe('before each test Login', () => {
  beforeEach(() => {
    cy.visit('https://demo.opencart.com/index.php?route=account/login')

  })

  // Test case 1....
  it('open cart site and then login with valid credentials..', () => {
    // read this from fixture...
    cy.login("gururajhm@gmail.com", "Test123")

    // verify..
    cy.get('h1 > a').should('be.visible')
      .contains('Your Stores')

  })
});

