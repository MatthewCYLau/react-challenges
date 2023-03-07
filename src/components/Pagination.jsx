import React, { useEffect, useCallback } from "react";
import axios from "axios";

const Pagination = () => {
  const POST_COUNT = 0;
  const PAGE_SIZE = 10;
  const [posts, setPosts] = React.useState([]);
  // eslint-disable-next-line
  const [postsCount, setPostsCount] = React.useState(0);
  // eslint-disable-next-line
  const [startIndex, setStartIndex] = React.useState(0);
  // eslint-disable-next-line
  const [endIndex, setEndIndex] = React.useState(startIndex + PAGE_SIZE);

  const fetchData = useCallback(async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_start=${startIndex}&_end=${endIndex}`
    );
    setPosts(data);
    setPostsCount(POST_COUNT);
  }, [startIndex, endIndex]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className="paper">
      <h2>Pagination</h2>
      {!!posts.length && (
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Pagination;
