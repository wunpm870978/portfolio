import React from 'react';
import s from './contactBar.module.scss';
import {
    LinkedinFilled,
    GithubFilled,
    MailOutlined,
    MailFilled
} from '@ant-design/icons';
export default function ContactBar() {

    return (
        <React.Fragment>
            <div className={s.iconGrid}>
                <LinkedinFilled className={s.iconL} />
                <GithubFilled className={s.iconL} />
                <a href="mailto:petermakwork@gmail.com">
                    <MailOutlined className={s.iconL} />
                </a>
                <MailFilled className={s.iconL} />
            </div>
        </React.Fragment>
    )
}