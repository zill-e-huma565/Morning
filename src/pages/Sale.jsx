


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
import { useEffect,useState } from "react";


function Sale() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the popup when the page loads
    setShowPopup(true);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
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

export default Sale