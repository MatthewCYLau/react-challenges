import React, { useEffect } from "react";
import axios from "axios";

const Pagination = () => {
  const [posts, setPosts] = React.useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(posts);
  return (
    <div className="paper">
      <h2>Pagination</h2>
    </div>
  );
};

export default Pagination;
