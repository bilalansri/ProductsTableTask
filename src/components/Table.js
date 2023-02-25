import React, { useEffect, useState } from "react";
import Header from "./Head";

function Table({ data }) {
  const [sortArr, setSortArr] = useState(data || []);

  useEffect(() => {
    const sort = data && data.sort((a, b) => a.price - b.price);
    setSortArr(sort);
  }, [data]);

  const calculateValue = (item) => {
    const total = Number(
      item.price - (item.price * item.discountPercentage) / 100
    );
    return total.toFixed(2);
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <Header data={data} setSortArr={(e) => setSortArr(e)} />
          </tr>
        </thead>

        <tbody>
          {sortArr &&
            sortArr.map((item, i) => (
              <tr key={i}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.discountPercentage}</td>
                <td>{calculateValue(item)}</td>
                <td>{item.category}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
