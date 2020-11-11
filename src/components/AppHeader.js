import React, { useState } from 'react';
import style from './AppHeader.module.scss';

const AppHeader = (props) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  /** @todo: extract menu to a component */
  const menuClasses = isMenuVisible ? style.menu : `${style.menu} ${style.menuHidden}`;
  return (
    <header>
      <div className={style.Header}>
        <div className={style.logo}>Logo</div>
        <div className={menuClasses}>
          <div className={style.menuItem}>
            Item 1 {/* <BaseNav :navItems='navItems'></BaseNav> */}
          </div>
          <div className={style.menuItem}>Item 2 {/* <Profile /> */}</div>
        </div>
        <div className={style.menuButton}>
          <button onClick={toggleMenu}>:::</button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
