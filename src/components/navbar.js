const Navbar = () => {


    function overlay(){
        //check classlist
        const overlayDiv = document.getElementById('overlay');
        if(overlayDiv.classList.contains('-translate-y-[110vh]')){
            overlayDiv.classList.remove('-translate-y-[110vh]')
        }
        else if(!overlayDiv.classList.contains('-translate-y-[110vh]')){
            overlayDiv.classList.add('-translate-y-[110vh]')
        }
    };


    return ( 
        <>

        <div id="overlay" className=" w-[100%] top-0 left-0 bg-[#fff] backdrop-blur-sm h-[50vh] flex justify-center items-center -translate-y-[110vh] shadow transition-all duration-500 fixed z-[1]">
            <div className=" flex flex-col justify-center items-center space-y-5">
                <p className=" font-normal cursor-pointer text-lg font-Outfit">Home</p>
                <p className=" font-normal cursor-pointer text-lg font-Outfit">Packages</p>
                <p className=" font-normal cursor-pointer text-lg font-Outfit">Testimonials</p>
                <p className=" font-normal cursor-pointer text-lg font-Outfit">About</p>
            </div>
        </div>

        <div className="md:px-16 px-4 bg-[#f5f5f4] shadow-lg flex justify-between items-center py-8">
            <p className=" text-xl md:text-2xl font-Outfit font-semibold text-[#48487F]">Clean Burst Powerwash LLC</p>
            <span className=" hidden md:flex flex-row items-center space-x-6 font-Outfit text-[#000] font-medium text-base">
                <p>Get Quote</p>
                <button className=" px-4 py-2 text-[#f1f1f1] rounded-lg bg-[#48487F]">Call Now</button>
            </span>
            <div onClick={ overlay } className="menu-icon block md:hidden z-40">
                <input className="menu-icon__cheeckbox" type="checkbox" />
                <div>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Navbar;