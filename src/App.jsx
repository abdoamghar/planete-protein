import { useState } from 'react';
import './App.css';
import { products, categories } from './data';
import ProductDetails from './ProductDetails';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const WHATSAPP_NUMBER = "212600000000"; 

  const addToCart = (product) => {
    setCart(prev => {
      const cid = product.cartId || product.id;
      const existing = prev.find(item => (item.cartId || item.id) === cid);
      if (existing) {
        return prev.map(item => 
          (item.cartId || item.id) === cid ? { ...item, quantity: item.quantity + product.quantity } : item
        );
      }
      return [...prev, product];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (cartId, delta) => {
    setCart(prev => prev.map(item => {
      const cid = item.cartId || item.id;
      if (cid === cartId) {
        const newQuantity = item.quantity + delta;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }));
  };

  const removeFromCart = (cartId) => {
    setCart(prev => prev.filter(item => (item.cartId || item.id) !== cartId));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const checkoutViaWhatsApp = () => {
    if (cart.length === 0) return;
    
    let text = "🔥 *NEW ORDER - PLANÈTE PROTÉIN* 🔥\n\n";
    cart.forEach(item => {
      const variantInfo = item.flavor ? ` (${item.flavor}, ${item.weight})` : '';
      text += `[ ${item.quantity}x ] ${item.name}${variantInfo} - ${item.price} MAD\n`;
    });
    text += `\n*TOTAL:* ${cartTotal} MAD\n`;
    text += "_PAYMENT ON DELIVERY_";

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`, '_blank');
  };

  // We will feature a specific product in the hero. Let's use the first one.
  const featuredProduct = products[0];

  return (
    <div className="app-container">
      {/* Navbar */}
      <header className="navbar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div className="brand font-display text-volt">PLANÈTE PROTÉIN.</div>
          <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
            CART
            {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
          </button>
        </div>
      </header>

      {selectedProduct ? (
        <ProductDetails 
          product={selectedProduct} 
          onBack={() => setSelectedProduct(null)} 
          onAddToCart={addToCart} 
        />
      ) : (
        <>
          {/* Breakout Hero Section */}
          <section className="hero-breakout">
            <div className="hero-text-huge font-display">
              <span className="text-outline">DEFY</span>
              <span className="text-volt">LIMITS</span>
            </div>
            
            <div className="hero-img-container">
              <img src={featuredProduct.image} alt={featuredProduct.name} className="hero-img" />
            </div>
            
            <div className="hero-badge">
              100%<br/>Premium<br/>Quality
            </div>
          </section>

          {/* Scrolling Marquee */}
          <div className="marquee-container">
            <div className="marquee-content">
              PAY ON DELIVERY // PREMIUM NUTRITION // FAST SHIPPING // NO COMPROMISES // ELEVATE YOUR PERFORMANCE //
              PAY ON DELIVERY // PREMIUM NUTRITION // FAST SHIPPING // NO COMPROMISES // ELEVATE YOUR PERFORMANCE //
            </div>
          </div>

          {/* Editorial Product Showcase */}
          <main className="showcase-section container">
            <h2 className="section-title font-display"><span className="text-volt">THE</span> ARSENAL</h2>
            
            <div className="categories-brutal">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  className={`btn-cat ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="editorial-grid">
              {filteredProducts.map((product, index) => (
                <div key={product.id} className="editorial-product">
                  <div className="ed-image-wrap">
                    <span className="ed-number">0{index + 1}</span>
                    <img src={product.image} alt={product.name} className="ed-image" />
                  </div>
                  
                  <div className="ed-info">
                    <span className="ed-cat">{product.category}</span>
                    <h3 className="ed-title font-display">{product.name}</h3>
                    <p className="ed-desc">{product.description}</p>
                    <div className="ed-price">{product.price} MAD</div>
                    <button className="btn-brutal" onClick={() => setSelectedProduct(product)}>
                      VIEW GEAR +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </>
      )}

      <footer style={{ borderTop: '4px solid var(--text-primary)', padding: '60px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '30px' }}>
          <div>
            <h3 className="font-display text-outline-volt" style={{ fontSize: '3rem' }}>PLANÈTE PROTÉIN.</h3>
            <p style={{ color: 'var(--text-muted)', marginTop: '10px', maxWidth: '350px' }}>
              Rue 13 N°439, 28830 Mohammedia, Maroc
            </p>
          </div>
          <div style={{ maxWidth: '100%' }}>
            <iframe
              src="https://maps.google.com/maps?q=Rue+13+439+28830+Mohammedia+Maroc&output=embed"
              width="300"
              height="200"
              style={{ border: '2px solid var(--volt)', borderRadius: '4px', maxWidth: '100%' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Store Location"
            />
          </div>
          <p style={{ color: 'var(--text-muted)' }}>&copy; {new Date().getFullYear()} NO COMPROMISES.</p>
        </div>
      </footer>

      {/* Cart Drawer */}
      <div className={`cart-overlay ${isCartOpen ? 'open' : ''}`} onClick={() => setIsCartOpen(false)}></div>
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2 className="font-display">YOUR <span className="text-volt">GEAR</span></h2>
          <button className="close-btn font-display" onClick={() => setIsCartOpen(false)}>X</button>
        </div>
        
        <div className="cart-items">
          {cart.length === 0 ? (
            <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-display)', fontSize: '1.5rem', textAlign: 'center', marginTop: '40px' }}>CART IS EMPTY.</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <h4 className="cart-item-title">{item.name}</h4>
                  {item.flavor && <div style={{color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-display)', marginBottom: '5px'}}>{item.flavor} | {item.weight}</div>}
                  <div className="cart-item-price">{item.price} MAD</div>
                  <div className="cart-item-controls">
                    <button className="qty-btn" onClick={() => updateQuantity(item.cartId || item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="qty-btn" onClick={() => updateQuantity(item.cartId || item.id, 1)}>+</button>
                    <button className="remove-btn font-display" onClick={() => removeFromCart(item.cartId || item.id)}>REMOVE</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>TOTAL</span>
              <span className="text-volt">{cartTotal} MAD</span>
            </div>
            <button className="btn-brutal whatsapp-btn" onClick={checkoutViaWhatsApp}>
              SECURE VIA WHATSAPP
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
