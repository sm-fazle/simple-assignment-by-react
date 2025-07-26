import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';

const Main = ({handleFavoriteAdd, favorite}) => {
const[product, setProducts]=useState([]);

  useEffect(() => {
  const fetchData = async () => {
    const res = await fetch('/Product.json');
    const data = await res.json();
    setProducts(data);
  };
  fetchData();
}, []);
 
console.log(product)
    return (
        
            
        <div className='m-5 border border-black rounded-sm'>

  <div className='flex w-full font-semibold capitalize text-black  px-10 mt-5 mb-5 pb-4 border-b border-black '>
       <div className='w-1/2 '>
          <h1>item</h1>
            </div>
            <div className='flex w-1/2 justify-between '>
            <h1>current bid</h1>
            <h1>time left</h1>
            <h1>bid now</h1>
            </div>
          </div>
 
    <div className='flex flex-col gap-5'>

   
           {
            product.map(pro=><Product
               pro={pro} 
            handleFavoriteAdd={handleFavoriteAdd}
               favorite={favorite}
               ></Product>)
           }
</div>

                  
        </div>
        
    );
};

export default Main;