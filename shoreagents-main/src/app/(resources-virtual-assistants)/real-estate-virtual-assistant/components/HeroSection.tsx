"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Phone, DollarSign } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Link from "next/link";

const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=600&fit=crop",
    alt: "Professional team working in modern office environment - Virtual Assistant collaboration"
  },
  {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop",
    alt: "Real estate professional with architectural plans and property documents"
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=600&fit=crop",
    alt: "Virtual assistant working remotely in professional workspace"
  },
  {
    src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&h=600&fit=crop",
    alt: "Modern BPO office workspace with professional team collaboration"
  }
];

export function HeroSection() {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const handleSeePricing = () => {
    // Scroll to pricing section
    const pricingSection = document.querySelector('[data-section="pricing"]');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-12">
      {/* Carousel Section */}
      <div className="relative mb-8 rounded-2xl overflow-hidden shadow-xl">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {carouselImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[400px] md:h-[500px] w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <Badge className="mb-4 bg-lime-600 text-white px-4 py-2 text-sm font-semibold flex items-center shadow-lg">
            <AlertCircle className="w-4 h-4 mr-2" />
            REAL TALK: 90% OF VA PARTNERSHIPS FAIL
          </Badge>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight max-w-5xl drop-shadow-lg">
            Real Estate Virtual Assistant: 90% Fail - Client Messes Up or Staff Messes Up
          </h1>

          <p className="text-lg sm:text-xl text-white/95 mb-6 max-w-3xl leading-relaxed drop-shadow-md">
            Look, I'm going to be brutally honest with you - 90% of VA partnerships fail. It's just a matter of time before the client messes up or the staff messes up. Sometimes both.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/we-got-talent" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg font-bold shadow-lg transition-all w-full"
              >
                <Phone className="mr-2 h-5 w-5 text-white" />
                <span className="text-white">See Real Candidates</span>
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleSeePricing}
              className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-lime-700 px-8 py-4 text-lg font-bold shadow-lg backdrop-blur-sm transition-all"
            >
              <span className="text-white group-hover:text-lime-700">Transparent Pricing</span>
              <DollarSign className="ml-2 h-5 w-5 text-white group-hover:text-lime-700" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

