import React, { useEffect, useState } from "react";
import Tour from "./Tour";

const Display = () => {
  const [readMore, setReadMore] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  //   useEffect(() => {
  //     setIsEmpty(false);
  //   }, [isEmpty]);
  return (
    <div>
      {isEmpty ? (
        <button
          onClick={() => {
            setIsEmpty(false);
            <Tour
              setReadMore={setReadMore}
              readMore={readMore}
              setIsEmpty={setIsEmpty}
            />;
          }}>
          Refresh page
        </button>
      ) : (
        <Tour
          setReadMore={setReadMore}
          readMore={readMore}
          setIsEmpty={setIsEmpty}
        />
      )}
    </div>
  );
};

export default Display;
