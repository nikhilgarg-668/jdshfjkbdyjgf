import React,{useEffect,useState} from 'react';
import { Productdisplayinfo } from './My_coponents/Productdisplayinfo';

const App=()=>{
  const [products,setProducts]=useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:5000/products')
    .then(response=>response.json())
    .then(data=>setProducts(data))
    .catch(error=>console.error("Error fetchhing in products,,Try Agaain",error));

  },[]);
   return  (
    <div className='App'>
      <Productdisplayinfo products={products} />
    </div>
   );

};

export default App;