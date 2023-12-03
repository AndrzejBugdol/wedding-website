import photo from '../assets/photos/naszahistoria_przyciete.jpg';
import flowersPhoto from '../assets/photos/kwiaty2_przyciete.png';
import { ScreenImage } from '../components/ScreenImage';
import PageLayout from '../components/PageLayout';

export function About() {
  return (
    <PageLayout id='about' className='flex-col-reverse justify-between'>
      <div className='flex h-full flex-col items-center justify-between laptop:w-3/6'>
        <h1 className='pt-8 font-header text-8xl text-aboutHeader'>
          Nasza historia
        </h1>
        <div className='laptop:p-0laptop:px-16 flex items-center justify-center p-8  '>
          <h4 className='text-justify text-base text-baseColor'>
            Poznaliśmy się w 2017 roku w organizacji studenckiej. W czerwcu 2017
            roku zostaliśmy parą i (xXX) <br />
            <br /> Zaręczyliśmy się 31 maja 2023 roku w pięknej włoskiej
            miejscowości Alberobello, do której zawsze chcieliśmy wrócić. <br />
            <br />
            Nasz ślub odbędzie się dokładnie w rocznicę zaręczyn i kilkanaście
            dni przed naszą 7 rocznicą związku!
          </h4>
        </div>
        <img
          src={flowersPhoto}
          alt='about_flowers'
          className='h-[150px] w-full'
        />
      </div>
      <ScreenImage src={photo} alt='about' />
    </PageLayout>
  );
}
