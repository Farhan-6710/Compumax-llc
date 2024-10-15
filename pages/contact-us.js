import React, { Fragment } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Scrollbar from '../components/scrollbar/scrollbar';
import ContactFormComponent from '../components/ContactFrom/ContactFormComponent';

const HomePage = () => {
  return (
    <Fragment>
      <div>
        <Header />
        <main className="page_content">
          <ContactFormComponent />
        </main>
        <Footer />
        <Scrollbar />
      </div>
    </Fragment>
  );
};
export default HomePage;
