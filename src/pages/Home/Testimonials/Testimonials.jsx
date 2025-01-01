import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then((res) => res.json())
        .then((data) => setReviews(data))
    }, [])
    return (
        <div className="my-20">
             <SectionTitle heading={'Testimonials'} subHeading={'What Our Client Say'}></SectionTitle>
             <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
      
        {
            reviews.map((review) =>   <SwiperSlide key={review._id}>
                <div className="m-24 flex flex-col justify-center items-center">
                <Rating style={{ maxWidth: 250 }} value={review.rating} />
               <p className="mt-2">{review.details}</p>
               <p className="text-orange-600 text-2xl">{review.name}</p>

                </div>
            </SwiperSlide>)
        }
      </Swiper>
        </div>
    );
};

export default Testimonials;