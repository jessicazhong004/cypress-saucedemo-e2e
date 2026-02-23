describe('SauceDemo purchase flow', () => {
    it('allows standard_user to complete a purchase', () => {
        cy.visit('/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();


        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();


        cy.get('.shopping_cart_link').click();

        cy.contains('Sauce Labs Backpack');
        cy.contains('Sauce Labs Bike Light');


        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('Test');
        cy.get('[data-test="lastName"]').type('User');
        cy.get('[data-test="postalCode"]').type('M1M1M1');
        cy.get('[data-test="continue"]').click();


        cy.get('[data-test="finish"]').click();

        cy.contains('Thank you for your order', { matchCase: false }).should('be.visible');

    });
});