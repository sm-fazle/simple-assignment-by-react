import Navbar from './Component/Banner/Navbar'
import './App.css'
import Banner from './Component/Banner/Banner'
import Main from './Component/MainArea/Main'
import { Suspense, useState } from 'react'
import Footer from './Component/Banner/Footer'
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
function App() {

const [favorite, setFavorite]=useState([]);

const handleFavoriteAdd=(item)=>{
  setFavorite([...favorite, item]);
  toast.success('Item Added to your favorite lists');
}

const totalBidAmount = 
favorite.reduce((sum, item) => sum + item.currentBidPrice, 0);

 const RemoveFavItem=(remove)=>{
  const newAraay=favorite.filter(item=>item.id !==remove.id)
  setFavorite(newAraay)
   toast.success("Removed item from favorites");
 }

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

   {/* main start */}
    <div className='bg-[#EBF0F5] w-full py-10'>
      <h1 className='ml-23 capitalize text-[#0E2954] text-3xl font-bold py-3'>active auction</h1>
  <h2 className='ml-23  pb-5 text-2xl'>Discover and bid on extraordinary items</h2>


{/* table */}
    <div className='flex bg-[#EBF0F5] w-[90%] gap-10 mx-auto h-[1100px] '>
      <div className='leftSide bg-white w-[55%] rounded-2xl '>
       
        <Suspense fallback={<h3>loading please wait...</h3>}>
        <Main handleFavoriteAdd={handleFavoriteAdd} favorite={favorite}></Main>
        </Suspense>
         
      </div>

      <div className='rightSide overflow-y-auto w-[35%] card flex flex-col rounded-2xl  bg-[#FFFFFF]'>
    


    <div className='flex border-b-2 border-gray-400  '>
        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 mt-11  ml-32">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
<h2 className='text-[#102A53] font-bold capitalize text-2xl mt-10 mb-5 '>favorite items</h2>

    </div>
   
    <div className='text-center mt-15  border-b-2 border-gray-400'>
        {favorite.length === 0 && (
    <div className='card'>
    <h1 className='capitalize text-2xl font-bold'>no favorite yet</h1>
    <p className='text-gray-400 mt-5 mb-5'>
      Click the heart icon on any item <br /> to add it to your favorites
    </p>

  </div>
)}
        {
          
          favorite.map(love=>
            <div className=' border-4 border-black rounded-2xl mx-3 my-4'>
            <div className='flex justify-between px-5 my-10 mb-5 
           pb-5 border-b border-gray-300 last:mb-0'key={love.id}> 

            <img className='w-18 h-20' src={love.picture} />
             <div className='flex flex-col'>
              <p className='mb-5'>{love.title}</p>
               <div className='flex gap-5'>
                   <p>${love.currentBidPrice}</p>
             <p>Bids:{love.bidsCount}</p>
               </div>
             </div>
               <div>
                <svg xmlns="http://www.w3.org/2000/svg" 
               fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                stroke="currentColor"
                onClick={()=>RemoveFavItem(love)}
                 className="size-6 text-red-500 hover:bg-red-100 transition-colors duration-100">
                 <path strokeLinecap="round" strokeLinejoin="round" 
                  d="M6 18 18 6M6 6l12 12" />
                 </svg> 
               </div>
  
</div>
             </div>)
        }



    </div>
    <div className='flex justify-around mt-10 mb-5'>
        <h2 className='capitalize text-2xl'>total bids amount</h2>
        <h2 className='text-2xl'>${totalBidAmount}</h2>
    </div>







      </div>





    </div>
{/* tableEnd */}


    </div>
    {/* main end */}

<div>
  <Footer></Footer>
</div>



<Toaster 
   
  position="top-right" toastOptions={
    {
      style:{
       width: '600px',
      height: '70px',
      fontSize: '18px',
      fontWeight: 'bold',
      padding: '10px',
      borderRadius: '10px',
      background: '#fef3c7',
      color: '#1e293b',
     textTransform: 'capitalize'
     
      }    }
 } />
  






    </>
  )
}

export default App
