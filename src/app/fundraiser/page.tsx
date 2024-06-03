import React from "react";
import Image from "next/image";

import Stages from "@/components/FundraiserStages/Stages";
import FundraiserTabs from "@/components/FundraiserTabs/Tabs";
import ProgressBar from "@/components/ProgressBar";
import ProjectImages from "@/components/ProjectImages";

const page = () => {
  return (
    <>
      <div>
        <div className="mx-auto mt-10 flex w-9/12 flex-row items-center justify-between">
          <h4 className="text-3xl">Masjid Abu Bakr Al-Siddeeq</h4>
          <div className="flex flex-row items-center rounded-lg bg-[#BFD9FC] p-4">
            <div>
              <Image
                width={50}
                height={50}
                src={"/MAB/ProjectImages/launch.png"}
                alt={"Launch"}
              />
            </div>
            <div className="flex flex-col">
              <p className="text-xs dark:text-black">Target launch Date</p>
              <span className="text-slate-600">March 15, 2024</span>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-5 w-9/12">
          <ProjectImages />
        </div>
        <div className="mx-auto w-9/12">
          <Stages />
        </div>
        <div className="mx-auto mt-10 flex w-9/12 flex-row justify-between gap-10">
          <div className="w-full">
            <FundraiserTabs />
          </div>
          <div className="flex w-[600px] flex-row justify-end">
            <ProgressBar value={80} />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
