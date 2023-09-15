class registroGuru{
    getTxtFirstName(){
        return cy.xpath('//input[@name="firstName"]')
    }
    getTxtlastName(){
        return cy.xpath('//input[@name="lastName"]')
    }
    getTxtPhone(){
        return cy.xpath('//input[@name="phone"]')
    }
    getTxtUserName(){
        return cy.xpath('//input[@id="userName"]')
    }
    getTxtAddress1(){
        return cy.xpath('//input[@name="address1"]')
    }
    getTxtCity(){
        return cy.xpath('//input[@name="city"]')
    }
    getTxtState(){
        return cy.xpath('//input[@name="state"]')
    }
    getTxtPostalCode(){
        return cy.xpath('//input[@name="postalCode"]')
    }
    getSelectcountry(){
        return cy.xpath('//select[@name="country"]')
    }
    getTxtEmail(){
        return cy.xpath('//input[@id="email"]')
    }
    getTxtPassword(){
        return cy.xpath('//input[@name="password"]')
    }
    getTxtConfirmPassword(){
        return cy.xpath('//input[@name="confirmPassword"]')
    }
}
export default registroGuru