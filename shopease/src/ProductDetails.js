function ProductDetails({ product, onPageUpdate, onAddToCart }) {
  return (
    <section id="detail-page" className="page active">
      <button
        className="back"
        id="back-products"
        onClick={(e) => onPageUpdate("home")}
      >
        ← Back to products
      </button>
      <div id="detail-content">
        <div className="detail">
          <div className="detail-photo">
            <img src={product.image} alt={product.title} />
          </div>
          <div>
            <div className="eyebrow">{product.category}</div>
            <h1>{product.title}</h1>
            <div className="rating">
              <span className="star">★</span> <b>{product.rating.rate}/5</b>{" "}
              <span className="muted">({product.rating.count} reviews)</span>
            </div>
            <div className="price">${product.price}</div>
            <p>{product.description}</p>
            <p>
              ✓ Quality product selection
              <br />✓ Secure demo shopping experience
              <br />✓ Easy cart management
            </p>
            <div className="detail-actions">
              <button
                className="btn primary"
                id="detail-add"
                onClick={(e) => onAddToCart(product)}
              >
                Add to cart
              </button>
              <button
                className="btn"
                style={{ border: "1px solid var(--line)" }}
                id="detail-buy"
                onClick={(e) => onAddToCart(product, true)}
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
