import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../assets/images/hero.jpg";

function Home() {
  return (
    <>
      <div className="relative pb-5 px-5 rounded-lg overflow-hidden bg-gray-900 m-8">
        <div className="absolute inset-0 z-0">
          <img src={HeroImg} alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 mb-24 mt-32 flex flex-col items-center justify-center h-full">
          <h1 className="text-center mb-4 text-6xl">Le Jardin d'OR</h1>
          <p className="text-white text-center mt-2">
            A dining experience to remember.
          </p>
          <Link to="/reserve">
            <button className="bg-dark-green text-white py-3 px-16 mt-16 rounded-lg">
              Reservation
            </button>
          </Link>
        </div>
      </div>

      <div>
        <p>here are some of our menu items</p>
      </div>

      <div>
        <p>location w google maps embed</p>
      </div>

      <div>
        <p>reviews, dont just take it from us</p>
      </div>


    </>
  );
}

export default Home;