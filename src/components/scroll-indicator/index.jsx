import { useEffect, useState } from "react";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState("false");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScroll() {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  if (loading) {
    return <div className="text-center text-2xl">Loading ...</div>;
  }

  //   console.log(scrollPercentage);
  return (
    <div>
      <div className="fixed min-w-full h-2 bg-gray-300">
        <div
          className={`h-2 bg-red-400 w-0`}
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>
      <h1 className="font-semibold text-2xl">Scroll Indicator</h1>
      <div className="container mx-auto">
        {data && data.length > 0
          ? data.map((item) => <p className="py-3">{item.title}</p>)
          : null}
      </div>
    </div>
  );
}
