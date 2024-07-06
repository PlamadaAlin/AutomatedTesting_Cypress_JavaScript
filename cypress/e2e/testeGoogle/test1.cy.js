describe('Teste google',()=>{
    it('functioneza un search', ()=> {
        cy.visit('https://google.com');
        cy.get('#L2AGLb').click();
        cy.get('.gLFyf').type('testare automata').type('{enter}');
        cy.get('.WE0UJf').should('exist');
    })
    it('verifies Google image search', () => {
        cy.visit('https://google.com');
        cy.get('#L2AGLb').click();
        cy.get('.gLFyf').type('pisici').type('{enter}');
        cy.wait(2000);
        cy.contains('Imagini').click();
        cy.url().should('include', '/search?').and('include', 'q=pisici');
    });
    it('Uses the "I\'m Feeling Lucky" button', () => {
        cy.visit('https://google.com');
        cy.get('#L2AGLb').click();
        cy.get('.gLFyf').type('Cypress Testing');
        cy.wait(2000);
        cy.contains("Mă simt norocos").click();
        cy.url().should('not.include', 'search');
      });

});