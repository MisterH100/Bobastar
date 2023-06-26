import Product from "./product";


function TopPoducts(){

    return(
        <section className="w-full h-[300px] bg-zinc-950" >
            <div  className="w-[250px] mx-auto lg:mx-[100px] lg:w-auto">
                <h1 className="lg:line h-[60px] text-center text-white text-[32px] mt-[-300px] lg:text-[40px] lg:mt-[130px] font-extrabold ">Top products</h1>
                <div className="h-[500px] overflow-y-scroll mt-[10px] flex flex-wrap  gap-[300px] lg:mx-[100px] lg:justify-between lg:items-center lg:gap-[0px] lg:overflow-visible ">
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
            </div>
        </section>
    )
}

export default TopPoducts; 