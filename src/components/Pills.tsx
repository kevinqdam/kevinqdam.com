export type Pill = {
  text: string;
  href?: string | undefined;
  invertColor?: boolean;
};

type PillsProps = {
  pills: readonly Pill[];
};

const Pills = ({ pills }: PillsProps) => (
  <ul className="tag-list">
    {pills.map(({ text, href, invertColor }, index) => (
      <li key={`${text}-${index}`}>
        {href ? (
          <a className={`tag-pill${invertColor ? ' is-inverted' : ''}`} href={href}>
            {text}
          </a>
        ) : (
          <span className={`tag-pill${invertColor ? ' is-inverted' : ''}`}>
            {text}
          </span>
        )}
      </li>
    ))}
  </ul>
);

export default Pills;
