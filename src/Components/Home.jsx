import React from 'react';
import home from "../images/Today.jpg";
import Common from './Common';
import Alankar from './Alankar';
import maingod from "../images/sripattlladammakollapuradamma.jpg";
import s1 from "../images/s1.png";
import s2 from "../images/s2.png";
import s3 from "../images/s3.png";
import s4 from "../images/s4.png";
import s5 from "../images/s5.png";
import s6 from "../images/s6.png";
import s7 from "../images/s7.png";
import Photogallery from './gallery';




// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';
import 'swiper/modules/scrollbar/scrollbar.scss';
import "swiper/modules/effect-fade/effect-fade.js";
import "swiper/modules/effect-fade/effect-fade.scss";

// import "swiper/modules/effect-cube/effect-cube.js";
import "swiper/modules/effect-cube/effect-cube.scss";
import EffectCube from 'swiper/modules/effect-cube/effect-cube.js';

const Home = () => {
    return (
        <>
            <Swiper
            // install Swiper modules
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectCube]}
                spaceBetween={50}
                slidesPerView={2}
                navigation
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                effect="cube"
                className='swiper'
            >
                <SwiperSlide><img src={s1} alt="img1" /></SwiperSlide>
                <SwiperSlide><img src={s2} alt="img2" /></SwiperSlide>
                <SwiperSlide><img src={s3} alt="img3" /></SwiperSlide>
                <SwiperSlide><img src={s4} alt="img4" /></SwiperSlide>
                <SwiperSlide><img src={s5} alt="img5" /></SwiperSlide>
                <SwiperSlide><img src={s6} alt="img6" /></SwiperSlide>
                <SwiperSlide><img src={s7} alt="img7" /></SwiperSlide>
            </Swiper>
            <Common
                name='ಯಾ ದೇವಿ ಸರ್ವ ಭೂತೇಷು ಚೇತನೇತ್ಯಾಭಿ ಧೀಯತೇ ನಮಸ್ತಸ್ಯೈ ನಮಸ್ತಸ್ಯೈ ನಮೋ ನಮಃ'
                imgsrc={maingod}
                isCompName={true}
                compName="ಶ್ರೀ ಪಟ್ಟಲ್ಲದಮ್ಮ ಶ್ರೀ ಕೊಲ್ಲಾಪುರದಮ್ಮ ದೇವಾಲಯ "
                visit='/services'
                btnname="ದರ್ಶನ್‌ಗಾಗಿ ಮತ್ತು ಪೂಜೆಗಾಗಿ ನೋಂದಾಯಿಸಿ"
            />
            <Alankar
                name='ಇಂದಿನ ಅಲಂಕಾರ ದೃಶ್ಯ'
                imgsrc={home}
                visit='/services'
                btnname="ಚಾನಲ್ ವೀಕ್ಷಿಸಿ"
            />
            <Photogallery
                name='ಫೋಟೋ ಆಲ್ಬಮ್‌ಗಳು'
                imgsrc={home}
                visit='/gallery'
                btnname="ಚಾನಲ್ ವೀಕ್ಷಿಸಿ"
            />
        </>
    )
}

export default Home;