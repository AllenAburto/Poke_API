import { Link } from "react-router-dom";
import pikachu from "../assets/pikachu.main.jpeg";

export const Home = () => {
  return (
    <div className="mt-5">
      <main className="text-center">
        <h1>¡Bienvenidos al Centro de Conocimiento Pokemon!</h1>
        <div className="d-flex flex-column align-items-center">
        <img src={pikachu} alt="Pikachu" style={{ width: "600px" }} />
        <Link className="btn btn-success mt-3" to="/pokemons">
          <div className="text-center gap-2">
            <i className="bi bi-briefcase"></i> Seleccionar Pokemones
          </div>
        </Link>
        </div>
      </main>
    </div>
  );
};
