#!/usr/bin/env node

/**
 * 🔍 Script de Validação de Rotas
 *
 * Este script verifica se todos os slugs do sitemap.xml
 * estão presentes no middleware.ts (validSlugs)
 *
 * USO:
 * node scripts/validate-routes.js
 *
 * ou adicione ao package.json:
 * "scripts": {
 *   "validate-routes": "node scripts/validate-routes.js",
 *   "prebuild": "npm run validate-routes"
 * }
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Iniciando validação de rotas...\n');

// ============================================
// 1. LER E EXTRAIR SLUGS DO SITEMAP.XML
// ============================================
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');

if (!fs.existsSync(sitemapPath)) {
  console.error('❌ Arquivo sitemap.xml não encontrado em:', sitemapPath);
  process.exit(1);
}

const sitemap = fs.readFileSync(sitemapPath, 'utf-8');

// Extrair todas as URLs de tours do sitemap
const sitemapSlugs = [...sitemap.matchAll(/tours\/([^<]+)</g)].map(match =>
  match[1].trim()
);

console.log(`✅ Sitemap.xml encontrado: ${sitemapSlugs.length} tours`);

// ============================================
// 2. LER E EXTRAIR validSlugs DO MIDDLEWARE
// ============================================
const middlewarePath = path.join(__dirname, '../src/middleware.ts');

if (!fs.existsSync(middlewarePath)) {
  console.error('❌ Arquivo middleware.ts não encontrado em:', middlewarePath);
  process.exit(1);
}

const middleware = fs.readFileSync(middlewarePath, 'utf-8');

// Extrair array validSlugs
const validSlugsMatch = middleware.match(/validSlugs\s*=\s*\[([\s\S]*?)\]/);

if (!validSlugsMatch) {
  console.error('❌ Array validSlugs não encontrado no middleware.ts');
  process.exit(1);
}

const validSlugs = validSlugsMatch[1]
  .match(/'([^']+)'|"([^"]+)"/g)
  .map(s => s.replace(/['"]/g, ''));

console.log(
  `✅ Middleware.ts encontrado: ${validSlugs.length} slugs válidos\n`
);

// ============================================
// 3. COMPARAR SLUGS
// ============================================

// Encontrar slugs que estão no sitemap mas NÃO no middleware
const missingSlugs = sitemapSlugs.filter(slug => !validSlugs.includes(slug));

// Encontrar slugs que estão no middleware mas NÃO no sitemap
const extraSlugs = validSlugs.filter(slug => !sitemapSlugs.includes(slug));

// ============================================
// 4. REPORTAR RESULTADOS
// ============================================
let hasErrors = false;

if (missingSlugs.length > 0) {
  hasErrors = true;
  console.error(
    '🔴 ERRO CRÍTICO: Slugs no sitemap.xml mas FALTANDO no middleware.ts:\n'
  );
  missingSlugs.forEach(slug => {
    console.error(`   ❌ '${slug}'`);
  });
  console.error(
    '\n⚠️  Isso causará REDIRECIONAMENTOS e impedirá a indexação do Google!\n'
  );
}

if (extraSlugs.length > 0) {
  console.warn('⚠️  AVISO: Slugs no middleware.ts mas NÃO no sitemap.xml:\n');
  extraSlugs.forEach(slug => {
    console.warn(`   ⚠️  '${slug}'`);
  });
  console.warn(
    '\n💡 Considere remover esses slugs ou adicionar ao sitemap.xml\n'
  );
}

if (!hasErrors && extraSlugs.length === 0) {
  console.log('✅ PERFEITO! Todos os slugs estão sincronizados!\n');
  console.log('📊 Resumo:');
  console.log(`   • Sitemap.xml: ${sitemapSlugs.length} tours`);
  console.log(`   • Middleware.ts: ${validSlugs.length} slugs válidos`);
  console.log(`   • Status: 100% sincronizado ✨\n`);
  process.exit(0);
}

// ============================================
// 5. GERAR CÓDIGO CORRIGIDO (se houver erros)
// ============================================
if (hasErrors) {
  console.log('\n📝 Código corrigido para o middleware.ts:\n');
  console.log('const validSlugs = [');
  sitemapSlugs.forEach(slug => {
    console.log(`  '${slug}',`);
  });
  console.log('];\n');

  process.exit(1);
}

if (extraSlugs.length > 0) {
  process.exit(0); // Avisos não devem falhar o build
}
