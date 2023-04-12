import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import Collapsible from "./Collapsible";

const SEARCH_ENDPOINT = "https://api.github.com/search/repositories?q=react";

interface RepositoriesResponse {
  items: Item[];
}

interface Item {
  name: string;
  stargazers_count: number;
  forks: number;
}

interface Project {
  name: string;
  stars: number;
  forks: number;
}

const getReactRepositories = () =>
  axios
    .get<RepositoriesResponse>(SEARCH_ENDPOINT)
    .then((result) => result.data.items)
    .then((item) =>
      item.map(({ forks, name, stargazers_count }) => ({
        forks,
        name,
        stars: stargazers_count,
      }))
    );

const GithubStar = () => {
  const [shouldShowAll, setShouldShowAll] = useState(false);
  const [list, setList] = useState<Project[]>([]);
  const [listToRender, setListToRender] = useState<Project[]>([]);

  const fetchData = async () => {
    const res = await getReactRepositories();
    setList(res);
  };

  const sliceListByCount = useCallback(
    (count: number) => {
      const slicedList = list.slice(0, count);
      setListToRender(slicedList);
    },
    [list]
  );

  const handleOnShowAllClick = () => {
    setShouldShowAll(!shouldShowAll);
    if (shouldShowAll) {
      sliceListByCount(10);
    } else {
      setListToRender(list);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    sliceListByCount(10);
  }, [list, sliceListByCount]);

  return (
    <div id="github-stars" className="container">
      <h2>Github Stars</h2>
      <Collapsible>
        <span>
          Make an HTTP request to get all Github repositories related to React
        </span>
        <span>Render results in table; initially render ten items</span>
        <span>Click the Show All button to render all items</span>
      </Collapsible>
      {!!listToRender.length && (
        <table className="styled-table">
          <thead>
            <tr>
              <th>Package</th>
              <th>Stars</th>
              <th>Forks</th>
            </tr>
          </thead>
          <tbody>
            {listToRender.map((i) => (
              <tr key={`${i.name} + ${i.stars}`}>
                <td>{i.name}</td>
                <td>{i.stars}</td>
                <td>{i.forks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button className="action" onClick={handleOnShowAllClick}>
        {shouldShowAll ? "Show less" : "Show all"}
      </button>
    </div>
  );
};

export default GithubStar;
