class inicioSesionGuru{

    getBtnRegistro(){
        return cy.xpath('//a[contains(text(),"REGISTER")]')
    }
}
export default inicioSesionGuru;
