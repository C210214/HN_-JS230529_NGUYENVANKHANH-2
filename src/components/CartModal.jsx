import React from "react";
import "./style/shoppingCart.css";

function CartModal({
    closeModal,
    cartProduct,
    productRemove,
    updateQuantity,
    visibilty,
    removeAll,
}) {
    return (
        <div
            className="modal"
            style={{
                display: visibilty ? "block" : "none",
            }}
        >
            <div className="shoppingCart">
                <div className="header">
                    <h2>Shopping cart</h2>
                    <button className="btn close-btn" onClick={closeModal}>
                        <i className="fa-solid fa-xmark" style={{ fontSize: "30px" }}></i>
                    </button>
                </div>
                <div className="cart-products">
                    {cartProduct.length === 0 && (
                        <span className="empty-text">Your cart is empty</span>
                    )}
                    {cartProduct.map((product) => (
                        <div className="cart-product" key={product.id}>
                            <img src={product.image} alt={product.title} />
                            <div className="product-info">
                                <h3>{product.title}</h3>
                                <span className="product-price">
                                    {product.price * product.quantity}$
                                </span>
                            </div>
                            <button
                                className="downicon"
                                onClick={() => updateQuantity(product.id, product.quantity - 1)}
                            >
                                <i class="fa-solid fa-chevron-left"></i>
                            </button>
                            <span>{product.quantity}</span>
                            <button
                                className="upicon"
                                onClick={() => updateQuantity(product.id, product.quantity + 1)}
                            >
                                <i class="fa-solid fa-chevron-right"></i>
                            </button>
                            <button
                                className="btn remove-btn"
                                onClick={() => productRemove(product)}
                            >
                                <i
                                    className="fa-solid fa-trash-can"
                                    style={{ fontSize: "20px" }}
                                ></i>
                            </button>
                        </div>
                    ))}
                    {cartProduct.length > 0 && (
                        <div className="cart-product-bottom">
                            <div className="clear">
                                <button onClick={removeAll}>Delete All</button>
                            </div>
                            <div className="detail">
                                <h3>Shipping: Free Shipping</h3>
                                <h3>
                                    Total:{" "}
                                    {cartProduct.reduce(
                                        (total, item) => total + item.price * item.quantity,
                                        0
                                    )}
                                    {"$"}
                                </h3>
                            </div>
                            <button className="btn checkout-btn">Proceed to checkout</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CartModal;
