import React, { useState, useEffect } from 'react';
import AnimationWrapper from '../animationWrapper/AnimationWrapper';
import './FadingSlide.css';
import s from './FadingSlide.module.scss';
import {
    ScheduleOutlined,
    AuditOutlined,
    HomeOutlined,
} from '@ant-design/icons';
import { education } from '../../assets/portfolio';


const FadingSlide = () => {
    const [fadeProps, setFadeProps] = useState({
        slideIndex: 0,
        state: 'fadeIn',
    })

    useEffect(() => {
        const animationInterval = setInterval(() => {
            if (fadeProps.state === 'fadeIn') {
                setFadeProps((prevState) => ({
                    ...prevState,
                    state: 'fadeOut',
                }));
            } else {
                setFadeProps((prevState) => ({
                    ...prevState,
                    slideIndex: prevState.slideIndex === 2
                        ? 0
                        : prevState.slideIndex + 1,
                    state: 'fadeIn',
                }));
            }
        }, 3000);

        return () => clearInterval(animationInterval)
    }, [fadeProps])

    return (
        <AnimationWrapper
            effect={fadeProps.state}
            duration={2}
        >
            <div
                key={`swiper_0_${fadeProps.slideIndex}`}
                className={s.swiperSlide}
            >
                <div>
                    <ScheduleOutlined />
                    <p>{education[fadeProps.slideIndex].period}</p>
                </div>
                <div>
                    <AuditOutlined />
                    <p>{education[fadeProps.slideIndex].course}</p>
                </div>
                <div>
                    <HomeOutlined />
                    <p>{education[fadeProps.slideIndex].college}</p>
                </div>
            </div>
        </AnimationWrapper>
    )
}

export default FadingSlide;