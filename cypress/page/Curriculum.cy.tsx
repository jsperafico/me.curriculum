/// <reference types="cypress" />

import { CurriculumPage } from "@/pages/curriculum"

describe('Curriculum page', () => {
  context('General behavior', () => {
    beforeEach(() => {
      cy.viewport('macbook-13')
      cy.mount(<CurriculumPage />)
    })

    it('Should explain ', () => {

    })
  })

  context('Responsive design', () => {
    context('Mobile Portrait', () => {
      beforeEach(() => {
        cy.viewport('iphone-6', 'portrait')
        cy.mount(<CurriculumPage />)
      })

      it('Should explain ', () => {

      })
    })
    context('Mobile Landscape', () => {
      beforeEach(() => {
        cy.viewport('iphone-6', 'landscape')
        cy.mount(<CurriculumPage />)
      })

      it('Should explain ', () => {

      })
    })
  })
})