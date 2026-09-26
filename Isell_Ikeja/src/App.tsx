/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Bed, 
  Watch, 
  Menu, 
  X, 
  ArrowRight, 
  Instagram, 
  MessageCircle, 
  Star, 
  ChevronRight, 
  TrendingUp,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { PRODUCTS, CATEGORIES } from './constants';
import { Product } from './types';
import heroBoutiqueImg from './assets/images/hero_boutique_1790430487202.jpg';
import egyptianBeddingImg from './assets/images/egyptian_bedding_1790430398416.jpg';
import leatherToteImg from './assets/images/leather_tote_1790430413439.jpg';
import goldWatchImg from './assets/images/gold_watch_1790430473897.jpg';

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  }).format(price);
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLookbookOpen, setIsLookbookOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Banner */}
      <div className="bg-secondary text-white py-2 px-4 text-center text-xs font-bold tracking-widest uppercase">
        ✨ Free delivery on orders over ₦50,000 ✨
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-full hover:bg-gray-100 lg:hidden"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tighter text-ink leading-none uppercase">thriftby</span>
                <span className="text-xl font-bold tracking-tighter text-primary leading-none uppercase">isell</span>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              <button 
                onClick={() => setActiveCategory('all')}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${activeCategory === 'all' ? 'text-primary' : 'text-ink hover:text-primary'}`}
              >
                Shop All
              </button>
              {CATEGORIES.map(cat => (
                <button 
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-sm font-bold uppercase tracking-widest transition-colors ${activeCategory === cat.id ? 'text-primary' : 'text-ink hover:text-primary'}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full hover:bg-gray-100 relative">
                <ShoppingBag size={24} />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-secondary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <a 
                href="https://wa.me/2348000000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 bg-primary text-ink px-4 py-2 rounded-full font-bold text-sm hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={18} />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              <button 
                onClick={() => { 
                  setActiveCategory('all'); 
                  setIsMenuOpen(false); 
                  document.getElementById('featured-collection')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-left text-lg font-bold uppercase tracking-widest cursor-pointer"
              >
                Shop All
              </button>
              {CATEGORIES.map(cat => (
                <button 
                  key={cat.id}
                  onClick={() => { 
                    setActiveCategory(cat.id); 
                    setIsMenuOpen(false); 
                    document.getElementById('featured-collection')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-left text-lg font-bold uppercase tracking-widest cursor-pointer"
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {/* Hero Section - Split Layout */}
        <section className="relative bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto lg:flex items-stretch min-h-[600px]">
            <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 bg-primary/20 text-ink px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                  <TrendingUp size={14} />
                  <span>New Drop Just Landed</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                  Elevate Your <br />
                  <span className="text-primary italic">Lifestyle.</span>
                </h1>
                <p className="text-gray-600 text-lg mb-8 max-w-md">
                  Discover curated premium bedding, designer handbags, and accessories that define your unique vibe.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => {
                      document.getElementById('featured-collection')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-ink text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-primary hover:text-ink transition-all flex items-center gap-2 cursor-pointer shadow-lg active:scale-95"
                    title="Jump directly to browse the product inventory"
                  >
                    Shop Collection <ArrowRight size={20} />
                  </button>
                  <button 
                    onClick={() => setIsLookbookOpen(true)}
                    className="border-2 border-ink text-ink px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-ink hover:text-white transition-all cursor-pointer active:scale-95 flex items-center gap-2"
                    title="Open the curated photo lookbook and styling guide"
                  >
                    View Lookbook
                  </button>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px]">
              <motion.img 
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                src={heroBoutiqueImg} 
                alt="thriftbyisell luxury showroom" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50/50 to-transparent lg:hidden" />
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 right-8 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 max-w-xs"
              >
                <div className="bg-primary p-3 rounded-xl">
                  <Star className="text-ink" fill="currentColor" />
                </div>
                <div>
                  <p className="font-bold text-sm">Authenticity Guaranteed</p>
                  <p className="text-xs text-gray-500">Every piece is hand-verified</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Categories Quick Access */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CATEGORIES.map((cat, idx) => (
                <motion.button
                  key={cat.id}
                  whileHover={{ y: -5 }}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    document.getElementById('featured-collection')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="relative h-48 rounded-3xl overflow-hidden group cursor-pointer text-left"
                >
                  <img 
                    src={idx === 0 ? egyptianBeddingImg : 
                         idx === 1 ? leatherToteImg : goldWatchImg}
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/50 transition-colors" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-full mb-3">
                      {cat.id === 'Bedding' ? <Bed size={24} /> : 
                       cat.id === 'Bags' ? <ShoppingBag size={24} /> : <Watch size={24} />}
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-widest">{cat.name}</h3>
                    <div className="mt-2 flex items-center gap-1 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      Shop Now <ChevronRight size={14} />
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section id="featured-collection" className="py-16 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h2 className="text-4xl font-bold mb-2">
                  {activeCategory === 'all' ? 'Featured Collection' : activeCategory}
                </h2>
                <p className="text-gray-500">Hand-picked items for your premium lifestyle.</p>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                <button 
                  onClick={() => setActiveCategory('all')}
                  className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${activeCategory === 'all' ? 'bg-primary text-ink' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                >
                  All Items
                </button>
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${activeCategory === cat.id ? 'bg-primary text-ink' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="group"
                  >
                    <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-4 bg-gray-100">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {product.isNew && (
                          <span className="bg-primary text-ink text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                            New Arrival
                          </span>
                        )}
                        {product.isLimited && (
                          <span className="bg-secondary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                            Limited Stock
                          </span>
                        )}
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button 
                          onClick={handleAddToCart}
                          className="bg-white text-ink px-6 py-3 rounded-full font-bold uppercase tracking-widest flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform"
                        >
                          Add to Cart <ShoppingBag size={18} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{product.name}</h3>
                        <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">{product.category}</p>
                      </div>
                      <p className="font-bold text-lg text-secondary">{formatPrice(product.price)}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-ink">
              Ready to Upgrade?
            </h2>
            <p className="text-ink/70 text-lg mb-12 max-w-2xl mx-auto font-medium">
              Join our WhatsApp community for exclusive early access to drops and special discounts.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="https://wa.me/2348000000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-ink text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-3 shadow-2xl"
              >
                <MessageCircle size={24} />
                Send a Message
              </a>
              <a 
                href="https://instagram.com/thriftbyisell" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-ink px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-3 shadow-2xl"
              >
                <Instagram size={24} />
                Follow on Instagram
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-ink text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex flex-col mb-6">
                <span className="text-2xl font-bold tracking-tighter leading-none uppercase">thriftby</span>
                <span className="text-2xl font-bold tracking-tighter text-primary leading-none uppercase">isell</span>
              </div>
              <p className="text-gray-400 max-w-sm mb-8">
                Your destination for premium pre-loved lifestyle pieces. We believe in luxury that doesn't cost the earth.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-primary transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-primary transition-colors">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-primary">Shop</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><button onClick={() => setActiveCategory('all')} className="hover:text-white transition-colors">All Items</button></li>
                {CATEGORIES.map(cat => (
                  <li key={cat.id}><button onClick={() => setActiveCategory(cat.id)} className="hover:text-white transition-colors">{cat.name}</button></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-primary">Support</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">How to Order</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping & Delivery</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-bold uppercase tracking-widest">
            <p>© 2026 thriftbyisell. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Lookbook Modal */}
      <AnimatePresence>
        {isLookbookOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLookbookOpen(false)}
              className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl max-h-[88vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-white sticky top-0 z-20">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-xl text-ink">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-ink">thriftbyisell Lookbook</h3>
                      <span className="bg-primary text-ink text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
                        2026 Archive
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">Curated style guides and lifestyle inspiration from Ikeja</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsLookbookOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-ink transition-colors cursor-pointer"
                  aria-label="Close lookbook"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Modal Scroll Content */}
              <div className="p-6 overflow-y-auto space-y-8">
                {/* Look 1 */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-gray-50 rounded-2xl p-4 sm:p-6">
                  <div className="md:col-span-5 h-64 rounded-xl overflow-hidden shadow-md">
                    <img 
                      src={egyptianBeddingImg} 
                      alt="The Golden Suite Master Bedroom" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="md:col-span-7 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary uppercase tracking-widest mb-2">
                      <Sparkles size={14} /> Look 01 • Master Bedding
                    </div>
                    <h4 className="text-2xl font-bold text-ink mb-2">The Penthouse Suite Sanctuary</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      Layer ultra-breathable Egyptian Cotton with our crisp ivory duvet cover and champagne silk pillowcases. Designed for deep comfort and effortless luxury in tropical climates.
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => {
                          setIsLookbookOpen(false);
                          setActiveCategory('Bedding');
                          document.getElementById('featured-collection')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-ink text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-primary hover:text-ink transition-colors cursor-pointer"
                      >
                        Shop Bedding Range
                      </button>
                      <span className="text-xs text-gray-500 font-medium">From ₦8,500</span>
                    </div>
                  </div>
                </div>

                {/* Look 2 */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-gray-50 rounded-2xl p-4 sm:p-6">
                  <div className="md:col-span-5 h-64 rounded-xl overflow-hidden shadow-md">
                    <img 
                      src={leatherToteImg} 
                      alt="Executive Ikeja Tote" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="md:col-span-7 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary uppercase tracking-widest mb-2">
                      <Sparkles size={14} /> Look 02 • Designer Handbags
                    </div>
                    <h4 className="text-2xl font-bold text-ink mb-2">Executive Daytime Minimalist</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      Pair structured tailored neutrals with our vintage leather tote. Features sturdy hand-stitched handles and gold brass hardware that transitions seamlessly from corporate meetings to weekend dinners.
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => {
                          setIsLookbookOpen(false);
                          setActiveCategory('Bags');
                          document.getElementById('featured-collection')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-ink text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-primary hover:text-ink transition-colors cursor-pointer"
                      >
                        Shop Handbags
                      </button>
                      <span className="text-xs text-gray-500 font-medium">From ₦12,000</span>
                    </div>
                  </div>
                </div>

                {/* Look 3 */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-gray-50 rounded-2xl p-4 sm:p-6">
                  <div className="md:col-span-5 h-64 rounded-xl overflow-hidden shadow-md">
                    <img 
                      src={goldWatchImg} 
                      alt="Golden Hour Lifestyle Accessories" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="md:col-span-7 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary uppercase tracking-widest mb-2">
                      <Sparkles size={14} /> Look 03 • Lifestyle & Jewelry
                    </div>
                    <h4 className="text-2xl font-bold text-ink mb-2">Golden Hour Accessories</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      Statement vintage wristwear with warm gold accents. The perfect finishing touch that complements both classic daytime denim and evening cocktail outfits.
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => {
                          setIsLookbookOpen(false);
                          setActiveCategory('Accessories');
                          document.getElementById('featured-collection')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-ink text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-primary hover:text-ink transition-colors cursor-pointer"
                      >
                        Shop Accessories
                      </button>
                      <span className="text-xs text-gray-500 font-medium">Verified Authentic</span>
                    </div>
                  </div>
                </div>

                {/* VIP Stylist Consultation Banner */}
                <div className="bg-primary/20 border border-primary/40 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                  <div>
                    <h5 className="font-bold text-ink text-base">Want a video preview or custom pairing?</h5>
                    <p className="text-xs text-gray-600 mt-1">Our Ikeja showroom team can record a video walkthrough of any piece for you.</p>
                  </div>
                  <a
                    href="https://wa.me/2348000000000?text=Hello%20thriftbyisell,%20I%20was%20viewing%20your%20Lookbook%20and%20would%20like%20styling%20advice!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-ink text-white px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-primary hover:text-ink transition-all shrink-0 cursor-pointer shadow-md"
                  >
                    <MessageCircle size={16} /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
