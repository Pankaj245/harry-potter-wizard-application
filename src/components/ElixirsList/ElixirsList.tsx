import React from "react";
import { Elixir, Ingredient, Investors } from "../../types/types";
import "./ElixirsList.scss";

interface ElixirListProps {
  elixirs: Elixir[];
}

const ElixirList: React.FC<ElixirListProps> = ({ elixirs }) => {
  return (
    <table className="elixir-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Difficulty</th>
          <th>Ingredient</th>
          <th>Inventor</th>
          <th>Manufacturer</th>
        </tr>
      </thead>
      <tbody>
        {elixirs.map((elixir) => (
          <tr key={elixir.id}>
            <td>{elixir.name}</td>
            <td>{elixir.difficulty}</td>
            <td>
              {elixir.ingredients
                .reduce((acc: string[], item: Ingredient) => {
                  acc.push(item.name);
                  return acc;
                }, [])
                .join(", ")}
            </td>
            <td>
              {elixir.inventors
                .reduce((acc: string[], item: Investors) => {
                  acc.push(`${item.firstName}  ${item.lastName}`);
                  return acc;
                }, [])
                .join(", ")}
            </td>
            <td>{elixir.manufacturer}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ElixirList;
