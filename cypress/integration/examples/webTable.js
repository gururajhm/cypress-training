describe('Interact with WebTable...', () => {
    beforeEach(() => {
      cy.visit('https://chercher.tech/practice/table')
      //  cy.viewport('macbook-16')
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    })
  
    // we can read this array from cypress.json..

    const size =['macbook-16']
    // Test case 1....
    size.forEach((vp) =>  { // vp = iphone-x, mac.. iphone...
    it('iterate through webtable and find the text Google.', () => {
    
        cy.viewport(vp);
        cy.get("tr")
        cy.get("td")

        cy.get("td:nth-child(1)").each(($el,index,$list) => {

            // $list stores all the values.. 
            const text = $el.text();
            // chercjer
            if (text.includes("google.com")){
                // get the second colu
                cy.get("td:nth-child(1)").eq(index)
                .then(function(Field) {
                    const fieldtext = Field.text();
                    expect(fieldtext).to.equal("google.com")

                })
            }

        })

    });


     
  });

});
