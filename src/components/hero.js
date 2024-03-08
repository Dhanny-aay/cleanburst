import checkAll from './assets/Check_All.png';
import tima from './assets/pexels-tima-miroshnichenko-6195125.jpg';
import phone from './assets/Phone.png';

const Hero = () => {
    return ( 
        <> 
        <div className=" w-full flex flex-col-reverse lg:flex-row justify-between items-center mt-8 lg:mt-12 px-4 md:px-16">
            <div className=" fade-in w-full mt-12 lg:mt-0 lg:w-[48%] flex-col">
                <p className=" font-Outfit font-medium text-[#48487F] text-xl">Clean Burst Powerwash LLC</p>
                <p className=" text-3xl md:text-5xl mt-3 font-semibold font-Outfit">Providing Top Quality Service in your area.</p>
                <p className=" text-base font-Outfit text-[#1e1e1e] mt-3">Brand New Hot Water Exterior Cleaning Service serving Fairfax and Loudoun County. Clean Burst is a family owned pressure washing company in Reston VA. We are fully insured, licensed, and focused solely on providing you the best possible service.</p>
                <div className='  mt-3'>
                    <span className='flex flex-row items-center'>
                        <img src={ checkAll } alt="" />
                        <p className=' font-Outfit font-normal text-[#1e1e1e] text-base'>30+ Years in business</p>
                    </span>
                    <span className='flex flex-row items-center'>
                        <img src={ checkAll } alt="" />
                        <p className=' font-Outfit font-normal text-[#1e1e1e] text-base'>Hot water pressure washing</p>
                    </span>
                    <span className='flex flex-row items-center'>
                        <img src={ checkAll } alt="" />
                        <p className=' font-Outfit font-normal text-[#1e1e1e] text-base'>Deck Restoration and Seal</p>
                    </span>
                </div>
                <span className=' flex flex-row w-full space-x-8 mt-4'>
                    <button className=' bg-[#000] text-white md:px-8 md:py-4 px-6 py-3 rounded-md shadow-md font-Outfit text-base text-center font-medium'>Call Us</button>
                    <button className=' bg-[#48487F] text-white md:px-8 md:py-4 px-6 py-3 rounded-md shadow-md font-Outfit text-base text-center font-medium'>Book an Appointment</button>
                </span>
            </div>
            <div  className=" scale-up-center w-full mt-12 lg:mt-0 lg:w-[48%] h-[420px] rounded-md relative flex items-end">
                <div className=' absolute -left-6 rounded-md -top-4 bg-[#f5f5f4] px-4 py-2 flex flex-row space-x-3 items-center'>
                    <img src={ phone } alt="" />
                    <span className=' flex flex-col font-Outfit '>
                        <p className=' text-sm font-medium text-black'>Call Us</p>
                        <p className=' text-[#48487F] font-normal text-base'>(703) 655-3344</p>
                    </span>
                </div>
                <div style={{backgroundImage:`url(${tima})`, backgroundPosition:'center', backgroundSize:'cover'}} className=' w-full h-[400px] rounded-md'>

                </div>
            </div>
        </div>
        </>
     );
}
 
export default Hero;