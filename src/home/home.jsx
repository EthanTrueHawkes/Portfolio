import React from "react";
import "./home.css";

import { ProjectSpotlight } from "../components/ui/project-spotlight";
import arrowIcon from "../Assets/Icons/Arrow-SVGicon.svg";
import heroTitleGraphic from "../Assets/Icons/Hero-title-ethantruehawkes-SVGicon.svg";
import noPhotoGraphic from "../Assets/Icons/Nophoto-graphic-SVGicon.svg";

export function Home() {
  return (
    <main>
      <section className="page-content">
        <section>
          <section className="hero">
            <div id="hero-column-one">
              <img
                className="hero-title"
                src={heroTitleGraphic}
                alt="Ethan True Hawkes"
              />

              <div className="landing-topInterests">
                <p className="label">Obsessions</p>

                <div className="landing-topInterests-container">
                  <div className="singleInterest">
                    <h3>Design Systems</h3>
                    <p>
                      Uniform, scalable designs built in collab between designer
                      and dev.
                    </p>
                  </div>

                  <div className="singleInterest">
                    <h3>Interaction Design</h3>
                    <p>
                      Motion and feedback to page interaction, increasing user
                      delight.
                    </p>
                  </div>

                  <div className="singleInterest">
                    <h3>User Testing</h3>
                    <p>
                      User feedback and insights to iterate and improve the
                      product.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="hero-column-two">
              <img src={noPhotoGraphic} alt="Hero Graphic" />
            </div>
          </section>

          <div id="landing-floating-seemywork">
            <p>See my work</p>
            <img src={arrowIcon} alt="Arrow Icon" />
          </div>
        </section>

        <section className="work-section">
          <header>
            <h2>Projects</h2>
          </header>

          <div className="projects-container">
            <ProjectSpotlight
              title="Outbound - Better Returns"
              description="Conceptual project built around decreasing product return emissions and business costs."
              tags={["User Testing", "Product Thinking", "Playground"]}
              image="/static/Outbound.png"
            />
            <ProjectSpotlight
              title="Strong Youth Project"
              description="Conceptual project built around decreasing product return emissions and business costs."
              tags={["User Research", "Design System", "Work"]}
              image="/static/StrongYouth.png"
            />
          </div>
        </section>
      </section>
    </main>
  );
}
