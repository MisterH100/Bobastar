import sponsor1 from '../images/sponsor1.jpg';
import sponsor2 from '../images/sponsor2.gif';

function Sponsors(){
    return(
        <div className="hidden w-[1180px] h-[125px] opacity-[0.3] lg:flex justify-center items-center gap-[40px] bg-white rounded-[60px] mx-auto mt-[200px]">
            <img 
                className="w-44 h-[99px] rounded-[50px]"
                src={sponsor1} 
                alt="sponsor"
            />
            <img 
                className="w-44 h-[99px] rounded-[50px]"
                src={sponsor2} 
                alt="sponsor"
            />
        </div>
    )
}

export default Sponsors;