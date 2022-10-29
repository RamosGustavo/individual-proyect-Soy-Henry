import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../redux/actions/index.js"
import Card from "./Card";
import "./styles/Home.css";
import Paginado from "./Paginado";
import NavBar from "./navBar";
import SideBar from "./SideBar";


function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs)

  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage;  
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);


function handleClick(e){
  e.preventDefault();
  dispatch(getDogs());
}


      return (
        <div className="Body">
      <h1 className="one">DOG WORLD</h1>
      <NavBar />
      <SideBar />
      <button className="Filter1" onClick={e => {handleClick(e)}}></button>
      <div className="Paginado">
        <Paginado
          dogsPerPage={dogsPerPage}
          allDogs={allDogs.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        </div>
    <div className="Cards">
        {
          currentDogs.map((el) => { 
            return  (
          <Card
            key={el.id}
            id={el.id}
            name={el.name}
            image={el.image}
            temperament={el.temperament}
            temperaments={el.temperaments}
          />
        )})}
        <div>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
