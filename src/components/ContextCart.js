import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { CartContext } from "./Cart";
import Items from "./Items";

const ContextCart = () => {
  console.log("In Context Cart");
  const { items, clearCart,totalItems,totalAmount } = useContext(CartContext);

  if (items.length === 0) {
    return (
      <>
        <header>
          <div className="continue-shopping">
            <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
            <h3>Continue Shopping</h3>
          </div>
          <div className="cart-icon">
            <img src="./images/cart.png" alt="cart" />
            <p>{totalItems}</p>
          </div>
        </header>
        <section className="main-cart-section">
          <h1>Shopping Cart</h1>
          <p className="total-items">
            You have <span className="total-items-count">{totalItems}</span> items in your
            shopping cart
          </p>
        </section>
      </>
    );
  }
  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>Continue Shopping</h3>
        </div>
        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>{totalItems}</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          You have <span className="total-items-count">{totalItems}</span> items in your
          shopping cart
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {items.map((item) => (
                <Items key={item.id} {...item} />
              ))}
            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
          <h3>
            Cart Total : <span>{totalAmount} Rs</span>
          </h3>
          <button>Checkout</button>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;
