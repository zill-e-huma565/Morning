// import blog1 from "../images/blog1.jpg"
// import blog2 from "../images/blog2.jpg"
import { useEffect,useState } from "react";
function Blog() {


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
  <h3 className="collect">News</h3>
  <div className="line"></div>
</div>

<div className="Blog-Menu-div mt-5">
    <span className="Blog-Span">All</span>
    <span className="Blog-Span">Events</span>
    <span className="Blog-Span">How to</span>
    <span className="Blog-Span">HQ News</span>
    <span className="Blog-Span">Road Trips</span>
</div>
        <div className="row g-5 p-5 m-5 collection-items">
            <div className="col-md-6 collection-itembx">
                <a href="#" className="collection-list-link"/>
                <div className="collection-list">
                <div className="collection-list-item">
                <div className="o-ratio-content">
                <div className="collection-media">
                    <div className="collection-list-bg"></div>
                    </div>
<div className="collection-list-overlay">
    <h1>Into the woods</h1>
    <p>A café racer is a lightweight, lightly powered motorcycle optimized for speed and handling rather than comfort – and...</p>
<a href="#">Read More</a>
</div>
{/* <div className="collection-list-heading">
<div className="collection-content-title">
    <h3 className="collection-title">Accesories</h3>
    <button>
        View Collection
    </button> 
 </div>
</div> */}

                    </div>
                    </div>
                </div>
            </div>





            <div className="col-md-6 collection-itembx">
                <a href="#" className="collection-list-link"/>
                <div className="collection-list">
                <div className="collection-list-item">
                <div className="o-ratio-content">
                <div className="collection-media">
                    <div className="collection-list-bg2"></div>
                    </div>
<div className="collection-list-overlay">
    <h1>New Tee Collection</h1>
    <p>Swell is generated when wind blows consistently over a large area of open water, called the wind's fetch. The size of...</p>
<a href="#">Read More</a>
</div>
{/* <div className="collection-list-heading">
<div className="collection-content-title">
    <h3 className="collection-title">Accesories</h3>
    <button>
        View Collection
    </button> 
 </div>
</div> */}

                    </div>
                    </div>
                </div>
            </div>
        </div>



        <div className="row g-5 p-5 m-5 collection-items">
            <div className="col-md-6 collection-itembx">
                <a href="#" className="collection-list-link"/>
                <div className="collection-list">
                <div className="collection-list-item">
                <div className="o-ratio-content">
                <div className="collection-media">
                    <div className="collection-list-bg3"></div>
                    </div>
<div className="collection-list-overlay">
    <h1>The desert is calling</h1>
    <p>A café racer is a lightweight, lightly powered motorcycle optimized for speed and handling rather than comfort – and...</p>
<a href="#">Read More</a>
</div>
{/* <div className="collection-list-heading">
<div className="collection-content-title">
    <h3 className="collection-title">Accesories</h3>
    <button>
        View Collection
    </button> 
 </div>
</div> */}

                    </div>
                    </div>
                </div>
            </div>





            <div className="col-md-6 collection-itembx">
                <a href="#" className="collection-list-link"/>
                <div className="collection-list">
                <div className="collection-list-item">
                <div className="o-ratio-content">
                <div className="collection-media">
                    <div className="collection-list-bg4"></div>
                    </div>
<div className="collection-list-overlay">
    <h1>A fresh collaboration</h1>
    <p>Swell is generated when wind blows consistently over a large area of open water, called the wind's fetch. The size of...</p>
<a href="#">Read More</a>
</div>
{/* <div className="collection-list-heading">
<div className="collection-content-title">
    <h3 className="collection-title">Accesories</h3>
    <button>
        View Collection
    </button> 
 </div>
</div> */}

                    </div>
                    </div>
                </div>
            </div>
        </div>



        <div className="row g-5 p-5 m-5 collection-items">
            <div className="col-md-6 collection-itembx">
                <a href="#" className="collection-list-link"/>
                <div className="collection-list">
                <div className="collection-list-item">
                <div className="o-ratio-content">
                <div className="collection-media">
                    <div className="collection-list-bg5"></div>
                    </div>
<div className="collection-list-overlay">
    <h1>Winter is coming</h1>
    <p>A café racer is a lightweight, lightly powered motorcycle optimized for speed and handling rather than comfort – and...</p>
<a href="#">Read More</a>
</div>
{/* <div className="collection-list-heading">
<div className="collection-content-title">
    <h3 className="collection-title">Accesories</h3>
    <button>
        View Collection
    </button> 
 </div>
</div> */}

                    </div>
                    </div>
                </div>
            </div>





            <div className="col-md-6 collection-itembx">
                <a href="#" className="collection-list-link"/>
                <div className="collection-list">
                <div className="collection-list-item">
                <div className="o-ratio-content">
                <div className="collection-media">
                    <div className="collection-list-bg6"></div>
                    </div>
<div className="collection-list-overlay">
    <h1>Summer Road Trip</h1>
    <p>Swell is generated when wind blows consistently over a large area of open water, called the wind's fetch. The size of...</p>
<a href="#">Read More</a>
</div>
{/* <div className="collection-list-heading">
<div className="collection-content-title">
    <h3 className="collection-title">Accesories</h3>
    <button>
        View Collection
    </button> 
 </div>
</div> */}

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

export default Blog