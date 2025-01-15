/// <reference types="cypress" />

import { Header } from "@/components/header"

describe('Page Header', () => {
  beforeEach(() => {
    cy.mount(<Header />)
  })

  it('header should be at the top for desktop', () => {
    cy.viewport('macbook-11')

    cy.get('.z-10')
      .should('have.css', 'height', '48px')
      .should('be.visible')
      .should('have.class', 'sticky')

    cy.get('.group a')
      .should('have.length', 3)

    cy.get('.group li:nth-child(1) a')
      .should('contain.text', 'Business Card')
      .should('be.visible')
      .should('not.have.css', 'font-size', '0px')
    cy.get('.group li:nth-child(2) a')
      .should('contain.text', 'Curriculum')
      .should('be.visible')
      .should('not.have.css', 'font-size', '0px')
    cy.get('.group li:nth-child(3) a')
      .should('contain.text', 'Articles')
      .should('not.be.visible')
      .should('not.have.css', 'font-size', '0px')
  })

  it('header should be on the top for mobile landscape', () => {
    cy.viewport('iphone-8', 'landscape')

    cy.get('.z-10')
      .should('have.css', 'height', '48px')
      .should('be.visible')
      .should('have.class', 'sticky')

    cy.get('.group a')
      .should('have.length', 3)

    cy.get('.group li:nth-child(1) a')
      .should('contain.text', 'Business Card')
      .should('be.visible')
      .should('not.have.css', 'font-size', '0px')
    cy.get('.group li:nth-child(2) a')
      .should('contain.text', 'Curriculum')
      .should('be.visible')
      .should('not.have.css', 'font-size', '0px')
    cy.get('.group li:nth-child(3) a')
      .should('contain.text', 'Articles')
      .should('not.be.visible')
      .should('not.have.css', 'font-size', '0px')
  })

  it('header should be at the top for mobile portrait', () => {
    cy.viewport('iphone-8', 'portrait')

    cy.get('.z-10')
      .should('have.css', 'height', '48px')
      .should('be.visible')
      .should('have.class', 'sticky')

    cy.get('.group a')
      .should('have.length', 3)

    cy.get('.group li:nth-child(1) a')
      .should('contain.text', 'Business Card')
      .should('be.visible')
      .should('not.have.css', 'font-size', '0px')
    cy.get('.group li:nth-child(2) a')
      .should('contain.text', 'Curriculum')
      .should('be.visible')
      .should('not.have.css', 'font-size', '0px')
    cy.get('.group li:nth-child(3) a')
      .should('contain.text', 'Articles')
      .should('not.be.visible')
      .should('not.have.css', 'font-size', '0px')
  })
})