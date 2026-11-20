function CartProduct({ product, onQuantityUpdate, onPageUpdate }) {
  const productValue = product.price * product.quantity;

  function handleQuantityChange(delta) {
    onQuantityUpdate(product.id, Math.max(0, product.quantity + delta));
  }
  return (
    <article className="cart-item">
      <img src={product.image} alt={product.title} />
      <div className="cart-item-main">
        <h3>
          <button
            data-open="3"
            style={{
              border: "0",
              backgroundColor: "none",
              textAlign: "left",
              padding: 0,
              fontWeight: 700,
            }}
            onClick={() => onPageUpdate("detail", product)}
          >
            {product.title}
          </button>
        </h3>
        <div className="muted">{product.price} each</div>
        <div className="qty">
          <button
            data-qty="3"
            data-delta="-1"
            onClick={() => handleQuantityChange(-1)}
          >
            −
          </button>
          <span>{product.quantity}</span>
          <button
            data-qty="3"
            data-delta="1"
            onClick={() => handleQuantityChange(1)}
          >
            +
          </button>
        </div>
      </div>
      <strong>${productValue.toFixed(2)}</strong>
      <button
        className="remove"
        data-remove="3"
        aria-label="Remove item"
        onClick={(e) => {
          product.quantity = 0;
          handleQuantityChange(0);
        }}
      >
        ×
      </button>
    </article>
  );
}

export default CartProduct;
