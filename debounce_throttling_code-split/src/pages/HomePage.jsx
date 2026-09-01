import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [productData, setProductData] = useState([]);
  const [search, setSearch] = useState(null);
    const [scrollY, setScrollY] = useState(null)


  const getProductData =async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProductData(res.data);
  };

  const filterData = () => {
    let filter = productData.filter(elem => elem.title.toLowerCase().includes(search.trim().toLowerCase()) )
    setProductData(filter);
  };

  useEffect(() => {
    getProductData();
  }, []);

  // debounce
  useEffect(()=>{ 
      
    if(!search?.trim()) return ;

   let timer =  setTimeout(()=>{
      filterData();
    },1000)

    return ()=>{
      clearTimeout(timer)
    }

  },[search])


  //throttling
  let throttle = false ;
  useEffect(()=>{

    
    let handleScroll = () => {
      if(throttle) return ;
      throttle = true;
      console.log("scrolling.....")
      setScrollY(window.scrollY);

      setTimeout(()=>{
        throttle=false;
      },5000)
    }

    window.addEventListener("scroll",handleScroll);

    return ()=> window.removeEventListener("scroll",handleScroll)

  },[])

  return (
    <div className="flex flex-col gap-6">
      <h1>HomePage</h1>

      <input
        onChange={(e)=> setSearch(e.target.value)}
        className="p-2 w-90 bg-zinc-800 rounded pl-5"
        type="text"
        placeholder="search..."
      />

      <div className="flex flex-col gap-2">
        {productData.map((elem) => (
          <h1 key={elem.id} >{elem.title}</h1>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
