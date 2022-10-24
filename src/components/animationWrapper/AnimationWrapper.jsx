import React from 'react';
import 'animate.css';

const AnimationWrapper = ({
    effect,
    delay = 0,
    children,
    duration,
}) => {
    let durationObject = {};
    if (duration) {
        durationObject['animationDuration'] = `${duration}s`;
        durationObject['WebkitAnimationDuration'] = `${duration}s`;
    }
    return (
        <div
            className={`animate__animated animate__${effect} animate__delay-${delay}s`}
            style={durationObject}
        >
            {children}
        </div>
    )
}

export default AnimationWrapper;