import { useEffect, useState } from "react";

export default function ScrollTopBotom() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products`);
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setData(result);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  if (loading) {
    return (
      <div className="text-2xl font-semibold text-center">
        Product is Loading!
      </div>
    );
  }

  function hangleScrollTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <div className="container mx-auto">
        <h1>Top section</h1>

        <ul>
          {data && data.products && data.products.length
            ? data.products.map((item) => (
                <li className="bg-teal-200 py-2 my-2">{item.title}</li>
              ))
            : null}
        </ul>
        <button onClick={hangleScrollTop} className="py-2 px-4 bg-slate-300">
          Scroll to top
        </button>
      </div>
    </div>
  );
}
