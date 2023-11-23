import React from "react";

const Projects = () => {
  return (
    <div className="Skills">
      <h1>Projects</h1>
      <p>
        Form more information check my{" "}
        <a href="https://github.com/samiwazni">
          <span>GitHub:&nbsp;&nbsp;</span>
        </a>
      </p>
      <div className="main">
        <ul className="cards">
          <li>
            <div>
              <h2>PC Building Application</h2>
              <div>
                <p>
                  Empowering Users to Customize PC Builds with Data Scraping and
                  Database Integration. This project focuses on the development
                  process of a custom computer configurator, a user-friendly
                  web-based application that empowers users to create
                  personalized computer systems. The project is composed of
                  three core components: data scraping, dynamic web design, and
                  database integration.
                </p>
                <hr />
                <p>
                  Tools: <strong>SQLite</strong>, <strong>Pythin</strong>,{" "}
                  <strong>React Js</strong>, <strong>Node Js</strong>,{" "}
                  <strong>Figma</strong>.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div>
              <h2>MyPortfolio</h2>
              <div>
                <p>
                  This React application serves as a comprehensive solution for
                  a thesis project. It is designed with multiple components and
                  utilizes a router for seamless navigation across pages. The
                  project incorporates Email.js to facilitate communication,
                  allowing users to send emails for inquiries and contact. The
                  thoughtful design and implementation of various features make
                  this application an effective tool for its intended purpose.
                </p>
                <hr />
                <p>
                  Tools: <strong>React Js</strong>, <strong>Figma</strong>,{" "}
                  <strong>Email Js</strong>.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div>
              <h2>Tekniikkatie</h2>
              <div>
                <p>
                  This WordPress website represents a professional web and
                  application development company. The project is crafted using
                  WordPress and Elementor, ensuring a seamless and dynamic
                  online presence. The layout design is meticulously structured,
                  initially conceptualized with Figma and seamlessly implemented
                  into the WordPress framework.
                </p>
                <hr />
                <p>
                  Tools: <strong>WordPress</strong>, <strong>Elementor</strong>,{" "}
                  <strong>WPforms</strong>.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div>
              <h2>BootstrapDemo</h2>
              <div>
                <p>
                  This project serves as a practical showcase of Bootstrap
                  implementation for a streamlined website, utilizing the
                  versatile Bootstrap classes. The website seamlessly integrates
                  mobile and tablet responsiveness, ensuring optimal
                  functionality across various devices.
                </p>
                <hr />
                <p>
                  Tools: <strong>HTML</strong>, <strong>CSS</strong>,{" "}
                  <strong>Bootstrap</strong>.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
