import { characters } from "./DummyData";

export const gatherData = (notes=[], characterName) =>
    characters.find(char => char.name === characterName)