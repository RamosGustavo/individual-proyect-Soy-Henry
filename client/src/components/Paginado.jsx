import React from "react";

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
    <div>
      {pageNumbers &&
        pageNumbers.map((number, index) => {
          return (
            <button key={index} onClick={() => setCurrentPage(number)}>
              {number}
            </button>
          );
        })}
    </div>
  );
}
