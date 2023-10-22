import MainPage from '@/app/components/Main'
import About from './components/About';
import Wedding from './components/Wedding';
import Organization from './components/Organization';

export default function Home() {
  return (
    <>
      <MainPage />
      <About />
      <Wedding />
      <Organization />
    </>
  );
}
