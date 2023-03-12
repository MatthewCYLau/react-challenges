import React, { useEffect, useCallback } from "react";
import { returnPaginationLastPageStartIndex } from "../utils/utils";
import axios from "axios";

const Pagination = () => {
  const POST_COUNT = 100;
  const PAGE_SIZE = 10;
  const [posts, setPosts] = React.useState([]);
  // eslint-disable-next-line
  const [postsCount, setPostsCount] = React.useState(0);
  const [searchIndexes, setSearchIndexes] = React.useState({
    startIndex: 0,
    endIndex: PAGE_SIZE,
  });

  const fetchData = useCallback(async (startIndex, endIndex) => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_start=${startIndex}&_end=${endIndex}`
    );
    setPosts(data);
    setPostsCount(POST_COUNT);
  }, []);

  const handleOnFirstPageClick = () =>
    setSearchIndexes({
      startIndex: 0,
      endIndex: PAGE_SIZE,
    });

  const handleOnLastPageClick = () => {
    const startIndex = returnPaginationLastPageStartIndex(
      POST_COUNT,
      PAGE_SIZE
    );
    setSearchIndexes({
      startIndex: startIndex,
      endIndex: startIndex + PAGE_SIZE,
    });
  };

  const handleOnNextPageClick = () =>
    setSearchIndexes((prevSearchIndexes) => ({
      ...prevSearchIndexes,
      startIndex: prevSearchIndexes.startIndex + PAGE_SIZE,
      endIndex: prevSearchIndexes.endIndex + PAGE_SIZE,
    }));

  const handleOnPreviousPageClick = () =>
    setSearchIndexes((prevSearchIndexes) => ({
      ...prevSearchIndexes,
      startIndex: prevSearchIndexes.startIndex - PAGE_SIZE,
      endIndex: prevSearchIndexes.endIndex - PAGE_SIZE,
    }));

  useEffect(() => {
    fetchData(searchIndexes.startIndex, searchIndexes.endIndex);
  }, [fetchData, searchIndexes.startIndex, searchIndexes.endIndex]);
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
      <div className="arrows">
        <span className="bold icon" onClick={handleOnFirstPageClick}>
          <i className="fa-solid fa-arrow-left bold"></i>
        </span>
        <span className="icon" onClick={handleOnPreviousPageClick}>
          <i className="fa-solid fa-arrow-left"></i>
        </span>
        <span className="icon" onClick={handleOnNextPageClick}>
          <i className="fa-solid fa-arrow-right"></i>
        </span>
        <span className="bold icon" onClick={handleOnLastPageClick}>
          <i className="fa-solid fa-arrow-right bold"></i>
        </span>
      </div>
    </div>
  );
};

export default Pagination;
