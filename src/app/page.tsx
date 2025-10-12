'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ToursSection from '@/components/sections/ToursSection';
import AboutSection from '@/components/sections/AboutSection';
import StatsSection from '@/components/sections/StatsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import GallerySection from '@/components/sections/GallerySection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import BookingForm from '@/components/sections/BookingForm';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ToursSection />
        <AboutSection />
        <StatsSection />
        <GallerySection />
        <TestimonialsSection />
        <FAQSection />
        <BookingForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
