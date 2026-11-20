function Header({ activePage, onPageUpdate, cartProducts }) {
  const count = cartProducts.reduce(
    (acc, product) => acc + product.quantity,
    0,
  );

  return (
    <header className="topbar">
      <div className="wrap header">
        <button
          className="brand"
          data-page="home"
          onClick={() => onPageUpdate("home")}
        >
          shop<span>ease.</span>
        </button>
        <nav>
          <button
            data-page="home"
            className={activePage === "home" ? "active" : ""}
            onClick={() => onPageUpdate("home")}
          >
            Shop
          </button>
          <button
            data-page="home"
            className={activePage === "home" ? "active" : ""}
            onClick={() => onPageUpdate("home")}
          >
            Products
          </button>
          <button
            data-page="cart"
            className={activePage === "cart" ? "active" : ""}
            onClick={() => onPageUpdate("cart")}
          >
            Cart{" "}
            <span className="count" id="cart-count">
              {count}
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
