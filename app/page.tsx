"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Camera, Calendar, CheckCircle2, Instagram, Twitter, Mail } from "lucide-react";

export default function LandingPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-xl bg-background/60 border-b border-border/10">
        <div className="flex items-center gap-3">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-24 h-24 md:w-32 md:h-32 -my-6"
          >
            <Image 
              src="https://res.cloudinary.com/dpnw05tbx/image/upload/v1751562771/WhatsApp_Image_2025-07-03_at_18.08.38_844fca6d-removebg-preview_mf4i5o.png" 
              alt="IREE MEDIA AGENCY Logo" 
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-xs font-bold tracking-[0.3em] uppercase">
          <Link href="#services" className="hover:text-primary transition-all duration-300 relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="#portfolio" className="hover:text-primary transition-all duration-300 relative group">
            Portfolio
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="#consultation" className="hover:text-primary transition-all duration-300 relative group">
            Consultation
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>

        <Link 
          href="#consultation" 
          className="px-8 py-3 bg-primary text-primary-foreground text-xs font-black tracking-[0.2em] uppercase rounded-full hover:bg-gold-light hover:text-black transition-all duration-500 shadow-2xl hover:shadow-primary/20"
        >
          Consult Now
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        {/* Hero Background with Parallax effect */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/hero.png" 
            alt="Luxury Wedding Setup" 
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="relative z-10 container mx-auto px-6 text-center max-w-5xl"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-block text-primary font-bold tracking-[0.5em] uppercase text-xs mb-8 bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
              Defining Exceptional Presence
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="font-serif text-6xl md:text-[9rem] mb-8 leading-[0.9] tracking-tighter"
          >
            Exceptional Weddings <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-gold-light to-gold italic">Deserve an Iconic Presence</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-muted-foreground md:text-xl md:px-20 mb-16 max-w-3xl mx-auto leading-relaxed"
          >
            IREE MEDIA AGENCY bridges the gap between high-end artistry and advanced digital orchestration. We create bespoke digital sanctuaries for couples who demand nothing less than perfection.
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link 
              href="#consultation" 
              className="group flex items-center gap-3 px-12 py-6 bg-primary text-primary-foreground font-black tracking-widest uppercase rounded-full transition-all duration-500 hover:scale-105 shadow-[0_0_40px_rgba(201,168,107,0.2)]"
            >
              Begin Your Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
            
            <Link 
              href="#portfolio" 
              className="px-12 py-6 border border-white/10 text-foreground font-black tracking-widest uppercase rounded-full hover:bg-white/5 transition-all duration-500 backdrop-blur-sm"
            >
              View Lookbook
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Background Particles */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
          <div className="absolute top-1/2 right-20 w-1 h-1 bg-white rounded-full animate-ping" />
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary/30 rounded-full animate-bounce" />
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] mb-4 text-muted-foreground">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 md:py-56 relative bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-end justify-between mb-32">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs block mb-6 px-4 py-2 border-l-2 border-primary bg-primary/5">The Atelier</span>
              <h2 className="font-serif text-5xl md:text-8xl text-white leading-none">Defining Digital <br/> Luxury</h2>
            </div>
            <p className="text-zinc-500 max-w-sm italic text-lg border-l border-zinc-800 pl-8">
              "We don't just build websites; we craft digital legacies that echo your unique love story."
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Service card components could be extracted but keeping here for simplicity as requested */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group bg-zinc-900/40 border border-zinc-800/50 p-12 rounded-[2.5rem] backdrop-blur-sm hover:border-primary/30 transition-all duration-700"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-[1.5rem] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-700">
                <Globe className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-serif text-3xl text-white mb-6">Bespoke Digital <br/> Sanctuaries</h3>
              <p className="text-zinc-500 mb-10 leading-relaxed text-lg">
                Custom-coded experiences featuring RSVP orchestration, real-time guest communication, and interactive event journeys.
              </p>
              <ul className="space-y-4">
                {["White-label domain curation", "Dynamic Guest Gatekeeping", "Seamless Registry Flow"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-zinc-400 text-sm font-medium tracking-tight">
                    <CheckCircle2 className="w-5 h-5 text-primary opacity-50" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="group bg-primary p-12 rounded-[2.5rem] shadow-[0_30px_60px_rgba(201,168,107,0.15)] relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              <div className="w-20 h-20 bg-black/10 rounded-[1.5rem] flex items-center justify-center mb-10">
                <Calendar className="w-10 h-10 text-black" />
              </div>
              <h3 className="font-serif text-3xl text-black mb-6">Event <br/> Orchestration</h3>
              <p className="text-black/70 mb-10 leading-relaxed text-lg font-medium">
                Comprehensive digital event management. From VIP list vetting to real-time on-site digital coordination.
              </p>
              <ul className="space-y-4">
                {["Automated Itinerary Pulse", "Guest Segmentation AI", "Command Center Dashboard"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-black/80 text-sm font-bold">
                    <CheckCircle2 className="w-5 h-5 text-black" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="group bg-zinc-900/40 border border-zinc-800/50 p-12 rounded-[2.5rem] backdrop-blur-sm hover:border-primary/30 transition-all duration-700"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-[1.5rem] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-700">
                <Camera className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-serif text-3xl text-white mb-6">Cinematic <br/> Branding</h3>
              <p className="text-zinc-500 mb-10 leading-relaxed text-lg">
                Crafting a cohesive visual identity that spans from digital invitations to your wedding day's digital installations.
              </p>
              <ul className="space-y-4">
                {["Signature Color Palettes", "Cinematic Motion Teasers", "Digital Invite Suites"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-zinc-400 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary opacity-50" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio" className="py-32 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
            <div className="max-w-xl">
              <span className="text-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">The Lookbook</span>
              <h2 className="font-serif text-5xl md:text-7xl leading-none italic">Iconic Portfolios</h2>
            </div>
            <Link href="#" className="flex items-center gap-4 text-xs font-black tracking-[0.3em] uppercase group border-b border-primary/20 pb-2 hover:border-primary transition-all duration-500">
              Explore All <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "The Windsor Gala", category: "Digital Strategy", img: "/hero.png" },
              { title: "Azure Coast Wedding", category: "Full Orchestration", img: "/portfolio-1.png" },
              { title: "Minimalist Loft", category: "Branding", img: "/website-mockup.png" }
            ].map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-zinc-900 shadow-2xl"
              >
                <Image 
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80" />
                <div className="absolute bottom-10 left-10">
                  <span className="text-primary font-bold tracking-widest uppercase text-[10px] mb-2 block">{project.category}</span>
                  <h4 className="font-serif text-3xl text-white mb-4">{project.title}</h4>
                  <div className="w-12 h-[2px] bg-primary group-hover:w-24 transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consultation" className="py-32 md:py-56 bg-zinc-950 relative overflow-hidden">
        {/* Abstract Background Blobs */}
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto rounded-[4rem] overflow-hidden bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-3xl shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 md:p-24 bg-gradient-to-br from-zinc-900 to-zinc-950 flex flex-col justify-center">
                <h2 className="font-serif text-5xl md:text-7xl text-white mb-10 leading-tight">Elevate Your <br/> Love Story</h2>
                <p className="text-zinc-500 text-xl leading-relaxed mb-16 italic">
                  "Excellence is not an act, but a habit. We weave excellence into every line of code and every pixel of your digital presence."
                </p>
                
                <div className="grid sm:grid-cols-2 gap-10">
                   <div>
                     <span className="text-primary font-black tracking-widest text-[10px] uppercase mb-4 block">Consultation</span>
                     <p className="text-zinc-300">Share your vision with our creative leads.</p>
                   </div>
                   <div>
                     <span className="text-primary font-black tracking-widest text-[10px] uppercase mb-4 block">Crafting</span>
                     <p className="text-zinc-300">We design and code your bespoke experience.</p>
                   </div>
                </div>
              </div>

              <div className="p-12 md:p-24 flex flex-col justify-center">
                <form className="space-y-8">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Your Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-zinc-800 py-4 focus:border-primary outline-none transition-all duration-500 text-white placeholder:text-zinc-700" placeholder="Lumi & Jade" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Electronic Mail</label>
                    <input type="email" className="w-full bg-transparent border-b border-zinc-800 py-4 focus:border-primary outline-none transition-all duration-500 text-white placeholder:text-zinc-700" placeholder="hello@love.com" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Your Vision</label>
                    <textarea rows={3} className="w-full bg-transparent border-b border-zinc-800 py-4 focus:border-primary outline-none transition-all duration-500 text-white placeholder:text-zinc-700" placeholder="A grand summer gala in Tuscany..."></textarea>
                  </div>
                  <button className="group w-full py-8 bg-primary text-primary-foreground font-black tracking-[0.4em] uppercase rounded-2xl hover:bg-gold-light hover:text-black transition-all duration-700 flex justify-center items-center gap-4">
                    Enquire Now
                    <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-border/10 bg-background">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
             <div className="relative w-16 h-16">
               <Image 
                 src="https://res.cloudinary.com/dpnw05tbx/image/upload/v1751562771/WhatsApp_Image_2025-07-03_at_18.08.38_844fca6d-removebg-preview_mf4i5o.png" 
                 alt="IREE MEDIA AGENCY Logo" 
                 fill
                 className="object-contain"
               />
             </div>
             <div className="font-serif">
               <h3 className="text-2xl text-primary tracking-widest uppercase">IREE MEDIA</h3>
               <p className="text-xs text-muted-foreground uppercase tracking-widest">Agency & Digital Atelier</p>
             </div>
          </div>

          <div className="flex gap-10 text-sm tracking-widest uppercase text-muted-foreground font-bold">
             <Link href="#" className="hover:text-primary transition-colors">Instagram</Link>
             <Link href="#" className="hover:text-primary transition-colors">Twitter</Link>
             <Link href="#" className="hover:text-primary transition-colors">Pinterest</Link>
          </div>

          <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-black">
            &copy; {new Date().getFullYear()} IREE MEDIA AGENCY. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
