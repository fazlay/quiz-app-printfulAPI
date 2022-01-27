import { data } from "autoprefixer";
import React, { Component, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Select from "react-select";

const HomePage = () => {
  const [userName, setUserName] = useState();
  const [catagory, setCatagory] = useState([]);
  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit triggred");
    console.log(e.target.name.value);
    setUserName(e.target.name.value);
    history.push("/quiz");
  };

  const handleSelect = (e) => {
    console.log(e.target);
  };
  let options = [];
  useEffect(() => {
    fetch("https://printful.com/test-quiz.php?action=quizzes")
      .then((res) => res.json())
      .then((data) => {
        setCatagory(data);
        options = catagory;
      });
  }, []);
  catagory.map((element) =>
    options.push({ value: element.title, label: element.title })
  );
  console.log(options);

  return (
    <div>
      <h1>THIS A HOLISTIC QUIZE APP</h1>
      <h1>{userName && userName}</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Select
        className="w-1/4 mx-auto"
        options={options}
        onChange={handleSelect}
      />
    </div>
  );
};

export default HomePage;
