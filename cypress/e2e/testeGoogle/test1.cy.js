describe('test google',()=>{
    it('functioneza un search', ()=> {
        cy.visit('https://google.com');
        cy.get('#L2AGLb').click();
        cy.get('.gLFyf').type('vlog de it').type('{enter}');
        cy.get('.WE0UJf').should('exist');
    })
   

});