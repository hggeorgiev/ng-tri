
describe('Filling out a form', () => {
  before(() => {
    cy.visit('#');
    cy.get('#add').click();
  });

  describe('Filling out a form field', () => {
    it('Should fill out first name', () => {
      cy.get('input[name="firstName"]').type('Cave');
      cy.get('input[name="firstName"]').should('have.value', 'Cave');
    });

    it('Should fill out last name', () => {
      cy.get('input[name="lastName"]').type('Johnson');
      cy.get('input[name="lastName"]').should('have.value', 'Johnson');
    });

    it('Should validate e-mail', () => {
      cy.get('input[name="email"]').type('notanemail');
      cy.get('input[name="email"]').should('have.class', 'ng-invalid' );
      cy.get('input[name="email"]').clear();
    });

    it('Should fill out e-mail', () => {
      cy.get('input[name="email"]').type('cave@aperturescience.com');
      cy.get('input[name="email"]').should('have.value', 'cave@aperturescience.com');
    });

    it('Should submit form successfully', () => {
      cy.get('input[type="submit"]').click();
      cy.get('form').should('not.exist');
    });

    it('List should have one more item', () => {
      cy.get('contacts-list li').should('have.length', 6);
    });
  });

});
