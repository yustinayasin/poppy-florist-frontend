import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faUser } from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  return (
    <nav className="flex flex-row w-full items-center justify-center relative px-5 sticky top-0 bg-white z-50">
      <ul className="menu flex flex-row w-96 content-around justify-around">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about-us">About Us</a>
        </li>
        <li>
          <a href="#services">Shop</a>
        </li>
        <li>
          <a href="#contact">Hiring</a>
        </li>
      </ul>
      <ul className="personal flex flex-row w-[4.5rem] justify-between absolute right-8 top-2">
        <li className="w-8 h-8 rounded-2xl bg-black">
          <a
            href="#bag"
            className="h-full p-0 m-0 text-center flex justify-center items-center"
          >
            <FontAwesomeIcon
              className="w-4 h-4 text-white"
              icon={faBagShopping}
            />
          </a>
        </li>
        <li className="w-8 h-8 rounded-2xl bg-black">
          <a
            href="#profile"
            className="h-full p-0 m-0 text-center flex justify-center items-center"
          >
            <FontAwesomeIcon className="w-4 h-4 text-white" icon={faUser} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
