type Pill = Readonly<{
  pillText: string;
  pillKey: string;
}>;

type PillsProps = {
  pills: readonly Pill[];
};

const Pills: React.FC<PillsProps> = ({ pills }) => (
  <ul className="items-top flex flex-row space-x-1">
    {pills.map(({ pillKey, pillText }) => (
      <div key={pillKey}>
        <li className="rounded bg-pink-100 px-2.5 py-0.5 text-xs font-semibold text-pink-800 dark:bg-teal-200 dark:text-teal-800">
          {pillText}
        </li>
      </div>
    ))}
  </ul>
);

export default Pills;
