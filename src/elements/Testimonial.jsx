import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import testimonialImg2 from "../assets/images/client/testimonial-2.jpg";
import testimonialImg8 from "../assets/images/client/testimonial-8.jpg";

const testimonials = [
  {
    name: "Aklima",
    title: "COO, AMERIMAR ENTERPRISES, INC.",
    content:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5eb48d3fef49df153d320521/764b8e44-aa9d-4985-baff-a67167a804ad/SamuraiToyFace.jpg?format=1000w",
  },
  {
    name: "Fatima Asrafy",
    title: "COO, AMERIMAR ENTERPRISES, INC.",
    content:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    image: testimonialImg2,
  },
  // ... add other testimonial objects here
  {
    name: "JON CUMMINS",
    title: "COO, AMERIMAR ENTERPRISES, INC.",
    content:
      "Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    image: testimonialImg8,
  },
  {
    name: "JON CUMMINS",
    title: "COO, AMERIMAR ENTERPRISES, INC.",
    content:
      "Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    image: testimonialImg8,
  },
  {
    name: "JON CUMMINS",
    title: "COO, AMERIMAR ENTERPRISES, INC.",
    content:
      "Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
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
