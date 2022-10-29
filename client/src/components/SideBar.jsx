import { React, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    getDogs,
    getTemperamentsList,
    filterDogsByTemperament,
    orderByName,
    filterCreated,
    getBreeds,
    getDogsByBreed,
    filterDogsByMAXWeight,
    filterDogsByMINWeight,
    orderByWeight
} from "../redux/actions/index.js";
import "./styles/SideBar.css";

export default function SideBar() {
    const dispatch = useDispatch();
    const temperaments = useSelector((state) => state.temperaments).sort(
        function (a, b) {
            if (a < b) return -1;
            else return 1;
        }
    );
    const allDogs = useSelector((state) => state.allDogs);
    const breeds = useSelector((state) => state.breeds);

    const minWeights = allDogs
        .map((el) => el.weight_min)
        .sort(function (a, b) {
            return a - b;
        });
    const allDogsMinWeights = [...new Set(minWeights)];

    const maxWeights = allDogs
        .map((el) => el.weight_max)
        .sort(function (a, b) {
            return a - b;
        });
    const allDogsMaxWeights = [...new Set(maxWeights)];

    useEffect(() => {
        dispatch(getDogs());
        dispatch(getTemperamentsList());
        dispatch(getBreeds());
    }, [dispatch]);

    function handleClick(e) {
        e.preventDefault();
        dispatch(getDogs());
    }

    function handleClickOrder(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
    }
    function handleClickOrderWeight(e) {
        e.preventDefault();
        dispatch(orderByWeight(e.target.value));
    }
    function handleFilterCreated(e) {
        dispatch(filterCreated(e.target.value));
    }
    function handleFilteredByTemp(e) {
        e.preventDefault();
        dispatch(filterDogsByTemperament(e.target.value));
    }
    function handleFilteredByBreed(e) {
        e.preventDefault();
        dispatch(getDogsByBreed(e.target.value));
    }
    function handleFilteredMAXWeight(e) {
        e.preventDefault();
        dispatch(filterDogsByMAXWeight(e.target.value));
    }
    function handleFilteredMINWeight(e) {
        e.preventDefault();
        dispatch(filterDogsByMINWeight(e.target.value));
    }
    return (
        <Fragment>
            <div className="side">
                <div className="sideBarHeader">
                    <h4 className="header"> Find by filters:</h4>
                    <div
                        className="tooltip"
                        onClick={(e) => {
                            handleClick(e);
                        }}
                    >
                        <span className="material-icons refresh">loop</span>
                    </div>
                </div>
                <hr />
                <div className="filterSection">
                    <h5 className="filterHeader">Order by name</h5>
                    <select
                        onChange={(e) => {
                            handleClickOrder(e);
                        }}
                    >
                        <option defaultValue value="all" hidden>
                            Order
                        </option>
                        <option value="asc">A - Z</option>
                        <option value="desc">Z - A</option>
                    </select>
                </div>
                <div className="filterSection">
                    <h5 className="filterHeader">Order by weight</h5>
                    <select
                        onChange={(e) => {
                            handleClickOrderWeight(e);
                        }}
                    >
                        <option defaultValue value="all" hidden>
                            Order
                        </option>
                        <option value="asc">Heaviest 1º</option>
                        <option value="desc">Lightest 1º</option>
                    </select>
                </div>
                <div className="filterSection">
                    <h5 className="filterHeader">Filter by source</h5>
                    <select
                        onChange={(e) => {
                            handleFilterCreated(e);
                        }}
                    >
                        <option defaultValue value="all">
                            All Sources Dogs
                        </option>
                        <option value="created">Yours-Dog</option>
                        <option value="inDB">DBase-Dog</option>
                    </select>
                </div>
                <div className="filterSection">
                    <h5 className="filterHeader">Filter by temperament</h5>
                    <select onChange={(e) => handleFilteredByTemp(e)}>
                        <option value="all">All Temperaments</option>
                        {temperaments.map((temp) => {
                            return (
                                <option value={temp} key={temp}>
                                    {temp}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="filterSection">
                    <h5 className="filterHeader">Filter by breed</h5>
                    <select onChange={(e) => handleFilteredByBreed(e)}>
                        <option value="all">All Breeds</option>
                        {breeds.map((breed) => {
                            return breed ? (
                                <option value={breed} key={breed}>
                                    {breed}
                                </option>
                            ) : (
                                ""
                            );
                        })}
                    </select>
                </div>
                <div className="filterSection">
                    <h5 className="filterHeader">Filter by max weight</h5>
                    <select onChange={(e) => handleFilteredMAXWeight(e)}>
                        <option value="all">All Weights</option>
                        {allDogsMaxWeights.map((maxWeight) => {
                            return maxWeight ? (
                                <option value={maxWeight} key={maxWeight}>
                                    {maxWeight} kg
                                </option>
                            ) : (
                                ""
                            );
                        })}
                    </select>
                </div>
                <div className="filterSection">
                    <h5 className="filterHeader">Filter by min weight</h5>
                    <select onChange={(e) => handleFilteredMINWeight(e)}>
                        <option value="all">All Weights</option>
                        {allDogsMinWeights.map((minWeight) => {
                            return minWeight ? (
                                <option value={minWeight} key={minWeight}>
                                    {minWeight} kg
                                </option>
                            ) : (
                                ""
                            );
                        })}
                    </select>
                </div>
                <div className="filterSection">
                    <h5 className="filterHeader">Add a dog</h5>
                    <div className="addDog">
                        <Link to="/Create/" className="tooltip">
                            <span className="material-icons">New-Dog</span>
                            <span className="tooltiptext">Add your Woof 🐕</span>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
