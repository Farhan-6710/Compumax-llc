import React from 'react';
import sIcon1 from '/public/images/icons/icon_head.svg';
import sIcon2 from '/public/images/icons/icon_check.svg';
import sIcon3 from '/public/images/icons/icon_like.svg';
import sIcon4 from '/public/images/icons/icon_dart_board.svg';
import fimg from '/public/images/about/img-9.jpg';
import Image from 'next/image';

const FunFact = [
  {
    title: 'Advanced Frontend Frameworks',
    subTitle: 'Build dynamic and responsive web applications.',
    icon: sIcon1,
  },
  {
    title: 'Seamless Integration Tools',
    subTitle: 'Connect effortlessly with popular third-party applications.',
    icon: sIcon2,
  },
  {
    title: 'Enhanced Security Protocols',
    subTitle: 'Protect your data with cutting-edge security features.',
    icon: sIcon3,
  },
  {
    title: 'User-Friendly Interface',
    subTitle: 'Experience software designed for simplicity and ease of use.',
    symbol: '%',
    icon: sIcon4,
  },
];

const FeaturesSection = (props) => {
  return (
    <section
      className="client_logo_section section_space pt-5 pb-5"
      style={{ backgroundImage: `url(${'/images/shapes/bg_pattern_1.svg'})` }}
    >
      <div className="container pt-3">
        {/* <div className="section_space pt-0 pb-5">
          <div className="heading_block text-center">
            <div className="heading_focus_text mb-0">
              <span className="badge bg-secondary text-white">Brand We</span>
              Work With
            </div>
          </div>
          <PartnerSection />
        </div> */}

        <div className="row funfact_wrapper">
          <div className="col-lg-8">
            <div className="row">
              {FunFact.map((funfact, fitem) => (
                <div className="col-md-6" key={fitem}>
                  <div className="funfact_block">
                    <div className="funfact_icon">
                      <Image
                        src={funfact.icon}
                        alt="Compumax - IT Solutions - features image"
                      />
                    </div>
                    <div className="funfact_content">
                      <div className="counter_value">
                        <span className="odometer">
                          <h2>{funfact.title}</h2>
                        </span>
                      </div>
                      <h3 className="funfact_title mb-0">{funfact.subTitle}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="our_world_employees">
              <div className="image_wrap">
                <Image src={fimg} alt="Compumax - Team img" />
              </div>
              <div className="content_wrap">
                <h3 className="title_text mb-0">
                  <b className="d-block">12000+</b> clients from 30 countries in
                  Europe
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
