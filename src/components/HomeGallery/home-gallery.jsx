/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const HomeGallery = () => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio-cr section-padding pb-50">
      <div className="container">
        <div className="row">
          <div className="filtering text-center col-12">
            <div className="filter">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".manufacturing">Manufacturing</span>
              <span data-filter=".agro-processing">Agro Processing</span>
              <span data-filter=".service">Service</span>
              <span data-filter=".renewable-energy-automotive">
                Renewable Energy-Automotive
              </span>
            </div>
          </div>

          <div className="gallery-mons full-width">
            <div className="items service wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <Link href={`#`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/cr/01.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont flex">
                <h6 className="color-font">Service</h6>
                <span>
                  <a href="/projects/service">Hotel and Lodges</a>
                </span>
              </div>
            </div>

            <div
              className="items agro-processing wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`#`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/cr/03.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont flex">
                <h6 className="color-font">Agro Processing</h6>
                <span>
                  <a href="/projects/agro-processing">Integrated Dairy Farm</a>
                </span>
              </div>
            </div>
            <div
              className="items agro-processing wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`#`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/cr/033.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont flex">
                <h6 className="color-font">Agro Processing</h6>
                <span>
                  <a href="/projects/agro-processing">Integrated Dairy Farm</a>
                </span>
              </div>
            </div>
            <div
              className="items width2 manufacturing wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`#`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/cr/02.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6 className="color-font">Manufacturing</h6>
                <span>
                  <a href="/projects/manufacturing">Heavy Truck Tyre</a>
                </span>
              </div>
            </div>

            <div
              className="items width2 service wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`#`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/cr/011.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6 className="color-font">Service</h6>
                <span>
                  <a href="/projects/service">Hotel and Lodges</a>
                </span>
              </div>
            </div>

            <div
              className="items width2 renewable-energy-automotive wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`#`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/cr/04.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6 className="color-font">Renewable Energy-Automotive</h6>
                <span>
                  <a href="/projects/renewable-energy-automotive">
                    Electric Energy intensive cars
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
