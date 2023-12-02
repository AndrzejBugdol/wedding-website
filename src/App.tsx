import { twMerge } from 'tailwind-merge';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Organization from './pages/Organization';
import Wedding from './pages/Wedding';
import MainPage from './pages/Hero';
import MenuBar from './components/MenuBar';
// import { angellaWhite, cormorantGarmond } from '../lib/fonts';

function App() {
  console.log('lol');
  return (
    <div>
      <MenuBar />
      {/* <div
        className={twMerge(angellaWhite.variable, cormorantGarmond.className)}
      > */}
      <div className='flex flex-col items-center gap-4 laptop:block laptop:gap-0'>
        <MainPage />
        <About />
        <Wedding />
        <Organization />
        <Contact />
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
