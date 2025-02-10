"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full border border-gray-200 rounded-lg">
      {items.map((item, index) => (
        <div key={index} className="border-b last:border-none">
          <button
            onClick={() => toggleItem(index)}
            className="flex justify-between items-center w-full p-4 text-left font-semibold"
          >
            {item.question}
            <div
              className={`transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              <ChevronDown size={20} />
            </div>
          </button>

          {openIndex === index && (
            <div className="p-4 text-white transition-opacity duration-200 opacity-100">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
