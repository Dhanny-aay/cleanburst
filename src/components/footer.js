const Footer = () => {
    return ( 
        <>
        <div className=" px-4 md:px-16 bg-[#48487F] mt-16 pt-20 pb-10">
            <div className="flex flex-col-reverse lg:flex-row justify-between items-start pb-10">
                <div className=" w-full md:w-[50%] text-left">
                    <p className=" font-medium mt-4 lg:mt-0 text-white font-Outfit text-4xl">Talk to Us Today</p>
                    <button className=" px-4 py-2 text-[#000] rounded-lg bg-[#a1a1ee] font-Outfit mt-12">Call Now</button>
                    <p className=" text-base font-medium text-[#a1a1ee] font-Outfit mt-6">(703) 655-3344</p>
                </div>
                <div className=" w-full md:w-[50%]">
                    <p className=" text-[#ffffffa2] md:w-[400px] font-Outfit font-medium text-base">Our doors are open to serve you from 7:00 AM to 9:00 PM, Monday through Saturday, with Sunday reserved for rest and rejuvenation.</p>
                </div>
            </div>
            <div className=" border-t pt-10 text-center">
                <p className=" text-sm font-normal font-Outfit text-[#ffffffac]">All rights resverved by Clean Burst Powerwash LLC</p>
            </div>
        </div>
        </>
     );
}
 
export default Footer;