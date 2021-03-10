import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import DisplayItems from "./DisplayItems";

const Forms = ({ a1, setA1 }) => {
  const [value, setValue] = useState("");
  const [edit, setEdit] = useState(false);
  const [items, setItems] = useState([]);
  //get value from input
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  //handling submit and adding item to the state varible items
  const handleSubmit = (e) => {
    e.preventDefault();
    let a = {
      value,
      id: v4(),
    };
    if (items) {
      setItems([...items, a]);
    } else {
      setItems([a]);
    }
    setValue("");
  };

  //removing item from the list
  const remove = (id) => {
    const a = items.filter((ele) => ele.id !== id);
    setItems(a);
  };

  //Editing item
  const edit1 = (id) => {
    setEdit(true);
    let a = items.filter((ele) => ele.id === id);
    setA1(a[0]);
    setValue(a[0].value);
    console.log("edit", a1);
  };

  //handling edit submit and updating item
  const handleSubmit1 = (e) => {
    e.preventDefault();

    let a2 = items.filter((ele) => {
      if (ele.id === a1.id) {
        ele.value = value;
      }
      return ele;
    });

    setItems(a2);
    setValue("");
    setEdit(false);
  };

  //renders only once when page get loaded
  //to fetch data from local storage
  useEffect(() => {
    const local = localStorage.getItem("data");
    if (items) {
      setItems(JSON.parse(local));
    }
    console.log("first");
  }, []);

  //re-renders everytime when items state value get updated
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(items));
    console.log("add1", items);
  }, [items]);

  //displaying form on condition rendering
  return (
    <div className="container">
      {edit ? (
        <form onSubmit={handleSubmit1}>
          <input
            type="text"
            placeholder="enter items"
            value={value}
            onChange={handleChange}
          />
          <button type="submit" className="submit">
            Edit
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="enter items"
            value={value}
            onChange={handleChange}
          />
          <button type="submit" className="submit">
            ADD
          </button>
        </form>
      )}
      <DisplayItems items={items} remove={remove} edit1={edit1} />
    </div>
  );
};

export default Forms;
