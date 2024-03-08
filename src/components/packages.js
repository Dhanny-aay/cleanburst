import basic from './assets/basic.svg';
import deluxe from './assets/deluxe.svg';
import premium from './assets/premium.svg';

const Packages = () => {
    return ( 
        <>
        <div className=" mt-32 px-4 md:px-16 w-full flex flex-col justify-center items-center">
            <p className=" font-Outfit font-medium text-base text-[#48487F] text-center">Packages</p>
            <p className=" font-Outfit font-semibold text-black text-3xl mt-3 text-center">Explore Our Exciting Packages Today</p>
            <p className=" mt-4 text-[#676767] font-Outfit text-base text-center md:px-[15%]">Discover our exclusive package deals, tailored to meet your needs and enhance your experience. Explore our wide range of offerings and unlock incredible value today</p>
            <div className=" w-full mt-16 grid grid-cols-1 lg:grid-cols-3 gap-[32px]">
                <div className=" w-full bg-[#f5f5f4] rounded-md p-8 flex flex-col justify-center items-center">
                    <img src={ deluxe } className=' mt-4 w-10' alt="" />
                    <p className=' text-center font-medium font-Outfit text-black text-xl mt-2'>Basic House Wash</p>
                    <p className=' mt-3 font-Outfit font-normal text-sm text-[#1e1e1e] text-center'>Thorough cleaning from foundation to gutter-line. Low pressure, cold water, biodegradable detergents safely remove mold, mildew, and dirt</p>
                </div>
                <div className=" w-full bg-[#48487F] rounded-md p-8 flex flex-col justify-center items-center">
                    <img src={ deluxe } className=' mt-4 w-10' alt="" />
                    <p className=' text-center font-medium font-Outfit text-xl mt-2'>Deluxe House Wash</p>
                    <p className=' mt-3 font-Outfit font-normal text-sm text-[#1e1e1e] text-center'> Hot water eliminates mold, mildew, grime, nests. Includes gutter polishing, streak removal, and Hot Wax Protection for vinyl siding</p>
                </div>
                <div className=" w-full bg-[#f5f5f4] rounded-md p-8 flex flex-col justify-center items-center">
                    <img src={ deluxe } className=' mt-4 w-10' alt="" />
                    <p className=' text-center font-medium font-Outfit text-black text-xl mt-2'>Premium House Wash</p>
                    <p className=' mt-3 font-Outfit font-normal text-sm text-[#1e1e1e] text-center'>Includes hot water concrete cleaning, biodegradable detergents, and proper pressure for ultimate curb appeal</p>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Packages;