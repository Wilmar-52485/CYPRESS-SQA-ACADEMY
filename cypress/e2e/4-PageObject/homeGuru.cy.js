class homeGuru{

    getLblBienvenida(){
        return cy.xpath('//b[contains(text()," Note: Your user name is WilmarRamirezSQA.")]')
    }
}
export default homeGuru;