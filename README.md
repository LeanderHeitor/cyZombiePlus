# Zombie Plus - Testes E2E com Cypress

Projeto de automação de testes end-to-end para a aplicação Zombie Plus utilizando Cypress.

## Tecnologias

- [Cypress](https://www.cypress.io/) - Framework de testes E2E
- Node.js

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/LeanderHeitor/cyZombiePlus.git
cd cyZombiePlus
```

2. Instale as dependências:

```bash
npm install
```

## Como executar os testes

### Modo interativo (Cypress UI)

```bash
npx cypress open
```

### Modo headless (linha de comando)

```bash
npx cypress run
```

### Executar um arquivo específico

```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

## Estrutura do projeto

```
cypress/
├── e2e/              # Arquivos de teste
│   ├── login.cy.js   # Testes de login
│   └── Leads.cy.js   # Testes de leads
├── fixtures/         # Dados de teste (mocks, JSONs)
│   └── example.json
└── support/          # Comandos customizados e configurações
    ├── commands.js   # Comandos customizados do Cypress
    └── e2e.js        # Configurações globais
```

## Cenários de teste

### Login

- Deve fazer login com sucesso

## URL da aplicação

A aplicação está configurada para rodar em: `http://localhost:3000/`

## Relatórios

Os testes geram automaticamente:

- Screenshots em caso de falhas: `cypress/screenshots/`
- Vídeos das execuções: `cypress/videos/`

## Como contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request
