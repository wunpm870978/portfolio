import React, { useState } from 'react';
import NavTop from '../navBar/navTop/navTop';
import ContactBar from '../contactBar/contactBar';
import s from './layout.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/scss";
import "swiper/scss/effect-flip";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/css/effect-fade";
import { workExp, education } from '../../assets/portfolio';
import {
    EffectFade,
    EffectFlip,
    Pagination,
    Navigation,
    Parallax,
    Autoplay,
} from "swiper";
import {
    ScheduleOutlined,
    AuditOutlined,
    HomeOutlined,
} from '@ant-design/icons';
import bgv from '../../assets/keyersProps/bgv1.webm';
import Astronaut from '../../assets/keyersProps/umbrella.png';
import ScrollToTop from '../scrollToTop/ScrollToTop';

const Layout = () => {
    const size = 80;
    const strokeWidth = 5;
    const center = size / 2;
    const radius = center - strokeWidth;
    const arcLength = 2 * Math.PI * radius;
    const progress1 = 0;
    const arcOffset1 = arcLength * ((100 - progress1) / 100);
    const [arcOffset2, setArcOffset2] = useState(arcOffset1);

    const [selectedCategory, setSelectedCategory] = useState(0);

    const listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        setArcOffset2(Math.abs(
            arcLength * (1 - (winScroll / (scrollHeight - clientHeight)))
        ));
    }

    React.useEffect(() => {
        document.addEventListener('scroll', listenToScroll);
        return () => {
            document.removeEventListener('scroll', listenToScroll);
        };
    })


    return (
        <div id='main-scrolling' className={s.root}>
            <div className={s.welcomePage}>
                <NavTop />
                <div className={s.intro}>
                    {'Hi, I am Peter. I am experience in  web and app development for frontend and backend.'}
                </div>
            </div>
            <div className={s.dvider1}>
                <img
                    src={Astronaut}
                    alt=''
                />
            </div>
            <div className={s.cateContainer}>
                <div className={s.cateGrid}>
                    <span
                        onClick={() => setSelectedCategory(0)}
                        className={s.title}
                    >
                        Work Experience
                    </span>
                    <span
                        onClick={() => setSelectedCategory(1)}
                        className={s.title}
                    >
                        Education
                    </span>
                    <span
                        onClick={() => setSelectedCategory(2)}
                        className={s.title}
                    >
                        Side Project
                    </span>
                </div>
                {{
                    0: <div className={s.workexp}>
                        <Swiper
                            key='swiper_0'
                            style={{
                                backgroundColor: '#00ff00cc',
                                "--swiper-navigation-color": "#fff",
                                "--swiper-pagination-color": "#fff",
                            }}
                            speed={800}
                            parallax={true}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            navigation={true}
                            modules={[EffectFlip, Autoplay, Parallax, Pagination, Navigation]}
                        >
                            {workRenderList}
                        </Swiper>
                    </div>,
                    1: <div className={s.edu}>
                        <Swiper
                            key='swiper_1'
                            style={{
                                width: '250px',
                                height: 'auto',
                            }}
                            // autoplay={{
                            //     delay: 5000,
                            //     disableOnInteraction: false,
                            // }}
                            effect={"flip"}
                            grabCursor={true}
                            centeredSlides={true}
                            modules={[EffectFlip, Autoplay]}
                        >
                            {eduList}
                        </Swiper>
                    </div>,
                }[selectedCategory]
                }
            </div>
            <div className={s.test}>
                <video src={bgv} autoPlay loop muted />
            </div>
            <ScrollToTop
                arcOffset2={arcOffset2}
                arcOffset1={arcOffset1}
                size={size}
                center={center}
                radius={radius}
                strokeWidth={strokeWidth}
            />
            <ContactBar />
        </div>
    )
}

const workRenderList = workExp.map((item, idx) => {
    return (
        <SwiperSlide key={`workexp_${idx}`} className={s.swiperSlide}>
            <div className={s.parallaxTitle} data-swiper-parallax="-300">
                {item.position}
            </div>
            <div className={s.subtitle} data-swiper-parallax="-200">
                {item.company}
            </div>
            <div className={s.text} data-swiper-parallax="-100">
                <ul>
                    {item.highlight.map((ele, idx) => {
                        return <li key={`work_hl_${idx}`}>{ele} </li>
                    })}
                </ul>
            </div>
        </SwiperSlide>
    )
})

const eduList = education.map((item, idx) => {
    return (
        <SwiperSlide key={`edu_${idx}`} className={s.swiperSlide}>
            <div>
                <ScheduleOutlined />
                <p>{item.period}</p>
            </div>
            <div>
                <AuditOutlined />
                <p>{item.course}</p>
            </div>
            <div>
                <HomeOutlined />
                <p>{item.college}</p>
            </div>
            {/* <p>{item.status}</p> */}
        </SwiperSlide>
    )
})

export default Layout;