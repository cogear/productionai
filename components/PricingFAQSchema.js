export default function PricingFAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does job-based pricing work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You only pay for the jobs you create. With Pay As You Go, you're charged $89 per job weekly. With packages, you purchase job credits upfront at discounted rates."
        }
      },
      {
        "@type": "Question",
        "name": "Do job credits expire?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Job credits are good for 30 days from the date of purchase. Use your credits within this time period."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in 'full access to all features'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every pricing tier includes all platform features - AI takeoffs, order fulfillment, crew management, weather forecasting, permit scheduling, notifications, and more."
        }
      },
      {
        "@type": "Question",
        "name": "Can I mix Pay As You Go with packages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! You can start with Pay As You Go and purchase packages whenever you want to save money on multiple jobs."
        }
      },
      {
        "@type": "Question",
        "name": "Are add-ons available for all pricing tiers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, both One-Click Reports ($20) and Aerial Measurements ($40) can be added to any job, regardless of your pricing plan."
        }
      },
      {
        "@type": "Question",
        "name": "What payment methods do you accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept all major credit cards and invoice weekly for Pay As You Go. Package purchases are charged immediately."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
