import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";

const SEARCH_ENDPOINT = "https://api.github.com/search/repositories?q=react";

interface Project {
  name: string;
  stars: number;
  forks: number;
}

const getReactRepositories = () =>
  axios
    .get(SEARCH_ENDPOINT)
    .then((result) => result.data.items)
    .then((repos) =>
      repos.map(({ forks, name: name, stargazers_count, html_url }) => ({
        forks,
        name,
        stars: stargazers_count,
        url: html_url,
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
    <div id="github-stars" className="paper">
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
