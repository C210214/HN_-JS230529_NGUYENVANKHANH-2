import React from "react";
import "./style/main.css";

function Product({ elementProduct, addToCart, updateQuantity }) {
    return (
        <div className="product" key={elementProduct.id}>
            <img className="product-image" src={elementProduct.image} alt={elementProduct.image} />
            <div className="product-title">
                <h4 className="product-name">{elementProduct.title}</h4>
                <span className="product-price">{elementProduct.price}$</span>
            </div>
            <hr />
            <div className="buttons">
                <button className="btn-love">Interest</button>
                <input type="text" defaultValue={1} />
                <button className="btn" onClick={() => addToCart(elementProduct)}>
                    Add
                </button>
            </div>
        </div>
    );
}

export default Product;
