import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper";
import 'swiper/swiper-bundle.min.css'; // Ensure you import Swiper's styles

const colors = [
  "#FF5733", // Color 1
  "#33FF57", // Color 2
  "#3357FF", // Color 3
  "#F3FF33", // Color 4
  "#FF33F6"  // Color 5
];

const RectangleSection = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <section className="rectangle_section section_space pb-0">
      <div className="container">
        <h2 className="section_title text-center">Colored Rectangles</h2>
        <div className="rectangle_carousel">
          <Swiper
            modules={[Pagination, A11y]}
            slidesPerView={1}
            loop={true}
            spaceBetween={20}
            centeredSlides={false}
            pagination={{ clickable: true }}
            speed={600}
            breakpoints={{
              1025: {
                slidesPerView: 6,
              },
            }}
          >
            {colors.map((color, index) => (
              <SwiperSlide key={index}>
                <div
                  className="rectangle_block"
                  style={{ backgroundColor: color }}
                >
                  <p className="rectangle_text">Rectangle {index + 1}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <style jsx>{`
        .rectangle_section {
          padding: 60px 0;
        }
        .section_title {
          margin-bottom: 30px;
          font-size: 24px;
          font-weight: bold;
        }
        .rectangle_carousel {
          padding: 20px;
        }
        .rectangle_block {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 80px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          color: #fff;
          font-size: 18px;
          font-weight: bold;
        }
        .rectangle_text {
          margin: 0;
        }
      `}</style>
    </section>
  );
};

export default RectangleSection;
