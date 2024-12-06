import React, { useState } from "react";
import useFetch from "./hooks/useFetch";
import Filters from "./components/Filter/Filter";
import { Elixir } from "./types/types";
import ElixirList from "./components/ElixirsList";
import Error from "./components/Error";
import "./App.css";

const App: React.FC = () => {
  const [queryParams, setQueryParams] = useState<Record<string, string>>({});
  const url = `https://wizard-world-api.herokuapp.com/elixirs?${new URLSearchParams(
    queryParams
  ).toString()}`;

  const { data, loading, error } = useFetch<Elixir[]>(url, [queryParams]);

  const handleApplyFilters = (filters: Record<string, string>) => {
    setQueryParams(filters);
  };

  const handleResetFilters = () => {
    setQueryParams({});
  };

  return (
    <div className="app">
      <h1>Harry Potter Wizard</h1>
      <Filters
        onApplyFilters={handleApplyFilters}
        onResetFilters={handleResetFilters}
      />
      {loading && (
        <div className="skeleton">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="skeleton-row"></div>
          ))}
        </div>
      )}
      {error && <Error message={error} errorflag={true} />}
      {!loading && !error && data?.length ? (
        <ElixirList elixirs={data} />
      ) : (
        <Error
          message="Ohh Sorry!!! try with different input"
          errorflag={false}
        />
      )}
    </div>
  );
};

export default App;
