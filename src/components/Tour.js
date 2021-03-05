import React from "react";
import useFetch from "../customHook/useFetch";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

const Tour = ({ readMore, setIsEmpty, setReadMore }) => {
  const { data, loading, setData } = useFetch(url);
  const remove = (id) => {
    const after = data.filter((ele) => ele.id !== id);
    setData(after);

    if (after.length === 0) {
      setIsEmpty(true);
    }
  };
  return (
    <div>
      <h1>{loading ? <Loading /> : "Tour"}</h1>
      <section>
        <ul>
          {data.map((ele) => (
            <li key={ele.id}>
              <img src={ele.image} alt={ele.name} />
              <h3 id="name">{ele.name}</h3>
              <span id="price">Price : ${ele.price}</span>
              <p id="info">
                <span>Information : </span>
                {readMore ? ele.info : `${ele.info.substring(0, 200)}..`}
                <button onClick={() => setReadMore(!readMore)} id="read">
                  {readMore ? "Show less" : "Read More"}
                </button>
                <button
                  onClick={() => {
                    remove(ele.id);
                  }}>
                  Not Intrested
                </button>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Tour;
