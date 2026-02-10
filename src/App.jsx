import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingCart, Menu, X, Plus, Minus, ArrowRight,
  Instagram, Facebook, Youtube, Twitter, Globe, Shield
} from 'lucide-react';
import { flavors } from './FlavorData';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const currentFlavor = flavors[currentIndex];

  useEffect(() => {
    document.documentElement.style.setProperty('--bg-color', currentFlavor.bg);
    document.documentElement.style.setProperty('--accent-color', currentFlavor.accent);
    document.documentElement.style.setProperty('--text-color', currentFlavor.textColor);
  }, [currentFlavor]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return newQty === 0 ? null : { ...item, quantity: newQty };
      }
      return item;
    }).filter(Boolean));
  };

  const cartTotal = cart.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0).toFixed(2);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="monster-app" style={{ background: currentFlavor.bg }}>

      {/* Navigation Overlay */}
      <nav className="header">
        <div className="logo">
          <img src="/monster-icon.svg" alt="Monster" style={{ height: '30px', marginRight: '10px' }} />
          <span>MONSTER</span>
        </div>
        <div className="nav-links">
          <a href="#hero">Featured</a>
          <a href="#details">Specs</a>
          <a href="#brand">Story</a>
        </div>
        <div className="header-icons">
          <div className="cart-trigger" onClick={() => setIsCartOpen(true)}>
            <ShoppingCart size={24} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </div>
          <Menu size={24} className="mobile-menu-btn" />
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFlavor.id}
            className="bg-text"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
          >
            MONSTER
          </motion.div>
        </AnimatePresence>

        <div className="product-layout">
          <div className="product-info">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFlavor.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flavor-badge">{currentFlavor.details.vibe}</div>
                <h1 className="hero-title">{currentFlavor.name}</h1>
                <p className="hero-description">{currentFlavor.description}</p>
                <div className="price-tag">{currentFlavor.price}</div>
                <button className="buy-btn" onClick={() => addToCart(currentFlavor)}>
                  Unlock Energy <ArrowRight size={18} style={{ marginLeft: '10px' }} />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="can-display">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFlavor.id}
                initial={{ opacity: 0, y: 100, rotate: -15, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, y: -100, rotate: 15, scale: 0.8 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                className="floating"
              >
                <img src={currentFlavor.img} alt={currentFlavor.name} className="main-can" />
                <div className="can-glow"></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Sidebar - UPDATED with solid background colors */}
        <div className="flavor-nav">
          {flavors.map((flavor, index) => (
            <motion.div
              key={flavor.id}
              className={`nav-item ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              style={{ background: flavor.bg }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src={flavor.img} alt={flavor.name} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Detailed Specs Section */}
      <section id="details" className="specs-section">
        <div className="specs-container">
          <motion.div
            className="spec-card"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
          >
            <h3>Flavor Profile</h3>
            <p>{currentFlavor.details.profile}</p>
          </motion.div>
          <motion.div
            className="spec-card"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ delay: 0.1 }}
          >
            <h3>Caffeine</h3>
            <p>{currentFlavor.details.nutrition.caffeine}</p>
          </motion.div>
          <motion.div
            className="spec-card"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ delay: 0.2 }}
          >
            <h3>Total Sugar</h3>
            <p>{currentFlavor.details.nutrition.sugars}</p>
          </motion.div>
        </div>
      </section>

      {/* Monster Community Section */}
      <section id="community" className="community-section">
        <div className="section-header">
          <div className="section-label">UNLEASH THE BEAST</div>
          <h2 className="section-title">THE MONSTER UNIVERSE</h2>
        </div>

        <div className="community-grid">
          {/* Athlete Highlights */}
          <div className="athlete-grid">
            <motion.div
              className="athlete-card"
              whileHover={{ y: -10 }}
            >
              <img src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&q=80&w=800" alt="Moto" />
              <div className="athlete-info">
                <span>RACING</span>
                <h4>MOTO REVOLUTION</h4>
              </div>
            </motion.div>
            <motion.div
              className="athlete-card"
              whileHover={{ y: -10 }}
            >
              <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800" alt="Esports" />
              <div className="athlete-info">
                <span>GAMING</span>
                <h4>THE APEX SQUAD</h4>
              </div>
            </motion.div>
            <motion.div
              className="athlete-card"
              whileHover={{ y: -10 }}
            >
              <img src="/src/assets/skate.png" alt="Skate" />
              <div className="athlete-info">
                <span>STREET</span>
                <h4>URBAN LEGENDS</h4>
              </div>
            </motion.div>
          </div>

          <div className="video-feature">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/B0voMDz4pdg?si=dsuM3BVkHJ8OiePa&autoplay=1&mute=0&controls=1&playlist=B0voMDz4pdg&loop=1"
                title="Monster Energy Action"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="social-links-bar">
              <div className="social-card instagram"><Instagram size={20} /></div>
              <div className="social-card facebook"><Facebook size={20} /></div>
              <div className="social-card twitter"><Twitter size={20} /></div>
              <div className="social-card youtube"><Youtube size={20} /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Footer */}
      < footer className="main-footer" >
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo" style={{ marginBottom: '20px' }}>
              <img src="/monster-icon.svg" alt="Monster" style={{ height: '30px', marginRight: '10px' }} />
              <span>MONSTER</span>
            </div>
            <p>Join the army. Unleash the beast. The world's #1 energy brand.</p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Products</h4>
              <a href="#">Energy</a>
              <a href="#">Juice</a>
              <a href="#">Ultra</a>
            </div>
            <div className="link-group">
              <h4>About</h4>
              <a href="#">Company</a>
              <a href="#">Athletes</a>
              <a href="#">News</a>
            </div>
            <div className="link-group">
              <h4>Support</h4>
              <a href="#">Contact</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">© 2026 Monster Energy Company. All rights reserved.</div>
          <div className="legal-badges">
            <Shield size={16} /> Privacy Guaranteed | <Globe size={16} /> Global Site
          </div>
        </div>
      </footer >

      {/* Cart Flyout */}
      < AnimatePresence >
        {isCartOpen && (
          <>
            <motion.div
              className="cart-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
            />
            <motion.div
              className="cart-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4 }}
            >
              <div className="cart-header">
                <h2>YOUR PACK</h2>
                <X size={24} onClick={() => setIsCartOpen(false)} style={{ cursor: 'pointer' }} />
              </div>

              <div className="cart-items">
                {cart.length === 0 ? (
                  <div className="empty-cart">Empty Fuel Tank</div>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="cart-item">
                      <img src={item.img} alt={item.name} />
                      <div className="item-details">
                        <h4>{item.name}</h4>
                        <div className="qty-controls">
                          <Minus size={16} onClick={() => updateQuantity(item.id, -1)} />
                          <span>{item.quantity}</span>
                          <Plus size={16} onClick={() => updateQuantity(item.id, 1)} />
                        </div>
                      </div>
                      <div className="item-price">${(parseFloat(item.price) * item.quantity).toFixed(2)}</div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="cart-footer">
                  <div className="total-row">
                    <span>Subtotal</span>
                    <span>${cartTotal}</span>
                  </div>
                  <button className="checkout-btn">Checkout Now</button>
                </div>
              )}
            </motion.div>
          </>
        )
        }
      </AnimatePresence >

    </div >
  );
}

export default App;

