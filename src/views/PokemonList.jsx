import {Col, Row} from "react-bootstrap";
import {useContext, useEffect} from "react";
import {PokemonContext} from "../context/PokemonContext.js";
import {PokemonShow} from "../components/PokemonShow.jsx";
export const PokemonList = () => {

  const {pokemons, params, setSearchParams} = useContext(PokemonContext);


  useEffect(() => {
    setSearchParams(params)
  }, []);

  return (
    <div>
      <h1 className="text-center">Listado de Pokemones</h1>
      <hr/>
      <Row>
        {
            pokemons.map(pokemon => (
            pokemon.id && <Col key={crypto.randomUUID()}>
              <PokemonShow pokemon={pokemon}/>
            </Col>
          ))
        }
      </Row>
      <hr/>
    </div>
);
};