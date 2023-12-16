import MenuBar from '@components/MenuBar';
import { About, Contact, Organization, Wedding, Hero } from '@pages/index';

function App() {
  return (
    <>
      <MenuBar />
      <div className='flex flex-col items-center gap-4 text-textInfo laptop:block laptop:gap-0'>
        <Hero />
        <About />
        <Wedding />
        <Organization />
        <Contact />
      </div>
    </>
  );
}

export default App;
