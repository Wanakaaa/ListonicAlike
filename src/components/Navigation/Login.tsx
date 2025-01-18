export default function Login() {
    function loginTest() {
        alert("Modale qui prend toute la page")
    }
  return (
    <div className="flex flex-col">
        <button onClick={loginTest}>Se connecter</button>
    </div>
  )
}
