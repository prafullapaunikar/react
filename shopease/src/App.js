import { useState } from "react";
import "./index.css";
import Header from "./Header";
import Footer from "./Footer";
import ProductList from "./ProductList";
import Hero from "./Hero";
import SectionHead from "./SectionHead";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Success from "./Success";
import Toast from "./Toast";
import Filter from "./Filter";

const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, lightweight and soft fabric for breathable and comfortable wearing. Solid stitched shirts with round neck.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "Great outerwear jacket for Spring, Autumn and Winter, suitable for working, hiking, camping, climbing, cycling and traveling.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "A versatile casual slim-fit wardrobe essential. Please review the sizing details to find your perfect fit.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
    rating: { rate: 4.6, count: 400 },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
    rating: { rate: 3.9, count: 70 },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. A thoughtful gift for engagements, weddings and anniversaries.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
    rating: { rate: 3, count: 400 },
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
    rating: { rate: 1.9, count: 100 },
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility. Fast data transfers, high capacity and improved PC performance.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
    rating: { rate: 3.3, count: 203 },
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response. A balance of performance and reliability.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
    rating: { rate: 2.9, count: 470 },
  },
  {
    id: 11,
    title: "Silicon Power 256GB SSD 3D NAND A55",
    price: 109,
    description:
      "3D NAND flash delivers high transfer speeds and faster bootup. Advanced SLC Cache technology boosts performance and reliability.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
    rating: { rate: 4.8, count: 319 },
  },
  {
    id: 12,
    title: "WD 4TB Gaming Drive Portable External Hard Drive",
    price: 114,
    description:
      "Expand your PS4 gaming experience. Portable external storage with easy setup, sleek design and a three-year limited warranty.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
    rating: { rate: 4.8, count: 400 },
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD IPS Ultra-Thin",
    price: 599,
    description:
      "21.5 inch Full HD widescreen IPS display with Radeon FreeSync, 75Hz refresh rate, zero-frame design and slim profile.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
    rating: { rate: 2.9, count: 250 },
  },
  {
    id: 14,
    title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
    price: 999.99,
    description:
      "49 inch super ultrawide curved QLED gaming monitor with HDR support, 144Hz refresh rate and 1ms response time.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
    rating: { rate: 2.2, count: 140 },
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      "Versatile winter coat with detachable warm fleece liner, adjustable hood, secure pockets and a comfortable design for cold weather.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
    rating: { rate: 2.6, count: 235 },
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      "Faux leather jacket with removable hood, front pockets and detailed stitching. A stylish and comfortable everyday option.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
    rating: { rate: 2.9, count: 340 },
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description:
      "Lightweight raincoat with hood, adjustable waist, striped lining and practical side pockets. Ideal for travel and casual wear.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
    rating: { rate: 3.8, count: 679 },
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V",
    price: 9.85,
    description:
      "95% rayon and 5% spandex. Lightweight fabric with stretch for comfort, with ribbed sleeves and neckline.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
    rating: { rate: 4.7, count: 130 },
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      "Lightweight and breathable moisture-wicking polyester fabric. Comfortable V-neck collar and a sleek silhouette.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
    rating: { rate: 4.5, count: 146 },
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "Casual cotton-blend V-neck tee with short sleeves. Soft, stretchy fabric for everyday, office and casual wear.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
    rating: { rate: 3.6, count: 145 },
  },
];

function App() {
  const [activePage, setActivePage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);
  const [toastMessage, setToastMessage] = useState("");
  const [productList, setProductList] = useState(products);

  function handleActivePage(page, product) {
    setActivePage(page);
    setSelectedProduct(
      page === "detail"
        ? product
        : page === "success"
          ? setCartProducts([])
          : null,
    );
  }

  function handleAddToCart(product, isFromBuyNow) {
    setCartProducts((currentProducts) => {
      const existingProduct = currentProducts.find(
        (item) => item.id === product.id,
      );
      if (isFromBuyNow) {
        handleActivePage("cart", product);
      }
      if (existingProduct) {
        return currentProducts.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentProducts, { ...product, quantity: 1 }];
    });
    setToastMessage("Added to your cart");
  }

  function handleQuantityUpdate(productId, quantity) {
    setCartProducts((currentProducts) =>
      quantity <= 0
        ? currentProducts.filter((product) => product.id !== productId)
        : currentProducts.map((product) =>
            product.id === productId ? { ...product, quantity } : product,
          ),
    );
  }

  function handleFilter(category) {
    setProductList(
      products.filter(
        (prod) => category === "all" || prod.category === category,
      ),
    );
  }

  function handleSort(sortBy) {
    switch (sortBy) {
      case "low":
        setProductList([...productList].sort((a, b) => a.price - b.price));
        break;
      case "high":
        setProductList([...productList].sort((a, b) => b.price - a.price));
        break;
      case "rating":
        setProductList(
          [...productList].sort((a, b) => b.rating.rate - a.rating.rate),
        );
        break;
      case "az":
        setProductList(
          [...productList].sort((a, b) => a.title.localeCompare(b.title)),
        );
        break;
      default:
        setProductList([...productList].sort((a, b) => a.id - b.id));
        break;
    }
  }

  function handleSearch(search) {
    setProductList(
      [...productList].filter((prod) =>
        prod.title.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  }

  return (
    <div className="App">
      <Header
        activePage={activePage}
        onPageUpdate={handleActivePage}
        cartProducts={cartProducts}
      />
      <main className="wrap">
        {activePage === "home" && (
          <section id="home-page" className="page active">
            <Hero />
            <SectionHead
              productList={productList}
              onSort={handleSort}
              onSearch={handleSearch}
            />
            <Filter onFilter={handleFilter} />
            <ProductList
              products={productList}
              onPageUpdate={handleActivePage}
              onAddToCart={handleAddToCart}
            />
          </section>
        )}
        {activePage === "detail" && (
          <ProductDetails
            product={selectedProduct}
            onPageUpdate={handleActivePage}
            onAddToCart={handleAddToCart}
          />
        )}
        {activePage === "cart" && (
          <Cart
            cartProducts={cartProducts}
            onPageUpdate={handleActivePage}
            onQuantityUpdate={handleQuantityUpdate}
          />
        )}
        {activePage === "success" && (
          <Success onPageUpdate={handleActivePage} />
        )}
      </main>
      <Footer />
      <Toast message={toastMessage} />
    </div>
  );
}

export default App;
