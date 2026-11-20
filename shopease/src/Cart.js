import CartProduct from "./CartProduct";

function Cart({ cartProducts, onPageUpdate, onQuantityUpdate }) {
  const isCartEmpty = !cartProducts.length;
  const subtotal = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  return (
    <section id="cart-page" className="page active">
      <button
        className="back"
        id="back-cart"
        onClick={(e) => onPageUpdate("home")}
      >
        ← Continue shopping
      </button>
      <h2>Your shopping cart</h2>
      <p className="muted" id="cart-subheading">
        {isCartEmpty
          ? "0 items in your cart"
          : `${cartProducts.length} item in your cart`}
      </p>
      <div id="cart-content">
        {isCartEmpty ? (
          <div className="empty">
            <div className="emoji">🛍️</div>
            <h3>Your cart is empty</h3>
            <p className="muted">Looks like you have not added anything yet.</p>
            <button
              className="btn primary"
              id="empty-shop"
              onClick={(e) => onPageUpdate("home")}
            >
              Explore products
            </button>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cartProducts.map((product) => (
                <CartProduct
                  product={product}
                  key={product.id}
                  onQuantityUpdate={onQuantityUpdate}
                  onPageUpdate={onPageUpdate}
                />
              ))}
            </div>
            <aside className="summary">
              <h3>Order summary</h3>
              <div className="sumline">
                <span className="muted">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="sumline">
                <span className="muted">Shipping</span>
                <span style={{ color: "#39804b" }}>Free</span>
              </div>
              <div className="sumline total">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button
                className="btn primary"
                id="checkout"
                onClick={(e) => onPageUpdate("success")}
              >
                Proceed to checkout →
              </button>
              <p
                className="muted"
                style={{ textAlign: "center", fontSize: "10px" }}
              >
                Demo checkout · No real payment
              </p>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
