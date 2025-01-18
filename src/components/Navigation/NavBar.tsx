type NavBarProps = {
  setSelectedOption: (option: string) => void;
};

export default function NavBar({ setSelectedOption }: NavBarProps) {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <button
            onClick={() => {
              setSelectedOption("MyLists");
            }}
          >
            Mes Listes
          </button>
          <button
            onClick={() => {
              setSelectedOption("Bin");
            }}
          >
            Corbeille
          </button>
        </div>
        <div className="flex flex-col">
          <button onClick={() => {alert("page externe")}}>Aide</button>
          <button onClick={() => {alert("modale")}}>Paramètres</button>
        </div>
      </div>
    </>
  );
}
