import { ChevronLeft, ChevronRight } from "lucide-react";
import { img } from "../../utils/constant,";
import { useEffect, useState } from "react";

export default function Courasel() {

const [activeIndex, setActiveIndex] = useState(0);

  const handelprevClick = () => {
    setActiveIndex(!activeIndex ? img.length - 1 : activeIndex - 1); // if index is less than 0 then render last img
  };

  const handelnextClick = () => {
    setActiveIndex((activeIndex + 1) % img.length); // so if it is last index it will redirect to first
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handelnextClick();
    }, 5000);
    return () => {
      clearTimeout(timer); // we should clear the timeout.
    };
  }, [activeIndex]);

  return (
    <div className="flex justify-center items-center mt-16">
      <button className="p-2 mr-6 rounded-full hover:bg-slate-200 " onClick={handelprevClick}>
      <ChevronLeft />
      </button>
      {img.map((e, i) => {
        return (
          <img
            src={e}
            alt="img"
            key={i}
            className={
              "w-[400px] h-[300px] object-cover rounded-xl " + (activeIndex === i
                ? "block"
                : "hidden")
            }
          />
        );
      })}
      <button className="p-2 ml-6 rounded-full hover:bg-slate-200" onClick={handelnextClick}>
      <ChevronRight />
      </button>
    </div>
  );
}
