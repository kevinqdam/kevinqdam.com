export type Pill = {
  text: string;
  href?: string | undefined;
};

type PillsProps = {
  pills: readonly Pill[];
};

const Pills: React.FC<PillsProps> = ({ pills }) => (
  <ul className='items-top flex flex-row gap-2 flex-wrap'>
    {pills.map(({ text, href }, index) => (
      <div key={`${text}-${index}`}>
        <li className='rounded bg-pink-100 px-2.5 py-0.5 font-semibold text-pink-800 dark:bg-teal-200 dark:text-teal-800'>
          {href ? (
            <a href={href} className='hover:underline'>
              {text}
            </a>
          ) : (
            text
          )}
        </li>
      </div>
    ))}
  </ul>
);

export default Pills;
