import React from "react";
import "./style.scss";
import star from "./assets/star.svg";
function TestStyleSass() {
  return (
    <section className="contenairCard">
      <div className="contenairImgAtribut">
        <img
          className="kirito"
          src="https://images7.alphacoders.com/108/thumb-1920-1087956.jpg"
          alt="Kirito"
        />
        <div className="contenairAtribut">
          <h2>Kirito</h2>
          <ul>
            <li>
              Force: <span> &nbsp; 3/5</span>
            </li>
            <li>
              Agilité: <span>4/5</span>
            </li>
            <li>
              Armes: <span>Double épée</span>
            </li>
            <li>
              Anime: <span>Sword Art Online</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="contenairRate">
        <ul>
          <li>
            <img src={star} alt="star" />
          </li>
          <li>
            <img src={star} alt="star" />
          </li>
          <li>
            <img src={star} alt="star" />
          </li>
          <li>
            <img src={star} alt="star" />
          </li>
          <li>
            <img src={star} alt="star" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default TestStyleSass;
