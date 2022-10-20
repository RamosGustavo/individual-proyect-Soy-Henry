import React from "react";
import { Link } from "react-router-dom";
import "./styles/LandingPage.css";

export default function LandingPage() {
    return (
        <div className="LandingPage">
            <Link to="/home">
                <div className="TitleCenter">
                <button className="boton">
                    <h1>INGRESAR!</h1>
                </button>
                </div>
            </Link>
            <img
                className="Portada"
                src="https://images.pexels.com/photos/3631659/pexels-photo-3631659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
            />
        </div>
    );
}
