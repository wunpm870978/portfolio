import React, { useState } from 'react';
import NavTop from '../navBar/navTop/navTop';
import ContactBar from '../contactBar/contactBar';
import s from './layout.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/scss";
import "swiper/scss/effect-flip";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import { workExp, education } from '../../assets/portfolio';
import {
    EffectFlip,
    EffectCube,
    Pagination,
    Navigation,
    Parallax,
} from "swiper";
import {
    RocketOutlined,
} from '@ant-design/icons';


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

    const listenToScroll = (e) => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        // console.log('sssss',e);
        // const scrollHeight = e.target.scrollHeight;
        // const clientHeight = e.target.clientHeight;
        setArcOffset2(Math.abs(
            arcLength * (1 - (winScroll / (scrollHeight - clientHeight)))
        ));
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

    React.useEffect(() => {
        document.addEventListener('scroll', listenToScroll);
        return () => {
            document.removeEventListener('scroll', listenToScroll);
        };
    })

    const cateOnchanged = (val) => {
        switch (val) {
            case 0:
                return (
                    <div className={s.workexp}>
                        <Swiper
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
                            modules={[Parallax, Pagination, Navigation]}
                        >
                            {workRenderList}
                        </Swiper>
                    </div>
                );
            case 1:
                return (
                    <div className={s.edu}>
                        <Swiper
                            style={{
                                width: '300px',
                                height: '300px',
                                padding: '50px',
                            }}
                            effect={"flip"}
                            grabCursor={true}
                            pagination={true}
                            navigation={true}
                            modules={[EffectFlip, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide className={s.swiperSlide}>
                                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            </SwiperSlide>
                            <SwiperSlide className={s.swiperSlide}>
                                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                            </SwiperSlide>
                            <SwiperSlide className={s.swiperSlide}>
                                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                            </SwiperSlide>
                            <SwiperSlide className={s.swiperSlide}>
                                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                );
            default:
                break;
        }
    }

    return (
        <div id='main-scrolling' className={s.root}>
            <div className={s.welcomePage}>
                <NavTop />
                <div className={s.intro}>
                    {'Hi, I am Peter. I am experience in  web and app development for frontend and backend.'}
                </div>
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
                {cateOnchanged(selectedCategory)}
            </div>
            <div
                className={s.pageUpBtn}
                style={{ display: 1 - (arcOffset2 / arcOffset1) > 0.1 ? 'block' : 'none' }}
            >
                <svg width={`${size}px`} height={`${size}px`} style={{ transform: 'rotate(-90deg)' }}>
                    <circle
                        cx={`${center}px`}
                        cy={`${center}px`}
                        r={`${radius}px`}
                        fill='transparent'
                        strokeWidth={`${strokeWidth}px`}
                        stroke='#07c'
                        // strokeLinecap='round'
                        strokeDasharray={`${arcOffset1}px`}
                        strokeDashoffset={`${arcOffset2}px`} />
                </svg>
                <RocketOutlined className={s.icon} />
            </div>
            <ContactBar />
        </div>
    )
}

export default Layout;