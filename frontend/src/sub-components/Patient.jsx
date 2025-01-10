export const Patient=()=>{
    return(
        <div>
            <div>
        <p className="text-4xl m-8 text-gray-300 font-semibold" >Patient Names</p>
        <hr className="border-gray-600"/>
            </div>
         <div>
            
         <div
                className="grid grid-flow-col mt-9 "
                style={{ gridTemplateColumns: "1% 98%" }}
              >
                <div className="bg-yellow-600 w-[10px] h-14  pl-0 "></div>
                
                  <div className="w-full ">
                      <p className=" pl-10 h-14 bg-zinc-800 text-zinc-400 text-sm ">Patient Name</p>
                    {/* pateint name */}
                  <p className="">
                    click to add a meal
                  </p>
                  </div>
         </div>
        </div>
        
        
        </div>
    )
}