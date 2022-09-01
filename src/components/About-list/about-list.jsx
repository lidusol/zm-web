/* eslint-disable @next/next/no-img-element */
import React from "react";
import cardMouseEffect from "../../common/cardMouseEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import ListData from "../../data/sections/about-list.json";

const AboutUsList = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/A35A9476.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <h4 className="wow color-font">About us.</h4>
              <p className="wow txt" data-splitting>
                {ListData.title}
              </p>
              <ul className="feat">
                {ListData.items.map((item, i) => (
                  <li
                    className="wow fadeInUp"
                    data-wow-delay={`${i + (1 * 2) / 10}s`}
                  >
                    <h6>
                      <span>{i + 1}</span> {item.name}
                    </h6>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsList;
