
import './App.css';
import { gsap } from "gsap";
import DataFetching from  './DataFetching';
import React, {useRef,useEffect} from 'react'

function App() {


  const h1Ref = useRef()
  const boxRef= useRef()
  useEffect(() => {
    gsap.to(h1Ref.current, { rotation: "+=360" });
  });


  return (
    <div>
      
      <h1 ref={h1Ref}> List Breweries </h1>
     
      
    <DataFetching/>
    </div>
  );
}

export default App;
