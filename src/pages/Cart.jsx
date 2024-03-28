import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { increase ,decrease} from "../reducers/productSlice"; // Assuming you have action creators for increasing and decreasing quantities
import '../styles.css';

function Cart() {
  const products = useSelector((state) => state.todos.todos);
  console.log(products)

  const dispatch = useDispatch();
  const history = useNavigate();

  const handleIncrease = (id) => {
    dispatch(increase(id));
  };

  const handleDecrease = (id) => {
    dispatch(decrease(id));
  };
  const Home = ()=>{
    history("/")
  }

  return (
    <div>
      {products.length === 0 ? (
        <div className="imgs">
          <img src="https://babasbestchicken.com/public/images/empty-cart.png" alt="" />
          <button className="items" onClick={() => history("/")}>Add Items</button>
        </div>
      ) : (
        <div>
          <h1 className="text-center">Your Products</h1>
          <button onClick={Home} className="go btn btn-primary">Back To Home</button>
          <div className="container d-flex">
            {products.map((product) => (
              <div key={product.id} className="card">
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h3 className="card-title">{product.name}</h3>
                  <p className="card-text">{product.description}</p>
                  <p><b>Model:{product.brand}</b></p>
                  <p><b>Total Price:{product.totalprice}</b></p>
                  <p><b>Quantity:{product.quantity}</b></p>
                  <button onClick={() => handleIncrease(product.id)} style={{ "marginRight": "10%" }} className="btn btn-primary">+</button>
                  <button onClick={() => handleDecrease(product.id)} className="btn btn-primary">-</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
