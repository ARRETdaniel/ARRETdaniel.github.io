import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  canonicalUrl?: string;
}

/**
 * SEO component for better search engine optimization
 * This component should be included in all pages
 */
const SEO = ({
  title,
  description,
  keywords = [],
  ogImage = '/assets/images/og-image.png',
  ogType = 'website',
  canonicalUrl,
}: SEOProps) => {
  // Base URL for the website
  const baseUrl = 'https://arretdaniel.github.io';
  
  // Full canonical URL
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;
  
  // Default title template
  const titleTemplate = `${title} | Daniel Terra Gomes - Computer Scientist`;
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{titleTemplate}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={titleTemplate} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonicalUrl} />
      <meta property="twitter:title" content={titleTemplate} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${baseUrl}${ogImage}`} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.svg" />
    </Head>
  );
};

export default SEO;
