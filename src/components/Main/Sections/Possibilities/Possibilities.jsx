import Possibillity from "./Possibillity/Possibillity";

import "./Possibilities.scss";

export default function Possibilities() {
  return (
    <div className="possibilities">
      <Possibillity
        icon={"/public/icons/possibility_section/home.svg"}
        text="Find Your Dream Home"
        link="!#"
      />
      <Possibillity
        icon={"/public/icons/possibility_section/camera.svg"}
        text="Unlock Property Value"
        link="!#"
      />
      <Possibillity
        icon={"/public/icons/possibility_section/company.svg"}
        text="Effortless Property Management"
        link="!#"
      />
      <Possibillity
        icon={"/public/icons/possibility_section/sun.svg"}
        text="Smart Investments, Informed Decisions"
        link="!#"
      />
    </div>
  );
}
