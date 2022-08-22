import React from 'react';
import NavTop from '../navBar/navTop/navTop';
import Content from '../content/content';
import ContactBar from '../contactBar/contactBar';
import s from './layout.module.scss';

export default function Layout() {

    return (
        <div className={s.root}>
            <NavTop />
            <Content />
            <ContactBar />
        </div>
    )
}