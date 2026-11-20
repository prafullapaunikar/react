function Hero() {
  return (
    <div className="hero">
      <div>
        <div className="eyebrow">Discover your style</div>
        <h1>
          Find your next
          <br />
          favorite thing.
        </h1>
        <p>
          Thoughtfully selected essentials for everyday living. Explore our
          latest collection.
        </p>
        <button
          className="btn light"
          id="explore"
          onClick={(e) =>
            document
              .getElementById("collection")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Explore collection ↓
        </button>
      </div>
      <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
        alt="Featured backpack"
      />
    </div>
  );
}

export default Hero;
