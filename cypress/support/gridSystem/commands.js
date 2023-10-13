import { elements } from "./elements";
import { data } from "./data";

class login {
  verificacaoElementosTela() {
    cy.wait(2000);
    cy.matchImage({
      maxDiffThreshold: 0.05,
    });
    cy.wait(2000);
    cy.get(elements.imagem1).should("be.visible");
  }
}

export default new login();
