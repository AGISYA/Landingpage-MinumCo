"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tab } from "@headlessui/react";
import { Search } from "lucide-react";

interface MenuItem {
  image: string;
  title: string;
  price: string;
  description: string;
  category: string;
}

const menuItems: MenuItem[] = [
  {
    image: "/images/Tiramisu Iced Latte.jpg",
    title: "Iced Latte",
    price: "$4",
    description: "Smooth espresso with cold milk over ice",
    category: "Minuman Dingin",
  },
  {
    image: "/images/Hot matcha latte with some butter cookies on side.jpg",
    title: "Matcha Latte",
    price: "$5",
    description: "Creamy matcha green tea with steamed milk",
    category: "Minuman Panas",
  },
  {
    image: "/images/Delicious Smoothie Recipes Healthy Options.jpg",
    title: "Fruit Smoothie",
    price: "$6",
    description: "Blend of fresh seasonal fruits",
    category: "Smoothies",
  },
  {
    image: "/images/espresso",
    title: "Espresso",
    price: "$3",
    description: "Strong and bold single shot of espresso",
    category: "Minuman Panas",
  },
  {
    image:
      "/images/Glass of cold peach iced tea, a Food & Drink Photo by MangoMind.jpg",
    title: "Iced Tea",
    price: "$3",
    description: "Refreshing black tea served over ice",
    category: "Minuman Dingin",
  },
  {
    image: "/images/Matcha Green Tea Smoothie.jpg",
    title: "Green Smoothie",
    price: "$6",
    description: "Healthy blend of spinach, banana, and almond milk",
    category: "Smoothies",
  },
];

const categories = ["Semua", "Minuman Panas", "Minuman Dingin", "Smoothies"];

export function MenuSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredItems = menuItems.filter(
    (item) =>
      (selectedCategory === "Semua" || item.category === selectedCategory) &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 bg-[#633726] text-white" id="menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h6 className="text-mint-300 text-lg font-semibold mb-2">
            Menu Minuman Kami
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold">
            Menyegarkan dan lezat: itu janji kami untuk Anda!
          </h2>
        </motion.div>

        <div className="mb-8 relative">
          <input
            type="text"
            placeholder="Cari minuman..."
            className="w-full p-2 pl-10 rounded-lg border bg-[#4e2a1e] text-white placeholder-mint-300 focus:outline-none focus:ring-2 focus:ring-mint-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-mint-300"
            size={20}
          />
        </div>

        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-[#4e2a1e] p-1 mb-8">
            {categories.map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  `w-full rounded-lg py-2.5 text-sm font-medium ${
                    selected
                      ? "bg-[#F5E1DA] text-[#4e2a1e] shadow-lg"
                      : "hover:bg-white/10 hover:text-white"
                  }`
                }
                onClick={() => setSelectedCategory(category)}
                id={
                  category === "Minuman Panas"
                    ? "hot-drinks"
                    : category === "Minuman Dingin"
                    ? "cold-drinks"
                    : category === "Smoothies"
                    ? "smoothies"
                    : ""
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start space-x-4 bg-[#4e2a1e] p-4 rounded-lg shadow-lg hover:shadow-xl"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <span className="text-mint-300 font-bold">
                      {item.price}
                    </span>
                    <p className="text-mint-100 text-sm">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}
