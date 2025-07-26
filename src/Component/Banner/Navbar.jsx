import React from 'react';

const Navbar = () => {
    return (
        <div>
                <div className=' mt-10 w-[90%] mx-auto'>
 <div className="navbar  justify-between bg-[E4E5E6] ">
  <div className="flex  ">
    <a className=" text-blue-500 text-3xl font-bold capitalize ">auction <span className='text-yellow-500'>gallery</span></a>
  </div>
  <div className='flex gap-10 capitalize text-xl font-bold  '>
    <h2>home</h2>
  <h2>auction</h2>
  <h2>categories</h2>
  <h2>How to works</h2>
</div>


  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 bg-gray-200 rounded-full">
    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
     </svg>
  
          <span className="badge badge-sm indicator-item">9</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">9 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ml-5">
        <div className="w-20 rounded-full ">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://i.postimg.cc/P5h28nH3/512154539-670907299276451-1381610963652051290-n.jpg"/>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
</div>
        </div>
    );
};

export default Navbar;