import { listsData } from "../data/listsData"

export default function Lists() {
    function ClickMe() {
        return console.log("Cliqué")
    }
  return (
    <div>
        <div className="flex justify-between">
            <h1>Vos listes de courses</h1>
            <button onClick={ClickMe}>Créer une nouvelle liste </button>
        </div>
        <ul className="flex flex-col gap-2">
            {listsData.map((list) => (
                <li key={list.id} className="p-4 border-2 border-purple-500">
                    {list.listName}
                </li>
            ))}
        </ul>
    </div>
  )
}
