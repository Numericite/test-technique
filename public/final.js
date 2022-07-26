import { useEffect, useState } from "react";
import Card from "./Card";

function App() {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getCountries = () => {
    setIsLoading(true);
    fetch(
      `http://universities.hipolabs.com/search${
        searchName ? `?name=${searchName}` : ""
      }`
    ).then((res) => {
      res
        .json()
        .then((data) => {
          setData(data.slice(0, 9));
        })
        .finally(() => {
          setIsLoading(false);
        });
    });
  };

  useEffect(() => {
    getCountries();
  }, []);

  // useEffect(() => {
  //   getCountries();
  // }, [searchName]);

  const handleChange = (e) => {
    setSearchName(e.target.value);
  };

  return (
    <div>
      <h1>Test technique</h1>
      <input
        type="text"
        name="search"
        onChange={handleChange}
        value={searchName}
      />
      <button type="button" onClick={getCountries}>
        Valider
      </button>
      <p>{isLoading && "Chargement..."}</p>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((d) => (
          <Card key={d.name} {...d} />
        ))}
      </div>
    </div>
  );
}

export default App;
