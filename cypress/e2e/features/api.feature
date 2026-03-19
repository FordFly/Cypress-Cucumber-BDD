Feature: Pruebas de API Backend

    Scenario: Obtener información de un usuario vía API
        When hago una petición GET a la API de usuarios
        Then la respuesta debe tener el código 200
        And el nombre del usuario debe ser "Leanne Graham" 