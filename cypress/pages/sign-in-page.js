class signInPage{
    elements = {
        emailInput: () => cy.get('input[name="email"]'),
        passwordInput: () => cy.get('input[name="password"]'),
        signInBtn: () => cy.get('button[class="btn mb-0 bg-gradient-success btn-md w-100 null my-4 mb-2"]'),
        sucessMessage: () => cy.get('h6[class="mb-0 font-weight-bolder"]'),
    }

    typeEmail(email){
        this.elements.emailInput().type(email)
    } 
    typePassword(password){
        this.elements.passwordInput().type(password)
    }
    clickSignInBtn() {
        this.elements.signInBtn().click()
    }
    validateSucessSignUp(){
        this.elements.sucessMessage().should('be.visible')
    }
}

module.exports = new signInPage()