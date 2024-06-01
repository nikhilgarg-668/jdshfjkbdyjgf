import React from 'react'

export const Productdisplayinfo = ({products}) => {
  return (
    <div>
        <h1>Company's Top Products</h1>
        <ul>
            {products.map((product,index)=>(
                <li key={index}>
                    <h2>{product.name}</h2>
                    <p>Price:{product.price}</p>
                    <p>Rating:{product.rating}</p>
                    <p>Discount:{product.discount}</p>
                    <p>Availablity:{product.availability}</p>
                </li>
            ))}
        </ul>
    </div>
  );
};
export default Productdisplayinfo;
