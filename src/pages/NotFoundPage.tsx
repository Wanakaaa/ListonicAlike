import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="flex flex-col gap-2 font-bold text-blue-500">404 Not Found
      <Link to="/">Home from Link</Link>
    </div>
  )
}
