import { MenuBar } from '@src/components';
import { About, Contact, Organization, Wedding, Hero } from '@pages/index';

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
        <Contact />
      </div>
    </>
  );
};

export default App;
