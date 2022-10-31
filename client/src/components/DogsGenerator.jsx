import React from "react";
import Card from "./Card";
import "./styles/DogsGenerator.css";

export default function DogsGenerator({ dogs }) {
    return (
        <div className="Cards">
            {dogs &&
                dogs.map((el) => {
                    return (
                        <Card
                            key={el.id}
                            id={el.id}
                            name={el.name}
                            image={el.image}
                            temperament={el.temperament}
                            temperaments={el.temperaments}
                        />
                    );
                })}
        </div>
    );
}
