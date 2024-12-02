import React from "react";
import Link from "next/link";
import icon1 from "/public/images/icons/icon_mail.svg";
import icon2 from "/public/images/icons/icon_calling.svg";
import icon3 from "/public/images/icons/icon_map_mark.svg";
import icon4 from "/public/images/icons/icon_mail_2.svg";
import Services from "../../api/service";
import Image from "next/image";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const SubmitHandler = (e) => {
  e.preventDefault();
};

const Footer = (props) => {
  return (
    <footer className="site_footer footer_layout_1">
      <div
        className="content_box"
        style={{ backgroundImage: `url(${'/images/shapes/bg_pattern_3.svg'})` }}
      >
        <div className="container">
          <div className="diract_contact_links text-white">
            <div className="iconbox_block layout_icon_left">
              <div className="iconbox_icon">
                <Image src={icon1} alt="Mail SVG Icon" />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">Write to us</h3>
                <p className="mb-0">info@compumaxllc.com</p>
              </div>
            </div>
            <div className="iconbox_block layout_icon_left">
              <div className="iconbox_icon">
                <Image src={icon2} alt="Calling Check SVG Icon" />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title"> Call Us (USA)</h3>
                <p className="mb-0">
                  <a href="+12012981974" style={{ color: 'white' }}>
                    201 -298-1974
                  </a>
                </p>
              </div>
            </div>
            <div className="iconbox_block layout_icon_left">
              <div className="iconbox_icon">
                <Image src={icon3} alt="Map Mark Check SVG Icon" />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">Our Office</h3>
                <p className="mb-0">
                  <span>
                    341 All Angels Hill Rd <br /> Wappingers Falls, NY 12590
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="footer_main_content">
            <div className="row justify-content-lg-between">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer_widget pe-md-3">
                  <h2 className="footer_info_title">About Us</h2>
                  <p>
                    We are a leading web development and design company,
                    specializing in creating innovative digital solutions. 
                  </p>
                  <form className="footer_newslatter" onSubmit={SubmitHandler}>
                    <label htmlFor="footer_mail_input">
                      <Image src={icon4} alt="Mail SVG Icon" />
                    </label>
                    <input
                      id="footer_mail_input"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                    <button type="submit">
                      <i className="fa-solid fa-paper-plane"></i>
                    </button>
                  </form>
                  <ul className="social_links_block unordered_list">
                    <li>
                      <Link onClick={ClickHandler} href="/">
                        Facebook
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/">
                        Twitter
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/">
                        Linkdin
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">Services</h3>
                  <ul className="icon_list unordered_list_block">
                    {Services.slice(0, 6).map((service, srv) => (
                      <li key={srv}>
                        {service.title ? (
                          <Link
                            onClick={ClickHandler}
                            href={'/services'}
                            as={`/`}
                          >
                            <span className="icon_list_text">
                              {service.title}
                            </span>
                          </Link>
                        ) : (
                          ''
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer_widget">
                  <h3 className="footer_info_title">Information</h3>
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <Link onClick={ClickHandler} href="/">
                        <span className="icon_list_text">About Compumax</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/">
                        <span className="icon_list_text">Investors</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/">
                        <span className="icon_list_text">Contact</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/">
                        <span className="icon_list_text">
                          Affiliate Program
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/">
                        <span className="icon_list_text">Career</span>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/">
                        <span className="icon_list_text">Pricing Plan</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container d-md-flex align-items-md-center justify-content-md-between">
          <p className="copyright_text m-0">
            Copyright © 2024 Compumax LLC, All rights reserved.
          </p>
          <p className="copyright_text m-0">
            Developed by{' '}
            <Link onClick={ClickHandler} href="/">
              Compumax LLC
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
