import "./App.css";
import Main from "./pages/main";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  useEffect(() => {}, []);
  return (
    <div className="App h-auto bg-primary px-0 ">
      <div
        className="pb-1 bg-fixed h-auto"
        style={{
          backgroundImage: `url("https://grey-bot.s3.ap-southeast-1.amazonaws.com/vending-machine/background.jpg")`,
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <h1 className="text-9xl font-extrabold font-title drop-shadow-2xl text-white pt-10 ">
            Drunk Station
          </h1>
          <br></br>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
