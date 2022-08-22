import React from "react";
import "./index.scss";
function LoadingSkeleton() {
  return (
    <div>
      <div class="card is-loading">
        <div className="row flex-row row g-2 px-2 pb-2">
          <div class="col">
            <div class="image rounded"></div>
          </div>
          <div class="col">
            <div class="image rounded"></div>
          </div>
        </div>
        <div class="content flex-row row g-2 px-2">
          <div className="pb-2">
            <p></p>
            <h2></h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingSkeleton;
