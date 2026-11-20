function ProductCard({ product, onPageUpdate, onAddToCart }) {
  return (
    <article
      className="product"
      data-open="1"
      onClick={(e) => {
        e.preventDefault();
        onPageUpdate("detail", product);
      }}
    >
      <div className="product-photo">
        <img src={product.image} alt={product.title} loading="lazy" />
        <span className="tag">{product.category}</span>
      </div>
      <div className="product-info">
        <div className="muted">{product.category}</div>
        <h3>{product.title}</h3>
        <div className="rating">
          <span className="star">★</span> <b>{product.rating.rate}</b>{" "}
          <span className="muted">({product.rating.count})</span>
        </div>
        <div className="buy-row">
          <span className="price">${product.price}</span>
          <button
            className="btn primary small-btn"
            data-add="1"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onAddToCart(product);
            }}
          >
            + Add
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
