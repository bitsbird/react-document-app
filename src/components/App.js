import React from 'react';
import style from './App.module.scss';

const Header = () => {
  return <div>header</div>;
};

const Footer = () => {
  return <div>footer</div>;
};

const Main = () => {
  return <div>main</div>;
};

const App = () => {
  return (
    <div className={style.App}>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.scrollable}>
        <main className={style.mainContent}>
          <Main />
        </main>
        <div className={style.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
