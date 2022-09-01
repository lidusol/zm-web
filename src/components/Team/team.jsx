/* eslint-disable @next/next/no-img-element */
import React from "react";
// import teamSkillsProgress from "../../common/teamSkillsProgress";
import tooltipEffect from "../../common/tooltipEffect";
import teamsDate from "../../data/sections/team.json";

const Team = () => {
  React.useEffect(() => {
    // teamSkillsProgress();
    setTimeout(() => {
      tooltipEffect();
    }, 1000);
  }, []);
  return (
    <div className="team-crv section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12  mb-60">
            <div className="content wow fadeInUp md-mb30" data-wow-delay=".5s">
              <div className="">
                <h4 className="co-tit text-center">Our Board Members</h4>
              </div>
              <p className="text-center">
                We are ZM Trading SC group. We conceived a shared company owned
                by multiples
              </p>
            </div>
          </div>
          <div className="col-lg-12 ">
            <div className="img-box">
              <div className="row">
                <div className="col-sm-4 toright">
                  <div className="full-width">
                    {teamsDate.teams.slice(0, 3).map((team, index) => (
                      <div key={team.id}>
                        <div
                          className={`img sizxl ${
                            index + 1 != teamsDate.teams.slice(0, 3).length
                              ? "mb-30"
                              : null
                          }`}
                          data-tooltip-tit={team.title}
                          data-tooltip-sub={team.sub}
                        >
                          <img src={team.image} alt="" className="imago wow" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-sm-4 toleft valign">
                  <div className="full-width text-left">
                    {teamsDate.teams.slice(3, 6).map((team, index) => (
                      <div key={team.id}>
                        <div
                          className={`img sizxl ${
                            index + 1 != teamsDate.teams.slice(3, 6).length
                              ? "mb-30"
                              : null
                          }`}
                          data-tooltip-tit={team.title}
                          data-tooltip-sub={team.sub}
                        >
                          <img src={team.image} alt="" className="imago wow" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-sm-4 toleft valign">
                  <div className="full-width text-left">
                    {teamsDate.teams.slice(6, 8).map((team, index) => (
                      <div key={team.id}>
                        <div
                          className={`img sizxl ${
                            index + 1 != teamsDate.teams.slice(6, 8).length
                              ? "mb-30"
                              : null
                          }`}
                          data-tooltip-tit={team.title}
                          data-tooltip-sub={team.sub}
                        >
                          <img src={team.image} alt="" className="imago wow" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
