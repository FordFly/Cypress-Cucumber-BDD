class LoginPage {
    // Selectores
    elements = {
        usernameInput: () => cy.get('[data-test="username"]'),
        passwordInput: () => cy.get('[data-test="password"]'),
        loginButton: () => cy.get('[data-test="login-button"]'),
        errorMessage: () => cy.get('[data-test="error"]')
    };

    // Acciones
    escribirUsuario(nombre) {
        this.elements.usernameInput().type(nombre);
    }
    escribirPassword(password) {
        this.elements.passwordInput().type(password);
    }
    hacerClicLogin() {
        this.elements.loginButton().click();
    }
}

export const loginPage =new LoginPage();