import { useState } from 'react';
import './ProductDetails.css';

function ProductDetails({ product, onBack, onAddToCart }) {
  const [selectedFlavor, setSelectedFlavor] = useState(product.flavorOptions[0]);
  const [selectedWeight, setSelectedWeight] = useState(product.weightOptions[0]);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.image);

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      // We create a unique ID for the cart based on variants
      cartId: `${product.id}-${selectedFlavor}-${selectedWeight}`,
      flavor: selectedFlavor,
      weight: selectedWeight,
      quantity: quantity
    });
  };

  const isOutOfStock = product.availability === "OUT OF STOCK";

  return (
    <div className="product-details-view animate-fade-in">
      <div className="pd-nav">
        <button className="btn-back font-display" onClick={onBack}>
          <span style={{fontSize: '1.5rem', marginRight: '10px'}}>←</span> BACK
        </button>
      </div>

      <div className="pd-container container">
        <div className="pd-image-section">
          <div className="pd-image-wrap">
             <img src={mainImage} alt={product.name} className="pd-main-img" />
          </div>
          {product.gallery && product.gallery.length > 1 && (
            <div className="pd-gallery">
              {product.gallery.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`pd-thumbnail ${mainImage === img ? 'active' : ''}`}
                  onClick={() => setMainImage(img)}
                >
                  <img src={img} alt={`${product.name} angle ${idx + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="pd-info-section">
          <div className="pd-badge text-volt font-display">{product.availability}</div>
          <h1 className="pd-title font-display">{product.name}</h1>
          <p className="pd-price font-display">{product.price} MAD</p>
          <p className="pd-desc">{product.description}</p>

          <div className="pd-variants">
            {/* Flavors */}
            <div className="pd-variant-group">
              <h3 className="font-display">FLAVOR</h3>
              <div className="pd-options">
                {product.flavorOptions.map(flavor => (
                  <button 
                    key={flavor}
                    className={`pd-option-btn ${selectedFlavor === flavor ? 'active' : ''}`}
                    onClick={() => setSelectedFlavor(flavor)}
                  >
                    {flavor}
                  </button>
                ))}
              </div>
            </div>

            {/* Weights */}
            <div className="pd-variant-group">
              <h3 className="font-display">WEIGHT</h3>
              <div className="pd-options">
                {product.weightOptions.map(weight => (
                  <button 
                    key={weight}
                    className={`pd-option-btn ${selectedWeight === weight ? 'active' : ''}`}
                    onClick={() => setSelectedWeight(weight)}
                  >
                    {weight}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Add to Cart Controls */}
          <div className="pd-actions">
            <div className="pd-qty-selector">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button 
              className="btn-brutal pd-add-btn" 
              onClick={handleAddToCart}
              disabled={isOutOfStock}
              style={{ opacity: isOutOfStock ? 0.5 : 1, cursor: isOutOfStock ? 'not-allowed' : 'pointer' }}
            >
              {isOutOfStock ? "SOLD OUT" : "SECURE THIS ITEM +"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
