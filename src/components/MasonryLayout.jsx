import React from "react";
import Masonry from "react-masonry-css";
import Pin from "./Pin";

const breakpointObj = {
  default: 4,
  3000: 5,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};

const MasonryLayout = ({ pins }) => {
  return (
    <div>
      <Masonry
        className="flex animate-slide-fwd text-"
        breakpointCols={breakpointObj}
      >
        {pins?.map((pin) => {
          return <Pin key={pin._id} pin={pin} className="w-max" />;
        })}
      </Masonry>
    </div>
  );
};

export default MasonryLayout;
