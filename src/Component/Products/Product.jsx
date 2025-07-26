import React from 'react';

const Product = ({pro, handleFavoriteAdd, favorite}) => {

    const isFavorited = favorite.some(item => item.id === pro.id);

    return (
        <div>
                       
<div className='flex  w-full px-5 mb-5 pb-4 border-b border-black last:mb-0'>
    
           <div className='flex w-1/2 '>
            <img className='rounded-sm text-center h-20 w-24' src={pro.picture} />
           <h1 className='text-sm font-bold text-blue-950 ml-4 mt-5'>{pro.title}</h1>
           </div>
           <div className='flex w-1/2 justify-between px-7 mt-5 font-bold text-blue-950'>
         <h3>${pro.currentBidPrice}</h3>
        <h3 className=''>{pro.timeLeft}</h3>
        
         <svg xmlns="http://www.w3.org/2000/svg" 
          onClick={()=> !isFavorited && handleFavoriteAdd(pro)}
            fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} 
            stroke="currentColor"


             className={`size-7 transition-all duration-300 ${
           isFavorited ? 'text-red-500 cursor-not-allowed ' : 'text-gray-400 cursor-pointer'
            }`}>


              <path strokeLinecap="round" strokeLinejoin="round"
             d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
    </div>
</div>
        </div>
    );
};

export default Product;