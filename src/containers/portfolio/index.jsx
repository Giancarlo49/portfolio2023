import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Line } from "rc-progress";
import ImageOne from "../../images/cheeseburger.jpg";
import ImageTwo from "../../images/dog.jpg";
import ImageThree from "../../images/lion.jpg";
import ImageFour from "../../images/roboHand.jpg";
import ImageFive from "../../images/sea.jpg";
import "./styles.scss";

const portfolioData = [
  {
    id: 2,
    name: "E-Commerce",
    image: ImageOne,
    link: "",
  },
  {
    id: 3,
    name: "Portfolio",
    image: ImageTwo,
    link: "",
  },
  {
    id: 2,
    name: "QuizApp",
    image: ImageThree,
    link: "",
  },
  {
    id: 3,
    name: "TodoApp",
    image: ImageFour,
    link: "",
  },
  {
    id: 2,
    name: "VocableTrainer",
    image: ImageFive,
    link: "",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);
  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }
  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__image-wrapper">
                <a>
                  <img alt="projects" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
