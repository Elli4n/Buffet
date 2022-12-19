import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.css'


const Slide = ({ settings, children }) => {
  return (
    <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
      {children}
    </Swiper>
  );
};

export default Slide;