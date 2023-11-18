import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../compo/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={'From 11:00am to 10:00pm'}
                heading={'ORDER ONLINE'}
            ></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper my-5"
            >
                <SwiperSlide>
                    <img className='transition-transform transform hover:scale-110' src={slide1} alt="" />
                    <h3 className='uppercase lg:text-4xl mt-10 '>salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='transition-transform transform hover:scale-110' src={slide2} alt="" />
                    <h3 className='uppercase text-4xl mt-10'>pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='transition-transform transform hover:scale-110' src={slide3} alt="" />
                    <h3 className='uppercase lg:text-4xl mt-10'>soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='transition-transform transform hover:scale-110' src={slide4} alt="" />
                    <h3 className='uppercase lg:text-4xl mt-10'>sweet</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='transition-transform transform hover:scale-110' src={slide5} alt="" />
                    <h3 className='uppercase lg:text-4xl mt-10'>salads</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;