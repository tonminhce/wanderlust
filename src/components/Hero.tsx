
import React from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  buttonText?: string;
  buttonLink?: string;
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  alignment?: "left" | "center" | "right";
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink,
  children,
  size = "large",
  alignment = "center",
}) => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: "smooth",
    });
  };

  const heights = {
    small: "min-h-[40vh]",
    medium: "min-h-[60vh]",
    large: "min-h-screen",
  };

  const textAlignments = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div
      className={cn(
        "relative flex flex-col justify-center px-4 sm:px-6 lg:px-8",
        heights[size]
      )}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img
            src={backgroundImage}
            alt="Background"
            className="w-full h-full object-cover object-center animate-blur-in"
          />
        </div>
      )}

      {/* Content */}
      <div
        className={cn(
          "container relative z-20 mx-auto flex flex-col justify-center mb-12",
          textAlignments[alignment]
        )}
      >
        <div
          className={cn(
            "max-w-3xl mx-auto flex flex-col gap-6",
            alignment === "center" && "mx-auto",
            alignment === "right" && "ml-auto",
            alignment === "left" && "mr-auto"
          )}
        >
          <div>
            <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Discover Your Next Adventure
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              {title}
            </h1>
          </div>

          {subtitle && (
            <p
              className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              {subtitle}
            </p>
          )}

          {children}

          {buttonText && (
            <div className="mt-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => {
                  if (buttonLink) {
                    window.location.href = buttonLink;
                  }
                }}
              >
                {buttonText}
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      {size === "large" && (
        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-float"
          onClick={scrollToContent}
        >
          <ChevronDown className="w-10 h-10 text-white opacity-80" />
        </div>
      )}
    </div>
  );
};

export default Hero;
