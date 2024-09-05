import { useEffect, useState } from "react";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

export default function ImageSlider(url, limit = 5, page = 1) {
  const [images, setImages] = useState([]);
  const [currentSlider, setCurrentSlider] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  async function fetchImage(getUrl) {
    try {
      setLoading(true);
      //   const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const response = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=5"
      );
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMessage(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== null) fetchImage(url);
  }, [url]);

  function handlePrevious() {
    setCurrentSlider(
      currentSlider === 0 ? images.length - 1 : currentSlider - 1
    );
  }

  function handleNext() {
    setCurrentSlider(
      currentSlider === images.length - 1 ? 0 : currentSlider + 1
    );
  }

  if (loading) {
    return <div className="text-center text-2xl">Loading...! please wait</div>;
  }

  if (errorMessage !== null) {
    return (
      <div className="text-center text-2xl">Error! Someting went Wrong</div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="relative flex items-center justify-center w-[600px] h-[400px]">
        <BsArrowLeftCircle
          onClick={() => handlePrevious()}
          className="absolute left-1 text-2xl text-white"
        />
        {images && images.length
          ? images.map((imageItem, index) => {
              return (
                <img
                  className={
                    currentSlider === index
                      ? "w-full h-full rounded-md  shadow-md"
                      : "hidden"
                  }
                  key={imageItem.id}
                  alt={imageItem.download_url}
                  src={imageItem.download_url}
                />
              );
            })
          : null}
        <BsArrowRightCircle
          onClick={() => handleNext()}
          className="absolute right-1 text-2xl text-white"
        />
        <span className="absolute flex bottom-1 rounded-full px-1">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  className={
                    currentSlider === index
                      ? "bg-white w-4 h-4 rounded-full px-2 mx-1 cursor-pointer"
                      : "bg-gray-400 w-4 h-4 rounded-full px-2 mx-1 cursor-pointer"
                  }
                  key={index}
                  onClick={() => setCurrentSlider(index)}
                ></button>
              ))
            : null}
        </span>
      </div>
    </div>
  );
}
