import { iteratee } from "lodash";

describe("Pizza Form App", () => {
  //schedule something to happen before each test
  //before each test navigate to local host
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });

  //use the 'it' keyword for tests
  it("sanity checks", () => {
    //assertion(s)
    expect(5).to.eql(5);
    expect(1 + 2).to.equal(3);
  });

  const orderButton = () => cy.get("button[name=orderbutton]");
  const nameInput = () => cy.get("input[name=name]");
  const instructionsInput = () => cy.get("input[name=instructions]");
  const pepperoniCheck = () => cy.get("input[name=pepperoni]");
  const sausageCheck = () => cy.get("input[name=sausage]");
  const onionsCheck = () => cy.get("input[name=onions]");
  const mushroomsCheck = () => cy.get("input[name=mushrooms]");
  //keep going here
  it("the proper elements exist", () => {
    orderButton().should("exist");
    nameInput().should("exist");
    instructionsInput().should("exist");
    pepperoniCheck().should("exist");
    sausageCheck().should("exist");
    onionsCheck().should("exist");
    mushroomsCheck().should("exist");
  });

  it("test inputs working", () => {
    nameInput()
      .should("have.value", "")
      .type("text")
      .should("have.value", "text");
    instructionsInput()
      .should("have.value", "")
      .type("text")
      .should("have.value", "text");
    pepperoniCheck().check();
    sausageCheck().check();
    onionsCheck().check();
    mushroomsCheck().check();
  });
  it("submit button works", () => {
    orderButton().click();
    cy.get("form").submit();
  });
});
