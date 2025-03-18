import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'




import style from './carousel.module.css'
import IMG1 from '../../assets/cartoon.avif'
import IMG2 from '../../assets/sanamterikas.avif'
import IMG3 from '../../assets/pokemon.avif'
import IMG4 from '../../assets/vertical.avif'







const Carousel =()=>{
    const imgage=[IMG1,IMG2,IMG3,IMG4];

    return(
        <>
        <div className={style.sliderContain}>
            <Swiper
             loop={true}
             spaceBetween={30}
            slidesPerView={2}
            grabCursor={true}
    
            centeredSlides={true}

            navigation={true}
            pagination={{clickable : true}}
            autoplay={{delay: 3000, disableOnInteraction: false}}
            modules={[Navigation, Pagination, Autoplay ]}
            className = {style.mySwiper}
            
            
            
            >
                {
                    imgage.map((img,index)=>(
                        <SwiperSlide key={index}>
                            <img src={img} alt={`Slide ${index+1}`} className={style.slideImg} />

                        </SwiperSlide>
                    ))
                }






            </Swiper>
        </div>
        </>
    )
}
export default Carousel;