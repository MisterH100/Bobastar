import twitter from '../images/twitter.svg';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import pinterest from '../images/pinterest.svg';
import copyright from '../images/copyright.svg';

function Footer(){
    return(
        <footer  className="relative w-full h-[900px] lg:h-[450px] bg-stone-300 mt-[100px] px-[100px] flex flex-wrap justify-between">
            <div className="w-[480px] h-[225px] mt-[50px]">
                <h1 className="text-black text-[40px] font-bold">Contact Info</h1>
                <p className="text-black text-[20px] font-normal" >Address</p>
                <p className="text-black text-[20px] font-normal" >Email</p>
                <p className="text-black text-[20px] font-normal" >Phone</p >

                <h2 className="text-black text-[24px] font-bold" >Socials</h2>
                <img className="inline-block" 
                    src={twitter} 
                    alt="twitter"
                />
                <img className="inline-block ml-[10px]" 
                    src={facebook} 
                    alt="facebook"
                />
                <img className="inline-block ml-[10px]" 
                    src={instagram} 
                    alt="instagram"
                />
                <img className="inline-block ml-[10px]" 
                    src={pinterest} 
                    alt="pinterest"
                />

            </div>

            <span className="hidden absolute top-[80px] left-[32%] w-[500px] h-[2px] bg-red-600 lg:block"></span>

            <div className="w-[480px] h-[225px] mt-[50px]">
                <h1 className="text-black text-right text-[40px] font-bold">Information</h1>
                <p className="text-black text-right text-[20px] font-normal" >About Us</p>
                <p className="text-black text-right text-[20px] font-normal" >Privacy Policy</p>
                <p className="text-black text-right text-[20px] font-normal" >Terms and Conditions</p>
            </div>

            <div className="absolute flex gap-[4px] items-center top-[80%] left-[10%] lg:left-[40%]">
            <img 
                src={copyright} 
                alt="copyright"
            />
            <p className="text-center text-gray-600 text-[16px] font-normal">2023 MisterH100.All Rights Reserved</p>
            </div>
            
        </footer>
    )
}

export default Footer;