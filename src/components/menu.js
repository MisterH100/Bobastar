import Product from "./product";

function Menu(){
    return(
        <section className="w-full bg-zinc-950 mt-[100px]">
            <div className="w-[250px] mx-auto lg:mx-[100px] lg:w-auto">
                <h1  className="lg:line h-[60px]  mt-[1000px] text-center text-white text-[40px] lg:mt-[200px] font-extrabold uppercase">menu</h1>

                <h2  className=" h-[60px] mt-[40px] text-center text-white text-[32px] font-extrabold uppercase">regular</h2>
                <div  className=" h-[500px] overflow-y-scroll flex flex-wrap gap-[200px] lg:mx-[100px] lg:justify-between lg:items-center lg:gap-[0px] lg:overflow-visible">
                    <Product/>
                    <Product/>
                    <Product/>
                </div>

                <h2  className=" h-[60px] mt-[200px] text-center text-white text-[32px] font-extrabold uppercase">non-dairy</h2>
                <div className=" h-[500px] overflow-y-scroll flex flex-wrap gap-[200px] lg:mx-[100px] lg:justify-between lg:items-center lg:gap-[0px] lg:overflow-visible">
                    <Product/>
                    <Product/>
                    <Product/>
                </div>

                <h2  className=" h-[60px] mt-[200px] text-center text-white text-[32px] font-extrabold uppercase">lactose-free</h2>
                <div className=" h-[500px] overflow-y-scroll flex flex-wrap gap-[200px] lg:mx-[100px] lg:justify-between lg:items-center lg:gap-[0px] lg:overflow-visible">
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
            </div>
        </section>
    )
}

export default Menu;