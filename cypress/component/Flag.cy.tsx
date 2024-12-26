/// <reference types="cypress" />

import { Flag } from "@/components/flag"

describe('Available Flags', () => {
  it('"Brazil" should have the appropriate flag and tooltip', () => {
    cy.mount(<Flag flag="Brazil" />)
    cy.get('button > .h-5').should('have.attr', 'src').should('include', 'brazil')
    cy.get('div > button').focus()
    cy.get('body div[data-radix-popper-content-wrapper]').should('contain.text', 'Brazil')
  })

  it('"Finland" should have the appropriate flag and tooltip', () => {
    cy.mount(<Flag flag="Finland" />)
    cy.get('button > .h-5').should('have.attr', 'src').should('include', 'finland')
    cy.get('div > button').focus()
    cy.get('body div[data-radix-popper-content-wrapper]').should('contain.text', 'Finland')
  })

  it('"Poland" should have the appropriate flag and tooltip', () => {
    cy.mount(<Flag flag="Poland" />)
    cy.get('button > .h-5').should('have.attr', 'src').should('include', 'poland')
    cy.get('div > button').focus()
    cy.get('body div[data-radix-popper-content-wrapper]').should('contain.text', 'Poland')
  })

  it('"Ireland" should have the appropriate flag and tooltip', () => {
    cy.mount(<Flag flag="Ireland" />)
    cy.get('button > .h-5').should('have.attr', 'src').should('include', 'ireland')
    cy.get('div > button').focus()
    cy.get('body div[data-radix-popper-content-wrapper]').should('contain.text', 'Ireland')
  })

  it('"Italy" should have the appropriate flag and tooltip', () => {
    cy.mount(<Flag flag="Italy" />)
    cy.get('button > .h-5').should('have.attr', 'src').should('include', 'italy')
    cy.get('div > button').focus()
    cy.get('body div[data-radix-popper-content-wrapper]').should('contain.text', 'Italy')
  })
})