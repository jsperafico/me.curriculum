/// <reference types="cypress" />

import { BusinessCardPage } from "@/pages/business-card"

describe('Business Card page', () => {
  context('General behavior', () => {
    beforeEach(() => {
      cy.viewport('macbook-13')
      cy.mount(<BusinessCardPage />)
    })

    it('Should have image, name, title, skills and contact info', () => {
      cy.get('[data-id="front"] .aspect-square').should('have.attr', 'src').and('contain', 'src/assets/me.jpg')
      cy.get('[data-id="front"] h1').should('have.text', 'Jonathan Pinto Sperafico')
      cy.get('[data-id="front"] h2').should('have.text', 'Sr. Test Automation Engineer')

      cy.get('[data-id="back"] [data-id="skills"] ul').find('li').should('have.length', 11)
      cy.get('[data-id="back"] [data-id="contacts"] ul').find('li').should('have.length', 4)
    })

    it('Should have two sides alternating on touch or hover', () => {
      cy.get('[data-id="front"] .aspect-square').should('be.visible')
      cy.get('[data-id="front"] h1').should('be.visible')
      cy.get('[data-id="front"] h2').should('be.visible')

      cy.get('[data-id="back"] [data-id="skills"] ul').should('not.be.visible')
      cy.get('[data-id="back"] [data-id="contacts"] ul').should('not.be.visible')

      cy.get('[data-id="front"]').realHover()

      cy.get('[data-id="front"] .aspect-square').should('not.be.visible')
      cy.get('[data-id="front"] h1').should('not.be.visible')
      cy.get('[data-id="front"] h2').should('not.be.visible')

      cy.get('[data-id="back"] [data-id="skills"] ul').should('be.visible')
      cy.get('[data-id="back"] [data-id="contacts"] ul').should('be.visible')
    })
  })

  context('Responsive Design', () => {
    beforeEach(() => {
      cy.mount(<BusinessCardPage />)
      cy.get('body').realMouseMove(0, 0, { position: "topLeft" })
    })

    it('Should be nicely resized fit in "Portrait"', () => {
      cy.viewport('iphone-6', 'portrait')

      cy.get('[data-id="front"] .aspect-square').should('have.attr', 'src').and('contain', 'src/assets/me.jpg')
      cy.get('[data-id="front"] h1').should('have.text', 'Jonathan Pinto Sperafico')
      cy.get('[data-id="front"] h2').should('have.text', 'Sr. Test Automation Engineer')

      cy.get('[data-id="back"] [data-id="skills"] ul').find('li').should('have.length', 11)
      cy.get('[data-id="back"] [data-id="contacts"] ul').find('li').should('have.length', 4)
    })
    /* 
        it('Should be nicely resized fit in "Landscape"', () => {
          cy.viewport('iphone-6', 'landscape')
    
          cy.get('[data-id="front"] .aspect-square').should('have.attr', 'src').and('contain', 'src/assets/me.jpg')
          cy.get('[data-id="front"] h1').should('have.text', 'Jonathan Pinto Sperafico')
          cy.get('[data-id="front"] h2').should('have.text', 'Sr. Test Automation Engineer')
    
          cy.get('[data-id="back"] [data-id="skills"] ul').find('li').should('have.length', 11)
          cy.get('[data-id="back"] [data-id="contacts"] ul').find('li').should('have.length', 4)
        })
    */
  })
})