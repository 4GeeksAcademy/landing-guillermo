import React from "react";
import PropTypes from 'prop-types';


const Card = (props) => {
  return (
    <div className="m-5">
      <div>
        <img
          className="rounded-t-lg sm:size-full"
          src="src/assets/500x325.jpg"
          alt=""
        />
      </div>
      <div className="border p-3">
      <h1 className="font-bold text-center my-5	">{props.title}</h1>
      <p className="my-3 text-center min-h-28">
        {props.description}
      </p>
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
};

Card.defaultProps = {
  title: "Default Title",
  description: "Default description for the card component.",
};



export default Card;
