import React, { useEffect, useState } from "react";
import "./Page.css";
import Location from "../Location/Location";
import ArrowLink from "../ArrowLink/ArrowLink";

function Page({ properties, passColorNavbar, info, image }) {
  useEffect(() => {
    passColorNavbar("#07504D");
  });

  return (
    <div
      className="page-content"
      style={{ backgroundColor: properties.background }}
    >
      <div className="box">
        <div className="box_text">
          <h2 className="page_title" style={{ color: properties.colorTitle }}>
            {info.nome}
          </h2>
          {properties.location ? <Location /> : undefined}
          <p
            className="description"
            style={{ color: properties.colorDescription }}
          >
            {info.descricao}
          </p>
          {properties.buttons ? (
            <div>
              <div className="box-button">
                <ArrowLink
                  text="Locais próximos"
                  color="#07504D"
                  link={"/locals"}
                />
              </div>
              <div className="box-button-last">
                <ArrowLink
                  text="Atividades"
                  color="#07504D"
                  link={"/activities"}
                />
              </div>
            </div>
          ) : undefined}
          {properties.homePage ? (
            <div id="about-know-more">
              <ArrowLink text="Saber mais" color="#07504D" link={"/about"} />
            </div>
          ) : undefined}
        </div>
        <img className="image" src={image}></img>
      </div>
    </div>
  );
}

export default Page;
