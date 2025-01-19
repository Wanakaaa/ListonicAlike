import { useState } from "react";

import Logo from "./Logo";
import Login from "./Login";
import NavBar from "./NavBar";
import Lists from "../Display/Lists";
import Bin from "../Display/Bin";



export default function _MainNav() {
  const [selectedOption, setSelectedOption] = useState("MyLists");

  function getComponentToRender() {
    if (selectedOption === "MyLists") {
        return <Lists />
    } else {
        return <Bin />
    }
    }

  return (
    <div className="w-full flex">
      <div className="border-2 border-green-500 w-1/6 flex flex-col">
        <div>
        <Logo />
        <Login />
        <NavBar 
            setSelectedOption={setSelectedOption}
            selectedOption={selectedOption}
            /></div>
      </div>
      <div className="border-2 border-blue-500 w-5/6">
        {getComponentToRender()}
      </div>
    
    </div>
  );
}
