
import React from "react";
import Recommendation from "./Recommendation";
import { cn } from "@/lib/utils";

interface RecommendationGridProps {
  title: string;
  description?: string;
  items: {
    title: string;
    description: string;
    images: string[];
    tag?: string;
  }[];
  className?: string;
}

const RecommendationGrid: React.FC<RecommendationGridProps> = ({
  title,
  description,
  items,
  className,
}) => {
  return (
    <section className={cn("py-16 container mx-auto px-4 sm:px-6 lg:px-8", className)}>
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">{title}</h2>
        {description && (
          <p className="text-muted-foreground text-lg animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="animate-fade-up" 
            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
          >
            <Recommendation
              title={item.title}
              description={item.description}
              images={item.images}
              tag={item.tag}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendationGrid;
