import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "./constants";

function useRestaurant(id) {
  const [restaInfo, setRestaInfo] = useState([]);
  const [restaArr, setRestaArr] = useState([]);
  async function fetchData() {
    const data = await fetch(RESTAURANT_URL + id);
    const json = await data.json();
    setRestaArr(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
    setRestaInfo(json);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return [restaArr, restaInfo];
}

export default useRestaurant;
