import React from 'react';
import Fade from 'react-reveal/Fade';

const Landing = () => {

  return (
    <div className="container">
      <div className="bebasHuge">
        Hello
      </div>
      <div className="newDiv">
        <Fade bottom>
          <h2>
            Namaste, My name's Hit Patel.<br />
            Front-end, full-stack developer and designer based in GJ, IN.
            I try to give movement, potential, smartness, fun and interactivity to users in my work.
            Have fun and check out my projects!
          </h2>
        </Fade>
      </div>
    </div>
  );
}

export default Landing;