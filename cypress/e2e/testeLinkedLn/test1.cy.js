
describe('Linkedln tests',()=>{
    //This is a template without the corect login data, please put correct data before running the tests
      beforeEach(() => {
        cy.visit('https://www.linkedin.com/');
        cy.contains('Sign in').click();
        cy.get('#username').type('your_username');
        cy.get('#password').type('your_password');
        cy.get('.sign-in-form__submit-button').click();
        cy.get('.global-nav__me').should('be.visible');
      });
    
      it('should display error message for incorrect login', () => {
        cy.get('.nav__button-secondary').click();
        cy.get('#username').type('xxxxx');
        cy.get('#password').type('yyyy');
        cy.get('.btn__primary--large').click();
        cy.get('#error-for-username').should('exist');
      });
      it('should navigate to the profile page', () => {
        cy.get('.global-nav__me').click();
        cy.contains('View profile').click();
        
        cy.url().should('include', '/in/username/');
        cy.contains('Edit public profile & URL').should('be.visible');
      });
    
      it('should search for connections', () => {
        cy.get('.search-global-typeahead__input').type('John Doe{enter}');
        
        cy.get('.search-results__list').should('be.visible');
        cy.contains('John Doe').should('be.visible');
      });


});