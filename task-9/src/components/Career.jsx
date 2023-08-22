import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Career() {
    return (
      <div id="career">
        <div className="home-text">
          <div className="center display-1">Welcome</div>
          <div className="center display-1">To</div>
          <div className="center display-1">Career Page...</div>
        </div>
        <style>
          {`
            body {
                background: linear-gradient(to bottom, #ff99ff 0%, #66ccff 100%);
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
    );
}

export default Career;
