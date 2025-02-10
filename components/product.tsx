"use client";

import { FAQAccordion } from "./faq";
import { ImageCarousel } from "./image-carousel";

const images = [
  { src: "/images/Tiramisu Iced Latte.jpg", alt: "Iced Latte" },
  {
    src: "/images/Hot matcha latte with some butter cookies on side.jpg",
    alt: "Matcha Latte",
  },
  {
    src: "/images/Delicious Smoothie Recipes Healthy Options.jpg",
    alt: "Smoothie Buah Segar",
  },
  {
    src: "/images/Glass of cold peach iced tea, a Food & Drink Photo by MangoMind.jpg",
    alt: "Iced Tea",
  },
  {
    src: "/images/Matcha Green Tea Smoothie.jpg",
    alt: "Matcha Green Tea Smoothie",
  },
  {
    src: "/images/Hot chocolate, Generative ai _ Premium AI-generated image.jpg",
    alt: "Hot Chocolate",
  },
];

const faqItems = [
  {
    question: "Apa saja jenis minuman yang tersedia?",
    answer:
      "Kami menyediakan berbagai jenis minuman, termasuk kopi, teh, smoothie, dan minuman segar lainnya. Menu kami mencakup pilihan panas dan dingin untuk memenuhi selera Anda.",
  },
  {
    question: "Apakah ada pilihan minuman non-kafein?",
    answer:
      "Ya, kami memiliki banyak pilihan minuman non-kafein seperti teh herbal, smoothie buah, dan minuman segar lainnya yang bebas kafein.",
  },
  {
    question: "Bisakah saya memesan minuman untuk acara atau pesta?",
    answer:
      "Tentu! Kami menerima pesanan untuk berbagai acara. Silakan hubungi kami melalui WhatsApp untuk informasi lebih lanjut tentang pilihan catering dan pemesanan khusus.",
  },
  {
    question: "Apakah ada program loyalitas pelanggan?",
    answer:
      "Ya, kami memiliki program loyalitas di mana Anda bisa mengumpulkan poin setiap kali membeli minuman. Poin-poin ini dapat ditukarkan dengan minuman gratis atau diskon khusus.",
  },
  {
    question: "Bagaimana cara menjaga minuman tetap segar saat dibawa pulang?",
    answer:
      "Kami menggunakan kemasan khusus yang menjaga suhu minuman Anda. Untuk minuman dingin, kami sarankan untuk segera dikonsumsi atau disimpan di lemari es. Untuk minuman panas, kami memiliki tutup khusus yang membantu menjaga suhu lebih lama.",
  },
];

export function ProductShowcase() {
  return (
    <section className="py-12 text-white bg-[#633726]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <ImageCarousel images={images} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Pertanyaan Umum
            </h2>
            <div className="text-white">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
