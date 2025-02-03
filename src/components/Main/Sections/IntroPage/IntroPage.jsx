import { Button } from "@/components/Button/Button";

import "./IntroPage.scss";

export default function IntroPage() {
  return (
    <div className="introPage">
      <div className="introPage__container">
        <div className="introPage__content conent-introPage">
          <div className="conent-introPage__title">
            Discover Your Dream Property with Estatein
          </div>
          <div className="conent-introPage__desc">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </div>
          <div className="conent-introPage__btns">
            <Button className={"dark-btn"}>Learn More</Button>
            <Button className={"purple-btn"}>Browse Properties</Button>
          </div>
          <div className="conent-introPage__statistics">
            <div className="customers">
              <span>200+</span>
              <p>Happy Customers</p>
            </div>
            <div className="propsOfClient">
              <span>10k+</span>
              <p>Properties For Clients</p>
            </div>
            <div className="experience">
              <span>16+</span>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
        <div className="introPage__right">
          <img src="/images/png/introPage/company.png" alt="company" />
          <div className="introPage__slogan">
            <svg viewBox="0 0 100 100">
              <path id="circle" d="M 0,50 a 50,50 0 1,1 0,1 z" />
              <text>
                <textPath xlinkHref="#circle">
                  ✨Discover Your Dream Property
                </textPath>
              </text>
            </svg>
            <div id="small-circle">
              <img src="/public/icons/arrow_top-right.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
