"use client";
import { Coffee, Utensils, Truck, Users } from "lucide-react";

const services = [
  {
    icon: Coffee,
    title: "Minuman Spesial",
    description:
      "Rasakan kenikmatan minuman khas ImnumCo yang dibuat dengan bahan pilihan terbaik.",
  },
  {
    icon: Utensils,
    title: "Teman Minum",
    description:
      "Lengkapi pengalaman minum Anda dengan berbagai pilihan pendamping yang nikmat.",
  },
  {
    icon: Truck,
    title: "Pengantaran Cepat",
    description:
      "Pesan minuman Anda dan nikmati layanan pengiriman cepat langsung ke lokasi Anda.",
  },
  {
    icon: Users,
    title: "Layanan Acara",
    description:
      "Kami siap mendukung berbagai acara dengan pilihan minuman terbaik dari ImnumCo.",
  },
];

export function Services() {
  return (
    <section className="py-20 bg-[#F5E1DA] text-[#4E2A1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Kami</h2>
          <p className="text-xl text-[#8B5E3C]">
            Temukan pengalaman minum terbaik bersama MinumCo
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <service.icon className="w-12 h-12 text-[#8B5E3C] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-[#6D4C3D]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
