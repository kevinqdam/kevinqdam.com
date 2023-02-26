import cn from 'classnames';

export type Pill = {
  text: string;
  href?: string | undefined;
  invertColor?: boolean;
};

type PillsProps = {
  pills: readonly Pill[];
};

const Pills: React.FC<PillsProps> = ({ pills }) => (
  <ul className='flex flex-row gap-3 flex-wrap'>
    {pills.map(({ text, href, invertColor }, index) => (
      <div key={`${text}-${index}`}>
        <li
          className={cn(
            'ring rounded px-2.5 py-0.5 font-semibold',
            invertColor
              ? 'ring-pink-800 bg-pink-800 text-pink-100 dark:ring-teal-800 dark:bg-teal-800 dark:text-teal-200'
              : 'ring-pink-800 bg-pink-100 text-pink-800 dark:ring-teal-800 dark:bg-teal-200 dark:text-teal-800'
          )}
        >
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
