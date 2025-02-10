"use client";

import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Send,
} from "lucide-react";

export function ContactSection() {
  const phoneNumber = "6281234567890"; // Replace with your actual WhatsApp number
  const message = "Halo, saya ingin bertanya tentang produk Anda."; // Replace with your default message

  const getWhatsAppLink = () => {
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="relative min-h-screen bg-[#633726] text-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Hubungi Kami</h2>
          <p className="text-xl mb-8 text-[#E6C3A5]">
            Kami senang mendengar dari Anda! Kunjungi kami, hubungi melalui
            kontak di bawah ini, atau kirim pesan melalui WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-[#7E4A35] rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Informasi Kontak</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-[#E6C3A5] mr-4" />
                <p>123 Beverage Street, Drinkville, DK 12345</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-[#E6C3A5] mr-4" />
                <p>(123) 456-7890</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-[#E6C3A5] mr-4" />
                <p>info@drinkco.com</p>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mb-8">
              <a
                href="#"
                className="text-[#E6C3A5] hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-[#E6C3A5] hover:text-white transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-[#E6C3A5] hover:text-white transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
            <div className="flex justify-center">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 flex items-center">
                  <Send className="w-5 h-5 mr-2" />
                  Kirim Pesan via WhatsApp
                </button>
              </a>
            </div>
          </div>

          <div className="h-[400px] md:h-full rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2904721146847!2d106.82704231476885!3d-6.227483395493398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e4758f7a5d%3A0x8e93fb8a6f2cc1f!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1651903021599!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
