import React, { useState } from "react";
import ProductsList from "./components/products/products";
import Footer from "./components/footer/footer";
import Header from "./components/header";
import "../src/index.css";
import display from "./../node_modules/colorjs.io/src/display";
import { datas } from "./data";

// function Button(props){
//   return <button className={props.variant}>{props.children}</button>
// }

// function Wellcome(props){

//   const [count, setCount]= useState(0)
//   function handleClick(){
//     // setCount(count +1)
//     setCount((prev)=> prev + 1)
//     setCount((prev)=> prev + 1)
//   }
//   return(<><h1>Xin chào {props.name}</h1>
//   <button onClick={handleClick}>Click Me</button>
//   {count}
//   </> )
// }

function App() {
  const [isShow, setShow] = useState(false);
  const [limit, setLimit] = useState(10);

  return (
    <>
      <Header />
      <button
        onClick={() => {
          setShow(!isShow);
        }}
      >
        {isShow ? "Close" : "Open"}
      </button>
      {isShow ? <ProductsList limit={limit} /> : ""}
      {limit < datas.length ? (
        <button
          onClick={() => {
            setLimit(limit + 10);
          }}
        >
          See More
        </button>
      ) : (
        ""
      )}

      <Footer />
    </>
  );
}

export default App;
