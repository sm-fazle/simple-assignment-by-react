import React from 'react';

const Footer = () => {
    return (
        <div className='my-30'>
            <h1 className='text-blue-500 text-3xl font-bold capitalize text-center'>auction <span className='text-yellow-500'>gallery</span></h1>
            <div className='mt-6 font-bold text-xl flex gap-5 capitalize justify-center items-center '>
                <h2>bid.</h2>
                <h2>win.</h2>
                <h2>own.</h2>
            </div>
           <div className='flex gap-10 mt-6 capitalize justify-center items-center'>
            <h2>home</h2>
            <h2>action</h2>
            <h2>category</h2>
            <h2> how to works</h2>
           </div>
           <p className='text-center mt-5'>© 2025 AuctionHub. All rights reserved.</p>
        </div>
    );
};

export default Footer;