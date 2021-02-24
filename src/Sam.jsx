import React from "react";
import sam from "../src/Img/sam.png";

const Sam = () => {
  return (
    <>
      <section id="header" className="d-flex align-item-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    <strong className="brand-name"> Samuel Miller </strong>
                  </h1>
                  <h2 className="my-3">
                    <div className="contentabout">
                      Hi I am shit aka <strong>
                        <a target="_blank" href="https://github.com/samuelmarina">
                          Samule Miller
                        </a>
                      </strong>. I love to do shitest thing in life like making video on reviewing
                      my subs shitest code. My fan aka jobless people call me english version of CarryMinati. I am a noob coder
                      and a roaster. I love Lana Rhoades she is my dream star. If you like to watch shit video go to my <strong>
                        <a target="_blank" href="https://www.youtube.com/c/SamMillerVlogs/">
                          YouTube 
                        </a>
                      </strong> 
                       channel. And if you are not getting kick from yt shit join my 
                       <strong>
                       <a target="_blank" href="https://discord.gg/D5UTS6W2uB">
                          Discord 
                        </a>
                        </strong>
                    </div>
                  </h2>
                  <div className="mt-3 mb-5">
                    <a target="_blank" href="https://github.com/samuelmarina/noob-coding/" className="btn-main">
                      See My website which is not made by me.
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={sam} className="img-fluid animated" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sam;
