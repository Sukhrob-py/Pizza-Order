import React from "react";
import Nav from "../Nav/Nav";
import Display from '../PizzaDisplay/Display'

function Home() {
  return (
    <Nav>
      <div className="home">
        <Display/>
      </div>
    </Nav>
  );
}

export default Home;
