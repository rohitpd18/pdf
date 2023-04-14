import React from "react";
import "../assets/Css/Card.css";
import axios from "../axios";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  let navigate = useNavigate();
  
  return (
    <div onClick={()=>navigate("/"+props.id)} className="card">
      <div className="card-img">
        <img src={axios.getUri() + "/" + props.img} alt="..." />
      </div>
      <div className="card-body">
        <div className="card-heading">
          <h3 className="card-title">{props.name}</h3>
          <small className="card-subtitle">
            <p>Page: {props.noOfPage}</p>
            <p>Size: {props.pdfSize}MB</p>
          </small>
        </div>
        <p className="description">
          {props.description.length > 200
            ? props.description.slice(0, 200) + "..."
            : props.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
