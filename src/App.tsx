import { MenuBar } from '@src/components';
import {
  About,
  Contact,
  Organization,
  Wedding,
  Hero,
  Visitors,
} from '@pages/index';

const App = () => {
  return (
    <>
      <MenuBar />
      <div
        id='scrollArea'
        className='flex flex-col items-center gap-4 text-textInfo laptop:block laptop:gap-0'
      >
        <Hero />
        <About />
        <Wedding />
        <Organization />
        <Visitors />
        <Contact />
      </div>
    </>
  );
};

export default App;
