import { elements } from "./elements";
import { data } from "./data";

class login {
  ValidarBanner() {
    cy.get(elements.bannerWrapperStyle).matchImage();
  }
  ValidarBannerAxaNegocio() {
    cy.get(elements.AXASeguradoraOficialNegocio).matchImage();
  }
}

export default new login();
