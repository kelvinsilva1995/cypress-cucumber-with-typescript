import {
  Given as Dado,
  When as Quando,
  And as E,
  Then as Então,
} from "@badeball/cypress-cucumber-preprocessor";

const signUpPage = require("../../pages/sign-up-page");
import commands from "../logo/commands";
Quando("Acessar alguma página do sistema", () => {
  //cy.get(":nth-child(4) > .firstLevelLink").click();
  commands.acessarMenuSobreNos();
});

Quando("Clicar na logo", () => {
  commands.clicarLogoAxa();
});
Então("A url deve ser igual a {string}", (url) => {
  commands.validarUrl(url);
});
Então("deve ser possivel retornar para pagina principal {string}", (url) => {
  commands.validarUrl(url);
});
Quando("Logo deve permancer o mesmo", () => {
  commands.ValidarLogo();
});

Então("Deve validar a acessibilidade", () => {
  commands.verificarAcessibilidade();
});
