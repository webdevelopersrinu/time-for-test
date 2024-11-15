import { useDispatch } from "react-redux";
import { IMG_URL_CONST } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const RestorentItem = ({ restorentData }) => {
  const dispatch = useDispatch();
  function handeleClick(restorentData) {
    dispatch(addItem(restorentData));
  }
  return (
    <div className="border-b-2 flex items-center justify-between">
      <div className="w-9/12 flex gap-2 flex-col my-2">
        <span className="font-bold text-2xl">
          {restorentData.card.info.name} - ₹
          {restorentData.card.info.price / 100 ||
            restorentData.card.info.defaultPrice / 100}{" "}
        </span>
        <div>{restorentData.card.info.description}</div>
      </div>
      <div className="w-3/12 flex items-center flex-col gap-2">
        <img
          className="w-full"
          src={IMG_URL_CONST + restorentData.card.info.imageId}
          alt=""
        />
        <button
          className=" top-2 bg-black text-white px-2 py-1 rounded-2xl"
          onClick={() => handeleClick(restorentData)}
        >
          add +{" "}
        </button>
      </div>
    </div>
  );
};

export default RestorentItem;
