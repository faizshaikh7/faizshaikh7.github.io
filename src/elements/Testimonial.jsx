import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import testimonialImg2 from "../assets/images/client/testimonial-2.jpg";
import testimonialImg8 from "../assets/images/client/testimonial-8.jpg";

const testimonials = [
  {
    name: "DAVID LEE",
    title: "PROJECT MANAGER, TECH INNOVATIONS, INC",
    content:
      "I had the pleasure of working with Mohamed Faiz on our project, His skill in both front-end and back-end development made our application seamless and user-friendly.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5eb48d3fef49df153d320521/764b8e44-aa9d-4985-baff-a67167a804ad/SamuraiToyFace.jpg?format=1000w",
  },
  {
    name: "EMILY JOHNSON",
    title: "CEO, STARTAPP SOLUTIONS, INC.",
    content:
      "Working with Mr. Faiz on our mobile app was a game-changer. His expertise in both iOS and Android ensured our app was not only visually appealing but also highly functional. Mohamed’s dedication and creativity stood out throughout the project. I look forward to working with him again on future projects.",
    image: testimonialImg2,
  },
  // ... add other testimonial objects here
  {
    name: "MICHEAL BROWN",
    title: "MARKETING DIRECTOR, CREATIVE WEB AGENCY, INC.",
    content:
      "Working with Mohamed Faiz on our backend development was a remarkable experience. His deep understanding of server-side technologies and databases ensured our system was robust and secure.",
    image: testimonialImg8,
  },
  {
    name: "KAREN MITCHELL",
    title: "MARKETING DIRECTOR, VISIONARY WEB SOLUTIONS, INC.",
    content:
      "Mohamed is a top-notch web developer whose skills and professionalism have greatly contributed to our project’s success. He transformed our ideas into a functional, beautiful website that has significantly improved our online presence.",
    image: testimonialImg8,
  },
  {
    name: "DANIEL CARTER",
    title: "ENGINEERING MANAGER, TECHSAVVY SOLUTIONS, INC.",
    content:
      "Mohamed Faiz has proven to be an outstanding backend developer with exceptional technical skills and a strong work ethic. His ability to design and implement robust backend systems has greatly enhanced the functionality and performance of our applications.",
    image: testimonialImg8,
  },
];

class Testimonial extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-12">
            <Tabs>
              {testimonials.map((testimonial, index) => (
                <React.Fragment key={index}>
                  <TabPanel>
                    <div className="rn-testimonial-content text-center">
                      <div className="inner">
                        <p>{testimonial.content}</p>
                      </div>
                      <div className="author-info">
                        <h6>
                          <span>{testimonial.name}</span> - {testimonial.title}
                        </h6>
                      </div>
                    </div>
                  </TabPanel>
                </React.Fragment>
              ))}
              <TabList className="testimonial-thumb-wrapper">
                {testimonials.map((testimonial, index) => (
                  <Tab key={index}>
                    <div className="testimonial-thumbnai">
                      <div className="thumb">
                        <img src={testimonial.image} alt="Testimonial Images" />
                      </div>
                    </div>
                  </Tab>
                ))}
              </TabList>
            </Tabs>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Testimonial;
