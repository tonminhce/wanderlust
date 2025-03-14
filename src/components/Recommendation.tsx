
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface RecommendationProps {
  title: string;
  description: string;
  images: string[];
  className?: string;
  tag?: string;
}

const Recommendation: React.FC<RecommendationProps> = ({
  title,
  description,
  images,
  className,
  tag,
}) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-2xl transition-all duration-500",
        className
      )}
    >
      <div className="relative aspect-[3/4] md:aspect-[4/3] lg:aspect-[16/9] w-full h-full overflow-hidden">
        {/* Image Grid */}
        <div className="grid grid-cols-2 w-full h-full gap-2">
          {images.map((image, i) => (
            <div 
              key={i} 
              className="relative overflow-hidden rounded-lg"
            >
              <img
                src={image}
                alt={`${title} - image ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out image-hover-effect"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300"></div>

        {/* Tag */}
        {tag && (
          <span className="absolute top-4 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full font-medium z-10">
            {tag}
          </span>
        )}

        {/* Content */}
        <div className="absolute bottom-0 left-0 p-6 z-10 w-full">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:translate-y-0 transform transition-transform duration-500 ease-out">
            {title}
          </h3>
          <p className="text-white/80 text-sm md:text-base mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
            {description}
          </p>
          <div className="flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
            <span className="mr-2">Explore more</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
