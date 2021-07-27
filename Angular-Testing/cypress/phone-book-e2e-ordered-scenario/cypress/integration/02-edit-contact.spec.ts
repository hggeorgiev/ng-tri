
describe('Editing a contact', () => {

  it('Should select Alyx VANCE', () => {
    cy.get('contacts-list li:nth-of-type(2) a:first-of-type').click();
    cy.get('#contactsDetailsContainer').should('be.visible');

    cy.get('#contactsDetailsContainer')
      .invoke('text')
      .should('match', /(Alyx)*(Vance)*(test@test.com)*/);
  });

  it('Should display a form contact', () => {
    cy.get('#edit-btn').click();
    cy.get('form').should('be.visible');
  });

  it('Should edit contact', () => {
    cy.get('form').should('have.class', 'ng-valid');
  });

  it('Should edit first name', () => {
    cy.get('input[name="firstName"]').clear();
    cy.get('input[name="firstName"]').type('Judith');
    cy.get('input[name="firstName"]').should('have.value', 'Judith');
  });

  it('Should edit last name', () => {
    cy.get('input[name="lastName"]').clear();
    cy.get('input[name="lastName"]').type('Mossman');
    cy.get('input[name="lastName"]').should('have.value', 'Mossman');
  });

  it('Should edit email', () => {
    cy.get('input[name="email"]').clear();
    cy.get('input[name="email"]').type('judith@blackmesa.com');
    cy.get('input[name="email"]').should('have.value', 'judith@blackmesa.com');
  });

  it('Should save contact successfully', () => {
    cy.get('input[type="submit"]').click();
    cy.get('form').should('not.exist');
  });

  it('Contact should have different information', () => {
    cy.get('contacts-list li:nth-of-type(2) a:first-of-type').click();
    cy.get('#contactsDetailsContainer').should('include.text', 'judith@blackmesa.com');
  });
});


