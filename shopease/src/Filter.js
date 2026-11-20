import { useState } from "react";

function Filter({ onFilter }) {
  const [activeFilter, setActiveFilter] = useState("all");
  function handleFilter(category) {
    onFilter(category);
    setActiveFilter(category);
  }
  return (
    <div className="filters" id="categories">
      <button
        className={`pill ${activeFilter === "all" ? "active" : ""}`}
        data-category="all"
        onClick={(e) => {
          handleFilter("all");
        }}
      >
        All products
      </button>
      <button
        className={`pill ${activeFilter === "men's clothing" ? "active" : ""}`}
        data-category="men's clothing"
        onClick={(e) => {
          handleFilter("men's clothing");
        }}
      >
        Men's clothing
      </button>
      <button
        className={`pill ${activeFilter === "women's clothing" ? "active" : ""}`}
        data-category="women's clothing"
        onClick={(e) => {
          handleFilter("women's clothing");
        }}
      >
        Women's clothing
      </button>
      <button
        className={`pill ${activeFilter === "jewelery" ? "active" : ""}`}
        data-category="jewelery"
        onClick={(e) => {
          handleFilter("jewelery");
        }}
      >
        Jewelry
      </button>
      <button
        className={`pill ${activeFilter === "electronics" ? "active" : ""}`}
        data-category="electronics"
        onClick={(e) => {
          handleFilter("electronics");
        }}
      >
        Electronics
      </button>
    </div>
  );
}

export default Filter;
