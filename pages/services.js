import React, { Fragment } from 'react';
import Header from '../components/header/Header';
import ServiceSection from '../components/ServiceSection/ServiceSection';
import Footer from '../components/footer/Footer';
import Scrollbar from '../components/scrollbar/scrollbar';

const HomePage = () => {
  return (
    <Fragment>
      <div>
        <Header />
        <main className="page_content">
          <ServiceSection />
        </main>
        <Footer />
        <Scrollbar />
      </div>
    </Fragment>
  );
};
export default HomePage;
