/// <reference types="cypress" />

import { Flag, Countries } from "@/components/flag"

import FlagData from "../fixtures/flags.json"

describe('Available Flags', () => {
  context('General behavior', () => {
    beforeEach(() => {
      cy.viewport('macbook-13')
    })

    FlagData.forEach((data) => {
      it(`"${data.country}" should have the appropriate flag and tooltip`, () => {
        cy.mount(<Flag flag={data.country as Countries} />)
        cy.get('button > .h-5').should('have.attr', 'src').should('include', data.src)
        cy.get('div > button').focus()
        cy.get('div > button').should('have.focus')
        cy.get('body div[data-radix-popper-content-wrapper]').should('contain.text', data.country)
      })
    })
  })

  context('Responsive design', () => {
    beforeEach(() => {
      cy.viewport("iphone-6")
    })

    FlagData.forEach((data) => {
      it(`"${data.country}" shouldn\'t have tooltip on small container`, () => {
        cy.on('fail', (error, _) => {

          if (error.message.includes('can only be called on a valid focusable element')) {
            return
          }

          throw error
        })

        cy.mount(<Flag flag={data.country as Countries} />)
        cy.get('[data-tooltip=false]').should('have.attr', 'src').should('include', data.src)

        cy.get('[data-tooltip=false]').focus()
        cy.get('[data-tooltip=false]').should('not.have.focus')

        cy.get('[data-tooltip=false]').parent().focus()
        cy.get('[data-tooltip=false]').parent().should('not.have.focus')
      })
    })
  })
})