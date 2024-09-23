import React from "react";
import "./Section.css";

export default function Section() {
  return (
    <div className="main-section">
    <div className="section">
      <div className="section-container">
        <h5>our services</h5>
    <div className="brand">
        <h3 className="brand-heading">BRAND IDENTITY</h3>
        <p className="brand-content">we provide digital solutions as website <br/>Design,Mobile app,Landing<br/> Page design,illustration,Animation,etc<br/>that increase compan's values</p>
    </div>
      </div>
      <div className="content">
        <p className="content-p">
          We are a close-knit team of experst
          <br />
          dedicated to crafting memorable and <br />
          emotionaly engaging website,digital <br />
          experience, and native apps
        </p>
        <div className="ui-design">UX/UI<br/> DESIGN
            <p className="ui-design-p">We provide digital solution as website<br/> Design, Mobile app design, Landing <br/>Page design ,illustration, animation, etc <br/> increase company's values</p>
        </div>
        </div>
    </div>
    </div>
  );
}
