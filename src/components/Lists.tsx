import { listsData } from "../data/listsData"

export default function Lists() {
  return (
    <ul className="flex flex-col">
        {listsData.map((list) => (
            <li key={list.id}>
                {list.listName}
            </li>
        ))}
    </ul>
  )
}
