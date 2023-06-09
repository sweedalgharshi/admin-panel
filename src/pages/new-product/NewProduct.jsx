import React from 'react';
import './newProduct.css';

function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="add-product-title">New Product</h1>
      <form className="add-product-form">
        <div className="add-product-item">
          <label>Image</label>
          <input type="file" name="file" id="file" />
        </div>
        <div className="add-product-item">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="add-product-item">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="add-product-item">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="add-product-btn">Create</button>
      </form>
    </div>
  );
}

export default NewProduct;
