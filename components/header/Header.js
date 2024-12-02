import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react'; // Import the Lucide icon
import logo from '/public/images/about/logo-img15.png';
import styles from '../../styles/Home.module.css';
import MobileMenu from '../MobileMenu/MobileMenu';
import Image from 'next/image';
import services from '../../api/service';

const Header = (props) => {
  const [mobailActive, setMobailState] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerStyle = {
    display: 'flex',
    justifyContent: 'center', // Centers items horizontally
    alignItems: 'center', // Centers items vertically
    // Add other styles as needed
  };

  return (
    <header className="site_header site_header_1">
      <div className="header_top">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Left Column: Address */}
          <div className="header_top_left d-none d-xl-flex flex-lg-column align-items-start">
            <div className="address">
              <MapPin className="address-icon" /> {/* Use Lucide MapPin icon */}
              <span>
                341 All Angels Hill Rd <br /> Wappingers Falls, NY 12590
              </span>
            </div>
          </div>

          {/* Center Column: Subscription Text */}
          <div className="header_top_center flex-grow-1 text-center">
            <p className="m-0">
              We offer cutting-edge web development and design solutions.{' '}
              <Link onClick={ClickHandler} href="/services">
                <u>Learn more</u> <i className="fa-solid fa-angle-right"></i>
              </Link>
            </p>
          </div>

          {/* Right Column: Social Icons */}
          <div className="header_top_right d-none d-xl-flex align-items-center">
            <div className="social-icons">
              <a href="#" className="social-icon">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`header_bottom stricky  ${isSticky ? 'stricked-menu stricky-fixed' : ''}`}
        style={headerStyle}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-3 col-8">
              <div className="site_logo">
                <Link onClick={ClickHandler} className="site_link" href="/">
                  <Image
                    alt="Logo-Image"
                    src={logo}
                    width={502}
                    height={152}
                    className={styles.logo}
                  />
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-2">
              <nav className="main_menu navbar navbar-expand-lg">
                <div
                  className="main_menu_inner collapse navbar-collapse justify-content-lg-center"
                  id="main_menu_dropdown"
                >
                  <ul className="main_menu_list unordered_list justify-content-center">
                    <li>
                      <Link
                        onClick={ClickHandler}
                        className="nav-link"
                        href="/"
                        id="home_submenu"
                        role="button"
                        aria-expanded="false"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={ClickHandler}
                        className="nav-link"
                        href="/about"
                        id="home_submenu"
                        role="button"
                        aria-expanded="false"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={ClickHandler}
                        className="nav-link"
                        href="/portfolio"
                        id="home_submenu"
                        role="button"
                        aria-expanded="false"
                      >
                        Portfolio
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link
                        onClick={ClickHandler}
                        className="nav-link"
                        href="/services"
                        id="portfolio_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Services
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="portfolio_submenu"
                      >
                        {services.slice(0, 5).map((service) => (
                          <li key={service.Id}>
                            <Link onClick={ClickHandler} href="/services">
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-xl-3 col-lg-3 col-2">
              <ul className="header_btns_group unordered_list justify-content-end">
                <li>
                  <button
                    className="mobile_menu_btn"
                    onClick={() => setMobailState(!mobailActive)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#main_menu_dropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="far fa-bars"></i>
                  </button>
                </li>
                <li>
                  <Link
                    onClick={ClickHandler}
                    className="btn btn-outline-light"
                    href="/contact-us"
                  >
                    <span className="btn_label" data-text="Contact Us">
                      Contact Us
                    </span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mobail-wrap">
          <div className={`mobail-menu ${mobailActive ? 'active' : ''}`}>
            <div className="xb-header-menu-scroll">
              <div
                className="xb-menu-close xb-hide-xl xb-close"
                onClick={() => setMobailState(!mobailActive)}
              ></div>
              <nav className="xb-header-nav">
                <MobileMenu />
              </nav>
            </div>
          </div>
          <div
            className="xb-header-menu-backdrop"
            onClick={() => setMobailState(false)}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
