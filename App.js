import React, { useState, useEffect } from "react";
import "./styles.css";
function fetch_data() {
  return fetch(
    "https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json"
  ).then((data) => data.json());
}
export default function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    let mounted = true;
    fetch_data().then((items) => {
      if (mounted) {
        setList(items);
      }
    });
    console.log(list);
    return () => (mounted = false);
  }, []);
  return <div className="App"></div>;
}
