# ☕ Landing Page - Cafeteria Artesanal

Template profissional de landing page para cafeterias e coffee shops, desenvolvido com HTML5, CSS3 e JavaScript puro. Design moderno, elegante e otimizado para conversão.

![Status](https://img.shields.io/badge/Status-Pronto-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 🎯 Características

- **Design Acolhedor** - Paleta terrosa com tons de café
- **100% Responsivo** - Funciona em todos os dispositivos
- **Animações Elegantes** - AOS (Animate On Scroll)
- **SEO Completo** - Meta tags otimizadas
- **Performance** - Carregamento rápido
- **Cardápio Integrado** - 3 categorias de produtos

---

## 🛠 Tecnologias

### Core
- **HTML5** - Estrutura semântica
- **CSS3** - Grid, Flexbox, variáveis CSS
- **JavaScript** - Vanilla JS puro

### Bibliotecas
- **AOS** - Animações (unpkg.com/aos@2.3.1)
- **Google Fonts** - Playfair Display + Inter

---

## 📁 Estrutura

```
projeto-cafeteria/
│
├── index.html          # Página principal
├── style.css           # Estilos
├── script.js           # Funcionalidades
│
└── assets/
    ├── icons/
    │   └── coffee.svg      # Logo xícara
    │
    └── img/
        ├── img01.avif      # Hero
        ├── img02.avif      # Sobre
        └── img03.avif      # Contato
```

---

## 📄 Seções

### 1. Hero
- Título impactante
- 2 CTAs (Cardápio + Pedido)
- Imagem ambiente
- Layout 2 colunas

### 2. Sobre
- 3 cards de diferenciais:
  - Cafés Especiais
  - Confeitaria Própria
  - Bebidas Exclusivas
- Info com imagem + texto
- Horário de funcionamento

### 3. Cardápio
- 3 categorias com acordeão:
  - **Cafés Especiais** (6 itens)
  - **Bebidas Quentes** (5 itens)
  - **Doces & Acompanhamentos** (6 itens)
- Preços visíveis
- CTA final

### 4. Contato
- Imagem localização
- 4 cards:
  - WhatsApp
  - Email
  - Instagram
  - Endereço

### 5. Footer
- Logo e informações legais
- CNPJ
- Créditos

---

## ⚙️ Funcionalidades JavaScript

```javascript
initAOS()              // Animações
setupSmoothScroll()    // Scroll suave
setupScrollTop()       // Botão voltar ao topo
initScrollSpy()        // Highlight link ativo
checkOpeningHours()    // Verifica horário
```

---

## 🎨 Design System

### Cores
```css
--bg: #faf8f5              /* Creme claro */
--bg-dark: #1a1410         /* Marrom escuro */
--primary: #c17a4f         /* Terracota */
--primary-dark: #9d5f3d    /* Terracota escuro */
--accent: #e8dcc8          /* Bege suave */
--text: #2a1810            /* Marrom texto */
```

### Tipografia
- **Títulos**: Playfair Display (serif elegante)
- **Corpo**: Inter (sans-serif moderna)

---

## 🔧 Personalização

### 1. Informações da Cafeteria
**index.html:**
- Linha 10-13: Meta descriptions
- Linha 25: Title
- Linha 53: Nome da marca
- Linha 70-72: Título hero
- Linha 113-144: Cards sobre
- Linha 146-168: Info + horário

### 2. Cardápio
**Linhas 177-333:**
- Editar 3 categorias
- Trocar nomes, descrições e preços
- Adicionar/remover itens

### 3. Contato
**Linhas 352-410:**
- **WhatsApp**: `https://wa.me/55SEUNUMERO`
- **Email**: `mailto:seu@email.com`
- **Instagram**: `https://www.instagram.com/seuusuario/`
- **Endereço**: texto completo

### 4. Cores
**style.css (linhas 1-35):**
```css
--primary: #c17a4f;    /* Sua cor principal */
--bg: #faf8f5;         /* Fundo claro */
```

### 5. Imagens
Substituir em `assets/img/`:
- `img01.avif` - Ambiente cafeteria (800x600px)
- `img02.avif` - Interior (800x400px)
- `img03.avif` - Localização (600x500px)
- `coffee.svg` - Logo xícara

---

## 🌐 Deploy Gratuito

### 🚀 Opção 1: Vercel

**Passos:**
1. Criar repo no [GitHub](https://github.com)
2. Upload dos arquivos
3. Acessar [Vercel](https://vercel.com)
4. "Sign Up" com GitHub
5. "Import Project"
6. Deploy automático

**URL:** `seu-projeto.vercel.app`

---

### 🎯 Opção 2: Netlify

**Método Rápido (Drag & Drop):**
1. Acessar [Netlify](https://netlify.com)
2. Criar conta
3. Arrastar pasta do projeto
4. Pronto!

**URL:** `random-name.netlify.app`

---

### ⚡ Opção 3: Cloudflare Pages

**Passos:**
1. Criar conta no [Cloudflare Pages](https://pages.cloudflare.com)
2. "Direct Upload"
3. Arrastar pasta
4. Deploy

**URL:** `seu-projeto.pages.dev`

---

### 📦 Opção 4: GitHub Pages

**Passos:**
1. Upload no GitHub
2. Settings → Pages
3. Source: "main"
4. Save

**URL:** `usuario.github.io/nome-repo`

---

## 📊 Comparação Plataformas

| Plataforma | Facilidade | HTTPS | Domínio |
|------------|------------|-------|---------|
| Vercel | ⭐⭐⭐⭐⭐ | ✅ | ✅ Grátis |
| Netlify | ⭐⭐⭐⭐⭐ | ✅ | ✅ Grátis |
| Cloudflare | ⭐⭐⭐⭐ | ✅ | ✅ Grátis |
| GitHub Pages | ⭐⭐⭐ | ✅ | ⚠️ Limitado |

---

## 🔗 Domínio Próprio

1. Comprar domínio (Registro.br, Namecheap, GoDaddy)
2. Configurar DNS na plataforma escolhida
3. Adicionar nameservers ou records A/CNAME
4. Aguardar propagação (15min-48h)
5. HTTPS automático

---

## 🔄 Atualizar Site

**Com GitHub:**
```bash
git add .
git commit -m "Atualização"
git push
```

**Drag & Drop:**
Arrastar arquivos novamente

---

## ✅ Checklist

- [ ] Testar todos navegadores
- [ ] Verificar responsividade
- [ ] Trocar dados de exemplo
- [ ] Testar links (WhatsApp, email, Instagram)
- [ ] Otimizar imagens (< 500KB)
- [ ] Testar no [PageSpeed](https://pagespeed.web.dev/)

---

## 🆘 Problemas Comuns

**Imagens não carregam:**
- Verificar caminhos: `./assets/img/img01.avif`
- Conferir upload dos arquivos

**Links não funcionam:**
- WhatsApp: `https://wa.me/5511999999999`
- Email: `mailto:contato@email.com`

**Animações não aparecem:**
- Verificar se AOS está carregando (F12 → Console)

---

## 📜 Licença

MIT License - Uso livre para fins comerciais

---

## 👨‍💻 Créditos

**Desenvolvido por**: Guilherme Ribeiro  
**GitHub**: [github.com/devgbr86](https://github.com/devgbr86)  
**Ano**: 2025

---

**☕ Perfeito para cafeterias, coffee shops e negócios gastronômicos!**