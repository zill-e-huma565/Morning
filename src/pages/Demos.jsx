import { useEffect,useState } from "react";

import img1 from "../images/theme-map.jpg";
import img2 from "../images/themeMenu.jpg";
import img3  from "../images/review.jpg"
import img4 from "../images/themeMenu2.jpg"
import img5 from "../images/ThemeFAQs.jpg"
import img6 from "../images/themeimage2.jpg"

function Demos() {
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
      <div className="theme-content-container mt-5">
        <h1>More than a theme. A partnership.</h1>
        <p>
          With constant improvements and unparalleled support, we're by your
          side to navigate the ever-changing ecommerce landscape.
        </p>
        <button className="installBtn p-3 mb-5">Install a free trial</button>
      </div>

      <div className="row mt-5">
        <div className="col-lg-6 col-md-12">
          <video
            autoPlay="autoplay"
            muted="muted"
            src="//venue-theme-morning.myshopify.com/cdn/shop/videos/c/vp/727bdb2e01ba44edb73e7801374793d5/727bdb2e01ba44edb73e7801374793d5.HD-720p-1.6Mbps-28937167.mp4?v=0"
            type="video/mp4"
            className="w-100"
          ></video>

          <div className="theme-Image-Content">
<h3>Start selling faster</h3>
<p>Streamline your store's launch with a hassle-free Shopify theme. Designed to be quick to set up and easy to live with.</p>
<button className="installBtn p-2 mb-5">Learn more</button>
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
        <img className="w-100" src={img1}/>
        <div className="theme-Image-Content">
<h3>Boost sales & order values</h3>
<p>Give yourself the best chance of more sales with our expertly designed set of features. Built to drive higher revenue.</p>
<button className="installBtn p-2 mb-5">Find out how</button>
          </div>
        </div>

      </div>






      <div className="row mt-5">
        <div className="col-lg-6 col-md-12">
        
            <img className="w-100" src={img2}/>
         

          <div className="theme-Image-Content">
<h3>Save money on apps</h3>
<p>Our themes come bundled with features that not only enrich your store but also save you money on app subscriptions.</p>
<button className="installBtn p-2 mb-5">See the features</button>
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
        <img className="w-100" src={img3}/>
        <div className="theme-Image-Content">
<h3>Feel safe, feel supported</h3>
<p>Our happy customers love our superb support team. Fast, friendly and highly experienced, our team are here for you.</p>
<button className="installBtn p-2 mb-5">Read the reviews</button>
          </div>
        </div>

      </div>




      <section>
        <div>
            <h1 className="Combine">Combine beauty & purpose</h1>
        </div>

        <div className="row mt-5">
        <div className="col-lg-4 col-md-12">
        
            <img className="w-100" src={img5}/>
         

          <div className="theme-Image-Content">
<h3>30+ powerful sections</h3>
<p>An array of powerful sections to get you started and to expand your store in the future.</p>

          </div>
        </div>


        <div className="col-lg-4 col-md-12">
        <video
        autoPlay="autoplay"
        muted="muted"
        src="//venue-theme-morning.myshopify.com/cdn/shop/videos/c/vp/c78f71bf45ae4940aee988176afe8199/c78f71bf45ae4940aee988176afe8199.HD-720p-1.6Mbps-28937259.mp4?v=0"
        type="video/mp4"
          className="w-100"
      ></video>
        <div className="theme-Image-Content">
<h3>Meaningful interactions</h3>
<p>Delight and engage your customers with theme animations and interactive events.</p>

          </div>
        </div>

        <div className="col-lg-4 col-md-12">
        <img className="w-100" src={img4}/>
        <div className="theme-Image-Content">
<h3>Clean & elegant design</h3>
<p>A minimal yet sophisticated design that offers the perfect backdrop for your brand to shine.</p>

          </div>
        </div>

      </div>
      </section>



    





      <div className="row">
        <div className="col-lg-4 Image-Side-Container">
        <div className="ImageTextContainer2">
   <h5 className="mt-0 ">Sell more on mobile
   <div className="line2"></div>
   </h5>
  
  <div>
   <div className="address-Container mt-3 mb-3">
   <p>Convert casual visitors into satisfied customers with a fast and seamless shopping experience across all devices. </p>
  
   </div>
</div>
 
  
   </div>
        </div>
        <div className="col-lg-8">
        <video
            autoPlay="autoplay"
            muted="muted"
            src="//venue-theme-morning.myshopify.com/cdn/shop/videos/c/vp/f723d889ac914e11ab17c785bee8c172/f723d889ac914e11ab17c785bee8c172.HD-1080p-2.5Mbps-28937282.mp4?v=0"
            type="video/mp4"
            className="w-100"
          ></video> 
        </div>
      </div>






      <div className="row mt-5">
       
       <div className="col-lg-8">
       <video
           autoPlay="autoplay"
           muted="muted"
           src="//venue-theme-morning.myshopify.com/cdn/shop/videos/c/vp/66b027ff032c4664b9238b2b1644f385/66b027ff032c4664b9238b2b1644f385.HD-1080p-2.5Mbps-28937304.mp4?v=0"
           type="video/mp4"
           className="w-100"
         ></video> 
       </div>



       <div className="col-lg-4 Image-Side-Container">
       <div className="ImageTextContainer2">
  <h5 className="mt-0 ">Flexible mega menus
  <div className="line2"></div>
  </h5>
 
 <div>
  <div className="address-Container mt-3 mb-3">
  <p>Help customers effortlessly discover your products and win more sales with eye-catching promos in your menus. </p>
 
  </div>
</div>

 
  </div>
       </div>
     </div>





     <div className="row mt-5">
        <div className="col-lg-4 Image-Side-Container">
        <div className="ImageTextContainer2">
   <h5 className="mt-0 ">Powerful predictive search
   <div className="line2"></div>
   </h5>
  
  <div>
   <div className="address-Container mt-3 mb-3">
   <p>Help your visitors find what they want quickly with powerful predictive search and product promotions. </p>
  
   </div>
</div>
 
  
   </div>
        </div>
        <div className="col-lg-8">
        <video
            autoPlay="autoplay"
            muted="muted"
            src="//venue-theme-morning.myshopify.com/cdn/shop/videos/c/vp/554622d1561c4fde84393b59554c461b/554622d1561c4fde84393b59554c461b.HD-1080p-2.5Mbps-28937331.mp4?v=0"
            type="video/mp4"
            className="w-100"
          ></video> 
        </div>
      </div>


      <div className="row mt-5">
       
       <div className="col-lg-8">
       <video
           autoPlay="autoplay"
           muted="muted"
           src="//venue-theme-morning.myshopify.com/cdn/shop/videos/c/vp/3ffe95cf760d4fbb9d51f5f38ef4695e/3ffe95cf760d4fbb9d51f5f38ef4695e.HD-1080p-2.5Mbps-28937463.mp4?v=0"
           type="video/mp4"
           className="w-100"
         ></video> 
       </div>



       <div className="col-lg-4 Image-Side-Container">
       <div className="ImageTextContainer2">
  <h5 className="mt-0 ">Tabbed featured products
  <div className="line2"></div>
  </h5>
 
 <div>
  <div className="address-Container mt-3 mb-3">
  <p>Elegantly present multiple collections on one page using tabbed carousel or grid layouts. </p>
 
  </div>
</div>

 
  </div>
       </div>
     </div>



     <div className="row mt-5">
        <div className="col-lg-4 Image-Side-Container">
        <div className="ImageTextContainer2">
   <h5 className="mt-0 ">Wallpaper video
   <div className="line2"></div>
   </h5>
  
  <div>
   <div className="address-Container mt-3 mb-3">
   <p>Use background videos all over your store to create a deeper connection and understanding with your customers. </p>
  
   </div>
</div>
 
  
   </div>
        </div>
        <div className="col-lg-8">
        <video
            autoPlay="autoplay"
            muted="muted"
            src="//venue-theme-morning.myshopify.com/cdn/shop/videos/c/vp/1a62303ec341419388c54b4d4ba47041/1a62303ec341419388c54b4d4ba47041.HD-720p-1.6Mbps.mp4?v=0"
            type="video/mp4"
            className="w-100"
          ></video> 
        </div>
      </div>


      <div className="row mt-5">
       


        <div className="col-lg-6 col-md-12">
        <video
        autoPlay="autoplay"
        muted="muted"
        src="//venue-theme-morning.myshopify.com/cdn/shop/videos/c/vp/66a8778a6f0b4c4d964a4b1357b1f470/66a8778a6f0b4c4d964a4b1357b1f470.HD-720p-1.6Mbps-28937502.mp4?v=0"
        type="video/mp4"
          className="w-100"
      ></video>
        <div className="theme-Image-Content">
<h3>Meaningful interactions</h3>
<p>Delight and engage your customers with theme animations and interactive events.</p>

          </div>
        </div>

        <div className="col-lg-6 col-md-12">
        <img className="w-100" src={img6}/>
        <div className="theme-Image-Content">
<h3>Clean & elegant design</h3>
<p>A minimal yet sophisticated design that offers the perfect backdrop for your brand to shine.</p>

          </div>
        </div>

      </div>


    </>
  );
}

export default Demos;
