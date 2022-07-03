import React, { Component } from "react";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div className="col-sm-12 col-md-12 col-lg-12" key={projects.title}>
            <span className="portfolio-item d-block">
              <div className="foto">
                <div>
                  <h1 className="projects-title" style={{ color: "black" }}>
                    <span>{projects.title}</span>
                  </h1>
                  <table className="projects-table">
                    <thead>
                      <tr className="projects-table-header">
                        <th><span>{projects.time_col}</span></th>
                        <th><span>{projects.title_col}</span></th>
                        <th><span>{projects.detaillink_col}</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      {projects.content.map((content) => {
                      return <tr key={content[3]}>
                        <td className="projects-table-cell">{content[0]}</td>
                        <td className="projects-table-cell">{content[1]}</td>
                        <td className="projects-table-cell"><a href={content[3]}>{content[2]}</a></td></tr>;})}
                    </tbody>
                  </table>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
