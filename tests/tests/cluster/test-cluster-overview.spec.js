/// <reference types="cypress" />
import 'cypress-file-upload';

context('Test Cluster Overview', () => {
  Cypress.skipAfterFail();

  before(() => {
    cy.loginAndSelectCluster();
  });

  it('Check Cluster Overview details', () => {
    cy.getLeftNav()
      .contains('Cluster Details')
      .click();

    cy.getIframeBody()
      .contains('h3', 'Cluster Details')
      .should('be.visible');

    cy.getIframeBody()
      .contains('Version')
      .next('.content')
      .should('not.be.empty');

    cy.getIframeBody()
      .contains('API Server Address')
      .next('.content')
      .should('not.be.empty');

    cy.getIframeBody()
      .contains('Node:')
      .its('length')
      .should('be.gte', 1);

    cy.getIframeBody()
      .contains('Events')
      .should('be.visible');
  });

  it('Go to Node details', () => {
    cy.getIframeBody()
      .contains('Node:')
      .first()
      .next('a')
      .click();
  });

  it('Test Node details', () => {
    cy.getIframeBody()
      .contains('Pod CIDR')
      .next('.content')
      .should('not.be.empty');

    cy.getIframeBody()
      .contains('Internal IP')
      .next('.content')
      .should('not.be.empty');

    cy.getIframeBody()
      .contains('Hostname')
      .next('.content')
      .should('not.be.empty');

    cy.getIframeBody()
      .contains('Resources')
      .should('be.visible');

    cy.getIframeBody()
      .contains('Machine info')
      .should('be.visible');

    cy.getIframeBody()
      .contains('Events')
      .should('be.visible');
  });
});
