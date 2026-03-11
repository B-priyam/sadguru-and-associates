"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          {/* Floating sidebar trigger */}
          <div className="fixed top-4 left-4 z-50 md:hidden">
            <SidebarTrigger className="bg-background/80 backdrop-blur-sm shadow-lg border border-border" />
          </div>
          <main className="flex-1">
            <Hero />
            <Services />
            <About />
            <WhyChooseUs />
            <Testimonials />
            <CTABanner onOpenContact={scrollToContact} />
            <ContactForm />
            <Footer />
            <FloatingCTA onOpenContact={scrollToContact} />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
