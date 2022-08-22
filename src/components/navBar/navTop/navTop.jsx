import React from 'react';
import s from './navTop.module.scss';
import { Dropdown, Menu, Space } from 'antd';
import {
    GlobalOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';


const NavTop = () => {
    const { t, i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = React.useState('en');

    const handleChangeLng = (event) => {
        setAnchorEl(event.key);
        i18n.changeLanguage(event.key);
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
                    <Dropdown
                        overlay={
                            <Menu
                                defaultSelectedKeys={['en']}
                                selectedKeys={[anchorEl]}
                                onClick={handleChangeLng}
                                items={[
                                    {
                                        key: 'en',
                                        label: 'English',
                                    },
                                    {
                                        key: 'zh',
                                        label: '中文 (繁體)',
                                    },
                                ]}
                            />
                        }
                        placement="bottom"
                    >
                            <GlobalOutlined className={s.icon} />
                    </Dropdown>
                </div>
            </div>
        </div>
    )

}
export default NavTop;