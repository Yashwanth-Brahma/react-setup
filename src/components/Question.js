import React, { useState } from "react";

const Question = ({ title, info }) => {
  const [readmore, setReadmore] = useState(false);
  return (
    <div className="card">
      <h3>
        {title}
        <button id="btn" onClick={() => setReadmore(!readmore)}>
          {readmore ? "-" : "+"}
        </button>
      </h3>
      {readmore ? <p className="info">{info}</p> : ""}
    </div>
  );
};

export default Question;
