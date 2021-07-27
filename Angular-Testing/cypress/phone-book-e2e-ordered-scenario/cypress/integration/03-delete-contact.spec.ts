describe('Deleting a contact', () => {
  it('Should delete a contact', () => {
    cy.get('contacts-list li:first-of-type').scrollIntoView();
    cy.get('contacts-list li:first-of-type').trigger('mouseover');
    cy.get('contacts-list li:first-of-type .remove').invoke('show');
    cy.get('contacts-list li:first-of-type .remove').should('be.visible');
    cy.get('contacts-list li:first-of-type .remove').click();
    cy.get('contacts-list li').should('have.length', 5);
  });
});
