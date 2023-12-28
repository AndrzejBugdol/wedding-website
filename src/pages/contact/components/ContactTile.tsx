function formatNumber(number: string | undefined) {
  const match = number?.toString().match(/^(\d{3})(\d{3})(\d{3})/);
  return `+48 ${match?.[1]} ${match?.[2]} ${match?.[3]} `;
}

type ContactTileProps = {
  title: string;
  number: string | undefined;
};

export const ContactTile = ({ title, number }: ContactTileProps) => {
  return (
    <div className='flex h-[150px] w-[150px] flex-col items-center justify-center gap-6 border-2 border-solid border-pastelOrange border-opacity-50 smallScreen:h-[120px] smallScreen:w-[120px] smallScreen:gap-2'>
      <h1 className='font-header text-4xl text-pastelOrange laptop:text-5xl'>
        {title}
      </h1>
      <p className='text-center font-info text-xs smallScreen:text-[12px]'>
        {formatNumber(number)}
      </p>
    </div>
  );
};
