import React from 'react';
import style from './App.module.scss';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const Main = () => {
  return <div>main</div>;
};

const App = () => {
  return (
    <div className={style.App}>
      <div className={style.header}>
        <AppHeader>header</AppHeader>
      </div>
      <div className={style.scrollable}>
        <main className={style.mainContent}>
          <Main />
        </main>
        <div className={style.footer}>
          <AppFooter>footer</AppFooter>
        </div>
      </div>
    </div>
  );
};

export default App;
