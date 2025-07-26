import React from 'react';

const Banner = () => {
    return (
        <div  className="h-screen bg-cover bg-center w-full"
      style={{ backgroundImage: "url('/Banner-min.jpg')" }}>




            <div className='text-white pl-25 pt-50 w-140'>
        <h1 className='text-4xl font-bold mb-10 '>Bid on Unique Items from Around the World</h1>
        <p className='text-xl'>Discover rare collectibles, luxury goods, and vintage
         treasures in our curated auctions</p>
         <button className='btn mt-5 rounded-3xl px-5  text-xl capitalize'>explore auction</button>
    </div>


        </div>
    );
};

export default Banner;