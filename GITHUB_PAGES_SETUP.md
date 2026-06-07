# GitHub Pages Setup Guide

## Passo a Passo para Deploy

### 1. Preparação do Repositório
```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Criar Repositório no GitHub
- Vá para [github.com/new](https://github.com/new)
- Nome do repositório: `artes`
- Escolha entre público ou privado
- Clique em "Create repository"

### 3. Adicionar Repositório Remoto
```bash
git remote add origin https://github.com/SEU_USUARIO/artes.git
git branch -M main
git push -u origin main
```

### 4. Configurar GitHub Pages
1. Vá para o repositório no GitHub
2. Acesse **Settings** → **Pages**
3. Em "Build and deployment":
   - Source: `GitHub Actions`
4. O deploy será automático para cada push na branch `main`

### 5. Estrutura de URL
Seu site estará disponível em:
```
https://SEU_USUARIO.github.io/artes/
```

## Build Local

Para testar localmente antes de fazer push:

```bash
npm install
npm run build
npm run preview
```

A pasta `dist` contém os arquivos estáticos prontos para deploy.

## Configurações Atuais

- **Base URL**: `/artes/` (configure conforme seu repositório)
- **Workflow**: Automático com GitHub Actions
- **Branch de deploy**: `main` (altere em `.github/workflows/deploy.yml` se necessário)

## Trocar o Nome do Repositório

Se você usar um nome diferente de "artes", atualize em `vite.config.ts`:

```typescript
base: '/seu-repositorio-nome/',
```

## Deploy Manual (Alternativa)

Se preferir fazer deploy manual sem GitHub Actions:

1. Build local: `npm run build`
2. Use ferramentas como `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Configure em `package.json`:
   ```json
   "deploy": "gh-pages -d dist"
   ```
4. Execute: `npm run deploy`
