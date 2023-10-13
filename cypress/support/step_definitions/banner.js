import {
  Given as Dado,
  When as Quando,
  And as E,
  Then as Então,
} from "@badeball/cypress-cucumber-preprocessor";

const signUpPage = require("../../pages/sign-up-page");
import commands from "../banner/commands";
Dado("visualizo no topo da tela banner inicial", () => {
  cy.visit("https://www.axa.com.br/");
});

Então("O banner deve permanecer o mesmo", () => {
  commands.ValidarBanner();
});
Então("O banner axa seguradora deve permanecer o mesmo", () => {
  commands.ValidarBannerAxaNegocio();
});
