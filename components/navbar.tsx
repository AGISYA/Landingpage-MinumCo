"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const menuItems = [
  { name: "Beranda", href: "#hero" },
  { name: "Tentang Kami", href: "#about" },
  { name: "Layanan", href: "#services" },
  {
    name: "Menu",
    href: "#menu",
    submenu: [
      { name: "Minuman Panas", href: "#hot-drinks" },
      { name: "Minuman Dingin", href: "#cold-drinks" },
      { name: "Smoothies", href: "#smoothies" },
    ],
  },

  { name: "Testimoni", href: "#testimonials" },
  { name: "Hubungi Kami", href: "#contact" },
];

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
      setIsSubMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-[#4e2a1e] text-white shadow-md py-4 px-6 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo di kiri */}
        <h1 className="text-xl font-bold md:mr-auto">Minumco</h1>

        {/* Tombol menu untuk mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu utama */}
        <ul
          className={`md:flex md:items-center md:space-x-6 absolute md:static top-full left-0 w-full bg-[#4e2a1e] md:bg-transparent transition-all duration-300 ease-in-out md:flex-row md:w-auto
          ${isMenuOpen ? "block" : "hidden"}`}
        >
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group py-2 md:py-0 px-4 md:px-0"
            >
              {item.submenu ? (
                <>
                  <button
                    className="flex items-center space-x-2 hover:text-mint-300"
                    onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                  >
                    {item.name}
                    <ChevronDown size={16} />
                  </button>
                  {isSubMenuOpen && (
                    <ul className="md:absolute left-0 mt-2 w-40 bg-[#4e2a1e] shadow-lg rounded-md md:block">
                      {item.submenu.map((sub, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={sub.href}
                            className="block px-4 py-2 hover:bg-[#633726] rounded-md"
                            onClick={(e) => scrollToSection(e, sub.href)}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block"
                  onClick={(e) => scrollToSection(e, item.href)}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
