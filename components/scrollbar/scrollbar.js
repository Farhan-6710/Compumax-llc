import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Scrollbar = () => {
  return (
    <ul className="smothscroll">
      <li>
        <AnchorLink href="#__next">
          <i className="ti-arrow-up"></i>
        </AnchorLink>
      </li>
    </ul>
  );
};

export default Scrollbar;