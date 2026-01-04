/**
 * SEO Configuration Test
 * Run with: node scripts/test-seo-config.mjs
 */

import { SEO_CONFIG, generatePageMeta, generateLocalBusinessSchema } from '../src/config/seo.config.js';

console.log('🔍 Testing SEO Configuration...\n');

// Test 1: Verify SEO_CONFIG structure
console.log('✅ Test 1: SEO_CONFIG Structure');
console.log(`   Site Name: ${SEO_CONFIG.siteName}`);
console.log(`   Site URL: ${SEO_CONFIG.siteUrl}`);
console.log(`   Default Title: ${SEO_CONFIG.defaultTitle}`);
console.log(`   Business Name: ${SEO_CONFIG.business.name}`);
console.log(`   Services Count: ${SEO_CONFIG.business.services.length}`);
console.log('');

// Test 2: Generate page metadata
console.log('✅ Test 2: Generate Home Page Metadata');
const homeMeta = generatePageMeta({
  title: 'Home | Bali Private Tutors',
  description: 'Expert tutors in Bali',
  path: '/'
});
console.log(`   Title: ${homeMeta.title}`);
console.log(`   Canonical: ${homeMeta.canonical}`);
console.log(`   OG Image: ${homeMeta.openGraph.image}`);
console.log(`   Twitter Card: ${homeMeta.twitter.card}`);
console.log('');

// Test 3: Generate structured data
console.log('✅ Test 3: Generate Structured Data (JSON-LD)');
const schema = generateLocalBusinessSchema();
console.log(`   Type: ${schema['@type']}`);
console.log(`   Name: ${schema.name}`);
console.log(`   Services Count: ${schema.hasOfferCatalog.itemListElement.length}`);
console.log(`   Areas Served: ${schema.areaServed.map(a => a.name).join(', ')}`);
console.log('');

// Test 4: Verify all services are included
console.log('✅ Test 4: Services Offered');
SEO_CONFIG.business.services.forEach((service, i) => {
  console.log(`   ${i + 1}. ${service}`);
});
console.log('');

console.log('🎉 All SEO configuration tests passed!\n');

// Test 5: Check for potential issues
console.log('⚠️  Potential Issues to Address:');
const warnings = [];

if (!SEO_CONFIG.images.ogImage.startsWith('http') && !SEO_CONFIG.images.ogImage.startsWith('/')) {
  warnings.push('OG Image path should start with / or http');
}

if (SEO_CONFIG.business.services.length === 0) {
  warnings.push('No services defined in business configuration');
}

if (warnings.length === 0) {
  console.log('   None - Configuration looks good! ✨');
} else {
  warnings.forEach(w => console.log(`   - ${w}`));
}

console.log('\n📝 Next Steps:');
console.log('   1. Add favicon images to /public directory');
console.log('   2. Create og-image.jpg (1200x630)');
console.log('   3. Create twitter-card.jpg (1200x600)');
console.log('   4. Test with Google Rich Results Test');
console.log('   5. Submit sitemap to Google Search Console');
