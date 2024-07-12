describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");

    cy.get('[data-testid="form"]').should("exist");

    cy.get("input#email").should("be.visible").should("have.attr", "placeholder", "Enter your email").type("admin@store.com").should("have.value", "admin@store.com");

    cy.get("input#password").should("be.visible").should("have.attr", "placeholder", "Enter your password").type("123456").should("have.value", "123456");

    cy.get('[data-testid="submit"]').click();

    cy.get("div.home").should("be.visible");
    cy.visit("http://localhost:5173/categories");
    cy.get(".widget").should("have.length", 3);
    cy.contains(".widget", "USERS").should("be.visible");
    cy.contains(".widget", "PRODUCTS").should("be.visible");
    cy.contains(".widget", "CATEGORIES").should("be.visible");
    cy.contains("Add New").click();
    cy.get('[data-testid="form-categories"]').should("exist");
    cy.get("input#name").should("be.visible").should("have.attr", "placeholder", "Coffee").type("Snack").should("have.value", "Snack");
    cy.get('[data-testid="button-categories"]').click();
    cy.url().should("include", "/categories", { timeout: 10000 });
    cy.contains("Snack").should("be.visible");
    cy.get(".MuiDataGrid-root").within(() => {
      cy.contains(".MuiDataGrid-cell", "Snack")
        .parent()
        .within(() => {
          cy.get('[data-testid="delete-button"]').click();
        });
    });
    cy.get(".MuiDataGrid-root", { timeout: 10000 }).within(() => {
      cy.contains(".MuiDataGrid-cell", "Snack", { timeout: 10000 }).should("not.exist");
    });
  });
});
