import keyIcon from '../assets/photos/ikona klucze.png';
import kidIcon from '../assets/photos/ikona dziecko.png';
import busIcon from '../assets/photos/ikona_autobus.png';
import flowersIcon from '../assets/photos/ikona_kwiatki.png';
import flowersPhoto from '../assets/photos/kwiaty4.png';

import PageLayout from '../components/PageLayout';
import Tile from '../components/Tiles';
import { LINKS } from '../constants';

export function Organization() {
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
          <div className='flex flex-col items-center justify-center gap-6 laptop:flex-row'>
            <Tile
              className='h-[150px]'
              image={
                <img src={keyIcon} alt='org_key' className='h-[100px]'></img>
              }
            >
              <h4>
                Dla wszystkich gości przyjezdnych ze Śląska oraz Krakowa
                zapewniamy nocleg oraz śniadanie w Domu Pielgrzyma w Leżajsku.
              </h4>
            </Tile>
            <Tile
              image={
                <img src={kidIcon} alt='org_kid' className='h-[80px]'></img>
              }
              className='h-[150px]'
            >
              <h4>
                Zapraszamy najmłodszych na wesele! Od 18:00 do 21:00 na sali
                będzie animator, który zajmie się pociechami.
              </h4>
            </Tile>
          </div>
          <div className='flex flex-col items-center justify-center gap-6 laptop:flex-row'>
            <Tile
              image={
                <img src={busIcon} alt='org_bus' className='h-[50px]'></img>
              }
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
              image={
                <img
                  src={flowersIcon}
                  alt='org_flowers'
                  className='h-[100px] smallScreen:h-[70px]'
                ></img>
              }
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
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
