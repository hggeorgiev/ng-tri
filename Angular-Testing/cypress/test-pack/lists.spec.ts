describe('Removing from a list', () => {
  before(() => {
    cy.visit('#');
  });

  it('Should contain 5 elements', () => {
    cy.get('contacts-list li').should('have.length', 5);
  });

  it('Should have Gordon FREEMAN in the list', () => {
    cy.get('contacts-list li:first-of-type').should('contain.text', 'Gordon FREEMAN');
  });

  it('Should  delete first item', () => {
    cy.get('contacts-list li:first-of-type').scrollIntoView();
    cy.get('contacts-list ul li:first-of-type').trigger('mouseover');
    cy.get('contacts-list ul li:first-of-type .remove').invoke('show');
    cy.get('contacts-list li:first-of-type .remove').should('be.visible');
    cy.get('contacts-list li:first-of-type .remove').click();
    cy.get('contacts-list li').should('have.length', 4);
  });
});
