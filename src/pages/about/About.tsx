import { PageLayout, ScreenImage } from '@components/index';

export const About = () => {
  return (
    <PageLayout id='about' className='flex-col-reverse justify-between'>
      <div className='flex h-full flex-col items-center justify-between laptop:w-3/6'>
        <h1 className='pt-8 font-header text-8xl text-pastelOrange smallScreen:text-6xl'>
          Nasza historia
        </h1>
        <div className='flex items-center justify-center p-8 laptop:p-0 laptop:px-16'>
          <h4 className='text-justify text-base text-baseColor'>
            Poznaliśmy się w 2017 roku w organizacji studenckiej. W czerwcu 2017
            roku zostaliśmy parą.
            <br />
            <br /> Zaręczyliśmy się 31 maja 2023 roku w pięknej włoskiej
            miejscowości Alberobello, do której zawsze chcieliśmy wrócić. <br />
            <br />
            Nasz ślub odbędzie się dokładnie w rocznicę zaręczyn i kilkanaście
            dni przed naszą 7 rocznicą związku!
          </h4>
        </div>
        <img
          src='assets/photos/kwiaty2_przyciete.png'
          alt='about_flowers'
          className='h-[150px] w-full smallScreen:h-[75px]'
          loading='lazy'
        />
      </div>
      <ScreenImage
        src='assets/photos/naszahistoria_przyciete.jpg'
        alt='about'
      />
    </PageLayout>
  );
};
