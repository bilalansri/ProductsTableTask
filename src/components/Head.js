import React, { useState } from "react";

function Header({ data, setSortArr }) {
  const [cols, setCols] = useState([
    "Title",
    "Price",
    "Percentage",
    "Annual",
    "Category",
  ]);

  const [sortType, setSortType] = useState("Descending");

  const sortArray = () => {
    switch (sortType) {
      case "Ascending":
        const sort = data.slice().sort((a, b) => a.id - b.id);
        setSortArr(sort);
        setSortType("Descending");
        break;

      case "Descending":
        const sort1 = data.slice().sort((a, b) => b.id - a.id);
        setSortArr(sort1);
        setSortType("Ascending");
        break;

      default:
        break;
    }
  };
  return (
    <>
      {cols.map((item, i) => {
        return (
          <th
            key={i}
            onClick={() => sortArray()}
            style={{
              border: "1px solid black",
              cursor: "pointer",
            }}
          >
            {item}
          </th>
        );
      })}
    </>
  );
}

export default Header;
