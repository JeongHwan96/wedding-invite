describe("MobileWedding Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("scroll 동작 확인", () => {
    cy.get("#app");
    cy.scrollTo("bottom");
    cy.wait(1000);
    cy.scrollTo("top");
  });

  it("scroll 동작 후 효과 확인", () => {
    cy.scrollTo(0, 300);
    cy.get(".container")
      .should("have.class", "active")
      .invoke("css", "opacity")
      .should("match", /1/);
    cy.wait(200);
    cy.scrollTo("top");
    cy.get(".container")
      .should("not.have.class", "active")
      .invoke("css", "opacity")
      .should("match", /0/);
  });
});
