export default function Possibillity({icon, text, link}) {
  return (
    <div className="possibilities__item item-possibilities">
      <img
        src={icon}
        alt=""
        className="item-possibilities__icon"
      />
      <div className="item-possibilities__text">{text}</div>
      <a href={link} className="item-possibilities__link-btn">
           <img src="/public/icons/arrow_top-right.svg" />
      </a>
    </div>
  );
}
