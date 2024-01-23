import keyIcon from '@assets/photos/ikona klucze.png';
import kidIcon from '@assets/photos/ikona dziecko.png';
import busIcon from '@assets/photos/ikona_autobus.png';
import flowersIcon from '@assets/photos/ikona_kwiatki.png';
import flowersPhoto from '@assets/photos/kwiaty4.png';
import { PageLayout } from '@components/index';
import { LINKS } from '@src/constants';

import { TilesContainer, Tile } from './components';

export const Organization = () => {
  return (
    <PageLayout id='info'>
      <img
        src={flowersPhoto}
        alt='org_flowers'
        className='smallScreen:-top-15 smallScreen:-right-15 absolute -right-10 -top-10 z-10 h-[200px] scale-[90%] smallScreen:scale-[60%] laptop:scale-100'
      />
      <div className='mb-4 flex h-full w-full flex-col items-center justify-evenly pt-10 laptop:mb-0 laptop:pt-0'>
        <div className='flex flex-col items-center'>
          <h1 className='p-8 font-header text-8xl text-pastelRed smallScreen:text-6xl laptop:p-0'>
            Organizacja
          </h1>
        </div>
        <div className='flex flex-col gap-6'>
          <TilesContainer>
            <Tile
              imageAlt='org_key'
              imageSrc={keyIcon}
              variant='100'
              className='h-[150px] smallScreen:mt-4'
            >
              <h4>
                Dla wszystkich gości przyjezdnych ze Śląska oraz Krakowa
                zapewniamy nocleg w dniu wesela oraz śniadanie następnego dnia w
                Domu Pielgrzyma w Leżajsku.
              </h4>
            </Tile>
            <Tile
              imageAlt='org_kid'
              imageSrc={kidIcon}
              variant='100'
              className='h-[150px] smallScreen:gap-6'
            >
              <h4>
                Zapraszamy najmłodszych na wesele! Od 18:00 do 21:00 na sali
                będą animatorzy, którzy zajmą się pociechami.
              </h4>
            </Tile>
          </TilesContainer>
          <TilesContainer>
            <Tile
              imageAlt='org_bus'
              imageSrc={busIcon}
              variant='50'
              className='flex-col-reverse gap-0 p-2'
            >
              <h4>
                Zapewniamy transport z Domu Pielgrzyma do kościoła oraz spod
                kościoła do sali weselnej dla{' '}
                <strong>wszystkich chętnych gości weselnych.</strong> Po północy
                będą również kursowały busy, odwożące gości do Domu Pielgrzyma.
              </h4>
            </Tile>
            <Tile
              imageAlt='org_flowers'
              imageSrc={flowersIcon}
              variant='100-responsive'
              className='flex-row-reverse'
            >
              <h4>
                <strong>Zamiast kwiatów będzie nam miło otrzymać:</strong>
                <br /> - butelki wina do własnej domowej piwniczki <br />-
                wpłaty na bliską naszym sercom Wielką Orkiestrę Świątecznej
                Pomocy: <br />{' '}
                <a
                  href={LINKS.wosp}
                  target='_blank'
                  className='tracking-wider underline hover:text-pastelPink'
                >
                  Link do płatności
                </a>
              </h4>
            </Tile>
          </TilesContainer>
        </div>
      </div>
    </PageLayout>
  );
};
