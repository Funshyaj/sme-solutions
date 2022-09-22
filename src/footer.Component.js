const Footer = () => {
    return ( <footer className="bg-[#0e0e65] text-white px-4 pt-3 pb-2 relative bottom-0 left-0 right-0">

<div className="footer-ctn">
    <div className="flex flex-wrap items-center">
    <div className="grow w-[31rem] md:w-40" >
 <h3 className="text-3xl">SME SOLUTIONS</h3>
 <p>Sme solutions is dedicated to helping you start your business from ground up</p>
  </div>

<div className="grow-[5] flex flex-col md:flex-row justify-between md:justify-evenly items-start gap-5 py-5">
  <div>
<h5 className="text-2xl">Contact</h5>
<ul>
    <li><a href="">08078559693</a></li>
    <li><a href="">08135530345</a></li>
    <li><a href="">Funshoajayi29@gmail.com</a></li>
</ul>
</div>

  <div>
    <h5 className="text-2xl">Insight</h5>
    <ul>
        <li><a href="">Blog</a></li>
        <li><a href="">Reaserch</a></li>
    </ul>
  </div>

  <div>
<h5 className="text-2xl">Company</h5>
<ul>
    <li><a href="">Services</a></li>
    <li><a href="">About</a></li>
</ul>
  </div>
</div>
</div>


  <div className="flex flex-col items-center py-5">
<h2 className="text-xl md:text-3xl">Follow us on</h2>
 <ul class="flex gap-10 md:gap-20 py-2">
  <li><a href="www.facebook.com/funshyajayi"><i class="fa fa-facebook  text-2xl md:text-3xl"></i></a></li>
    <li><a href="www.twitter.com/funshyaj"><i class="fa fa-twitter text-2xl md:text-3xl"></i></a></li>
    <li><a href="www.instagram.com/one_fine_boy"><i class="fa fa-instagram text-2xl md:text-3xl"></i></a></li>
    <li><a href="www.linkedin.com/in/funsho-ajayi-a36087229"><i class="fa fa-linkedin-square text-2xl md:text-3xl"></i></a></li>
 </ul>
 </div>

<hr  className="w-full bg-white"/>
<div class="footer-bottom py-5">
 <p>copyright &copy;2022 <a href="#">smesolutions</a>  </p>
</div>
</div>
    </footer> );
}
 
export default Footer;