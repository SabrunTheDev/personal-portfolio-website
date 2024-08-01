import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        <span className="light-dark-blue-gradient_text">
          Want to collab?
          <br className="sm:block hidden" />
          Let's build something together!
        </span>
      </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
