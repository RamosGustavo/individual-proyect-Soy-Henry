import React from "react";
import { Link } from "react-router-dom";
import "./styles/DogCards.css";

export default function DogCard( { id, name, image, temperament, temperaments } ) {
    if (!temperaments) {
        return (
            <div>
                <div className="dogCard">
                    <Link to={`/home/${id}`}>
                        <div className="titleArea">
                            <h4 className="dogName">{name}</h4>
                        </div>
                        <div className="infoArea">
                            <div className="tempArea">
                                {temperament ? (
                                    <h5 className="dogTemp">{temperament}</h5>
                                ) : (
                                    <br />
                                )}
                            </div>
                            <div className="imageArea">
                                <img
                                    className="dogImage"
                                    src={image}
                                    alt={`A dog wich is ` + { temperament }}
                                    height="140px"
                                />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div className="dogCard">
                    <Link to={`/home/${id}`}>
                        <div className="titleArea">
                            <h4 className="dogName">{name}</h4>
                        </div>
                        <div className="infoArea">
                            <div className="tempArea">
                                {temperaments ? (
                                    <h5 className="dogTemp">
                                        {temperaments.map((temp) => `${temp.name} `).join(", ")}
                                    </h5>
                                ) : (
                                    <br />
                                )}
                            </div>
                            <div className="imageArea">
                                <img
                                    className="dogImage"
                                    src={image}
                                    alt={`A dog`}
                                    height="140px"
                                />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

//     return (

//         <div>

//             <div>
//                 <img src={image ? image : image = "https://www.nextdayflyers.com/blog/wp-content/uploads/2014/10/Pet-Flyer-1-768x1024.jpg"} alt="woof" width="200" height="250" />
//             </div>
//             <div>
//                 <div>
//             <Link to={`/home/${id}`}>
//             <h1 >{name}</h1>
//             </Link>
//                 </div>
//             <h2>{mood}</h2>
//             <h2>Peso minimo : {weight_min}  / Peso maximo : {weight_max} </h2>
//             </div>
//             </div>

//     )
// }
