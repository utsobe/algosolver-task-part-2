import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ children }) => {
    const menuItems = <>
        <li><NavLink className='mx-1 rounded-lg' to='/'>Home</NavLink></li>
        <li><NavLink className='mx-1 rounded-lg' to='/services'>Services</NavLink></li>
        <li><NavLink className='mx-1 rounded-lg' to='/plans'>Plans</NavLink></li>
        <li><NavLink className='mx-1 rounded-lg' to='/blog'>Blog & News</NavLink></li>
        <li><NavLink className='mx-1 rounded-lg' to='/contact'>Contact</NavLink></li>
        <li><NavLink className='mx-1 rounded-lg' to='/signin'>Sign in</NavLink></li>
    </>
    return (
        <div class="drawer drawer-end ">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div className="sticky top-0 bg-white z-50 shadow-md">
                    <div class="max-w-7xl mx-auto lg:px-12 navbar">
                        <div class="flex-1 px-2 mx-2 font-bold text-2xl">Fox Coder</div>
                        <div class="flex-none lg:hidden">
                            <label for="my-drawer-3" class="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div class="flex-none hidden lg:block">
                            <ul class="menu menu-horizontal">
                                {/* <!-- Navbar menu content here --> */}
                                {menuItems}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- Page content here --> */}
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {/* <!-- Sidebar content here --> */}
                    {menuItems}
                </ul>

            </div>
        </div>
    );
};

export default Header;