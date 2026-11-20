import ProductCard from "./ProductCard";

function ProductList({ products, onPageUpdate, onAddToCart }) {
  return (
    <>
      {products.length ? (
        <div className="grid" id="product-grid">
          {products.map((product) => (
            <ProductCard
              product={product}
              onPageUpdate={onPageUpdate}
              onAddToCart={onAddToCart}
              key={product.id}
            />
          ))}
        </div>
      ) : (
        <div className="empty" id="empty-products" hidden="">
          No products found. Try another search.
        </div>
      )}
    </>
  );
}

export default ProductList;
