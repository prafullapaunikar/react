function Success({ onPageUpdate }) {
  return (
    <section id="success-page" className="page success active">
      <div className="emoji">✓</div>
      <h1>Order placed!</h1>
      <span>
        Your order id is
        <h3>
          {crypto
            .randomUUID()
            .split("-")
            [crypto.randomUUID().split("-").length - 1].toUpperCase()}
        </h3>
      </span>
      <p className="muted">
        Thank you for shopping with ShopEase. This is a demo checkout, so no
        real payment was processed.
      </p>
      <button
        className="btn primary"
        id="continue-shopping"
        onClick={(e) => onPageUpdate("home")}
      >
        Continue shopping
      </button>
    </section>
  );
}

export default Success;
