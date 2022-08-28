import React from "react";
import "./Product.css";
import { useStateValue } from "./Provider";
const Product = ({ id, title, Price, rating, img }) => {
  // const [{}, dispatch] = useStateValue();
  // const AddList = () => {
  //   dispatch({
  //     type: "Add To the Basket",
  //     item: {
  //       id: id,
  //       title: title,
  //       Price: Price,
  //       rating: rating,
  //       img: img,
  //     },
  //   });
  // };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{Price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating).fill(<p>⭐</p>)}
          {/* or */}
          {/* {Array(rating)
            .fill()
            .map((_) => {
              return <p>⭐</p>;
            })} */}
        </div>
      </div>
      <div className="img_button">
        <img src={img} alt="img" className="product_img" />
        <button className="list_button">Add to List</button>
      </div>
    </div>
  );
};

export default Product;
