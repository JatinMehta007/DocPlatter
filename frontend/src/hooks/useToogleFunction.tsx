import { useState } from "react"


type ToggleHookReturnType = {
    handleDropdownToggle: () => void;
    activeDropdownStatus: boolean;
  };
  
export const useToggleFunction =() : ToggleHookReturnType=>{
    const [activeDropdownStatus, setActiveDropdownStatus] = useState(false);

    const handleDropdownToggle =()=>{
        setActiveDropdownStatus(!activeDropdownStatus);
    }

    return {
        handleDropdownToggle,activeDropdownStatus
    }
}