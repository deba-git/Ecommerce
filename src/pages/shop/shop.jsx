import React, { useState } from "react";
import { CATEGORIES, PRODUCTS } from "../../products";
import "./shop.css";
import { Item } from "../../components/Item";

export const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="shop">
      <div className="topBar">
        <div className="shopTitle">
          <h1 className="title"> Electronic Store </h1>
        </div>
        <div>
          <h2>Shop By Category</h2>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="products">
        {PRODUCTS.filter(
          (product) =>
            selectedCategory === "All" || product.category === selectedCategory
        ).map((product) => {
          return <Item key={product.id} data={product} />;
        })}
      </div>
    </div>
  );
};
