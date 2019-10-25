import React from "react";
import Typewriter from "../components/typewriter";

function Home() {
  return (
    <section id="home">
      <Typewriter text="Hello!" lineLength="short" tag="h1" infinite={false} />
      <br />
      <Typewriter
        text="My name is Taylor - but most people call me August."
        lineLength="long"
        infinite={false}
        delay="1000"
        tag="p"
      />
      <br />
      <Typewriter
        text="I'm a developer located in the Greater Seattle area."
        lineLength="long"
        infinite={true}
        delay="4700"
        tag="p"
      />
    </section>
  );
}

export default Home;
