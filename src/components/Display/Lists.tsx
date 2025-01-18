import { listsData } from "../../data/listsData";

export default function Lists() {
  function createNewList() {
    alert("Créer une nouvelle liste")
  }
  return (
    <div className="border-2 border-purple-500">
      <div className="flex justify-around border-2 border-red-500">
        <h1 className="border-2 border-orange-500">Vos listes de courses</h1>
        <button onClick={createNewList} className="border-2 border-orange-500">Créer une nouvelle liste</button>
      </div>
      <ul className="flex flex-col gap-2 border-2 border-green-500">
        {
        listsData.map((list) => (
          <li key={list.id}>
            {list.listName}
          </li>
        ))
        }
      </ul>
    </div>
  )
}



/*         <div className="flex justify-between">
            <h1>Vos listes de courses</h1>
            <button onClick={ClickMe}>Créer une nouvelle liste </button>
        </div>
        <ul className="flex flex-col gap-2">
            {listsData.map((list) => (
                <li key={list.id} className="p-4 border-2 border-purple-500">
                    {list.listName}
                </li>
            ))}
        </ul> */
