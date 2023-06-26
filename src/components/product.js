import {productData} from "../utils/data";


function Product(){
    const productDetails = productData.map(product =>

        <div key={product.id} className="mx-auto w-full">
            <h1 className="w-full h-[53px] text-center text-white text-[32px] font-extrabold">{product.name}</h1>
            <li className="w-full h-[29px] text-center text-white text-[16px] font-medium underline list-none">{product.size}</li>
             <img 
              src={product.imageId}
              alt={product.name} 
              width={200} 
              height={230}
              className="mx-auto "
            />
            <p className="text-center text-white text-[20px] font-extrabold">R{product.price}</p>
            <button className="w-[204px] h-10 block mx-auto text-white bg-red-600 rounded-[40px] border-[1px] border-transparent hover:bg-inherit hover:border-white transition-all transition-[0.2s]">Buy</button>
        </div>
        
    );

    return(
 
        <div  className="w-[250px] h-[300px]">
            {productDetails}
        </div>
     
        
    )
}

export default Product;