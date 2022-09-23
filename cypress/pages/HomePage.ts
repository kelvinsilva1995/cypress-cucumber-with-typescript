class HomePage{
    elements = {
      usernameInput: () => cy.get("#user-name"),
      passwordInput: () => cy.get("#password"),
      menuBtn: () => cy.get("#react-burger-menu-btn"),
      loginBtn: () => cy.get("#login-button"),
      errorMessage: () => cy.get('h3[data-test="error"]'),
    };
  
    validaMenus(mensagem:any) {
            cy.contains(mensagem).should('be.contain', mensagem)
    };
    clickMenu() {
      this.elements.menuBtn().click();
    }
  }
  
  module.exports = new HomePage();
  