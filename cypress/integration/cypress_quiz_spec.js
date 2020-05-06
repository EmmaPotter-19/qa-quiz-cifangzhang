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

// test10 logout
describe("test logout", () => {
  it("click logout", () => {
    cy.contains("LOGOUT").click();
  });
});

// test11 test login with wrong username, correct password
describe("input username incorrect", () => {
  it("Input incorrect username", () => {
    cy.get("input").first().type("dummy").should("have.value", "dummy");
    cy.get("input").eq(1).type("test1").should("have.value", "test1");
    cy.contains("LOGIN").click().then(console.log).contains("Invalid user");
  });
});

// test12 test login fail, input text box go back to empty
describe("username input text box is empty", () => {
  it("input text box is empty", () => {
    cy.get("input").eq(0).should("have.value", "");
  });
});

// test13 test login fail, input text box go back to empty
describe("password input text box is empty", () => {
  it("input text box is empty", () => {
    cy.get("input").eq(1).should("have.value", "");
  });
});

// test14 test login with correct username, incorrect password
describe("input password incorrect", () => {
  it("Input incorrect password", () => {
    cy.reload();
    cy.get("input").first().type("dummytree").should("have.value", "dummytree");
    cy.get("input").eq(1).type("test2222").should("have.value", "test2222");
    cy.contains("LOGIN").click();
    cy.get(".error").should("be.visible");
  });
});
