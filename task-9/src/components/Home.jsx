import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    return (
      <div className="pages">
      <div id="home">
        <div className="home-text">
          <div className="center display-1">Welcome</div>
          <div className="center display-1">To</div>
          <div className="center display-1">Home Page...</div>
        </div>
        <style>
        {`
          body {
              background: linear-gradient(to bottom, #ff99ff 0%, #ccff66 100%);
          }
          .home-text {
              width: 100vw;
              height: 100vh;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
          }
          .center {
              text-align: center;
              margin: 5px;
            }
          `}
        </style>
        
      </div>
      
      </div>
  );
}

export default Home;
