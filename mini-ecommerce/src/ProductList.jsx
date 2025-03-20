import React, { useState } from 'react';
import useProducts from "./useProducts";
import './productList.css';

const ProductList = () => {
  const { products, loading, deleteBtn } = useProducts("https://fakestoreapi.com/products");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["all", ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(p => 
    (selectedCategory === "all" || p.category === selectedCategory) &&
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="text-center mt-3"><div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div></div>;

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
        {halfStar && <i className="fas fa-star-half-alt"></i>}
        {[...Array(emptyStars)].map((_, i) => <i key={i + fullStars} className="far fa-star"></i>)}
      </>
    );
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top  p-3">
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src="https://marketplace.canva.com/EAGR4J_-jYM/2/0/1600w/canva-colorful-abstract-online-shop-free-logo-zxo07UzxTDw.jpg" alt="Brand Logo" width={100} height={100} className="rounded-circle me-2" />
            <span className="fs-4 fw-bold text-white">Shopify</span>
          </a>
          <input type="text" className="form-control w-25 me-2" placeholder="Search products..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          <select className="form-select w-auto bg-light border-0 shadow-sm" onChange={e => setSelectedCategory(e.target.value)} value={selectedCategory}>
            {categories.map((category, index) => <option key={index} value={category}>{category}</option>)}
          </select>
        </div>
      </nav>

      <div className="product-container mt-5">
        {filteredProducts.length === 0 ? (
          <div className="text-center mt-3">
            <button className="btn btn-dark" onClick={() => window.location.reload()}>Refresh</button>
          </div>
        ) : (
          filteredProducts.map(p => (
            <div className="card mt-4" style={{ width: "18rem" }} key={p.id}>
              <img src={p.image} className="card-img-top" alt="image not found" width="100%" height="250" />
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">{p.category}</p>
                <p className="rating">Rating: {renderStars(p.rating.rate)}</p>
                <button className='btn btn-dark' onClick={() => deleteBtn(p.id)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default ProductList;
