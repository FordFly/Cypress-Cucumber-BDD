Feature: Login en SauceDemo

    Scenario: Login exitoso con usuario estándar
        Given que estoy en la página de inicio de SauceDemo
        When introduzco el nombre de usuario "standard_user"
        And introduzco la contraseña "secret_sauce"
        And hago clic en el botón de Login
        Then debería ser redirigido a la página de inventario