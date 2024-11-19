function Footer() {
  return (
    <>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <ul className="footerUl">
            <h4 className="footerHeading">Browse</h4>
            <li>All Products</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Theme Features</li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6">
          <ul className="footerUl">
            <h4 className="footerHeading">Help</h4>
            <li>FAQ</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6">
          <ul className="footerUl">
            <h4 className="footerHeading">About</h4>
            <p className="footerParagraph">
              Our story began in 2001 in a small studio in the middle of
              nowhere. With only one desk and next to no free time, our brand
              was born. Our passion for unique design and collaboration brought
              our vision, and products, to life.
            </p>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6">
          <ul className="footerUl">
            <h4 className="footerHeading">Contact</h4>
            <li>store@email.com</li>
            <div>
              <i className="fa-brands fa-tiktok  p-2"></i>
              <i className="fa-brands fa-twitter p-2"></i>
              <i className="fa-brands fa-youtube p-2"></i>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
