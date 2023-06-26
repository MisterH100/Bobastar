
function Header(){
    
    return(
        <header  className=" w-screen h-[100px] px-[20px] bg-red-600 sm:w-full lg:px-[100px] lg:items-center lg:flex lg:justify-between" >
            <div className="hidden items-center gap-[10px] xl:flex">
                <div className="w-20 h-20 bg-white rounded-full">

                </div>
                <a href="#" className="w-[200px] h-[29px] text-white text-[16px] font-semibold">LogIn/SignUP</a>
            </div>

            <h1 className="text-left text-white text-[32px] uppercase font-normal xl:text-center xl:text-[96px]">Bobastar</h1>

            <div className="hidden items-center gap-[10px] xl:flex">
                <a href="#" className="h-[29px] text-white text-[16px] font-semibold">Cart</a>
                <div className="w-[50px] h-[50px] bg-zinc-300 rounded-full">

                </div>
            </div>
        </header>
    )
}

export default Header;