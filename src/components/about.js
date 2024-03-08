import fullpeople from './assets/full-shot-people-cleaning-office.jpg';

const About = () => {
    return ( 
        <div className="mt-32 px-4 md:px-16 w-full flex flex-col justify-center items-center">
            <p className=" font-Outfit font-medium text-base text-[#48487F] text-center">About</p>
            <p className=" font-Outfit font-semibold text-black text-3xl mt-3 text-center">What We Do in Detail</p>
            <div style={{backgroundImage:`url(${fullpeople})`, backgroundPosition:'', backgroundSize:'cover'}} className=" mt-16 w-full h-[400px] rounded-md bg-[#f5f5f4]"></div>

            <p className=' mt-12 font-Outfit font-normal text-base'>
            Clean Burst is proud to offer the best hot water pressure washing, roof cleaning and exterior window cleaning solutions to the commercial and residential markets of Reston, Herndon, Chantilly, Oakton, Sterling, Ashburn, Broadlands, and Leesburg.
            <br/><br/>
            From cottages to mansions, large or small business, we have the knowledge and experience to get the job done right the first time.We only use top of the line equipment and cleaning chemcials guaranteeing a happy clean home! With over 10years of experience, we specialize in.<br/><br/>

            House Washing<br/>
            High pressure heated concrete cleaning<br/>
            Roof Cleaning<br/>
            Gutter Cleaning and exterior window cleaning<br/>
            Deck Restoration and Seal<br/>
            Deck Staining<br/>
            Fence and Patio Cleaning And More!<br/><br/>

            We encourage you to fully explore our gallery section and look at before and after photos. As a result, we’re confident you’ll find this information beneficial in choosing us as your cleaner of choice. Your home is the most expensive investment you will most likely have in your lifetime.Wouldn’t you rather use a company that understands this concept when restoring your most precious and valuable investments? Our Mission is to provide excellent service or your money back. Thank You.
            </p>
        </div>
     );
}
 
export default About;