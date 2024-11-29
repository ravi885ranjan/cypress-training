class SignupPage{
    accountCreationButtonShouldBePresent(){
        cy.contains('Create your Amazon account')
    }
}
export default SignupPage