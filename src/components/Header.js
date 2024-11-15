import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { name } = useContext(UserContext);
  const [login, setLogin] = useState("Login");
  const isOnline = useOnline();
  const cardItems=useSelector(store=>store.cart.items)
  return (
    <div className="flex items-center justify-between w-full py-2 px-6 bg-green-200">
      <Link to="/">
        <img className="w-36 border rounded-full" src={LOGO_URL} alt="logo" />
      </Link>
      <nav>
        <ul className="flex items-center justify-center gap-4">
          <li>
            <Link to={"/"}>online status: {isOnline ? "✅" : "🚫"}</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contcat us</Link>
          </li>
          <li>Serves</li>
          <li><Link to="/cart">Card (items - {cardItems.length})</Link></li>
          <button
            onClick={() => {
              login === "Login" ? setLogin("sing up") : setLogin("Login");
            }}
          >
            {login}
          </button>
          <li>{name}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
