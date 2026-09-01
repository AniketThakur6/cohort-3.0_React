import React, { useCallback, useMemo, useState } from "react";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";

const HomePage = () => {
  console.log("home is rendering...");

  const [count, setCount] = useState(0);
  const [user, setUser] = useState({name:"Aniket", id:786});

  const calculate = useMemo(() => {
    console.log("calculation is running....")
    let sum = 0;
    for (let i = 0; i < 10000; i++) sum += i;

    return sum;
  },[user])

  const greet = useCallback(() => {
    console.log("hello nice");
  },[])

  return (
    <div className="flex flex-col gap-6 ">
      <h1>HomePage </h1>
      <h1>
        count is <span>{count}</span>
      </h1>

      <h1>
        Name is <span>{user.name}</span>
      </h1>
      <h1>
        calculate <span>{calculate}</span>
      </h1>

      <div className="flex w-fit gap-4 mx-5">
        <button
          onClick={() => setCount(count + 1)}
          className="py-1 px-3 bg-blue-800"
        >
          count++
        </button>
        <button
          onClick={() => setUser(prev => ({...prev,name:"bola"}))}
          className="py-1 px-3 bg-blue-800"
        >
          Change-Name
        </button>
      </div>
      <AboutPage greet={greet} />
      <ContactPage greet={greet} />
    </div>
  );
};

export default HomePage;
