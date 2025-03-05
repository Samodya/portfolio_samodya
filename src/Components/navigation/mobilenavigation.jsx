import styles from './navigation.module.css';
import SlidingMenu from './sidebarMenu';
import logo1 from '../../assets/logo.png'
import MenuButton from './sidebarMenu';
import { useState } from 'react';

export const MobileNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className={styles.mobile_nav}>
            <div className='flex'>
            <div className={styles.menu_section}>
                <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <div className={styles.mobile_nav_logo}>
                <img className={styles.logo_img} src={logo1}/>
                <div className={styles.logo_text}>
                    Portfolio
                </div>
            </div>
            <div className={styles.menu_section}></div>
            </div>
            {/*<div className={styles.mobile_nav_logo}>
                <img className={styles.logo_img} src={logo1}/>
                <div className={styles.logo_text}>
                    Portfolio
                </div>
            </div>
             */}
             <SlidingMenu isOpen={isOpen} />
        </div>
    )
}