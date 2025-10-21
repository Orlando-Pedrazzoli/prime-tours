#!/bin/bash

# Premiere Tours Portugal - Script de Deploy para Produção

echo "================================================"
echo "  Go Portugal Tours - Build & Deploy      "
echo "================================================"
echo ""

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Verificar se todas as dependências estão instaladas
echo "📦 Verificando dependências..."
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}Instalando dependências...${NC}"
    npm install
fi

# Verificar arquivo .env.local
if [ ! -f .env.local ]; then
    echo -e "${RED}❌ Erro: Arquivo .env.local não encontrado!${NC}"
    echo "Por favor, configure o arquivo .env.local com suas credenciais."
    exit 1
fi

# Limpar builds anteriores
echo "🧹 Limpando builds anteriores..."
rm -rf .next
rm -rf out

# Executar testes (se houver)
# echo "🧪 Executando testes..."
# npm test

# Executar build
echo "🔨 Criando build de produção..."
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build falhou!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build concluído com sucesso!${NC}"

# Opções de deploy
echo ""
echo "Escolha a plataforma de deploy:"
echo "1) Vercel"
echo "2) Netlify"
echo "3) Build local apenas"
echo "4) Exportar arquivos estáticos"
echo ""
read -p "Opção: " deploy_option

case $deploy_option in
    1)
        echo ""
        echo "📤 Fazendo deploy para Vercel..."
        if ! command -v vercel &> /dev/null; then
            echo "Instalando Vercel CLI..."
            npm i -g vercel
        fi
        vercel --prod
        ;;
    2)
        echo ""
        echo "📤 Preparando para Netlify..."
        echo "1. Faça login em netlify.com"
        echo "2. Arraste a pasta '.next' para o Netlify"
        echo "3. Configure as variáveis de ambiente no painel do Netlify"
        ;;
    3)
        echo ""
        echo -e "${GREEN}✅ Build local concluído!${NC}"
        echo "Para executar em produção:"
        echo "  npm run start"
        ;;
    4)
        echo ""
        echo "📁 Exportando arquivos estáticos..."
        npm run build
        if [ $? -eq 0 ]; then
            echo -e "${GREEN}✅ Exportação concluída!${NC}"
            echo "Arquivos disponíveis na pasta 'out'"
        fi
        ;;
    *)
        echo -e "${RED}Opção inválida${NC}"
        exit 1
        ;;
esac

echo ""
echo "================================================"
echo -e "${GREEN}  Deploy Finalizado!${NC}"
echo "================================================"
echo ""
echo "📌 Próximos passos:"
echo "  1. Teste o site em produção"
echo "  2. Configure o domínio (se aplicável)"
echo "  3. Ative HTTPS/SSL"
echo "  4. Configure analytics (opcional)"
echo ""