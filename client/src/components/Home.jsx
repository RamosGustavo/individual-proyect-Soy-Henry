import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs, getTemperamento } from "./actions/index";
import { Link } from "react-router-dom";
import Card from "./Card";
import "./styles/Home.css";
import Paginado from "./Paginado";



function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs)

  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage;  
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

function handleClick(e){
  e.preventDefault();
  dispatch(getDogs());
}


      return (
        <div className="Body">
      <Link to="/create">Crear Perraso</Link>
      <h1 className="titleHome">DOG WORLD</h1>
      <button className="Filter1" onClick={e => {handleClick(e)}}>volver a cargar los perros</button>
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
      </div>
      
    </div>
  );
}

export default Home;
