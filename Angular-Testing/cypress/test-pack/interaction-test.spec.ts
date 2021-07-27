describe('Filling out a form field', () => {
  it('Should fill out first name', () => {
    cy.visit('#');
    cy.get('#add').click();
    cy.get('input[name="firstName"]').type('Tested');
    cy.get('input[name="firstName"]').should('have.value',  'Tested' );
  });
});
