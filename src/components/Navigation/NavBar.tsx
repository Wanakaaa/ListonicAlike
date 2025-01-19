type NavBarProps = {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
};

export default function NavBar({
  selectedOption,
  setSelectedOption,
}: NavBarProps) {
  return (
    <>
      <div className="flex flex-col gap-6 text-secondary-dark">
        <div className="flex flex-col ">
          <button
            className={`${
              selectedOption === "MyLists" ? "text-primary bg-primary-light hover:bg-primary-dark" : ""
            } hover:bg-secondary`}
            onClick={() => {
              setSelectedOption("MyLists");
            }}
          >
            Mes Listes
          </button>
          <button
            className={`${selectedOption === "Bin" ? "text-primary bg-primary-light hover:bg-primary-dark" : ""
            } hover:bg-secondary`}
            onClick={() => {
              setSelectedOption("Bin");
            }}
          >
            Corbeille
          </button>
        </div>
        <div className="flex flex-col">
          <button
            className=" hover:bg-secondary"
            onClick={() => {
              alert("page externe");
            }}
          >
            Aide
          </button>
          <button
            className=" hover:bg-secondary"
            onClick={() => {
              alert("modale");
            }}
          >
            Paramètres
          </button>
        </div>
      </div>
    </>
  );
}
