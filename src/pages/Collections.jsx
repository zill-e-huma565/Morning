
import { useEffect,useState } from "react";

function Collections() {
  const [btnShown,setBtnShown]=useState(false)
  const [btnShown1,setBtnShown1]=useState(false)
  const [btnShown2,setBtnShown2]=useState(false)
  const [btnShown3,setBtnShown3]=useState(false)
  const [btnShown4,setBtnShown4]=useState(false)
  const [btnShown5,setBtnShown5]=useState(false)
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
    <div className="collDiv">
  <h3 className="collect">Collections</h3>
  <div className="line"></div>
</div>





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




<div className="row mt-3 p-4 g-4">
    <div className="col-lg-4 col-md-12"> 
     <div className="card" >
  <div  className=" CarimageOverlay4"  
   onMouseEnter={() => setBtnShown3(true)}
      onMouseLeave={() => setBtnShown3(false)}> 

  <div className="overlayText">
  <h4>Pack & Luggage</h4>
  <div className="line">
</div>

{btnShown3 && ( <h4 className="btn btn-primary btn-lg collectionBtn"
    >View Collections</h4>)}


  </div>
  </div>
  </div>
 
</div>

<div className="col-lg-4 col-md-12"> 
     <div className="card" >
  <div  className=" CarimageOverlay5"
   onMouseEnter={() => setBtnShown4(true)}
   onMouseLeave={() => setBtnShown4(false)}> 
  <div className="overlayText">
  <h4>Shorts</h4>
  <div className="line">
  </div>
  {btnShown4 && ( <h4 className="btn btn-primary btn-lg collectionBtn"
    >View Collections</h4>)}


  </div>
  </div>
  </div>
 
</div>

<div className="col-lg-4 col-md-12"> 
     <div className="card" >
  <div  className=" CarimageOverlay6"
   onMouseEnter={() => setBtnShown5(true)}
   onMouseLeave={() => setBtnShown5(false)}> 
  <div className="overlayText">
  <h4>Tees & Knits</h4>
  <div className="line">
  </div>
  {btnShown5 && ( <h4 className="btn btn-primary btn-lg collectionBtn"
    >View Collections</h4>)}

  </div>
  </div>
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

export default Collections