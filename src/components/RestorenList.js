import { useState } from "react";
import RestorentItem from "./RestorentItem";

const RestorentList = ({ restarentList, showRestItem, setShowIndex }) => {
  // const [showRestItem, setShowRestItem] = useState(true);
  function HandeleClick() {
    // setShowRestItem(!showRestItem);
    setShowIndex();
  }
  return (
    <div className="w-6/12 mx-auto">
      <div
        className=" bg-gray-200  my-2 px-1 py-2 flex justify-between items-center bordder rounded-lg"
        onClick={HandeleClick}
      >
        <span className="font-bold text-xl">
          {restarentList.card.card.title} (
          {restarentList.card.card.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      <div>
        {showRestItem &&
          restarentList.card.card.itemCards.map((item) => (
            <RestorentItem restorentData={item} key={item.id} />
          ))}
      </div>
    </div>
  );
};

export default RestorentList;
