import Card, { PromotedCard } from "./Card";
import React, { useContext, useEffect, useState } from "react";
// import CardLoading from "./CardLoading";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const CardSection = () => {
  const [apiData, setApiData] = React.useState([]);
  const [restList, setRestList] = React.useState([]);
  const [searchText, setSearchText] = useState("");
  const { name, setName } = useContext(UserContext);
  const RestorentOpen = PromotedCard(Card);
  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTIN"
    );
    const jsonData = await data.json();
    setRestList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setApiData(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }
  useEffect(() => {
    fetchData();
  }, [searchText]);

  const isOnline = useOnline();
  if (isOnline === false)
    return <h1> your ofline palce check your internet connection try aegin</h1>;
  if (restList.length === 0) {
    return (
      <div className="flex items-center justify-center flex-wrap">
        {/* <CardLoading />
        <CardLoading />
        <CardLoading />
        <CardLoading />
        <CardLoading />
        <CardLoading />
        <CardLoading />
        <CardLoading />
        <CardLoading /> */}
      </div>
    );
  }

  return (
    <>
      <input
        type="text"
        name=""
        id=""
        className="border-gray-600 border mx-4 rounded-xl shadow-lg"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        data-testid="searchInput"
      />
      <button
        data-testid="searchBtn"
        onClick={() => {
          const filterResList = apiData.filter((item) =>
            item.info.name
              .toLocaleLowerCase()
              .includes(searchText.toLocaleLowerCase())
          );
          setRestList(filterResList);
        }}
        className="bg-gray-300 px-2 py-1 rounded-2xl shadow-xl"
      >
        search
      </button>
      <input
        type="text"
        className="border ml-4 border-gray-600 rounded-xl pl-4"
        name=""
        id=""
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="flex items-center justify-between flex-wrap">
        {restList.map((resData) => (
          <Link key={resData.info.id} to={"/restaurant/" + resData.info.id}>
            {resData.info.isOpen ? (
              <RestorentOpen resData={resData} />
            ) : (
              <Card resData={resData} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
};

export default CardSection;
