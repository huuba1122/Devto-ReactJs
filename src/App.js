import { useState } from 'react';
import Navigation from './components/Navigation';
import Content from './components/Content';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';

import './App.scss';

function App() {
  const [menuMobile, setmenuMobile] = useState(false);
  const toggle = () => {
    setmenuMobile(!menuMobile);
  };
  return (
    <>
      <Navigation openMenu={toggle} />
      <main className="main-container">
        <LeftSidebar closeMenu={toggle} burgerMenu={menuMobile} />
        <Content />
        <RightSidebar />
      </main>
    </>

  );
}

export default App;
