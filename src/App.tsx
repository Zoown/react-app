// React Rules
//  1. Functions cannot return multiple elements (ONLY 1) {WORKAROUND: Wrap all elements inside a <div> element or something else}
//  2. Hooks are component-based (All components has their own states, so you can make copies of same component that each keeps their own state)
//  3. Props are parameters, can destructure if only interested in specific data inside the whole prop (Exmple if interested only in var a, put this in parameter for a function) --- {var a}: Props
//  4. Benefit of prop destructuring is you skip having to use the additional scope example var a inside props can just use a.data instead of props.a.data
//  5. Treat props as inmutable(Read-only), conventional coding. (if you need to change something, make it a state because it needs the DOM updating functionality)
//  6. States are like using local function variables.
//  7.
//  8.
//  9.
// 10.

// JSX Rules
//  1. Does not have for loops
//  2. Can only contain HTML or react components (Cannot render dynamically like items.map(item => ))
//  3.
//  4.
//  5.
//  6.
//  7.
//  8.
//  9.
// 10.

// Improvements that this code could benefit from
// 1. Avoiding "Prop drilling" (Passing props down multiple layers of components, better way is either through "Redux" or "React context" which keeps a centralized storage place for all states)

// Shortcuts
// CTRL+D will create multiple cursors that matches the string you have selected (Good for changing many identical strings)

import ListGroup from "./components/ListGroup";
import Header from "./components/Header1-bootstrap";
import Footer from "./components/footer1";
import SidePanel from "./components/side-panel1";
import Content from "./components/content1";
import Card from "./Card";
import { Routes, Route } from "react-router-dom";
import houseImage from "./assets/images/test_house_5.jpg";
import FilterBar from "./components/content-filter-bar1";
import React, { useState } from "react";
function handleSelectCity(item: string) {
  console.log(item);
}

type StreetFilter = "Street 1" | "Street 2" | "Street 3";
type CityFilter = "City A" | "City B" | "City C";

function App() {
  const cardsData = [
    {
      image: houseImage,
      title: "Apartment 1",
      description: "Random Adress 1",
      link: "/about",
      street: "Street 1",
      city: "City A",
    },
    {
      image: houseImage,
      title: "Apartment 2",
      description: "Random Adress 1",
      link: "/about",
      street: "Street 2",
      city: "City A",
    },
    {
      image: houseImage,
      title: "Apartment 3",
      description: "Random Adress 1",
      link: "/about",
      street: "Street 3",
      city: "City A",
    },
    {
      image: houseImage,
      title: "Apartment 4",
      description: "Random Adress 2",
      link: "/about",
      street: "Street 1",
      city: "City B",
    },
    {
      image: houseImage,
      title: "Apartment 5",
      description: "Random Adress 3",
      link: "/about",
      street: "Street 2",
      city: "City B",
    },
    {
      image: houseImage,
      title: "Apartment 6",
      description: "Random Adress 1",
      link: "/about",
      street: "Street 3",
      city: "City B",
    },
    {
      image: houseImage,
      title: "Apartment 7",
      description: "Random Adress 2",
      link: "/about",
      street: "Street 1",
      city: "City C",
    },
    {
      image: houseImage,
      title: "Apartment 8",
      description: "Random Adress 3",
      link: "/about",
      street: "Street 2",
      city: "City C",
    },
    {
      image: houseImage,
      title: "Apartment 9",
      description: "Random Adress 1",
      link: "/about",
      street: "Street 3",
      city: "City C",
    },
  ];

  const [streetFilters, setStreetFilters] = useState<
    Record<StreetFilter, boolean>
  >({
    "Street 1": false,
    "Street 2": false,
    "Street 3": false,
  });

  const [cityFilters, setCityFilters] = useState<Record<CityFilter, boolean>>({
    "City A": false,
    "City B": false,
    "City C": false,
  });

  const handleStreetFilterChange = (filter: StreetFilter) => {
    setStreetFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  const handleCityFilterChange = (filter: CityFilter) => {
    setCityFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  const filteredCards = cardsData.filter(
    (card) =>
      (streetFilters[card.street as StreetFilter] ||
        !Object.values(streetFilters).some(Boolean)) &&
      (cityFilters[card.city as CityFilter] ||
        !Object.values(cityFilters).some(Boolean))
  );

  return (
    <div>
      <Header />
      <div className="d-flex">
        <SidePanel />
        <div className="flex-grow-1">
          <Content>
            <Routes>
              <Route
                path="*"
                element={
                  <div>
                    <div>
                      Welcome, you can find our available apartments in the
                      "Apartment" tab at the top. Here are the cities we provide
                      apartments in.
                    </div>
                    <ListGroup
                      items={["City A", "City B", "City C", "City D", "City E"]}
                      heading="Cities"
                      onSelectItem={handleSelectCity}
                    />
                  </div>
                }
              />
              <Route path="/about" element={<div>About Page</div>} />
              <Route path="/apartments2" element={<div>Apartments Page</div>} />
              <Route
                path="/apartments"
                element={
                  <div>
                    <FilterBar
                      streetFilters={streetFilters}
                      cityFilters={cityFilters}
                      onStreetFilterChange={handleStreetFilterChange}
                      onCityFilterChange={handleCityFilterChange}
                    />

                    <div className="d-flex flex-wrap">
                      {filteredCards.map((card, index) => (
                        <Card
                          key={index}
                          image={card.image}
                          title={card.title}
                          description={card.description}
                          link={card.link}
                          street={card.street}
                          city={card.city}
                        />
                      ))}
                    </div>
                  </div>
                }
              />
            </Routes>
          </Content>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
