#!/bin/bash

# Premiere Tours Portugal - Script de Instalação
# Este script configura o ambiente de desenvolvimento

echo "======================================"
echo "  Premiere Tours Portugal - Setup     "
echo "======================================"
echo ""

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null
then
    echo "❌ Node.js não está instalado. Por favor, instale Node.js 18+ primeiro."
    echo "Visite: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js encontrado: $(node -v)"

# Verificar se npm está instalado
if ! command -v npm &> /dev/null
then
    echo "❌ npm não está instalado."
    exit 1
fi

echo "✅ npm encontrado: $(npm -v)"
echo ""

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

# Criar arquivo .env.local se não existir
if [ ! -f .env.local ]; then
    echo ""
    echo "📝 Criando arquivo .env.local..."
    cp .env.example .env.local
    echo "✅ Arquivo .env.local criado!"
    echo ""
    echo "⚠️  IMPORTANTE: Configure as suas credenciais no arquivo .env.local"
    echo "   1. Crie uma conta em https://www.emailjs.com/"
    echo "   2. Configure um serviço de email"
    echo "   3. Crie um template de email"
    echo "   4. Adicione as credenciais ao arquivo .env.local"
else
    echo "✅ Arquivo .env.local já existe"
fi

echo ""
echo "======================================"
echo "  Instalação Concluída!              "
echo "======================================"
echo ""
echo "Para iniciar o servidor de desenvolvimento:"
echo "  npm run dev"
echo ""
echo "O site estará disponível em:"
echo "  http://localhost:3000"
echo ""
echo "Para build de produção:"
echo "  npm run build"
echo "  npm run start"
echo ""