/// <reference types="cypress-xpath"/>

import homeGuru from "../4-PageObject/homeGuru.cy"
import inicioSesionGuru from "../4-PageObject/inicioSecionGuru.cy"
import registroGuru from "../4-PageObject/registroGuru.cy"

context('Registro Usuario Demo Guru',() => {

  beforeEach(()=>{
      cy.visit('https://demo.guru99.com/test/newtours/index.php')
  })

  it('Registro de sesión',()=>{
      const inicioSesion = new inicioSesionGuru()
      const registro = new registroGuru
      const home = new homeGuru()

      inicioSesion.getBtnRegistro().click()
      registro.getTxtFirstName().type('Wilmar Fernando')
      registro.getTxtlastName().type('Ramirez Esquivel')
      registro.getTxtPhone().type('3112074908')
      registro.getTxtUserName().type('wilmar.ramirez@sqasa.co')
      registro.getTxtAddress1().type('Carrera 116 b No 72 f 70')
      registro.getTxtCity().type('Colombia')
      registro.getTxtState().type('Bogotá')
      registro.getTxtPostalCode().type('110111')
      registro.getSelectcountry().select("COLOMBIA")
      registro.getTxtEmail().type('WilmarRamirezSQA')
      registro.getTxtPassword().type('wilmar@83')
      registro.getTxtConfirmPassword().type('wilmar@83{enter}')
      home.getLblBienvenida().should('be.visible')
      })
})