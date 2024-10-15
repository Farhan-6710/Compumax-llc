import React, { Fragment } from 'react';
import Header from '../components/header/Header';
import FeaturesSection from '../components/FeaturesSection/FeaturesSection';
import PolicySection from '../components/PolicySection/PolicySection';
import Footer from '../components/footer/Footer';
import Scrollbar from '../components/scrollbar/scrollbar';

function about() {
  return (
    <Fragment>
      <div>
        <Header />
        {/* Apply the responsive CSS class */}
        <main className="page_content padding-top-180">
          <PolicySection />
          <FeaturesSection />
        </main>
        <Footer />
        <Scrollbar />
      </div>
    </Fragment>
  );
}

export default about;
