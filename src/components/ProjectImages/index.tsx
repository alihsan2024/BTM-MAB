import React from "react";
import Image from "next/image";

import ProgressBar from "../ProgressBar";

const index = () => {
  return (
    <div className="mx-auto flex  w-full flex-row gap-3">
      <div className="h-full w-full max-w-[1050px]">
        <img
          className="w-full rounded-lg"
          alt="Video"
          src={"/MAB/ProjectImages/image 1589.png"}
        />
      </div>

      <div className="flex flex-col justify-between gap-2">
        <img
          alt="Video"
          src={"/MAB/ProjectImages/image 1592 (1).png"}
          className="h-1/4 w-full cursor-pointer rounded-lg object-cover"
        />
        <img
          alt="Video"
          src={"/MAB/ProjectImages/image 1592 (2).png"}
          className="h-1/4 w-full cursor-pointer rounded-lg object-cover"
        />
        <img
          alt="Video"
          src={"/MAB/ProjectImages/image 1592 (3).png"}
          className="h-1/4 w-full cursor-pointer rounded-lg object-cover"
        />
        <img
          alt="Video"
          src={"/MAB/ProjectImages/image 1592.png"}
          className="h-1/4 w-full cursor-pointer rounded-lg object-cover"
        />
      </div>
      <div className="relative">
        <img
          alt="Video"
          src={"/MAB/ProjectImages/MABAnim.png"}
          className="h-full w-full min-w-[300px] cursor-pointer rounded-lg object-cover"
        />
        <div className="absolute left-1/2 top-4 w-11/12 -translate-x-1/2 transform">
          <ProgressBar value={80} />
        </div>
      </div>
    </div>
  );
};

export default index;
