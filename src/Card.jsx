import React from "react";
import PropTypes from "prop-types";

const Card = ({
  title = "Default Title",
  description = "Default description for the Card component.",
  image = "src/assets/500x325.jpg",
}) => {
  return (
    <div className="m-5">
      <div>
        <img
          className="rounded-t-lg object-cover h-48 w-full"
          src={image}
          alt="Img 500x325"
        />
      </div>
      <div className="border p-3">
        <h1 className="font-bold text-center my-5	">{title}</h1>
        <p className="my-3 text-center min-h-28">{description}</p>
      </div>
      <div className="bg-gray-200 p-3 rounded-b-lg text-center">
        <button className="bg-blue-600 rounded-xl p-1 text-white">
          Find Out More!
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
};

export default Card;
