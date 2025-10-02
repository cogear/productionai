export default function VideoSchema() {
  const videos = [
    {
      name: "Getting Started with ProductionAI",
      description: "Learn the basics of how ProductionAI streamlines your construction project management.",
      embedUrl: "https://www.youtube.com/embed/5accT-ulasU",
      thumbnailUrl: "https://img.youtube.com/vi/5accT-ulasU/maxresdefault.jpg",
      uploadDate: "2024-01-01",
    },
    {
      name: "Managing Your Projects",
      description: "Discover how to effectively organize and track your construction projects in real-time.",
      embedUrl: "https://www.youtube.com/embed/hrwZCnzm-pk",
      thumbnailUrl: "https://img.youtube.com/vi/hrwZCnzm-pk/maxresdefault.jpg",
      uploadDate: "2024-01-01",
    },
    {
      name: "JobNimbus Integration",
      description: "Learn how to connect and sync your JobNimbus data with ProductionAI for seamless workflow integration.",
      embedUrl: "https://www.youtube.com/embed/_bV8DKXnWXw",
      thumbnailUrl: "https://img.youtube.com/vi/_bV8DKXnWXw/maxresdefault.jpg",
      uploadDate: "2024-01-01",
    },
    {
      name: "Acculynx Integration",
      description: "Discover how to integrate Acculynx with ProductionAI to streamline your roofing project management.",
      embedUrl: "https://www.youtube.com/embed/_5dW3UgPZQU",
      thumbnailUrl: "https://img.youtube.com/vi/_5dW3UgPZQU/maxresdefault.jpg",
      uploadDate: "2024-01-01",
    },
  ];

  const videoSchemas = videos.map(video => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.name,
    "description": video.description,
    "thumbnailUrl": video.thumbnailUrl,
    "uploadDate": video.uploadDate,
    "embedUrl": video.embedUrl,
    "duration": "PT5M",
    "publisher": {
      "@type": "Organization",
      "name": "Production AI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.productionai.ai/Logo.png"
      }
    }
  }));

  return (
    <>
      {videoSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
