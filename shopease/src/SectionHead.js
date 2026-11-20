import { useMemo, useState } from "react";

function SectionHead({ productList, onSort, onSearch }) {
  const [sortBy, setSortBy] = useState("featured");
  const [search, setSearch] = useState("");
  function handleSort(sortBy) {
    setSortBy(sortBy);
    onSort(sortBy);
  }

  const handleSearch = useMemo(() => {
    let timeoutId;
    return (searchTerm) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        console.log(`Fetching results for ${searchTerm}`);
        onSearch(searchTerm);
      }, 300);
    };
  }, [onSearch]);

  function handleChange(search) {
    setSearch(search);
    handleSearch(search);
  }

  return (
    <div className="section-head" id="collection">
      <div>
        <div className="eyebrow">Our collection</div>
        <h2>Explore products</h2>
        <div className="muted" id="result-count">
          Showing {productList.length} of 20 products
        </div>
      </div>
      <div className="tools">
        <input
          className="field"
          id="search"
          placeholder="Search products..."
          type="search"
          value={search}
          onChange={(e) => handleChange(e.target.value)}
        />
        <select
          className="field"
          id="sort"
          value={sortBy}
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="featured">Featured</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
          <option value="az">Name: A to Z</option>
        </select>
      </div>
    </div>
  );
}

export default SectionHead;
