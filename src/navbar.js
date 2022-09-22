import { useState } from "react";
import logo1 from "./assets/Logo-text1.png"
import logo from "./assets/Logo-text.png"


const Navbar = (props) => {
 const [mobileMenuToggle, setMobileMenuToggle] = useState(false)
const [servicesToggle, setServicesToggle] = useState(false)

return ( 

<div className=" ">

    {/* logo and navigation bar*/}
    <header className="shadow-3xl bg-[#3943b7] py-5 relative  top-0">
        <div className="flex justify-end items-center relative">
            {/* logo*/}
            <div className="ml-1 absolute left-[-30px] bottom-[1px] h-[72px]"><img src={logo1} alt="logo" className="w-[285px]"/> </div>
            {/* all navigations*/}
            <nav className="mr-5" >
                {/* pc navigation bar*/}  
  <div id="pcNavMenu" className="hidden md:flex">

    <ul className="flex lg:gap-16 md:gap-12 items-center text-lg  text-white">
        <li><a class="active" href="index.html">Home</a></li>
        <li><a href="sme web p1.html">Register</a></li>
        <li><a href="sme web p2.html">Brand</a></li>
        <li><a href="sme web p.html">About</a></li>
        <li><a href="Sign-up.html">Sign up</a></li>
        <li className="bg-white rounded px-3 py-1 font-semibold text-center text-black"><a href="Sign-in.html">Login</a></li>
    </ul>
        
  </div>
{/* mobile navigation bar button*/}
 <div className="md:hidden" onClick={()=> setMobileMenuToggle(!mobileMenuToggle)}>
  <div className="h-1 w-7 bg-white my-1"></div>
  <div className="h-1 w-5 bg-white my-1 ml-1"></div>
  <div className="h-1 w-7 bg-white my-1"></div>
</div>

{/* mobile navigation menu*/}
{mobileMenuToggle &&
<div className="fixed top-0 bottom-0 left-0 w-full z-[999]">
<div className="fixed top-0 bottom-0 left-0 w-full bg-[#0000006e] " onClick={()=> setMobileMenuToggle(!mobileMenuToggle)}>
</div>
<div id="mobileNavMenu" className="flex flex-col text-white bg-[#3943b7] fixed top-0 right-0 h-full w-4/5 overflow-scroll
rounded-xl z-[9999] animate-slide">

<div className="flex justify-end mr-6 pt-3 "
 ><h2 className="text-4xl " onClick={()=> setMobileMenuToggle(!mobileMenuToggle)}>&times;</h2></div>
        <div className="px-8 pt-5 pb-3 flex flex-col items-center gap-10 text-center">
        <a className="border-b-4   w-full text-xl font-light pb-2"   href="index.html">Home</a>
        <div className="border-b-4 w-full text-xl font-light pb-2 flex gap-5 justify-center"><span>Services</span>
        <span onClick={()=> setServicesToggle(!servicesToggle)} >{servicesToggle ? "<" :">"}</span></div>

        <a className= {`border-b-4  w-full text-xl font-light pb-2 ${servicesToggle ? "block" :"hidden"}`} href="sme web p1.html">Register your business</a>
        <a className= {`border-b-4  w-full text-xl font-light pb-2 ${servicesToggle ? "block" :"hidden"}`}   href="sme web p2.html">Brand your business</a>
        <a className="border-b-4  w-full text-xl font-light pb-2"   href="sme web p.html">About us</a>
        <a className="border-b-4  w-full text-xl font-light pb-2"   href="Sign-up.html">Sign up</a>
        <a className="border-b-4  w-full text-xl font-light pb-2"   href="Sign-in.html">Login</a>
        </div></div></div>
}
        </nav>
        </div>
    </header>


{/* second header for on scroll*/}
    <header className={`shadow-3xl  py-5 fixed left-0 right-0  w-full  z-[999] duration-[.5s] 
    ${props.scroll === "show" ? "top-0" :"top-[-16rem]"}
    ${props.color === "white" ? "bg-white text-[#3943b7]" :"bg-[#3943b7] text-white"}
    
    `} >
        <div className="flex justify-end items-center relative">
            {/* logo*/}
            <div className="ml-1 absolute left-[-30px] bottom-[1px] h-[72px]">
      <img src={props.color === "white" ? logo : logo1} alt="logo" className="w-[285px]"/> </div>
            {/* all navigations*/}
            <nav className="mr-5" >
                {/* pc navigation bar*/}
  <div id="pcNavMenu" className="hidden md:flex">

    <ul className="flex lg:gap-16 md:gap-12 items-center ">
        <li><a className="" href="index.html">Home</a></li>
        <li><a href="sme web p1.html">Register</a></li>
        <li><a href="sme web p2.html">Brand</a></li>
        <li><a href="sme web p.html">About</a></li>
        <li><a href="Sign-up.html">Sign up</a></li>
        <li className={` rounded px-3 py-1 font-semibold text-center 
        ${props.color === "white" ? "bg-[#3943b7] text-white" : "bg-white text-[#3943b7]"}
        `} 
        ><a href="Sign-in.html">Login</a></li>
    </ul>
        
  </div>
{/* mobile navigation bar button*/}
 <div className="md:hidden" onClick={()=> setMobileMenuToggle(!mobileMenuToggle)}>
  <div className={`h-1 w-7 my-1 ${props.color === "white" ? "bg-[#3943b7] text-white" : "bg-white text-[#3943b7]"}`}></div>
  <div className={`h-1 w-5 ml-1 my-1 ${props.color === "white" ? "bg-[#3943b7] text-white" : "bg-white text-[#3943b7]"}`}></div>
  <div className={`h-1 w-7 my-1 ${props.color === "white" ? "bg-[#3943b7] text-white" : "bg-white text-[#3943b7]"}`}></div>
</div>

{/* mobile navigation menu*/}
{mobileMenuToggle &&
<div className="fixed top-0 bottom-0 left-0 w-full">
<div className="fixed top-0 bottom-0 left-0 w-full bg-[#0000006e] " onClick={()=> setMobileMenuToggle(!mobileMenuToggle)}>
</div>
<div id="mobileNavMenu" className="flex flex-col text-white bg-[#3943b7] fixed top-0 right-0 h-full w-4/5 overflow-scroll
rounded-xl z-[9999] animate-slide">

<div className="flex justify-end mr-6 pt-3 "
 ><h2 className="text-4xl " onClick={()=> setMobileMenuToggle(!mobileMenuToggle)}>&times;</h2></div>
        <div className="px-8 pt-5 pb-3 flex flex-col items-center gap-10 text-center">
        <a className="border-b-4   w-full text-xl font-light pb-2"   href="index.html">Home</a>
        <div className="border-b-4 w-full text-xl font-light pb-2 flex gap-5 justify-center"><span>Services</span>
        <span onClick={()=> setServicesToggle(!servicesToggle)} >{servicesToggle ? "<" :">"}</span></div>

        <a className= {`border-b-4  w-full text-xl font-light pb-2 ${servicesToggle ? "block" :"hidden"}`} href="sme web p1.html">Register your business</a>
        <a className= {`border-b-4  w-full text-xl font-light pb-2 ${servicesToggle ? "block" :"hidden"}`}   href="sme web p2.html">Brand your business</a>
        <a className="border-b-4  w-full text-xl font-light pb-2"   href="sme web p.html">About us</a>
        <a className="border-b-4  w-full text-xl font-light pb-2"   href="Sign-up.html">Sign up</a>
        <a className="border-b-4  w-full text-xl font-light pb-2"   href="Sign-in.html">Login</a>
        </div></div></div>
}
        </nav>
        </div>
    </header>


</div>


     )
};
 
export default Navbar;