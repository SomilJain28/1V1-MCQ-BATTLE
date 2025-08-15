import React from "react";
import posterImage from "../assets/images/poster.png";

const HomePage = () => {
  return (
    // Add the margin-top class 'mt-8' here
    <div className="container flex items-center justify-center flex-grow mx-auto mt-8">
      <div className="flex items-center justify-center">
        <img
          src={posterImage}
          className="rounded-xl w-[900px]"
          alt="1V1 MCQ Battle Poster"
        />
      </div>
    </div>
  );
};

export default HomePage;