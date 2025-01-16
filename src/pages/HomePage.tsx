import { useState } from "react"
import Header from "../components/Header/Logo"
import NavBar from "../components/NavBar"
import Lists from "../components/Lists"

export default function HomePage() {
  const [selectedOption, setSelectedOption] = useState("Mes Listes")
  return (
    <div className="border-red-500 border-2 flex">
      <div className="w-1/6 border-2 border-green-500">
        <Header />
        <NavBar setSelectedOption={setSelectedOption}/>
      </div>
      <div className="w-5/6 border-2 border-blue-500">
        {selectedOption === "Mes Listes" && <Lists />}
        {selectedOption === "Corbeille" && <div>Voici la corbeille</div>}
      </div>
    </div>
  )
}
