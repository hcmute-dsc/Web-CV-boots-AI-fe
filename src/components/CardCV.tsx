import React from "react";

const CardCV = ({
  imageUrl = "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  imageAlt = "CV Template",
  title = "CV Title",
  description = "Professional CV template for your career",
  badges = [
    { text: "NEW", type: "secondary" },
    { text: "POPULAR", type: "accent" },
  ],
  tags = [
    { text: "Design", type: "outline" },
    { text: "Modern", type: "outline" },
  ],
  cardWidth = "w-80",
  cardHeight = "h-125",
  shadow = "shadow-md",
  imageHeight = "h-100",
  contentPadding = "p-4",
}) => {
  return (
    <div className={`card bg-base-100 ${cardWidth} ${cardHeight} ${shadow}`}>
      <figure className={`overflow-hidden ${imageHeight}`}>
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className={`card-body ${contentPadding}`}>
        <div className="flex items-start justify-between">
          <h2 className="card-title">{title}</h2>
          <div className="flex gap-1">
            {badges.map((badge, index) => (
              <div key={index} className={`badge badge-${badge.type}`}>
                {badge.text}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-2">{description}</p>
        <div className="card-actions justify-end mt-4">
          {tags.map((tag, index) => (
            <div key={index} className={`badge badge-${tag.type}`}>
              {tag.text}
            </div>
          ))}
        </div>
      </div>
      <button className="btn btn-info">Sử dụng mẫu này</button>
    </div>
  );
};

export default CardCV;
