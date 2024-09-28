import React from "react";

function About() {
  return (
    <div className="About" >
      <video className="About_video" autoPlay muted loop>
        <source
          src="src/IMG/videoAbout.mp4"
          type="video/mp4"
        />
      </video>
      <h1 className="About_h1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nesciunt voluptatibus cum! Mollitia, blanditiis sint. Error impedit modi odit nemo repellendus eaque aperiam repellat. Quibusdam quisquam sequi natus praesentium beatae.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum incidunt eos labore cupiditate officia velit numquam nisi, dignissimos minima commodi ducimus libero amet voluptates, consequatur dolor maxime fugiat eaque ut!
      </h1>
      
    </div>
  );
}

export default About;