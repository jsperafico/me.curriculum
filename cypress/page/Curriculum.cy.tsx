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

})