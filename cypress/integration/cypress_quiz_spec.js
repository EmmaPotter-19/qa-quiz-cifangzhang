// test1 vist website
describe("Visit website", () => {
  it("Visits the quiz website", () => {
    cy.visit("http://localhost:8081/");
  });
});

// test2 input account1 username
describe("Input username", () => {
  it("Input username", () => {
    cy.get("input")
      .first()
      .type("SomeUser_name")
      .should("have.value", "SomeUser_name");
  });
});

// test3 input account1 password
describe("Input password", () => {
  it("Input password", () => {
    cy.get("input")
      .eq(1)
      .type("TopSecret1234!")
      .should("have.value", "TopSecret1234!");
  });
});

// test4 login account1
describe("login account1", () => {
  it('click "LOGIN"', () => {
    cy.contains("LOGIN").click();
  });
});

// test5 login successful
describe("test login account1 successful", () => {
  it("login page contains logout", () => {
    cy.contains("LOGOUT");
  });
});

// test6 logout
describe("test logout", () => {
  it("click logout", () => {
    cy.contains("LOGOUT").click();
  });
});

// test7 input account2 username
describe("Input username", () => {
  it("Input username", () => {
    cy.get("input").first().type("dummytree").should("have.value", "dummytree");
  });
});

// test8 input account2 password
describe("Input password", () => {
  it("Input password", () => {
    cy.get("input").eq(1).type("test1").should("have.value", "test1");
  });
});

// test9 login account2
describe("login account2", () => {
  it('click "LOGIN"', () => {
    cy.contains("LOGIN").click();
  });
});

// test10 test login user has name displayed
describe("user has a name displayed", () => {
  it("has a name displayed", () => {
    cy.get(".sc-bwzfXH jRbNyy").find(".sc-htpNat ilgFCs");
  });
});
