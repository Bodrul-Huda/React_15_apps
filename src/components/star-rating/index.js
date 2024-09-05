import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ noOfStarts = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleRating(getCurrentIndex) {
    setRating(getCurrentIndex);
  }
  function handleHover(getCurrentIndex) {
    setHover(getCurrentIndex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="py-20 mx-auto flex items-center justify-center">
      {[...Array(noOfStarts)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            onClick={() => handleRating(index)}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleMouseLeave()}
            className={
              index <= (hover || rating)
                ? "text-3xl text-yellow-300"
                : "text-3xl"
            }
          />
        );
      })}
    </div>
  );
}
