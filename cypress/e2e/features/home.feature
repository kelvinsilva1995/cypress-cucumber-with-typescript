@test
Feature: Home page

    Feature Home page will work depending on the user credentials.

    Background:
        Given A user opens a saucelabs website
        When A user enters the username "standard_user"
        And A user enters the password "secret_sauce"
        And A user clicks on the login button
        Then the url will contains the inventory subdirectory

    Scenario: Validate Home
        Given A user is on saucelabs home
        When A user clicks on the menu
        Then A user sees the menu list