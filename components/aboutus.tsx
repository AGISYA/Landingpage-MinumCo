"use client"; // Tambahkan ini di bagian atas

import Image from "next/image";
import { useEffect, useState } from "react";

export function AboutUs() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <section className="py-20 bg-[#633726] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-mint-100 to-mint-200 opacity-30"></div>{" "}
      {/* Sesuaikan transparansi gradient */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Gambar dan Kartu Info */}
          <div
            className={`relative transform transition-all duration-700 ${
              fadeIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <Image
              src="/images/ngopi.jpg"
              alt="Barista preparing a drink"
              width={500}
              height={558}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div
              className={`absolute bottom-0 left-0 bg-mint-500 text-white p-6 rounded-tr-3xl transform transition-all duration-700 delay-300 ${
                fadeIn ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <h3 className="text-4xl font-bold mb-2">15+</h3>
              <p className="text-lg">Tahun Pengalaman</p>
            </div>
          </div>

          {/* Teks dan Tombol */}
          <div
            className={`transform transition-all duration-700 ${
              fadeIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h6 className="text-mint-300 text-lg font-semibold mb-4">
              {/* Gunakan warna mint untuk subjudul */}
              Tentang Kami
            </h6>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {/* Pertahankan teks putih */}
              Menciptakan pengalaman minuman sempurna, satu gelas demi satu
              gelas
            </h2>
            <p className="text-gray-200 mb-8">
              {/* Gunakan warna abu-abu muda untuk kontras yang baik */}
              Di MinumCo, kami bersemangat untuk menciptakan minuman luar biasa
              yang menyenangkan dan menginspirasi. Tim barista dan mixologist
              ahli kami bekerja tanpa lelah untuk mencari bahan-bahan terbaik
              dan menyempurnakan keahlian kami, memastikan setiap tegukan adalah
              momen yang patut dinikmati.
            </p>
            <button
              className="bg-mint-500 text-white px-6 py-2 rounded-lg hover:bg-mint-600 transition-all"
              onClick={() => alert("Cerita kami akan segera tersedia!")}
            >
              Temukan cerita kami
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
