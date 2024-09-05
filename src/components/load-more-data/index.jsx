import { useEffect, useState } from "react";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProduct((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [count]);

  console.log(product);
  if (loading) {
    return (
      <div className="text-2xl font-semibold text-center">
        Product is Loading!
      </div>
    );
  }

  return (
    <div className=" container mx-auto">
      <div className="px-1 py-1 flex flex-wrap space-x-1 space-y-2">
        {product && product.length
          ? product.map((item) => (
              <div key={item.key} className="w-60 h-60 px-2 py-2">
                <img
                  src={item.thumbnail}
                  alt={item.thumbnail}
                  className="w-full h-3/4 mx-1 my-1 py-1"
                />
                <p className="px-1 py-1 text-wrap font-semibold">
                  {item.title}
                </p>
              </div>
            ))
          : null}
      </div>
      <div>
        <button
          onClick={() => setCount(count + 1)}
          className="py-1 px-2 hover:bg-gray-200 rounded-md w-full"
        >
          Load More
        </button>
      </div>
    </div>
  );
}
