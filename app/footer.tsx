import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return (
    <footer
      className="flex flex-row w-full items-center justify-center text-center text-white mt-14"
      style={{ height: "45px", backgroundColor: "#D9D9D9" }}
    >
      <FontAwesomeIcon
        className="sm:w-5 sm:h-5 text-white"
        icon={faCopyright}
      />
      <span className="prompt-medium ml-2 text-xs sm:text-sm">
        2024 Poppy Florist. All right reserved.
      </span>
    </footer>
  );
}
