import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import RestorentList from "./RestorenList";

const Restaurant = () => {
  const { id } = useParams();
  const [restarentArray, setRestarentArray] = useState([]);
  const [restaArr, restaInfo] = useRestaurant(id);
  const [showIndex, setShowIndex] = useState(null);

  useEffect(() => {
    setRestarentArray(
      restaArr.filter(
        (item) =>
          item?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );
  }, [restaArr]);
  return restaInfo.length === 0 && restaArr.length === 0 ? (
    <></>
  ) : (
    <div className="m-4">
      <h1 className="font-bold text-xl text-center">
        {restaInfo?.data?.cards[2].card.card.info.name}
      </h1>
      <h2 className="font-bold text-lg py-3 text-center">
        {restaInfo?.data?.cards[2].card.card.info.cuisines.join(",")}
      </h2>
      <div>
        {restarentArray.length !== 0 &&
          restarentArray.map((item, index) => (
            <RestorentList
              key={item.card.card.title}
              restarentList={item}
              showRestItem={showIndex === index ? true : false}
              setShowIndex={()=>setShowIndex(index )}
            />
          ))}
      </div>
    </div>
  );
};

export default Restaurant;
