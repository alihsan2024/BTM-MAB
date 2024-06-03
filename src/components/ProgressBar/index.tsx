import React from "react";

interface ProgressBarProps {
  value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  return (
    <div className="h-12 w-full rounded-lg bg-slate-100 p-1">
      <div
        className="flex h-full items-center justify-end rounded-md bg-gradient-to-r from-green-300 to-green-500 p-2"
        style={{ width: `${value}%` }}
      >
        <span className="mr-2 font-bold text-black">{value}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
