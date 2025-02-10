"use client";

import { AboutUs } from "@/components/aboutus";
import { ContactSection } from "@/components/contactus";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero";
import { MenuSection } from "@/components/menu";
import { MainNav } from "@/components/navbar";
import { ProductShowcase } from "@/components/product";
import { Services } from "@/components/services";
import { TestimonialsSection } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <MainNav />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="menu">
          <MenuSection />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
        <section id="products">
          <ProductShowcase />
        </section>
      </main>
      <Footer />
    </>
  );
}
