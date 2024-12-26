/// <reference types="cypress" />

import { Skills } from "@/components/skills"

describe('Areas of expertise', () => {
  beforeEach(() => {
    cy.mount(<Skills />)
  })

  it('My skill list and level', () => {
    cy.get('.list-none > :nth-child(1)').should('contain.text', 'Java').should('have.class', 'after:skill-5')
    cy.get('.list-none > :nth-child(2)').should('contain.text', 'Python').should('have.class', 'after:skill-3')
    cy.get('.list-none > :nth-child(3)').should('contain.text', 'NodeJS').should('have.class', 'after:skill-2')
    cy.get('.list-none > :nth-child(4)').should('contain.text', 'Rust').should('have.class', 'after:skill-1')

    cy.get('.list-none > :nth-child(5)').should('have.attr', 'data-orientation', 'horizontal')

    cy.get('.list-none > :nth-child(6)').should('contain.text', 'Selenium').should('have.class', 'after:skill-5')
    cy.get('.list-none > :nth-child(7)').should('contain.text', 'JMeter').should('have.class', 'after:skill-4')
    cy.get('.list-none > :nth-child(8)').should('contain.text', 'Cypress').should('have.class', 'after:skill-3')
    cy.get('.list-none > :nth-child(9)').should('contain.text', 'RestAssured').should('have.class', 'after:skill-2')

    cy.get('.list-none > :nth-child(5)').should('have.attr', 'data-orientation', 'horizontal')

    cy.get('.list-none > :nth-child(11)').should('contain.text', 'Docker').should('have.class', 'after:skill-5')
    cy.get('.list-none > :nth-child(12)').should('contain.text', 'Gitlab').should('have.class', 'after:skill-4')
    cy.get('.list-none > :nth-child(13)').should('contain.text', 'Kubernetes').should('have.class', 'after:skill-3')
  })
})