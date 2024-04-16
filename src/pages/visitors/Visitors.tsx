import { Link, PageLayout } from '@components/index';
import { LINKS } from '@src/constants';
import { VisitorsSection } from './components/VisitorsSection';

export const Visitors = () => {
  return (
    <PageLayout id='visitors'>
      <img
        src='assets/photos/kwiaty4.png'
        alt='org_flowers'
        className='smallScreen:-top-15 smallScreen:-right-15 absolute -right-10 -top-10 z-10 h-[200px] scale-[90%] smallScreen:scale-[60%] laptop:scale-100'
        loading='lazy'
      />
      <div className='mb-4 flex h-full w-full flex-col items-center justify-evenly pt-14 laptop:mb-0 laptop:pt-0'>
        <div className='flex flex-col items-center'>
          <h1 className='p-10 font-header text-8xl text-pastelRed smallScreen:text-6xl laptop:p-0'>
            Dla przyjezdnych
          </h1>
        </div>
        <div className='flex flex-col gap-10 px-10 laptop:flex-row'>
          <VisitorsSection title='Nocleg w domu pielgrzyma'>
            <li>
              Możliwość kwaterowania się w Domu Pielgrzyma od godz. 10:30:{' '}
              <Link href={LINKS.hotel} />
            </li>
            <li>
              W Domu Pielgrzyma na gości przyjezdnych będzie czekał ciepły
              poczęstunek.
            </li>
            <li>Prosimy o pozostawienie samochodów na parkingu.</li>
            <li>
              Autobusy z Domu Pielgrzyma do kościoła odjadą o godz. 13:15. Po
              mszy ślubnej autobusy zabiorą gości przyjezdnych do Villi Presto
              na wesele.
            </li>
            <li>
              Od 23:30 do 4:30 będzie kursował bus, odwożący gości do Domu
              Pielgrzyma.
            </li>
            <li>
              Rankiem następnego dnia zapraszamy na wspólne śniadanie w Domu
              Pielgrzyma na godz. 10:00
            </li>
            <li>
              Doba hotelowa kończy się o godz. 10:00, prosimy o zebranie rzeczy
              z pokoi przed śniadaniem.
            </li>
          </VisitorsSection>
          <VisitorsSection title='Nocleg w villi presto'>
            <li>
              Możliwość kwaterowania się w Villi Presto od godz. 15:00 (po mszy
              ślubnej): <Link href={LINKS.presto} />
            </li>
            <li>
              W Domu Pielgrzyma na gości przyjezdnych będzie czekał ciepły
              poczęstunek, zapraszamy do wstąpienia przed mszą ślubną.
            </li>
            <li>
              Prosimy o transport samochodami do kościoła i po mszy ślubnej do
              Villi Presto.
            </li>
            <li>
              Rankiem następnego dnia zapraszamy na wspólne śniadanie w Domu
              Pielgrzyma na godz. 10:00.
            </li>
            <li>
              Doba hotelowa kończy się o godz. 11:00, prosimy o zebranie rzeczy
              z pokoi przed śniadaniem.
            </li>
          </VisitorsSection>
        </div>
      </div>
    </PageLayout>
  );
};
