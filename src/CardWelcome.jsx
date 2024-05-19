import React from "react";

const CardWelcome = () => {
  return (
    <div className="bg-gray-300 mx-20 mt-10 rounded-lg p-4 pb-10">
      <h1 className="md:text-5xl text-3xl font-bold">A Warm Welcome!</h1>
      <p className="my-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eligendi,
        ad quis non, delectus beatae sit aliquid dolorum veritatis, excepturi
        nam aut fugiat perspiciatis quae a. Error quam necessitatibus earum.
      </p>
      <button className="bg-blue-600 rounded-md p-1 text-white">
        Call to action!
      </button>
    </div>
  );
};

export default CardWelcome;
