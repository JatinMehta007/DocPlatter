

export const MealDetails = () => {

  return (
    <div>
          <div>
            <p className="text-4xl m-8 text-gray-300 font-semibold">
              Patient Details
            </p>
            <hr className="border-gray-600" />
          </div>
    
         <div
                  className="grid grid-flow-col mt-9 group cursor-pointer"
                  style={{ gridTemplateColumns: "1% 98%" }}
                >
                  <div className="group-hover:bg-yellow-600 bg-zinc-800 w-[10px] h-14 pl-0"></div>
                  <div className="w-full flex flex-row">
                    <p className="pl-10 h-14 w-full  uppercase font-bold bg-zinc-800 text-zinc-200 text-sm ">
                      <p className="normal-case font-light pb-1">Patient Name</p>
                     {/* Display the patient's name */}
                    </p>
                  </div>
                </div>
                <div>
        
             
          </div>    
        
      </div>
    

  );
};

