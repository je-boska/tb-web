export default function GlitchText({
  title,
  link,
}: {
  title: string;
  link?: string;
}) {
  return (
    <p
      className='glitch-text relative before:absolute before:left-0 before:text-almostBlack before:content-[attr(title)] after:absolute after:left-0 after:text-almostBlack after:content-[attr(title)] hover:animate-glitch hover:before:animate-glitchTop hover:after:animate-glitchBottom'
      title={title}
    >
      {link ? <a href={link}>{title}</a> : <>{title}</>}
    </p>
  );
}
