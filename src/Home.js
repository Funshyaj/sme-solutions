import { useState } from "react";
import downArrow  from "./assets/down-arrow-svgrepo-com.svg"
import fin from "./assets/finance-concept-illustration_114360-2208-removebg-preview.png"
import img1 from "./assets/cbbb0013af5b57b85910f4e02824ea59-removebg-preview.png"
import img2 from "./assets/investing-concept-illustration_114360-6492-removebg-preview.png"
import img3 from "./assets/investment-data-concept-illustration_114360-7373-removebg-preview.png"


import Navbar from "./navbar";
import Footer from "./footer.Component";

const Home = () => {
const [scroll, setScroll] = useState("")
const [color, setColor] = useState("")

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
       setScroll("show")
        setColor("")
        
      
      if (document.body.scrollTop >1150 || document.documentElement.scrollTop > 1150) {
        setColor("white")
      }


      if (document.body.scrollTop >1650 || document.documentElement.scrollTop > 1650) {
        setColor("")
      }}

      else if (document.body.scrollTop <= 600 || document.documentElement.scrollTop <= 600) {
        setScroll(false)
      }
    }


    return ( 
        <div>
            <Navbar 
            scroll={scroll}
            color={color}/>
            
            {/* welcome screen body*/}
<div className="h-screen md:h-[90vh] px-5 p-10 flex flex-col gap-8 justify-start overflow-hidden relative" >
<div className="flex flex-col justify-start pr-16 md:pr-80 lg:pr-[31rem] md:pl-10 md:pt-12 gap-3 z-[2]">
    <h1 className="text-2xl text-[#0e0e52] font-semibold md:text-4xl">Welcome</h1>
    <p className="text-base text-[#0e0e2d] leading-7 md:text-2xl md:leading-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi atque saepe deserunt perspiciatis dolorum illo recusandae, laudantium qui quidem dicta temporibus neque minus omnis reprehenderit, error eligendi quo est adipisci.</p>
</div>
<div className="absolute top-[45%] md:top-[15%] right-4 w-full z-[1]">
    <img src={img2} alt="png" className="min-w-[250px] absolute -right-10 w-4/5 md:w-[35%]"/>
</div>
<div className=" flex absolute my-5 bottom-2 left-[20%] md:left-[40%] md:relative lg:top-44 z-[2]">
    <p className="text-2xl font-semibold text-white">Lets get started</p>
   <a href="#section-1"><img src={downArrow} alt="downarrow" className="animate-bounce w-8 text-white" /></a> 
    </div>

    <div class="w-full h-[350px] z-0 absolute left-0 bottom-2 bg-divider clip"></div>
</div>




  {/* section 1*/}

<div className="-mt-9">
<section className="bg-[#3943b7] py-8 px-2  md:h-[100vh] mt-5 ">
    <div className="overflow-hidden bg-white h-[95vh] px-5 pt-12 pb-5 rounded relative md:h-full  md:px-32 md:py-20  flex flex-col justify-start gap-3 ">
    <div className="pr-16 z-[1] md:pr-[21rem]"> 
        <h2 className="text-[#0e0e52] text-2xl font-semibold md:text-4xl pb-5">Register Your Business</h2>
        <p className="text-base md:text-xl text-[#0e0e2d]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eius, rerum voluptas voluptate facilis inventore deleniti, assumenda itaque aut sed optio esse nostrum asperiores similique. Provident vel nihil quas vitae.</p>
    </div>
    <div className="pb-16 z-[1] pl-5">
        <ul className="list-disc text-base md:text-xl">
            <li>cac</li>
            <li>promte</li>
            <li>find a name</li>
        </ul>
    </div>

    <div className="absolute left-[15%] md:left-[50%] top-[40%] md:top-10 z-0 w-full"> 
        <img src={fin} alt="image" className=" min-w-[250px] w-4/5 md:w-[35%]"/>
    </div>
    <div className="flex justify-end absolute bottom-2 right-5 md:bottom-24 md:right-[unset] md:left-[15%] hover:opacity-[.9] active:opacity-[.9] duration-[.5s] ">
        <button className="bg-[#3943b7] text-white px-9 py-2 rounded  font-bold z-1 duration-[.5s]">
        <i class="text-4xl fa fa-arrow-right "></i>
        </button>
    </div>
    </div>
    
</section>


   {/* section 2*/}

<section className="-mt-1">
    <div className="overflow-hidden bg-[#3943b7] text-white h-[95vh] nxl:h-screen  md:h-full px-5 md:px-32 md:py-24 py-12 relative flex flex-col justify-start gap-3">
    <div className="pr-16 z-[1]  md:pr-[21rem]"> 
        <h2 className="text-[#0e0e52] text-2xl font-semibold md:text-4xl pb-5">Register Your Business</h2>
        <p className="text-base md:text-xl ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eius, rerum voluptas voluptate facilis inventore deleniti, assumenda itaque aut sed optio esse nostrum asperiores similique. Provident vel nihil quas vitae.</p>
    </div>
    <div className="pb-16 z-[1] pl-5">
        <ul className="list-disc">
            <li>cac</li>
            <li>promte</li>
            <li>find a name</li>
        </ul>
    </div>
    <div className="absolute nl:top-[40%] nxl:top-[30%]  left-[25%] top-[45%] md:top-[10%] z-0 w-full md:left-[50%]"> 
        <img src={img1} alt="image" className=" min-w-[250px] w-4/5 md:w-[35%]"/>
    </div>
    <div className="flex justify-end absolute bottom-2 right-5 md:bottom-24 md:right-[unset] md:left-[15%] hover:opacity-[.9] active:opacity-[.9] duration-[.5s] ">
        <button className="bg-white text-[#3943b7] px-9 py-2 rounded  font-bold z-1">
        <i class="text-4xl fa fa-arrow-right "></i>
        </button>
    </div>
    </div>
</section>


  {/* section 3*/}
  <div className="-mt-9">
<section className="bg-[#3943b7] py-8 px-2  md:h-[100vh] mt-5 ">
    <div className="overflow-hidden bg-white h-[98vh] px-5 pt-12 pb-5 rounded relative md:h-full  md:px-32 md:py-20  flex flex-col justify-start gap-3 ">
    <div className="pr-16 z-[1]  md:pr-[21rem]"> 
        <h2 className="text-[#0e0e52] text-2xl font-semibold md:text-4xl pb-5">Register Your Business</h2>
        <p className="text-base md:text-xl text-[#0e0e2d]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eius, rerum voluptas voluptate facilis inventore deleniti, assumenda itaque aut sed optio esse nostrum asperiores similique. Provident vel nihil quas vitae.</p>
    </div>
    <div className="pb-16 z-[1] pl-5">
        <ul className="list-disc text-[#0e0e2d]">
            <li>cac</li>
            <li>promte</li>
            <li>find a name</li>
        </ul>
    </div>

    <div className="absolute left-[25%] top-[50%] nl:top-[40%] nxl:top-[35%]  md:top-0 z-0 w-full md:left-[55%]"> 
        <img src={img3} alt="image" className=" min-w-[250px] w-4/5 md:w-[35%]"/>
    </div>
    <div className="flex justify-end absolute bottom-2 right-5  md:bottom-24 md:right-[unset] md:left-[15%] hover:opacity-[.9] active:opacity-[.9] duration-[.5s] ">
        <button className="bg-[#3943b7] text-white px-9 py-2 rounded  font-bold z-1">
        <i class="text-4xl fa fa-arrow-right "></i>
        </button>
    </div>
    </div>
    
</section>
</div>
</div>


<Footer />
</div>
)
}
 
export default Home;