import {MainRoutes} from '../../src/environment/MainRoutes';

const link = 'http://localhost:5173';

describe('Redirect', () => {
  it('Billing plan redirect', () => {
    cy.visit(link + MainRoutes.Plan);
    cy.contains('p', 'Select your plan').should('exist');
    cy.url().should('eq', link + MainRoutes.Default);
    cy.contains('Personal info');

    cy.get('.before\\:content-\\[\\"2\\"\\]').click();

    cy.contains('p', 'Select your plan').should('not.exist');
    cy.url().should('eq', link + MainRoutes.Default);
    cy.contains('Personal info');
  });

  it('Addons redirect', () => {
    cy.visit(link + MainRoutes.Addons);
    cy.contains('p', 'Pick add-on').should('exist');
    cy.url().should('eq', link + MainRoutes.Default);
    cy.contains('Personal info');

    cy.get('.before\\:content-\\[\\"3\\"\\]').click();

    cy.contains('p', 'Pick add-ons').should('not.exist');
    cy.url().should('eq', link + MainRoutes.Default);
    cy.contains('Personal info');
  });

  it('Finish redirect', () => {
    cy.visit(link + MainRoutes.Summary);
    cy.contains('p', 'Finishing up').should('exist');
    cy.url().should('eq', link + MainRoutes.Default);
    cy.contains('Personal info');

    cy.get('.before\\:content-\\[\\"4\\"\\]').click();

    cy.contains('p', 'Finishing up').should('not.exist');
    cy.url().should('eq', link + MainRoutes.Default);
    cy.contains('Personal info');
  });
});

describe('Success', () => {
  it('Completing a form', () => {
    cy.visit(link);
    cy.contains('Personal info');

    cy.get('#name').type('Max');
    cy.get('#email').type('Max@gmail.com');
    cy.get('#tel').type('+1234567890');
    cy.get('.bg-Marine-Blue').click();

    cy.url().should('eq', link + MainRoutes.Plan);

    cy.contains('Select your plan');
    cy.get(':nth-child(3) > label').click();
    cy.get('.bg-Marine-Blue > .bg-white').click();
    cy.get('.mobile\\:absolute > .bg-Marine-Blue').click();

    cy.url().should('eq', link + MainRoutes.Addons);

    cy.contains('Pick add-on');
    cy.get(':nth-child(1) > label').click();
    cy.get(':nth-child(2) > label').click();
    cy.get(':nth-child(3) > label').click();
    cy.get('.bg-Marine-Blue').click();

    cy.url().should('eq', link + MainRoutes.Summary);

    cy.contains('Finishing up');
    cy.contains('Online service');
    cy.contains('Larger storage');
    cy.contains('Customizable profile');
    cy.get('.bg-Purplish-Blue').click();

    cy.url().should('eq', link + MainRoutes.Thank);
    cy.contains('Thank you!');
  });
});

describe('Errors', () => {
  it('Empty personal info', () => {
    cy.visit(link + MainRoutes.Default);

    cy.get('.bg-Marine-Blue').click();

    cy.url().should('eq', link + MainRoutes.Default);

    cy.contains('This field is required');

    cy.get('#name').should('have.class', 'border-Strawberry-Red');
    cy.get('#email').should('have.class', 'border-Strawberry-Red');
    cy.get('#tel').should('have.class', 'border-Strawberry-Red');
  });

  it('Empty name', () => {
    cy.visit(link + MainRoutes.Default);

    cy.get('#email').type('Max@gmail.com');
    cy.get('#tel').type('+1234567890');

    cy.get('.bg-Marine-Blue').click();

    cy.url().should('eq', link + MainRoutes.Default);

    cy.contains('This field is required');

    cy.get('#name').should('have.class', 'border-Strawberry-Red');
    cy.get('#email').should('not.have.class', 'border-Strawberry-Red');
    cy.get('#tel').should('not.have.class', 'border-Strawberry-Red');
  });

  it('Empty email', () => {
    cy.visit(link + MainRoutes.Default);

    cy.get('#name').type('Max');
    cy.get('#tel').type('+1234567890');

    cy.get('.bg-Marine-Blue').click();

    cy.url().should('eq', link + MainRoutes.Default);

    cy.contains('This field is required');

    cy.get('#name').should('not.have.class', 'border-Strawberry-Red');
    cy.get('#email').should('have.class', 'border-Strawberry-Red');
    cy.get('#tel').should('not.have.class', 'border-Strawberry-Red');
  });

  it('Empty phone number', () => {
    cy.visit(link + MainRoutes.Default);

    cy.get('#name').type('Max');
    cy.get('#email').type('Max@gmail.com');

    cy.get('.bg-Marine-Blue').click();

    cy.url().should('eq', link + MainRoutes.Default);

    cy.contains('This field is required');

    cy.get('#name').should('not.have.class', 'border-Strawberry-Red');
    cy.get('#email').should('not.have.class', 'border-Strawberry-Red');
    cy.get('#tel').should('have.class', 'border-Strawberry-Red');
  });
});
