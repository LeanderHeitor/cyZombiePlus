describe("Leads", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Deve fazer login com sucesso", () => {
    cy.get('a[href="/admin"]').click();
    cy.get('input[placeholder="E-mail"]').type("admin@zombieplus.com");
    cy.get('input[placeholder="Senha"]').type("pwd123");
    cy.get("button").contains("Entrar").click();

    cy.url().should("include", "/admin/movies");
  });
});
