class signUpPage{
    elements = {
        userNameInput: () => cy.get('input[name="name"]'),
        emailInput: () => cy.get('input[name="email"]'),
        passwordInput: () => cy.get('input[name="password"]'),
        passworConfirmationdInput: () => cy.get('input[name="passwordConfirmation"]'),
        signUpBtn: () => cy.get('button[class="btn mb-0 bg-gradient-success btn-lg w-100 null mt-4"]'),
        sucessMessage: () => cy.get('h6[class="mb-0 font-weight-bolder"]'),
    }

   typeUserName(username){
        this.elements.userNameInput().type(username)
   } 
    typeEmail(){
        const randomValue = Math.floor(Math.random()*100000)
        const emailRandom = `test-${randomValue}@gmail.com`
        this.elements.emailInput().type(emailRandom)
    } 
    typePassword(password){
        this.elements.passwordInput().type(password)
    } 
    typePasswordConfirmation(password){
        this.elements.passworConfirmationdInput().type(password)
    } 
    clickSignUpBtn() {
        this.elements.signUpBtn().click()
    }
    validateSucessSignUp(){
        this.elements.sucessMessage().should('be.visible')
    }
}

module.exports = new signUpPage()