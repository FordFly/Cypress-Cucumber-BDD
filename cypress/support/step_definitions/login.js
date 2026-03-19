import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../../pages/LoginPage";

Given("que el usuario navega a la página de SauceDemo", () => {
    cy.visit("https://www.saucedemo.com/");
});

When("introduce el usuario {string} y la contraseña {string}", (usuario, password) => {
    loginPage.escribirUsuario(usuario);
    loginPage.escribirPassword(password);
});

When("hace clic en el botón de Login", () => {
    loginPage.hacerClicLogin();
});

Then("debería ver un mensaje de error que dice {string}", (mensajeEsperado) => {
    cy.get('[data-test="error"]').should('contain', mensajeEsperado);
})