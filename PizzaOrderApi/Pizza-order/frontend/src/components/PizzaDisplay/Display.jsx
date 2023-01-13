import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./display.scss";
function Display() {
  const [data, setData] = useState("");
  useEffect(() => {
    const API = "http://127.0.0.1:8000/pizza/list/";
    const pizzas = async () => {
      const res = await fetch(API);
      const datas = await res.json();
      setData(datas);
    };
    pizzas();
  }, []);
  if (data) {
    return (
      <div className="display">
        <div className="cards">
          {data.map((pizza) => {
            return (
              <Link to={`/detail/${pizza.id}`} key={pizza.id} >
                <div className="card">
                  <div className="img">
                    <img src={pizza.photo} alt="" />
                  </div>
                  <div className="info">
                    <h3 className="title">{pizza.name}</h3>
                    <h5 className="cost">{pizza.cost} so'm</h5>
                    <p className="desc">{pizza.desc}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div className="display">no data</div>;
  }
}

export default Display;
