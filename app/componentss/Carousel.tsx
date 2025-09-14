"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import naruto1 from "@/assets/Naruto Shippuden __ Minato Naruto Kakashi.jpeg";
import bleach from "@/assets/Ulquiorra & Ichigo _ Wallpaper HD.jpeg";
import demonslayer from "@/assets/demon slayer.jpeg";
import aot from "@/assets/✰Attack on Titan.jpeg";
import tanjiro from "@/assets/tanjiro.jpeg";
import zenitsu from "@/assets/zenitsu.jpeg";
import sukuna from "@/assets/sukuna.jpeg";

const heroSlides = [
  {
    id: 1,
    badge: "GENERATIVE MODEL",
    title: "WAN 2.2",
    subtitle: "WAN 2.2 Image generation",
    description:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    buttonText: "Try WAN 2.2",
    backgroundImage: naruto1.src,
  },
  {
    id: 2,
    badge: "FLUX MODEL",
    title: "Open Sour",
    subtitle: "FLUX.1 Krea",
    description:
      "We're making the weights for our FLUX.1 Krea model open source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    buttonText: "Learn More",
    backgroundImage: bleach.src,
  },
  {
    id: 3,
    badge: "AI UPSCALER",
    title: "Ultra HD",
    subtitle: "4K Enhancement",
    description:
      "Transform your images to stunning 4K resolution with our advanced AI upscaling technology. Perfect for professional photography and digital art.",
    buttonText: "Try Upscaler",
    backgroundImage: demonslayer.src,
  },
  {
    id: 4,
    badge: "STYLE TRANSFER",
    title: "ArtFusion",
    subtitle: "Neural Style Transfer",
    description:
      "Apply artistic styles from famous paintings to your photos using cutting-edge neural networks. Create unique masterpieces in seconds.",
    buttonText: "Explore Styles",
    backgroundImage: aot.src,
  },
  {
    id: 5,
    badge: "VIDEO AI",
    title: "MotionCraft",
    subtitle: "AI Video Generation",
    description:
      "Create stunning videos from text prompts or transform static images into dynamic animations with our revolutionary video AI technology.",
    buttonText: "Generate Video",
    backgroundImage: tanjiro.src,
  },
  {
    id: 6,
    badge: "FACE ENHANCE",
    title: "PortraitPro",
    subtitle: "AI Portrait Enhancement",
    description:
      "Enhance facial features, remove blemishes, and perfect lighting in portraits using advanced AI algorithms designed for professional results.",
    buttonText: "Enhance Now",
    backgroundImage: zenitsu.src,
  },
  {
    id: 7,
    badge: "3D RENDER",
    title: "Dimension",
    subtitle: "3D Model Generator",
    description:
      "Generate photorealistic 3D models and renders from simple text descriptions. Perfect for product visualization and architectural concepts.",
    buttonText: "Create 3D",
    backgroundImage: sukuna.src,
  },
];
const slidesWithClones = [
  heroSlides[heroSlides.length - 1],
  ...heroSlides,
  heroSlides[0],
];

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(1); // start at 1 because of the cloned last slide at index 0
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev - 1);
    setIsTransitioning(true);
  };

  // handle reset when reaching clones
  useEffect(() => {
    if (currentSlide === slidesWithClones.length - 1) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(1); // reset to first real slide
      }, 500); // must match transition duration
      return () => clearTimeout(timeout);
    }

    if (currentSlide === 0) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(slidesWithClones.length - 2); // reset to last real slide
      }, 500);
      return () => clearTimeout(timeout);
    }

    setIsTransitioning(true);
  }, [currentSlide]);

  return (
    <div className="relative mb-8 mx-6 mt-12">
      {/* <Image src={naruto1} alt="Naruto" width={500} height={300} /> */}
      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div
          className="flex gap-12"
          style={{
            transform: `translateX(-${currentSlide * (55 + 1.8)}vw)`,
            transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
          }}
        >
          {slidesWithClones.map((slide, index) => (
            <Card
              key={index}
              className="relative h-120 overflow-hidden rounded-3xl bg-gradient-to-br from-card via-card to-muted flex-shrink-0"
              style={{ width: "55vw" }}
            >
              {/* Background */}
              <div
                className="absolute inset-0 transition-all duration-500"
                style={{
                  backgroundImage: `url('${slide.backgroundImage}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "100vh",
                  width: "100%",
                }}
              >
                 {/* <div className="absolute inset-0" /> */}
                <div className="absolute inset-0  bg-black/60  from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Badge - top left with more padding */}
              <div className="absolute top-12 left-12 z-10">
                <Badge
                  variant="secondary"
                  className="text-white bg-transparent  px-4 py-1"
                >
                  {slide.badge}
                </Badge>
              </div>

              {/* Title - centered */}
              <div className="absolute inset-0 flex items-center justify-center z-10 px-8">
                <h2 className="text-6xl md:text-8xl font-extrabold text-white text-center drop-shadow-lg">
                  {slide.title}
                </h2>
              </div>

              {/* Subtitle + Description - bottom left with more padding */}
              <div className="absolute bottom-12 left-12 z-10 max-w-md pr-8">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  {slide.subtitle}
                </h3>
                <p className="text-base text-white/80 leading-relaxed">
                  {slide.description}
                </p>
              </div>

              {/* Button - bottom right with more padding */}
              <div className="absolute bottom-12 right-12 z-10">
                <Button
                  variant="secondary"
                  className="bg-white rounded-full px-8 py-6 text-lg font-semibold text-black hover:bg-white/90 border-white/20"
                >
                  {slide.buttonText}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Dots + Controls */}
      <div className="flex w-full items-center justify-between mt-4">
        {/* Dots */}
        <div className="flex justify-center flex-1">
          <div className="flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index + 1)} // +1 because of cloned first slide
                className={`w-2 h-2 rounded-full transition-colors ${
                  index + 1 === currentSlide
                    ? "bg-primary"
                    : "bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Chevron controls */}
        <div className="flex justify-end gap-2">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background border border-border text-foreground hover:text-primary transition-colors shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background border border-border text-foreground hover:text-primary transition-colors shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
