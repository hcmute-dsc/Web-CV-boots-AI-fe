import React from "react";
import CardCV from "../components/CardCV";
const CVSamples = () => {
  const templates = [
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Professional CV",
      description: "Modern design with clean layout",
      cardHeight: "h-150",
      imageHeight: "h-100",
      badges: [
        { text: "HOT", type: "primary" },
        { text: "TRENDING", type: "success" },
      ],
      tags: [
        { text: "Minimalist", type: "outline" },
        { text: "ATS", type: "outline-info" },
      ],
      shadow: "shadow-lg",
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Primary CV",
      description: "Modern design with clean layout",
      cardHeight: "h-150",
      imageHeight: "h-100",
      badges: [
        { text: "Primary", type: "primary" },
        { text: "Classic", type: "success" },
      ],
      tags: [
        { text: "Minimalist", type: "outline" },
        { text: "ATS", type: "outline-info" },
      ],
      shadow: "shadow-lg",
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Professional CV",
      description: "Modern design with clean layout",
      cardHeight: "h-150",
      imageHeight: "h-100",
      badges: [
        { text: "HOT", type: "primary" },
        { text: "TRENDING", type: "success" },
      ],
      tags: [
        { text: "Minimalist", type: "outline" },
        { text: "ATS", type: "outline-info" },
      ],
      shadow: "shadow-lg",
    },
    {
      imageUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Professional CV",
      description: "Modern design with clean layout",
      cardHeight: "h-150",
      imageHeight: "h-100",
      badges: [
        { text: "HOT", type: "primary" },
        { text: "TRENDING", type: "success" },
      ],
      tags: [
        { text: "Minimalist", type: "outline" },
        { text: "ATS", type: "outline-info" },
      ],
      shadow: "shadow-lg",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-10 ml-20 mr-20">
        {templates.map((template, index) => (
          <CardCV
            key={index}
            title={template.title}
            description={template.description}
            imageUrl={template.imageUrl}
            badges={template.badges}
            tags={template.tags}
            cardWidth="w-full"
            shadow="shadow-md hover:shadow-lg transition-shadow"
          />
        ))}
      </div>
    </div>
  );
};

export default CVSamples;
