import React from "react";

export const Skeleton = () => {
  return (
    <div>
      <div role="status" className="animate-pulse ">
        <div className="flex  ">

            <div
              className="grid grid-flow-col mt-9 group cursor-pointer "
              style={{ gridTemplateColumns: "1% 98%" }}
              >
              <div className="group-hover:bg-yellow-600 bg-zinc-800 w-[10px] h-14  pl-0 "></div>
              {/* <div className="w-1 bg-slate-50"></div> */}
          <div className=" w-[900px] ml-[2px]  bg-zinc-800">
              <p className=" ml-[980px] w-32 h-14 p-2  bg-zinc-800  ">
                    </p>

              <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
