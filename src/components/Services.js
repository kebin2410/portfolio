import React from "react";
const Services = () => {
  return (
    <>
      <section id="services" className="section-block">
        <div className="section-container">
          <h1 className="section-title">Services</h1>
          <div className="service-container">
            <div className="service-left grid-cols">
              <div className="green mx-auto">
                <div className="my-4 progress-title">Machine learning</div>
                <div className="progress">
                  <div className="inner">
                    <div className="percent">
                      <span>95%</span>
                    </div>
                    <div className="water" style={{ top: 15 }}></div>
                    <div className="glare"></div>
                  </div>
                </div>
              </div>
              <div className="blue mx-auto">
                <div className="progress-title my-4">WEB/Mobile UI</div>
                <div className="progress">
                  <div className="inner">
                    <div className="percent">
                      <span>80%</span>
                    </div>
                    <div className="water" style={{ top: 30 }}></div>
                    <div className="glare"></div>
                  </div>
                </div>
              </div>
              <div className="orange mx-auto">
                <div className="progress-title my-4">WebGL/Three.js</div>
                <div className="progress">
                  <div className="inner">
                    <div className="percent">
                      <span>90%</span>
                    </div>
                    <div className="water" style={{ top: 30 }}></div>
                    <div className="glare"></div>
                  </div>
                </div>
              </div>
              <div className="red mx-auto">
                <div className="progress-title my-4">Back-End</div>
                <div className="progress">
                  <div className="inner">
                    <div className="percent">
                      <span>62%</span>
                    </div>
                    <div className="water" style={{ top: "40%" }}></div>
                    <div className="glare"></div>
                  </div>
                </div>
              </div>
              <div className="orange mx-auto">
                <div className="progress-title my-4">BlockChain</div>
                <div className="progress">
                  <div className="inner">
                    <div className="percent">
                      <span>90%</span>
                    </div>
                    <div className="water" style={{ top: 30 }}></div>
                    <div className="glare"></div>
                  </div>
                </div>
              </div>
              <div className="green mx-auto">
                <div className="progress-title my-4">Desktop App</div>
                <div className="progress">
                  <div className="inner">
                    <div className="percent">
                      <span>89%</span>
                    </div>
                    <div className="water" style={{ top: 30 }}></div>
                    <div className="glare"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-16 w-16"></div>
            <div className="service-right">
              <div className="my-1">
                - Web Scraping, Machine learning, Artificial intelligence,
                Trading
              </div>
              <div className="my-1">
                - TypeScript, Python/Django, C++, QT, PHP
              </div>
              <div className="my-1">- HTML/HTML5, CSS/SCSS/SASS</div>
              <div className="my-1">
                - Graphic : SVG, WebGL, Three.js, Greensock
              </div>
              <div className="my-1">
                - Tailwind CSS, Material-UI, Ant-Design
              </div>
              <div className="my-1">
                - React, Svelte, Next.js, Vue.js, Nuxt.js
              </div>
              <div className="my-1">
                - Pixel-Perfect/Mobile Responsive Web UI
              </div>
              <div className="my-1">- Node/Express, Python/Django/Flask</div>
              <div className="my-1">
                - BlockChain : Solidity, Web3.js, SmartContract, NFTs
              </div>
              <div className="my-1">- AI, ML, GPT3/4, NLP, LM, Weaviate,</div>
              <div className="my-1">
                - Version Control : Github/GitLab/BitBucket
              </div>
              <div className="my-1">- QA testing</div>
              <div className="my-1">Hourly Rate: $30 ~ $50</div>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
};

export default Services;
