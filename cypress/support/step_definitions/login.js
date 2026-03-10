import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estoy en la página de inicio de SauceDemo", () => {
    cy.visit("https://www.saucedemo.com/");
});

When("introduzco el nombre de usuario {string}", (username) => {
    cy.get('#user-name').type(username);
});

When("introduzco la contraseña {string}", (password) => {
    cy.get('#password').type(password);
});

When("hago clic en el botón de Login", () => {
    cy.get('#login-button').click()
});

Then("debería ser redirigido a la página de inventario", () => {
    cy.url().should('include', '/inventory.html');
});