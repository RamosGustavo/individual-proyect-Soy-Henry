import React from "react";
import "./styles/Paginado.css";

export default function Paginado({
  dogsPerPage,
  allDogs,
  paginado,
  currentPage,
  setCurrentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="Paginado">
      {pageNumbers &&
        pageNumbers.map((number, index) => {
          return (
            <button className="Paginado2" key={index} onClick={() => setCurrentPage(number)}>
              {number}
            </button>
          );
        })}
    </div>
  );
}
