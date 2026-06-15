import React, { Component } from "react";

class Projects extends Component {
  render() {
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var projects = this.props.resumeProjects.map(function (projects) {
        return ( <div className="col-md-12" key={projects.title}>
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{projects.title}</span>
          </h1>
          <div className="row">
              {(projects.content.map((content) => {
                  return <div
                      className="col-sm-12 col-md-6 col-lg-4"
                      key={content[3]}
                    >
                      <span className="portfolio-item d-block">
                        <div className="foto">
                          <div>
                            <span className="project-date">{content[0]}</span>
                            <br />
                            <p className="projects-title">{content[1]}</p>
                            <p className="project-title-settings mt-3">
                              <a href={content[3]} target="_blank" rel="noreferrer">{content[2]}</a>
                            </p>
                          </div>
                        </div>
                      </span>
                    </div>;
                }))}
          </div>

        </div>);
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <div className="col-md-12 mx-auto">
            {projects}
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
