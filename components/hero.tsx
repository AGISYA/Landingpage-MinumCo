"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [fadeIn, setFadeIn] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(
    "/images/Cokelat Hijau Alami Promosi Kopi Banner (Presentasi).png"
  );

  useEffect(() => {
    setFadeIn(true);

    // Fungsi untuk mengecek ukuran layar
    const checkScreenSize = () => {
      if (window.innerWidth < 768) {
        setBackgroundImage(
          "/images/Cokelat Hijau Alami Promosi Kopi Banner (1).png"
        );
      } else {
        setBackgroundImage(
          "/images/Cokelat Hijau Alami Promosi Kopi Banner (Presentasi).png"
        );
      }
    };

    // Panggil saat pertama kali render
    checkScreenSize();

    // Tambahkan event listener untuk menangani perubahan ukuran layar
    window.addEventListener("resize", checkScreenSize);

    // Bersihkan event listener saat komponen unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center text-white">
      {/* Background Image Full Screen */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Overlay agar teks lebih mudah dibaca */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      <div className="max-w-7xl mt-48 md:mt-0 mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Bagian Kiri: Teks */}
          <div
            className={`transform transition-all duration-700 ${
              fadeIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            } sm:pt-32 pt-20 md:pt-0`} // Tambahkan padding atas untuk mobile
          >
            <h4 className="text-mint-400 text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Minuman Premium
            </h4>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Temukan perpaduan sempurna rasa dan kesegaran
            </h1>
            <p className="text-base sm:text-lg mb-6 sm:mb-8">
              Dari kopi artisan hingga smoothie menyegarkan, nikmati minuman
              terbaik yang dibuat dengan penuh passion dan bahan-bahan premium.
            </p>
            <button className="bg-mint-500 text-white px-5 py-3 rounded-lg hover:bg-mint-600 transition-all">
              Lihat Menu
            </button>
          </div>

          {/* Bagian Kanan: Gambar Minuman */}
          <div
            className={`relative flex justify-center transform transition-all duration-700 delay-300 ${
              fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Image
              src="/images/Cokelat Hijau Alami Promosi Kopi Banner (2).png"
              alt="Featured drink"
              width={400}
              height={500}
              className="md:w-auto w-64 md:mt-0 -mt-44 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
