import counter from "@/data/counter";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import bg from "@/images/backgrounds/footer.jpg";
import { Container } from "react-bootstrap";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import JarallaxImage from "../Jarallax/JarallaxImage";
const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });
import galleryData from "@/data/galleryData";
import { Image } from "react-bootstrap";

const Jarallax = dynamic(() => import("../Jarallax/Jarallax"), { ssr: false });

const Counters = ({ className = "" }) => {
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  const settings = {
    lazyload: true,
    nav: false,
    mouseDrag: true,
    items: 1,
    autoplay: false,
    autoHeight: true,
    controls: false,
    gutter: 0,
    responsive: {
      768: {
        items: 2,
        gutter: 15,
      },
      992: {
        items: 3,
        gutter: 15,
      },
      1200: {
        items: 5,
        gutter: 20,
      },
    },
  };

  return (
    <section className={`counters-one ${className}`}>
      <Container>
      <Jarallax className="news-two-bg" speed={0.2} imgPosition="50% 0%">
        <JarallaxImage style={{height:"0%"}} src={bg.src} />
        <div className="news-two-bg-overlay"></div>
      </Jarallax>
      
        {/* <ul className="counters-one__box list-unstyled" style={{paddingLeft:"150px"}}>
          {counter.map(({ id, count, letter, text }) => (
            <li className="counter-one__single" key={id}>
              <h3 className="odometer d-flex align-items-center justify-content-center">
                <ReactVisibilitySensor
                  offset={{ top: 10 }}
                  delayedCall={true}
                  onChange={onVisibilityChange}
                >
                  <CountUp
                    start={0}
                    end={countStart ? count : 0}
                    duration={2}
                  />
                </ReactVisibilitySensor>
                {letter && (
                  <span className="counter-one__letter">{letter}</span>
                )}
              </h3>

              <p className="counter-one__text">{text}</p>
            </li>
          ))}
        </ul> */}
        
        
      </Container>
      <br/>
      
      <section className={`gallery-one ${className}`}>
  <div className="section-title text-center">
  <span className="section-title__tagline">SmileKeepers</span>

    <h2 className="section-title__title1">Core Members</h2>
  </div>
  
  <div className="gallery-one__container-box clearfix">
    <TinySlider settings={settings} className="gallery-one__carousel">
      {galleryData.map(({ id, image, title, subTitle, name }) => (
        <div key={id} className="gallery-one__single box-item"> 
          <div style={{ userSelect: "none" }} className="gallery-one__single">
            <div className="gallery-one__img-box">
              <Image
                src={require(`@/images/gallery/${image}`).default.src}
                alt=""
              />
              <div className="gallery-one__hover-content-box">
                <h2>{title}</h2>
                <h2>{name}</h2>
                <p>{subTitle}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </TinySlider>
  </div>
  
</section>

<ul className="counters-one__box list-unstyled" style={{textAlign:"center"}}>
          {counter.map(({ id, count, letter, text }) => (
            <li className="counter-one__single" key={id}>
              <h3 className="odometer d-flex align-items-center justify-content-center">
                <ReactVisibilitySensor
                  offset={{ top: 10 }}
                  delayedCall={true}
                  onChange={onVisibilityChange}
                >
                  <CountUp
                    start={0}
                    end={countStart ? count : 0}
                    duration={2}
                  />
                </ReactVisibilitySensor>
                {letter && (
                  <span className="counter-one__letter">{letter}</span>
                )}
              </h3>

              <p className="counter-one__text">{text}</p>
            </li>
          ))}
        </ul>

    </section>
  );
};

export default Counters;
