import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      const json = res.data;
      setData(json.products);
    });
  }, []);
  return (
    <div className="App">
      <Table data={data} />
    </div>
  );
}

export default App;
