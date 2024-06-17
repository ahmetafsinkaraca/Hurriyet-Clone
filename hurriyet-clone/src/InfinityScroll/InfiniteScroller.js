/* Yedek İçerik Farklı Yöntem
 */
/* import React, { useState, useEffect } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductCard from "./ProductCard";
import Loader from "./Loader";
import Gundem from "./data/gundem";
import './App.css'


const InfiniteScroller = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchData = async () => {

    setIsLoading(true);
    setError(null);

    try {
      const data = Gundem;

      setItems(prevItems => [...prevItems, ...data]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchData}
        hasMore={false}
        loader={<Loader />}
        endMessage={<p>No more data to load.</p>}
        style={{overflow:'hidden'}}
      >
        {items.map((item) => (
          <ProductCard data={item} key={item.id} />
        ))}
      </InfiniteScroll>
      {error && <p>Error:{error.message}</p>}
    </div>
  );
};

export default InfiniteScroller


 */