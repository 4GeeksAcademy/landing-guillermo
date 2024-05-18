import React from "react";
import Card from "./Card";

const ContainerCards = () => {
    return(
  <>
  <div className="grid md:grid-cols-2 lg:grid-cols-4 mx-16">
    <Card />
    <Card />
    <Card />
    <Card />
    </div>
  </>);
};

export default ContainerCards;
