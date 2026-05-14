'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Camera, 
  Utensils, 
  ChevronDown, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Phone, 
  Star, 
  Clock, 
  Users, 
  Calendar,
  Menu,
  X,
  CreditCard,
  ChefHat,
  Heart,
  Music,
  MapPin,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';

// --- Components ---

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-deep-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <div className="relative w-24 h-24 mb-6">
          <Camera className="absolute inset-0 text-primary-gold w-full h-full animate-pulse" />
          <Utensils className="absolute inset-0 text-warm-cream w-full h-full opacity-50 translate-x-4 translate-y-4" />
        </div>
        <h1 className="text-3xl font-serif text-primary-gold tracking-widest text-center">
          GIFTLAND
        </h1>
        <p className="text-warm-cream/60 font-sans tracking-[0.3em] text-xs mt-2 uppercase">
          Studios & Restaurant
        </p>
      </motion.div>
    </motion.div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Studio', href: '#studio' },
    { name: 'Restaurant', href: '#restaurant' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Packages', href: '#packages' },
    { name: 'Booking', href: '#booking' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-deep-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex flex-col">
          <span className="text-xl font-serif text-primary-gold leading-none">GIFTLAND</span>
          <span className="text-[10px] text-warm-cream uppercase tracking-widest leading-none mt-1">Studios & Restaurant</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-warm-cream/80 hover:text-primary-gold transition-colors font-sans text-sm tracking-widest uppercase"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#booking"
            className="bg-primary-gold text-deep-black px-5 py-2 rounded-full font-sans font-bold text-xs uppercase tracking-widest hover:bg-warm-cream transition-colors"
          >
            Reserve Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary-gold"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-deep-black border-t border-primary-gold/10 py-8 px-6"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-warm-cream text-lg font-serif"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#booking"
                className="bg-primary-gold text-deep-black px-6 py-3 rounded-md text-center font-bold font-sans"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Your Experience
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?auto=format&fit=crop&q=80&w=1920"
          alt="Giftland Restaurant Interior"
          fill
          className="object-cover scale-110 blur-[2px] brightness-[0.3]"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black/60 via-transparent to-deep-black" />
      </div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex justify-center space-x-4 mb-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Camera className="text-primary-gold w-10 h-10 md:w-16 md:h-16" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Utensils className="text-warm-cream w-10 h-10 md:w-16 md:h-16" />
            </motion.div>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight">
            Where Every <span className="text-primary-gold font-accent block md:inline">Moment</span> is a Masterpiece
          </h1>
          <p className="text-lg md:text-2xl text-warm-cream/90 font-sans tracking-widest uppercase mb-12">
            Fine Dining <span className="mx-2 text-primary-gold">·</span> Photography Studio <span className="mx-2 text-primary-gold">·</span> Kisii, Kenya
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#booking"
              className="w-full sm:w-auto bg-primary-gold text-deep-black px-10 py-5 rounded-full font-bold text-sm tracking-[0.2em] uppercase hover:bg-white hover:scale-105 transition-all shadow-xl shadow-primary-gold/20"
            >
              Book Studio Session
            </a>
            <a 
              href="#booking"
              className="w-full sm:w-auto border-2 border-warm-cream text-warm-cream px-10 py-5 rounded-full font-bold text-sm tracking-[0.2em] uppercase hover:bg-warm-cream hover:text-deep-black hover:scale-105 transition-all"
            >
              Reserve a Table
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#about" className="text-primary-gold opacity-50 hover:opacity-100 transition-opacity">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
};

const About = () => {
  const stats = [
    { label: 'Photo Sessions', value: 500 },
    { label: 'Meals Served', value: 1000 },
    { label: '5 Star Reviews', value: 100 },
  ];

  return (
    <section id="about" className="py-24 bg-deep-black">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-primary-gold font-accent text-3xl mb-2 italic">Two Worlds. One Destination.</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Harmonizing Art & Appetite</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 text-primary-gold">
              <Camera size={40} />
              <div className="h-[2px] w-12 bg-primary-gold/30" />
            </div>
            <h4 className="text-2xl font-serif text-primary-gold">The Studio Story</h4>
            <p className="text-warm-cream/70 leading-relaxed font-sans">
              Founded on the belief that everyone has a story worth telling, Giftland Studios provides a premium environment for self-expression. Professional lighting, creative sets, and expert photographers bring your vision to life in Kisii&apos;s most upscale creative space.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-6 text-right flex flex-col items-end"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 text-warm-cream">
              <div className="h-[2px] w-12 bg-warm-cream/30" />
              <Utensils size={40} />
            </div>
            <h4 className="text-2xl font-serif text-warm-cream">The Restaurant Story</h4>
            <p className="text-warm-cream/70 leading-relaxed font-sans">
              Our culinary journey is one of passion and precision. We celebrate the richness of Kenyan ingredients while mastering global fusion techniques. Every plate is a canvas, designed to nourish your soul and delight your senses.
            </p>
          </motion.div>
        </div>

        {/* Stats Counter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-white/5">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-serif text-primary-gold mb-2">{stat.value}+</div>
              <div className="text-xs tracking-[0.3em] uppercase text-warm-cream/50">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StudioServices = () => {
  const services = [
    { icon: <Users />, title: 'Portraits & Headshots', desc: 'Elevate your professional image or personal brand with stunning clarity.' },
    { icon: <Heart />, title: 'Wedding & Events', desc: 'Preserving the heartbeat of your most cherished celebrations.' },
    { icon: <ChefHat />, title: 'Graduation Shoots', desc: 'Honoring your hard-earned milestones with timeless elegance.' },
    { icon: <Camera />, title: 'Video Production', desc: 'Cinematic storytelling for corporate, music, and commercial needs.' },
    { icon: <Music />, title: 'Baby & Family', desc: 'Heartwarming sessions capturing the joy of growing families.' },
    { icon: <CreditCard />, title: 'Corporate Work', desc: 'Professional visual solutions for businesses and institutions.' },
  ];

  return (
    <section id="studio" className="py-24 bg-[#080808] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <Image 
          src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=1920"
          alt="Studio Background"
          fill
          className="object-cover bg-fixed grayscale"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary-gold font-accent text-3xl mb-4">Capture Your Story</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white uppercase tracking-wider">Premium Photography Services</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              className="glass-card p-8 rounded-2xl group gold-glow transition-all duration-500"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-primary-gold mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                {s.icon}
              </div>
              <h4 className="text-xl font-serif text-white mb-4">{s.title}</h4>
              <p className="text-warm-cream/60 text-sm mb-8 leading-relaxed">{s.desc}</p>
              <a 
                href={`https://wa.me/254798893951?text=Hello, I would like to book a ${s.title} session.`}
                target="_blank"
                className="inline-flex items-center space-x-2 text-primary-gold font-bold text-xs uppercase tracking-widest hover:text-white transition-colors"
              >
                <span>Book Now</span>
                <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RestaurantMenu = () => {
  const [activeTab, setActiveTab] = useState('Mains');
  
  const menuData: Record<string, any[]> = {
    Starters: [
      { name: 'Kisii Grilled Calamari', price: '1,200', desc: 'Fresh local squid with a citrus herb glaze.' },
      { name: 'Spicy Chicken Wings', price: '950', desc: 'Glazed in honey-ginger and soy reduction.' },
      { name: 'Mushroom Arancini', price: '850', desc: 'Crispy risotto balls with truffle aioli.' },
    ],
    Mains: [
      { name: 'Ribeye Steak', price: '2,800', desc: '300g prime beef with peppercorn sauce and mash.' },
      { name: 'Pan Seared Tilapia', price: '1,650', desc: 'Locally sourced fish with lemon butter sauce.' },
      { name: 'African Fusion Osso Buco', price: '1,950', desc: 'Slow cooked beef shank in rich tomato reduction.' },
    ],
    Grills: [
      { name: 'Giftland Mix Grill', price: '3,500', desc: 'Platter of lamb chops, chicken, and beef sausages.' },
      { name: 'Whole Grilled Chicken', price: '2,800', desc: 'Marinated for 24hrs in our signature spices.' },
    ],
    Drinks: [
      { name: 'Passion Mojito', price: '650', desc: 'Classic mojito with high-sweet local passion fruit.' },
      { name: 'Gold Dust Latte', price: '450', desc: 'Caramel infused premium Kenyan coffee.' },
    ]
  };

  return (
    <section id="restaurant" className="py-24 bg-deep-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary-gold font-accent text-3xl mb-4">A Taste Worth Photographing</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-10">Culinary Excellence</h3>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(menuData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeTab === tab 
                    ? 'bg-primary-gold text-deep-black' 
                    : 'bg-white/5 text-warm-cream/50 hover:bg-white/10'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <AnimatePresence mode="wait">
            {menuData[activeTab].map((item, i) => (
              <motion.div
                key={`${activeTab}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start justify-between border-b border-white/5 pb-6 group"
              >
                <div className="flex-1">
                  <h4 className="text-xl font-serif text-warm-cream group-hover:text-primary-gold transition-colors mb-1">
                    {item.name}
                  </h4>
                  <p className="text-warm-cream/40 text-sm italic">{item.desc}</p>
                </div>
                <div className="text-primary-gold font-serif text-lg pl-4">
                  KES {item.price}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/254798893951?text=Hello, I would like to see the full menu and place an order." 
            target="_blank"
            className="inline-flex items-center space-x-3 bg-green-600/20 text-green-400 border border-green-600/30 px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-green-600 hover:text-white transition-all shadow-lg"
          >
            <MessageCircle size={20} />
            <span>Order via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1523464862212-d6631d073194",
    "https://images.unsplash.com/photo-1484980972926-edee96e7961b",
    "https://images.unsplash.com/photo-1510621042079-1ddbd3b08e2c",
    "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18",
    "https://images.unsplash.com/photo-1520156555694-a1518f8eb520",
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3",
    "https://images.unsplash.com/photo-1551024601-bec78aea704b",
    "https://images.unsplash.com/photo-1551218808-94e220e031e6",
    "https://images.unsplash.com/photo-1560617544-b4f287e85abc"
  ];

  return (
    <section id="gallery" className="py-24 bg-deep-black overflow-hidden px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary-gold font-accent text-3xl mb-4">Moments We&apos;ve Captured</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white uppercase tracking-wider">The Visual Anthology</h3>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((src, i) => (
            <motion.div 
              key={i}
              className="relative overflow-hidden rounded-[2rem] group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
            >
              <Image 
                src={src}
                alt={`Gallery image ${i + 1}`}
                width={800}
                height={i % 2 === 0 ? 1200 : 800}
                referrerPolicy="no-referrer"
                className="w-full h-auto grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-primary-gold text-xs uppercase tracking-[0.3em] font-bold mb-2">Category</span>
                <div className="flex items-center justify-between">
                  <h4 className="text-white font-serif text-lg">Captured Elegance</h4>
                  <Heart className="text-primary-gold fill-primary-gold animate-bounce" size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="https://www.instagram.com/thegiftlandstudios_restaurant" 
            target="_blank"
            className="inline-flex items-center space-x-3 bg-white text-deep-black px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-primary-gold hover:text-white transition-all shadow-xl"
          >
            <Instagram size={20} />
            <span>View Full Instagram Gallery</span>
          </a>
        </div>
      </div>
    </section>
  );
};

const ComboPackages = () => {
  const packages = [
    { title: 'Gold Package', price: '8,500', items: ['2hr Studio Shoot', '3-Course Dinner for 2', '10 Retouched Photos'], accent: 'primary-gold' },
    { title: 'Platinum Package', price: '18,500', items: ['Full-day Studio Access', 'Private Chef Dining', 'All RAW + 25 Retouched', 'Cinematic Reveal Video'], accent: 'white', featured: true },
    { title: 'Birthday Special', price: '5,500', items: ['Studio Mini-Session', 'Birthday Cake', 'Celebratory Meal', 'Digital Invite Design'], accent: 'warm-cream' },
  ];

  return (
    <section id="packages" className="py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary-gold font-accent text-3xl mb-4">The Ultimate Experience</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white uppercase tracking-wider">Combo Packages</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div 
              key={i}
              className={`relative overflow-hidden p-10 rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-4 ${
                pkg.featured ? 'bg-primary-gold/10 border-primary-gold shadow-2xl shadow-primary-gold/10' : 'bg-card-bg border-white/5'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className={`text-2xl font-serif mb-2 ${pkg.featured ? 'text-primary-gold' : 'text-white'}`}>{pkg.title}</h4>
              <div className="flex items-baseline mb-8">
                <span className="text-xs uppercase text-warm-cream/50 mr-2">KES</span>
                <span className="text-4xl font-serif text-white">{pkg.price}</span>
              </div>
              
              <ul className="space-y-4 mb-10">
                {pkg.items.map((item, j) => (
                  <li key={j} className="flex items-center space-x-3 text-sm text-warm-cream/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={`https://wa.me/254798893951?text=Hello, I'm interested in the ${pkg.title} experience.`}
                target="_blank"
                className={`block w-full text-center py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${
                  pkg.featured ? 'bg-primary-gold text-deep-black hover:bg-white' : 'bg-white/5 text-warm-cream hover:bg-primary-gold hover:text-deep-black'
                }`}
              >
                Claim Package
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BookingSection = () => {
  return (
    <section id="booking" className="py-24 bg-deep-black px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary-gold font-accent text-3xl mb-4">Ready to Create?</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white uppercase tracking-wider">Book Your Visit</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Studio Booking */}
          <motion.div 
            className="glass-card p-10 rounded-[3rem]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-4 bg-primary-gold/10 rounded-2xl text-primary-gold">
                <Camera size={32} />
              </div>
              <div>
                <h4 className="text-2xl font-serif text-white">Studio Session</h4>
                <p className="text-sm text-warm-cream/50 uppercase tracking-widest">Reserve your lens time</p>
              </div>
            </div>

            <form 
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const date = formData.get('date');
                const type = formData.get('type');
                const msg = `Hello Giftland Studios! My name is ${name}. I would like to book a ${type} session on ${date}.`;
                window.open(`https://wa.me/254798893951?text=${encodeURIComponent(msg)}`, '_blank');
              }}
            >
              <div>
                <label className="block text-xs uppercase tracking-widest text-warm-cream/50 mb-2 font-bold">Full Name</label>
                <input name="name" type="text" placeholder="Your Name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-warm-cream focus:border-primary-gold transition-colors outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-warm-cream/50 mb-2 font-bold">Preferred Date</label>
                  <input name="date" type="date" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-warm-cream focus:border-primary-gold transition-colors outline-none" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-warm-cream/50 mb-2 font-bold">Session Type</label>
                  <select name="type" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-warm-cream focus:border-primary-gold transition-colors outline-none h-[58px]">
                    <option className="bg-deep-black" value="Portrait">Portrait</option>
                    <option className="bg-deep-black" value="Wedding">Wedding</option>
                    <option className="bg-deep-black" value="Corporate">Corporate</option>
                    <option className="bg-deep-black" value="Family">Family</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full bg-primary-gold text-deep-black py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg active:scale-95 flex items-center justify-center space-x-3">
                <MessageCircle size={18} />
                <span>Send WhatsApp Request</span>
              </button>
            </form>
          </motion.div>

          {/* Restaurant Booking */}
          <motion.div 
            className="glass-card p-10 rounded-[3rem]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-4 bg-warm-cream/10 rounded-2xl text-warm-cream">
                <Utensils size={32} />
              </div>
              <div>
                <h4 className="text-2xl font-serif text-white">Table Reservation</h4>
                <p className="text-sm text-primary-gold/50 uppercase tracking-widest">Premium Dining Seat</p>
              </div>
            </div>

            <form 
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const date = formData.get('date');
                const guests = formData.get('guests');
                const msg = `Hello Giftland Restaurant! My name is ${name}. I would like to reserve a table for ${guests} guests on ${date}.`;
                window.open(`https://wa.me/254798893951?text=${encodeURIComponent(msg)}`, '_blank');
              }}
            >
              <div>
                <label className="block text-xs uppercase tracking-widest text-primary-gold/50 mb-2 font-bold">Full Name</label>
                <input name="name" type="text" placeholder="Your Name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-warm-cream focus:border-warm-cream transition-colors outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-primary-gold/50 mb-2 font-bold">Date & Time</label>
                  <input name="date" type="datetime-local" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-warm-cream focus:border-warm-cream transition-colors outline-none" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-primary-gold/50 mb-2 font-bold">Guests</label>
                  <input name="guests" type="number" defaultValue={2} min={1} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-warm-cream focus:border-warm-cream transition-colors outline-none h-[58px]" />
                </div>
              </div>
              <button type="submit" className="w-full border-2 border-primary-gold text-primary-gold py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-primary-gold hover:text-deep-black transition-all shadow-lg active:scale-95 flex items-center justify-center space-x-3">
                <MessageCircle size={18} />
                <span>Request Table Invite</span>
              </button>
            </form>
          </motion.div>
        </div>

        {/* Location Placeholder */}
        <div className="mt-20 rounded-[3rem] overflow-hidden grayscale contrast-125 opacity-40 hover:opacity-100 grayscale-0 transition-all duration-1000 h-[400px] relative">
          <Image 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1920" 
            alt="Kisii Town Ambience" 
            fill 
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-deep-black text-white p-6 rounded-2xl border border-primary-gold shadow-2xl flex items-center space-x-4">
              <MapPin className="text-primary-gold" size={32} />
              <div>
                <p className="font-serif text-lg">Jogoo, Kisii, Kenya</p>
                <p className="text-xs uppercase tracking-widest text-warm-cream/50">Find us in the heart of town</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <h2 className="text-4xl font-serif text-primary-gold mb-4 leading-none">GIFTLAND</h2>
            <p className="text-warm-cream font-accent text-2xl mb-6">Where Art Meets Appetite</p>
            <p className="text-warm-cream/40 max-w-sm mb-8 leading-relaxed">
              We provide a unique convergence of high-end culinary arts and professional visual storytelling. Experience Kisii&apos;s finest destination.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/thegiftlandstudios_restaurant" target="_blank" className="text-primary-gold hover:text-white transition-colors"><Instagram /></a>
              <a href="https://www.facebook.com/TheGiftlandStudios_Restaurant" target="_blank" className="text-primary-gold hover:text-white transition-colors"><Facebook /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-warm-cream mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Studio', 'Menu', 'Gallery', 'Packages'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-warm-cream/40 hover:text-primary-gold transition-colors text-sm uppercase tracking-widest">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-warm-cream mb-8">Contacts</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <Phone className="text-primary-gold shrink-0" size={20} />
                <div className="text-sm text-warm-cream/60">
                   <p className="mb-1">0798 893 951</p>
                   <p>0759 344 775</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <Clock className="text-primary-gold shrink-0" size={20} />
                <div className="text-sm text-warm-cream/60">
                  <p className="mb-1 uppercase tracking-widest text-[10px]">Open Daily</p>
                  <p>8:00 AM – 10:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between">
          <p className="text-warm-cream/20 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} The Giftland Studios & Restaurant. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-[10px] uppercase tracking-[0.2em] text-warm-cream/20">
            <a href="#" className="hover:text-primary-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppFloat = () => {
  return (
    <motion.a
      href="https://wa.me/254798893951"
      target="_blank"
      className="fixed bottom-8 right-8 z-[60] bg-green-500 text-white p-4 rounded-full shadow-2xl shadow-green-500/20 hover:scale-110 active:scale-95 transition-transform"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 3 }}
    >
      <MessageCircle size={32} />
      <motion.span 
        className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center text-[10px] font-bold"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        1
      </motion.span>
    </motion.a>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: 'Sarah Omoke', type: 'Studio Session', text: 'The most professional studio in Kisii! The high-end equipment and the artistic direction were beyond my expectations.' },
    { name: 'Dr. Kennedy', type: 'Private Dinner', text: 'Culinary perfection. The Ribeye steak was cooked to absolute precision. A perfect place for corporate meetings.' },
    { name: 'Vera S.', type: 'Graduation Package', text: 'The combo package saved us so much trouble. Photos looks cinematic and the food was delicious.' },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="py-24 bg-warm-cream text-deep-black overflow-hidden px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary-gold font-serif text-2xl uppercase tracking-widest mb-4">What Our Guests Say</h2>
          <div className="flex justify-center space-x-1">
            {[1,2,3,4,5].map(i => <Star key={i} className="text-primary-gold fill-primary-gold" size={16} />)}
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative h-[250px] md:h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="absolute inset-0 flex flex-col items-center text-center"
            >
              <p className="text-xl md:text-3xl font-serif italic mb-8 leading-snug">
                &quot;{reviews[index].text}&quot;
              </p>
              <div>
                <h5 className="font-bold text-sm uppercase tracking-widest text-primary-gold">{reviews[index].name}</h5>
                <p className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-50">{reviews[index].type}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// --- Main Page ---

export default function GiftlandApp() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <SplashScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <main className="relative font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <StudioServices />
      <RestaurantMenu />
      <GallerySection />
      <ComboPackages />
      <Testimonials />
      <BookingSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
