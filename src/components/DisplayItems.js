import React from "react";

const DisplayItems = ({ items, remove, edit1 }) => {
  return (
    <div>
      {items ? (
        <ul>
          {items.map((ele) => (
            <li key={ele.id} className="list">
              <p id="val">{ele.value}</p>
              <p>
                <button onClick={() => edit1(ele.id)} id="edit">
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button onClick={() => remove(ele.id)} id="delete">
                  <i className="bi bi-trash"></i>
                </button>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default DisplayItems;
