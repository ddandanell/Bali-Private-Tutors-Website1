import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generatePageMeta } from '../config/seo.config';

/**
 * SEO Component - Reusable component for managing page metadata
 * @param {Object} props - SEO metadata properties
 */
const SEO = ({ 
  title,
  description,
  keywords,
  path,
  image,
  imageAlt,
  type = 'website',
  noindex = false,
  structuredData = null
}) => {
  const meta = generatePageMeta({
    title,
    description,
    keywords,
    path,
    image,
    imageAlt,
    type,
    noindex
  });

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      {meta.keywords && <meta name="keywords" content={meta.keywords} />}
      <link rel="canonical" href={meta.canonical} />
      {meta.noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={meta.openGraph.type} />
      <meta property="og:url" content={meta.openGraph.url} />
      <meta property="og:title" content={meta.openGraph.title} />
      <meta property="og:description" content={meta.openGraph.description} />
      <meta property="og:site_name" content={meta.openGraph.siteName} />
      <meta property="og:image" content={meta.openGraph.image} />
      <meta property="og:image:alt" content={meta.openGraph.imageAlt} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={meta.twitter.card} />
      <meta name="twitter:title" content={meta.twitter.title} />
      <meta name="twitter:description" content={meta.twitter.description} />
      <meta name="twitter:image" content={meta.twitter.image} />
      <meta name="twitter:image:alt" content={meta.twitter.imageAlt} />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
