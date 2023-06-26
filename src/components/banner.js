import { useState } from "react"

function Pill({text}){
    return(
        <div className="w-[280px] h-[100px] pt-[20px] bg-red-600 rounded-[50px] border-l-4 border-r-4 border-t-4 border-b-4 border-zinc-950 text-center text-white text-[32px] font-extrabold">
            {text}
        </div>
    )
}
function Banner(){
    const [newText, setNewText] = useState("");

    function handleClick(e){
       e.preventDefault()
    }

    return(
        <div className="w-screen h-[300px] background lg:w-full lg:h-[980px]">
            <div className="hidden lg:flex lg:justify-between lg:items-center lg:mx-[100px] lg:mt-[10px]">
                <ul className="flex gap-[60px]">
                    <li className="w-20 h-7 text-center text-white text-[24px] font-normal">Home</li>
                    <li className="w-20 h-7 text-center text-white text-[24px] font-normal">Menu</li>
                    <li className="w-20 h-7 text-center text-white text-[24px] font-normal">About</li>
                </ul>
                <form onSubmit={handleClick}>

                    <input type="text" 
                     maxLength={25}
                     id="text"
                     value={newText}
                     onChange={e => setNewText(e.target.value)}
                     placeholder="Search"
                     className="w-[300px] h-11 p-[10px] bg-zinc-300 rounded-[40px] border-0 outline-0" 
                    />
                    <button className="w-[50px] h-[50px] ml-[10px] bg-zinc-300 rounded-full">Search</button>
                </form>
               
            </div>
            <div className="hidden lg:flex lg:justify-between lg:mt-[880px] lg:mx-[100px]">
                <Pill
                    text="Boba"
                />
                <Pill
                    text="Boba"
                />
                <Pill
                    text="Boba"
                />
            </div>
            
        </div>
    )
}

export default Banner;