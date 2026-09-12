import React from "react";
import Virtualization from "./Virtualization";
import ReactVirtuoso from "./ReactVirtuoso";

const App = () => {
  const arr = Array.from({ length: 10000}, (_, index) => index + 1);

  // return (
  //   <div style={{ height: "100vh", display:"flex", justifyContent:"center", alignItems:"center" , backgroundColor:"black", fontSize: "20px", color:"white"}}>
  //     <Virtualization  viewportHeight={600} itemHeight={40} arr={arr} />
  //   </div>
  // )

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "black",
        fontSize: "20px",
        color: "white",
        padding: "10px"
      }}
    >
      <ReactVirtuoso list={arr} />
    </div>
  );
};

export default App;
