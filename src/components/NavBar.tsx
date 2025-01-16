type NavBarProps = {
  setSelectedOption: (option: string) => void
}

export default function NavBar({ setSelectedOption}: NavBarProps) {
  return (
    <div className="flex flex-col">
        <button onClick={() => setSelectedOption("Mes Listes")}>Mes Listes</button>
        <button onClick={() => setSelectedOption("Corbeille")}>Corbeille</button>
    </div>
  )
}
