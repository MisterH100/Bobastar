import user from '../images/user.svg';
import cart from '../images/cart.svg';
import bars from '../images/bars.svg';
import { useState } from 'react';

function SideNav(){
    return(
        <div className="absolute w-[50%] h-[900px] bg-red-600 top-[100px] right-0 z-10 flex flex-col justify-center gap-[20px]">
            <h2 className="text-white text-center text-[20px] mt-0">SignIn/LogIn</h2>
            <ul>
                <li  className="text-white text-center text-[20px]">home</li>
                <li  className="text-white text-center text-[20px]">menu</li>
                <li  className="text-white text-center text-[20px]">about</li>
            </ul>

            <h3  className="text-white text-center text-[20px]">cart</h3>
        </div>  
    )

}


function Header(){
    return(
        <header  className="relative w-screen h-[100px] px-[20px] bg-red-600 sm:w-full lg:px-[100px] lg:items-center lg:flex lg:justify-between" >
            <div className="hidden items-center gap-[10px] xl:flex">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <img
                        src={user}
                        alt="user"
                        width={40}
                        height={40}
                    />
                </div>
                <a href="#" className="h-[29px] text-white text-[16px] underline font-semibold">LogIn/SignUP</a>
            </div>

            <div className="logo w-[300px] h-[100px] cursor-pointer"></div>

            <div className="hidden items-center gap-[10px] xl:flex">
                <a href="#" className="h-[29px] text-white text-[16px] font-semibold">Cart</a>
                <div className="w-[50px] h-[50px]rounded-full flex items-center justify-center">
                    <img 
                        src={cart}
                        alt="cart"
                        width={30}
                        height={30}
                    />
                </div>
            </div>
            <div className="absolute  right-[50px] top-[30px] xl:hidden">
                <img
                    src={bars}
                    alt="more"
                    width={40}
                    height={40}
                />
                
            </div>
            
            
        </header>
    )
}



export default Header;