import "../App.css";
import logo from "../images/morning_logo_wulkan.avif";
import img1 from "../images/oliver-sjostrom-0AidOIzFAGc-unsplash.webp"
import img2 from "../images/0025__DSC3656_2200x_4b0cfcb1-0439-4878-9844-daac4393e213.jpg"
import { useState } from "react";
import img3 from "../images/img3.webp"
import img4  from "../images/img4.webp"
import img5 from "../images/img5.webp"
import img6 from "../images/img6.webp"
import img7 from "../images/img7.webp"
import img8 from "../images/img8.webp"
import img9 from "../images/img9.webp"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom"
function Header() {

 const [isShown, setIsShown] = useState(false)
 const [isShownCol, setIsShownCol] = useState(false)
 const [isShownDemo, setIsShownDemo] = useState(false)

 var settings = {
  dots: false,
  infinite:true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
 return (
    <><div>
        <Link to="/" className="Back_button p-4">
        <i className="fa-solid fa-arrow-left m-2"></i>
        Back</Link>
    </div>
    
    
   
    <div className="bg-black ">
  
    <div className="bg-black text-white text-center  sliderDiv">
   
    <Slider {...settings}>
    
      <div>
       <p>Free shipping on order over $200 <Link to="/sale" className="shopNowBtn">  shop now</Link> </p>
      </div>
      <div>
       <p>Planet friendly packages-always!</p>
      </div>
 
     
    </Slider>
    </div>
    </div>
    
      <div className="navbarUpperDiv ">
      
        <div className="row firstNavbarRow">
          <div className="col-lg-2  iconCol">
            {" "}
            <ul>
            <li className="nav-item dropdown list-unstyled">
              <a
                className="nav-link dropdown-toggle unitedDropDown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               UNITED STATES (USD $)
              </a>
              
              <ul className="dropdown-menu unitedDropMenu">
                <li>
                  <a className="dropdown-item" href="#">
                    Australia (AUD $)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  Canada (CAD $)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  France (EUR $)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  Germany (EUR $)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  Italy (EUR $)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  Japan (JPY $)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  Spain (EUR $)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  United Kingdom (GBP $)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  United States (USD $)
                  </a>
                </li>
              </ul>
            </li>
            </ul>
          </div>
          <div className="col-lg-8">
            {" "}
            <img className="logo" src={logo} />
          </div>
          <div className="col-lg-2  iconCol">
            <i className="fa-regular fa-user navbarIcons"></i>
            <i className="fa-solid fa-bag-shopping navbarIcons"></i>
            <i className="fa-solid fa-magnifying-glass navbarIcons"></i>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg  sticky-top">
          <div className="container-fluid">
         
            <button
              className="navbar-toggler menuIcon"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavDropdown">
              <ul className="navbar-nav navbarPagesList p-4">
              <li className="nav-item Store">
              <Link to="/store"
                    className="nav-link "
                    href="#"
                    role="button"
                  aria-expanded="false"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                  >
                   STORE
             
                  </Link>
       
                </li>
        

                <li className="nav-item Store">
              <Link to="/collections"
                    className="nav-link "
                    href="#"
                    role="button"
                  aria-expanded="false"
                    onMouseEnter={() => setIsShownCol(true)}
                    onMouseLeave={() => setIsShownCol(false)}
                  >
                  COLLECTION
             
                  </Link>
       
                </li>

                <li className="nav-item Store">
                  <Link to="/blog" className="nav-link" href="#">
                    BLOG
                  </Link>
                </li>
                <li className="nav-item Store">
                  <Link to="/theme" className="nav-link" href="#">
                    THEME FEATURES
                  </Link>
                </li>

                <li className="nav-item Store">
              <Link to="/demos"
                    className="nav-link "
                    href="#"
                    role="button"
                  aria-expanded="false"
                    onMouseEnter={() => setIsShownDemo(true)}
                    onMouseLeave={() => setIsShownDemo(false)}
                  >
                 DEMOS
             
                  </Link>
       
                </li>

                <li className="nav-item">
                  <Link to="/sale" className="nav-link saleclass" href="#">
                    SALE
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

  

{isShown && (
                    <div className="row  p-4  dropDownContent ">
                   <div className="col-lg-2 dropdownheadings">
                    <h4>ACCECCORIES</h4>
                    <ul className="dropdownheadings list-unstyled">
                      <li>All Products</li>
                      <li>Headwear</li>
                      <li>everyday Carry</li>
                      <li>Shorts</li>
                      <li>Patches & Pins</li>
                      <li>Packs & Luggage</li>
                    </ul>
                   </div>
                   <div className="col-lg-2 dropdownheadings">
                   <h4>TEES& KNITS</h4>
                    <ul className="dropdownheadings list-unstyled ">
                      <li>All Tees & Knits</li>
                      <li>Hat Trick Henley</li>
                      <li>Home Tee</li>
                      <li>Over The Mountains Tee</li>
                      <li>Skipper Tee</li>
                      <li>Clubber Tee</li>
                    </ul>
                   </div>
                   <div className="col-lg-2 dropdownheadings">
                   <h4>HEADWEAR</h4>
                    <ul className="dropdownheadings list-unstyled">
                      <li>All Headwear</li>
                      <li>Broken Arrow Hat</li>
                      <li>Sparky Hat</li>
                      <li>Drift Hat</li>
                      
                    </ul>
                   </div>
                   <div className="col-lg-3">
                 
  <img src={img2} className="card-img-top image " alt="..."/>
  <div className="card-body">
    <p className="card-text mt-3 text-center fw-bold cardText">ON SALE</p>
  </div> 
 
                   </div>
                   <div className="col-lg-3 ">
               
  <img src={img2} className="card-img-top image" alt="..."/>

    <p className="card-text mt-3 text-center fw-bold cardText">NEW ARRIVALS</p>
  </div>
</div>)}



         {isShownCol && (
                    <div className="row  p-4  dropDownContent ">
                  
                    <div className="col-lg-3">
                 
                 <img src={img3} className="card-img-top image " alt="..."/>
                
                   <p className="card-text mt-3 text-center fw-bold cardText">ACCESSORIES</p>
               
                
                                  </div>
                                  <div className="col-lg-3">
                 
                 <img src={img4} className="card-img-top image " alt="..."/>
                
                   <p className="card-text mt-3 text-center fw-bold cardText">HEADWEAR</p>
               
                
                                  </div>
                
                   <div className="col-lg-3">
                 
  <img src={img5} className="card-img-top image " alt="..."/>
 
    <p className="card-text mt-3 text-center fw-bold cardText">OUTWEAR</p>

 
                   </div>
                   <div className="col-lg-3 ">
               
  <img src={img1} className="card-img-top image" alt="..."/>

    <p className="card-text mt-3 text-center fw-bold cardText">SHORTS</p>
  </div>
</div>)}    


{isShownDemo && (
                    <div className="row  p-4  dropDownContent ">
                  
                    <div className="col-lg-3">
                 
                 <img src={img6} className="card-img-top image " alt="..."/>
                
                   <p className="card-text mt-3 text-center fw-bold cardText">EVENING</p>
               <p className="cardinnertext">Food & Drink Demo</p>
                
                                  </div>
                                  <div className="col-lg-3">
                 
                 <img src={img7} className="card-img-top image " alt="..."/>
                
                   <p className="card-text mt-3 text-center fw-bold cardText">WEEKEND</p>
                   <p className="cardinnertext">Jewelery & Accessories Demo</p>
                
                                  </div>
                
                   <div className="col-lg-3">
                 
  <img src={img8} className="card-img-top image " alt="..."/>
 
    <p className="card-text mt-3 text-center fw-bold cardText">TWILIGHT</p>
    <p className="cardinnertext">Cloth & Beauty Demo</p>
 
                   </div>
                   <div className="col-lg-3 ">
               
  <img src={img9} className="card-img-top image" alt="..."/>

    <p className="card-text mt-3 text-center fw-bold cardText">SUNSET</p>
    <p className="cardinnertext">Art & Crafts Demo</p>
  </div>
</div>)} 
              
    </>
  );
}

export default Header;
