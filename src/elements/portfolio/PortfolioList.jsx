import React, { Component } from "react";
import { Link } from "react-router-dom";

const PortfolioListContent = [
  {
    image: "image-1",
    category: "MESSAGING & SOCIAL",
    title: "MELLO CHAT: Messaging App For New Generation.",
  },
  {
    image: "image-2",
    category: "SAFE & LOCATION",
    title: "GUARDMe: Realtime Location Sharing",
  },
  {
    image: "image-3",
    category: "BROADCASTER & VIDEO CONNECT",
    title: "1'ONE: 1'ONE AI based Video Streaming Service",
  },
  {
    image: "image-4",
    category: "MANAGEMENT SOFTWARE",
    title: "SALES FLEX: CRM for Business Management",
  },
  {
    image: "image-3",
    category: "MANAGEMENT SYSTEM(HMS)",
    title: "HRAB REGISTIRY: HMS for Hospital Management",
  },
  // ADD GAME HERE
  {
    image: "image-4",
    category: "Development",
    title: "Getting tickets to the big show",
  },
];

class PortfolioList extends Component {
  render() {
    const { column, styevariation } = this.props;
    const list = PortfolioListContent.slice(0, this.props.item);
    return (
      <React.Fragment>
        {list.map((value, index) => (
          <div className={`${column}`} key={index}>
            <div className={`portfolio ${styevariation}`}>
              <div className="thumbnail-inner">
                <div className={`thumbnail ${value.image}`}></div>
                <div className={`bg-blr-image ${value.image}`}></div>
              </div>
              <div className="content">
                <div className="inner">
                  <p>{value.category}</p>
                  <h4>
                    <a href="/portfolio-details">{value.title}</a>
                  </h4>
                  <div className="portfolio-button">
                    <a className="rn-btn" href="/portfolio-details">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <Link className="" to="/portfolio-details"></Link>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default PortfolioList;
