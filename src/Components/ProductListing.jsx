import React, { useState, useEffect } from 'react';
import './ProductListing.css';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [sortOption, setSortOption] = useState('RECOMMENDED');

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  // Sort products based on selected option
  const sortedProducts = () => {
    switch (sortOption) {
      case 'newest':
        return [...products].sort((a, b) => new Date(b.date) - new Date(a.date));
      case 'popular':
        return [...products].sort((a, b) => b.rating.rate - a.rating.rate); 
      case 'high-to-low':
        return [...products].sort((a, b) => b.price - a.price);
      case 'low-to-high':
        return [...products].sort((a, b) => a.price - b.price);
      default:
        return products;
    }
  };

  return (
    <div className="product-page">
      <div className="header-section">
        <h1>Discover Our Products</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus<br></br>
           scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      </div>

      <div className="content">
        <div className={`filters-sidebar ${showFilter ? 'active' : ''}`}>
          {showFilter && (
            <div className="filter-section">
              <h4>Filter Options</h4>
              <div className="filter-group">
                <label htmlFor="ideal-for">IDEAL FOR</label>
                <select id="ideal-for">
                  <option value="men">All</option>
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="children">Children</option>
                </select>
              </div>
              <hr></hr>
              <div className="filter-group">
                <label htmlFor="work">WORK</label>
                <select id="work">
                  <option value="">All</option>
                  <option value="office">Office</option>
                  <option value="remote">Remote</option>
                </select>
              </div>
               <hr></hr>
              <div className="filter-group">
                <label htmlFor="occasion">OCASSION</label>
                <select id="occasion">
                  <option value="">All</option>
                  <option value="formal">Formal</option>
                  <option value="casual">Casual</option>
                  <option value="party">Party</option>
                </select>
              </div>
              <hr></hr>
              <div className="filter-group">
                <label htmlFor="occasion">FABRIC</label>
                <select id="occasion">
                  <option value="">All</option>
                  <option value="formal">Formal</option>
                  <option value="casual">Casual</option>
                  <option value="party">Party</option>
                </select>
              </div>
              <hr></hr>
              <div className="filter-group">
                <label htmlFor="occasion">SEGMENT</label>
                <select id="occasion">
                  <option value="">All</option>
                  <option value="formal">Formal</option>
                  <option value="casual">Casual</option>
                  <option value="party">Party</option>
                </select>
              </div>
              <hr></hr>
              <div className="filter-group">
                <label htmlFor="occasion">SUITABLE FOR</label>
                <select id="occasion">
                  <option value="">All</option>
                  <option value="formal">Formal</option>
                  <option value="casual">Casual</option>
                  <option value="party">Party</option>
                </select>
              </div>
              <hr></hr>
              <div className="filter-group">
                <label htmlFor="occasion">RAWMATERIALS</label>
                <select id="occasion">
                  <option value="">All</option>
                  <option value="formal">Formal</option>
                  <option value="casual">Casual</option>
                  <option value="party">Party</option>
                </select>
              </div>
              <hr></hr>
              <div className="filter-group">
                <label htmlFor="occasion">PATTERN</label>
                <select id="occasion">
                  <option value="">All</option>
                  <option value="formal">Formal</option>
                  <option value="casual">Casual</option>
                  <option value="party">Party</option>
                </select>
              </div>
              <hr></hr>
            </div>
          )}
        </div>
        <div className={`main-content ${showFilter ? 'with-filter' : 'full-width'}`}>
          <div className="filter-and-recommend">
            <a className="toggle-filter-button" onClick={toggleFilter}>
              {showFilter ? '< HIDE FILTER' : '< SHOW FILTER'}
            </a>
            <div className="recommended-option">
              <select value={sortOption} onChange={handleSortChange} className="sort-select">
                <option value="Recommended"><strong>RECOMMENDED</strong></option>
                <option value="newest">NEWEST FIRST</option>
                <option value="popular">POPULAR</option>
                <option value="high-to-low">PRICE: HIGH TO LOW</option>
                <option value="low-to-high">PRICE: LOW TO HIGH</option>
              </select>
            </div>
          </div>

          <div className={`products ${showFilter ? 'three-columns' : 'four-columns'}`}>
            {sortedProducts().map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                </div>
                <h3>{product.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
