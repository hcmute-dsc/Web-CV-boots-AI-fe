import { useState, useEffect } from "react";
import CVCard from "./../components/CVCard";
import CVCardSkeleton from "./../components/CVCardSkeleton";
import ModernCVTemplate from "./../components/templates/ModernCVTemplate";
import MinimalistCVTemplate from "./../components/templates/MinimalistCVTemplate";
import CreativeCVTemplate from "./../components/templates/CreativeCVTemplate";

const CVSamples = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const cvTemplates = [
    {
      title: "Marketing CV",
      description:
        " Modern design, stands out with bright colors and smart layout.",
      image:
        "https://static.vecteezy.com/system/resources/previews/002/457/612/non_2x/marketing-cute-stickers-template-set-vector.jpg",
      template: <ModernCVTemplate />,
    },
    {
      title: "Harvard CV",
      description:
        "Minimalist, elegant design with soft colors and clear layout.",
      image:
        "https://i.pinimg.com/736x/df/24/76/df247616f5b5720ed9eaac72d94ffadc.jpg",
      template: <MinimalistCVTemplate />,
    },
    {
      title: "Business CV",
      description:
        "Creative, unique design with bold colors and flexible layout.",
      image:
        "https://www.mba-madrid.com/wp-content/uploads/2022/08/Business-Intelligence.png",
      template: <CreativeCVTemplate />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3 text-gray-800">Mẫu CV</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá các mẫu CV đa dạng và phong cách để tạo ấn tượng với nhà
            tuyển dụng.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <>
              <CVCardSkeleton />
              <CVCardSkeleton />
              <CVCardSkeleton />
            </>
          ) : (
            <>
              {cvTemplates.map((template, index) => (
                <CVCard
                  key={index}
                  title={template.title}
                  description={template.description}
                  image={template.image}
                  template={template.template}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CVSamples;
