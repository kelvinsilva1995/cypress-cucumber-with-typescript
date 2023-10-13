import {
  Given as Dado,
  When as Quando,
  And as E,
  Then as Então,
} from "@badeball/cypress-cucumber-preprocessor";

const signUpPage = require("../../pages/sign-up-page");
import commands from "../gridSystem/commands";
Quando("Altero a tela para {string}", (modelo) => {
  cy.viewport(modelo);
});

Então(
  "Deve ser possivel navegar e visualizar todos os componentes sem que haja quebras",
  (url) => {
    commands.verificacaoElementosTela();
  }
);
