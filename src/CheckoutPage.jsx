import React from "react";
import "./Checkout.css";
const CheckoutPage = () => {
  return (
    <>
      <div className="checkout">
        <img
          src="https://static-prod.adweek.com/wp-content/uploads/2019/09/amazon-impact-advertising-ecosystem-CONTENT-2019.jpg.webp"
          className="checkout_image"
          alt=""
        />
        <h2 className="checkout_heading">Your Shooping Basket is Empty</h2>
        <p>
          Your Shooping Basket is Empty.Please Click on Add List Button To Add
          The Product.{" "}
        </p>
      </div>
    </>
  );
};

export default CheckoutPage;
