import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteDetails, getDetails } from "../redux/actions/index.js";

export default function Details(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(props.match.params.id));
    return () => dispatch(deleteDetails());
  }, [dispatch, props.match.params.id]);

  const myDog = useSelector((state) => state.details);

  return (
    <Fragment>
      {myDog ? (
        <div key={myDog.id} className="bodix">
          <div className="mainContainer">
            <h2 className="mainTitle">{myDog.name}</h2>
            <img src={myDog.image} alt={myDog.name} className="image" />
            <div className="detailsContainer">
              {myDog.breed_group ? (
                <div className="breed_group">
                  <div className="imageSection">
                    <img
                      alt="a tiny svg dog"
                      className="detailsSVG"
                    />
                  </div>
                  <div className="infoSection">
                    <h3>Breed group: </h3>
                    <p>{myDog.breed_group}</p>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="life_span">
                <div className="imageSection">
                  <img
                    alt="a tiny svg dog"
                    className="detailsSVG"
                  />
                </div>
                <div className="infoSection">
                  <h3>Life span: </h3>
                  <p>{myDog.life_span}</p>
                </div>
              </div>
              <div className="weights">
                <div className="imageSection">
                  <img
                    alt="a tiny svg dog"
                    className="detailsSVG"
                  />
                </div>
                <div className="infoSection">
                  <h3>Weight: </h3>
                  <p>Min: {myDog.weight_min}</p>
                  <p>Max: {myDog.weight_max}</p>
                </div>
              </div>
              <div className="heights">
                <div className="imageSection">
                  <img
                    alt="a tiny svg bone"
                    className="detailsSVG"
                  />
                </div>
                <div className="infoSection">
                  <h3>Height: </h3>
                  <p>Min: {myDog.height_min}</p>
                  <p>Max: {myDog.height_max}</p>
                </div>
              </div>
              <br />
              <div className="temperament">
                <div className="infoSection">
                  {
                    <div>
                      <h3>Temperament: </h3>
                      <p>
                        {myDog.createdInDB
                          ? myDog.temperaments.map((el) => el.name).join(", ")
                          : myDog.temperament}
                      </p>
                    </div>
                  }
                </div>
              </div>
            </div>
            <Link to="/home">
              <button className="button">Back</button>
            </Link>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </Fragment>
  );
}
