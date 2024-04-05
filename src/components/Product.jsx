import React from "react";

import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({items, cart , setCart}) => {
   
  const addToCart = (id,price,title,description,imgSrc) =>{
    const obj = {
      id,price,title,description,imgSrc
    }
    setCart([...cart, obj]);
    console.log("Cart element = ",cart)
    toast.success('Item added on cart', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }


  return (
    <>
    <ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      <div className="container my-5 ">
        <div className="row ">
          {items.map((product) => {
            return (
              <>
                <div key={product.id} className="col-lg-4 col-md-6 my-3 text-center
                d-flex justify-content-center items-align-center">
                  <div className="card bg-dark text-light" style={{ width: "18rem" }}>
                    <Link to={`/product/${product.id}`}
                     style={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                      <div className="d-flex justify-content-center align-items-center p-3">

                    <img
                      src={product.imgSrc}
                      className="card-img-top"
                      alt="..."
                      style={{width:'200px',borderRadius:'10px',border:'2px solid yellow'}}
                      />
                      </div>
                      </Link>
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <button className="btn btn-primary mx-3">
                        {product.price} ₹
                      </button>
                      <button
                      onClick={()=>addToCart(product.id,product.price,product.title,product.description,product.imgSrc)}
                       className="btn btn-warning"
                       >Add To Cart</button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
