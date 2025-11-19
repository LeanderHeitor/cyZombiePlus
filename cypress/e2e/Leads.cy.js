describe("Leads", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Deve registrar uma Lead com sucesso", () => {
    cy.get("button").contains("Aperte o play...").click();
    cy.get('input[placeholder="Seu nome completo"]').type("Heitor Leander");
    cy.get("#email").type("heitor@email.com");
    cy.contains("Quero entrar na fila!").click();

    cy.contains(
      "Agradecemos por compartilhar seus dados conosco. Em breve, nossa equipe entrará em contato!"
    ).should("be.visible");
  });

  it("Deve registrar com email invalido", () => {
    cy.get("button").contains("Aperte o play...").click();
    cy.get('input[placeholder="Seu nome completo"]').type("Heitor Leander");
    cy.get("#email").type("heitoremailInvalido.com");
    cy.contains("Quero entrar na fila!").click();

    cy.contains("Email incorreto").should("be.visible");
  });

  it("Deve Verificar Campos Obrigatorios", () => {
    cy.get("button").contains("Aperte o play...").click();
    //cy.get('input[placeholder="Seu nome completo"]').type("");
    //cy.get("#email").type("");
    cy.contains("Quero entrar na fila!").click();

    cy.contains("Campo obrigatório").should("be.visible");
  });
});
