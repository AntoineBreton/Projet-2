import React, { useState } from "react";

function CartPage({ allProducts, handleDelete }) {
  return (
    <div>
      <h1>Cart</h1>
      <table className="cart">
        <thead>
          <tr>
            <th>Product</th>
            <th> Name</th>
            <th>Unit Price</th>
            <th>Shop Link</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allProducts.map((item) => (
            <tr key={item.id} className="product">
              <td className="img">
                <span>
                  <img src={item.image_link}></img>
                </span>
              </td>
              <td className="name">
                <span>{item.name}</span>
              </td>
              <td className="price">
                $<span>{item.price}</span>
              </td>
              <td className="shop-link">
                <a
                  href={item.product_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ({item.product_link})
                </a>
              </td>

              <td className="action">
                <button
                  className="btn btn-remove"
                  onClick={() => handleDelete(item.name)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartPage;
