import React, { Component } from "react";
import "./CharacterListMain.css";
import { Link } from "react-router-dom";
import CharacterCard from "../CharacterCard/CharacterCard";
import TekkenContext from "../TekkenContext";
import CharApiService from "../services/char-api-service";

export default class CharacterListMain extends Component {
  static contextType = TekkenContext;

  componentDidMount() {
    CharApiService.getCharacters().then(data => {
      this.context.setCharacters(data);
    });
  }

  render() {
    const { characters, characterSelect } = this.context;
    let filteredList = characters;

    return (
      <div className="CharListMain">
        <ul className="CharList">
          {filteredList.map((char, i) => (
            <li key={i} onClick={() => characterSelect(i)}>
              <Link
                className="CharacterList__link"
                to={`/character/${char.name}/framedata`}>
                <CharacterCard
                  name={char.name}
                  src={char.thumbnail}
                  alt={char.name}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
