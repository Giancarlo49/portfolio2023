import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Line } from "rc-progress";
// import ImageOne from "../../images/cheeseburger.jpg";
// import ImageTwo from "../../images/dog.jpg";
// import ImageThree from "../../images/lion.jpg";
// import ImageFour from "../../images/roboHand.jpg";
// import ImageFive from "../../images/seajpg.jpg";

// const portfolioData = [
//   {
//     id: 2,
//     name: "E-Commerce",
//     image: ImageOne,
//   },
//   {
//     id: 3,
//     name: "Portfolio",
//     image: ImageTwo,
//   },
//   {
//     id: 2,
//     name: "QuizApp",
//     image: ImageThree,
//   },
//   {
//     id: 3,
//     name: "TodoApp",
//     image: ImageFour,
//   },
//   {
//     id: 2,
//     name: "VocableTrainer",
//     image: ImageFive,
//   },
// ];

// const filterData = [
//   {
//     filterId: 1,
//     label: "All",
//   },
//   {
//     filterId: 2,
//     label: "Development",
//   },
//   {
//     filterId: 3,
//     label: "Design",
//   },
// ];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      {/* <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li key={item.filterId}>{item.label}</li>
          ))}
        </ul>
      </div> */}
    </section>
  );
};

export default Portfolio;
