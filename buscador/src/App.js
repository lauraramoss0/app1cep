
import { AiFillHeart } from "react-icons/ai";
function App() {
  return (
    <div className="container">

      <h1 className="title"> Buscador de CEP</h1>

      <div className="containerinput">

        <input type="text" placeholder="Digite aqui..." />
        <button className="buttonSearch"> 
        <AiFillHeart size={25} color="FFF"/>
        </button>

      </div>
    </div>
  );
}

export default App;
