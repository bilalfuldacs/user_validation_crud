import React, { useState } from "react";
import "./UserInput.css";
import Card from "../card/Card";
function UserInput(props) {
  const [name, setUserName] = useState(null);
  const [age, setUserAge] = useState(null);

  const Name = (event) => {
    setUserName(event.target.value);
  };
  const Age = (event) => {
    setUserAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const data = { name: name, age: age };

    props.addData(data);
    console.log(name);
    reset();
  };
  const reset = () => {
    setUserName("");
    setUserAge("");
  };
  return (
    <Card>
      {" "}
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={Name}
          value={name}
          placeholder="Enter your name"
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={age}
          placeholder="Enter your age"
          onChange={Age}
        />

        <input type="submit" value="Submit" />
      </form>
    </Card>
  );
}

export default UserInput;
