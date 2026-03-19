import { When, Then} from "@badeball/cypress-cucumber-preprocessor";

let respuestaAPI;

When ("hago una petición GET a la API de usuarios", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/users/1").then((response) =>  {
        respuestaAPI = response;
    })
});

Then("la respuesta debe tener el código {int}", (codigoEsperado) => {
    expect(respuestaAPI.status).to.eq(codigoEsperado);
});

Then("el nombre del usuario debe ser {string}", (nombreEsperado) => {
    expect(respuestaAPI.body.name).to.eq(nombreEsperado);
});