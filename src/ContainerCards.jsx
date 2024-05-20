import React from "react";
import Card from "./Card";

const ContainerCards = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 mx-16 mb-16">
        <Card title="Card Title 1" description="Lorem ipsum dolor sit amet consectetur adipiscing elit malesuada ante, mus fusce maecenas eros turpis eleifend lacus."/>
        <Card title="Card Title 2" description="Lorem ipsum dolor sit amet consectetur adipiscing, elit turpis natoque odio imperdiet, porta risus convallis fusce habitant."/>
        <Card title="Card Title 3"/>
        <Card title="Card Title 4" image="src/assets/Roque-Nublo.jpg"/>
      </div>
    </>
  );
};

export default ContainerCards;
