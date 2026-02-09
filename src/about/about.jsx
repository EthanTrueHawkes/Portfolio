import React from "react";

export function About() {
  return (
    <main>
      <section className="about-page">
        <section id="truehawkes-logo">
          <img
            src="Assets/Icons/Nophoto-graphic-SVGicon.svg"
            alt="True Hawkes Logo"
          />
        </section>

        <section className="about-contentbox">
          <header>
            <h1>About Me</h1>
          </header>

          <div className="textbox">
            <p>
              What I love about UX design is the constant process of
              learning—about people, about systems, and about how small
              decisions shape real experiences. I’m especially interested in
              design systems, interaction design, and user testing because they
              allow me to think both creatively and analytically. I enjoy
              iterating on ideas, validating them with users, and refining
              details until the experience feels intuitive and intentional. For
              me, good UX isn’t just about how something looks or works—it’s
              about how clearly it communicates and how well it supports the
              people using it.
            </p>
            <p>
              I also have a side passion for coding and learning more about the
              implementation of design. See the history of my GitHub commits for
              building this website below.
            </p>
          </div>

          <div id="github-repo">
            <img
              src="assets/GitHub_Repository_Placeholder.png"
              alt="Placeholder of GitHub repository."
            />
          </div>
        </section>
      </section>
    </main>
  );
}
