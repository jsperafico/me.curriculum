/// <reference types="cypress" />

import { CurriculumPage } from "@/pages/curriculum"

import CurriculumData from "../fixtures/curriculum.json"

describe('Curriculum page', () => {
  context('General behavior', () => {
    beforeEach(() => {
      cy.viewport('macbook-13')
      cy.mount(<CurriculumPage />)
    })

    CurriculumData.sections.forEach((section) => {
      it(`${section.label} section should be visible`, () => {
        cy.get(`article section:nth-child(${section.index})`).scrollIntoView()
        cy.get(`article section:nth-child(${section.index})`).should('be.visible')

        if (section.index == 1) {
          cy.get(`article section:nth-child(${section.index}) img`).should('have.attr', 'src').and('contain', 'src/assets/me-mid.jpg')
          cy.get(`article section:nth-child(${section.index}) h1`).should('have.text', 'Jonathan Pinto Sperafico').should('be.visible')
          cy.get(`article section:nth-child(${section.index}) h2`).should('have.text', 'Sr. Test Automation Engineer').should('be.visible')
          return
        }

        cy.get(`article section:nth-child(${section.index}) > h3`).should('have.text', section.label).should('be.visible')
      })
    })

    it(`Sections should be aside each other and same height`, () => {
      let previousLeftPosition = 0
      let previousHeight = -1

      CurriculumData.sections.forEach((section) => {
        cy.get(`article section:nth-child(${section.index})`).then(($section) => {
          const rectSection = $section[0].getBoundingClientRect()
          expect(previousLeftPosition).to.be.lessThan(rectSection.left)
          previousLeftPosition = rectSection.left

          if (previousHeight > -1) {
            expect(previousHeight).to.be.equal(rectSection.height)
          }
          previousHeight = rectSection.height
        })
      })
    })
  })

  context('Responsive design', () => {
    context('Mobile Portrait', () => {
      beforeEach(() => {
        cy.viewport('iphone-6', 'portrait')
        cy.mount(<CurriculumPage />)
      })

      CurriculumData.sections.forEach((section) => {
        it(`${section.label} section should be visible`, () => {
          cy.get(`article section:nth-child(${section.index})`).scrollIntoView().should('be.visible')

          if (section.index == 1) {
            cy.get(`article section:nth-child(${section.index}) h1`).scrollIntoView().should('have.text', 'Jonathan Pinto Sperafico').should('be.visible')
            cy.get(`article section:nth-child(${section.index}) h2`).scrollIntoView().should('have.text', 'Sr. Test Automation Engineer').should('be.visible')
            return
          }

          cy.get(`article section:nth-child(${section.index}) > h3`).scrollIntoView().should('have.text', section.label)
        })
      })

      it(`Sections should be bellow each other and same width`, () => {
        let previousTopPosition = 0
        let previousWidth = -1

        CurriculumData.sections.forEach((section) => {
          cy.get(`article section:nth-child(${section.index})`).then(($section) => {
            const rectSection = $section[0].getBoundingClientRect()
            expect(previousTopPosition).to.be.lessThan(rectSection.top)
            previousTopPosition = rectSection.top

            if (previousWidth > -1) {
              expect(previousWidth).to.be.equal(rectSection.width)
            }
            previousWidth = rectSection.width
          })
        })
      })
    })

    context('Mobile Landscape', () => {
      beforeEach(() => {
        cy.viewport('iphone-6', 'landscape')
        cy.mount(<CurriculumPage />)
      })

      CurriculumData.sections.forEach((section) => {
        it(`${section.label} section should be visible`, () => {
          cy.get(`article section:nth-child(${section.index})`).scrollIntoView().should('be.visible')

          if (section.index == 1) {
            cy.get(`article section:nth-child(${section.index}) h1`).scrollIntoView().should('have.text', 'Jonathan Pinto Sperafico').should('be.visible')
            cy.get(`article section:nth-child(${section.index}) h2`).scrollIntoView().should('have.text', 'Sr. Test Automation Engineer').should('be.visible')
            return
          }

          cy.get(`article section:nth-child(${section.index}) > h3`).scrollIntoView().should('have.text', section.label)
        })
      })

      it(`Sections should be bellow each other and same width`, () => {
        let previousTopPosition = 0
        let previousWidth = -1

        CurriculumData.sections.forEach((section) => {
          cy.get(`article section:nth-child(${section.index})`).then(($section) => {
            const rectSection = $section[0].getBoundingClientRect()
            expect(previousTopPosition).to.be.lessThan(rectSection.top)
            previousTopPosition = rectSection.top

            if (previousWidth > -1) {
              expect(previousWidth).to.be.equal(rectSection.width)
            }
            previousWidth = rectSection.width
          })
        })
      })
    })
  })
})