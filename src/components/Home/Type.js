import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter class='typewriter'
      options={{
        strings: [
          "Cancer-researcher-in-training",
          "Passionate violinist",
          "Relentless athlete",
          "Science enthusiast",
          "Music lover",
          "Aspiring physician",
          "Computer science learner"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
