import React from 'react'
import '../../styles/App.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const LifeOnMars = () => {
  return (
    <>
        <section className='TwoColSection'>
            <article className='col-2'>
                <div>
                    <h1>Life On Mars</h1>
                    <p>2023 - Proyecto final bootcamp Front End</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in urna nec risus laoreet dignissim et eget mi. 
                    Phasellus rutrum massa vitae eros dapibus blandit. Phasellus posuere vehicula rutrum.
                    Vestibulum nec gravida orci, sit amet maximus est. Maecenas condimentum vitae diam a hendrerit. Morbi porta metus vel ex tempor, 
                    sed finibus massa ullamcorper. Nam faucibus nibh nec ex posuere dapibus. Nulla sodales ipsum sit amet ligula porta fringilla.</p>
                </div>
            </article>
            <article className='col-2'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {/* <SwiperSlide><img src={lom01} alt="Lom01" className='ProjectImage' /></SwiperSlide> */}
                </Swiper>
            </article>
        </section>
    </>
  )
}

export default LifeOnMars