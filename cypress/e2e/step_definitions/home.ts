import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const HomePage = require("../../pages/HomePage");

  Given("A user is on saucelabs home", () => {
    cy.contains('Products').should('is.visible')
  });

  When("A user clicks on the menu", () => {
    HomePage.clickMenu();
  });

  Then("A user sees the menu list", () => {
    const menus = [
        'All Items',
        'About',
        'Logout',
        'Reset App State'
    ]
    menus.forEach(menus => {
        HomePage.validaMenus(menus)
    })
  });

