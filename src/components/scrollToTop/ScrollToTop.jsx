import React, { useState } from 'react';
import s from './ScrollToTop.module.scss';
import { RocketOutlined } from '@ant-design/icons';

const ScrollToTop = ({
    arcOffset2,
    arcOffset1,
    size,
    center,
    radius,
    strokeWidth,
}) => {
    return (<div
        className={s.pageUpBtn}
        style={{ display: 1 - (arcOffset2 / arcOffset1) > 0.2 ? 'block' : 'none' }}
        onClick={() => window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })}
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
    </div>)
}

export default ScrollToTop;