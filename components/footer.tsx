"use client";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="text-[#633726] bg-[#F5E1DA] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">MinumCo</h3>
            <p className="text-[#633726]">
              Menciptakan pengalaman minuman sempurna, satu gelas demi satu
              gelas.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[#633726] hover:text-white">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#633726] hover:text-white">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-[#633726] hover:text-white">
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#633726] hover:text-white"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
            <p className="text-[#633726]">123 Beverage Street</p>
            <p className="text-[#633726]">Drinkville, DK 12345</p>
            <p className="text-[#633726]">Phone: (123) 456-7890</p>
            <p className="text-[#633726]">Email: info@drinkco.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-[#633726] hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#633726] hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#633726] hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-[#633726]">
            &copy; 2023 MinumCo. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
