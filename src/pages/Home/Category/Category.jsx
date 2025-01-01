import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'



const Category = () => {
    return (
        <section>
            <SectionTitle subHeading={'From 11.00am to 10.00pm'}  heading={'Order Online'}></SectionTitle>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide1} className="w-full" alt="" />
            <h1 className="text-3xl text-center text-white -mt-16">Salad</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide2} className="w-full" alt="" />
        <h1 className="text-3xl text-white text-center -mt-16">Pizza</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide3} className="w-full" alt="" />
        <h1 className="text-3xl text-white text-center -mt-16">Desert</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide4} className="w-full" alt="" />
        <h1 className="text-3xl text-white text-center -mt-16">Soup</h1>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide5} className="w-full" alt="" />
        <h1 className="text-3xl text-center text-white -mt-16">Salad</h1>
        </SwiperSlide>
       
      </Swiper>
        </section>
    );
};

export default Category;