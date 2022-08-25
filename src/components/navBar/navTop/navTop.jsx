import React from 'react';
import s from './navTop.module.scss';
import { Menu } from 'antd';
import {
    GlobalOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';


const NavTop = () => {
    const { t, i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = React.useState('en');

    const handleChangeLng = (val) => {
        setAnchorEl(val);
        i18n.changeLanguage(val);
    };

    return (
        <div className={s.root}>
            <div className={s.container}>
                <div className={s.logo}>
                    MLW
                </div>
                <div className={s.textContainer}>
                    <div className={s.description}>
                        {t('navTop.aboutme')}
                    </div>
                    <div className={s.description}>
                        {t('navTop.myproject')}
                    </div>
                    <div className={s.navigation}>
                        <GlobalOutlined className={s.icon} />
                        <div className={s.menuContainer}>
                            <div className={s.menuItem} onClick={() => { handleChangeLng('en'); }}>
                                English
                            </div>
                            <div className={s.menuItem} onClick={() => { handleChangeLng('zh'); }}>
                                中文 (繁體)
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}
export default NavTop;