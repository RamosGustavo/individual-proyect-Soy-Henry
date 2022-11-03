import React from "react";
import { Link } from "react-router-dom";
import "./styles/LandingPage.css";

export default function LandingPage() {
    return (
        <div className="LandingPage">
            <Link to="/home">
                <div className="TitleCenter">
                <button className="btn1">
                    <h1>INGRESAR!</h1>
                </button>
                </div>
            </Link>
            <img
                className="Portada"
                alt=""
            />
        </div>
    );
}
