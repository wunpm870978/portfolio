import React, { useState, useEffect } from 'react';
import NavTop from '../navBar/navTop/navTop';
import ContactBar from '../contactBar/contactBar';
import s from './layout.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import { workExp } from '../../assets/portfolio';
import {
    Pagination,
    Navigation,
    Parallax,
    Autoplay,
} from "swiper";
import bgv from '../../assets/keyersProps/bgv1.webm';
import Astronaut from '../../assets/keyersProps/umbrella.png';
import ScrollToTop from '../scrollToTop/ScrollToTop';
import AnimationWrapper from '../animationWrapper/AnimationWrapper';
import FadingSlide from '../fadingSlide/FadingSlide';
import './layout.css';

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

    useEffect(() => {
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
                    0: <AnimationWrapper key='info_0' effect='fadeIn'>
                        <div className={s.workexp}>
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
                                modules={[Autoplay, Parallax, Pagination, Navigation]}
                            >
                                {workRenderList}
                            </Swiper>
                        </div>
                    </AnimationWrapper>,
                    1: <AnimationWrapper key='info_1' effect='fadeIn'>
                        <div className={s.edu}>
                            <FadingSlide />
                        </div>
                    </AnimationWrapper>,
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

export default Layout;