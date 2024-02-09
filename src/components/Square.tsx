import { IconContext } from "react-icons";
import { RxCircle } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

interface Props {
  value: String;
  onSquareClick: () => void;
}

const Square = ({ value, onSquareClick }: Props) => {
  let icon;
  if (value === "x") {
    icon = <RxCross1 color="red"/>;
  } else if (value === "o") {
    icon = <RxCircle color="blue"/>;
  } else {
    icon = "";
  }

  return (
    <>
      <IconContext.Provider value={{ size: "3rem" }}>
        <button
          onClick={onSquareClick}
          className="h-20 w-20 bg-white flex items-center justify-center"
        >
          {icon}
        </button>
      </IconContext.Provider>
    </>
  );
};

export default Square;
