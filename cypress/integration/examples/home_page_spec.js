// test1 vist website
describe("Visit website", () => {
  it("Visits the quiz website", () => {
    cy.visit("http://localhost:8081/");
  });
});

// test2 input username
describe("Input username", () => {
  it("Input username", () => {
    cy.get("input").first().type("SomeName").should("have.value", "SomeName");
  });
});

// test3 input password
describe("Input password", () => {
  it("Input password", () => {
    cy.get("input")
      .eq(1)
      .type("TopSecret1234!")
      .should("have.value", "TopSecret1234!");
  });
});

// test4 click login
describe("click login", () => {
  it('click "LOGIN"', () => {
    cy.contains("LOGIN").click();
  });
});
