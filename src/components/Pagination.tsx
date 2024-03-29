import React, { useEffect, useCallback, useState } from "react";
import { returnPaginationLastPageStartIndex } from "../utils/utils";
import Loader from "../components/Loader";
import Collapsible from "./Collapsible";
import cn from "classnames";
import axios from "axios";

interface Post {
  id: string;
  title: string;
  body: string;
}

interface SearchIndexesState {
  startIndex: number;
  endIndex: number;
}

const Pagination = () => {
  const POST_COUNT = 100;
  const PAGE_SIZE = 10;
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line
  const [postsCount, setPostsCount] = useState<number>(0);
  const [searchIndexes, setSearchIndexes] = useState<SearchIndexesState>({
    startIndex: 0,
    endIndex: PAGE_SIZE,
  });

  const fetchData = useCallback(
    async (startIndex: number, endIndex: number) => {
      setLoading(true);
      const { data } = await axios.get<Post[]>(
        `https://jsonplaceholder.typicode.com/posts?_start=${startIndex}&_end=${endIndex}`
      );
      setPosts(data);
      setPostsCount(POST_COUNT);
      setLoading(false);
    },
    []
  );

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

  const isOnFirstPage = searchIndexes.startIndex <= 0;
  const isOnLastPage =
    searchIndexes.startIndex >=
    returnPaginationLastPageStartIndex(POST_COUNT, PAGE_SIZE);

  return (
    <div id="pagination" className="container">
      <h2>Pagination</h2>
      <Collapsible>
        <span>Make an HTTP request to get posts via JSON placeholder</span>
        <span>Render posts in table rows with pagination</span>
      </Collapsible>
      {loading ? (
        <Loader />
      ) : (
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
      <div className="pagination">
        <button
          disabled={isOnFirstPage}
          className={cn("bold icon", {
            disabled: isOnFirstPage,
          })}
          onClick={handleOnFirstPageClick}
        >
          <i className="fa-solid fa-arrow-left bold"></i>
        </button>
        <button
          disabled={isOnFirstPage}
          className={cn("icon", {
            disabled: isOnFirstPage,
          })}
          onClick={handleOnPreviousPageClick}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button
          disabled={isOnLastPage}
          className={cn("icon", {
            disabled: isOnLastPage,
          })}
          onClick={handleOnNextPageClick}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
        <button
          disabled={isOnLastPage}
          className={cn("bold icon", {
            disabled: isOnLastPage,
          })}
          onClick={handleOnLastPageClick}
        >
          <i className="fa-solid fa-arrow-right bold"></i>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
