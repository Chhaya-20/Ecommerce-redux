import React, { useState ,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { addProduct } from "../reducers/productSlice";
import { useNavigate} from "react-router-dom";


function Home() {
  const[state,setst]=useState("")
  const items = [
    {
      id: 1,
      name: 'Smartphone',
      brand: 'Samsung',
      price: 599.99,
      description: 'A high-quality smartphone with advanced features.',
      image: 'https://m.media-amazon.com/images/I/61L1ItFgFHL.jpg',
    },
    {
      id: 2,
      name: 'Laptop',
      brand: 'Apple',
      price: 1299.99,
      description: 'A powerful laptop for professional use.',
      image: 'https://m.media-amazon.com/images/I/61Qe0euJJZL.jpg',
    },
    {
      id: 3,
      name: 'Headphones',
      brand: 'Sony',
      price: 149.99,
      description: 'High-fidelity headphones for immersive audio experience.',
      image: 'https://m.media-amazon.com/images/I/31UKyEjfHQL._SX300_SY300_QL70_FMwebp_.jpg',
    },
    {
      id: 4,
      name: 'Smart Watch',
      brand: 'Fitbit',
      price: 199.99,
      description: 'Track your fitness and receive notifications on the go.',
      image: 'https://m.media-amazon.com/images/I/712YIFdUHLL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      id: 5,
      name: 'Tablet',
      brand: 'Microsoft',
      price: 499.99,
      description: 'A versatile tablet for work and entertainment.',
      image: 'https://www.reliancedigital.in/medias/Samsung-Galaxy-TabS6-Tablet-493177064-i-7-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMzMwMHxpbWFnZS9qcGVnfGltYWdlcy9oMzYvaDk5Lzk4NjQzOTkwMjgyNTQuanBnfDZmMWQyNzQ3MWJlZjdiOGUzZTZhMGYxZWY0ZTU0NGMxNTY2YzcwNjhmZTQzMGE4YWU5YTE5NDY4YjhlZjNmMGU',
    },
    {
      id: 6,
      name: 'Wireless Speaker',
      brand: 'JBL',
      price: 99.99,
      description: 'Enjoy music wirelessly with high-quality sound.',
      image: 'https://m.media-amazon.com/images/I/31cBaG7eSTL._SX300_SY300_QL70_FMwebp_.jpg',
    },{
      id: 7,
      name: 'Digital Camera',
      brand: 'Canon',
      price: 799.99,
      description: 'Capture stunning photos and videos with professional-grade features.',
      image: 'https://m.media-amazon.com/images/I/31NjHKSIpZL._SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
      id: 8,
      name: 'Gaming Console',
      brand: 'Sony PlayStation',
      price: 399.99,
      description: 'Experience immersive gaming with high-performance hardware.',
      image: 'https://m.media-amazon.com/images/I/71MUfCIyAWL._AC_UY327_FMwebp_QL65_.jpg'
    },
    {
      id: 9,
      name: 'E-Reader',
      brand: 'Amazon Kindle',
      price: 119.99,
      description: 'Read your favorite books with a glare-free display and long battery life.',
      image: 'https://m.media-amazon.com/images/I/81NhAOCH2TL._AC_UY327_FMwebp_QL65_.jpg'
    },
    {
      id: 10,
      name: 'Fitness Tracker',
      brand: 'Garmin',
      price: 149.99,
      description: 'Monitor your health and fitness goals with advanced tracking features.',
      image: 'https://m.media-amazon.com/images/I/61AeGQhwjxL._AC_UY327_FMwebp_QL65_.jpg'
    },
    {
      id: 11,
      name: 'Portable SSD',
      brand: 'Samsung',
      price: 249.99,
      description: 'Store and transfer large files quickly with fast SSD storage.',
      image: 'https://m.media-amazon.com/images/I/71bBCTIvIIL._AC_UY327_FMwebp_QL65_.jpg'
    },
    {
      id: 12,
      name: 'Smart Home Speaker',
      brand: 'Google Nest',
      price: 99.99,
      description: 'Control your smart home devices and stream music with voice commands.',
      image: 'https://m.media-amazon.com/images/I/81VttNsrDwL._AC_UY327_FMwebp_QL65_.jpg'
    }
    
    // Add more products as needed
  ];


 
  const history = useNavigate();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
    //console.log(todos);

  
  const handleSubmit = (product) => {
    //console.log("ddmnvk")
    dispatch(
      addProduct({
        id: product.id,
        name: product.name,
        price: product.price,
        image:product.image,
        brand:product.brand,
        description:product.description,
      
      })
    );
    alert('Added Successfully...');
    setst("");
  };
  
  const cart = ()=>{
    history("/cart")
  }

 
  return (
    <>
    <h1 className="text-center">All Products</h1>
    <button onClick={cart} className="go btn btn-primary">Go To Cart</button>
    <div className="container d-flex">

    
      {items.map((product) => (
        <div key={product.id} className="card" >
        <img src={product.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>
          <p className="card-text">{product.description}</p>
          <p><b>Model:{product.brand}</b></p>
          <p><b>Price:{product.price}</b></p>
          <button onClick={()=>handleSubmit(product)} className="btn btn-primary">Add To Cart</button>
        
        </div>
      </div>

      ))}
    
   
  </div>
  </>
  );
}

export default Home;
