import React from "react";

const Home = () => {
  return (
    <>
      <section id="home" className="landing-background">
        <div className="info-content">
          <div className="info-name">
            <span className="color-animation-text1">
              <span>W</span>
              <span>e</span>
              <span>l</span>
              <span>c</span>
              <span>o</span>
              <span>m</span>
              <span>e</span>
              <span>&nbsp;</span>
              <br className="hidden" />
              <span>t</span>
              <span>o</span>
              <span>&nbsp;</span>
              <br className="hidden" />
              <span>V</span>
              <span>i</span>
              <span>s</span>
              <span>i</span>
              <span>t</span>
              <span>&nbsp;</span>
              <span>M</span>
              <span>e</span>
              <br className="hidden" />
              <span>&nbsp;</span>
            </span>
          </div>
          <h1 className="comment">We can service many thing with IT technology.</h1>
          <a href="#contact"><button className="btn-contact">Contact me</button></a>
        </div>
      </section>
      <hr />
    </>
  );
};

export default Home;
