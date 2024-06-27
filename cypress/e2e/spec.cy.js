beforeEach(() => {
  cy.visit('http://localhost:5173/');
});

describe('SANITY CHECK', () => {
  it('opens the app successfully', () => {
    cy.url().should("contain", 'http://localhost:5173/');
  });
});

describe('SUCCESS', () => {
  it('opens the order page', () => {
    //arrange
    cy.get('.siparis-button').first().as("orderButton");
    //act
    cy.get("@orderButton").click();
    //assert
    cy.url().should("contain", "/OrderPizza");
  });
});

describe('Input check', () => {
  it('write something on input', () => {
    //arrange
    cy.get('.siparis-button').first().as("orderButton");
    cy.get("@orderButton").click();
    //act
    cy.get('.fullnameTest').as("nameInput").type("Ul");
    //assert
  });
});

describe('Ingredients check', () => {
  it('select ingredients', () => {
    // arrange
    cy.get('.siparis-button').first().as("orderButton");
    cy.get("@orderButton").click();
    // act
    cy.get('input[type="checkbox"][value="Pepperoni"]').check();
    cy.get('input[type="checkbox"][value="Tavuk Izgara"]').check();
    cy.get('input[type="checkbox"][value="Sarımsak"]').check();
    // assert
    cy.contains("4 ila 10 malzeme seçmelisiniz. 5₺").should("be.visible");
  });
});

describe('Submit form', () => {
  it('form submits after click', () => {
    //arrange
    cy.get('.siparis-button').first().as("orderButton");
    cy.get("@orderButton").click();


    //act
    cy.get('input[type="checkbox"][value="Pepperoni"]').check();
    cy.get('input[type="checkbox"][value="Tavuk Izgara"]').check();
    cy.get('input[type="checkbox"][value="Sarımsak"]').check();
    cy.get('input[type="checkbox"][value="Mısır"]').check();
    cy.get('.fullnameTest').type("Ozan");
    cy.get('.custom-radio-input[value="Orta"]').click({ force: true });
    cy.get('select[name="pizzaHamur"]').select("İnce Hamur");
    cy.get('.submit-button').as("submitButton");
    cy.get("@submitButton").click();


    //assert
    cy.url().should("contain", "/success");
  });
});