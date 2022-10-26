import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../redux/actions/index"
// import { Link } from "react-router-dom";
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


// function handleClick(e){
//   e.preventDefault();
//   dispatch(getDogs());
// }


      return (
        <div className="Body">
      <h1 className="one">DOG WORLD</h1>
      <NavBar />
      <SideBar />
      {/* <button className="Filter1" onClick={e => {handleClick(e)}}>volver a cargar los perros</button> */}
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
        {/* <Link to="/create">Crear Perro</Link> */}
        </div>
      </div>
      
    </div>
  );
}

export default Home;
