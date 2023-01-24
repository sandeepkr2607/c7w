import React from "react";
import css from "./OurTeam.module.css";
import team1 from "../../images/team1.png";
import team2 from "../../images/team2.png";
import team3 from "../../images/team3.png";
import team4 from "../../images/team4.png";

const OurTeam = () => {
  return (
    <>
      <div className={css.container}>
        <h1 className={css.heading}>
          OUR <span className={css.color}>TEAM</span>
        </h1>
        <div className={css.containt}>
          <div className={css.aboutTeam1}>
            <img src={team1} alt="" />
            <p>
              Whenever there is a decline in righteousness and an increase in
              unrighteousness, O Arjun, at that time I manifest myself on earth.
            </p>
          </div>
          <div className={css.aboutTeam2}>
            <img src={team2} alt="" />
            <p>
              Abandon all varieties of dharmas and simply surrender unto me
              alone. I shall liberate you from all sinful reactions; do not
              fear.
            </p>
          </div>
          <div className={css.aboutTeam3}>
            <img src={team3} alt="" />
            <p>
              Weapons cannot shred the soul, nor can fire burn it. Water cannot
              wet it, nor can the wind dry it
            </p>
          </div>
          <div className={css.aboutTeam4}>
            <img src={team4} alt="" />
            <p>
              Elevate yourself through the power of your mind, and not degrade
              yourself, for the mind can be the friend and also the enemy of the
              self.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
