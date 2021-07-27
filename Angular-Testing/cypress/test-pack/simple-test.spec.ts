describe('Simple test', () => {
  it('Should have a title', () => {
    cy.visit('#');
    cy.title().should('equal', 'Angular Training App');
  });
});
