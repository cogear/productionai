export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Production AI Platform",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "89",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "89",
        "priceCurrency": "USD",
        "unitText": "per job"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "127"
    },
    "description": "AI-powered construction management platform that streamlines production operations with automated communications, task management, and comprehensive job tracking.",
    "featureList": [
      "AI-assisted task tracking",
      "Automated job communications",
      "AccuLynx integration",
      "JobNimbus integration",
      "Team coordination",
      "Document generation",
      "Photo management",
      "AI voice assistant"
    ],
    "screenshot": "https://www.productionai.ai/hero.png",
    "publisher": {
      "@type": "Organization",
      "name": "Production AI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.productionai.ai/Logo.png"
      }
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Production AI Platform",
    "url": "https://www.productionai.ai",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.productionai.ai/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const organizationDetails = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Production AI",
    "url": "https://www.productionai.ai",
    "logo": "https://www.productionai.ai/Logo.png",
    "description": "Leading AI-powered construction management platform for contractors",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "support@productionai.com",
      "contactType": "Customer Support"
    },
    "sameAs": [
      "https://www.youtube.com/channel/UCZbBkM2LT7YgBl0KMhBnpKA"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationDetails) }}
      />
    </>
  );
}
