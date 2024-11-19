import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../images/morning_logo_wulkan_white.avif"
import { useState } from "react";
import shirt1 from "../images/shirt1.png"
import shirt2 from "../images/shirt2.png"
import teehsirt1 from "../images/teeshirt1.png"
import teeshirt2 from "../images/teeshirt2.png"
import tee1 from "../images/home-tee-1.png"
import tee2 from "../images/home-tee-2.png"
import hoddie1 from "../images/hoddie1.png"
import hoddie2 from "../images/hoddies2.png"
import shirt11 from "../images/portsmith_black.png"
import shirt22 from "../images/portsmith_blue.png"
import hat1 from "../images/hat11.png"
import hat2 from "../images/hat22.png"
import map from "../images/map-1.png"
import { useEffect } from "react";


function Home() {
  const [btnShown,setBtnShown]=useState(false)
  const [btnShown1,setBtnShown1]=useState(false)
  const [btnShown2,setBtnShown2]=useState(false)
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the popup when the page loads
    setShowPopup(true);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };


  // useEffect(() => {
  //   // This code runs when the component mounts
  //  alert('Welcome to the page!');
  // }, []); 

  var settings = {
    dots: true,
    infinite:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (

    <>
  

  


    <div>
   

      {showPopup && (
        <div className="overlay">
          <div className="popup">
            <h2>Get 10% off
            
            <div className="line2"></div>
            </h2>
           
            <p className="popup-p">We'll email you a voucher worth 10% off your first order over $50. By subscribing you agree to our
             
            <span>  Terms & Conditions</span></p>
            <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="email@example.com" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button className="btn btn-outline-secondary subscribeBtn" type="button" id="button-addon2">Subscribe</button>
</div>
            <button className="closeButton subscribeBtn" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>



 



    {/* <div className="popup-container">
<div>
  <h1>Get 10% 0ff</h1>
</div>
    </div> */}

   <Slider {...settings}>
      <div>
    
      <div className="sliderimg1">
      <div className="overlayDiv">
      <div className="sliderText">
      <h2>Less harm more benefits
</h2>
<div className="line2"></div>
      </div>
      <div className="sliderTextp">
      <p>This simple phrase is one of our guiding principles. Focus on the most important elements of each garment and let go of everything superfluous.
</p>
<div className="ShopButtons"></div>
<button type="button" className="btn btn-success shopbtn1 m-2">Shop All</button>
<button type="button" className="btn btn-success shopbtn2 m-2">Shop New</button>
      </div>
      </div>
     </div>
     </div>



      <div>
      <div className="sliderimg2">
 <div className="overlayDiv2">
      <div className="sliderText2">
      <h2>Timeless Styles
</h2>
<div className="line2"></div>
      </div>
      <div className="sliderTextp2">
      <p>This simple phrase is one of our guiding principles. Focus on the most important elements of each garment and let go of everything superfluous.
</p>
<div className="ShopButtons"></div>
<button type="button" className="btn btn-success shopbtn1 m-2">Shop All</button>
<button type="button" className="btn btn-success shopbtn2 m-2">Shop New</button>
      </div>
      </div>
      </div>
     
      </div>

      <div>
      <div className="sliderimg4">
      <div className="overlayDiv">
      <div className="sliderText">
      <h2>Less but better
</h2>
<div className="line2"></div>
      </div>
      <div className="sliderTextp">
      <p>This simple phrase is one of our guiding principles. Focus on the most important elements of each garment and let go of everything superfluous.
</p>
<div className="ShopButtons"></div>
<button type="button" className="btn btn-success shopbtn1 m-2">Shop All</button>
<button type="button" className="btn btn-success shopbtn2 m-2">Shop New</button>
      </div>
      </div>
     </div>
     </div>


      <div>
      <div className="sliderimg3">
      <div className="overlayDiv3">
      <div className="sliderText3">
      <h2>Be Responsible</h2>
<div className="line2"></div>
      </div>
      <div className="sliderTextp3">
      <p>This simple phrase is one of our guiding principles. Focus on the most important elements of each garment and let go of everything superfluous.
</p>
<div className="ShopButtons"></div>
<button type="button" className="btn btn-success shopbtn1 m-2">Shop All</button>
<button type="button" className="btn btn-success shopbtn2 m-2">Shop New</button>
      </div>
      </div>
</div>
    
      </div>
     

   
    </Slider>




    <section>



    <div className="collDiv">
  <h3 className="collect">Collections</h3>
  <div className="line"></div>

  <div className="row">
    <div className="col-lg-4 col-md-12">
    <div className="product-images">
<div className="product-contentbx">
  <a href="#" className="product-image-link">
  <div className="product-image-media">
    <div className="product-image-hover" data-hover="1">
      <img className="w-100" src={shirt1} alt=""/>
    </div>
    <img src={shirt2} alt="" className="display-image w-100"/>
    </div>
  </a>
</div>
</div>

<p className="shopping-btn w-100">
  <span className="bagIcon p-4">

    <i className="fa-solid fa-bag-shopping"></i>
  </span>

</p>
<div className="product-heading p-4">
<a   href="#" className="product-heading-link">
  <h3 className="card-title">Portsmith Fleece</h3>
  <span>
    <span className="card-price">
      $5,300
    </span>
  </span>
</a>
</div>
</div>




<div className="col-lg-4 col-md-12">
    <div className="product-images">
<div className="product-contentbx">
  <a href="#" className="product-image-link">
  <div className="product-image-media">
    <div className="product-image-hover" data-hover="1">
      <img className="w-100" src={teehsirt1} alt=""/>
    </div>
    <img src={teeshirt2} alt="" className="display-image w-100"/>
    </div>
  </a>
</div>
</div>

<p className="shopping-btn">
  <span className="bagIcon p-4">

    <i className="fa-solid fa-bag-shopping"></i>
  </span>
</p>

<div className="product-heading p-4">
<a   href="#" className="product-heading-link">
  <h3 className="card-title">Stock crew</h3>
  <span>
    <span className="card-price">
      $5,300
    </span>
  </span>
</a>
</div>
</div>




<div className="col-lg-4 col-md-12">
    <div className="product-images">
<div className="product-contentbx">
  <a href="#" className="product-image-link">
  <div className="product-image-media">
    <div className="product-image-hover" data-hover="1">
      <img className="w-100" src={tee1} alt=""/>
    </div>
    <img src={tee2} alt="" className="display-image w-100"/>
    </div>
  </a>
</div>
</div>

<p className="shopping-btn">
  <span className="bagIcon p-4">

    <i className="fa-solid fa-bag-shopping"></i>
  </span>
</p>

<div className="product-heading p-4">
<a   href="#" className="product-heading-link">
  <h3 className="card-title">Home Tee</h3>
  <span>
    <span className="card-price">
      $5,300
    </span>
  </span>
</a>
</div>
</div>
</div>


<div className="row">
    <div className="col-lg-4 col-md-12">
    <div className="product-images">
<div className="product-contentbx">
  <a href="#" className="product-image-link">
  <div className="product-image-media">
    <div className="product-image-hover" data-hover="1">
      <img className="w-100" src={hoddie1} alt=""/>
    </div>
    <img src={hoddie2} alt="" className="display-image w-100"/>
    </div>
  </a>
</div>
</div>

<p className="shopping-btn w-100">
  <span className="bagIcon p-4">

    <i className="fa-solid fa-bag-shopping"></i>
  </span>

</p>
<div className="product-heading p-4">
<a   href="#" className="product-heading-link">
  <h3 className="card-title">Todos santos</h3>
  <span>
    <span className="card-price">
      $5,300
    </span>
  </span>
</a>
</div>
</div>




<div className="col-lg-4 col-md-12">
    <div className="product-images">
<div className="product-contentbx">
  <a href="#" className="product-image-link">
  <div className="product-image-media">
    <div className="product-image-hover" data-hover="1">
      <img className="w-100" src={hat1} alt=""/>
    </div>
    <img src={hat2} alt="" className="display-image w-100"/>
    </div>
  </a>
</div>
</div>

<p className="shopping-btn">
  <span className="bagIcon p-4">

    <i className="fa-solid fa-bag-shopping"></i>
  </span>
</p>

<div className="product-heading p-4">
<a   href="#" className="product-heading-link">
  <h3 className="card-title">Broken Arrow Hat</h3>
  <span>
    <span className="card-price">
      $5,300
    </span>
  </span>
</a>
</div>
</div>




<div className="col-lg-4 col-md-12">
    <div className="product-images">
<div className="product-contentbx">
  <a href="#" className="product-image-link">
  <div className="product-image-media">
    <div className="product-image-hover" data-hover="1">
      <img className="w-100" src={shirt11} alt=""/>
    </div>
    <img src={shirt22} alt="" className="display-image w-100"/>
    </div>
  </a>
</div>
</div>

<p className="shopping-btn">
  <span className="bagIcon p-4">

    <i className="fa-solid fa-bag-shopping"></i>
  </span>
</p>

<div className="product-heading p-4">
<a   href="#" className="product-heading-link">
  <h3 className="card-title">Industry Chore Jacket</h3>
  <span>
    <span className="card-price">
      $5,300
    </span>
  </span>
</a>
</div>
</div>
</div>
  </div>

    </section>





    <div id="carouselExampleInterval" className="carousel slide m-4" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active commentSlider" data-bs-interval="10000">
    <i className="fa-brands fa-instagram sliderIcons"></i>
    <p className="comments">"Always a great day when I get a new package from Morning Apparel. My new backpack is stunning. Thanks guys, you totally rock!"</p>
    <p className="commentorName">Breet Robinson</p>
    <p className="socialMediaAccount">Instagram</p>
    </div>
    <div className="carousel-item commentSlider" data-bs-interval="2000">
    <i className="fa-brands fa-twitter sliderIcons"></i>
    <p  className="comments">"I must say your customer service is really excellent. No quibbles when I ordered the wrong size. Easy and painless to return and replace. Thanks!"</p>
    <p className="commentorName">Jimmy Knight</p>
    <p className="socialMediaAccount">Twitter</p>
    </div>
  
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



<section>
  <div className="QuoteBackgroundImage p-4">
  <div className="QuoteBackgroundImageText">
  <div className="logoDiv">
   <img className="logo2" src={logo} />
  </div>
 
 
 <p className="comments2">'Little do ye know your own blessedness; for to travel hopefully is a better thing than to arrive, and the true success is to labour'</p>
 <p className="text-white mt-4">Robert Louis</p>
 <h4 className="btn btn-primary btn-lg collectionBtn"
   >View Collections</h4>
  </div>
 
  </div>
</section>




<div className="row mt-4 p-4 g-4">
    <div className="col-lg-4 col-md-12"> 
     <div className="card" >
  <div  className=" CarimageOverlay1"  
   onMouseEnter={() => setBtnShown(true)}
      onMouseLeave={() => setBtnShown(false)}> 

  <div className="overlayText">
  <h4>Accessories</h4>
  <div className="line">
</div>

{btnShown && ( <h4 className="btn btn-primary btn-lg collectionBtn"
    >View Collections</h4>)}


  </div>
  </div>
  </div>
 
</div>

<div className="col-lg-4 col-md-12"> 
     <div className="card" >
  <div  className=" CarimageOverlay2"
   onMouseEnter={() => setBtnShown1(true)}
   onMouseLeave={() => setBtnShown1(false)}> 
  <div className="overlayText">
  <h4>Headwear</h4>
  <div className="line">
  </div>
  {btnShown1 && ( <h4 className="btn btn-primary btn-lg collectionBtn"
    >View Collections</h4>)}


  </div>
  </div>
  </div>
 
</div>

<div className="col-lg-4 col-md-12"> 
     <div className="card" >
  <div  className=" CarimageOverlay3"
   onMouseEnter={() => setBtnShown2(true)}
   onMouseLeave={() => setBtnShown2(false)}> 
  <div className="overlayText">
  <h4>Outerwear</h4>
  <div className="line">
  </div>
  {btnShown2 && ( <h4 className="btn btn-primary btn-lg collectionBtn"
    >View Collections</h4>)}

  </div>
  </div>
  </div>
 
</div>



</div>

<div className="row m-4">
  <div className="col-lg-6 p-4 Truck-image-div">
  <i className="fa-solid fa-truck truckIcon mb-3"></i>
  <h2 className="deliverHeading">Speedy delivery</h2>
  <p>Experience the ultimate convenience of speedy delivery with our products. Always ensuring your satisfaction is our top priority.</p>
  </div>

  <div className="col-lg-6 p-4 Truck-image-div">

  <i className="fa-solid fa-ship truckIcon mb-3"></i>
  <h2 className="deliverHeading">Less carbon</h2>
  <p>With our products we strive to mitigate the negative impact of human activity on the environment and promote sustainability.</p>
  </div>
</div>



<div className="row m-4">
  <div className="col-lg-6 p-4 Truck-image-div">
  <i className="fa-solid fa-message truckIcon mb-3"></i>
  <h2 className="deliverHeading">Exceptional support</h2>
  <p>Enjoy peace of mind with our exceptional customer support, available to provide prompt assistance and ensure your satisfaction.</p>
  </div>

  <div className="col-lg-6 p-4 Truck-image-div">

  <i className="fa-solid fa-rotate-left truckIcon mb-3"></i>
  <h2 className="deliverHeading">
  Easy returns</h2>
  <p>Shop with confidence knowing our hassle-free returns policy allows for easy and stress-free returns, making your shopping experience seamless.</p>
  </div>
</div>


<div className="row g-0 bg-body-secondary position-relative">
 
  <div className="col-md-6 p-4 ps-md-0 Image-Side-Container">
<div className="ImageTextContainer">
    <h5 className="mt-0 ">Ventura Store
    <div className="line2"></div>
    </h5>
   
   <div className="row ">
    <div className="col-lg-6 col-md-12 address-Container mt-3 mb-3">
    <p>324 E. Main St, Ventura </p>
    <p>CA 93001</p>
    <p>(805) 643-0737</p>
    <p>store@email.com</p>
    </div>


    <div className="col-lg-6 col-md-12 days-container">
    <p>Monday-Thursday, 12:00 to 23:00</p>
  
   
  <p>Friday-Saturday, 12:00 to 00:00</p>

  <p>Sunday,closed</p>
    </div>
   </div>
   
    <div className="san-div pt-3">
      <h1>San Francisco Store</h1>
    </div>
   
    </div>
  </div>

  <div className="col-md-6 mb-md-0 p-md-4">
    <img src={map} className="w-100" alt="..."/>
  </div>
</div>



<div className="container">
    <div className="giftDiv">
    <i className="fa-solid fa-gift m-4"></i> <span>Gift cards available!</span>
    <i className="fa-solid fa-gift m-4"></i> <span>Gift cards available!</span>
    <i className="fa-solid fa-gift m-4"></i> <span>Gift cards available!</span>
    
    </div>
    </div>
         <div className="newDiv">
            <h3>Join our newsletter for 10% off</h3>
         <p className="newsLetterText">We'll email you a voucher worth 10% off your first order over $50. By subscribing you agree to our  
          <span className="termsConditions"> Terms & Conditions.</span> 
</p>  

<div className="input-group mb-3 emailInput">
  <input type="text" className="form-control" placeholder="email@example.com" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button className="btn btn-outline-secondary subscribeBtn" type="button" id="button-addon2">Subscribe</button>
</div>
         </div>


    </>
  )
}

export default Home