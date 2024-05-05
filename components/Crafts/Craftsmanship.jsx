import React from 'react';
import './Craftsmanship.css'; // You can define styles in this CSS file


const Craftsmanship = () => {
  return (

    <div className="section--about-papazian__content max-width-4 mx-auto bg-olive">
  <div className="col-10 lg-col-8 mx-auto">
    <div className="center">
      <div className="title--small">MOJAR</div>
      <div className="title--big mt3 mb4">CROWNED IN ELEGANCE</div>
    </div>
    <div className="home-about-columns overflow-hidden">
      <div className="clearfix mxn3">
        <div className="home-about-column md-col md-col-6 px3 gotham lh">
        <div className="title-center">Experience</div>
          <p>Indulge in the bespoke experience at Mojar where luxury meets personalization. Our attentive team guides you through a world of exquisite craftsmanship and curated collections,
             ensuring each piece becomes a cherished part of your story. 
             </p>
             <p style={{ color: "#E5BD7F", fontWeight: "bold", textAlign: "center", fontSize: "1.4em" }}>
              <strong>Discover the joy of self-expression and timeless beauty with us.</strong>
             </p>
        </div>
        <div className="home-about-column home-about-column--right md-col md-col-6 px3 border-left border-silver gotham lh">
        <div className="title-center">craftsmanship</div>
          <p>Discover the summit of creation at Mojar, where each piece is an exacting, passionate work of art. 
            Every piece is meticulously put together by hand by our artisans, who lend it an enduring elegance and unmatched quality.
             Every detail demonstrates our dedication to craftsmanship, from sophisticated designs to custom creations. Discover the skill and attention to detail that go into each piece,
             and allow us to enhance your special occasions with timeless beauty.</p>
     </div>
      </div>
    </div>

    <div className="center">
      <a href="https://www.papazian.gr/about/" className="button--dark">ABOUT US</a>
    </div>
  </div>
</div>

    
  );
};

export default Craftsmanship; 