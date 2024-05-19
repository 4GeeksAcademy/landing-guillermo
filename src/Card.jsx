import React from "react";

const Card = () => {
  return (
    <div className="m-5">
      <div>
        <img
          className="rounded-t-lg sm:size-full"
          src="src/assets/500x325.jpg"
          alt=""
        />
      </div>
      <h1 className="font-bold text-center my-5 text-lime-200xl	">Card title</h1>
      <p className="my-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eligendi,
        ad quis non.
      </p>
      <div className="bg-gray-200 p-3 rounded-b-lg text-center">
        <button className="bg-blue-600 rounded-xl p-1 text-white">
          Find Out More!
        </button>
      </div>
    </div>
  );
};

export default Card;
