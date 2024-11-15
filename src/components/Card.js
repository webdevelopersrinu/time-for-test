import { IMG_URL_CONST } from "../utils/constants";
import UserContext from "../utils/UserContext";
const Card = ({ resData }) => {
  console.log(resData)
  const { name, totalRatingsString, cuisines, avgRating, cloudinaryImageId } =
    resData.info;
  return (
    <div className="flex flex-col justify-center items-center w-80 p-4 bg-gray-400 rounded-xl m-4" data-testid="res-card">
      <img
        src={IMG_URL_CONST + cloudinaryImageId}
        alt=""
        className="rounded-xl w-full"
      />
      <p className="font-bold text-xl">{name}</p>
      <div className="card-rating">
        {avgRating} ({totalRatingsString})
      </div>
      <p className="card-sub-title">{cuisines.join(",")}</p>
      <UserContext.Consumer>{({ name }) => <p className="text-xl font-semibold">{name}</p>}</UserContext.Consumer>
    </div>
  );
};

export const PromotedCard = (Card) => {
  return (props) => {
    return (
      <div>
        <label className="bg-black text-white px-3 py-1 rounded-xl ml-2 mt-2">
          Open
        </label>
        <Card {...props} />
      </div>
    );
  };
};

export default Card;
