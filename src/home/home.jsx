import React from "react";
import { ProjectSpotlight } from "../components/ui/project-spotlight";

export function Home() {
  return (
    <main>
      <section className="page-content">
        <section>
          <section className="hero">
            <div id="hero-column-one">
              <img
                className="hero-title"
                src="Assets/Icons/Hero-title-ethantruehawkes-SVGicon.svg"
                alt="Ethan True Hawkes"
              />

              <div className="landing-topinterests">
                <p>Top Interests</p>

                <ul>
                  <li>
                    <h3>Design Systems</h3>
                    <p>
                      Uniform, scalable designs built in collab between designer
                      and dev.
                    </p>
                  </li>

                  <li>
                    <h3>Interaction Design</h3>
                    <p>
                      Motion and feedback to page interaction, increasing user
                      delight.
                    </p>
                  </li>

                  <li>
                    <h3>User Testing</h3>
                    <p>
                      User feedback and insights to iterate and improve the
                      product.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div id="hero-column-two">
              <img
                src="Assets/Icons/Nophoto-graphic-SVGicon.svg"
                alt="Hero Graphic"
              />
            </div>
          </section>

          <div id="landing-floating-seemywork">
            <p>See my work</p>
            <img src="Assets/Icons/arrow-SVGicon.svg" alt="Arrow Icon" />
          </div>
        </section>

        <section className="work-section">
          <header>
            <h2>Projects</h2>
          </header>

          <div>
            <div id="projects-toggle">
              <span>All</span>
              <span>Work</span>
              <span>Personal</span>
            </div>
            <div className="work-container">
              <ProjectSpotlight
                title="Outbound"
                description="A 0 to 1 creation of a sustainable product return flow enabling customers to easily return projects while reducing the CO2 emissions and trash generated through the product."
                tags={["Personal", "13 views"]}
                image="Assets/Outbound_Project_Placeholder.png"
              />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
