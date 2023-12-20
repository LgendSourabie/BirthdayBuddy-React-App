import { useState } from "react";
import data from "./data";
import List from "./List";
import Person from "./Person";

import "./index.css";
const App = () => {
  const [persons, setPerson] = useState(data);

  const clearAll = () => setPerson([]);
  return (
    <div className="container">
      <h3>
        {" "}
        {persons.length} {persons.length === 0 ? "Birthday" : "Birthdays"} Today
      </h3>
      {persons.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div className="person" key={id}>
            <List image={image} />
            <Person name={name} age={age} />
          </div>
        );
      })}
      <button type="button" className="btn btn-block" onClick={clearAll}>
        Clear All
      </button>
    </div>
  );
};
export default App;
