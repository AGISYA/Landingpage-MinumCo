"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    content:
      "Kopi terbaik yang pernah saya minum! Suasananya nyaman dan stafnya sangat ramah.",
    author: "Emily Johnson",
    role: "Pecinta Kopi",
    avatar: "/images/Japanese Hair Model.jpg",
  },
  {
    id: 2,
    content:
      "Smoothie mereka adalah camilan sehat yang sempurna. Saya datang ke sini setiap minggu untuk smoothie hijau favorit saya!",
    author: "Michael Chen",
    role: "Pelatih Kebugaran",
    avatar:
      "/images/50 of the Best Medium Hairstyles for Men (Gallery + Videos Included).jpg",
  },
  {
    id: 3,
    content:
      "Pilihan Fruit Smoothie sangat mengesankan dan membuat saya menjadi lebih segar. Ini adalah minuman favorit saya di pagi hari.",
    author: "Edward Thompson",
    role: "Pecinta Minuman Segar",
    avatar: "/images/20 Korean Hairstyles for Men_ Fresh Cuts to Try.jpg",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Ganti testimonial setiap 3 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 text-[#633726] bg-[#F5E1DA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#633726] mb-12">
          Apa Kata Pelanggan Kami
        </h2>
        <div className="relative w-full flex justify-center">
          <div
            key={currentIndex}
            className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-full md:max-w-2xl border border-[#633726]"
          >
            <p className="text-lg md:text-xl text-[#633726] mb-6 text-center">
              &ldquo;{testimonials[currentIndex].content}&rdquo;
            </p>
            <div className="flex items-center justify-center">
              <Image
                src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                alt={testimonials[currentIndex].author}
                width={50}
                height={50}
                className="rounded-full mr-4 border-2 border-[#633726]"
              />
              <div>
                <p className="font-semibold text-[#633726] text-center md:text-left">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-[#633726] text-center md:text-left">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
