"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: { src: string; alt: string }[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [images.length]); // Removed nextSlide from dependencies

  return (
    <div className="relative overflow-hidden aspect-w-16 aspect-h-9">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={1200}
              height={800}
              className="w-full rounded-xl h-[600px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
