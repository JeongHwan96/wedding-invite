import { transform } from "cypress/types/lodash";

describe("MobileWedding Test", () => {
  it("Main Page 접속", () => {
    cy.visit("/");
  });
});
