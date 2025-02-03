import { useState } from "react";

import "./AdBanner.scss";

export function AdBanner() {
  const [isAdClose, setIsAdClose] = useState(false);

  const handleAdClose = () => {
    setIsAdClose(true);
  };

  return (
    !isAdClose && (
      <div className="adBanner">
        <p></p>
        <div className="adBanner__text">
          <p>✨Discover Your Dream Property with Estatein</p>
          <a href="!#">Learn More</a>
        </div>
        <div className="adBanner__close" onClick={handleAdClose}>
          <img src="/icons/close.svg" alt="close" />
        </div>
      </div>
    )
  );
}
