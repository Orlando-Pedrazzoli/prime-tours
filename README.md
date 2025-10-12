# Premiere Tours Portugal - Website

Website profissional para serviço de transporte privado e passeios turísticos em Portugal, baseado em Oeiras.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Framer Motion** - Animações fluidas
- **React Hook Form + Zod** - Validação de formulários
- **EmailJS** - Envio de emails
- **Lucide Icons** - Biblioteca de ícones

## 📋 Pré-requisitos

- Node.js 18+ instalado
- NPM ou Yarn

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/premiere-tours.git
cd premiere-tours
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:

```bash
cp .env.example .env.local
```

4. Edite o arquivo `.env.local` com suas credenciais:
   - Crie uma conta no [EmailJS](https://www.emailjs.com/)
   - Configure um serviço de email
   - Crie um template de email
   - Adicione as credenciais ao arquivo

## 🏃‍♂️ Executando o Projeto

### Modo de Desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### Build de Produção:

```bash
npm run build
npm run start
# ou
yarn build
yarn start
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx       # Layout principal
│   └── page.tsx          # Página inicial
├── components/
│   ├── ui/              # Componentes de UI reutilizáveis
│   ├── layout/          # Header e Footer
│   ├── sections/        # Seções da página
│   └── forms/           # Formulários
├── data/
│   └── tours.ts         # Dados dos tours e configurações
├── lib/
│   └── utils.ts         # Funções utilitárias
└── styles/
    └── globals.css      # Estilos globais
```

## 🎨 Personalização

### Cores

Edite as cores no arquivo `tailwind.config.ts`:

- Primary: Azul (#005EB8)
- Secondary: Dourado (#FFD700)
- Accent: Vermelho (#FF6B6B)

### Dados dos Tours

Edite o arquivo `src/data/tours.ts` para:

- Adicionar/remover tours
- Alterar preços
- Atualizar descrições
- Modificar itinerários

### Informações de Contacto

No arquivo `src/data/tours.ts`, atualize o objeto `businessInfo`:

```typescript
export const businessInfo = {
  name: 'Premiere Tours Portugal',
  email: 'pedrazzoliorlando@gmail.com',
  phone: '+351 912 164 220',
  whatsapp: '351912164220',
  location: 'Oeiras, Lisboa',
  // ...
};
```

## 📱 Funcionalidades

- ✅ Design responsivo (mobile-first)
- ✅ Multi-idioma (PT, EN, ES, FR)
- ✅ Formulário de reserva com validação
- ✅ Galeria de imagens com lightbox
- ✅ Botão flutuante do WhatsApp
- ✅ Animações suaves com Framer Motion
- ✅ SEO otimizado
- ✅ Performance otimizada (Lazy loading, otimização de imagens)
- ✅ Seção de FAQ interativa
- ✅ Depoimentos de clientes
- ✅ Filtros de tours por categoria

## 🚀 Deploy

### Vercel (Recomendado)

1. Instale a CLI da Vercel:

```bash
npm i -g vercel
```

2. Execute o deploy:

```bash
vercel
```

### Netlify

1. Build o projeto:

```bash
npm run build
```

2. Arraste a pasta `.next` para o Netlify

## 📧 Configuração do EmailJS

1. Crie uma conta em [emailjs.com](https://www.emailjs.com/)
2. Adicione um serviço de email (Gmail, Outlook, etc.)
3. Crie um template com as seguintes variáveis:
   - `{{name}}` - Nome do cliente
   - `{{email}}` - Email do cliente
   - `{{phone}}` - Telefone
   - `{{tour}}` - Tour selecionado
   - `{{date}}` - Data pretendida
   - `{{passengers}}` - Número de passageiros
   - `{{message}}` - Mensagem adicional

## 🛠️ Manutenção

### Atualizar Dependências:

```bash
npm update
# ou
yarn upgrade
```

### Verificar Vulnerabilidades:

```bash
npm audit
npm audit fix
```

## 📄 Licença

Este projeto é propriedade de Premiere Tours Portugal. Todos os direitos reservados.

## 👤 Contacto

**Pedro Orlando**

- Email: pedrazzoliorlando@gmail.com
- WhatsApp: +351 912 164 220
- Localização: Oeiras, Lisboa, Portugal

---

Desenvolvido com ❤️ para Premiere Tours Portugal
