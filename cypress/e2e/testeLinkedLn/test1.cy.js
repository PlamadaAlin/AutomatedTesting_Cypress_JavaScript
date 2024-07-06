
describe('aa',()=>{
    it('bb',()=>{
        cy.visit('https://www.linkedin.com');
        cy.get('.nav__button-secondary').click();
        cy.get('#username').type('xxxxx');
        cy.get('#password').type('yyyy');
        cy.get('.btn__primary--large').click();
        cy.get('#error-for-username').should('exist');
        
    })


});