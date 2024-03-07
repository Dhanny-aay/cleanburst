const Navbar = () => {
    return ( 
        <>
        <div className=" px-16 bg-[#f5f5f4] shadow-lg flex justify-between items-center py-8">
            <p className=" text-2xl font-Outfit font-semibold text-[#48487F]">Clean Burst Powerwash LLC</p>
            <span className=" flex flex-row items-center space-x-6 font-Outfit text-[#000] font-medium text-base">
                <p>Get Quote</p>
                <button className=" px-4 py-2 text-[#f1f1f1] rounded-lg bg-[#48487F]">Call Now</button>
            </span>
        </div>
        </>
     );
}
 
export default Navbar;