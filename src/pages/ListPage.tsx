import { useParams } from "react-router-dom";

export default function ListPage() {
  const params = useParams()
  console.log(params)
  return (
    <div>Liste n° {params.listId}</div>
  )
}
