import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return (
    <footer
      className="flex flex-row items-center justify-center text-center text-white mt-14"
      style={{ height: "45px", backgroundColor: "#D9D9D9" }}
    >
      <FontAwesomeIcon className="w-5 h-5 text-white" icon={faCopyright} />
      <span className="prompt-medium ml-2">
        2024 Poppy Florist. All right reserved.
      </span>
    </footer>
  );
}
