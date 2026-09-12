import React, { useState } from "react";

const Virtualization = ({ viewportHeight, itemHeight, arr }) => {
  const noOfVisibleItems =
    Math.floor(Math.ceil(viewportHeight / itemHeight)) + 3;

  const [indices, setIndices] = useState([0, noOfVisibleItems]);

  const visibleArr = arr.slice(indices[0], indices[1]);

  console.log(visibleArr);

  const handleScroll = (e) => {
    const { scrollTop } = e.target;

    const newStartingIndex = Math.floor(scrollTop / itemHeight);
    console.log("newStartingIndex", newStartingIndex);
    const endIndex = newStartingIndex + noOfVisibleItems;
    setIndices([newStartingIndex, endIndex]);
  };

  return (
    <div
      onScroll={handleScroll}
      style={{
        height: `${viewportHeight}px`,
        backgroundColor: "gray",
        width: "600px",
        overflow: "auto",
      }}
    >
      <div
        style={{
          height: `${arr.length * itemHeight}px`,
        }}
      >
        <div
          style={{
            height: `${indices * itemHeight}px`,
            transform: `translateY(${indices[0]* itemHeight}px)`
          }}
        >
          {visibleArr.map((item) => (
            <div
              key={item}
              style={{
                height: `${itemHeight}px`,
                padding: "5px",
                borderBottom: "2px solid black",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Virtualization;
