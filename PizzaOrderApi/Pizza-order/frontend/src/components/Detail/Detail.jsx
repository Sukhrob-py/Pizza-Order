import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../Nav/Nav";

import "./detail.scss";

function Detail() {
  const { id } = useParams();
  const [data, setData] = useState("");
  const [num, setNum] = useState(1);
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const OrderAPI = "http://127.0.0.1:8000/order/";
  useEffect(() => {
    const API = `http://127.0.0.1:8000/pizza/list/${id}`;
    const pizzas = async () => {
      const res = await fetch(API);
      const datas = await res.json();
      setData(datas);
    };
    pizzas();
  }, []);
  const register = async () => {
    const res = await fetch(OrderAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: localStorage.getItem("username") || "Aniq emas",
        pizza: data.name,
        num_of_pizza: num,
        cost: `${num} x ${data.cost}`,
        phone_num: phone,
        location: location,
      }),
    });
    const datam = await res.json();
    if (res.status == 201) {
      const repl = window.confirm(
        "Buyurtma yetkazildi\nSizga dellerlarimiz telefon qilishadi!"
      );
      if (repl) {
        window.location.replace("/");
      }
    } else {
      const repl2 = window.confirm(
        "Xatolik kuzatildi\nBoshqattan buyurtma bering!"
      );
      if (repl2) {
        window.location.replace("/");
      }
    }
  };
  if (localStorage.getItem("login")) {
    if (data && !data.detail) {
      return (
        <Nav>
          <div className="detail">
            <div className="card">
              <div className="img">
                <img src={data.photo} alt="" />
              </div>
              <div className="info">
                <h3 className="title">{data.name}</h3>
                <h5 className="cost">{data.cost} so'm</h5>
                <p className="desc">{data.desc}</p>
              </div>
            </div>
            <div className="btn">
              <label htmlFor="num">How Many do you want? (default : 1 ) </label>
              <input
                id="num"
                type="number"
                min="1"
                max="10"
                value={num}
                onChange={(e) => {
                  setNum(e.target.value);
                }}
                placeholder="How Many do you want?"
              />
              <input
                type="tel"
                placeholder="phone number"
                required
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="your location"
                required
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  register();
                }}
              >
                Order
              </button>
            </div>
          </div>
        </Nav>
      );
    } else {
      return (
        <Nav>
          <div className="detail">
            no product <br />
            <Link to="/">Home</Link>{" "}
          </div>
        </Nav>
      );
    }
  } else {
    window.location.pathname = "login/";
  }
}

export default Detail;
