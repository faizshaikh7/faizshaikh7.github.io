import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class TabsTwo extends Component {
  render() {
    let tab1 = "Skills",
      tab2 = "Experience",
      tab3 = "Education";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                    <Tab>{tab3}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Full-Stack Developer{" "}
                            {/* <span> - Android/iOS/Desktop Apps</span> */}
                          </a>
                          A full stack developer with good front-end, back-end,
                          development, databases and deployment skills
                        </li>
                        <li>
                          <a href="/service">
                            App & Web Developer
                            {/* <span> - Development</span> */}
                          </a>
                          Websites, web experiences, ...
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Full Stack Developer
                            <span> - Varient Infosystems</span>
                          </a>{" "}
                          2020 - 2021
                        </li>
                        <li>
                          <a href="/service">
                            Android & Flutter Developer
                            <span> - Apoioviewer Software</span>
                          </a>{" "}
                          2022 - 2023
                        </li>
                        <li>
                          <a href="/service">
                            Full Stack Developer<span> - Freelancer </span>
                          </a>{" "}
                          2020 - Present
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            HSC
                            <span> - Clara's College, Mumbai</span>
                          </a>{" "}
                          2019 - 2020
                        </li>
                        <li>
                          <a href="/service">
                            Bachelor of Computer Applications
                            <span>
                              {" "}
                              - K. J. Somaiya College of Engineering, Mumbai{" "}
                            </span>
                          </a>{" "}
                          2022 - Present
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;
