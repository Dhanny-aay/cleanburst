const Testimonial = () => {
    return ( 
        <>
        <div className="mt-32 px-4 md:px-16 w-full flex flex-col justify-center items-center">
            <p className=" font-Outfit font-medium text-base text-[#48487F] text-center">Testimonials</p>
            <p className=" font-Outfit font-semibold text-black text-3xl mt-3 text-center">Our Works Speaks for itself</p>
            <p className=" mt-4 text-[#676767] font-Outfit text-base text-center md:px-[15%]">We work hard to provide exceptional service, because Customer Satisfaction is our number one priority and we GUARANTEE everything we do</p>

            <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-2 gap-[32px]">
                <div className="w-full p-8 rounded-md border border-[#00000074] relative">
                    <p className=" font-Outfit font-normal text-sm">"Gary and his partner went above and beyond cleaning my home. I think it’s also important to note how well they communicated the process and set the proper expectations before the job started. Given that, they still went above my expectations. 100% recommend."</p> 
                    <p className=" absolute bottom-3 right-6 text-[#48487F] font-Outfit text-base font-normal">- Sam K</p>
                </div>
                <div className="w-full p-8 rounded-md border border-[#00000074] relative">
                    <p className=" font-Outfit font-normal text-sm">
                    "Fast, friendly, and efficient communication and they did a fantastic job on my house. Very thorough. It looks sparkling and new! I'll be using them again for sure!"</p>
                    <p className=" absolute bottom-3 right-6 text-[#48487F] font-Outfit text-base font-normal">- Bobby M</p>
                </div>
                <div className="w-full p-8 rounded-md border border-[#00000074] relative">
                    <p className=" font-Outfit font-normal text-sm">
                    "Clean Burst Powerwash LLC sent reminders of the appointment, arrived on time, Very professional, courteous, took extra care to ensure the job was done right. My Father's home was spotless as if it were staged to sell. Great price compared to the competition."
                    </p>
                    <p className=" absolute bottom-3 right-6 text-[#48487F] font-Outfit text-base font-normal">-  Kevin S</p>
                </div>
                <div className="w-full p-8 rounded-md border border-[#00000074] relative">
                    <p className=" font-Outfit font-normal text-sm">
                        "Clean Burst Powerwash LLC surpassed my expectations. From prompt appointment reminders to their punctual arrival, they exhibited professionalism and courtesy throughout. Their attention to detail ensured the job was executed flawlessly."
                    </p>
                    <p className=" absolute bottom-3 right-6 text-[#48487F] font-Outfit text-base font-normal">- John C</p>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Testimonial;