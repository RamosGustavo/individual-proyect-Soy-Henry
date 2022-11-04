import React, { Fragment } from "react";
import "./styles/NavBar.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function NavBar() {
    return (
        <Fragment>
            <div className="nav">
                <div className="TitleAndSearchBar">
                    <div className="logoAndTitle">
                        <Link to="/home">
                        </Link>
                        <div>
                        <Link to="/home">
                            <h1 className="logoAndTitle">WOW</h1>
                            </Link>
                            <p>Your dog page</p>
                        </div>
                    </div>
                    <div>
                        <SearchBar />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}