import { useEffect, useState } from "react";

const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://65d8d211c96fbb24c1bc608f.mockapi.io/jobprofile");
      const data = await response.json();
      setItems((item) => [...item, ...data]);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handelScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2 && !isLoading) { // is loading is preventing from fetching multiple times.
        fetchData();
    }else return ;
  };

  useEffect(() => {
    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, []);

  return (
    <div className="p-2 mt-4">
      <ul className="">
        {items.map(item => (
          <li key={item.id} className="">{item.name}</li>
        ))}
      </ul>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  )
};

export default InfiniteScroll;
