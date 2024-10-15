import React, { Fragment } from 'react';
import Header from '../components/header/Header';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import Footer from '../components/footer/Footer';
import Scrollbar from '../components/scrollbar/scrollbar';

const HomePage = () => {
  return (
    <Fragment>
      <div>
        <Header />
        <main className="page_content padding-top-180 padding-bottom-40px">
          <ProjectSection />
        </main>
        <Footer />
        <Scrollbar />
      </div>
    </Fragment>
  );
};
export default HomePage;
