import { useState } from "react";
import data from "./data";
import "./index.css";
const App = () => {
  const [persons, setPerson] = useState(data);

  const clearAll = () => setPerson([]);
  return (
    <div className="container">
      <h3> {persons.length} Birthdays Today</h3>
      {persons.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div className="person" key={id}>
            <img className="img" src={image} alt="Image" srcset="" />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
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
