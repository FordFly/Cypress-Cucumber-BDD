Feature: Login en SauceDemo

    Scenario: Intento de inicio de sesión fallido
        Given que el usuario navega a la página de SauceDemo
        When introduce el usuario "<usuario>" y la contraseña "<password>"
        And hace clic en el botón de Login
        Then debería ver un mensaje de error que dice "<mensaje_esperado>"

        Examples:
      | usuario         | password     | mensaje_esperado                                                          |
      | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |
      | standard_user   | clave_falsa  | Epic sadface: Username and password do not match any user in this service |